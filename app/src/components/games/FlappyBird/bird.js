function bird(){
    this.location = createVector(floor(width/4),height/2);
    this.gravity = createVector(0,0);
    this.falling = true;
    this.size = 20;

    this.update = function(){
        if(this.falling){this.gravity = createVector(0,2);}
        else{this.gravity = createVector(0,-30);}
        this.location.add(this.gravity);
        this.location.y = constrain(this.location.y,0,height);
        this.falling = true;
    }
    
    this.show = function(){
        fill(255);
        noStroke();
        ellipse(this.location.x,this.location.y,this.size);
    }

    this.toggleFall = function(){this.falling = !this.falling;}
}