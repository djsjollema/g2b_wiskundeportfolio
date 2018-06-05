let width = window.innerWidth;
let height = window.innerHeight;


let scene,camera,renderer;

let light;

let sun = {};
let earth = {};
let moon = {};

function setUp(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
    camera.position.z = 50;
    camera.position.y = 10;
    camera.lookAt(0,0,0);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width,height);
    document.body.appendChild(renderer.domElement);

    sun.geometry = new THREE.SphereGeometry(10,32,32);
    sun.material = new THREE.MeshToonMaterial({wireframe:true,color:0xffff00});
    sun.mesh = new THREE.Mesh(sun.geometry,sun.material);
    scene.add(sun.mesh);

    earth.geometry = new THREE.SphereGeometry(2,32,32);
    earth.material = new THREE.MeshStandardMaterial({wireframe:true,color:0x9999ff});
    earth.mesh = new THREE.Mesh(earth.geometry,earth.material);
    earth.phi = -0.3;
    earth.theta = 0;
    earth.r = 20;
    scene.add(earth.mesh);

    moon.geometry = new THREE.SphereGeometry(1,32,32);
    moon.material = new THREE.MeshStandardMaterial({wireframe:true,color:0x9999ff});
    moon.mesh = new THREE.Mesh(moon.geometry,moon.material);
    moon.base = earth.mesh.clone();
    moon.phi = 0;
    moon.theta = 0;
    moon.r = 3;
    scene.add(moon.mesh);

    light = new THREE.PointLight( 0xff6600, 10, 100 );
    light.position.set(0,0,0 );
    scene.add( light );

    animate();
}


function animate(){
  requestAnimationFrame(animate);
  sun.mesh.rotation.y += 0.01;
  earth.mesh.position.x = earth.r * Math.sin(earth.theta) * Math.cos(earth.phi);
  earth.mesh.position.y = earth.r * Math.sin(earth.theta) * Math.sin(earth.phi);
  earth.mesh.position.z = earth.r * Math.cos(earth.theta);
  earth.theta -= 0.01;
  earth.mesh.rotation.y += 1;

  moon.base = earth.mesh.clone();
  moon.mesh.position.x = moon.r * Math.sin(moon.theta) * Math.cos(moon.phi) + moon.base.position.x;
  moon.mesh.position.y = moon.r * Math.sin(moon.theta) * Math.sin(moon.phi)+ moon.base.position.y;
  moon.mesh.position.z = moon.r * Math.cos(moon.theta) + moon.base.position.z;
  moon.theta -= 0.1;
  moon.mesh.rotation.y += 1;

  renderer.render(scene,camera);

}

setUp();

// let width = window.innerWidth;
// let height = window.innerHeight;
//
// let scene = new THREE.Scene();
// scene.color = new THREE.Color(0xffff00);
// let renderer = new THREE.WebGLRenderer({alpha:true});
// renderer.setSize(width,height);
//
// let camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
//
// camera.position.z = 3;
//
// document.body.appendChild(renderer.domElement);
//
// var texture = new THREE.TextureLoader().load('texture/9fbf7cbd1459f4794ecb179ab8ab6924_400x400.gif');
//
// let geometry = new THREE.BoxGeometry(1,1,1);
// let material = new THREE.MeshLambertMaterial({map:texture});
// let mesh = new THREE.Mesh(geometry,material);
// scene.add(mesh);
//
// let light = new THREE.DirectionalLight(0xaaaaaa,1);
// light.position.set(0,2,2);
// scene.add(light);
//
// function animate(){
//   requestAnimationFrame(animate);
//   mesh.rotation.x += 0.005;
//   mesh.rotation.y += 0.007;
//   renderer.render(scene,camera);
// }
//
// animate();
