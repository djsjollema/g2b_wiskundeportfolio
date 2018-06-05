const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

let g,h,l;

function setUp(){
  g = new GameObject(new Point(1,1,300,"red","g"),new Vector2(300,400),new Vector2(3,2),new Vector2(0,0));
  h = new GameObject(new Point(1,1,20,"black","h"),new Vector2(800,400),new Vector2(-3,-2),new Vector2(0,0));
  g.rad = new Vector2(1,1);
  g.tan = new Vector2(1,-1);
  h.rad = new Vector2(1,1);
  h.tan = new Vector2(1,-1);
  l = new LinearFunction(1,1);
  g.m = g.point.r * g.point.r * Math.PI;
  h.m = h.point.r * h.point.r * Math.PI;
}

function loop(){
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);
  g.update();
  h.update();
  //l.letTwoPointsDefineLine(g.point,h.point);

  g.rad.difVector(g.pos,h.pos);
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.tan.dx = g.rad.dy;
  g.tan.dy = -g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);

  h.rad.difVector(h.pos,g.pos);
  h.rad.r = 1;
  h.rad.r = h.rad.dot(h.vel);

  h.tan.dx = h.rad.dy;
  h.tan.dy = -h.rad.dx;
  h.tan.r = 1;
  h.tan.r = h.tan.dot(h.vel);

  if(g.point.distance(h.point)<g.point.r + h.point.r){
    let A1 = new Vector2(g.rad.dx,g.rad.dy);
    let A2 = new Vector2(h.rad.dx,h.rad.dy);
    let Am1 = (g.m-h.m)/(g.m+h.m)
    let Am2 = (2*h.m)/(h.m + g.m);
    A1.scalairProduct(Am1);
    A2.scalairProduct(Am2);

    let B1 = new Vector2(g.rad.dx,g.rad.dy);
    let B2 = new Vector2(h.rad.dx,h.rad.dy);
    let Bm1 = (2*g.m)/(g.m+h.m)
    let Bm2 = (h.m - g.m)/(h.m + g.m);
    B1.scalairProduct(Bm1);
    B2.scalairProduct(Bm2);
    g.rad.sumVector(A1,A2);
    h.rad.sumVector(B1,B2);

    g.vel.sumVector(g.rad,g.tan);
    h.vel.sumVector(h.rad,h.tan);
    g.update();h.update();
    // g.update();h.update();
    // g.update();h.update();
    // g.update();h.update();

  }

  g.draw();
  h.draw();
  // g.vel.draw(context,g.pos.dx,g.pos.dy,50);
  // h.vel.draw(context,h.pos.dx,h.pos.dy,50);
  // g.rad.draw(context,g.pos.dx,g.pos.dy,50);
  // g.tan.draw(context,g.pos.dx,g.pos.dy,50);
  // h.rad.draw(context,h.pos.dx,h.pos.dy,50);
  // h.tan.draw(context,h.pos.dx,h.pos.dy,50);

  //l.draw(0,canvas.width)
  //g.pos.draw(context,0,0,1)
  //h.pos.draw(context,0,0,1)
}

setUp();
loop();
