const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,20,"rgba(255,0,0,0.2)","A");
let B = new Point(600,200,20,"rgba(0,0,255,0.2)","B");
let ball = new Point(100,100,10,"black");
let v = new Vector2();
let pos = new Vector2();

let l = new LineairFunction(1,1);
let m = new LineairFunction(1,1);



l.letTwoPointsDefineLine(A,B);
m.slope = -5;
m.yIntercept = 3200;


//l.draw(0,800,"red");
//m.draw(0,800,"blue");

pos.dx = ball.x;
pos.dy = ball.y;

function loop(){
  context.clearRect(0,0,800,450);

  console.log(pos.dx)
  requestAnimationFrame(loop);
  ball.x = pos.dx;
  ball.y = pos.dy;
  v.dx = B.x - A.x;
  v.dy = B.y - A.y;
  v.r = 1;
  pos.add(v);
  A.draw();
  B.draw();
  ball.draw();
}

loop();
