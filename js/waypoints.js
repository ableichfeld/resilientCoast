/*

Template for Waypoint trigger:

var WAYPOINT = new Waypoint({
  element: document.querySelector(SELECTION),
  handler: function(direction) {
    if(direction === "down") {

      <-- ACTION GOES HERE FOR DOWNWARD SCROLLING-->

    } else if(direction === "up") {

      <-- ACTION GOES HERE FOR UPWARD SCROLLING -->

    }
  }
});

*/

/*Element is what triggers the event, handler is the function triggered when the element is triggered.
You can have different actions for different directions of scrolling.
*/

var fish1 = new Waypoint({
  element: document.querySelector("#trigger1a"),
  handler: function(direction) {
    if(direction === "down") {
      document.querySelector("#photo").src="images/boston-common.jpg";
    } else if(direction === "up") {
      document.querySelector("#photo").src="images/back-bay.jpg";
    }
  }
});
