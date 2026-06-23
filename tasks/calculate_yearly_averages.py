"""
calculate_yearly_averages.py

Lê todos os CSVs de charts semanais, calcula a duração média das músicas 
do Top 200 por ano (2018 a 2025), exibe em minutos e salva em JSON.
"""

import csv
import glob
import os
import json

CHARTS_DIR = r"C:\site-brega-funk\data-raw\charts"
OUT_DIR = r"C:\site-brega-funk\src\data"
os.makedirs(OUT_DIR, exist_ok=True)

# Coletar arquivos
csv_files = sorted(glob.glob(os.path.join(CHARTS_DIR, "regional-br-weekly-*.csv")))

# Estrutura para acumular durações por ano
yearly_durations = {year: [] for year in range(2018, 2026)}

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
        
    if year not in yearly_durations:
        continue

    with open(filepath, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            dur_ms = row.get("duration_ms")
            if dur_ms:
                try:
                    yearly_durations[year].append(int(dur_ms))
                except ValueError:
                    pass

# Calcular médias e salvar
results = []

print("=" * 65)
print("  DURACAO MEDIA DO TOP 200 BRASIL POR ANO (2018-2025)")
print("=" * 65)

for year in sorted(yearly_durations.keys()):
    durations = yearly_durations[year]
    if durations:
        avg_ms = sum(durations) / len(durations)
        avg_min = avg_ms / 60000.0
        minutes = int(avg_min)
        seconds = int((avg_min - minutes) * 60)
        formatted_time = f"{minutes}:{seconds:02d}"
        
        results.append({
            "year": year,
            "duration_ms": avg_ms,
            "duration_min": avg_min,
            "formatted": formatted_time,
            "sample_size": len(durations)
        })
        
        # Gráfico ASCII seguro usando '#'
        bar_length = int((avg_min - 2.5) * 30)  # escala focando entre 2.5 e 3.5 min
        bar_length = max(1, bar_length)
        bar = "#" * bar_length
        
        print(f"  {year} | {formatted_time} ({avg_min:.3f} min) | {bar:<30} | {len(durations)} tracks")
    else:
        print(f"  {year} | Sem dados")
print("=" * 65)

# Salvar arquivo JSON de saída
json_path = os.path.join(OUT_DIR, "duracao_media_anos.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"\nDados salvos em JSON: {json_path}")
