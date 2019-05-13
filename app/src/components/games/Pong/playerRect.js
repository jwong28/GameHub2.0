function playerRect() {
    this.tall = 100;
    this.wide = 15;
    this.coord = createVector(this.wide*2, height/2-this.tall/2);
    this.velocity = createVector(0,0);
    maxVelocity = 10;

    this.show = function(){
        noStroke();
        fill(255);
        rect(this.coord.x, this.coord.y, this.wide, this.tall);
    }
    
    this.isHit = function(ball){
        if(((ball.coord.x) >= this.coord.x) && (ball.coord.x <= (this.coord.x + this.wide + ball.rad))){
            if((ball.coord.y >= this.coord.y) && (ball.coord.y <= (this.coord.y + this.tall))){
                ball.velocity.x *=-1;
                ball.velocity.y *=-1;
            }
        }
    }

    this.update = function(){
        this.velocity.y = constrain(this.velocity.y, -maxVelocity, maxVelocity);
        this.coord.add(this.velocity);
        this.coord.y = constrain(this.coord.y, 0,height-this.tall);
    }

    this.pause = function(){this.velocity.y = 0;}
    this.moveUp = function(){this.velocity.y -= 10;}
    this.moveDown = function(){this.velocity.y += 10;}
}

export default playerRect;