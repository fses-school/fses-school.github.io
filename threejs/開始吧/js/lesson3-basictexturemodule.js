 import * as THREE from '../lib/three.module.js'
 //建立場景
 const scene = new THREE.Scene();
 
 //設置相機（視野，顯示的寬高比，近裁剪面，遠裁剪面）
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 4000 );
 //相機的位置
 camera.position.set(0, 0, 3);


 //渲染器(打開反鋸齒)
 const renderer = new THREE.WebGLRenderer({antialias: true});
 //設置渲染器的高度和寬度，如果加上第三個值 false，則按場景大小顯示，等比例縮放
 renderer.setSize( window.innerWidth, window.innerHeight,false);
 //将渲染器加到html
 document.body.appendChild( renderer.domElement );
 

 //創建一個平行光光源照射到物體上
 const light = new THREE.DirectionalLight(0xffffff, 1.5);
 //設置平型光照射方向，照射方向為設置的點照射到原點
 light.position.set(0, 0, 1);
 //將燈光放到場景當中
 scene.add(light);

 //創建一個接受光照並帶有紋理映射的立方體，並添加到場景中

 //首先，獲取到紋理
 const texture = new THREE.TextureLoader().load("./images/大理石表面.jpg");
 //然後建立一個可以處理光照phong材質來處理著色，並傳遞紋理映射
 const material = new THREE.MeshPhongMaterial({map: texture});

//創建一個立方體的幾何體
 const geometry = new THREE.BoxGeometry(1, 1, 1);

//將幾何物體和材質放到一個網格中
 const cube = new THREE.Mesh(geometry, material);

 //將立方體網格添加到場景中
 scene.add(cube);

 //聲明一個判斷是否旋轉的變數，預設為旋轉(不可使用const宣告)
 var rotationBool = true;

 (function animate() {
     renderer.render(scene, camera);

     if (rotationBool) {
         cube.rotation.x += 0.02;
         cube.rotation.y += 0.02;
     }

     requestAnimationFrame(animate);
 })();

 //點擊頁面切換旋轉變數
 document.body.onclick = function () {
     rotationBool = !rotationBool;
 }
