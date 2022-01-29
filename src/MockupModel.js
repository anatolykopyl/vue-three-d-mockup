import { Group, Vector3 } from 'three';

export default class MockupModel extends Group {
  constructor(home) {
    super();

    this.goingHome = false;

    this.home = home;

    this.speed = {
      x: 0,
      y: 0,
      z: 0,
    };

    this.rotSpeed = {
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

  homeAnim() {
    if (!this.goingHome) {
      this.goingHome = true;

      const rT = 10;
      this.speed.x = (this.home.position.x - this.position.x) / rT;
      this.speed.y = (this.home.position.y - this.position.y) / rT;
      this.speed.z = (this.home.position.z - this.position.z) / rT;

      this.rotSpeed.x = (this.home.rotation.x - this.rotation.x) / rT;
      this.rotSpeed.y = (this.home.rotation.y - this.rotation.y) / rT;
      this.rotSpeed.z = (this.home.rotation.z - this.rotation.z) / rT;

      setTimeout(() => {
        this.goingHome = false;
      }, rT);
    }

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.position.z += this.speed.z;

    this.rotation.x += this.rotSpeed.x;
    this.rotation.y += this.rotSpeed.y;
    this.rotation.z += this.rotSpeed.z;

    return !this.goingHome;
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
