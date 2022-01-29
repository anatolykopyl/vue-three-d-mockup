<template>
  <div ref="container" />
</template>

<script>
import { ref, onMounted } from 'vue';

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import phoneObj from './assets/iphone.obj';

import rotateAnimation from './animations/rotate';

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
        const screenInit = () => {
          const scale = 6;
          const width = scale * 9; const height = scale * 19.3;

          function roundedPlane() {
            const x = 1; const y = 1;
            const radius = 8;
            const shape = new THREE.Shape();

            shape.moveTo(x, y + radius);
            shape.lineTo(x, y + height - radius);
            shape.quadraticCurveTo(x, y + height, x + radius, y + height);
            shape.lineTo(x + width - radius, y + height);
            shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
            shape.lineTo(x + width, y + radius);
            shape.quadraticCurveTo(x + width, y, x + width - radius, y);
            shape.lineTo(x + radius, y);
            shape.quadraticCurveTo(x, y, x, y + radius);

            return new THREE.ShapeBufferGeometry(shape);
          }

          // const geometry = new THREE.PlaneGeometry(width, height);
          const geometry = roundedPlane();

          const loader = new THREE.TextureLoader();
          const texture = loader.load(props.screenImg);

          const material = new THREE.MeshLambertMaterial({ map: texture });
          const screen = new THREE.Mesh(geometry, material);

          const recomputeUVs = () => {
            const box = new THREE.Box3().setFromObject(screen);
            const size = new THREE.Vector3();
            box.getSize(size);
            const vec3 = new THREE.Vector3();
            const attPos = screen.geometry.attributes.position;
            const attUv = screen.geometry.attributes.uv;
            for (let i = 0; i < attPos.count; i += 1) {
              vec3.fromBufferAttribute(attPos, i);
              attUv.setXY(i,
                (vec3.x - box.min.x) / size.x,
                (vec3.y - box.min.y) / size.y);
            }
            // attUv.needsUpdate = true;
          };

          recomputeUVs();

          screen.translateX(-width / 2);
          screen.translateY(-height / 2);
          screen.translateZ(6);
          phone.add(screen);
        };

        const bodyInit = () => {
          const loader = new OBJLoader();
          loader.load(
            phoneObj,
            (body) => {
              body.position.y = -60;
              phone.add(body);
              scene.add(phone);
            },
          );
        };

        phone = new THREE.Group();
        screenInit();
        bodyInit();
      };

      environmentInit();
      phoneInit();

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.value.clientWidth, container.value.clientHeight);
      container.value.appendChild(renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);

      if (phone) {
        phone = rotateAnimation(phone);
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
