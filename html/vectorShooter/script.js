const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let position = new Vector2(100,100);
let direction = new Vector2(1,0);
let velocity = new Vector2(2,3);

let player = new Point(position.dx,position.dy,10,"blue","A");
let bullets = [];

window.addEventListener('keydown',(evt)=>{
  switch (evt.keyCode) {
    case 37:
      velocity.angle -= 0.1;
      break;
    case 39:
      velocity.angle += 0.1;
      break;
    case 38:
      velocity.r += 1;
      break;
    case 40:
      velocity.r -= 1;
      break;
    case 32:
      let bullet = {};
      bullet.position = new Vector2(position.dx,position.dy);
      bullet.point = new Point(bullet.position.dx,bullet.position.dy,5,"black","b");
      bullet.velocity = new Vector2(velocity.dx,velocity.dy);
      bullet.velocity.r *= 1.5;
      bullets.push(bullet);
      break;
    default:

  }
})

function animationLoop(){
  context.clearRect(0,0,800,450);
  requestAnimationFrame(animationLoop);
  player.x = position.dx; player.y = position.dy;
  position.add(velocity);
  player.draw();
  velocity.draw(context,player.x,player.y,20);
  //direction.draw(context,player.x,player.y,50);
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].position.add(bullets[i].velocity);
    bullets[i].point.x = bullets[i].position.dx;
    bullets[i].point.y= bullets[i].position.dy;
    bullets[i].point.label = i;
    bullets[i].point.draw();
    if(bullets[i].position.dx < 0 || bullets[i].position.dx > 800 || bullets[i].position.dy <0 || bullets[i].position.dy > 450){
      bullets.splice(i,1);
    }
    console.log(bullets.length)
  }

  //console.log(bullets[0].position.add(bullets[0].velocity));

  if(position.dx < 0){
    position.dx = 800;
  }

  if(position.dx > 800){
    position.dx = 0;
  }

  if(position.dy < 0){
    position.dy = 450;
  }

  if(position.dy >450){
    position.dy = 0;
  }

}

animationLoop();
