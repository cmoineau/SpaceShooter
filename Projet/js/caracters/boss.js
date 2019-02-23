/////////////////////////////////
// Boss
function Boss(x,y,speed){
    this.x = x;
    this.yOrigine = y;
    this.y = this.yOrigine;
    this.xSpeed = speed;
    this.exists = true;
    this.height = 128;
    this.width = 128;
    this.img = new Image();
    this.img.src = "./assets/Boss/head_sheet.png";
    this.cpt = 0;
    this.life=3;

    this.cptExplosion =  0;//10 images
    this.imgExplosion = new Image();
    this.imgExplosionHeight = 128;
    this.imgExplosionWidth = 128;
    this.imgExplosion.src = "./assets/Explosion/explosionSpritesheet_1280x128.png";

    this.allowFire = true;

    this.life = 3;
    this.projectileSet = new ProjectileSet();
    this.explodes = function(){
        this.cptExplosion = 1;
        explosion_sfx.play();
        bossAlive=false;
    };
    this.collision = function(tabOfObjects){
        var hits = null;
        var index;
        for(index in tabOfObjects){
            if (this.x < tabOfObjects[index].x + tabOfObjects[index].width &&
                this.x + this.width > tabOfObjects[index].x &&
                this.y < tabOfObjects[index].y + tabOfObjects[index].height &&
                this.height + this.y > tabOfObjects[index].y) {
                    // collision detected!
                    hits = tabOfObjects[index];
                    break;
            }
        }
        return hits;
    };
    this.fire = function (){
        var tmp = new Aiming_Projectile(this.x-50,this.y+this.height/2,-8,10,5);
        this.projectileSet.add(tmp);
    };
    this.draw = function(){ 

        this.projectileSet.draw();

        if(this.cptExplosion!=0){
                conArena.drawImage(this.imgExplosion, this.cptExplosion*this.imgExplosionWidth, 0, this.imgExplosionWidth,this.imgExplosionHeight, this.x,this.y,this.width,this.height);
        }else{
            conArena.drawImage(this.img,  0,this.cpt*this.height,this.width,this.height, this.x,this.y,this.width,this.height);
        }
    };
    this.clear = function(){
        if(this.exists){
            conArena.clearRect(this.x,this.y,this.width,this.height);
        }
        this.projectileSet.clear();
    };
    this.update = function(){
       if(this.cptExplosion==0){//is not exploding
            this.y = this.yOrigine+ ArenaHeight/3 * Math.sin(this.x / 100);
            var tmp = this.collision([player]);
                if(tmp != null){
                        this.life--;
                        tmp.explodes();
                    if (this.life==0){
                        this.exists = false; 
                    }         
                }

            if(tics % 5 == 1) {
                    this.cpt = (this.cpt + 1) % 6;
            }
            if(tics % 100 == 1){
                if(tics % 300 == 1){
                    this.allowFire = !this.allowFire;
                }
                if(this.allowFire){
                    this.fire();
                }
            }
       }else{
            if(tics % 3 == 1) {
                this.cptExplosion++;
            }
            if(this.cptExplosion>10){//end of animation
                this.cptExplosion=0;
                this.life--;
                console.log("vie boss" + this.life);
                if(this.life<=0){
                    bossAlive=false
                    this.exists = false;
                    bossAlive=false;
                }   
            }
        }
        this.projectileSet.update();
    };
}