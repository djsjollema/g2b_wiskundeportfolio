const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let A = new Point(100,100,5,'green',"A");
let B = new Point(400,300,5,'red',"B");
let g = {};
g.pos = new Vector2(600,200);
g.point = new Point(g.pos.dx,g.pos.dy,10,'blue',"C");
g.vel = new Vector2(4,5);
g.update = () =>{
  g.pos.add(g.vel);
  g.point.x = g.pos.dx;
  g.point.y = g.pos.dy;
  if(g.pos.dx > 800-g.point.r || g.pos.dx < g.point.r){
    g.vel.dx = -g.vel.dx;
  }
  if(g.pos.dy > 450-g.point.r || g.pos.dy < g.point.r){
    g.vel.dy = -g.vel.dy;
  }
}

let h = {};
h.pos = new Vector2(1,1);
h.point = new Point(1,1,10,"purple","D");
h.update = () =>{
  h.point.x = h.pos.dx;
  h.point.y = h.pos.dy;
}
h.rad = new Vector2(1,1);
h.tan = new Vector2(1,1);

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

A.drag();
B.drag();

function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0,0,800,450);
  l.letTwoPointsDefineLine(A,B);
  l.draw(0,800,"blue");
  m.letSlopeAndPointDefineLine(-1/l.slope,g.point);
  m.draw(0,800,"red");

  if(g.pos.dy >= l.slope * g.pos.dx + l.yIntercept){
    //g.point.color = "red";
    h.tan.angle += Math.PI;
    g.vel.sumVector(h.tan,h.rad);
  } else {
    //g.point.color = "green";
  }

  g.update();
  g.vel.draw(context,g.pos.dx,g.pos.dy,20);
  g.point.draw();

  h.pos.dx = l.intersection(m).x;
  h.pos.dy = l.intersection(m).y;
  h.update();

  h.rad.dx = 1;
  h.rad.dy = l.slope;
  h.rad.r = 1;
  h.rad.r = h.rad.dot(g.vel);
  h.rad.draw(context,h.pos.dx,h.pos.dy,20);

  h.tan.dx = -h.rad.dy;
  h.tan.dy = h.rad.dx;
  h.tan.r = 1;
  h.tan.r = h.tan.dot(g.vel);
  h.tan.draw(context,h.pos.dx,h.pos.dy,20);


  h.point.draw();

  A.draw(); B.draw();
}

loop();
