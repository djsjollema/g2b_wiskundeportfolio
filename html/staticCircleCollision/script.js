const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


let g = new GameObject(new Point(1,1,15,"rgba(0,0,255,0.4)"),new Vector2(50,50),new Vector2(6,5),new Vector2(0,0));

g.rad = new Vector2(1,1);
g.tan = new Vector2(1,1);

let P = new Point(600,225,150,"rgba(255,0,0,0.4)");
let Q = new Point(200,225,150,"rgba(255,0,0,0.4)");

function loop(){
  context.clearRect(0,0,800,450);
  requestAnimationFrame(loop);
  P.draw();
  Q.draw();

  g.update();

  g.rad.dx = P.x - g.pos.dx;
  g.rad.dy = P.y - g.pos.dy;
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.tan.dx = - g.rad.dy;
  g.tan.dy = g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);
  if(g.point.distance(P)<=P.r + g.point.r){
    g.rad.angle += Math.PI;
    g.vel.sumVector(g.rad,g.tan);
    //sound.play();
  };

  g.rad.dx = Q.x - g.pos.dx;
  g.rad.dy = Q.y - g.pos.dy;
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.tan.dx = - g.rad.dy;
  g.tan.dy = g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);

  if(g.point.distance(Q)<=Q.r + g.point.r){
    g.rad.angle += Math.PI;
    g.vel.sumVector(g.rad,g.tan);
    //sound.play();
  };

  g.draw();

  //g.vel.draw(context,g.pos.dx,g.pos.dy,35);
  //g.rad.draw(context,g.pos.dx,g.pos.dy,35);
  //g.tan.draw(context,g.pos.dx,g.pos.dy,35);

}

loop();
