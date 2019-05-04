function compRect() {
    this.tall = 100;
    this.wide = 15;
    this.coord = createVector(width-this.wide*2, height/2-this.tall/2);
    this.velocity = createVector(0,20);
    this.maxVelocity = 20;

    this.show = function(){
        noStroke();
        fill(255);
        rect(this.coord.x, this.coord.y, this.wide, this.tall);
    }

    this.isHit = function(ball){
        if((ball.coord.x >= (this.coord.x - ball.rad)) && (ball.coord.x <= this.coord.x + this.wide)){
            if((ball.coord.y >= this.coord.y) && (ball.coord.y <= (this.coord.y + this.tall))){
                ball.velocity.x*=-1;
                ball.velocity.y*=-1;
            }
        }
    }

    this.update = function(){
        this.velocity.y = constrain(this.velocity.y, -this.maxVelocity, this.maxVelocity);
        if(this.coord.y <= 0 || this.coord.y >= height-this.tall){
            this.velocity.y = -this.velocity.y;
        }
        this.coord.add(this.velocity);
    }
}