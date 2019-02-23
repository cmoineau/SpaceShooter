/////////////////////////////////
// Hero Player
var player = {
    init : function(){
        this.img = new Image();
        this.img.src = "./assets/Ship/Spritesheet_64x29.png";
        this.cpt = 0;
        this.cptExplosion =  0;
        this.imgExplosion = new Image();
        this.imgExplosionHeight = 128;
        this.imgExplosionWidth = 128;
        this.imgExplosion.src = "./assets/Explosion/explosionSpritesheet_1280x128.png";
        this.projectileSet = new ProjectileSet();
        this.nbOfLives=2;
        this.canFire = true;
        this.reload=5;
    },
    x : 20,
    ySpeed : 10,
    y : 100,
    height : 29,
    width : 64,
    timeToBeAlive : 0, // A counter to avoid the player being hit more than once
    fires : function(){
        if(this.canFire){
            var tmp = new Projectile(this.x+this.width,this.y+this.height/2,4,10,3,"rgb(200,0,0)");
            this.projectileSet.add(tmp);
            this.canFire=false;
            this.reload=0;
        }
    },
    explodes : function(){
        explosion_sfx.play();
        if(this.timeToBeAlive == 0) {
            this.nbOfLives--;
            if(this.nbOfLives>0){
                this.timeToBeAlive = _timeToBeAlive;
                this.cptExplosion = 1;
            }else{
                //Game Over
                gameOver();
            }
        }
    },
    clear : function(){
        conArena.clearRect(this.x,this.y,this.width,this.height);
        this.projectileSet.clear();
    },
    update :  function(){
        //console.log("Cpt Explo :"  + this.cptExplosion);
        var keycode;
        if(tics % 10 == 1) {
                this.cpt = (this.cpt + 1) % 4;
            }
        if(this.timeToBeAlive>0) {
            this.timeToBeAlive --;
        }else{
            for (keycode in keyStatus) {
                if(keyStatus[keycode] == true){
                    if(keycode == keys.UP) {
                        this.y -= this.ySpeed;
                        if(this.y<0) this.y=0;
                    }
                    if(keycode == keys.DOWN) {
                        this.y += this.ySpeed;
                        if(this.y>ArenaHeight-this.height) this.y=ArenaHeight-this.height;
                    }
                    if(keycode == keys.SPACE) {
                        this.fires();
                    }
                }
             keyStatus[keycode] = false;
            }
        }
        if(! this.canFire){
            if(tics % 10 == 1) {
                this.reload++;
                console.log("Temps de recharge de l'arme = " + this.reload)
                if(this.reload==5){
                    this.canFire=true;
                }
            }
        }
        this.projectileSet.update();
    },
    draw : function(){
        if(this.timeToBeAlive == 0) {
            conArena.drawImage(this.img, 0,this.cpt*this.height,this.width,this.height, this.x,this.y,this.width,this.height);
        }else{
            //exploding
            if(this.cptExplosion!=0){
                conArena.drawImage(this.imgExplosion, this.cptExplosion*this.imgExplosionWidth, 0, this.imgExplosionWidth,this.imgExplosionHeight, this.x,this.y,this.width,this.height);
               if(tics % 3 == 1) {this.cptExplosion++;}
                if(this.cptExplosion>10) this.cptExplosion=0;
            }
        }
        this.projectileSet.draw();
    }
};
