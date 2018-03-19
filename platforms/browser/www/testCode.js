function init() {
    document.addEventListener("deviceready", deviceInfo, true);
}

function changeColor(){
	//Test
    document.getElementById("title").style.color = "blue";
}

function onLoad(){
  document.addEventListener("deviceready", onDeviceReady, true);
}

function onDeviceReady(){
  // navigator.notification.alert("PhoneGap is working");
}

//Button Page Navigation
function back(){
  window.history.back();
}

function mainToPortfolio(){
	window.location = "portfolioPage.html";
}
function mainToTrends(){
  window.location = "trendsPage.html";
}

//Setting Up Graph -- Test At the moment.
var options = {
   "IECanvasHTC": "/plotkit/iecanvas.htc",
   "colorScheme": PlotKit.Base.palette(PlotKit.Base.baseColors()[0]),
   "padding": {left: 0, right: 0, top: 10, bottom: 30},
   "xTicks": [{v:0, label:"zero"}, 
          {v:1, label:"one"}, 
          {v:2, label:"two"},
          {v:3, label:"three"},
          {v:4, label:"four"}],
   "drawYAxis": false
};
function drawGraph() {
    var layout = new PlotKit.Layout("bar", options);
    layout.addDataset("sqrt", [[0, 0], [1, 1], [2, 1.414], [3, 1.73], [4, 2]]);
    layout.evaluate();
    var canvas = MochiKit.DOM.getElement("graph");
    var plotter = new PlotKit.SweetCanvasRenderer(canvas, layout, options);
    plotter.render();
}
MochiKit.DOM.addLoadEvent(drawGraph);