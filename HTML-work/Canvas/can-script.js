// var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');

// function draw() {
    
//     if (canvas.getContext) {
  
//       ctx.fillRect(25, 25, 100, 100);
//       ctx.strokeRect(50, 50, 50, 50);
     
//     }
//   }
//   draw()


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function draw() {
    ctx.fillStyle = 'rgb(255, 224, 25)';
    ctx.fillRect(25, 25, 100, 100);
    
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(50, 50, 10, 10);

    ctx.clearRect(25, 25, 12, 10);
    ctx.clearRect(25, 115, 10,10)
    ctx.clearRect(100, 70, 25, 30)
    ctx.clearRect(90, 75, 20, 20)
    ctx.clearRect(80, 77, 115, 15)
    ctx.clearRect(115, 25, 20, 10)
  }

draw();

function drawAgain() {
  ctx.fillStyle = 'rgb(255, 0, 0)';
  ctx.fillRect(175, 25, 100, 30);

  ctx.clearRect(175, 25, 10, 15);
  ctx.clearRect(265, 25, 10, 15);

}
drawAgain()

function drawPartIII() {
ctx.fillStyle = 'rgb(239, 181, 147';
ctx.fillRect(175, 55, 100, 50);
}
drawPartIII()

