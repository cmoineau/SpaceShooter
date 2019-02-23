var Preview = function(x,y,canvas)
{
	this.canvas=canvas;
	this.canvas2dContext=this.canvas.getContext("2d");
	this.x=x;
	this.y=y;
	this.update = function(lenght,advancement)
	{
		var proportion=advancement/lenght;
		console.log(proportion);
		this.canvas2dContext.clearRect(0, 0, canvas.width, canvas.height);
		this.canvas2dContext.beginPath();
		this.canvas2dContext.arc(this.x,this.y,75,0,(Math.PI)*2*proportion,true);
		this.canvas2dContext.strokeStyle="blue";
		this.canvas2dContext.stroke();
	}

}

