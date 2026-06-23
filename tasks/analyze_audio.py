"""
analyze_audio.py

Usa ffmpeg + numpy para decodificar os MP3s de Surtada (Original e Remix),
extrair a curva de volume (RMS) segundo a segundo e gerar as formas de onda (waveforms).

Gera o arquivo src/data/surtada_waveforms.json
"""

import os
import subprocess
import numpy as np
import json

# Caminhos dos arquivos
ORIGINAL_PATH = r"C:\site-brega-funk\static\assets\img\songs\Surtada_spotdown.org.mp3"
REMIX_PATH = r"C:\site-brega-funk\static\assets\img\songs\Surtada - Remix Brega Funk_spotdown.org.mp3"
OUT_JSON = r"C:\site-brega-funk\src\data\surtada_waveforms.json"

def get_audio_duration(filepath):
    """Obtém a duração do áudio usando ffprobe."""
    cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", filepath
    ]
    try:
        out = subprocess.check_output(cmd)
        return float(out.decode("utf-8").strip())
    except Exception as e:
        print(f"Erro ao obter duração de {filepath}: {e}")
        return 0

def extract_rms_waveform(filepath, num_points=120):
    """
    Decodifica o MP3 via ffmpeg para PCM bruto,
    e calcula a energia RMS dividida em N pontos fixos.
    """
    duration = get_audio_duration(filepath)
    if duration == 0:
        return []
        
    print(f"Processando: {os.path.basename(filepath)}")
    print(f"  Duração: {duration:.1f}s | Gerando {num_points} pontos")

    # Comando ffmpeg para decodificar MP3 para PCM 16-bit mono 11025Hz
    # Taxa de amostragem baixa é suficiente para extrair volume, poupando memória
    sample_rate = 11025
    cmd = [
        "ffmpeg", "-v", "error", "-i", filepath,
        "-f", "s16le", "-ac", "1", "-ar", str(sample_rate), "-"
    ]
    
    # Executar e ler stream de bytes
    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
    raw_data, _ = process.communicate()
    
    # Converter bytes para array numpy de inteiros de 16 bits
    samples = np.frombuffer(raw_data, dtype=np.int16)
    
    if len(samples) == 0:
        print("  [ERRO] Nenhum dado de áudio decodificado.")
        return []
        
    # Normalizar samples para escala -1.0 a 1.0
    samples = samples.astype(np.float32) / 32768.0
    
    # Dividir o áudio em N blocos e calcular o RMS de cada bloco
    samples_per_block = len(samples) // num_points
    rms_points = []
    
    for i in range(num_points):
        start_idx = i * samples_per_block
        end_idx = start_idx + samples_per_block
        block = samples[start_idx:end_idx]
        
        if len(block) > 0:
            rms = np.sqrt(np.mean(block ** 2))
            rms_points.append(float(rms))
        else:
            rms_points.append(0.0)
            
    # Normalizar a forma de onda para que o pico máximo seja 1.0
    max_rms = max(rms_points) if rms_points else 1.0
    if max_rms > 0:
        rms_points = [r / max_rms for r in rms_points]
        
    return rms_points, duration

# Executar extrações
orig_waveform, orig_dur = extract_rms_waveform(ORIGINAL_PATH)
remix_waveform, remix_dur = extract_rms_waveform(REMIX_PATH)

# Estruturar o JSON final
# Inclui também a marcação dos trechos da letra em segundos (genius mapping)
waveforms_data = {
    "original": {
        "duration": orig_dur,
        "waveform": orig_waveform,
        "structure": [
            {"name": "Verso 1", "start": 0.0, "end": 43.5, "type": "verse"},
            {"name": "Ponte", "start": 43.5, "end": 55.8, "type": "intro"},
            {"name": "Refrão", "start": 55.8, "end": 81.0, "type": "chorus"},
            {"name": "Ponte", "start": 81.0, "end": 94.0, "type": "intro"},
            {"name": "Verso 2", "start": 94.0, "end": 124.5, "type": "verse"},
            {"name": "Refrão", "start": 124.5, "end": 150.0, "type": "chorus"},
            {"name": "Saída", "start": 150.0, "end": orig_dur, "type": "intro"}
        ]
    },
    "remix": {
        "duration": remix_dur,
        "waveform": remix_waveform,
        "structure": [
            {"name": "Intro", "start": 0.0, "end": 6.0, "type": "intro"},
            {"name": "Refrão", "start": 6.0, "end": 25.5, "type": "chorus"},
            {"name": "Verso 1", "start": 25.5, "end": 49.0, "type": "verse"},
            {"name": "Refrão", "start": 49.0, "end": 77.5, "type": "chorus"},
            {"name": "Ponte", "start": 77.5, "end": 86.5, "type": "intro"},
            {"name": "Verso 2", "start": 86.5, "end": 112.0, "type": "verse"},
            {"name": "Refrão", "start": 112.0, "end": remix_dur, "type": "chorus"}
        ]
    }
}

# Criar pasta de saída se não existir e salvar JSON
os.makedirs(os.path.dirname(OUT_JSON), exist_ok=True)
with open(OUT_JSON, "w", encoding="utf-8") as f:
    json.dump(waveforms_data, f, indent=2)

print(f"\nSucesso! Waveforms geradas em: {OUT_JSON}")
