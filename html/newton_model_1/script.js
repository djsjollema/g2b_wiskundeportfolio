const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let earth,moon;

function setUp(){
  earth = new GameObject(new Point(1,1,80,"blue"),new Vector2(canvas.width/2,canvas.height/2),new Vector2(0,0),new Vector2(0,0));
  moon = new GameObject(new Point(1,1,20,"white"),new Vector2(500,500),new Vector2(3,-3),new Vector2(0,0));
  animationLoop();
}

function animationLoop(){
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "rgba(0,0,0,0.005)";
  context.fillRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animationLoop);
  earth.update();

  moon.acc.difVector(moon.pos,earth.pos);
  moon.acc.scalairProduct(0.001);
  moon.update();

  moon.draw();
  earth.draw();
}

setUp();
