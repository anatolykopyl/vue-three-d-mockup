<template>
  <div
    ref="container"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  />
</template>

<script>
import { ref, onMounted } from 'vue';

import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import MockupModel from './MockupModel';
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
      default: 'white',
    },
    phoneClr: {
      type: String,
      default: 'white',
    },
  },
  setup(props) {
    const container = ref(null);
    let camera;
    let scene;
    let phone;
    let renderer;
    let mouseX = 0;
    let mouseY = 0;

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
          texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

          const material = new THREE.MeshLambertMaterial({ map: texture });
          // material.map.minFilter = THREE.LinearFilter;
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
              body.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                  child.material = new THREE.MeshLambertMaterial({ color: props.phoneClr });
                }
              });

              body.position.y = -60;
              phone.add(body);
            },
          );
        };

        phone = new MockupModel({
          position: {
            x: 0,
            y: 0,
            z: 0,
          },
          rotation: {
            x: -0.2,
            y: 0.3,
            z: 0.06,
          },
        });
        phone.startFloat();
        scene.add(phone);
        screenInit();
        bodyInit();
      };

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.value.clientWidth, container.value.clientHeight);

      environmentInit();
      phoneInit();

      container.value.appendChild(renderer.domElement);
    }

    let previousTime = 0;
    function animate(currentTime) {
      currentTime *= 0.001;
      const deltaTime = currentTime - previousTime;
      previousTime = currentTime;

      requestAnimationFrame(animate);

      if (phone) {
        phone.animation(deltaTime, { x: mouseX, y: mouseY, z: camera.position.z });
      }

      renderer.render(scene, camera);
    }

    function handleMouseEnter() {
      if (phone) { phone.animation = phone.lookAtAnim; }
    }

    function handleMouseLeave() {
      if (phone) { phone.animation = phone.homeAnim; }
    }

    function handleMouseMove(event) {
      const rect = container.value.getBoundingClientRect();
      mouseX = event.clientX - rect.left - rect.width / 2;
      mouseY = -(event.clientY - rect.top - rect.height / 2);
    }

    onMounted(() => {
      init();
      animate(0);
    });

    return {
      container,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseMove,
    };
  },
};
</script>
