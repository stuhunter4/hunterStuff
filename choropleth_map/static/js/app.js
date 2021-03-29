// from data.js, assign data to a descriptive variable
var tableData = data;
var censusData = data2;

// create graphs and table upon opening page
runStart();

// select the dropdown selection
var slist = d3.select("#slist2");

// create event handlers for selecting a list option
slist.on("change", runEnter);

function runEnter() {
  // prevent the page from refreshing
  d3.event.preventDefault();

  // select the input element and get the raw HTML node
  var inputElement = d3.select("#sel1");

  // get the value property of the input element
  var year = inputElement.property("value");

  var e2010 = [];
  var e2011 = [];
  var e2012 = [];
  var e2013 = [];
  var e2014 = [];
  var e2015 = [];
  var e2016 = [];
  var e2017 = [];
  var e2018 = [];
  var e2019 = [];

  for (var i = 0; i < tableData.length; i++) {
    console.log(tableData[i]["2009_estimate"]);
    console.log(tableData[i]["current_residence"]);
    e2010.push(tableData[i]["2010_estimate"]);
    e2011.push(tableData[i]["2011_estimate"]);
    e2012.push(tableData[i]["2012_estimate"]);
    e2013.push(tableData[i]["2013_estimate"]);
    e2014.push(tableData[i]["2014_estimate"]);
    e2015.push(tableData[i]["2015_estimate"]);
    e2016.push(tableData[i]["2016_estimate"]);
    e2017.push(tableData[i]["2017_estimate"]);
    e2018.push(tableData[i]["2018_estimate"]);
    e2019.push(tableData[i]["2019_estimate"]);
  }

  if (year == 2010) {
    var x = e2010;
  }
  else if (year == 2011) {
    var x = e2011;
  }
  else if (year == 2012) {
    var x = e2012;
  }
  else if (year == 2013) {
    var x = e2013;
  }
  else if (year == 2014) {
    var x = e2014;
  }
  else if (year == 2015) {
    var x = e2015;
  }
  else if (year == 2016) {
    var x = e2016;
  }
  else if (year == 2017) {
    var x = e2017;
  }
  else if (year == 2018) {
    var x = e2018;
  }
  else if (year == 2019) {
    var x = e2019;
  }

  // filter() uses input as its argument
  //var filteredData = tableData.filter(ca => ca.County === year);

  // use the map method with the arrow function to return all the filtered week numbers.
  var res = tableData.map(county => county["current_residence"]);

  var postal = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  var data = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: postal,
    z: x,
    text: res,
    colorscale: [
      [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
      [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
      [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
    ],
    colorbar: {
      //title: 'Millions USD',
      thickness: 9
    }
    //autocolorscale: true
  }];

  var layout = {
    title: 'Migration From CA to Other States',
    margin: {
      l: 25,
      r: 25,
      b: 25,
      t: 25,
      pad: 4
    },
    geo:{
        scope: 'usa',
        countrycolor: 'rgb(255, 255, 255)',
        showland: true,
        landcolor: 'rgb(217, 217, 217)',
        showlakes: true,
        lakecolor: 'rgb(255, 255, 255)',
        subunitcolor: 'rgb(255, 255, 255)',
        lonaxis: {},
        lataxis: {}
      }
  };

  var config = {responsive: true, displayModeBar: false}

  Plotly.newPlot('choromap', data, layout, config);
      
};

function runStart() {
  // filter() uses input as its argument
  var filteredData = censusData.filter(ca => ca.Name === 'California');

  // use the map method with the arrow function to return all the filtered results
  var years = filteredData.map(ca => ca["Year"]);
  var oneto4 = filteredData.map(ca => ca["Moved to different state 1 to 4 years"]);
  var fiveto17 = filteredData.map(ca => ca["Moved to different state 5 to 17 years"]);
  var eighteento24 = filteredData.map(ca => ca["Moved to different state 18 to 24 years"]);
  var twenty5to34 = filteredData.map(ca => ca["Moved to different state 25 to 34 years"]);
  var thirty5to44 = filteredData.map(ca => ca["Moved to different state 35 to 44 years"]);
  var forty5to54 = filteredData.map(ca => ca["Moved to different state 45 to 54 years"]);
  var fifty5to64 = filteredData.map(ca => ca["Moved to different state 55 to 64 years"]);
  var sixty5to74 = filteredData.map(ca => ca["Moved to different state 65 to 74 years"]);
  var seventy5plus = filteredData.map(ca => ca["Moved to different state 75 years and over"]);
  console.log(seventy5plus);

  trace1 = {
    type: 'scatter',
    x: years,
    y: oneto4,
    mode: 'lines',
    name: '1 to 4',
    line: {
      color: 'rgb(244, 219, 216)',
      width: 1
    }
  };

  trace2 = {
    type: 'scatter',
    x: years,
    y: fiveto17,
    mode: 'lines',
    name: '5 to 17',
    line: {
      color: 'rgb(190, 168, 167)',
      width: 1
    }
  };

  trace3 = {
    type: 'scatter',
    x: years,
    y: eighteento24,
    mode: 'lines',
    name: '18 to 24',
    line: {
      color: 'rgb(191, 160, 156)',
      width: 1
    }
  };

  trace4 = {
    type: 'scatter',
    x: years,
    y: twenty5to34,
    mode: 'lines',
    name: '25 to 34',
    line: {
      color: 'rgb(192, 152, 145)',
      width: 1
    }
  };

  trace5 = {
    type: 'scatter',
    x: years,
    y: thirty5to44,
    mode: 'lines',
    name: '35 to 44',
    line: {
      color: 'rgb(174, 135, 126)',
      width: 1
    }
  };

  trace6 = {
    type: 'scatter',
    x: years,
    y: forty5to54,
    mode: 'lines',
    name: '45 to 54',
    line: {
      color: 'rgb(156, 117, 107)',
      width: 1
    }
  };

  trace7 = {
    type: 'scatter',
    x: years,
    y: fifty5to64,
    mode: 'lines',
    name: '55 to 64',
    line: {
      color: 'rgb(119, 81, 68)',
      width: 1
    }
  };

  trace8 = {
    type: 'scatter',
    x: years,
    y: sixty5to74,
    mode: 'lines',
    name: '65 to 74',
    line: {
      color: 'rgb(81, 45, 34)',
      width: 1
    }
  };

  trace9 = {
    type: 'scatter',
    x: years,
    y: seventy5plus,
    mode: 'lines',
    name: '75 and over',
    line: {
      color: 'rgb(42, 8, 0)',
      width: 1
    }
  };

  var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9];

  var layout = {
    title: 'Moving out of California by Age Group',
    xaxis: {
      title: 'Year',
      showgrid: false
    },
    yaxis: {
      title: 'People',
      showgrid: false
    }
  };

  // generate a choropleth map for the year 2010 upon starting page
  var res = tableData.map(county => county["current_residence"]);

  var postal = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  var e2010 = [];

  for (var i = 0; i < tableData.length; i++) {
    e2010.push(tableData[i]["2010_estimate"]);
  }

  var data2 = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: postal,
    z: e2010,
    text: res,
    colorscale: [
      [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
      [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
      [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
    ],
    colorbar: {
      //title: 'Millions USD',
      thickness: 9
    }
    //autocolorscale: true
  }];

  var layout2 = {
    title: 'Migration From CA to Other States',
    margin: {
      l: 25,
      r: 25,
      b: 25,
      t: 25,
      pad: 4
    },
    geo:{
        scope: 'usa',
        countrycolor: 'rgb(255, 255, 255)',
        showland: true,
        landcolor: 'rgb(217, 217, 217)',
        showlakes: true,
        lakecolor: 'rgb(255, 255, 255)',
        subunitcolor: 'rgb(255, 255, 255)',
        lonaxis: {},
        lataxis: {}
      }
  };

  var config = {responsive: true, displayModeBar: false}

  // plot both charts
  Plotly.newPlot('linechart', data, layout, config);
  Plotly.newPlot('choromap', data2, layout2, config);
};