//宣告場景與相機
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//宣告渲染
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//宣告mesh的geometry, material
//const geometry = new THREE.BoxGeometry(2,2,2);
const geometry = new THREE.SphereGeometry(2,32,16);

//基本紋理
const texture = new THREE.TextureLoader().load( 'texture/rockpack/Rock_044_BaseColor.jpg' );
//粗糙貼圖
const rough = new THREE.TextureLoader().load('texture/rockpack/Rock_044_Roughness.jpg');
//髮線貼圖
const normal = new THREE.TextureLoader().load('texture/rockpack/Rock_044_Normal.jpg');
//位移貼圖
const height = new THREE.TextureLoader().load('texture/rockpack/Rock_044_Height.png');
//aomap環境光照
const aomap = new THREE.TextureLoader().load('texture/rockpack/Rock_044_AmbientOcclusion.jpg')
//來源:https://3dtextures.me/ https://quixel.com/megascans/home

/* texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 ); */
const material = new THREE.MeshStandardMaterial({
	map: texture,
	roughnessMap: rough,
	normalMap: normal,
	displacementMap: height,
	aoMap: aomap,	
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