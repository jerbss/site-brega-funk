import json
from pytrends.request import TrendReq

def get_trends_data():
    pt = TrendReq(hl='pt-BR', tz=180) # 180 is -3 hours
    pt.build_payload(['brega funk'], geo='BR', timeframe='all')
    df = pt.interest_by_region(inc_low_vol=True)
    
    # State mapping from pytrends geoName (in pt-BR) to BR state code
    mapping = {
        'Acre': 'AC',
        'Alagoas': 'AL',
        'Amapá': 'AP',
        'Amazonas': 'AM',
        'Bahia': 'BA',
        'Ceará': 'CE',
        'Distrito Federal': 'DF',
        'Espírito Santo': 'ES',
        'Goiás': 'GO',
        'Maranhão': 'MA',
        'Mato Grosso': 'MT',
        'Mato Grosso do Sul': 'MS',
        'Minas Gerais': 'MG',
        'Paraná': 'PR',
        'Paraíba': 'PB',
        'Pará': 'PA',
        'Pernambuco': 'PE',
        'Piauí': 'PI',
        'Rio Grande do Norte': 'RN',
        'Rio Grande do Sul': 'RS',
        'Rio de Janeiro': 'RJ',
        'Rondônia': 'RO',
        'Roraima': 'RR',
        'Santa Catarina': 'SC',
        'Sergipe': 'SE',
        'São Paulo': 'SP',
        'Tocantins': 'TO'
    }
    
    results = []
    for index, row in df.iterrows():
        val = int(row['brega funk'])
        state_code = mapping.get(index)
        
        if not state_code:
            # Fallback trying to match ignoring accents if there are encoding issues
            for k, v in mapping.items():
                if k.encode('ascii', 'ignore') == index.encode('ascii', 'ignore'):
                    state_code = v
                    index = k # Use the properly spelled name from our mapping
                    break
                    
        if state_code:
            # For the name field we'll use the properly spelled one from our mapping keys
            real_name = next((k for k,v in mapping.items() if v == state_code), index)
            results.append({
                "state": state_code,
                "name": real_name,
                "interest": val
            })
            
    # Sort by interest descending
    results = sorted(results, key=lambda x: x["interest"], reverse=True)
    
    with open('src/data/google_trends_states.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print("Data fetched and saved to src/data/google_trends_states.json")

if __name__ == "__main__":
    get_trends_data()
