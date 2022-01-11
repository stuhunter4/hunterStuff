import pandas as pd

def export_case(cases_df):

    data = cases_df[["area", "cases", "deaths", "date", "population"]]
    data.columns = ["county", "cases", "deaths", "date", "population"]

    data = data.dropna()
    data = data.sort_values("date")

    clean_cases = data.loc[ (data["county"] != "Unknown") & (data["county"] != "Out of state")]
    counties = clean_cases["county"].unique().tolist()

    column_names = ["county", "cases", "deaths", "date", "population", "average_cases",
                    "cases_per_cap", "average_deaths", "deaths_per_cap"]
    weekly_df = pd.DataFrame(columns = column_names)

    for county in counties:
        df = clean_cases.loc[clean_cases["county"] == county]
        df = df.reset_index(drop=True)

        df["average_cases"] = df.cases.rolling(window=7).mean()
        df["cases_per_cap"] = round((df["average_cases"]/df["population"]) * 100000, 3)
        df["average_deaths"] = df.deaths.rolling(window=7).mean()
        df["deaths_per_cap"] = round((df["average_deaths"]/df["population"]) * 100000, 3)

        weekly_df = weekly_df.append(df)
    weekly_df = weekly_df.dropna()

    list_d = weekly_df.to_dict(orient='records')
    with open("static/js/cases_data.js", "w") as file:
        file.write("var case_data = %s;" % list_d)

if __name__ == '__main__':
    print('case analysis')