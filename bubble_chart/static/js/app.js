var data = [{
    x: data.map(row => row["Population per square mile"]),
    y: data.map(row => row["Bachelor's degree or higher, percent of persons age 25+"]),
    text: data.map(row => row["County"]),
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

var layout = {
    xaxis: {
        type: 'log'
    }
}

Plotly.newPlot('bubble', data, layout)