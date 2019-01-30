var intervalID;
var delayID;
var c;
var foward=true;
function rectangle(x,y)
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
function start(){
	c=0;
	intervalID=setInterval(moveSquare, 100);
	clearInterval(delayID);
}

function moveSquare(){
	rectangle(c,0);
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

function letsStart(){
	delayID = setInterval(start,2000);
}