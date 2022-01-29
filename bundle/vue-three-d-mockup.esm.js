import { ref, onMounted, openBlock, createElementBlock } from 'vue';
import * as THREE from 'three';
import { Group, Vector3 } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

class MockupModel extends Group {
  constructor() {
    super();

    this.home = {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    };

    this.speed = {
      x: 0,
      y: 0,
      z: 0,
    };

    this.acceleration = {
      x: 0,
      y: 0,
      z: 0,
    };
  }

  floatAnim() {
    const maxSpeed = 0.1;
    const acceleration = 0.01;

    if (this.position.y < -2) {
      this.acceleration.y = acceleration;
    }

    if (this.position.y > 2) {
      this.acceleration.y = -acceleration;
    }

    this.speed.y = Math.min(this.speed.y + this.acceleration.y, maxSpeed);
    this.position.y += this.speed.y;
  }

  rotateAnim() {
    this.rotation.y += 0.02;
  }

  lookAtAnim(x, y, cameraZ) {
    const target = new Vector3();
    target.x = x;
    target.y = y;
    target.z = cameraZ;
    this.lookAt(target);
  }
}


var script = {
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
    const animation = ref('float');
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
                  child.material = new THREE.MeshLambertMaterial();
                }
              });

              body.position.y = -60;
              phone.add(body);
            },
          );
        };

        phone = new MockupModel();
        phone.acceleration.y = -0.01;
        phone.rotation.x = -0.1;
        phone.rotation.y = 0.5;
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

    function animate() {
      requestAnimationFrame(animate);

      if (phone) {
        switch (animation.value) {
          case 'rotate':
            phone.rotateAnim();
            break;

          case 'lookAt':
            phone.lookAtAnim(mouseX / 3, mouseY / 3, camera.position.z);
            break;

          default:
            phone.floatAnim();
        }
      }

      renderer.render(scene, camera);
    }

    function handleMouseEnter() {
      animation.value = 'lookAt';
    }

    function handleMouseLeave() {
      phone.acceleration.y = -0.01;
      animation.value = 'float';
    }

    function handleMouseMove(event) {
      const rect = container.value.getBoundingClientRect();
      mouseX = event.clientX - rect.left - rect.width / 2;
      mouseY = -(event.clientY - rect.top - rect.height / 2);
    }

    onMounted(() => {
      init();
      animate();
    });

    return {
      animation,
      container,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseMove,
    };
  },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    ref: "container",
    onMouseenter: _cache[0] || (_cache[0] = (...args) => ($setup.handleMouseEnter && $setup.handleMouseEnter(...args))),
    onMouseleave: _cache[1] || (_cache[1] = (...args) => ($setup.handleMouseLeave && $setup.handleMouseLeave(...args))),
    onMousemove: _cache[2] || (_cache[2] = (...args) => ($setup.handleMouseMove && $setup.handleMouseMove(...args)))
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */))
}

script.render = render;
script.__file = "src/Mockup.vue";

export { script as default };