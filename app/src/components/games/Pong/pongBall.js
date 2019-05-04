function pongBall(){
    this.coord = createVector(width/2,height/2);
    this.rad = 15;
    this.maxVelocity = 10;
    this.level = 1;
    do{
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(4,6));
    }while(abs(this.velocity.x)<3 || abs(this.velocity.y)<3);

    this.show = function(){
        noStroke();
        fill(255);
        ellipse(this.coord.x,this.coord.y,this.rad*2);
    }

    this.update = function(){
        this.velocity.setMag(this.maxVelocity*this.level);
        this.velocity.x = constrain(this.velocity.x,-(this.maxVelocity*this.level),(this.maxVelocity*this.level));
        this.velocity.y = constrain(this.velocity.y,-(this.maxVelocity*this.level),(this.maxVelocity*this.level));
        this.coord.add(this.velocity);
        if((this.coord.y < this.rad) || 
           (this.coord.y > height-this.rad)){
               this.velocity.y*=-1;
           }
    }

    this.increaseLevel = function(score){
        this.level+= score*1;
        do{
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(4,6));
        }while(abs(this.velocity.x)<3 || abs(this.velocity.y)<3);
    }
}