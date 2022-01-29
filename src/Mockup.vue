<template>
  <div ref="canvas" />
</template>

<script>
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
  data() {
    return {
      idle: true,
    };
  },
  methods: {
    init() {
      const container = this.$refs.canvas;

      const environmentInit = () => {
        this.camera = new THREE.PerspectiveCamera(
          45, container.clientWidth / container.clientHeight, 0.1, 10000,
        );
        this.scene = new THREE.Scene();

        const light = new THREE.DirectionalLight(this.lightClr);
        this.scene.add(light);

        light.position.set(0, 0, 300);
        this.camera.position.set(0, 0, 200);
      };

      const phoneInit = () => {
        const loader = new OBJLoader();

        const texture = new THREE.TextureLoader().load(this.screenImg);
        const material = new THREE.MeshLambertMaterial({ map: texture });
        const scale = 6;
        const screen = new THREE.Mesh(
          new THREE.PlaneGeometry(scale * 9, scale * 19.5), material,
        );
        screen.material.side = THREE.DoubleSide;
        screen.translateZ(6);

        this.phone = new THREE.Group();
        this.phone.add(screen);

        loader.load(
          phoneObj,
          (body) => {
            body.position.y = -60;
            this.phone.add(body);
            this.scene.add(this.phone);
          },
        );
      };

      environmentInit();
      phoneInit();

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
    },
    animate() {
      requestAnimationFrame(this.animate);
      if (this.phone) {
        this.idleAnimation();
      }
      this.renderer.render(this.scene, this.camera);
    },
    idleAnimation() {
      this.phone.rotation.y += 0.02;
    },
    followAnimation() {

    },
  },
  mounted() {
    this.init();
    this.animate();
  },
};
</script>
