var visible = document.getElementsByClassName('gel-grid-visible'); 
var columns = document.getElementsByClassName('gel-grid-column'); 
var columnContainers = document.getElementsByClassName('gel-grid-column-container'); 
var autoGelGrid = document.getElementsByClassName('auto-gel-grid')[0];
var autoGelGridContainer = document.getElementsByClassName('auto-gel-grid-container')[0];
var gelGridMargins = document.getElementsByClassName('gel-grid-margin');
var gelGrid = document.getElementsByClassName('1280-gel-grid')[0];
var gelGridContainer = document.getElementsByClassName('1280-gel-grid-container')[0];

if(visible.length>0){
	 while(columns.length){
	 	columns[0].parentNode.removeChild(columns[0]);
	 	columnContainers[0].parentNode.removeChild(columnContainers[0]);
	 }
	 while(gelGridMargins.length){
	 	gelGridMargins[0].parentNode.removeChild(gelGridMargins[0]);
	 }
	 if(gelGrid==undefined){
	 	autoGelGrid.parentNode.removeChild(autoGelGrid);
	 	autoGelGridContainer.parentNode.removeChild(autoGelGridContainer);
	 }
	 if(autoGelGrid==undefined){
	 	gelGrid.parentNode.removeChild(gelGrid);
	 	gelGridContainer.parentNode.removeChild(gelGridContainer);
	 }
}