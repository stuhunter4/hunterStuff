// from data.js, assign data to a descriptive variable
var tableData = data;

// create graphs and table upon opening page
// function is at the bottom, a reappropriation of runEnter
runStart();

// select the dropdown selection
var slist = d3.select("#slist");

// create event handlers for selecting a list option
slist.on("change", runEnter);

// create the event handler function to run both form events
function runEnter() {
    
    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#sel");

    // get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // filter() uses Alameda, the first county, as its argument
    var filteredData = tableData.filter(ca => ca.county === inputValue);

    // use the map method with the arrow function to return all data arrays
    var weeks = filteredData.map(ppe => ppe["week number"]);
    var face_shields = filteredData.map(ppe => ppe["Face Shields (Disposable)"]);
    var surg_masks = filteredData.map(ppe => ppe["Surgical Masks"]);
    var cloth_masks = filteredData.map(ppe => ppe["Cloth Masks"]);
    var gowns = filteredData.map(ppe => ppe["Surgical or Examination Gowns"]);
    var gloves = filteredData.map(ppe => ppe["Examination Gloves"]);
    var n95_resp = filteredData.map(ppe => ppe["N-95 Respirators"]);
    var hsanitizers = filteredData.map(ppe => ppe["Hand Sanitizers"]);
    var wipes = filteredData.map(ppe => ppe["Wipes"]);
    var other = filteredData.map(ppe => ppe["Other / None of the above"]);
    var cleaning = filteredData.map(ppe => ppe["Cleaning Supplies"]);
    var swabs = filteredData.map(ppe => ppe["Swabs"]);
    var viral_testing = filteredData.map(ppe => ppe["Viral Testing Media"]);
    var pharms = filteredData.map(ppe => ppe["Pharmaceuticals"]);
    var shoe_covers = filteredData.map(ppe => ppe["Shoe Covers"]);
    var test_kits = filteredData.map(ppe => ppe["Test Kits"]);
    var kn95_resp = filteredData.map(ppe => ppe["KN95 Respirators"]);
    var coveralls = filteredData.map(ppe => ppe["Coveralls (Hospitals or EMS)"]);
    var med_equip = filteredData.map(ppe => ppe["Medical Equipment"]);
    var goggles = filteredData.map(ppe => ppe["Goggles"]);
    var lab_supp = filteredData.map(ppe => ppe["Lab Supplies"]);
    var beds_cots = filteredData.map(ppe => ppe["Beds/Cots"]);
    var body_bags = filteredData.map(ppe => ppe["Body Bags"]);
    var lab_kit = filteredData.map(ppe => ppe["Lab Kit"]);
    var vents = filteredData.map(ppe => ppe["Ventilators"]);
    var persons = filteredData.map(ppe => ppe["Personnel"]);
    var sample_kits = filteredData.map(ppe => ppe["Sample Collecting Kits"]);
    var lab_plat = filteredData.map(ppe => ppe["Lab Platform"]);
    var bedding_acc = filteredData.map(ppe => ppe["Bedding Accessories"]);
    var fit_test = filteredData.map(ppe => ppe["Fit Testing Supplies"]);
    
    // create traces
    var trace1 = {
        x: weeks,
        y: face_shields,
        type: "scatter",
        name: 'Face Shields (Disposable)',
        title: 'Face Shields (Disposable)',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace2 = {
        x: weeks,
        y: surg_masks,
        xaxis: 'x',
        yaxis: 'y2',
        type: "scatter",
        name: 'Surgical Masks',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace3 = {
        x: weeks,
        y: fit_test,
        xaxis: 'x',
        yaxis: 'y3',
        type: "scatter",
        name: 'Fit Testing Supplies',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace4 = {
        x: weeks,
        y: cloth_masks,
        xaxis: 'x',
        yaxis: 'y4',
        type: "scatter",
        name: 'Cloth Masks',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace5 = {
        x: weeks,
        y: gowns,
        xaxis: 'x',
        yaxis: 'y5',
        type: "scatter",
        name: 'Surgical or Examination Gowns',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace6 = {
        x: weeks,
        y: gloves,
        xaxis: 'x',
        yaxis: 'y6',
        type: "scatter",
        name: 'Examination Gloves',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace7 = {
        x: weeks,
        y: n95_resp,
        xaxis: 'x',
        yaxis: 'y7',
        type: "scatter",
        name: 'N-95 Respirators',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace8 = {
        x: weeks,
        y: hsanitizers,
        xaxis: 'x',
        yaxis: 'y8',
        type: "scatter",
        name: 'Hand Sanitizers',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace9 = {
        x: weeks,
        y: wipes,
        xaxis: 'x',
        yaxis: 'y9',
        type: "scatter",
        name: 'Wipes',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace10 = {
        x: weeks,
        y: other,
        xaxis: 'x',
        yaxis: 'y10',
        type: "scatter",
        name: 'Other / None of the above',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace11 = {
        x: weeks,
        y: cleaning,
        xaxis: 'x',
        yaxis: 'y11',
        type: "scatter",
        name: 'Cleaning Supplies',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace12 = {
        x: weeks,
        y: swabs,
        xaxis: 'x',
        yaxis: 'y12',
        type: "scatter",
        name: 'Swabs',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace13 = {
        x: weeks,
        y: viral_testing,
        xaxis: 'x',
        yaxis: 'y13',
        type: "scatter",
        name: 'Viral Testing Media',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace14 = {
        x: weeks,
        y: pharms,
        xaxis: 'x',
        yaxis: 'y14',
        type: "scatter",
        name: 'Pharmaceuticals',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace15 = {
        x: weeks,
        y: shoe_covers,
        xaxis: 'x',
        yaxis: 'y15',
        type: "scatter",
        name: 'Shoe Covers',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace16 = {
        x: weeks,
        y: test_kits,
        xaxis: 'x2',
        yaxis: 'y16',
        type: "scatter",
        name: 'Test Kits',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace17 = {
        x: weeks,
        y: kn95_resp,
        xaxis: 'x2',
        yaxis: 'y17',
        type: "scatter",
        name: 'KN95 Respirators',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace18 = {
        x: weeks,
        y: coveralls,
        xaxis: 'x2',
        yaxis: 'y18',
        type: "scatter",
        name: 'Coveralls (Hospitals or EMS)',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace19 = {
        x: weeks,
        y: med_equip,
        xaxis: 'x2',
        yaxis: 'y19',
        type: "scatter",
        name: 'Medical Equipment',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace20 = {
        x: weeks,
        y: goggles,
        xaxis: 'x2',
        yaxis: 'y20',
        type: "scatter",
        name: 'Goggles',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace21 = {
        x: weeks,
        y: bedding_acc,
        xaxis: 'x2',
        yaxis: 'y21',
        type: "scatter",
        name: 'Bedding Accessories',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace22 = {
        x: weeks,
        y: lab_supp,
        xaxis: 'x2',
        yaxis: 'y22',
        type: "scatter",
        name: 'Lab Supplies',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace23 = {
        x: weeks,
        y: beds_cots,
        xaxis: 'x2',
        yaxis: 'y23',
        type: "scatter",
        name: 'Beds/Cots',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace24 = {
        x: weeks,
        y: body_bags,
        xaxis: 'x2',
        yaxis: 'y24',
        type: "scatter",
        name: 'Body Bags',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace25 = {
        x: weeks,
        y: lab_kit,
        xaxis: 'x2',
        yaxis: 'y25',
        type: "scatter",
        name: 'Lab Kit',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace26 = {
        x: weeks,
        y: vents,
        xaxis: 'x2',
        yaxis: 'y26',
        type: "scatter",
        name: 'Ventilators',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace27 = {
        x: weeks,
        y: persons,
        xaxis: 'x2',
        yaxis: 'y27',
        type: "scatter",
        name: 'Personnel',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace28 = {
        x: weeks,
        y: sample_kits,
        xaxis: 'x2',
        yaxis: 'y28',
        type: "scatter",
        name: 'Sample Collecting Kits',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace29 = {
        x: weeks,
        y: lab_plat,
        xaxis: 'x2',
        yaxis: 'y29',
        type: "scatter",
        name: 'Lab Platform',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    // create the data arrays for our plots
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20, trace21, trace22, trace23, trace24, trace25, trace26, trace27, trace28, trace29];

    // define our plot layouts
    var layout = {
        height: 3500,
        plot_bgcolor: 'rgba(228, 222, 249, 0.65)',
        grid: {
            rows: 15,
            columns: 2,
            subplots: [['xy','x2y16'],['xy2','x2y17'],['xy3', 'x2y18'],['xy4', 'x2y19'],['xy5', 'x2y20'],['xy6', 'x2y21'],['xy7', 'x2y22'],['xy8', 'x2y23'],['xy9', 'x2y24'],['xy10', 'x2y25'],['xy11', 'x2y26'],['xy12', 'x2y27'],['xy13', 'x2y28'],['xy14', 'x2y29'],['xy15']],
            roworder: 'bottom to top'}
    };

    var config = {responsive: true}

    // plot the charts to a div tag with id "plot" and "plot2"
    Plotly.newPlot("plot", data, layout, config);
};

function runStart() {
    // first county
    var firstCounty = "Alameda";

    // filter() uses Alameda, the first county, as its argument
    var filteredData = tableData.filter(ca => ca.county === firstCounty);

    // use the map method with the arrow function to return all data arrays
    var weeks = filteredData.map(ppe => ppe["week number"]);
    var face_shields = filteredData.map(ppe => ppe["Face Shields (Disposable)"]);
    var surg_masks = filteredData.map(ppe => ppe["Surgical Masks"]);
    var cloth_masks = filteredData.map(ppe => ppe["Cloth Masks"]);
    var gowns = filteredData.map(ppe => ppe["Surgical or Examination Gowns"]);
    var gloves = filteredData.map(ppe => ppe["Examination Gloves"]);
    var n95_resp = filteredData.map(ppe => ppe["N-95 Respirators"]);
    var hsanitizers = filteredData.map(ppe => ppe["Hand Sanitizers"]);
    var wipes = filteredData.map(ppe => ppe["Wipes"]);
    var other = filteredData.map(ppe => ppe["Other / None of the above"]);
    var cleaning = filteredData.map(ppe => ppe["Cleaning Supplies"]);
    var swabs = filteredData.map(ppe => ppe["Swabs"]);
    var viral_testing = filteredData.map(ppe => ppe["Viral Testing Media"]);
    var pharms = filteredData.map(ppe => ppe["Pharmaceuticals"]);
    var shoe_covers = filteredData.map(ppe => ppe["Shoe Covers"]);
    var test_kits = filteredData.map(ppe => ppe["Test Kits"]);
    var kn95_resp = filteredData.map(ppe => ppe["KN95 Respirators"]);
    var coveralls = filteredData.map(ppe => ppe["Coveralls (Hospitals or EMS)"]);
    var med_equip = filteredData.map(ppe => ppe["Medical Equipment"]);
    var goggles = filteredData.map(ppe => ppe["Goggles"]);
    var lab_supp = filteredData.map(ppe => ppe["Lab Supplies"]);
    var beds_cots = filteredData.map(ppe => ppe["Beds/Cots"]);
    var body_bags = filteredData.map(ppe => ppe["Body Bags"]);
    var lab_kit = filteredData.map(ppe => ppe["Lab Kit"]);
    var vents = filteredData.map(ppe => ppe["Ventilators"]);
    var persons = filteredData.map(ppe => ppe["Personnel"]);
    var sample_kits = filteredData.map(ppe => ppe["Sample Collecting Kits"]);
    var lab_plat = filteredData.map(ppe => ppe["Lab Platform"]);
    var bedding_acc = filteredData.map(ppe => ppe["Bedding Accessories"]);
    var fit_test = filteredData.map(ppe => ppe["Fit Testing Supplies"]);
    console.log(n95_resp);
    // create traces
    var trace1 = {
        x: weeks,
        y: face_shields,
        type: "scatter",
        name: 'Face Shields (Disposable)',
        title: 'Face Shields (Disposable)',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace2 = {
        x: weeks,
        y: surg_masks,
        xaxis: 'x',
        yaxis: 'y2',
        type: "scatter",
        name: 'Surgical Masks',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace3 = {
        x: weeks,
        y: fit_test,
        xaxis: 'x',
        yaxis: 'y3',
        type: "scatter",
        name: 'Fit Testing Supplies',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace4 = {
        x: weeks,
        y: cloth_masks,
        xaxis: 'x',
        yaxis: 'y4',
        type: "scatter",
        name: 'Cloth Masks',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace5 = {
        x: weeks,
        y: gowns,
        xaxis: 'x',
        yaxis: 'y5',
        type: "scatter",
        name: 'Surgical or Examination Gowns',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace6 = {
        x: weeks,
        y: gloves,
        xaxis: 'x',
        yaxis: 'y6',
        type: "scatter",
        name: 'Examination Gloves',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace7 = {
        x: weeks,
        y: n95_resp,
        xaxis: 'x',
        yaxis: 'y7',
        type: "scatter",
        name: 'N-95 Respirators',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace8 = {
        x: weeks,
        y: hsanitizers,
        xaxis: 'x',
        yaxis: 'y8',
        type: "scatter",
        name: 'Hand Sanitizers',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace9 = {
        x: weeks,
        y: wipes,
        xaxis: 'x',
        yaxis: 'y9',
        type: "scatter",
        name: 'Wipes',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace10 = {
        x: weeks,
        y: other,
        xaxis: 'x',
        yaxis: 'y10',
        type: "scatter",
        name: 'Other / None of the above',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace11 = {
        x: weeks,
        y: cleaning,
        xaxis: 'x',
        yaxis: 'y11',
        type: "scatter",
        name: 'Cleaning Supplies',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace12 = {
        x: weeks,
        y: swabs,
        xaxis: 'x',
        yaxis: 'y12',
        type: "scatter",
        name: 'Swabs',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace13 = {
        x: weeks,
        y: viral_testing,
        xaxis: 'x',
        yaxis: 'y13',
        type: "scatter",
        name: 'Viral Testing Media',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace14 = {
        x: weeks,
        y: pharms,
        xaxis: 'x',
        yaxis: 'y14',
        type: "scatter",
        name: 'Pharmaceuticals',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace15 = {
        x: weeks,
        y: shoe_covers,
        xaxis: 'x',
        yaxis: 'y15',
        type: "scatter",
        name: 'Shoe Covers',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace16 = {
        x: weeks,
        y: test_kits,
        xaxis: 'x2',
        yaxis: 'y16',
        type: "scatter",
        name: 'Test Kits',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace17 = {
        x: weeks,
        y: kn95_resp,
        xaxis: 'x2',
        yaxis: 'y17',
        type: "scatter",
        name: 'KN95 Respirators',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace18 = {
        x: weeks,
        y: coveralls,
        xaxis: 'x2',
        yaxis: 'y18',
        type: "scatter",
        name: 'Coveralls (Hospitals or EMS)',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace19 = {
        x: weeks,
        y: med_equip,
        xaxis: 'x2',
        yaxis: 'y19',
        type: "scatter",
        name: 'Medical Equipment',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace20 = {
        x: weeks,
        y: goggles,
        xaxis: 'x2',
        yaxis: 'y20',
        type: "scatter",
        name: 'Goggles',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace21 = {
        x: weeks,
        y: bedding_acc,
        xaxis: 'x2',
        yaxis: 'y21',
        type: "scatter",
        name: 'Bedding Accessories',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace22 = {
        x: weeks,
        y: lab_supp,
        xaxis: 'x2',
        yaxis: 'y22',
        type: "scatter",
        name: 'Lab Supplies',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace23 = {
        x: weeks,
        y: beds_cots,
        xaxis: 'x2',
        yaxis: 'y23',
        type: "scatter",
        name: 'Beds/Cots',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace24 = {
        x: weeks,
        y: body_bags,
        xaxis: 'x2',
        yaxis: 'y24',
        type: "scatter",
        name: 'Body Bags',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace25 = {
        x: weeks,
        y: lab_kit,
        xaxis: 'x2',
        yaxis: 'y25',
        type: "scatter",
        name: 'Lab Kit',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace26 = {
        x: weeks,
        y: vents,
        xaxis: 'x2',
        yaxis: 'y26',
        type: "scatter",
        name: 'Ventilators',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace27 = {
        x: weeks,
        y: persons,
        xaxis: 'x2',
        yaxis: 'y27',
        type: "scatter",
        name: 'Personnel',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace28 = {
        x: weeks,
        y: sample_kits,
        xaxis: 'x2',
        yaxis: 'y28',
        type: "scatter",
        name: 'Sample Collecting Kits',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    var trace29 = {
        x: weeks,
        y: lab_plat,
        xaxis: 'x2',
        yaxis: 'y29',
        type: "scatter",
        name: 'Lab Platform',
        line: {
            color: 'rgb(119, 81, 68)',
            width: 1
        }
    };

    // create the data arrays for our plots
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20, trace21, trace22, trace23, trace24, trace25, trace26, trace27, trace28, trace29];

    // define our plot layouts
    var layout = {
        height: 3500,
        plot_bgcolor: 'rgba(228, 222, 249, 0.65)',
        grid: {
            rows: 15,
            columns: 2,
            subplots: [['xy','x2y16'],['xy2','x2y17'],['xy3', 'x2y18'],['xy4', 'x2y19'],['xy5', 'x2y20'],['xy6', 'x2y21'],['xy7', 'x2y22'],['xy8', 'x2y23'],['xy9', 'x2y24'],['xy10', 'x2y25'],['xy11', 'x2y26'],['xy12', 'x2y27'],['xy13', 'x2y28'],['xy14', 'x2y29'],['xy15']],
            roworder: 'bottom to top'}
    };

    var config = {responsive: true}

    // plot the charts to a div tag with id "plot" and "plot2"
    Plotly.newPlot("plot", data, layout, config);

};