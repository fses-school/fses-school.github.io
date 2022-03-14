//宣告場景與相機
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//宣告渲染
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//宣告mesh的geometry, material
const geometry = new THREE.BoxGeometry();
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const texture = new THREE.TextureLoader().load( 'texture/rock.jpg' );
/* texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 ); */
const material = new THREE.MeshPhongMaterial({
	map: texture,
	//color: 0xA63744, 
	roughness:0.5,
	shininess:500
});

//宣告物件
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// 平行光源
const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
directionalLight.position.set(1, 1, 1);
//追加
scene.add(directionalLight);

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