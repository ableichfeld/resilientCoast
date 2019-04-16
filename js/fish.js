var width = "100%";
var height = 100;

var svg = d3.select("#fish1")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var fish1 = svg.append("svg:image")
  .attr("xlink:href", "images/Fish_(Purples).svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("x", "1000px")
  .attr("y", 0)
  .attr("position", "absolute");



/*
= svg.append("svg:image")
  .attr("xlink:href","images/Graphic3.svg")
  .attr("x", )
  .attr("y", )
  .attr("width", )
  .attr("height", )
  .attr("position", "absolute")
*/
