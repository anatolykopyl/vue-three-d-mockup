import { Group, Vector3, Euler } from 'three';

export default class MockupModel extends Group {
  constructor(home) {
    super();

    this.animation = this.floatAnim;
    this.goingHome = false;
    this.homeTimeout = null;

    this.home = {
      position: new Vector3(home.position.x, home.position.y, home.position.z),
      rotation: new Euler(home.rotation.x, home.rotation.y, home.rotation.z),
    };
    this.reset();
  }

  reset() {
    this.position.copy(this.home.position);
    this.rotation.copy(this.home.rotation);

    this.speed = new Vector3();
    this.rotSpeed = new Euler();
    this.acceleration = new Vector3();
  }

  homeAnim(dt) {
    if (!this.goingHome) {
      this.goingHome = true;

      const rT = 1;
      this.speed.subVectors(this.home.position, this.position).multiplyScalar(1 / rT);
      const rotSpeedAsVec3 = this.rotSpeed.toVector3();
      rotSpeedAsVec3.subVectors(this.home.rotation, this.rotation).multiplyScalar(1 / rT);
      this.rotSpeed.setFromVector3(rotSpeedAsVec3);

      this.homeTimeout = setTimeout(() => {
        this.goingHome = false;
        this.reset();
        this.startFloat();
      }, rT * 1000);
    }

    this.position.addScaledVector(this.speed, dt);
    this.rotation.setFromVector3(this.rotation.toVector3().addScaledVector(this.rotSpeed, dt));
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
    const target = new Vector3(x, y, z).sub(this.position);
    this.lookAt(target);
  }
}
