let pipeBody;
let flappyBird;
function setup(){
    // frameRate(2);
    createCanvas(windowWidth,windowHeight/1.31);
    pipeBody = new pipes();
    flappyBird = new bird();
}

function draw(){
    background(0);
    flappyBird.update();
    flappyBird.show();

    pipeBody.insertPipe();
    pipeBody.update();
    pipeBody.show();
}

function keyPressed(){
    if(key == ' '){
        flappyBird.toggleFall();
    }
}