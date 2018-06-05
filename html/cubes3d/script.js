let width = window.innerWidth;
let height = window.innerHeight;

let scene = new THREE.Scene();
scene.color = new THREE.Color(0xffff00);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(width,height);
let rad = 0.001;

let camera = new THREE.PerspectiveCamera(45,width/height,1,1000);

camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0,0,0);

let meshes = [];

document.body.appendChild(renderer.domElement);

var texture = new THREE.TextureLoader().load('ma.jpg');

let geometry = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshLambertMaterial({map:texture});
//let mesh = new THREE.Mesh(geometry,material);
//scene.add(mesh);

for(let i =0; i<5; i++){
  meshes[i] = new THREE.Mesh(geometry,material);
  meshes[i].thau = randomNumber(0,Math.PI);
  //meshes[i].thau = 1;
  meshes[i].phi = 0.2;
  //meshes[i].phi = randomNumber(0,2*Math.PI);
  meshes[i].r = randomNumber(5,10);
  meshes[i].position.x = meshes[i].r * Math.sin(meshes[i].thau) *Math.cos(meshes[i].phi);
  meshes[i].position.y = meshes[i].r * Math.sin(meshes[i].thau) *Math.sin(meshes[i].phi);
  meshes[i].position.z = meshes[i].r * Math.cos(meshes[i].thau) ;



  meshes[i].lookAt(0,0,0);
  scene.add(meshes[i]);

  let axesHelper = new THREE.AxesHelper( 10 );
  scene.add( axesHelper );
}

let light = new THREE.PointLight( 0xffff00, 1, 100 );
light.position.set( 0, 0, 0 );
scene.add( light );

var amlight = new THREE.AmbientLight( 0xaaaaaa,1 ); // soft white light
scene.add( amlight );

function animate(){
  requestAnimationFrame(animate);

  for(let i = 0; i<meshes.length;i++){
    meshes[i].thau += 0.01;
    meshes[i].position.x = meshes[i].r * Math.sin(meshes[i].thau) *Math.cos(meshes[i].phi);
    meshes[i].position.y = meshes[i].r * Math.sin(meshes[i].thau) *Math.sin(meshes[i].phi);
    meshes[i].position.z = meshes[i].r * Math.cos(meshes[i].thau) ;
    meshes[i].rotateOnAxis(new THREE.Vector3(0,1,0),-0.05);
    //meshes[i].lookAt(0,0,0)
  }
  //rad += 0.0001;
  renderer.render(scene,camera);
}

function randomNumber(min,max){
  let ans = Math.floor(Math.random()*(max-min))-Math.abs(min);
  console.log(ans)
  return ans;
}

animate();
