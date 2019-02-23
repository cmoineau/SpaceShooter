var c;
var intervalID;

function letsCountToTen(){
	c=0;
	intervalID=setInterval(increment, 1000);
}
function increment(){
	c++;
	counterSpace=document.getElementById('count');
	content=document.createElement('p');
	content.textContent=String(c);
	if(c==10){
		clearInterval(intervalID);
		content.textContent="Fin du compteur !!!";
	}
	counterSpace.appendChild(content);
}