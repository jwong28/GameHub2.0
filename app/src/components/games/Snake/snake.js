let snake;
let ratio = 20;
let head;
let target;

function setup(){
    frameRate(ratio/2);
    createCanvas(windowWidth,windowHeight/1.31);
    head = createVector(floor(random(floor(random(width/ratio)))),floor(random(floor(random(height/ratio)))));
    head.mult(ratio);
    snake = new snakeBody();
    target = createVector(floor(random(floor(random(width/ratio)))),floor(random(floor(random(height/ratio)))));
    target.mult(ratio);
}

function newTarget(){
    target = createVector(floor(random(floor(random(width/ratio)))),floor(random(floor(random(height/ratio)))));
    target.mult(ratio);
}

function draw(){
    background(0);
    if(this.collide(target)){
        snake.insert();
        this.newTarget();
    }
    snake.update();
    snake.show();
    fill(255,0,0);
    rect(target.x,target.y,20,20);
    if(snake.endGame()){
        snake.endScreen();
    }
}

function collide(){
    return (head.x === target.x && head.y === target.y);
}

function keyPressed(){
    switch(keyCode){
        case UP_ARROW:
            snake.moveUp();
            break;
        case DOWN_ARROW:
            snake.moveDown();
            break;
        case LEFT_ARROW:
            snake.moveLeft();
            break;
        case RIGHT_ARROW:
            snake.moveRight();
            break;   
    }
}