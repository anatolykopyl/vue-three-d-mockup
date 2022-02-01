import { Group, Vector3 } from 'three';

function xyz(target, source) {
  target.x = source.x;
  target.y = source.y;
  target.z = source.z;
}

export default class MockupModel extends Group {
  constructor(home) {
    super();

    this.animation = this.floatAnim;
    this.goingHome = false;
    this.homeTimeout = null;

    this.home = home;
    this.reset();
  }

  reset() {
    xyz(this.position, this.home.position);
    xyz(this.rotation, this.home.rotation);

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

  homeAnim(dt) {
    if (!this.goingHome) {
      this.goingHome = true;

      const rT = 1;
      this.speed.x = (this.home.position.x - this.position.x) / rT;
      this.speed.y = (this.home.position.y - this.position.y) / rT;
      this.speed.z = (this.home.position.z - this.position.z) / rT;

      this.rotSpeed.x = (this.home.rotation.x - this.rotation.x) / rT;
      this.rotSpeed.y = (this.home.rotation.y - this.rotation.y) / rT;
      this.rotSpeed.z = (this.home.rotation.z - this.rotation.z) / rT;

      this.homeTimeout = setTimeout(() => {
        this.goingHome = false;
        this.reset();
        this.startFloat();
      }, rT * 1000);
    }

    this.position.x += this.speed.x * dt;
    this.position.y += this.speed.y * dt;
    this.position.z += this.speed.z * dt;

    this.rotation.x += this.rotSpeed.x * dt;
    this.rotation.y += this.rotSpeed.y * dt;
    this.rotation.z += this.rotSpeed.z * dt;
  }

  startFloat() {
    this.acceleration.y = -0.01;
    this.animation = this.floatAnim;
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

  lookAtAnim(dt, { x, y, z }) {
    const target = new Vector3();
    target.x = x - this.position.x;
    target.y = y - this.position.y;
    target.z = z - this.position.z;
    this.lookAt(target);
  }
}
