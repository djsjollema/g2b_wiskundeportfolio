const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sun;
let mercury = {}

function init(){
  sun = new Point(700,400,40,"yellow","sun");
  sun.pos = new Vector2(sun.x,sun.y);

  mercury.rel_pos = new Vector2(200,0);
  mercury.point = new Point(0,0,10,"gray","mercury");
  mercury.pos = new Vector2(0,0);
  mercury.dAngle = 0.01;


  loop();
}

function loop(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(loop);
  sun.draw();

  mercury.rel_pos.angle += mercury.dAngle;
  mercury.pos.sumVector(sun.pos,mercury.rel_pos);
  mercury.point.x = mercury.pos.dx;
  mercury.point.y = mercury.pos.dy;
  mercury.point.draw()

}

init();
