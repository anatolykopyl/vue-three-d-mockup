<template>
  <div ref="container" />
</template>

<script>
import { ref, onMounted } from 'vue';

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import phoneObj from './assets/iphone.obj';

export default {
  name: 'Mockup',
  props: {
    screenImg: {
      type: String,
      required: true,
    },
    lightClr: {
      type: String,
      default: 'hsl(0, 100%, 100%)',
    },
  },
  setup(props) {
    const idle = ref(true);
    const container = ref(null);
    let camera;
    let scene;
    let phone;
    let renderer;

    function init() {
      const environmentInit = () => {
        camera = new THREE.PerspectiveCamera(
          45, container.value.clientWidth / container.value.clientHeight, 0.1, 10000,
        );
        scene = new THREE.Scene();

        const light = new THREE.DirectionalLight(props.lightClr);
        scene.add(light);

        light.position.set(0, 0, 300);
        camera.position.set(0, 0, 200);
      };

      const phoneInit = () => {
        const loader = new OBJLoader();

        const texture = new THREE.TextureLoader().load(props.screenImg);
        const material = new THREE.MeshLambertMaterial({ map: texture });
        const scale = 6;
        const screen = new THREE.Mesh(
          new THREE.PlaneGeometry(scale * 9, scale * 19.5), material,
        );
        screen.translateZ(6);
        screen.translateX(1);

        phone = new THREE.Group();
        phone.add(screen);

        loader.load(
          phoneObj,
          (body) => {
            body.position.y = -60;
            phone.add(body);
            scene.add(phone);
          },
        );
      };

      environmentInit();
      phoneInit();

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.value.clientWidth, container.value.clientHeight);
      container.value.appendChild(renderer.domElement);
    }

    function idleAnimation() {
      phone.rotation.y += 0.02;
    }

    function animate() {
      requestAnimationFrame(animate);
      if (phone) {
        idleAnimation();
      }
      renderer.render(scene, camera);
    }

    onMounted(() => {
      init();
      animate();
    });

    return {
      idle,
      container,
    };
  },
};
</script>
