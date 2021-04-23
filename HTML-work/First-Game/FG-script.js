const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

const gameState = {
    speed: 1
}

class Basketball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startx = x;
        this.starty = y;
        this.dx = -2;
        this.dy = -2;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgb(204, 102, 0)';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    move(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.x > canvas.width || this.y > canvas.height || this.x < 0 || this.y < 0){
            this.x = this.startx;
            this.y = this.starty;
        }
}
}

const basketball = new Basketball(350, 365, 25)

class BackBoard {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width; 
        this.height = height;
        this.direction = 1;
    }

    draw() {
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'rgb(255, 145, 0)';
        ctx.fillRect(this.x + 40, this.y + 35, this.width - 80, this.height - 60);
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(this.x + 45, this.y + 40, 60, 50)
    }

    move(){
        this.x += gameState.speed * this.direction;
        if(this.x > canvas.width - this.width || this.x < 0) this.direction *= -1
    }
}
const backboard = new BackBoard(20, 20, 150, 120)

function paintCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawBackB();
    // drawBackBoardBox();
    basketball.move()
    basketball.draw();
    backboard.draw();
    backboard.move();
}

setInterval(paintCanvas, 10)