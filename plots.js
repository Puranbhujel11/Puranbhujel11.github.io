console.log("This is some output from the JS File");

// declaring an array of x values for the plot
let xData = [1, 2, 3, 4, 5];

// declare an array of y values to be associated with the x values for the plot
let yData = [4, 2, 6, 8, 1];

console.log(xData);
console.log(yData);

// to set up a plot in plotly, set up a JS object (same as a python dictionary)
// that is also known as a trace
let trace1 = {
    x: xData,
    y: yData
};

// then put the trace information into a list (or array)
let data = [trace1];

// then specify the layout information
let layout = {
    title: "A Plotly Plot"
};

// call Plotly.newPlot() to put the plot into an id
Plotly.newPlot("plot", data, layout);