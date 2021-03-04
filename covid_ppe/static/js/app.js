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
        y: bedding_acc,
        fill: 'tozeroy',
        type: "scatter",
        name: 'Bedding Accessories',
        line: {
            color: 'rgb(22, 112, 79)',
            width: 1
        }
    };
    var trace2 = {
        x: weeks,
        y: beds_cots,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y11',
        type: "scatter",
        name: 'Beds/Cots',
        line: {
            color: 'rgb(242, 195, 114)',
            width: 1
        }
    };
    var trace3 = {
        x: weeks,
        y: body_bags,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y21',
        type: "scatter",
        name: 'Body Bags',
        line: {
            color: 'rgb(111, 110, 112)',
            width: 1
        }
    };
    var trace4 = {
        x: weeks,
        y: cleaning,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y2',
        type: "scatter",
        name: 'Cleaning Supplies',
        line: {
            color: 'rgb(70, 190, 227)',
            width: 1
        }
    };
    var trace5 = {
        x: weeks,
        y: cloth_masks,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y12',
        type: "scatter",
        name: 'Cloth Masks',
        line: {
            color: 'rgb(100, 176, 204)',
            width: 1
        }
    };
    var trace6 = {
        x: weeks,
        y: coveralls,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y22',
        type: "scatter",
        name: 'Coveralls (Hospitals or EMS)',
        line: {
            color: 'rgb(12, 185, 247)',
            width: 1
        }
    };
    var trace7 = {
        x: weeks,
        y: gloves,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y3',
        type: "scatter",
        name: 'Examination Gloves',
        line: {
            color: 'rgb(167, 93, 237)',
            width: 1
        }
    };
    var trace8 = {
        x: weeks,
        y: face_shields,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y13',
        type: "scatter",
        name: 'Face Shields (Disposable)',
        line: {
            color: 'rgb(34, 27, 245)',
            width: 1
        }
    };
    var trace9 = {
        x: weeks,
        y: fit_test,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y23',
        type: "scatter",
        name: 'Fit Testing Supplies',
        line: {
            color: 'rgb(163, 163, 60)',
            width: 1
        }
    };
    var trace10 = {
        x: weeks,
        y: goggles,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y4',
        type: "scatter",
        name: 'Goggles',
        line: {
            color: 'rgb(97, 97, 97)',
            width: 1
        }
    };
    var trace11 = {
        x: weeks,
        y: hsanitizers,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y14',
        type: "scatter",
        name: 'Hand Sanitizers',
        line: {
            color: 'rgb(60, 163, 155)',
            width: 1
        }
    };
    var trace12 = {
        x: weeks,
        y: kn95_resp,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y24',
        type: "scatter",
        name: 'KN95 Respirators',
        line: {
            color: 'rgb(173, 120, 120)',
            width: 1
        }
    };
    var trace13 = {
        x: weeks,
        y: lab_kit,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y5',
        type: "scatter",
        name: 'Lab Kit',
        line: {
            color: 'rgb(14, 18, 105)',
            width: 1
        }
    };
    var trace14 = {
        x: weeks,
        y: lab_plat,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y15',
        type: "scatter",
        name: 'Lab Platform',
        line: {
            color: 'rgb(26, 67, 201)',
            width: 1
        }
    };
    var trace15 = {
        x: weeks,
        y: lab_supp,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y25',
        type: "scatter",
        name: 'Lab Supplies',
        line: {
            color: 'rgb(26, 201, 134)',
            width: 1
        }
    };
    var trace16 = {
        x: weeks,
        y: med_equip,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y6',
        type: "scatter",
        name: 'Medical Equipment',
        line: {
            color: 'rgb(82, 68, 102)',
            width: 1
        }
    };
    var trace17 = {
        x: weeks,
        y: n95_resp,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y16',
        type: "scatter",
        name: 'N-95 Respirators',
        line: {
            color: 'rgb(25, 191, 177)',
            width: 1
        }
    };
    var trace18 = {
        x: weeks,
        y: other,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y26',
        type: "scatter",
        name: 'Other / None of the above',
        line: {
            color: 'rgb(173, 173, 173)',
            width: 1
        }
    };
    var trace19 = {
        x: weeks,
        y: persons,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y7',
        type: "scatter",
        name: 'Personnel',
        line: {
            color: 'rgb(140, 118, 45)',
            width: 1
        }
    };
    var trace20 = {
        x: weeks,
        y: pharms,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y17',
        type: "scatter",
        name: 'Pharmaceuticals',
        line: {
            color: 'rgb(56, 142, 171)',
            width: 1
        }
    };
    var trace21 = {
        x: weeks,
        y: sample_kits,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y27',
        type: "scatter",
        name: 'Sample Collecting Kits',
        line: {
            color: 'rgb(30, 156, 55)',
            width: 1
        }
    };
    var trace22 = {
        x: weeks,
        y: shoe_covers,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y8',
        type: "scatter",
        name: 'Shoe Covers',
        line: {
            color: 'rgb(56, 158, 201)',
            width: 1
        }
    };
    var trace23 = {
        x: weeks,
        y: surg_masks,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y18',
        type: "scatter",
        name: 'Surgical Masks',
        line: {
            color: 'rgb(85, 173, 148)',
            width: 1
        }
    };
    var trace24 = {
        x: weeks,
        y: gowns,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y28',
        type: "scatter",
        name: 'Surgical or Examination Gowns',
        line: {
            color: 'rgb(27, 89, 67)',
            width: 1
        }
    };
    var trace25 = {
        x: weeks,
        y: swabs,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y9',
        type: "scatter",
        name: 'Swabs',
        line: {
            color: 'rgb(135, 135, 135)',
            width: 1
        }
    };
    var trace26 = {
        x: weeks,
        y: test_kits,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y19',
        type: "scatter",
        name: 'Test Kits',
        line: {
            color: 'rgb(8, 168, 136)',
            width: 1
        }
    };
    var trace27 = {
        x: weeks,
        y: vents,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y29',
        type: "scatter",
        name: 'Ventilators',
        line: {
            color: 'rgb(66, 52, 77)',
            width: 1
        }
    };
    var trace28 = {
        x: weeks,
        y: viral_testing,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y10',
        type: "scatter",
        name: 'Viral Testing Media',
        line: {
            color: 'rgb(158, 38, 19)',
            width: 1
        }
    };
    var trace29 = {
        x: weeks,
        y: wipes,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y20',
        type: "scatter",
        name: 'Wipes',
        line: {
            color: 'rgb(107, 19, 158)',
            width: 1
        }
    };
 
    // create the data arrays for our plots
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20, trace21, trace22, trace23, trace24, trace25, trace26, trace27, trace28, trace29];

    // define our plot layouts
    var layout = {
        height: 3500,
        plot_bgcolor: 'rgba(228, 222, 249, 0.55)',
        title: 'Quantity Filled per Week: June 10, 2020 to February 26, 2021',
        grid: {
            rows: 10,
            columns: 3,
            subplots: [['xy','x2y11', 'x3y21'],['xy2','x2y12', 'x3y22'],['xy3', 'x2y13', 'x3y23'],['xy4', 'x2y14', 'x3y24'],['xy5', 'x2y15', 'x3y25'],['xy6', 'x2y16', 'x3y26'],['xy7', 'x2y17', 'x3y27'],['xy8', 'x2y18', 'x3y28'],['xy9', 'x2y19', 'x3y29'],['xy10', 'x2y20']],
            roworder: 'top to bottom'}
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
    
    // create traces
    var trace1 = {
        x: weeks,
        y: bedding_acc,
        fill: 'tozeroy',
        type: "scatter",
        name: 'Bedding Accessories',
        line: {
            color: 'rgb(22, 112, 79)',
            width: 1
        }
    };
    var trace2 = {
        x: weeks,
        y: beds_cots,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y11',
        type: "scatter",
        name: 'Beds/Cots',
        line: {
            color: 'rgb(242, 195, 114)',
            width: 1
        }
    };
    var trace3 = {
        x: weeks,
        y: body_bags,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y21',
        type: "scatter",
        name: 'Body Bags',
        line: {
            color: 'rgb(111, 110, 112)',
            width: 1
        }
    };
    var trace4 = {
        x: weeks,
        y: cleaning,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y2',
        type: "scatter",
        name: 'Cleaning Supplies',
        line: {
            color: 'rgb(70, 190, 227)',
            width: 1
        }
    };
    var trace5 = {
        x: weeks,
        y: cloth_masks,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y12',
        type: "scatter",
        name: 'Cloth Masks',
        line: {
            color: 'rgb(100, 176, 204)',
            width: 1
        }
    };
    var trace6 = {
        x: weeks,
        y: coveralls,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y22',
        type: "scatter",
        name: 'Coveralls (Hospitals or EMS)',
        line: {
            color: 'rgb(12, 185, 247)',
            width: 1
        }
    };
    var trace7 = {
        x: weeks,
        y: gloves,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y3',
        type: "scatter",
        name: 'Examination Gloves',
        line: {
            color: 'rgb(167, 93, 237)',
            width: 1
        }
    };
    var trace8 = {
        x: weeks,
        y: face_shields,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y13',
        type: "scatter",
        name: 'Face Shields (Disposable)',
        line: {
            color: 'rgb(34, 27, 245)',
            width: 1
        }
    };
    var trace9 = {
        x: weeks,
        y: fit_test,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y23',
        type: "scatter",
        name: 'Fit Testing Supplies',
        line: {
            color: 'rgb(163, 163, 60)',
            width: 1
        }
    };
    var trace10 = {
        x: weeks,
        y: goggles,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y4',
        type: "scatter",
        name: 'Goggles',
        line: {
            color: 'rgb(97, 97, 97)',
            width: 1
        }
    };
    var trace11 = {
        x: weeks,
        y: hsanitizers,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y14',
        type: "scatter",
        name: 'Hand Sanitizers',
        line: {
            color: 'rgb(60, 163, 155)',
            width: 1
        }
    };
    var trace12 = {
        x: weeks,
        y: kn95_resp,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y24',
        type: "scatter",
        name: 'KN95 Respirators',
        line: {
            color: 'rgb(173, 120, 120)',
            width: 1
        }
    };
    var trace13 = {
        x: weeks,
        y: lab_kit,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y5',
        type: "scatter",
        name: 'Lab Kit',
        line: {
            color: 'rgb(14, 18, 105)',
            width: 1
        }
    };
    var trace14 = {
        x: weeks,
        y: lab_plat,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y15',
        type: "scatter",
        name: 'Lab Platform',
        line: {
            color: 'rgb(26, 67, 201)',
            width: 1
        }
    };
    var trace15 = {
        x: weeks,
        y: lab_supp,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y25',
        type: "scatter",
        name: 'Lab Supplies',
        line: {
            color: 'rgb(26, 201, 134)',
            width: 1
        }
    };
    var trace16 = {
        x: weeks,
        y: med_equip,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y6',
        type: "scatter",
        name: 'Medical Equipment',
        line: {
            color: 'rgb(82, 68, 102)',
            width: 1
        }
    };
    var trace17 = {
        x: weeks,
        y: n95_resp,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y16',
        type: "scatter",
        name: 'N-95 Respirators',
        line: {
            color: 'rgb(25, 191, 177)',
            width: 1
        }
    };
    var trace18 = {
        x: weeks,
        y: other,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y26',
        type: "scatter",
        name: 'Other / None of the above',
        line: {
            color: 'rgb(173, 173, 173)',
            width: 1
        }
    };
    var trace19 = {
        x: weeks,
        y: persons,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y7',
        type: "scatter",
        name: 'Personnel',
        line: {
            color: 'rgb(140, 118, 45)',
            width: 1
        }
    };
    var trace20 = {
        x: weeks,
        y: pharms,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y17',
        type: "scatter",
        name: 'Pharmaceuticals',
        line: {
            color: 'rgb(56, 142, 171)',
            width: 1
        }
    };
    var trace21 = {
        x: weeks,
        y: sample_kits,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y27',
        type: "scatter",
        name: 'Sample Collecting Kits',
        line: {
            color: 'rgb(30, 156, 55)',
            width: 1
        }
    };
    var trace22 = {
        x: weeks,
        y: shoe_covers,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y8',
        type: "scatter",
        name: 'Shoe Covers',
        line: {
            color: 'rgb(56, 158, 201)',
            width: 1
        }
    };
    var trace23 = {
        x: weeks,
        y: surg_masks,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y18',
        type: "scatter",
        name: 'Surgical Masks',
        line: {
            color: 'rgb(85, 173, 148)',
            width: 1
        }
    };
    var trace24 = {
        x: weeks,
        y: gowns,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y28',
        type: "scatter",
        name: 'Surgical or Examination Gowns',
        line: {
            color: 'rgb(27, 89, 67)',
            width: 1
        }
    };
    var trace25 = {
        x: weeks,
        y: swabs,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y9',
        type: "scatter",
        name: 'Swabs',
        line: {
            color: 'rgb(135, 135, 135)',
            width: 1
        }
    };
    var trace26 = {
        x: weeks,
        y: test_kits,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y19',
        type: "scatter",
        name: 'Test Kits',
        line: {
            color: 'rgb(8, 168, 136)',
            width: 1
        }
    };
    var trace27 = {
        x: weeks,
        y: vents,
        fill: 'tozeroy',
        xaxis: 'x3',
        yaxis: 'y29',
        type: "scatter",
        name: 'Ventilators',
        line: {
            color: 'rgb(66, 52, 77)',
            width: 1
        }
    };
    var trace28 = {
        x: weeks,
        y: viral_testing,
        fill: 'tozeroy',
        xaxis: 'x',
        yaxis: 'y10',
        type: "scatter",
        name: 'Viral Testing Media',
        line: {
            color: 'rgb(158, 38, 19)',
            width: 1
        }
    };
    var trace29 = {
        x: weeks,
        y: wipes,
        fill: 'tozeroy',
        xaxis: 'x2',
        yaxis: 'y20',
        type: "scatter",
        name: 'Wipes',
        line: {
            color: 'rgb(107, 19, 158)',
            width: 1
        }
    };
 
    // create the data arrays for our plots
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16, trace17, trace18, trace19, trace20, trace21, trace22, trace23, trace24, trace25, trace26, trace27, trace28, trace29];

    // define our plot layouts
    var layout = {
        height: 3500,
        plot_bgcolor: 'rgba(228, 222, 249, 0.55)',
        title: 'Quantity Filled per Week: June 10, 2020 to February 26, 2021',
        grid: {
            rows: 10,
            columns: 3,
            subplots: [['xy','x2y11', 'x3y21'],['xy2','x2y12', 'x3y22'],['xy3', 'x2y13', 'x3y23'],['xy4', 'x2y14', 'x3y24'],['xy5', 'x2y15', 'x3y25'],['xy6', 'x2y16', 'x3y26'],['xy7', 'x2y17', 'x3y27'],['xy8', 'x2y18', 'x3y28'],['xy9', 'x2y19', 'x3y29'],['xy10', 'x2y20']],
            roworder: 'top to bottom'}
    };

    var config = {responsive: true}

    // plot the charts to a div tag with id "plot" and "plot2"
    Plotly.newPlot("plot", data, layout, config);
};