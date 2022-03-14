//宣告場景與相機
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//宣告渲染
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//宣告mesh的geometry, material
const geometry = new THREE.BoxGeometry();
//基本不須光照材質
//const material = new THREE.MeshBasicMaterial( { color: 0x00ffff} );
const material = new THREE.MeshPhongMaterial( { 
    color: 0x996633,
    //envMap: envMap, // optional environment map
    specular: 0x050505,
    shininess: 500
} )

//宣告三角網物件
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// 平行光源
const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
directionalLight.position.set(1, 1, 1);
//追加
scene.add(directionalLight);

//相機z軸位置
camera.position.z = 5;

//動畫函式
function animate() {
	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render( scene, camera );
};

//call 函示
animate();