// NOT WORKING !!!!!
class movingSquare{
	constructor (){
		console.log("Construction d'un carré");
		this.c=0;
		this.foward=true;
		this.div=document.getElementById("canvasd");
		this.canvas = document.createElement("canvas");
		this.canvas.width=10000;
		this.canvas.height=100;
		this.div.appendChild(this.canvas);
		this.intervalID=setInterval(this.moveSquare, 100);
	}

	static drawSquare (x,y){
		super.drawSquare();
		this.context = this.canvas.getContext("2d");
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.beginPath();
		this.context.fillRect(x,y,100,100);
		this.context.fillStyle="red";
		this.context.stroke();
	}
	static moveSquare (){
		super.moveSquare();
		console.log("JE suis vivant !");
		console.log(String(this.c));
		this.drawSquare(this.c,0,this.canvas);
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

}

var delayID;
var numberOfSquare=0;
var squares=[];
function start(){
	console.log("Initialisation du "+ String(numberOfSquare) + " ème carré");
	tmp = new movingSquare();
	numberOfSquare++;
	if (numberOfSquare==3){
		clearInterval(delayID);
	}
}

function letsStart(){
	console.log("Début du programme !")
	delayID = setInterval(start,2000);
}

