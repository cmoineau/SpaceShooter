
// NOT WORKING !!!!!
var delayID;
var numberOfSquare=0;
var squares=[];
function start(){
	squares[numberOfSquare]= new movingSquare();
	intervalID=setInterval(squares[numberOfSquare].moveSquare, 100);
	numberOfSquare++;
	if (numberOfSquare==3){
		clearInterval(delayID);
	}
}

function letsStart(){
	delayID = setInterval(start,2000);
}

class movingSquare{
	constructor(){
		this.c=0;
		this.foward=true;
		this.div=document.getElementById("canvasd");
		this.canvas = document.createElement("canvas");
		this.canvas.width=10000;
		this.canvas.height=100
		this.div.appendChild(this.canvas);

		function drawSquare(x,y){
			console.log('test');
			this.context = this.canvas.getContext("2d");
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.context.beginPath();
			this.context.fillRect(x,y,100,100);
			this.context.fillStyle="red";
			this.context.stroke();
		}
		function getc(){
			return this.c;
		}
		function setc(nc){
			this.c=nc;
		}
	}
}
function moveSquare(){
	console.log(String(c));
	drawSquare(this.c,0,this.canvas);
	if (foward){
		this.c+=10;	
	}
	else{
		this.c-=10;
	}
	var larg = (document.body.clientWidth);
	if(this.c>larg-100){
		this.foward=false;
	}
	if(this.c==0){
		this.foward=true;
	}
}