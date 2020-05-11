let width = screen.width, height = screen.height, game , scale = width/20;

function preload(){
    game = new SnakeGame(scale);
}

function setup(){
    createCanvas(width, height);
    textSize(30);
    textAlign(CENTER, CENTER);
    frameRate(5);
}

function draw(){
    background([2*random(game.points), 2*random(game.points), 2*random(game.points)]);
    if(!game.gameover){
        game.run();
    }else{
        fill(255);
        frameRate(5);
        text('Game Over you did ' + game.points + ' Points!', width / 2, 2*height / 3);
        text('You can do better! Press enter to restart...', width / 2, height / 3);
    }
}

function keyPressed(){
    fullscreen(true);
    switch(keyCode){
        case UP_ARROW:
            game.snake.setVel([0,-1]);
            break;
        case DOWN_ARROW:
            game.snake.setVel([0,1]);
            break;
        case LEFT_ARROW:
            game.snake.setVel([-1,0]);
            break;
        case RIGHT_ARROW:
            game.snake.setVel([1,0]);
            break;
        case ENTER:
            game = new SnakeGame(scale);
            break;
    }
}