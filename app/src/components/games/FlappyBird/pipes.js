function pipes(){
    this.pipePairs = [];
    this.pipeWidth = 100;
    this.pipeHeight = 50;
    this.velocity = createVector(-2,0);
    this.gap = 100;

    this.insertPipe = function(){
        let y = random(floor(100,height-200));
        //top pipe
        this.pipePairs.push(createVector(width,y));
        //bottom pipe
        this.pipePairs.push(createVector(width,height-this.pipeHeight-y-this.gap));
    }

    this.update = function(){
        print(this.pipePairs);
        for(let i=0;i<this.pipePairs.length;i++){
            this.pipePairs[i].add(this.velocity);
            if(this.pipePairs[i].x < 0){
                //Removing the pipe pairs since the pairs are every 2, we remove the first value of the array 2 times.
                this.pipePairs.shift();
                this.pipePairs.shift();
            }
        }
    }

    this.show = function(){
        for(let i=0;i<this.pipePairs.length;i++){
            fill(255);
            rect(this.pipePairs[i].x,this.pipePairs[i].y,this.pipeWidth,this.pipeHeight);
        }
    }
}