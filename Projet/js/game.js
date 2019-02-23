var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null;

var idAnimation=undefined;

var tics = 0;
var _timeToBeAlive = 30;
var gameRunning=false;
var bossAlive=false;

//Canvas
var divArena;
var canArena;
var canScore;
var conArena;
var conScore;
var ArenaWidth = 500;
var ArenaHeight = 300;
var canMenu;
var conMenu;
var MenuWidth = 500;
var MenuHeight = 300;

//Background
var imgBackground;
var xBackgroundOffset = 0;
var xBackgroundSpeed = 1;
var backgroundWidth = 1782;
var backgroundHeight = 600;



//Keys
var keys = {
    UP: 38,
    DOWN: 40,
    SPACE: 32,
    ENTER: 13
};

var keyStatus = {};

///////////////////////////////////

function keyDownHandler(event) {
    "use strict"; 
    var keycode = event.keyCode, 
        key; 
    for (key in keys) {
        if (keys[key] === keycode) {
            keyStatus[keycode] = true;
            event.preventDefault();
        }
    }
}
function keyUpHandler(event) {
   var keycode = event.keyCode,
            key;
    for (key in keys) 
        if (keys[key] == keycode) {
            keyStatus[keycode] = false;
        }
        
}
///////////////////////////////////


function updateGame() {
    "use strict"; 
    updateScene();
    updateItems();
}
function clearGame() {
    "use strict"; 
    clearItems();
    clearScore();
}

function drawGame() {
    "use strict"; 
    drawScene();
    drawScore();
    drawItems();    
}


function mainloop () {
    "use strict"; 
    clearGame();
    updateGame();
    if(gameRunning){
      drawGame();  
    }
    
}

function recursiveAnim () {
    "use strict";
    if(gameRunning){
        //Boucle du jeu
        mainloop();
    }
    else{
        // Boucle du menu
        menuloop();
    }
    idAnimation=animFrame( recursiveAnim );        
}



function initGame(){
    player.init();
    enemies.init();
}

function gameOver(){
    gameRunning=false;
    updateHighScore(player.projectileSet.score);
}

function init() {
    "use strict";
    divArena = document.getElementById("arena");
    canArena = document.createElement("canvas");
    canArena.setAttribute("id", "canArena");
    canArena.setAttribute("height", ArenaHeight);
    canArena.setAttribute("width", ArenaWidth);
    conArena = canArena.getContext("2d");
    divArena.appendChild(canArena);

    canScore = document.createElement("canvas");
    canScore.setAttribute("id","canScore");
    canScore.setAttribute("height", ArenaHeight);
    canScore.setAttribute("width", ArenaWidth);
    conScore = canScore.getContext("2d");
    //conScore.fillStyle = "rgb(200,0,0)";
    conScore.font = 'bold 12pt Courier';
    divArena.appendChild(canScore);

    canMenu = document.createElement("canvas");
    canMenu.setAttribute("id","canScore");
    canMenu.setAttribute("height", ArenaHeight);
    canMenu.setAttribute("width", ArenaWidth);
    conMenu = canScore.getContext("2d");
    conMenu.fillStyle = "rgb(250,250,250)";
    conMenu.font = 'bold 12pt Courier';
    divArena.appendChild(canScore);

    setHighScore();
    
    window.addEventListener("keydown", keyDownHandler, false);
    window.addEventListener("keyup", keyUpHandler, false);
    
    idAnimation=animFrame( recursiveAnim );
    music.play();
    
}

window.addEventListener("load", init, false);
