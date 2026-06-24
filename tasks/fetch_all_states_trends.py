import os
import time
import pandas as pd
from pytrends.request import TrendReq

states = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
]

def fetch_all_states():
    # Target directory for the CSVs
    output_dir = 'src/data/trends_states_raw'
    os.makedirs(output_dir, exist_ok=True)
    
    # Initialize pytrends
    pt = TrendReq(hl='pt-BR', tz=180)
    
    compiled_data = {}
    
    for state in states:
        geo_code = f'BR-{state}'
        print(f"Baixando dados para {state} ({geo_code})...")
        
        success = False
        attempts = 0
        while not success and attempts < 3:
            try:
                # Build payload for 2018-01-01 to 2025-12-31
                pt.build_payload(['brega funk'], geo=geo_code, timeframe='2018-01-01 2025-12-31')
                df = pt.interest_over_time()
                
                if not df.empty:
                    # Save to individual CSV
                    csv_path = os.path.join(output_dir, f'geoMap_{state}.csv')
                    df.to_csv(csv_path)
                    print(f"  Salvo: {csv_path}")
                    
                    # Store for compilation
                    # Index is date, interest column contains values
                    for date, row in df.iterrows():
                        date_str = date.strftime('%Y-%m')
                        interest_val = int(row['brega funk'])
                        
                        if date_str not in compiled_data:
                            compiled_data[date_str] = {}
                        compiled_data[date_str][state] = interest_val
                        
                    success = True
                else:
                    print(f"  Aviso: Nenhum dado retornado para {state}.")
                    success = True # Skip or treat as done
                    
            except Exception as e:
                attempts += 1
                print(f"  Erro ao baixar {state} (tentativa {attempts}/3): {e}")
                time.sleep(5 * attempts) # Wait longer on failure
                
        # Sleep to avoid rate limiting
        time.sleep(3)

    # Convert compiled monthly data to a cleaner format and save
    if compiled_data:
        json_output = []
        for date_str, state_values in sorted(compiled_data.items()):
            json_output.append({
                "date": date_str,
                "states": state_values
            })
            
        import json
        compiled_path = 'src/data/google_trends_states_timeline.json'
        with open(compiled_path, 'w', encoding='utf-8') as f:
            json.dump(json_output, f, ensure_ascii=False, indent=2)
        print(f"Compilação mensal concluída com sucesso! Salvo em: {compiled_path}")

if __name__ == "__main__":
    fetch_all_states()
