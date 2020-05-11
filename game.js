class SnakeGame {
    
    constructor(scale) {
        this.scale = scale;
        this.limits = [floor(width / scale) - 1, floor(height / scale) - 1];
        this.snake = new Snake();
        this.food = [floor(random(this.limits[0])), floor(random(this.limits[1]))];
        this.points = this.snake.path.length - 1;
        this.gameover = false;
    }

    eat() {
        this.snake.grow();
        this.points = this.snake.path.length - 1;
        if(!(this.snake.path.length % 5) && this.scale > 1){
            this.scale *= random(0.8, 1.1);
            frameRate(5 + floor(this.snake.path.length)/2);
            this.limits = [floor(width / this.scale) - 1, floor(height / this.scale) - 1];
        }
        while(this.snake.pos[0] === this.food[0] && this.snake.pos[1] === this.food[1])
            this.food = [floor(random(this.limits[0])), floor(random(this.limits[1]))];
    }

    logic() {
        this.gameover = this.snake.move();
        if(this.snake.pos[0] === this.food[0] && this.snake.pos[1] === this.food[1])
            this.eat();
        if(this.snake.pos[0] < 0 || this.snake.pos[0] > this.limits[0]) this.gameover = true;
        if(this.snake.pos[1] < 0 || this.snake.pos[1] > this.limits[1]) this.gameover = true;
    }

    render() {
        fill('red');
        square(this.food[0]*this.scale, this.food[1]*this.scale, this.scale);
        for(let point of this.snake.path){
            fill(random(this.snake.color));
            square(point[0]*this.scale, point[1]*this.scale, this.scale);
        }
    }

    run(){
        this.logic();
        this.render();
    }
}