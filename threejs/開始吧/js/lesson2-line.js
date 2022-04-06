 //创建场景
 const scene = new THREE.Scene();
 //设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
 //设置相机的视点
 camera.position.set(0,0,100);
 //设置相机的朝向
 camera.lookAt(new THREE.Vector3(0,0,0));
 //渲染器
 const renderer = new THREE.WebGLRenderer();
 //设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放
 renderer.setSize( window.innerWidth, window.innerHeight,false);
 //将渲染器添加到html当中
 document.body.appendChild( renderer.domElement );

 //定义线的基本材料，我们可以使用LineBasicMaterial（实线材料）和LineDashedMaterial（虚线材料）
 const material = new THREE.LineBasicMaterial({color:0x0000ff});
 //设置具有几何顶点的几何（Geometry）或缓冲区几何（BufferGeometry）设置顶点位置，看名字就知道了，一个是直接将数据保存在js里面的，另一个是保存在WebGL缓冲区内的，而且肯定保存到WebGL缓冲区内的效率更高
 //var geometry = new THREE.Geometry();
 const points = [];
 points.push(new THREE.Vector3(-10,0,0));
 points.push(new THREE.Vector3(0,10,0));
 points.push(new THREE.Vector3(10,0,0));
 const geometry = new THREE.BufferGeometry().setFromPoints( points );
 //使用Line方法将线初始化
 const line = new THREE.Line(geometry, material);
 //将线添加到场景
 scene.add(line);

 //使用渲染器渲染出场景和相机
 renderer.render(scene, camera);