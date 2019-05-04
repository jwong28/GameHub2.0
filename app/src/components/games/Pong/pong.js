let playArea;
let ball;
let player;
let comp;
let scoreBoard;

function setup(){
playArea = createCanvas(windowWidth, windowHeight/1.3);
ball = new pongBall();
player = new playerRect();
comp = new compRect();
scoreBoard = new userScore();
// playableArea.style('display', 'block');
// playableArea.parent('playArea');

}

function draw(){
    background(0);

    scoreBoard.outOfBounds(ball);
    scoreBoard.update();
    ball.update();
    ball.show();

    player.update();
    player.isHit(ball);
    player.show();

    comp.update();
    comp.isHit(ball);
    comp.show();
}

function keyPressed(){
    if(key.toUpperCase() == 'W' || keyCode == UP_ARROW){
        player.moveUp();
    }
    else if(key.toUpperCase() == 'S' || keyCode == DOWN_ARROW){
        player.moveDown();
    }
}

function keyReleased(){
    if((key.toUpperCase() == 'W' || keyCode == UP_ARROW) || (key.toUpperCase() == 'S' || keyCode == DOWN_ARROW)){
        player.pause();
       }
}