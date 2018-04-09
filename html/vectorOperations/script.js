const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const numButton = document.getElementById('numButton');

let num = document.getElementById('num').value;

let A = new Point(100,100,20,"yellow","A");
let B = new Point(400,100,20,"red","B");
let C = new Point(200,200,20,"blue","C");

let a = new Vector2(1,1,"a");
let b = new Vector2(1,1,"b");
let ab = new Vector2(1,1,"a+b");
let a2 = new Vector2(1,1,"a2");

A.drag();B.drag();C.drag();

function animationLoop(){
  requestAnimationFrame(animationLoop);
  num =document.getElementById('num').value;
  context.clearRect(0,0,800,450);
  a2.dx = a.dx;
  a2.dy = a.dy;
  a2.scalairProduct(num);
  a2.label = "a*" + num;
  a2.draw(context,A.x,A.y,1);

  A.draw();B.draw();C.draw();
  a.dx = B.x - A.x;
  a.dy = B.y - A.y;
  a.draw(context,A.x,A.y,1);

  b.dx = C.x - A.x;
  b.dy = C.y - A.y;
  b.draw(context,A.x,A.y,1);

  ab.sumVector(a,b);
  ab.draw(context,A.x,A.y,1);



}

animationLoop();
