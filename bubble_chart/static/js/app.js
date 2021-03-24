var data1 = [{
    x: data.map(row => row["Population per square mile"]),
    y: data.map(row => row["Bachelor's degree or higher, percent of persons age 25+"]),
    hovertemplate: "<b>%{text} County</b><br>" + 
                    "<b>Bachelor's degree+</b>: %{y}%<br>" + 
                    "<b>Population density</b>: %{x}<br>" + 
                    "<b>Population</b>: %{marker.size:,}<br>" + 
                    "<extra></extra>",
    text: data.map(row => row["County"]),
    showlegend: false,
    mode: 'markers',
    marker: {
        color: data.map(row => row["2016 Winner"]),
        size: data.map(row => row["Population"]),
        sizemode: 'area',
        sizeref:  700
    },
    transforms: [
        {
          type: 'aggregate',
          aggregations: [
            {target: 'marker.size', func: 'sum'}
          ]
        }]
}];
var data2 = [{
  x: data2.map(row => row["Population per square mile"]),
  y: data2.map(row => row["Bachelor's degree or higher, percent of persons age 25+"]),
  hovertemplate: "<b>%{text} County</b><br>" + 
                  "<b>Bachelor's degree+</b>: %{y}%<br>" + 
                  "<b>Population density</b>: %{x}<br>" + 
                  "<b>Population</b>: %{marker.size:,}<br>" + 
                  "<extra></extra>",
  text: data2.map(row => row["County"]),
  showlegend: false,
  mode: 'markers',
  marker: {
      color: data2.map(row => row["2016 Winner"]),
      size: data2.map(row => row["Population"]),
      sizemode: 'area',
      sizeref:  700
  },
  transforms: [
      {
        type: 'aggregate',
        aggregations: [
          {target: 'marker.size', func: 'sum'}
        ]
      }]
}];

var layout1 = {
    title: "2016 U.S. Election Results in California",
    //showlegend: false,
    hovermode: "closest",
    paper_bgcolor: 'rgba(245,246,249,1)',
    plot_bgcolor: 'rgba(245,246,249,1)',
    xaxis: {
        title: "POPULATION PER SQUARE MILE",
        titlefont: {
        family: 'Arial, sans-serif',
        size: 14,
        color: 'grey' },
        type: 'log'
    },
    yaxis: {
      title: "BACHELOR'S DEGREE OR HIGHER, %",
      titlefont: {
        family: 'Arial, sans-serif',
        size: 14,
        color: 'grey'}
    }
}
var layout2 = {
  title: "2016 U.S. Election Results in Texas",
  //showlegend: false,
  hovermode: "closest",
  paper_bgcolor: 'rgba(245,246,249,1)',
  plot_bgcolor: 'rgba(245,246,249,1)',
  xaxis: {
      title: "POPULATION PER SQUARE MILE",
      titlefont: {
      family: 'Arial, sans-serif',
      size: 14,
      color: 'grey' },
      type: 'log'
  },
  yaxis: {
    title: "BACHELOR'S DEGREE OR HIGHER, %",
    titlefont: {
      family: 'Arial, sans-serif',
      size: 14,
      color: 'grey'}
  }
}

var config = {responsive: true, displayModeBar: false}

Plotly.newPlot('bubble', data1, layout1, config)
Plotly.newPlot('bubble2', data2, layout2, config)