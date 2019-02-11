// puting the highscore in the local storage
function setHighScore(){
	if(!("highscore" in localStorage)){
		localStorage.setItem("highscore",0);
	}
}

function updateHighScore(cScore){
	if (cScore>localStorage.getItem('highscore')) {
		localStorage.setItem("highscore", cScore);
	}
}
