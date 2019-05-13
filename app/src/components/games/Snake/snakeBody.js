function snakeBody(){
    this.body = [head];
    this.velocity = createVector(0,0);

    this.update = function(){
        head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.add(this.velocity);
        head.x = constrain(head.x,-ratio,floor(width)+ceil(ratio-width%ratio));
        head.y = constrain(head.y,-ratio,floor(height)+ceil(ratio-height%ratio));
        this.body.push(head);
        textAlign(CENTER);
        textSize(20);
        fill(255);
        text('Score: ' + this.body.length,width - 50, 20);
    }
    
    this.endScreen = function(){
        background(255,0,0);
        textAlign(CENTER);
        textSize(50);
        fill(255);
        text('Score: ' + this.body.length,width/2, height/2);
        noLoop();
    }
    
    this.endGame = function(){
        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;
        for(let i=0;i<this.body.length-1;i++){
            let part = this.body[i];
            if(part.x == x && part.y == y){return true;}
        }
        if(x > width+1 || x < 0 || y > height+1 || y < 0) return true;
        return false;
    }

    this.show = function(){
        for(let i=0;i<this.body.length;i++){
            fill(255);
            rect(this.body[i].x,this.body[i].y,ratio,ratio);
        }
    }
    
    this.insert = function(){
        head = this.body[this.body.length-1].copy();
        this.body.push(head);
    }

    this.moveUp = function(){this.velocity.x = 0;this.velocity.y = -1*ratio;}
    this.moveDown = function(){this.velocity.x = 0;this.velocity.y = 1*ratio;}
    this.moveLeft = function(){this.velocity.x = -1*ratio;this.velocity.y = 0;}
    this.moveRight = function(){this.velocity.x = 1*ratio;this.velocity.y = 0;}
}