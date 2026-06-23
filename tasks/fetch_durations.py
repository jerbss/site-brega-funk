"""
fetch_durations.py

Busca duration_ms de todas as faixas únicas dos charts semanais do Spotify Brasil.
Usa scraping da página de embed do Spotify (sem necessidade de conta ou API key).

Salva resultado incremental em data-raw/track_durations.json

Uso: python tasks/fetch_durations.py
"""

import csv
import glob
import json
import os
import re
import sys
import time
import urllib.request
import urllib.error

# ---------------------------------------------------------------------------
# Configuração
# ---------------------------------------------------------------------------
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(SCRIPT_DIR)
CHARTS_DIR = os.path.join(ROOT, "data-raw", "charts")
CACHE_FILE = os.path.join(ROOT, "data-raw", "track_durations.json")

DELAY_BETWEEN_REQUESTS = 0.35  # segundos entre requests (respeitar rate limits)
SAVE_INTERVAL = 50  # salvar cache a cada N tracks

# ---------------------------------------------------------------------------
# Scraping de duração via embed page
# ---------------------------------------------------------------------------

def fetch_duration_from_embed(track_id):
    """
    Extrai duration (ms) da página de embed do Spotify.
    O embed page inclui um campo "duration" no HTML/JSON embutido.
    """
    url = f"https://open.spotify.com/embed/track/{track_id}"

    req = urllib.request.Request(url, headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                       "AppleWebKit/537.36 (KHTML, like Gecko) "
                       "Chrome/131.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    })

    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode("utf-8")

            # Prioridade 1: campo "duration_ms" (exato)
            match = re.search(r'"duration_ms"\s*:\s*(\d+)', html)
            if match:
                return int(match.group(1))

            # Prioridade 2: campo "duration" (também em ms no embed)
            match = re.search(r'"duration"\s*:\s*(\d+)', html)
            if match:
                val = int(match.group(1))
                # Valores > 10000 são milissegundos; menores seriam segundos
                return val if val > 10000 else val * 1000

    except urllib.error.HTTPError as e:
        if e.code == 429:
            retry_after = int(e.headers.get("Retry-After", "10"))
            print(f"\n  [RATE LIMIT] Esperando {retry_after}s...")
            time.sleep(retry_after)
            return fetch_duration_from_embed(track_id)  # retry
        elif e.code == 404:
            return -1  # track removida/inexistente
        else:
            print(f"\n  [HTTP {e.code}] Track {track_id}: {e.reason}")
    except Exception as e:
        print(f"\n  [ERRO] Track {track_id}: {e}")

    return None


# ---------------------------------------------------------------------------
# Coleta de track IDs dos CSVs
# ---------------------------------------------------------------------------

def collect_unique_track_ids():
    """Lê todos os CSVs de charts e retorna set de track_ids únicos."""
    track_ids = set()

    csv_files = sorted(glob.glob(os.path.join(CHARTS_DIR, "regional-br-weekly-*.csv")))

    for filepath in csv_files:
        with open(filepath, "r", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                uri = row.get("uri", "")
                if uri.startswith("spotify:track:"):
                    track_id = uri.split(":")[-1]
                    track_ids.add(track_id)

    return track_ids


def load_cache():
    """Carrega cache existente."""
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_cache(cache):
    """Salva cache no disco."""
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=1)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("=" * 60)
    print("  FETCH DURATIONS — Spotify Charts Brasil")
    print("  (via embed page scraping, sem conta/API)")
    print("=" * 60)

    # 1. Coletar track IDs
    print("\n[1/3] Coletando track IDs dos charts...")
    all_ids = collect_unique_track_ids()
    print(f"  {len(all_ids)} track IDs únicos encontrados")

    # 2. Carregar cache
    print("\n[2/3] Carregando cache existente...")
    cache = load_cache()
    cached_count = sum(1 for v in cache.values() if v is not None)
    print(f"  {cached_count} tracks já em cache")

    # 3. Filtrar IDs que ainda faltam
    missing_ids = [tid for tid in all_ids if tid not in cache]
    print(f"  {len(missing_ids)} tracks faltando buscar")

    if not missing_ids:
        print("\n  Tudo já está em cache! Nada a fazer.")
        print_stats(cache, all_ids)
        return

    # Estimativa de tempo
    est_minutes = (len(missing_ids) * DELAY_BETWEEN_REQUESTS) / 60
    print(f"\n  Tempo estimado: ~{est_minutes:.0f} minutos")
    print(f"  (Ctrl+C para interromper — o progresso é salvo incrementalmente)\n")

    # 4. Buscar durações
    print("[3/3] Buscando durações via embed pages...")
    fetched = 0
    failed = 0
    total = len(missing_ids)

    try:
        for i, tid in enumerate(missing_ids):
            duration = fetch_duration_from_embed(tid)

            if duration is not None and duration > 0:
                cache[tid] = duration
                fetched += 1
            elif duration == -1:
                cache[tid] = None  # track removida, marcar para não tentar de novo
                failed += 1
            else:
                failed += 1

            # Salvar cache periodicamente
            if (i + 1) % SAVE_INTERVAL == 0:
                save_cache(cache)

            # Progresso
            pct = (i + 1) / total * 100
            sys.stdout.write(
                f"\r  Progresso: {i + 1}/{total} ({pct:.1f}%) "
                f"| {fetched} ok | {failed} falha"
            )
            sys.stdout.flush()

            time.sleep(DELAY_BETWEEN_REQUESTS)

    except KeyboardInterrupt:
        print("\n\n  [INTERROMPIDO] Salvando progresso...")

    # Salvar cache final
    save_cache(cache)
    print(f"\n\n  Cache salvo em: {CACHE_FILE}")

    # Estatísticas
    print_stats(cache, all_ids)


def print_stats(cache, all_ids):
    """Imprime estatísticas de cobertura."""
    covered = sum(1 for tid in all_ids if tid in cache and cache[tid] is not None and cache[tid] > 0)
    removed = sum(1 for tid in all_ids if tid in cache and cache[tid] is None)
    total = len(all_ids)
    pct = covered / total * 100 if total > 0 else 0

    print("\n" + "=" * 60)
    print("  RESULTADO FINAL")
    print("=" * 60)
    print(f"  Total de tracks únicos:    {total}")
    print(f"  Com duration_ms:           {covered} ({pct:.1f}%)")
    print(f"  Tracks removidas/404:      {removed}")
    print(f"  Sem dados:                 {total - covered - removed}")

    # Distribuição de durações
    if covered > 0:
        durations = [cache[tid] for tid in all_ids
                     if tid in cache and cache[tid] is not None and cache[tid] > 0]
        avg_ms = sum(durations) / len(durations)
        min_ms = min(durations)
        max_ms = max(durations)

        print(f"\n  Duração média:   {avg_ms / 60000:.1f} min ({int(avg_ms)} ms)")
        print(f"  Duração mínima:  {min_ms / 60000:.1f} min ({int(min_ms)} ms)")
        print(f"  Duração máxima:  {max_ms / 60000:.1f} min ({int(max_ms)} ms)")

    print("=" * 60)


if __name__ == "__main__":
    main()
