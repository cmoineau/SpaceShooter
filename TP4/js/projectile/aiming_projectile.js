////////////////////
// un objet Projectile
function Aiming_Projectile(x,y,speed,width,height){
    this.img = new Image();
    this.img.src = "./assets/Boss/hatch_sheet.png";
    this.height=16;
    this.width=16;
    this.x = x;
    this.y = y;
    this.xSpeed = speed;
    this.exists = true;
    this.cpt=0
    this.collision = function(tabOfObjects){
        var hits = null;
        var index;
        for(index in tabOfObjects){
            if ((tabOfObjects[index].cptExplosion ==0) && this.x < tabOfObjects[index].x + tabOfObjects[index].width &&
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
    this.draw = function(){
        if(this.exists){
            conArena.drawImage(this.img,  0,(this.cpt*this.height),this.width,this.height, this.x,this.y,this.width,this.height);
            if(tics % 5 == 1) {
                this.cpt=(this.cpt+1)%4;
            }
        }
    };
    this.clear = function(){
        if(this.exists){
            conArena.clearRect(this.x-1,this.y-1,this.width+2,this.height+2);
        }
    };
    this.update = function(){
        if(this.exists){
            if(tics % 20 == 1) {
                this.x +=this.xSpeed ;
                if(player.y<this.y){
                   this.y -= 5; 
                }
                else if(player.y+player.height>this.y){
                    this.y += 5;
                }
            }
            var tmp = this.collision([player].concat(enemies.tabEnemies));
            if(tmp != null){
                tmp.explodes();
                this.exists = false;
            }
        }
    };
}
;