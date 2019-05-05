function food(){
    this.coord = createVector(floor(random(floor(random(width/ratio)))),floor(random(floor(random(height/ratio)))));
    this.coord.mult(ratio);
    this.velocity = createVector(0,0);
    this.wide = 20;
    this.isFood = true;

    this.update = function(){
        this.coord.add(this.velocity);
        this.coord.x = constrain(this.coord.x,-ratio,floor(width)+ceil(ratio-width%ratio));
        this.coord.y = constrain(this.coord.y,-ratio,floor(height)+ceil(ratio-height%ratio));

    }

    this.show = function(){
        noStroke();
        fill(this.isFood ? 180 : 255);
        rect(this.coord.x,this.coord.y,this.wide,this.wide);
    }

    this.collide = function(food){return (this.coord.x === food.coord.x && this.coord.y === food.coord.y);}
    this.notFoodAnymore = function(){this.isFood = !this.isFood;}
    this.moveUp = function(){this.velocity.x = 0;this.velocity.y = -1*ratio;}
    this.moveDown = function(){this.velocity.x = 0;this.velocity.y = 1*ratio;}
    this.moveLeft = function(){this.velocity.x = -1*ratio;this.velocity.y = 0;}
    this.moveRight = function(){this.velocity.x = 1*ratio;this.velocity.y = 0;}
}