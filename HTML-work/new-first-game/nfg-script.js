const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

const skylineImg = new Image();
skylineImg.src = './images/cityskyline.jpg';
skylineImg.onload = function (){	
    setInterval(paintCanvas, 10)
};

// creating basketball court & hoop
class Ballhoop {
    constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }

draw(){
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.lineCap = 'square'
    ctx.strokeStyle = 'rgb(255, 204, 153)'
    ctx.moveTo(this.x + 75, this.y - 175);
    ctx.lineTo(this.x + 75, this.y -50);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
    // pole
    ctx.beginPath();
    ctx.lineCap = 'square'
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'rgb(160, 160, 160)'
    ctx.moveTo(this.x + 75, this.y - 186)
    ctx.lineTo(this.x + 75, this.y - 270)
    ctx.stroke()
    ctx.closePath();
    // support pole
    ctx.beginPath();
    ctx.lineCap = 'square'
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'rgb(160, 160, 160)'
    ctx.moveTo(this.x + 75, this.y - 270)
    ctx.lineTo(this.x + 20, this.y - 270)
    ctx.stroke();
    ctx.closePath();
    // Backboard
    ctx.beginPath();
    ctx.lineCap = 'square'
    ctx.lineWidth = 12;
    ctx.strokeStyle = 'white'
    ctx.moveTo(this.x + 20, this.y - 250)
    ctx.lineTo(this.x + 20, this.y - 350)
    ctx.stroke()
    ctx.closePath()
    // Rim
    ctx.beginPath();
    ctx.lineCap = 'round'
    ctx.lineWidth = 7;
    ctx.strokeStyle = 'rgb(255, 95, 10)'
    ctx.moveTo(this.x + 15, this.y - 275)
    ctx.lineTo(this.x - 45, this.y - 275)
    ctx.stroke()
    ctx.closePath();
    }
}
const hoop = new Ballhoop(600, 400)

class Ballcourt {
    constructor (x, y, width, height, radius) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
    }

    draw(){
        // Drawing lines on court
        ctx.beginPath();
        ctx.fillStyle = 'rgb(97, 97, 114)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.strokeStyle ='white';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.x + 840, this.y + 250);
        ctx.lineTo(this.x + 630, this.y + 15);
        ctx.lineTo(this.x, this.y + 15);
        ctx.moveTo( this.x + 150, this.y + 30);
        ctx.lineTo(this.x +643, this.y + 30);
        ctx.closePath();
        ctx.arc(this.x + 150, this.y + 120, 90,this.radius, Math.PI * 2)
        ctx.stroke();
    }
}
const court = new Ballcourt(0, 300, 700, 150, 20)

// create basktball dimensions
class Basketball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startx = x;
        this.starty = y;
        this.dx = -2;
        this.dy = -2;
        this.moving = false;
        this.speed = 4;
        this.gravity = 1;
    }

// giving ball color 
    draw(){
        ctx.strokeStyle = 'rgb(255, 207, 91)'
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgb(204, 102, 0)';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
// making ball move
    }
    move(){
        if(this.moving == true){
            this.x += this.dx;
            this.y += this.dy;

            ctx.beginPath();
            ctx.fillStyle ="yellow"
            ctx.rect(560, 125, 45, 20);
            ctx.fill();
            ctx.closePath();


            if(getDistance(this.x, this.y, 630, 115) <= 50) {
                console.log('Nice Shot!')
            }
            if(getDistance(this.x + 585, 125,)){
                this.dx = 2
            }
            if(getDistance(this.x + 590, 150, 12)){
                this.dx = 2
            }
        }
    }
// making the ball shoot
    shoot(){
        if(!this.moving){
         this.moving = true;
         this.dx = Math.cos(-aimingPoint.rotation) * this.speed;
         this.dy = Math.sin(-aimingPoint.rotation) * this.speed;
        }
        if(this.y + this.radius > canvas.height){
        }
    }
    applyGravity() {
        if(this.moving){
            this.gravity += .011;
            this.y += this.gravity;
        }
    }
}

let basketball = new Basketball(30, 370, 25)

// class Scoreboard {
//     constructor(x, y, width, height){
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//     }
//     draw(){
//         ctx.beginPath();
//         ctx.fillStyle = 'rgb(128, 128, 128)'; 
//         ctx.fillRect(this.x + 175, this.y - 300, this.width, this.height)       
//         ctx.closePath();
//     }
// }
// const score = new Scoreboard(0, 300, 200, 100)

class Background {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(){
    ctx.beginPath();
        ctx.fillStyle = 'rgb(97, 144, 51)';
        ctx.fillRect(this.x, this.y - 20, this.width, this.height);
        ctx.closePath();
    }
} 
background = new Background(0, 300, 700, 25)

// aiming line
 class Aim {
    constructor(){
        this.x = 32;
        this.y = 370;
        this.width = 1;
        this.height = 60;
        this.rotation = Math.PI * 1.5 / 4;
        this.direction = 1;
    }
    draw(){
        ctx.translate(this.x, this.y)
        ctx.rotate(-this.rotation - Math.PI / 2)
        ctx.beginPath()
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 25, this.width, this.height);
        ctx.closePath();
        ctx.rotate(this.rotation + Math.PI / 2)
        ctx.translate(-this.x, -this.y)
    }
    rotate() {
        this.rotation += .01 * this.direction;
        if(this.rotation > Math.PI/2){
            this.direction = -1
        }
        if(this.rotation <= 0){
            this.direction = 1
        }
    }
 }
 const aimingPoint = new Aim()

    // making each method show up on the canvas 
function paintCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    background.draw();
    ctx.drawImage(skylineImg,0, 0 , 705, 280);
    court.draw();
    basketball.move()
    basketball.draw();
    basketball.applyGravity();
    aimingPoint.rotate();
    hoop.draw();
    aimingPoint.draw();
    // score.draw();
}
 setInterval(paintCanvas, 50)