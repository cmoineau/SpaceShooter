var Point = function(x,y,canvas)
{
	this.canvas=canvas;
	this.canvas2dContext=this.canvas.getContext("2d");
	this.x=x;
	this.y=y;

	this.ache = function()
	{
		this.canvas2dContext.beginPath();
		this.canvas2dContext.arc(this.x,this.y,10,Math.PI/2,3*Math.PI/2,true);
		this.canvas2dContext.fillStyle = "gold";
		this.canvas2dContext.fill();
		this.canvas2dContext.strokeStyle="red";
		this.canvas2dContext.stroke();
	}
}
