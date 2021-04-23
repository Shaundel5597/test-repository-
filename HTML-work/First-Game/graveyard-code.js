// function drawBball() {
//     ctx.beginPath();
//     ctx.arc(350, 365, 25, 0, Math.PI * 2)
//     ctx.stroke();
//     ctx.fill();

// }
// drawBball()

// function drawBackB() { 
//     ctx.fillStyle = 'rgb(255, 255, 255)';
//     ctx.fillRect(20, 20, 150, 120);
//     ctx.strokeRect(20, 20, 150, 120);
// }

// function drawBackBoardBox() {
//     ctx.fillStyle = 'rgb(255, 145, 0)';
//     ctx.fillRect(60, 55, 70, 60);
//     ctx.fillStyle = 'rgb(255, 255, 255)';
//     ctx.fillRect(65, 60, 60, 50)
// }


// class Box {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width; 
//         this.height = height;
//         this.direction = 1
//     }
    
    // draw() {
    //     ctx.fillStyle = 'rgb(255, 145, 0)';
    //     ctx.fillRect(this.x, this.y, this.width, this.height);
    //     ctx.fillStyle = 'rgb(255, 255, 255)';
    //     ctx.fillRect(this.x + 5, this.y + 5, 60, 50)
    // }

//     move() {
//         this.x += gameState.speed * this.direction;
//         if(this.x > canvas.width - this.width + 5 || this.x < 0) this.direction *= -1
//     }
// }
// const box = new Box(60, 55, 70, 60)