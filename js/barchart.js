var width = 750;
var height = 500;
var margin = {top: 25, left: 75, right: 25, bottom: 75};

var svg = d3.select("#barchart")
  .append("svg")
  .attr("width",width)
  .attr("height", height);

  var set1 = [
    {year: 2030, rise: 6.0},
    {year: 2050, rise: 13.2},
    {year: 2070, rise: 26.4}
  ]

  var set2 = [
    {year: 2030, rise: 6.0},
    {year: 2050, rise: 12.0},
    {year: 2070, rise: 22.8}
  ]

  var set3 = [
    {year: 2030, rise: 6.0},
    {year: 2050, rise: 12.0},
    {year: 2070, rise: 20.4}
  ]


var xScale = d3.scaleBand()
  .domain(["2030","2050","2070"])
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

var tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden");


var bar = svg.selectAll("rect")
  .data(set2)
  .enter()
  .append("rect")
    .attr("x",function(d) { return xScale(d.year); })
    .attr("y", function(d) { return yScale(d.rise); })
    .attr("width",xScale.bandwidth())
    .attr("height", function(d) { return height - margin.bottom - yScale(d.rise); })
    .attr("fill","#33cccc")
    .on("mouseover", function(d) {
      d3.select(this)
        .attr("fill","steelblue");
      tooltip.style("visibility", "visible")
        .text(`Estimated sea level rise: ${d.rise} inches`);
    }).on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
    .on("mouseout", function() {
      d3.select(this)
        .attr("fill","#33cccc")
      return tooltip.style("visibility", "hidden");
    });


var xLabel = svg.append("text")
  .attr("class", "axisLabel")
  .attr("x", width/2)
  .attr("y", height-20)
  .attr("text-anchor", "middle")
  .text("Year");

var yLabel = svg.append("text")
  .attr("class", "axisLabel")
  .attr("transform", "rotate(-90)")
  .attr("y", 20)
  .attr("x", -height/2  )
  .attr("text-anchor", "middle")
  .text("Predicted sea level rise (inches)");
