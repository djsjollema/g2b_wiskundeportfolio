const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let g,h,l;

function init(){
  g = new GameObject(new Point(1,1,100,"rgba(255,255,0,0.4)"),new Vector2(150,150),new Vector2(1,2),new Vector2(0,0));
  h= new GameObject(new Point(1,1,100,"rgba(255,0,255,0.4)"),new Vector2(400,250),new Vector2(3,-3),new Vector2(0,0));
  g.rad = new Vector2(1,1);
  g.tan = new Vector2(1,1);
  h.rad = new Vector2(1,1);
  h.tan = new Vector2(1,1);
  l = new LinearFunction(1,1);
}

function loop(){
  context.clearRect(0,0,800,450);
  requestAnimationFrame(loop);
  g.update();
  h.update();
  g.rad.dx = h.pos.dx - g.pos.dx;
  g.rad.dy = h.pos.dy - g.pos.dy;
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);


  g.tan.dx = -g.rad.dy;
  g.tan.dy = g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);

  h.rad.dx = g.pos.dx - h.pos.dx;
  h.rad.dy = g.pos.dy - h.pos.dy;
  h.rad.r = 1;
  h.rad.r = h.rad.dot(h.vel);

  h.tan.dx = -h.rad.dy;
  h.tan.dy = h.rad.dx;
  h.tan.r = 1;
  h.tan.r = h.tan.dot(h.vel);

  if(g.point.distance(h.point) < g.point.r + h.point.r){
    let temp = new Vector2();
    temp.dx = g.rad.dx;
    temp.dy = g.rad.dy;

    g.rad.dx = h.rad.dx;
    g.rad.dy = h.rad.dy;

    h.rad.dx = temp.dx;
    h.rad.dy = temp.dy;

    g.vel.sumVector(g.rad,g.tan);
    h.vel.sumVector(h.rad,h.tan);

  }



  l.letTwoPointsDefineLine(g.point,h.point);
  g.point.draw(context);
  h.point.draw(context);
  l.draw(0,800,"black");
  g.vel.draw(context,g.pos.dx,g.pos.dy,40);
  h.vel.draw(context,h.pos.dx,h.pos.dy,40);

  g.rad.draw(context,g.pos.dx,g.pos.dy,40);
  g.tan.draw(context,g.pos.dx,g.pos.dy,40);

  h.rad.draw(context,h.pos.dx,h.pos.dy,40);
  h.tan.draw(context,h.pos.dx,h.pos.dy,40);
}

init();
loop();
