const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;

let g,h;

function setUp(){
  g = new GameObject(new Point(1,1,200,"yellow","A"),new Vector2(300,300),new Vector2(7,8),new Vector2(0,0));
  h = new GameObject(new Point(1,1,200,"red","B"),new Vector2(700,400),new Vector2(-6,-4),new Vector2(0,0));

  g.rad = new Vector2(1,1);
  h.rad = new Vector2(1,1);
  g.tan = new Vector2(1,1);
  h.tan = new Vector2(1,1);
}

function loop(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(loop);
  g.update();
  h.update();
  g.rad.difVector(g.pos,h.pos);
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.tan.dx = g.rad.dy;
  g.tan.dy = - g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);

  h.rad.difVector(h.pos,g.pos);
  h.rad.r = 1;
  h.rad.r = h.rad.dot(h.vel);

  h.tan.dx = h.rad.dy;
  h.tan.dy = - h.rad.dx;
  h.tan.r = 1;
  h.tan.r = h.tan.dot(h.vel);

  if(g.point.distance(h.point)<=g.point.r + h.point.r){
    let temp = new Vector2(g.rad.dx,g.rad.dy);
    g.rad.dx = h.rad.dx;
    g.rad.dy = h.rad.dy;

    h.rad.dx = temp.dx;
    h.rad.dy = temp.dy;

    g.vel.sumVector(g.rad,g.tan);
    h.vel.sumVector(h.rad,h.tan);
    for(let i=0; i<3;i++){
      g.update();
      h.update();
    }

  }

  g.draw();
  h.draw();

  g.vel.draw(context,g.pos.dx,g.pos.dy,30);
  h.vel.draw(context,h.pos.dx,h.pos.dy,30);

  g.rad.draw(context,g.pos.dx,g.pos.dy,30);
  h.rad.draw(context,h.pos.dx,h.pos.dy,30);
  g.tan.draw(context,g.pos.dx,g.pos.dy,30);
  h.tan.draw(context,h.pos.dx,h.pos.dy,30);

}

setUp();
loop();
