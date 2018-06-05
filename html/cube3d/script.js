let width = window.innerWidth;
let height = window.innerHeight;

let scene = new THREE.Scene();
scene.color = new THREE.Color(0xffff00);
let renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(width,height);

let camera = new THREE.PerspectiveCamera(45,width/height,1,1000);

camera.position.z = 3;

document.body.appendChild(renderer.domElement);

var texture = new THREE.TextureLoader().load('texture/9fbf7cbd1459f4794ecb179ab8ab6924_400x400.gif');

let geometry = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshLambertMaterial({map:texture});
let mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

let light = new THREE.DirectionalLight(0xaaaaaa,1);
light.position.set(0,2,2);
scene.add(light);

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.007;
  renderer.render(scene,camera);
}

animate();
