const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let a = new Vector2(100,400);
let b = new Vector2(600,100);
let c = new Vector2(a.dx, a.dy);
let vel = new Vector2(1,1);

let target = "ab";

let A = new Point(a.dx,a.dy,10,"black","A");
let B = new Point(b.dx,b.dy,10,"black","B");
let C = new Point(c.dx,c.dy,5,"blue","C");

function loop(){
  context.clearRect(0,0,800,450);
  requestAnimationFrame(loop);
  c.add(vel);
  C.x = c.dx; C.y =c.dy;

  A.draw();
  B.draw();
  C.draw();

  a.draw(context,0,0,1);
  b.draw(context,0,0,1);
  vel.difVector(a,b);

  if(C.distance(B)<2){
    vel.r = 0;
  } else {
    vel.r = 1;
  }

  vel.draw(context,a.dx,a.dy,1);
}

loop();
