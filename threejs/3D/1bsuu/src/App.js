import React, { useEffect, useRef } from "react";
import "./styles.css";
import {
  // BoxGeometry,
  MeshBasicMaterial,
  // MeshPhongMaterial,
  Mesh,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  BackSide,
  TextureLoader,
  SphereGeometry,
  LoadingManager,
  Object3D
  // AnimationMixer
} from "three";
import OrbitControls from "three-orbitcontrols";
import GLTFLoader from "three-gltf-loader";
import { SkeletonUtils } from "./skeleton";
// import SkeletonUtils from "SkeletonUtils.js";

const sphere = () => {
  const geometry1 = new SphereGeometry(150, 150, 150);
  const material1 = new MeshBasicMaterial();
  material1.map = new TextureLoader().load("hSky.jpg");
  material1.side = BackSide;
  const cube1 = new Mesh(geometry1, material1);
  return cube1;
};

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );

    const manager = new LoadingManager();
    manager.onLoad = init;
    const models = {
      f16: { url: "F-16D.gltf" }
    };
    {
      const gltfLoader = new GLTFLoader(manager);
      for (const model of Object.values(models)) {
        gltfLoader.load(model.url, (gltf) => {
          model.gltf = gltf;
        });
      }
    }

    let root;
    function init() {
      Object.values(models).forEach((model, ndx) => {
        const clonedScene = SkeletonUtils.clone(model.gltf.scene);
        root = new Object3D();
        root.add(clonedScene);
        scene.add(root);
        // console.log(root);
      });
    }

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);
    //  const controls =
    new OrbitControls(camera, renderer.domElement);

    scene.add(sphere());

    const light = new DirectionalLight(0xcccccc, 1);
    light.position.set(5, 6, 5);
    scene.add(light);

    camera.position.z = 9;

    function animate() {
      // if (root) {
      //   root.rotation.y -= 0.001;
      //   root.rotation.y += 0.001;
      // }

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    // console.log(scene);
  }, []);

  return <div className="App" ref={ref} onWheel={() => console.log}></div>;
}

//
//
//
// const wheelListenerCb = (event) => {
//   if (event.deltaY > 0) {
//     camera.position.x += 5;
//   } else {
//     camera.position.z -= 5;
//   }
// };
// const lastRef = ref.current;
// lastRef.addEventListener("wheel", wheelListenerCb, false);

// return () => {
//   lastRef.removeEventListener("wheel", wheelListenerCb, false);
// };
//
//
//
// const geometry = new SphereGeometry(4, 36, 36);
// const material = new MeshPhongMaterial();
// material.map = new TextureLoader().load("moon.jpg");
//
// const cube = new Mesh(geometry, material);
// cube.position.set(1, 1, 1);
// scene.add(cube);
