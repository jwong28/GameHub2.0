function snakeBody(){
    this.body = [head];

    this.update = function(){
        print(this.body);
        for(let i=this.body.length-1;i>1;i--){
            this.body[i].coord = this.body[i-1].coord;
        }
    }
    
    this.show = function(){
        noStroke();
        fill(255);
        for(let i=this.body.length-1;i>1;i--){
            rect(this.body[i].coord.x,this.body[i].coord.y,20);
        }
    }
    
    this.insert = function(food){
        food.notFoodAnymore();
        this.body.push(food);
    }
}