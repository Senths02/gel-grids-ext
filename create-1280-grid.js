var columnContainers = document.getElementsByClassName('gel-grid-column-container');
var grid = document.getElementsByClassName('1280-gel-grid');
var margins = document.getElementsByClassName('gel-grid-margin');

if (window.innerWidth > 1279 && grid.length==0){
	var gelGridContainer=document.createElement('div');
	document.body.appendChild(gelGridContainer);
	gelGridContainer.className = '1280-gel-grid-container';

	var gelGrid=document.createElement('div');
	gelGridContainer.appendChild(gelGrid);
	gelGrid.className = '1280-gel-grid';

	var margin1 = document.createElement('div');
	gelGrid.appendChild(margin1);
	margin1.className = 'gel-grid-margin';
	margin1.className += ' gel-grid-margin-left';

	var columnContainer1=document.createElement('div');
	var gridColumn1=document.createElement('div');
	columnContainer1.appendChild(gridColumn1);
	gelGrid.appendChild(columnContainer1);
	columnContainer1.className = 'gel-grid-visible';
	columnContainer1.className += ' gel-grid-column-container';
	gridColumn1.className = 'gel-grid-visible';
	gridColumn1.className += ' gel-grid-column'; 

	var columnContainer2=document.createElement('div');
	var gridColumn2=document.createElement('div');
	columnContainer2.appendChild(gridColumn2);
	gelGrid.appendChild(columnContainer2);
	columnContainer2.className = 'gel-grid-visible';
	columnContainer2.className += ' gel-grid-column-container';
	gridColumn2.className = 'gel-grid-visible';
	gridColumn2.className += ' gel-grid-column'; 

	var columnContainer3=document.createElement('div');
	var gridColumn3=document.createElement('div');
	columnContainer3.appendChild(gridColumn3);
	gelGrid.appendChild(columnContainer3);
	columnContainer3.className = 'gel-grid-visible';
	columnContainer3.className += ' gel-grid-column-container';
	gridColumn3.className = 'gel-grid-visible';
	gridColumn3.className += ' gel-grid-column'; 

	var columnContainer4=document.createElement('div');
	var gridColumn4=document.createElement('div');
	columnContainer4.appendChild(gridColumn4);
	gelGrid.appendChild(columnContainer4);
	columnContainer4.className = 'gel-grid-visible';
	columnContainer4.className += ' gel-grid-column-container';
	gridColumn4.className = 'gel-grid-visible';
	gridColumn4.className += ' gel-grid-column'; 

	var columnContainer5=document.createElement('div');
	var gridColumn5=document.createElement('div');
	columnContainer5.appendChild(gridColumn5);
	gelGrid.appendChild(columnContainer5);
	columnContainer5.className = 'gel-grid-visible';
	columnContainer5.className += ' gel-grid-column-container';
	gridColumn5.className = 'gel-grid-visible';
	gridColumn5.className += ' gel-grid-column'; 

	var columnContainer6=document.createElement('div');
	var gridColumn6=document.createElement('div');
	columnContainer6.appendChild(gridColumn6);
	gelGrid.appendChild(columnContainer6);
	columnContainer6.className = 'gel-grid-visible';
	columnContainer6.className += ' gel-grid-column-container';
	gridColumn6.className = 'gel-grid-visible';
	gridColumn6.className += ' gel-grid-column'; 

	var columnContainer7=document.createElement('div');
	var gridColumn7=document.createElement('div');
	columnContainer7.appendChild(gridColumn7);
	gelGrid.appendChild(columnContainer7);
	columnContainer7.className = 'gel-grid-visible';
	columnContainer7.className += ' gel-grid-column-container';
	gridColumn7.className = 'gel-grid-visible';
	gridColumn7.className += ' gel-grid-column'; 

	var columnContainer8=document.createElement('div');
	var gridColumn8=document.createElement('div');
	columnContainer8.appendChild(gridColumn8);
	gelGrid.appendChild(columnContainer8);
	columnContainer8.className = 'gel-grid-visible';
	columnContainer8.className += ' gel-grid-column-container';
	gridColumn8.className = 'gel-grid-visible';
	gridColumn8.className += ' gel-grid-column'; 

	var columnContainer9=document.createElement('div');
	var gridColumn9=document.createElement('div');
	columnContainer9.appendChild(gridColumn9);
	gelGrid.appendChild(columnContainer9);
	columnContainer9.className = 'gel-grid-visible';
	columnContainer9.className += ' gel-grid-column-container';
	gridColumn9.className = 'gel-grid-visible';
	gridColumn9.className += ' gel-grid-column'; 

	var columnContainer10=document.createElement('div');
	var gridColumn10=document.createElement('div');
	columnContainer10.appendChild(gridColumn10);
	gelGrid.appendChild(columnContainer10);
	columnContainer10.className = 'gel-grid-visible';
	columnContainer10.className += ' gel-grid-column-container';
	gridColumn10.className = 'gel-grid-visible';
	gridColumn10.className += ' gel-grid-column'; 

	var columnContainer11=document.createElement('div');
	var gridColumn11=document.createElement('div');
	columnContainer11.appendChild(gridColumn11);
	gelGrid.appendChild(columnContainer11);
	columnContainer11.className = 'gel-grid-visible';
	columnContainer11.className += ' gel-grid-column-container';
	gridColumn11.className = 'gel-grid-visible';
	gridColumn11.className += ' gel-grid-column'; 

	var columnContainer12=document.createElement('div');
	var gridColumn12=document.createElement('div');
	columnContainer12.appendChild(gridColumn12);
	gelGrid.appendChild(columnContainer12);
	columnContainer12.className = 'gel-grid-visible';
	columnContainer12.className += ' gel-grid-column-container';
	gridColumn12.className = 'gel-grid-visible';
	gridColumn12.className += ' gel-grid-column'; 

	var margin2 = document.createElement('div');
	gelGrid.appendChild(margin2);
	margin2.className = 'gel-grid-margin';
	margin2.className += ' gel-grid-margin-right';

	for(var i=0;i<columnContainers.length;i++){
		columnContainers[i].style.padding = '0 8px';
	}
	for(var i=0;i<margins.length;i++){
		margins[i].style.width = '0 16px';
	}
	grid[0].style.padding = '0 4px';

}