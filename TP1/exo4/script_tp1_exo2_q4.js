var delayID;
var c;
numberOfSquare=0;
var foward=true;

function start(){
	c=0;
	numberOfSquare++;
	intervalID=setInterval(moveSquare, 100);
	if (numberOfSquare==3){
		clearInterval(delayID);
	}
}



function letsStart(){
	delayID = setInterval(start,2000);
}

class movingSquare{
	var intervalID;
	var canvas;
	constructor(){
		this.canvas = document.getElementById("myCanvas"); 
	}
	function moveSquare(){
		drawSquare(c,0);
		if (foward){
			c+=10;	
		}
		else{
			c-=10;
		}
		var larg = (document.body.clientWidth);
		if(c>larg-100){
			foward=false;
		}
		if(c==0){
			foward=true;
		}
	}
	function drawSquare(x,y)
	{
		  var canvas = document.getElementById("canvas1"); 
		  var context = canvas.getContext("2d");
		  context.clearRect(0, 0, canvas.width, canvas.height);
		  context.beginPath();
		  //context.lineWidth="2";
		  context.fillRect(x,y,100,100);
		  context.fillStyle="red";
		  context.stroke();
	}
}