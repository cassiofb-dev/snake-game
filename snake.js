class Snake{
    
    constructor(){
        this.pos = [0,0];
        this.vel = [1,0];
        this.path = [[this.pos[0], this.pos[1]]];
        this.color = [[random(255), random(255), random(255)]];
    }

    setVel(vel){
        this.vel = vel;
    }

    move(){
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.path.push([this.pos[0], this.pos[1]]);
        this.path.shift();

        for(let i = 0; i < this.path.length - 1; i++) {
            if(this.path[i][0] === this.pos[0] && this.path[i][1] === this.pos[1]) return true;
        }
        return false;
    }

    grow(){
        this.path.push([]);
        this.color.push([random(255), random(255), random(255)]);
    }
}