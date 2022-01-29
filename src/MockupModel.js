import { Group, Vector3 } from 'three';

export default class MockupModel extends Group {
  constructor() {
    super();

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

    if (this.position.y < -2) {
      this.acceleration.y = 0.01;
    }

    if (this.position.y > 2) {
      this.acceleration.y = -0.01;
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
