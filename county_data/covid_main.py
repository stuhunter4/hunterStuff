import pandas as pd

from case_analysis import export_case
from hosp_analysis import export_hosp

cases_df = pd.read_csv("resources/covid19cases_test.csv")
hosp_df = pd.read_csv("resources/covid19hospitalbycounty.csv")

if __name__ == '__main__':

    export_case(cases_df)
    export_hosp(hosp_df)