import pandas as pd

def export_hosp(hosp_df):

    hosp_df = hosp_df.fillna(0)
    clean_df = hosp_df[['county', 'todays_date', 'hospitalized_covid_confirmed_patients', 'icu_available_beds']]
    clean_df.columns = ['county', 'date', 'hospitalized_patients', 'icu_beds']
    clean_df = clean_df.sort_values('date')
    counties = clean_df['county'].unique().tolist()

    column_names = ['county', 'date', 'hospitalized_patients', 'icu_beds', 'hosp_average', 'icu_average']
    final_df = pd.DataFrame(columns = column_names)

    for county in counties:
    
        df = clean_df.loc[clean_df['county'] == county]
        df = df.reset_index(drop=True)
        df['hosp_average'] = df.hospitalized_patients.rolling(window=14).mean()
        df['icu_average'] = df.icu_beds.rolling(window=7).mean()
        final_df = final_df.append(df)

    final_df = final_df.fillna(0)

    list_d = final_df.to_dict(orient='records')
    with open("static/js/hospital_data.js", "w") as file:
        file.write(f"var hosp_data = {list_d};")

if __name__ == '__main__':
    print("hospital analysis")