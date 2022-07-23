import { Shape, ShapeBufferGeometry } from 'three';

export default function roundedPlane(width, height, radius) {
  const x = 0; const y = 0;
  const nW = 25;
  const nH = radius / 2.2;
  const shape = new Shape();

  shape.moveTo(x, y + radius);
  shape.lineTo(x, y + height - radius);
  shape.quadraticCurveTo(x, y + height, x + radius, y + height);

  shape.lineTo(width / 2 - nW / 2 - nH, y + height);
  shape.quadraticCurveTo(
    width / 2 - nW / 2, y + height, width / 2 - nW / 2, y + height - nH / 10,
  );
  shape.quadraticCurveTo(
    width / 2 - nW / 2, y + height - nH, width / 2 - nW / 2 + nH, y + height - nH,
  );
  shape.lineTo(width / 2 + nW / 2 - nH, y + height - nH);
  shape.quadraticCurveTo(
    width / 2 + nW / 2, y + height - nH, width / 2 + nW / 2, y + height - nH / 10,
  );
  shape.quadraticCurveTo(
    width / 2 + nW / 2, y + height, width / 2 + nW / 2 + nH, y + height,
  );

  shape.lineTo(x + width - radius, y + height);
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  shape.lineTo(x + width, y + radius);
  shape.quadraticCurveTo(x + width, y, x + width - radius, y);
  shape.lineTo(x + radius, y);
  shape.quadraticCurveTo(x, y, x, y + radius);

  return new ShapeBufferGeometry(shape);
}
