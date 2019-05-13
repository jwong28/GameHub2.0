export function userScore(){
    this.score = 0;
    this.location = createVector(width/2,height/2);
    this.win = function(){this.score++;}
    this.update = function(){
        noStroke();
        fill(255);
        textAlign(CENTER);
        textSize(50);
        text(this.score,this.location.x,this.location.y);
    }
    this.outOfBounds = function(ball){
        if(ball.coord.x >= width){
            ball.coord.x = width/2;
            ball.coord.y = height/2;
            this.score++;
            // ball.increaseLevel();
        }
        else if(ball.coord.x <= 0){
            textAlign(CENTER);
            textSize(50);
            text('Score',this.location.x,this.location.y - 100);
        }
    }
}

// export default userScore;