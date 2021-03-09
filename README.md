# hunterStuff:
<p>Personal space for exploring and presenting diffent data sets, challenges, and solutions for continuous learning purposes.  Hosted from my GitHub repository by GitHub Pages.</p>
<p>Some pages have been developed within their own folders in this repository, while the other projects were developed in their respective repositories.</p>

<p>https://stuhunter4.github.io/hunterStuff/index.html</p>

<h2>Core Folders and Notebooks Described:</h2>

<h3>bubble_chart: </h3>
<p>Bubble chart exploring whether common claims about political differences in the United States, regarding an educational or urban-rural divide, exists among California counties.  Bubble chart generated using Plotly JavaScript graphing library.</p>
<p><strong>bubble_data_crunch.ipynb</strong>Imports preprocessed census.gov data and 2016 presidential election data from the New York Times.  Data sets are manipulated and combined to export a list of dictionaries found in static/js/data.js for use in plotting.</p>
<hr>
<h3>census_facts: </h3>
<p>Project to emulate the QuickFacts page on census.gov by creating a table of data from the dropdown menu.  Data was collected from census.gov using Python API requests.</p>
<p><strong>unemployment_crunch.ipynb: </strong>Import larger dataset of unemployment in California and process into a clean dataset for unemployment rate by county; for export.</p>
<p><strong>Census_pd_melt.ipynb: </strong>Imports all census.gov data gathered using Python API requests to combine, format, and export census data for populating a table.</p>
<hr>
<h3>choropleth_map: </h3>
<p>Explores migration flow from California to other states between 2010 and 2019, with data from census.gov.  Includes a Plotly generated choropleth map of the U.S. that updates from a dropdown menu, and a Plotly generated chart breaking down migration from California by age group.</p>
<p>The data referenced in the visualizations was processed in a different repository's notebook.</p>
<p><strong>choropleth_maker.ipynb: </strong>Contains previous work for creating a Python Plotly choropleth map of COVID-19 cases by county in California.  This format was not amenable to the JavaScript variant and preserved for future use.</p>
<hr>
<h3>county_data: </h3>
<img src="https://github.com/stuhunter4/hunterStuff/blob/main/ReadMe/county_data.jpg" alt="county_data">
<p>This space emulates a COVID-19 tracker on kqed.org.  Two Plotly generated charts and a table of data are updated from a dropdown menu, displaying the seven-day average for COVID-19 cases and deaths, per 100,000 individuals, for a selected county in California.  This metric has been the primary method of measuring COVID-19 trends by the state of California, and informs the level of COVID-19 related restrictions for a county.</p>
<p>This folder also contains a resources folder for various CSV files used in notebooks and image files used on the website.</p>
<p><strong>data_cruncher.ipynb: </strong>The purpose of this notebook is to streamline updates on a weekly basis by: importing the most recent case data downloaded, processing the dataset and exporting the new format for use in our charts and table.  As an aside, this notebook also contains Python for creating static charts for each county.</p>
<p>I update the data on this page every Wednesday; it takes less than 5 minutes to update with the help of my data_cruncher notebook.</p>
<hr>
<h3>covid_ppe: </h3>
<p>Project that looks at the change in total quantity filled for 29 varieties of personal protective equipment over time, by county in California.  Manipulated a 462MB dataset with over 8.8 million data entries into a 1.8MB dataset for plotting.  Twenty-nine stacked Plotly charts update through a dropdown menu.  The various notebooks are designed to process the source CSV dataset downloaded from California Open Data Portal.</p>
<p><strong>ppe_cruncher.ipynb: </strong>Imports ppe dataset and calculates the total quantity filled each seven-day period per product, per county.  Creates ppe_crunched.csv, a version of the original dataset formatted for accessibility and visualizations.</p>
<p><strong>ppe_charts.ipynb: </strong>Imports the processed dataset ppe_crunched.csv for final cleanup steps.  Function created to generate a chart for each ppe item, 29 in total, for county name provided.  A second function generates a single chart from the data, given a county and ppe specified.</p>
<p><strong>ppe_cruncher_updates.ipynb: </strong>A second ppe_cruncher notebook was created to handle new ppe data efficiently by processing only novel data, to compile and create a new, complete dataset.  Exports the updated dataset as ppe_crunched CSV with the date attached, and a CSV containing only the novel, processed data as weekly_df_backup (also with date attached).</p>
<p><strong>ppe_charts_updates.ipynb: </strong>Covers similar operations and objectives as ppe_charts.ipynb above, but specific to the updated dataset processed in ppe_cruncher_updates.ipynb.</p>
<p><strong>ppe_cruncher_specific_weeks.ipynb: </strong>This notebook addresses a specific issue in our abover ppe_cruncher notebooks: our iterations fail to return data from the final week of information.  The approach to processing the dataset remains the same, except that only one or more specific week(s) of data is collected.</p>
<p><strong>ppe_data_converter.ipynb: </strong>Imports and combines multiple preprocessed datasets into one cleaned, complete set of updated data.  This refined dataset is then exported in a format suitable for Plotly charts in JavaScript.</p>