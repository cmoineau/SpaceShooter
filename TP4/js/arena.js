function updateScene() {
    "use strict"; 
    xBackgroundOffset = (xBackgroundOffset - xBackgroundSpeed) % backgroundWidth;
}
function updateItems() {
    "use strict"; 
    player.update();
    tics++;
     if(tics % 100 == 1) {
         var rand = Math.floor(Math.random() * ArenaHeight);
        if(player.projectileSet.score<5){
            enemies.add(new Enemy(ArenaWidth, rand,-2));
        }
        else{
            var x = Math.floor(Math.random() * (3 ));
            console.log(x);
            if(x<2) {
                enemies.add(new Enemy(ArenaWidth, rand,-2));
            }
            else {
                enemies.add(new ResilientEnemy(ArenaWidth, rand,-2));
            }
        }
    }
    enemies.update();
}
function drawScene() {
    "use strict"; 
    canArena.style.backgroundPosition = xBackgroundOffset + "px 0px" ;
}
function drawItems() {
    "use strict"; 
    player.draw();
    enemies.draw();
}
function clearItems() {
    "use strict"; 
    player.clear(); 
    enemies.clear();
}

function clearScore() {
    conScore.clearRect(0,0,300,50);
}
function drawScore() {
    conScore.fillText("life : "+player.nbOfLives, 10, 25);
    conScore.fillText("score : "+player.projectileSet.score, 150,25);
    conScore.fillText("high score : "+localStorage.getItem('highscore'), 300,25);
}