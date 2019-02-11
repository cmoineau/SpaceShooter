function menuloop(){
    clearMenu();
    updateMenu();
    if( !gameRunning){
        drawMenu();
    }
}

function drawMenu(){
    conMenu.fillText("[Press 'space' to begin the game]", 100,150);  
}

function clearMenu(){
    conMenu.clearRect(0,0,1782,600);
}

function updateMenu(){
    for (keycode in keyStatus) {
    if(keyStatus[keycode] == true){
        if(keycode == keys.UP) {
            // Move a cursor
        }
        if(keycode == keys.DOWN) {
            // Move a cursor
        }
        if(keycode == keys.SPACE) {
            // Do the action related to the selected button
            gameRunning=true;
            initGame();
       }
    }
    keyStatus[keycode] = false;
    }
}