 //建立場景
 const scene = new THREE.Scene();
 //設置相機（視野，顯示的寬高比，近裁剪面，遠裁剪面）
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
 //渲染器(打開反鋸齒)
 const renderer = new THREE.WebGLRenderer({antialias: true});
 //var renderer = new THREE.WebGLRenderer({antialias: true});
 
 //設置渲染器的高度和寬度，如果加上第三個值 false，則按場景大小顯示，等比例縮放
 renderer.setSize( window.innerWidth, window.innerHeight,false);
 //将渲染器加到html
 document.body.appendChild( renderer.domElement );

 //幾何模型（BoxGeometry），這是一個包含立方體所有頂點和填充面的對象。
 const geometry = new THREE.BoxGeometry( 1, 2, 1 );
 //使用於網孔基礎材料（MeshBasicMaterial）進行著色器，這裡只繪製了一個顏色
 const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
 //使用網孔(Mesh)來承載幾何模型
 const cube = new THREE.Mesh( geometry, material );
 //将模型添加到场景当中
 scene.add( cube );
 //沿著z咒將香雞位置偏移5點
 camera.position.z = 5;

 //設置動畫函數
 const animate = function () {
     //以每秒60幀的頻率來繪製場景
     //requestAnimationFrame()不需要呼叫者指定幀速率，瀏覽器會自行決定最佳的幀效率。
     requestAnimationFrame( animate );

     //console.log(cube.rotation);
     //每次調用模型的沿xy軸旋轉0.01
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     //使用渲染器把場景和相機都渲染出來
     renderer.render(scene, camera);
 };

 animate();