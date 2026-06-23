"""
calculate_short_tracks_distribution.py

Calcula a proporção de músicas curtas (menos de 2m30s e menos de 2m00s) 
no Top 200 do Spotify Brasil, ano a ano (2018 a 2025).
"""

import csv
import glob
import os
import json

CHARTS_DIR = r"C:\site-brega-funk\data-raw\charts"
OUT_DIR = r"C:\site-brega-funk\src\data"
os.makedirs(OUT_DIR, exist_ok=True)

# Limites em milissegundos
MS_2M30S = 2.5 * 60000  # 150.000 ms
MS_2M00S = 2.0 * 60000  # 120.000 ms

# Coletar arquivos
csv_files = sorted(glob.glob(os.path.join(CHARTS_DIR, "regional-br-weekly-*.csv")))

# Estrutura para acumular durações por ano
yearly_data = {year: {"total": 0, "under_2m30s": 0, "under_2m00s": 0} for year in range(2018, 2026)}

for filepath in csv_files:
    filename = os.path.basename(filepath)
    parts = filename.replace(".csv", "").split("-")
    if len(parts) >= 5:
        try:
            year = int(parts[3])
        except ValueError:
            continue
    else:
        continue
        
    if year not in yearly_data:
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            dur_ms = row.get("duration_ms")
            if dur_ms:
                try:
                    val = int(dur_ms)
                    yearly_data[year]["total"] += 1
                    if val < MS_2M30S:
                        yearly_data[year]["under_2m30s"] += 1
                    if val < MS_2M00S:
                        yearly_data[year]["under_2m00s"] += 1
                except ValueError:
                    pass

# Calcular proporções e imprimir resultados
results = []

print("=" * 75)
print("  PROPORCAO DE HITS CURTOS NO TOP 200 BRASIL (2018-2025)")
print("=" * 75)
print("  Ano  | Total Tracks | Menos de 2m30s (Pct)   | Menos de 2m00s (Pct)")
print("-" * 75)

for year in sorted(yearly_data.keys()):
    data = yearly_data[year]
    total = data["total"]
    if total > 0:
        pct_2m30s = (data["under_2m30s"] / total) * 100
        pct_2m00s = (data["under_2m00s"] / total) * 100
        
        results.append({
            "year": year,
            "total_tracks": total,
            "under_2m30s_count": data["under_2m30s"],
            "under_2m30s_pct": pct_2m30s,
            "under_2m00s_count": data["under_2m00s"],
            "under_2m00s_pct": pct_2m00s
        })
        
        # Gráfico ASCII seguro usando '#' para a coluna de < 2m30s
        bar_length = int(pct_2m30s / 2)
        bar = "#" * bar_length
        
        print(f"  {year} | {total:5d} tracks | {data['under_2m30s']:4d} ({pct_2m30s:5.1f}%) {bar:<15} | {data['under_2m00s']:4d} ({pct_2m00s:5.1f}%)")
    else:
        print(f"  {year} | Sem dados")

print("=" * 75)

# Salvar arquivo JSON
json_path = os.path.join(OUT_DIR, "proporcao_musicas_curtas.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"\nDados salvos em: {json_path}")
