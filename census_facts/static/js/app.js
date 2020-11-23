// from data.js, assign data to a descriptive variable
var tableData = data;

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
    // test
    console.log(inputValue);
    console.log(tableData);

    // filter() uses input as its argument
    var filteredData = tableData.filter(ca => ca.County === inputValue);
    // test
    console.log(filteredData);

    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    filteredData.forEach(function(caReport) {
        console.log(caReport);
        // append one table row 'tr' for each report object
        var row = tbody.append("tr");

        // use 'Object.entries' to console.log each report value
        Object.entries(caReport).forEach(function([key, value]) {
            console.log(key, value);
            // use d3 to append 1 cell for each value in the report object (column)
            var cell = row.append("td");
            // use d3 to update each cell's text with report values
            cell.text(value);
        });
    });

    // create the table name based on our list selection
    document.getElementById("demo1").innerHTML = `${inputValue} County`;

    // grab the table
    var tble = document.getElementById("edit");
    // getting the rows in table
    var row1 = tble.rows;
    // removing the column at index(0)
    var a = 0;
    for (var b = 0; b < row1.length; b++) {
        // deleting the a'th cell of each row
        row1[b].deleteCell(a);
    }
    

};