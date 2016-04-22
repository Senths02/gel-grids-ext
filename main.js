var gridVisibleDefault = false;
var gridVisible;
var toggleAutoGrid = document.getElementById("auto-grid");
var toggle1280Grid = document.getElementById("1280-grid");
var clearGrid = document.getElementById("clear-grid");
var columnContainer;
var gridColumn;
var gridGutter;
var tabID;
var visible;

window.onload = function(){
	if (gridVisible == undefined || (gridVisible != false && gridVisible != true)){
		gridVisible = gridVisibleDefault;
		console.log(gridVisible);
	}
}

toggleAutoGrid.onclick = function(){
	
	chrome.tabs.executeScript({
		file:"remove-grid.js"
	}, function(){
		chrome.tabs.executeScript({
    		file:"create-auto-grid.js"
  		});
	});
	
	chrome.tabs.insertCSS({file:"gel-grids.css"});
	gridVisible = true;
	console.log(gridVisible);
		
}

toggle1280Grid.onclick = function(){

	chrome.tabs.executeScript({
		file:"remove-grid.js"
	}, function(){
		chrome.tabs.executeScript({
    		file:"create-1280-grid.js"
  		});
	});
	
	chrome.tabs.insertCSS({file:"gel-grids.css"});
	gridVisible = true;
	console.log(gridVisible);

}

clearGrid.onclick = function(){
	chrome.tabs.executeScript({
		file:"remove-grid.js"
	});
	gridVisible == false;
}

