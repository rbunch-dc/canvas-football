var currYardLine = 20;


$(document).ready(function($){
	var canvas = document.getElementById('the-field');
	var context = canvas.getContext("2d");
	currStartYardLine = (currYardLine*6) + 88
	newStartYardLine = (6 * 10) + currStartYardLine;
	context.moveTo(currStartYardLine, 80);
	context.lineTo( newStartYardLine, 80);
	context.lineWidth = 5;
	context.stroke();


	context.moveTo(newStartYardLine, 100);
	
	context.bezierCurveTo(
		newStartYardLine,100-25,
		newStartYardLine+(6*15),100-25, 
		newStartYardLine+(6*15), 100);

	context.stroke();

});