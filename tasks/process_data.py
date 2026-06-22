import os
import csv
import json
import re
import urllib.request
import urllib.parse
import base64
from pathlib import Path

# --- CONFIGURAÇÃO ---
# Caso prefira não usar variáveis de ambiente, insira suas credenciais aqui:
SPOTIFY_CLIENT_ID = os.environ.get("SPOTIFY_CLIENT_ID", "")
SPOTIFY_CLIENT_SECRET = os.environ.get("SPOTIFY_CLIENT_SECRET", "")

RAW_CHARTS_DIR = Path("data-raw/charts")
OUTPUT_DIR = Path("src/data")
CONSOLIDATED_CHARTS_FILE = OUTPUT_DIR / "charts_br.csv"
FEATURES_FILE = OUTPUT_DIR / "tracks_features.csv"
ARTISTS_FILE = OUTPUT_DIR / "artists_meta.csv"
REMIXES_TEMPLATE_FILE = OUTPUT_DIR / "remixes_pairs_template.csv"

# Certificar que os diretórios existem
RAW_CHARTS_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def get_spotify_token(client_id, client_secret):
    """Obtém o token de acesso da API do Spotify usando Client Credentials Flow."""
    if not client_id or not client_secret:
        print("\n⚠️  Erro: Credenciais do Spotify não configuradas!")
        print("Defina as variáveis de ambiente SPOTIFY_CLIENT_ID e SPOTIFY_CLIENT_SECRET")
        print("ou edite as variáveis diretamente no topo do script.\n")
        return None

    print("🔑 Obtendo token de acesso do Spotify...")
    auth_string = f"{client_id}:{client_secret}"
    auth_bytes = auth_string.encode("utf-8")
    auth_base64 = base64.b64encode(auth_bytes).decode("utf-8")

    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": f"Basic {auth_base64}",
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = urllib.parse.urlencode({"grant_type": "client_credentials"}).encode("utf-8")

    req = urllib.request.Request(url, data=data, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode("utf-8"))
            return res_data["access_token"]
    except Exception as e:
        print(f"❌ Erro ao autenticar no Spotify: {e}")
        return None


def extract_track_id(url_or_id):
    """Extrai o ID da música a partir de uma URL do Spotify ou retorna o próprio ID."""
    if not url_or_id:
        return ""
    # Se for uma URL completa (ex: https://open.spotify.com/track/4ee...)
    match = re.search(r"track/([a-zA-Z0-9]+)", url_or_id)
    if match:
        return match.group(1)
    return url_or_id.strip()


def consolidate_spotify_charts():
    """Consolida arquivos CSV baixados de charts.spotify.com."""
    print("📂 Consolidando arquivos de charts na pasta data-raw/charts...")
    csv_files = list(RAW_CHARTS_DIR.glob("*.csv"))

    if not csv_files:
        print(f"⚠️  Nenhum CSV encontrado em '{RAW_CHARTS_DIR}'.")
        print("Por favor, baixe os arquivos CSV do Spotify Charts (ex: Top 200 Diário Brasil)")
        print("e coloque-os nessa pasta para iniciar.")
        return []

    tracks_seen = {}
    artists_seen = set()
    rows_written = 0

    with open(CONSOLIDATED_CHARTS_FILE, "w", newline="", encoding="utf-8") as outfile:
        writer = csv.writer(outfile)
        # Cabeçalho unificado
        writer.writerow(["date", "position", "track_name", "artist_name", "spotify_track_id", "streams"])

        for filepath in csv_files:
            # Tentar ler a data a partir do nome do arquivo (ex: regional-br-daily-2020-01-01.csv)
            date_match = re.search(r"\d{4}-\d{2}-\d{2}", filepath.name)
            file_date = date_match.group(0) if date_match else "unknown"

            with open(filepath, "r", encoding="utf-8") as infile:
                reader = csv.reader(infile)
                
                # Ignorar linhas de metadados do Spotify (o Spotify Charts costuma ter 1 ou 2 linhas de cabeçalho descritivo)
                header_found = False
                for row in reader:
                    if not row or len(row) < 2:
                        continue
                    # Identificar a linha do cabeçalho real
                    if "rank" in row[0].lower() or "position" in row[0].lower() or "uri" in row[0].lower() or "track" in row[1].lower():
                        header_found = True
                        # Descobrir índices das colunas
                        col_indices = {}
                        for i, name in enumerate(row):
                            name_lower = name.lower()
                            if "rank" in name_lower or "position" in name_lower:
                                col_indices["position"] = i
                            elif "track" in name_lower or "title" in name_lower:
                                col_indices["track_name"] = i
                            elif "artist" in name_lower:
                                col_indices["artist_name"] = i
                            elif "uri" in name_lower or "url" in name_lower or "id" in name_lower:
                                col_indices["uri"] = i
                            elif "stream" in name_lower:
                                col_indices["streams"] = i
                        continue
                    
                    if header_found:
                        # Obter dados baseados nos índices identificados
                        try:
                            pos = int(row[col_indices.get("position", 0)])
                        except ValueError:
                            continue
                        
                        # Filtrar apenas o Top 100 para simplificar a base de dados
                        if pos > 100:
                            continue
                            
                        track_name = row[col_indices.get("track_name", 1)]
                        artist_name = row[col_indices.get("artist_name", 2)]
                        uri = row[col_indices.get("uri", 3)]
                        streams = row[col_indices.get("streams", 4)]
                        
                        track_id = extract_track_id(uri)
                        
                        writer.writerow([file_date, pos, track_name, artist_name, track_id, streams])
                        rows_written += 1

                        if track_id:
                            tracks_seen[track_id] = {"name": track_name, "artist": artist_name}
                            
                        # Registrar artistas
                        for a in artist_name.split(","):
                            artists_seen.add(a.strip())

    print(f"✅ Consolidação concluída! {rows_written} registros salvos em '{CONSOLIDATED_CHARTS_FILE}'.")
    return tracks_seen, list(artists_seen)


def fetch_audio_features(track_dict, token):
    """Busca as características de áudio (Audio Features) na API do Spotify em lotes de 100."""
    if not track_dict:
        print("⚠️ Sem faixas consolidadas para buscar Audio Features.")
        return

    track_ids = list(track_dict.keys())
    total_tracks = len(track_ids)
    print(f"🎵 Buscando Audio Features para {total_tracks} faixas únicas no Spotify...")
    
    features_data = []
    
    # API do Spotify aceita no máximo 100 IDs por requisição
    batch_size = 100
    for i in range(0, total_tracks, batch_size):
        batch = track_ids[i:i + batch_size]
        ids_str = ",".join(batch)
        url = f"https://api.spotify.com/v1/audio-features?ids={ids_str}"
        
        req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
        try:
            with urllib.request.urlopen(req) as response:
                res = json.loads(response.read().decode("utf-8"))
                audio_features = res.get("audio_features", [])
                
                for feat in audio_features:
                    if not feat:
                        continue
                    tid = feat["id"]
                    features_data.append({
                        "spotify_track_id": tid,
                        "track_name": track_dict[tid]["name"],
                        "artist_name": track_dict[tid]["artist"],
                        "duration_ms": feat["duration_ms"],
                        "duration_s": feat["duration_ms"] / 1000.0,
                        "tempo": feat["tempo"], # BPM
                        "danceability": feat["danceability"],
                        "energy": feat["energy"],
                        "valence": feat["valence"],
                        "loudness": feat["loudness"]
                    })
            print(f"   Progresso: {min(i + batch_size, total_tracks)}/{total_tracks} faixas processadas.")
        except Exception as e:
            print(f"❌ Erro ao buscar lote de features: {e}")

    # Escrever arquivo CSV de audio features
    with open(FEATURES_FILE, "w", newline="", encoding="utf-8") as f:
        if features_data:
            fields = features_data[0].keys()
            writer = csv.DictWriter(f, fieldnames=fields)
            writer.writeheader()
            writer.writerows(features_data)
            print(f"✅ Audio Features salvas com sucesso em '{FEATURES_FILE}'.")
        else:
            print("⚠️ Nenhuma característica de áudio pôde ser baixada.")


def create_artists_meta_template(artists_list):
    """Cria um template CSV de metadados dos artistas para o usuário preencher manualmente."""
    if not artists_list:
        return
        
    print(f"👤 Gerando template de metadados para {len(artists_list)} artistas únicos...")
    
    # Ordenar artistas em ordem alfabética
    artists_list.sort()
    
    # Se o arquivo já existir, vamos ler as linhas já existentes para não sobrescrever o progresso do usuário
    existing_meta = {}
    if ARTISTS_FILE.exists():
        print(f"📂 Arquivo '{ARTISTS_FILE}' já existe. Preservando registros pré-existentes...")
        with open(ARTISTS_FILE, "r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                existing_meta[row["artist_name"]] = row

    with open(ARTISTS_FILE, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["artist_name", "cidade_origem", "estado_origem", "regiao", "eh_brega_funk", "observacoes"])
        
        for artist in artists_list:
            if not artist:
                continue
            if artist in existing_meta:
                # Manter o que o usuário já tinha preenchido
                row = existing_meta[artist]
                writer.writerow([
                    artist, 
                    row.get("cidade_origem", ""), 
                    row.get("estado_origem", ""), 
                    row.get("regiao", ""), 
                    row.get("eh_brega_funk", "0"), 
                    row.get("observacoes", "")
                ])
            else:
                # Criar nova linha em branco com valor padrão de brega funk em 0
                writer.writerow([artist, "", "", "", "0", ""])
                
    print(f"✅ Arquivo de metadados de artistas criado/atualizado em '{ARTISTS_FILE}'.")


def create_remix_template():
    """Cria um template de pares Original vs Remix para preenchimento manual do usuário."""
    if REMIXES_TEMPLATE_FILE.exists():
        return
        
    print(f"📄 Criando template para comparação de remixes em '{REMIXES_TEMPLATE_FILE}'...")
    with open(REMIXES_TEMPLATE_FILE, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([
            "original_track_id", "original_name", "original_artist",
            "remix_track_id", "remix_name", "remix_artist",
            "tipo_de_remix", "observacoes"
        ])
        # Inserir alguns exemplos clássicos comentados ou como guias
        writer.writerow([
            "example_id_1", "Nome da Música Original", "Artista Original",
            "example_id_2", "Nome da Versão Brega Funk / Remix", "Produtor / DJ do Remix",
            "Remix Oficial", "Exemplo ilustrativo: preencha com faixas reais do seu Spotify Charts"
        ])
    print("✅ Template de remixes criado.")


def main():
    print("==============================================")
    print("      PIPELINE DE DADOS - BREGA FUNK 15S      ")
    print("==============================================\n")
    
    # 1. Consolidar Charts
    track_dict, artists_list = consolidate_spotify_charts()
    
    if not track_dict:
        print("\n💡 Instruções rápidas:")
        print(f"1. Crie arquivos CSV na pasta '{RAW_CHARTS_DIR}'")
        print("   (Você pode baixar o Top 200 diário/semanal do Brasil em https://charts.spotify.com)")
        print("2. Rode este script novamente para consolidar os dados.")
        return

    # 2. Gerar Templates Manuais
    create_artists_meta_template(artists_list)
    create_remix_template()

    # 3. Chamar API do Spotify para obter Audio Features
    token = get_spotify_token(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET)
    if token:
        fetch_audio_features(track_dict, token)
        print("\n✨ Processamento de dados concluído com sucesso!")
    else:
        print("\n⚠️  Audio Features não puderam ser baixadas devido a falta de credenciais do Spotify.")
        print("Mas as tabelas de charts consolidada e de metadados dos artistas foram criadas.")
        print("Para baixar as Audio Features mais tarde, preencha as credenciais e rode o script novamente.")


if __name__ == "__main__":
    main()
