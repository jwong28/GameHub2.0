let snake;
let ratio = 20;
let head;
let target;

function setup(){
    frameRate(ratio/2);
    createCanvas(windowWidth,windowHeight/1.31);
    head = new food();
    snake = new snakeBody();
    head.notFoodAnymore();
    target = new food();
}

function draw(){
    background(0);

    head.update();
    head.show();

    target.update();
    target.show();

    if(head.collide(target)){
        snake.insert(target);
        target = new food();
    }

    snake.update();
    snake.show();
}

function keyPressed(){
    if(key.toUpperCase() == 'W' || keyCode == UP_ARROW){
        head.moveUp();
    }
    else if(key.toUpperCase() == 'S' || keyCode == DOWN_ARROW){
        head.moveDown();
    }
    else if(key.toUpperCase() == 'A' || keyCode == LEFT_ARROW){
        head.moveLeft();
    }
    else if(key.toUpperCase() == 'D' || keyCode == RIGHT_ARROW){
        head.moveRight();
    }
}