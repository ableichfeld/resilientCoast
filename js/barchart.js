var width = 750;
var height = 500;
var margin = {top: 25, left: 25, right: 25, bottom: 25};

var svg = d3.select("#barchart")
  .append("svg")
  .attr("width",width)
  .attr("height", height);

  var data1 = [
    {year: 2020, rise: 1},
    {year: 2030, rise: 3},
    {year: 2040, rise: 5},
    {year: 2050, rise: 11},
    {year: 2060, rise: 18},
    {year: 2070, rise: 27},
  ]

var xScale = d3.scaleBand()
  .domain(["2020","2030","2040","2050","2060","2070"])
  .rangeRound([margin.left, width-margin.right])
  .padding(0.5);

var yScale = d3.scaleLinear()
  .domain([0,30])
  .range([height-margin.bottom, margin.top]);

var xAxis = svg.append("g")
  .attr("transform",`translate(0,${height-margin.bottom})`)
  .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
  .attr("transform",`translate(${margin.left},0)`)
  .call(d3.axisLeft().scale(yScale));

var bar = svg.selectAll("rect")
  .data(data1)
  .enter()
  .append("rect")
    .attr("x",function(d) { return xScale(d.year); })
    .attr("y", function(d) { return yScale(d.rise); })
    .attr("width",xScale.bandwidth())
    .attr("height", function(d) { return height - margin.bottom - yScale(d.rise); })
    .attr("fill","steelblue")
    .on("mouseover", function() {
      d3.select(this)
        .attr("fill","red");
    }).on("mouseout", function() {
      d3.select(this)
        .attr("fill","steelblue");
    })
