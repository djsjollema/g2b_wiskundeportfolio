const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,10,'green',"A");
let B = new Point(400,300,10,'red',"B");
let g = {};
g.pos = new Vector2(600,200);
g.point = new Point(g.pos.dx,g.pos.dy,10,'blue',"C");
g.vel = new Vector2(1,1);

let l = new LinearFunction(1,1);

A.drag();
B.drag();

function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0,0,800,450);

  A.draw(); B.draw();
}

loop();
