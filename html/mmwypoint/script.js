const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let nodeList = [];

for (var i = 0; i < 10; i++) {
  let node = {};
  node.pos = new Vector2(getNumber(800),getNumber(450));
  node.point = new Point(node.pos.dx,node.pos.dy,10,"red",i+1);
  nodeList.push(node)
}


function drawNodes(){
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = "5";
  context.moveTo(nodeList[0].pos.dx,nodeList[0].pos.dy);
  for (var i = 0; i < nodeList.length; i++) {
    context.lineTo(nodeList[i].pos.dx,nodeList[i].pos.dy);
  }
  context.closePath()
  context.stroke();


  for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].point.draw();
  }

}

function getNumber(max){
  return Math.floor(Math.random()*max);
}

drawNodes();
