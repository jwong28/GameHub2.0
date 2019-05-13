function food(){
    this.coord = createVector(floor(random(floor(random(width/ratio)))),floor(random(floor(random(height/ratio)))));
    this.coord.mult(ratio);
    this.velocity = createVector(0,0);
    this.wide = 20;
    this.isFood = true;

    this.update = function(){
    }

    this.show = function(){
        noStroke();
        fill(this.isFood ? 180 : 255);
        rect(this.coord.x,this.coord.y,this.wide,this.wide);
    }

    this.collide = function(food){return (this.coord.x === food.coord.x && this.coord.y === food.coord.y);}
    this.notFoodAnymore = function(){this.isFood = !this.isFood;}
}