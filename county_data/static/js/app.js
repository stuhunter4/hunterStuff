// from data.js, assign data to a descriptive variable
var caseData = case_data;
var hospData = hosp_data;

// create graphs and table upon opening page
// function is at the bottom, a reappropriation of runEnter
runStart();

// select the dropdown selection
var slist = d3.select("#slist");

// create event handlers for selecting a list option
slist.on("change", runCounty);

// create the event handler function to run both form events
function runCounty() {
    
    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#sel");

    // get the value property of the input element
    var inputValue = inputElement.property("value");
    // test
    console.log(inputValue);
    console.log(caseData);

    // filter() uses input as its argument
    var filteredData = caseData.filter(ca => ca.county === inputValue);
    var h_filteredData = hospData.filter(ca => ca.county === inputValue);
    // filter() to create dataset for California only
    var caliData = caseData.filter(ca => ca.county === "California");

    // test
    console.log(filteredData);

    // use the map method with the arrow function to return all the filtered week numbers.
    var weeks = filteredData.map(county => county["date"]);
    var h_weeks = h_filteredData.map(county => county["date"]);

    // use the map method with the arrow function to return all the filtered average cases per 100,000.
    var rate = filteredData.map(county => county["cases_per_cap"]);
    var cali_rate = caliData.map(county => county["cases_per_cap"]);
    // ..and for deaths per capita
    var drate = filteredData.map(county => county["deaths_per_cap"]);
    var cali_drate = caliData.map(county => county["deaths_per_cap"]);
    // ..and for hospitalized covid patients, available icu beds
    var hosp_patients = h_filteredData.map(county => county["hosp_average"]);
    var icu_beds = h_filteredData.map(county => county["icu_average"]);

    // create traces
    var trace1 = {
        x: weeks,
        y: rate,
        name: inputValue,
        type: "scatter"
    };
    var trace2 = {
        x: weeks,
        y: cali_rate,
        opacity: 0.25,
        marker: {
            color: 'rgb(148, 103, 189)'
        },
        yaxis: 'y2',
        name: "California",
        type: "scatter"
    };

    var trace3 = {
        x: weeks,
        y: drate,
        name: inputValue,
        type: "scatter"
    };
    var trace4 = {
        x: weeks,
        y: cali_drate,
        opacity: 0.25,
        marker: {
            color: 'rgb(148, 103, 189)'
        },
        yaxis: 'y2',
        name: "California",
        type: "scatter"
    };

    var trace5 = {
        x: h_weeks,
        y: hosp_patients,
        name: "COVID-19 Patients",
        type: "scatter"
    };
    var trace6 = {
        x: h_weeks,
        y: icu_beds,
        name: "ICU Beds",
        type: "scatter"
    };


    // create the data arrays for our plots
    var data = [trace1, trace2];
    var data2 = [trace3, trace4];
    var data3 = [trace5];
    var data4 = [trace6];

    // define our plot layouts
    var layout = {
        title: "Daily Cases: 7-Day Moving Average",
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        xaxis: { title: `${weeks[0]} - ${weeks[weeks.length - 1]}`},
        yaxis: { title: "Per 100,000"},
        yaxis2: {
            title: "Per 100,000",
            titlefont: {color: 'rgb(148, 103, 189)'},
            tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: 'y',
            side: 'right'
        }
    };

    var layout2 = {
        title: "Daily Deaths: 7-Day Moving Average",
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        xaxis: { title: `${weeks[0]} - ${weeks[weeks.length - 1]}`},
        yaxis: { title: "Per 100,000"},
        yaxis2: {
            title: "Per 100,000",
            titlefont: {color: 'rgb(148, 103, 189'},
            tickfont: {color: 'rgb(148, 103, 189'},
            overlaying: 'y',
            side: 'right'
        }
    };

    var layout3 = {
        title: "COVID-19 Hospitalized Patients: 14-Day Average",
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        xaxis: { title: `${h_weeks[0]} - ${h_weeks[h_weeks.length - 1]}`}
    };

    var layout4 = {
        title: "ICU Beds Available: 7-Day Average",
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        xaxis: { title: `${h_weeks[0]} - ${h_weeks[h_weeks.length - 1]}`},
        yaxis: {
            rangemode: "tozero"
        }
    };

    var config = {responsive: true, displayModeBar: false}

    // plot the charts to a div tags with plot ids
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("hospital_plot", data3, layout3, config);
    Plotly.newPlot("icu_plot", data4, layout4, config);

};

function runStart() {
    // first county
    var firstCounty = "Alameda";

    // filter() uses Alameda, the first county, as its argument
    var filteredData = caseData.filter(ca => ca.county === firstCounty);
    var h_filteredData = hospData.filter(ca => ca.county === firstCounty);
    // filter() to create dataset for California only
    var caliData = caseData.filter(ca => ca.county === "California");

    // test
    console.log(filteredData);

    // use the map method with the arrow function to return all the filtered week numbers.
    var weeks = filteredData.map(county => county["date"]);
    var h_weeks = h_filteredData.map(county => county["date"]);
    console.log(weeks);

    // use the map method with the arrow function to return all the filtered average cases per 100,000.
    var rate = filteredData.map(county => county["cases_per_cap"]);
    var cali_rate = caliData.map(county => county["cases_per_cap"]);
    // ..and for deaths per capita
    var drate = filteredData.map(county => county["deaths_per_cap"]);
    var cali_drate = caliData.map(county => county["deaths_per_cap"]);
    // ..and for hospitalized covid patients, available icu beds
    var hosp_patients = h_filteredData.map(county => county["hosp_average"]);
    var icu_beds = h_filteredData.map(county => county["icu_average"]);

    // create traces
    var trace1 = {
        x: weeks,
        y: rate,
        name: firstCounty,
        type: "scatter"
    };
    var trace2 = {
        x: weeks,
        y: cali_rate,
        opacity: 0.25,
        marker: {
            color: 'rgb(148, 103, 189)'
        },
        yaxis: 'y2',
        name: "California",
        type: "scatter"
    };

    var trace3 = {
        x: weeks,
        y: drate,
        name: firstCounty,
        type: "scatter"
    };
    var trace4 = {
        x: weeks,
        y: cali_drate,
        opacity: 0.25,
        marker: {
            color: 'rgb(148, 103, 189)'
        },
        yaxis: 'y2',
        name: "California",
        type: "scatter"
    };

    var trace5 = {
        x: h_weeks,
        y: hosp_patients,
        name: "COVID-19 Patients",
        type: "scatter"
    };
    var trace6 = {
        x: h_weeks,
        y: icu_beds,
        name: "ICU Beds",
        type: "scatter"
    };

    // create the data arrays for our plots
    var data = [trace1, trace2];
    var data2 = [trace3, trace4];
    var data3 = [trace5];
    var data4 = [trace6];

    // define our plot layouts
    var layout = {
        title: "Daily Cases: 7-Day Moving Average",
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        xaxis: {title: `${weeks[0]} - ${weeks[weeks.length - 1]}`},
        yaxis: {title: "Per 100,000"},
        yaxis2: {
            title: "Per 100,000",
            titlefont: {color: 'rgb(148, 103, 189)'},
            tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: 'y',
            side: 'right'
        }
    };

    var layout2 = {
        title: "Daily Deaths: 7-Day Moving Average",
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        xaxis: {title: `${weeks[0]} - ${weeks[weeks.length - 1]}`},
        yaxis: {title: "Per 100,000"},
        yaxis2: {
            title: "Per 100,000",
            titlefont: {color: 'rgb(148, 103, 189'},
            tickfont: {color: 'rgb(148, 103, 189'},
            overlaying: 'y',
            side: 'right'
        }
    };

    
    var layout3 = {
        title: "COVID-19 Hospitalized Patients: 14-Day Average",
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        xaxis: { title: `${h_weeks[0]} - ${h_weeks[h_weeks.length - 1]}`}
    };

    var layout4 = {
        title: "ICU Beds Available: 7-Day Average",
        paper_bgcolor: 'rgba(245,246,249,1)',
        plot_bgcolor: 'rgba(245,246,249,1)',
        xaxis: { title: `${h_weeks[0]} - ${h_weeks[h_weeks.length - 1]}`},
        yaxis: {
            rangemode: "tozero"
        }
    };

    var config = {responsive: true, displayModeBar: false}

    // plot the charts to a div tag with id "plot" and "plot2"
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);
    Plotly.newPlot("hospital_plot", data3, layout3, config);
    Plotly.newPlot("icu_plot", data4, layout4, config);

};