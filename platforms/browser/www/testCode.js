function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
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

function mainToPortfolio(){
	window.location = "portfolioPage.html";
}

function portfolioToMain(){
	window.location = "index.html";
}