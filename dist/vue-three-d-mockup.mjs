import { ref as NI, onMounted as nI, openBlock as AI, createElementBlock as zI } from "vue";
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Wn = "137", iI = 0, yA = 1, II = 2, ti = 1, TI = 2, le = 3, Ye = 0, eD = 1, Ne = 2, ei = 1, zt = 0, ve = 1, oA = 2, aA = 3, CA = 4, uI = 5, Wt = 100, gI = 101, rI = 102, LA = 103, wA = 104, sI = 200, cI = 201, jI = 202, yI = 203, Ni = 204, ni = 205, oI = 206, aI = 207, CI = 208, LI = 209, wI = 210, OI = 0, xI = 1, EI = 2, fn = 3, lI = 4, dI = 5, vI = 6, pI = 7, fN = 0, hI = 1, YI = 2, it = 0, UI = 1, QI = 2, fI = 3, mI = 4, kI = 5, Ai = 300, be = 301, Ke = 302, mn = 303, kn = 304, mN = 306, qn = 307, Sn = 1e3, xD = 1001, Zn = 1002, ND = 1003, OA = 1004, xA = 1005, uD = 1006, SI = 1007, kN = 1008, It = 1009, ZI = 1010, _I = 1011, Ue = 1012, bI = 1013, lN = 1014, Ot = 1015, Me = 1016, KI = 1017, RI = 1018, De = 1020, PI = 1021, FI = 1022, yD = 1023, BI = 1024, VI = 1025, Et = 1026, ne = 1027, HI = 1028, GI = 1029, WI = 1030, qI = 1031, XI = 1033, VN = 33776, HN = 33777, GN = 33778, WN = 33779, EA = 35840, lA = 35841, dA = 35842, vA = 35843, JI = 36196, pA = 37492, hA = 37496, YA = 37808, UA = 37809, QA = 37810, fA = 37811, mA = 37812, kA = 37813, SA = 37814, ZA = 37815, _A = 37816, bA = 37817, KA = 37818, RA = 37819, PA = 37820, FA = 37821, BA = 36492, $I = 2200, MT = 2201, DT = 2202, vN = 2300, pN = 2301, qN = 2302, qt = 2400, Xt = 2401, hN = 2402, Xn = 2500, zi = 2501, tT = 0, st = 3e3, HM = 3001, eT = 3200, NT = 3201, ie = 0, nT = 1, XN = 7680, AT = 519, Qe = 35044, YN = 35048, VA = "300 es", _n = 1035;
class dt {
  addEventListener(M, D) {
    this._listeners === void 0 && (this._listeners = {});
    const t = this._listeners;
    t[M] === void 0 && (t[M] = []), t[M].indexOf(D) === -1 && t[M].push(D);
  }
  hasEventListener(M, D) {
    if (this._listeners === void 0)
      return !1;
    const t = this._listeners;
    return t[M] !== void 0 && t[M].indexOf(D) !== -1;
  }
  removeEventListener(M, D) {
    if (this._listeners === void 0)
      return;
    const e = this._listeners[M];
    if (e !== void 0) {
      const N = e.indexOf(D);
      N !== -1 && e.splice(N, 1);
    }
  }
  dispatchEvent(M) {
    if (this._listeners === void 0)
      return;
    const t = this._listeners[M.type];
    if (t !== void 0) {
      M.target = this;
      const e = t.slice(0);
      for (let N = 0, A = e.length; N < A; N++)
        e[N].call(this, M);
      M.target = null;
    }
  }
}
const TD = [];
for (let n = 0; n < 256; n++)
  TD[n] = (n < 16 ? "0" : "") + n.toString(16);
const JN = Math.PI / 180, bn = 180 / Math.PI;
function bD() {
  const n = Math.random() * 4294967295 | 0, M = Math.random() * 4294967295 | 0, D = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0;
  return (TD[n & 255] + TD[n >> 8 & 255] + TD[n >> 16 & 255] + TD[n >> 24 & 255] + "-" + TD[M & 255] + TD[M >> 8 & 255] + "-" + TD[M >> 16 & 15 | 64] + TD[M >> 24 & 255] + "-" + TD[D & 63 | 128] + TD[D >> 8 & 255] + "-" + TD[D >> 16 & 255] + TD[D >> 24 & 255] + TD[t & 255] + TD[t >> 8 & 255] + TD[t >> 16 & 255] + TD[t >> 24 & 255]).toUpperCase();
}
function OD(n, M, D) {
  return Math.max(M, Math.min(D, n));
}
function zT(n, M) {
  return (n % M + M) % M;
}
function $N(n, M, D) {
  return (1 - D) * n + D * M;
}
function HA(n) {
  return (n & n - 1) === 0 && n !== 0;
}
function iT(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
class q {
  constructor(M = 0, D = 0) {
    this.x = M, this.y = D;
  }
  get width() {
    return this.x;
  }
  set width(M) {
    this.x = M;
  }
  get height() {
    return this.y;
  }
  set height(M) {
    this.y = M;
  }
  set(M, D) {
    return this.x = M, this.y = D, this;
  }
  setScalar(M) {
    return this.x = M, this.y = M, this;
  }
  setX(M) {
    return this.x = M, this;
  }
  setY(M) {
    return this.y = M, this;
  }
  setComponent(M, D) {
    switch (M) {
      case 0:
        this.x = D;
        break;
      case 1:
        this.y = D;
        break;
      default:
        throw new Error("index is out of range: " + M);
    }
    return this;
  }
  getComponent(M) {
    switch (M) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + M);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(M) {
    return this.x = M.x, this.y = M.y, this;
  }
  add(M, D) {
    return D !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(M, D)) : (this.x += M.x, this.y += M.y, this);
  }
  addScalar(M) {
    return this.x += M, this.y += M, this;
  }
  addVectors(M, D) {
    return this.x = M.x + D.x, this.y = M.y + D.y, this;
  }
  addScaledVector(M, D) {
    return this.x += M.x * D, this.y += M.y * D, this;
  }
  sub(M, D) {
    return D !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(M, D)) : (this.x -= M.x, this.y -= M.y, this);
  }
  subScalar(M) {
    return this.x -= M, this.y -= M, this;
  }
  subVectors(M, D) {
    return this.x = M.x - D.x, this.y = M.y - D.y, this;
  }
  multiply(M) {
    return this.x *= M.x, this.y *= M.y, this;
  }
  multiplyScalar(M) {
    return this.x *= M, this.y *= M, this;
  }
  divide(M) {
    return this.x /= M.x, this.y /= M.y, this;
  }
  divideScalar(M) {
    return this.multiplyScalar(1 / M);
  }
  applyMatrix3(M) {
    const D = this.x, t = this.y, e = M.elements;
    return this.x = e[0] * D + e[3] * t + e[6], this.y = e[1] * D + e[4] * t + e[7], this;
  }
  min(M) {
    return this.x = Math.min(this.x, M.x), this.y = Math.min(this.y, M.y), this;
  }
  max(M) {
    return this.x = Math.max(this.x, M.x), this.y = Math.max(this.y, M.y), this;
  }
  clamp(M, D) {
    return this.x = Math.max(M.x, Math.min(D.x, this.x)), this.y = Math.max(M.y, Math.min(D.y, this.y)), this;
  }
  clampScalar(M, D) {
    return this.x = Math.max(M, Math.min(D, this.x)), this.y = Math.max(M, Math.min(D, this.y)), this;
  }
  clampLength(M, D) {
    const t = this.length();
    return this.divideScalar(t || 1).multiplyScalar(Math.max(M, Math.min(D, t)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(M) {
    return this.x * M.x + this.y * M.y;
  }
  cross(M) {
    return this.x * M.y - this.y * M.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(M) {
    return Math.sqrt(this.distanceToSquared(M));
  }
  distanceToSquared(M) {
    const D = this.x - M.x, t = this.y - M.y;
    return D * D + t * t;
  }
  manhattanDistanceTo(M) {
    return Math.abs(this.x - M.x) + Math.abs(this.y - M.y);
  }
  setLength(M) {
    return this.normalize().multiplyScalar(M);
  }
  lerp(M, D) {
    return this.x += (M.x - this.x) * D, this.y += (M.y - this.y) * D, this;
  }
  lerpVectors(M, D, t) {
    return this.x = M.x + (D.x - M.x) * t, this.y = M.y + (D.y - M.y) * t, this;
  }
  equals(M) {
    return M.x === this.x && M.y === this.y;
  }
  fromArray(M, D = 0) {
    return this.x = M[D], this.y = M[D + 1], this;
  }
  toArray(M = [], D = 0) {
    return M[D] = this.x, M[D + 1] = this.y, M;
  }
  fromBufferAttribute(M, D, t) {
    return t !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = M.getX(D), this.y = M.getY(D), this;
  }
  rotateAround(M, D) {
    const t = Math.cos(D), e = Math.sin(D), N = this.x - M.x, A = this.y - M.y;
    return this.x = N * t - A * e + M.x, this.y = N * e + A * t + M.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
q.prototype.isVector2 = !0;
class gD {
  constructor() {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
  }
  set(M, D, t, e, N, A, z, I, i) {
    const T = this.elements;
    return T[0] = M, T[1] = e, T[2] = z, T[3] = D, T[4] = N, T[5] = I, T[6] = t, T[7] = A, T[8] = i, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(M) {
    const D = this.elements, t = M.elements;
    return D[0] = t[0], D[1] = t[1], D[2] = t[2], D[3] = t[3], D[4] = t[4], D[5] = t[5], D[6] = t[6], D[7] = t[7], D[8] = t[8], this;
  }
  extractBasis(M, D, t) {
    return M.setFromMatrix3Column(this, 0), D.setFromMatrix3Column(this, 1), t.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(M) {
    const D = M.elements;
    return this.set(D[0], D[4], D[8], D[1], D[5], D[9], D[2], D[6], D[10]), this;
  }
  multiply(M) {
    return this.multiplyMatrices(this, M);
  }
  premultiply(M) {
    return this.multiplyMatrices(M, this);
  }
  multiplyMatrices(M, D) {
    const t = M.elements, e = D.elements, N = this.elements, A = t[0], z = t[3], I = t[6], i = t[1], T = t[4], u = t[7], g = t[2], s = t[5], j = t[8], y = e[0], a = e[3], c = e[6], r = e[1], l = e[4], C = e[7], E = e[2], d = e[5], p = e[8];
    return N[0] = A * y + z * r + I * E, N[3] = A * a + z * l + I * d, N[6] = A * c + z * C + I * p, N[1] = i * y + T * r + u * E, N[4] = i * a + T * l + u * d, N[7] = i * c + T * C + u * p, N[2] = g * y + s * r + j * E, N[5] = g * a + s * l + j * d, N[8] = g * c + s * C + j * p, this;
  }
  multiplyScalar(M) {
    const D = this.elements;
    return D[0] *= M, D[3] *= M, D[6] *= M, D[1] *= M, D[4] *= M, D[7] *= M, D[2] *= M, D[5] *= M, D[8] *= M, this;
  }
  determinant() {
    const M = this.elements, D = M[0], t = M[1], e = M[2], N = M[3], A = M[4], z = M[5], I = M[6], i = M[7], T = M[8];
    return D * A * T - D * z * i - t * N * T + t * z * I + e * N * i - e * A * I;
  }
  invert() {
    const M = this.elements, D = M[0], t = M[1], e = M[2], N = M[3], A = M[4], z = M[5], I = M[6], i = M[7], T = M[8], u = T * A - z * i, g = z * I - T * N, s = i * N - A * I, j = D * u + t * g + e * s;
    if (j === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / j;
    return M[0] = u * y, M[1] = (e * i - T * t) * y, M[2] = (z * t - e * A) * y, M[3] = g * y, M[4] = (T * D - e * I) * y, M[5] = (e * N - z * D) * y, M[6] = s * y, M[7] = (t * I - i * D) * y, M[8] = (A * D - t * N) * y, this;
  }
  transpose() {
    let M;
    const D = this.elements;
    return M = D[1], D[1] = D[3], D[3] = M, M = D[2], D[2] = D[6], D[6] = M, M = D[5], D[5] = D[7], D[7] = M, this;
  }
  getNormalMatrix(M) {
    return this.setFromMatrix4(M).invert().transpose();
  }
  transposeIntoArray(M) {
    const D = this.elements;
    return M[0] = D[0], M[1] = D[3], M[2] = D[6], M[3] = D[1], M[4] = D[4], M[5] = D[7], M[6] = D[2], M[7] = D[5], M[8] = D[8], this;
  }
  setUvTransform(M, D, t, e, N, A, z) {
    const I = Math.cos(N), i = Math.sin(N);
    return this.set(t * I, t * i, -t * (I * A + i * z) + A + M, -e * i, e * I, -e * (-i * A + I * z) + z + D, 0, 0, 1), this;
  }
  scale(M, D) {
    const t = this.elements;
    return t[0] *= M, t[3] *= M, t[6] *= M, t[1] *= D, t[4] *= D, t[7] *= D, this;
  }
  rotate(M) {
    const D = Math.cos(M), t = Math.sin(M), e = this.elements, N = e[0], A = e[3], z = e[6], I = e[1], i = e[4], T = e[7];
    return e[0] = D * N + t * I, e[3] = D * A + t * i, e[6] = D * z + t * T, e[1] = -t * N + D * I, e[4] = -t * A + D * i, e[7] = -t * z + D * T, this;
  }
  translate(M, D) {
    const t = this.elements;
    return t[0] += M * t[2], t[3] += M * t[5], t[6] += M * t[8], t[1] += D * t[2], t[4] += D * t[5], t[7] += D * t[8], this;
  }
  equals(M) {
    const D = this.elements, t = M.elements;
    for (let e = 0; e < 9; e++)
      if (D[e] !== t[e])
        return !1;
    return !0;
  }
  fromArray(M, D = 0) {
    for (let t = 0; t < 9; t++)
      this.elements[t] = M[t + D];
    return this;
  }
  toArray(M = [], D = 0) {
    const t = this.elements;
    return M[D] = t[0], M[D + 1] = t[1], M[D + 2] = t[2], M[D + 3] = t[3], M[D + 4] = t[4], M[D + 5] = t[5], M[D + 6] = t[6], M[D + 7] = t[7], M[D + 8] = t[8], M;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
gD.prototype.isMatrix3 = !0;
function ii(n) {
  for (let M = n.length - 1; M >= 0; --M)
    if (n[M] > 65535)
      return !0;
  return !1;
}
function fe(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
const Ii = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, YD = { h: 0, s: 0, l: 0 }, He = { h: 0, s: 0, l: 0 };
function Mn(n, M, D) {
  return D < 0 && (D += 1), D > 1 && (D -= 1), D < 1 / 6 ? n + (M - n) * 6 * D : D < 1 / 2 ? M : D < 2 / 3 ? n + (M - n) * 6 * (2 / 3 - D) : n;
}
function te(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Dn(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
class cM {
  constructor(M, D, t) {
    return D === void 0 && t === void 0 ? this.set(M) : this.setRGB(M, D, t);
  }
  set(M) {
    return M && M.isColor ? this.copy(M) : typeof M == "number" ? this.setHex(M) : typeof M == "string" && this.setStyle(M), this;
  }
  setScalar(M) {
    return this.r = M, this.g = M, this.b = M, this;
  }
  setHex(M) {
    return M = Math.floor(M), this.r = (M >> 16 & 255) / 255, this.g = (M >> 8 & 255) / 255, this.b = (M & 255) / 255, this;
  }
  setRGB(M, D, t) {
    return this.r = M, this.g = D, this.b = t, this;
  }
  setHSL(M, D, t) {
    if (M = zT(M, 1), D = OD(D, 0, 1), t = OD(t, 0, 1), D === 0)
      this.r = this.g = this.b = t;
    else {
      const e = t <= 0.5 ? t * (1 + D) : t + D - t * D, N = 2 * t - e;
      this.r = Mn(N, e, M + 1 / 3), this.g = Mn(N, e, M), this.b = Mn(N, e, M - 1 / 3);
    }
    return this;
  }
  setStyle(M) {
    function D(e) {
      e !== void 0 && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + M + " will be ignored.");
    }
    let t;
    if (t = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(M)) {
      let e;
      const N = t[1], A = t[2];
      switch (N) {
        case "rgb":
        case "rgba":
          if (e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(A))
            return this.r = Math.min(255, parseInt(e[1], 10)) / 255, this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, D(e[4]), this;
          if (e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(A))
            return this.r = Math.min(100, parseInt(e[1], 10)) / 100, this.g = Math.min(100, parseInt(e[2], 10)) / 100, this.b = Math.min(100, parseInt(e[3], 10)) / 100, D(e[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (e = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(A)) {
            const z = parseFloat(e[1]) / 360, I = parseInt(e[2], 10) / 100, i = parseInt(e[3], 10) / 100;
            return D(e[4]), this.setHSL(z, I, i);
          }
          break;
      }
    } else if (t = /^\#([A-Fa-f\d]+)$/.exec(M)) {
      const e = t[1], N = e.length;
      if (N === 3)
        return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255, this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255, this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255, this;
      if (N === 6)
        return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255, this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255, this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255, this;
    }
    return M && M.length > 0 ? this.setColorName(M) : this;
  }
  setColorName(M) {
    const D = Ii[M.toLowerCase()];
    return D !== void 0 ? this.setHex(D) : console.warn("THREE.Color: Unknown color " + M), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(M) {
    return this.r = M.r, this.g = M.g, this.b = M.b, this;
  }
  copySRGBToLinear(M) {
    return this.r = te(M.r), this.g = te(M.g), this.b = te(M.b), this;
  }
  copyLinearToSRGB(M) {
    return this.r = Dn(M.r), this.g = Dn(M.g), this.b = Dn(M.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex() {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  }
  getHexString() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  }
  getHSL(M) {
    const D = this.r, t = this.g, e = this.b, N = Math.max(D, t, e), A = Math.min(D, t, e);
    let z, I;
    const i = (A + N) / 2;
    if (A === N)
      z = 0, I = 0;
    else {
      const T = N - A;
      switch (I = i <= 0.5 ? T / (N + A) : T / (2 - N - A), N) {
        case D:
          z = (t - e) / T + (t < e ? 6 : 0);
          break;
        case t:
          z = (e - D) / T + 2;
          break;
        case e:
          z = (D - t) / T + 4;
          break;
      }
      z /= 6;
    }
    return M.h = z, M.s = I, M.l = i, M;
  }
  getStyle() {
    return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  }
  offsetHSL(M, D, t) {
    return this.getHSL(YD), YD.h += M, YD.s += D, YD.l += t, this.setHSL(YD.h, YD.s, YD.l), this;
  }
  add(M) {
    return this.r += M.r, this.g += M.g, this.b += M.b, this;
  }
  addColors(M, D) {
    return this.r = M.r + D.r, this.g = M.g + D.g, this.b = M.b + D.b, this;
  }
  addScalar(M) {
    return this.r += M, this.g += M, this.b += M, this;
  }
  sub(M) {
    return this.r = Math.max(0, this.r - M.r), this.g = Math.max(0, this.g - M.g), this.b = Math.max(0, this.b - M.b), this;
  }
  multiply(M) {
    return this.r *= M.r, this.g *= M.g, this.b *= M.b, this;
  }
  multiplyScalar(M) {
    return this.r *= M, this.g *= M, this.b *= M, this;
  }
  lerp(M, D) {
    return this.r += (M.r - this.r) * D, this.g += (M.g - this.g) * D, this.b += (M.b - this.b) * D, this;
  }
  lerpColors(M, D, t) {
    return this.r = M.r + (D.r - M.r) * t, this.g = M.g + (D.g - M.g) * t, this.b = M.b + (D.b - M.b) * t, this;
  }
  lerpHSL(M, D) {
    this.getHSL(YD), M.getHSL(He);
    const t = $N(YD.h, He.h, D), e = $N(YD.s, He.s, D), N = $N(YD.l, He.l, D);
    return this.setHSL(t, e, N), this;
  }
  equals(M) {
    return M.r === this.r && M.g === this.g && M.b === this.b;
  }
  fromArray(M, D = 0) {
    return this.r = M[D], this.g = M[D + 1], this.b = M[D + 2], this;
  }
  toArray(M = [], D = 0) {
    return M[D] = this.r, M[D + 1] = this.g, M[D + 2] = this.b, M;
  }
  fromBufferAttribute(M, D) {
    return this.r = M.getX(D), this.g = M.getY(D), this.b = M.getZ(D), M.normalized === !0 && (this.r /= 255, this.g /= 255, this.b /= 255), this;
  }
  toJSON() {
    return this.getHex();
  }
}
cM.NAMES = Ii;
cM.prototype.isColor = !0;
cM.prototype.r = 1;
cM.prototype.g = 1;
cM.prototype.b = 1;
let ht;
class vt {
  static getDataURL(M) {
    if (/^data:/i.test(M.src) || typeof HTMLCanvasElement > "u")
      return M.src;
    let D;
    if (M instanceof HTMLCanvasElement)
      D = M;
    else {
      ht === void 0 && (ht = fe("canvas")), ht.width = M.width, ht.height = M.height;
      const t = ht.getContext("2d");
      M instanceof ImageData ? t.putImageData(M, 0, 0) : t.drawImage(M, 0, 0, M.width, M.height), D = ht;
    }
    return D.width > 2048 || D.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", M), D.toDataURL("image/jpeg", 0.6)) : D.toDataURL("image/png");
  }
  static sRGBToLinear(M) {
    if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && M instanceof ImageBitmap) {
      const D = fe("canvas");
      D.width = M.width, D.height = M.height;
      const t = D.getContext("2d");
      t.drawImage(M, 0, 0, M.width, M.height);
      const e = t.getImageData(0, 0, M.width, M.height), N = e.data;
      for (let A = 0; A < N.length; A++)
        N[A] = te(N[A] / 255) * 255;
      return t.putImageData(e, 0, 0), D;
    } else if (M.data) {
      const D = M.data.slice(0);
      for (let t = 0; t < D.length; t++)
        D instanceof Uint8Array || D instanceof Uint8ClampedArray ? D[t] = Math.floor(te(D[t] / 255) * 255) : D[t] = te(D[t]);
      return {
        data: D,
        width: M.width,
        height: M.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), M;
  }
}
let IT = 0;
class iD extends dt {
  constructor(M = iD.DEFAULT_IMAGE, D = iD.DEFAULT_MAPPING, t = xD, e = xD, N = uD, A = kN, z = yD, I = It, i = 1, T = st) {
    super(), Object.defineProperty(this, "id", { value: IT++ }), this.uuid = bD(), this.name = "", this.image = M, this.mipmaps = [], this.mapping = D, this.wrapS = t, this.wrapT = e, this.magFilter = N, this.minFilter = A, this.anisotropy = i, this.format = z, this.internalFormat = null, this.type = I, this.offset = new q(0, 0), this.repeat = new q(1, 1), this.center = new q(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new gD(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = T, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(M) {
    return this.name = M.name, this.image = M.image, this.mipmaps = M.mipmaps.slice(0), this.mapping = M.mapping, this.wrapS = M.wrapS, this.wrapT = M.wrapT, this.magFilter = M.magFilter, this.minFilter = M.minFilter, this.anisotropy = M.anisotropy, this.format = M.format, this.internalFormat = M.internalFormat, this.type = M.type, this.offset.copy(M.offset), this.repeat.copy(M.repeat), this.center.copy(M.center), this.rotation = M.rotation, this.matrixAutoUpdate = M.matrixAutoUpdate, this.matrix.copy(M.matrix), this.generateMipmaps = M.generateMipmaps, this.premultiplyAlpha = M.premultiplyAlpha, this.flipY = M.flipY, this.unpackAlignment = M.unpackAlignment, this.encoding = M.encoding, this.userData = JSON.parse(JSON.stringify(M.userData)), this;
  }
  toJSON(M) {
    const D = M === void 0 || typeof M == "string";
    if (!D && M.textures[this.uuid] !== void 0)
      return M.textures[this.uuid];
    const t = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (this.image !== void 0) {
      const e = this.image;
      if (e.uuid === void 0 && (e.uuid = bD()), !D && M.images[e.uuid] === void 0) {
        let N;
        if (Array.isArray(e)) {
          N = [];
          for (let A = 0, z = e.length; A < z; A++)
            e[A].isDataTexture ? N.push(tn(e[A].image)) : N.push(tn(e[A]));
        } else
          N = tn(e);
        M.images[e.uuid] = {
          uuid: e.uuid,
          url: N
        };
      }
      t.image = e.uuid;
    }
    return JSON.stringify(this.userData) !== "{}" && (t.userData = this.userData), D || (M.textures[this.uuid] = t), t;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(M) {
    if (this.mapping !== Ai)
      return M;
    if (M.applyMatrix3(this.matrix), M.x < 0 || M.x > 1)
      switch (this.wrapS) {
        case Sn:
          M.x = M.x - Math.floor(M.x);
          break;
        case xD:
          M.x = M.x < 0 ? 0 : 1;
          break;
        case Zn:
          Math.abs(Math.floor(M.x) % 2) === 1 ? M.x = Math.ceil(M.x) - M.x : M.x = M.x - Math.floor(M.x);
          break;
      }
    if (M.y < 0 || M.y > 1)
      switch (this.wrapT) {
        case Sn:
          M.y = M.y - Math.floor(M.y);
          break;
        case xD:
          M.y = M.y < 0 ? 0 : 1;
          break;
        case Zn:
          Math.abs(Math.floor(M.y) % 2) === 1 ? M.y = Math.ceil(M.y) - M.y : M.y = M.y - Math.floor(M.y);
          break;
      }
    return this.flipY && (M.y = 1 - M.y), M;
  }
  set needsUpdate(M) {
    M === !0 && this.version++;
  }
}
iD.DEFAULT_IMAGE = void 0;
iD.DEFAULT_MAPPING = Ai;
iD.prototype.isTexture = !0;
function tn(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? vt.getDataURL(n) : n.data ? {
    data: Array.prototype.slice.call(n.data),
    width: n.width,
    height: n.height,
    type: n.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
class PM {
  constructor(M = 0, D = 0, t = 0, e = 1) {
    this.x = M, this.y = D, this.z = t, this.w = e;
  }
  get width() {
    return this.z;
  }
  set width(M) {
    this.z = M;
  }
  get height() {
    return this.w;
  }
  set height(M) {
    this.w = M;
  }
  set(M, D, t, e) {
    return this.x = M, this.y = D, this.z = t, this.w = e, this;
  }
  setScalar(M) {
    return this.x = M, this.y = M, this.z = M, this.w = M, this;
  }
  setX(M) {
    return this.x = M, this;
  }
  setY(M) {
    return this.y = M, this;
  }
  setZ(M) {
    return this.z = M, this;
  }
  setW(M) {
    return this.w = M, this;
  }
  setComponent(M, D) {
    switch (M) {
      case 0:
        this.x = D;
        break;
      case 1:
        this.y = D;
        break;
      case 2:
        this.z = D;
        break;
      case 3:
        this.w = D;
        break;
      default:
        throw new Error("index is out of range: " + M);
    }
    return this;
  }
  getComponent(M) {
    switch (M) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + M);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(M) {
    return this.x = M.x, this.y = M.y, this.z = M.z, this.w = M.w !== void 0 ? M.w : 1, this;
  }
  add(M, D) {
    return D !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(M, D)) : (this.x += M.x, this.y += M.y, this.z += M.z, this.w += M.w, this);
  }
  addScalar(M) {
    return this.x += M, this.y += M, this.z += M, this.w += M, this;
  }
  addVectors(M, D) {
    return this.x = M.x + D.x, this.y = M.y + D.y, this.z = M.z + D.z, this.w = M.w + D.w, this;
  }
  addScaledVector(M, D) {
    return this.x += M.x * D, this.y += M.y * D, this.z += M.z * D, this.w += M.w * D, this;
  }
  sub(M, D) {
    return D !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(M, D)) : (this.x -= M.x, this.y -= M.y, this.z -= M.z, this.w -= M.w, this);
  }
  subScalar(M) {
    return this.x -= M, this.y -= M, this.z -= M, this.w -= M, this;
  }
  subVectors(M, D) {
    return this.x = M.x - D.x, this.y = M.y - D.y, this.z = M.z - D.z, this.w = M.w - D.w, this;
  }
  multiply(M) {
    return this.x *= M.x, this.y *= M.y, this.z *= M.z, this.w *= M.w, this;
  }
  multiplyScalar(M) {
    return this.x *= M, this.y *= M, this.z *= M, this.w *= M, this;
  }
  applyMatrix4(M) {
    const D = this.x, t = this.y, e = this.z, N = this.w, A = M.elements;
    return this.x = A[0] * D + A[4] * t + A[8] * e + A[12] * N, this.y = A[1] * D + A[5] * t + A[9] * e + A[13] * N, this.z = A[2] * D + A[6] * t + A[10] * e + A[14] * N, this.w = A[3] * D + A[7] * t + A[11] * e + A[15] * N, this;
  }
  divideScalar(M) {
    return this.multiplyScalar(1 / M);
  }
  setAxisAngleFromQuaternion(M) {
    this.w = 2 * Math.acos(M.w);
    const D = Math.sqrt(1 - M.w * M.w);
    return D < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = M.x / D, this.y = M.y / D, this.z = M.z / D), this;
  }
  setAxisAngleFromRotationMatrix(M) {
    let D, t, e, N;
    const I = M.elements, i = I[0], T = I[4], u = I[8], g = I[1], s = I[5], j = I[9], y = I[2], a = I[6], c = I[10];
    if (Math.abs(T - g) < 0.01 && Math.abs(u - y) < 0.01 && Math.abs(j - a) < 0.01) {
      if (Math.abs(T + g) < 0.1 && Math.abs(u + y) < 0.1 && Math.abs(j + a) < 0.1 && Math.abs(i + s + c - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      D = Math.PI;
      const l = (i + 1) / 2, C = (s + 1) / 2, E = (c + 1) / 2, d = (T + g) / 4, p = (u + y) / 4, H = (j + a) / 4;
      return l > C && l > E ? l < 0.01 ? (t = 0, e = 0.707106781, N = 0.707106781) : (t = Math.sqrt(l), e = d / t, N = p / t) : C > E ? C < 0.01 ? (t = 0.707106781, e = 0, N = 0.707106781) : (e = Math.sqrt(C), t = d / e, N = H / e) : E < 0.01 ? (t = 0.707106781, e = 0.707106781, N = 0) : (N = Math.sqrt(E), t = p / N, e = H / N), this.set(t, e, N, D), this;
    }
    let r = Math.sqrt((a - j) * (a - j) + (u - y) * (u - y) + (g - T) * (g - T));
    return Math.abs(r) < 1e-3 && (r = 1), this.x = (a - j) / r, this.y = (u - y) / r, this.z = (g - T) / r, this.w = Math.acos((i + s + c - 1) / 2), this;
  }
  min(M) {
    return this.x = Math.min(this.x, M.x), this.y = Math.min(this.y, M.y), this.z = Math.min(this.z, M.z), this.w = Math.min(this.w, M.w), this;
  }
  max(M) {
    return this.x = Math.max(this.x, M.x), this.y = Math.max(this.y, M.y), this.z = Math.max(this.z, M.z), this.w = Math.max(this.w, M.w), this;
  }
  clamp(M, D) {
    return this.x = Math.max(M.x, Math.min(D.x, this.x)), this.y = Math.max(M.y, Math.min(D.y, this.y)), this.z = Math.max(M.z, Math.min(D.z, this.z)), this.w = Math.max(M.w, Math.min(D.w, this.w)), this;
  }
  clampScalar(M, D) {
    return this.x = Math.max(M, Math.min(D, this.x)), this.y = Math.max(M, Math.min(D, this.y)), this.z = Math.max(M, Math.min(D, this.z)), this.w = Math.max(M, Math.min(D, this.w)), this;
  }
  clampLength(M, D) {
    const t = this.length();
    return this.divideScalar(t || 1).multiplyScalar(Math.max(M, Math.min(D, t)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(M) {
    return this.x * M.x + this.y * M.y + this.z * M.z + this.w * M.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(M) {
    return this.normalize().multiplyScalar(M);
  }
  lerp(M, D) {
    return this.x += (M.x - this.x) * D, this.y += (M.y - this.y) * D, this.z += (M.z - this.z) * D, this.w += (M.w - this.w) * D, this;
  }
  lerpVectors(M, D, t) {
    return this.x = M.x + (D.x - M.x) * t, this.y = M.y + (D.y - M.y) * t, this.z = M.z + (D.z - M.z) * t, this.w = M.w + (D.w - M.w) * t, this;
  }
  equals(M) {
    return M.x === this.x && M.y === this.y && M.z === this.z && M.w === this.w;
  }
  fromArray(M, D = 0) {
    return this.x = M[D], this.y = M[D + 1], this.z = M[D + 2], this.w = M[D + 3], this;
  }
  toArray(M = [], D = 0) {
    return M[D] = this.x, M[D + 1] = this.y, M[D + 2] = this.z, M[D + 3] = this.w, M;
  }
  fromBufferAttribute(M, D, t) {
    return t !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = M.getX(D), this.y = M.getY(D), this.z = M.getZ(D), this.w = M.getW(D), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
PM.prototype.isVector4 = !0;
class dD extends dt {
  constructor(M, D, t = {}) {
    super(), this.width = M, this.height = D, this.depth = 1, this.scissor = new PM(0, 0, M, D), this.scissorTest = !1, this.viewport = new PM(0, 0, M, D), this.texture = new iD(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = { width: M, height: D, depth: 1 }, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.internalFormat = t.internalFormat !== void 0 ? t.internalFormat : null, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : uD, this.depthBuffer = t.depthBuffer !== void 0 ? t.depthBuffer : !0, this.stencilBuffer = t.stencilBuffer !== void 0 ? t.stencilBuffer : !1, this.depthTexture = t.depthTexture !== void 0 ? t.depthTexture : null;
  }
  setTexture(M) {
    M.image = {
      width: this.width,
      height: this.height,
      depth: this.depth
    }, this.texture = M;
  }
  setSize(M, D, t = 1) {
    (this.width !== M || this.height !== D || this.depth !== t) && (this.width = M, this.height = D, this.depth = t, this.texture.image.width = M, this.texture.image.height = D, this.texture.image.depth = t, this.dispose()), this.viewport.set(0, 0, M, D), this.scissor.set(0, 0, M, D);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(M) {
    return this.width = M.width, this.height = M.height, this.depth = M.depth, this.viewport.copy(M.viewport), this.texture = M.texture.clone(), this.texture.image = Object.assign({}, M.texture.image), this.depthBuffer = M.depthBuffer, this.stencilBuffer = M.stencilBuffer, this.depthTexture = M.depthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
dD.prototype.isWebGLRenderTarget = !0;
class TT extends dD {
  constructor(M, D, t) {
    super(M, D);
    const e = this.texture;
    this.texture = [];
    for (let N = 0; N < t; N++)
      this.texture[N] = e.clone();
  }
  setSize(M, D, t = 1) {
    if (this.width !== M || this.height !== D || this.depth !== t) {
      this.width = M, this.height = D, this.depth = t;
      for (let e = 0, N = this.texture.length; e < N; e++)
        this.texture[e].image.width = M, this.texture[e].image.height = D, this.texture[e].image.depth = t;
      this.dispose();
    }
    return this.viewport.set(0, 0, M, D), this.scissor.set(0, 0, M, D), this;
  }
  copy(M) {
    this.dispose(), this.width = M.width, this.height = M.height, this.depth = M.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = M.depthBuffer, this.stencilBuffer = M.stencilBuffer, this.depthTexture = M.depthTexture, this.texture.length = 0;
    for (let D = 0, t = M.texture.length; D < t; D++)
      this.texture[D] = M.texture[D].clone();
    return this;
  }
}
TT.prototype.isWebGLMultipleRenderTargets = !0;
class Jn extends dD {
  constructor(M, D, t = {}) {
    super(M, D, t), this.samples = 4, this.ignoreDepthForMultisampleCopy = t.ignoreDepth !== void 0 ? t.ignoreDepth : !0, this.useRenderToTexture = t.useRenderToTexture !== void 0 ? t.useRenderToTexture : !1, this.useRenderbuffer = this.useRenderToTexture === !1;
  }
  copy(M) {
    return super.copy.call(this, M), this.samples = M.samples, this.useRenderToTexture = M.useRenderToTexture, this.useRenderbuffer = M.useRenderbuffer, this;
  }
}
Jn.prototype.isWebGLMultisampleRenderTarget = !0;
class aD {
  constructor(M = 0, D = 0, t = 0, e = 1) {
    this._x = M, this._y = D, this._z = t, this._w = e;
  }
  static slerp(M, D, t, e) {
    return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), t.slerpQuaternions(M, D, e);
  }
  static slerpFlat(M, D, t, e, N, A, z) {
    let I = t[e + 0], i = t[e + 1], T = t[e + 2], u = t[e + 3];
    const g = N[A + 0], s = N[A + 1], j = N[A + 2], y = N[A + 3];
    if (z === 0) {
      M[D + 0] = I, M[D + 1] = i, M[D + 2] = T, M[D + 3] = u;
      return;
    }
    if (z === 1) {
      M[D + 0] = g, M[D + 1] = s, M[D + 2] = j, M[D + 3] = y;
      return;
    }
    if (u !== y || I !== g || i !== s || T !== j) {
      let a = 1 - z;
      const c = I * g + i * s + T * j + u * y, r = c >= 0 ? 1 : -1, l = 1 - c * c;
      if (l > Number.EPSILON) {
        const E = Math.sqrt(l), d = Math.atan2(E, c * r);
        a = Math.sin(a * d) / E, z = Math.sin(z * d) / E;
      }
      const C = z * r;
      if (I = I * a + g * C, i = i * a + s * C, T = T * a + j * C, u = u * a + y * C, a === 1 - z) {
        const E = 1 / Math.sqrt(I * I + i * i + T * T + u * u);
        I *= E, i *= E, T *= E, u *= E;
      }
    }
    M[D] = I, M[D + 1] = i, M[D + 2] = T, M[D + 3] = u;
  }
  static multiplyQuaternionsFlat(M, D, t, e, N, A) {
    const z = t[e], I = t[e + 1], i = t[e + 2], T = t[e + 3], u = N[A], g = N[A + 1], s = N[A + 2], j = N[A + 3];
    return M[D] = z * j + T * u + I * s - i * g, M[D + 1] = I * j + T * g + i * u - z * s, M[D + 2] = i * j + T * s + z * g - I * u, M[D + 3] = T * j - z * u - I * g - i * s, M;
  }
  get x() {
    return this._x;
  }
  set x(M) {
    this._x = M, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(M) {
    this._y = M, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(M) {
    this._z = M, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(M) {
    this._w = M, this._onChangeCallback();
  }
  set(M, D, t, e) {
    return this._x = M, this._y = D, this._z = t, this._w = e, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(M) {
    return this._x = M.x, this._y = M.y, this._z = M.z, this._w = M.w, this._onChangeCallback(), this;
  }
  setFromEuler(M, D) {
    if (!(M && M.isEuler))
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    const t = M._x, e = M._y, N = M._z, A = M._order, z = Math.cos, I = Math.sin, i = z(t / 2), T = z(e / 2), u = z(N / 2), g = I(t / 2), s = I(e / 2), j = I(N / 2);
    switch (A) {
      case "XYZ":
        this._x = g * T * u + i * s * j, this._y = i * s * u - g * T * j, this._z = i * T * j + g * s * u, this._w = i * T * u - g * s * j;
        break;
      case "YXZ":
        this._x = g * T * u + i * s * j, this._y = i * s * u - g * T * j, this._z = i * T * j - g * s * u, this._w = i * T * u + g * s * j;
        break;
      case "ZXY":
        this._x = g * T * u - i * s * j, this._y = i * s * u + g * T * j, this._z = i * T * j + g * s * u, this._w = i * T * u - g * s * j;
        break;
      case "ZYX":
        this._x = g * T * u - i * s * j, this._y = i * s * u + g * T * j, this._z = i * T * j - g * s * u, this._w = i * T * u + g * s * j;
        break;
      case "YZX":
        this._x = g * T * u + i * s * j, this._y = i * s * u + g * T * j, this._z = i * T * j - g * s * u, this._w = i * T * u - g * s * j;
        break;
      case "XZY":
        this._x = g * T * u - i * s * j, this._y = i * s * u - g * T * j, this._z = i * T * j + g * s * u, this._w = i * T * u + g * s * j;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + A);
    }
    return D !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(M, D) {
    const t = D / 2, e = Math.sin(t);
    return this._x = M.x * e, this._y = M.y * e, this._z = M.z * e, this._w = Math.cos(t), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(M) {
    const D = M.elements, t = D[0], e = D[4], N = D[8], A = D[1], z = D[5], I = D[9], i = D[2], T = D[6], u = D[10], g = t + z + u;
    if (g > 0) {
      const s = 0.5 / Math.sqrt(g + 1);
      this._w = 0.25 / s, this._x = (T - I) * s, this._y = (N - i) * s, this._z = (A - e) * s;
    } else if (t > z && t > u) {
      const s = 2 * Math.sqrt(1 + t - z - u);
      this._w = (T - I) / s, this._x = 0.25 * s, this._y = (e + A) / s, this._z = (N + i) / s;
    } else if (z > u) {
      const s = 2 * Math.sqrt(1 + z - t - u);
      this._w = (N - i) / s, this._x = (e + A) / s, this._y = 0.25 * s, this._z = (I + T) / s;
    } else {
      const s = 2 * Math.sqrt(1 + u - t - z);
      this._w = (A - e) / s, this._x = (N + i) / s, this._y = (I + T) / s, this._z = 0.25 * s;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(M, D) {
    let t = M.dot(D) + 1;
    return t < Number.EPSILON ? (t = 0, Math.abs(M.x) > Math.abs(M.z) ? (this._x = -M.y, this._y = M.x, this._z = 0, this._w = t) : (this._x = 0, this._y = -M.z, this._z = M.y, this._w = t)) : (this._x = M.y * D.z - M.z * D.y, this._y = M.z * D.x - M.x * D.z, this._z = M.x * D.y - M.y * D.x, this._w = t), this.normalize();
  }
  angleTo(M) {
    return 2 * Math.acos(Math.abs(OD(this.dot(M), -1, 1)));
  }
  rotateTowards(M, D) {
    const t = this.angleTo(M);
    if (t === 0)
      return this;
    const e = Math.min(1, D / t);
    return this.slerp(M, e), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(M) {
    return this._x * M._x + this._y * M._y + this._z * M._z + this._w * M._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let M = this.length();
    return M === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (M = 1 / M, this._x = this._x * M, this._y = this._y * M, this._z = this._z * M, this._w = this._w * M), this._onChangeCallback(), this;
  }
  multiply(M, D) {
    return D !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(M, D)) : this.multiplyQuaternions(this, M);
  }
  premultiply(M) {
    return this.multiplyQuaternions(M, this);
  }
  multiplyQuaternions(M, D) {
    const t = M._x, e = M._y, N = M._z, A = M._w, z = D._x, I = D._y, i = D._z, T = D._w;
    return this._x = t * T + A * z + e * i - N * I, this._y = e * T + A * I + N * z - t * i, this._z = N * T + A * i + t * I - e * z, this._w = A * T - t * z - e * I - N * i, this._onChangeCallback(), this;
  }
  slerp(M, D) {
    if (D === 0)
      return this;
    if (D === 1)
      return this.copy(M);
    const t = this._x, e = this._y, N = this._z, A = this._w;
    let z = A * M._w + t * M._x + e * M._y + N * M._z;
    if (z < 0 ? (this._w = -M._w, this._x = -M._x, this._y = -M._y, this._z = -M._z, z = -z) : this.copy(M), z >= 1)
      return this._w = A, this._x = t, this._y = e, this._z = N, this;
    const I = 1 - z * z;
    if (I <= Number.EPSILON) {
      const s = 1 - D;
      return this._w = s * A + D * this._w, this._x = s * t + D * this._x, this._y = s * e + D * this._y, this._z = s * N + D * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const i = Math.sqrt(I), T = Math.atan2(i, z), u = Math.sin((1 - D) * T) / i, g = Math.sin(D * T) / i;
    return this._w = A * u + this._w * g, this._x = t * u + this._x * g, this._y = e * u + this._y * g, this._z = N * u + this._z * g, this._onChangeCallback(), this;
  }
  slerpQuaternions(M, D, t) {
    return this.copy(M).slerp(D, t);
  }
  random() {
    const M = Math.random(), D = Math.sqrt(1 - M), t = Math.sqrt(M), e = 2 * Math.PI * Math.random(), N = 2 * Math.PI * Math.random();
    return this.set(D * Math.cos(e), t * Math.sin(N), t * Math.cos(N), D * Math.sin(e));
  }
  equals(M) {
    return M._x === this._x && M._y === this._y && M._z === this._z && M._w === this._w;
  }
  fromArray(M, D = 0) {
    return this._x = M[D], this._y = M[D + 1], this._z = M[D + 2], this._w = M[D + 3], this._onChangeCallback(), this;
  }
  toArray(M = [], D = 0) {
    return M[D] = this._x, M[D + 1] = this._y, M[D + 2] = this._z, M[D + 3] = this._w, M;
  }
  fromBufferAttribute(M, D) {
    return this._x = M.getX(D), this._y = M.getY(D), this._z = M.getZ(D), this._w = M.getW(D), this;
  }
  _onChange(M) {
    return this._onChangeCallback = M, this;
  }
  _onChangeCallback() {
  }
}
aD.prototype.isQuaternion = !0;
class O {
  constructor(M = 0, D = 0, t = 0) {
    this.x = M, this.y = D, this.z = t;
  }
  set(M, D, t) {
    return t === void 0 && (t = this.z), this.x = M, this.y = D, this.z = t, this;
  }
  setScalar(M) {
    return this.x = M, this.y = M, this.z = M, this;
  }
  setX(M) {
    return this.x = M, this;
  }
  setY(M) {
    return this.y = M, this;
  }
  setZ(M) {
    return this.z = M, this;
  }
  setComponent(M, D) {
    switch (M) {
      case 0:
        this.x = D;
        break;
      case 1:
        this.y = D;
        break;
      case 2:
        this.z = D;
        break;
      default:
        throw new Error("index is out of range: " + M);
    }
    return this;
  }
  getComponent(M) {
    switch (M) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + M);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(M) {
    return this.x = M.x, this.y = M.y, this.z = M.z, this;
  }
  add(M, D) {
    return D !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(M, D)) : (this.x += M.x, this.y += M.y, this.z += M.z, this);
  }
  addScalar(M) {
    return this.x += M, this.y += M, this.z += M, this;
  }
  addVectors(M, D) {
    return this.x = M.x + D.x, this.y = M.y + D.y, this.z = M.z + D.z, this;
  }
  addScaledVector(M, D) {
    return this.x += M.x * D, this.y += M.y * D, this.z += M.z * D, this;
  }
  sub(M, D) {
    return D !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(M, D)) : (this.x -= M.x, this.y -= M.y, this.z -= M.z, this);
  }
  subScalar(M) {
    return this.x -= M, this.y -= M, this.z -= M, this;
  }
  subVectors(M, D) {
    return this.x = M.x - D.x, this.y = M.y - D.y, this.z = M.z - D.z, this;
  }
  multiply(M, D) {
    return D !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(M, D)) : (this.x *= M.x, this.y *= M.y, this.z *= M.z, this);
  }
  multiplyScalar(M) {
    return this.x *= M, this.y *= M, this.z *= M, this;
  }
  multiplyVectors(M, D) {
    return this.x = M.x * D.x, this.y = M.y * D.y, this.z = M.z * D.z, this;
  }
  applyEuler(M) {
    return M && M.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(GA.setFromEuler(M));
  }
  applyAxisAngle(M, D) {
    return this.applyQuaternion(GA.setFromAxisAngle(M, D));
  }
  applyMatrix3(M) {
    const D = this.x, t = this.y, e = this.z, N = M.elements;
    return this.x = N[0] * D + N[3] * t + N[6] * e, this.y = N[1] * D + N[4] * t + N[7] * e, this.z = N[2] * D + N[5] * t + N[8] * e, this;
  }
  applyNormalMatrix(M) {
    return this.applyMatrix3(M).normalize();
  }
  applyMatrix4(M) {
    const D = this.x, t = this.y, e = this.z, N = M.elements, A = 1 / (N[3] * D + N[7] * t + N[11] * e + N[15]);
    return this.x = (N[0] * D + N[4] * t + N[8] * e + N[12]) * A, this.y = (N[1] * D + N[5] * t + N[9] * e + N[13]) * A, this.z = (N[2] * D + N[6] * t + N[10] * e + N[14]) * A, this;
  }
  applyQuaternion(M) {
    const D = this.x, t = this.y, e = this.z, N = M.x, A = M.y, z = M.z, I = M.w, i = I * D + A * e - z * t, T = I * t + z * D - N * e, u = I * e + N * t - A * D, g = -N * D - A * t - z * e;
    return this.x = i * I + g * -N + T * -z - u * -A, this.y = T * I + g * -A + u * -N - i * -z, this.z = u * I + g * -z + i * -A - T * -N, this;
  }
  project(M) {
    return this.applyMatrix4(M.matrixWorldInverse).applyMatrix4(M.projectionMatrix);
  }
  unproject(M) {
    return this.applyMatrix4(M.projectionMatrixInverse).applyMatrix4(M.matrixWorld);
  }
  transformDirection(M) {
    const D = this.x, t = this.y, e = this.z, N = M.elements;
    return this.x = N[0] * D + N[4] * t + N[8] * e, this.y = N[1] * D + N[5] * t + N[9] * e, this.z = N[2] * D + N[6] * t + N[10] * e, this.normalize();
  }
  divide(M) {
    return this.x /= M.x, this.y /= M.y, this.z /= M.z, this;
  }
  divideScalar(M) {
    return this.multiplyScalar(1 / M);
  }
  min(M) {
    return this.x = Math.min(this.x, M.x), this.y = Math.min(this.y, M.y), this.z = Math.min(this.z, M.z), this;
  }
  max(M) {
    return this.x = Math.max(this.x, M.x), this.y = Math.max(this.y, M.y), this.z = Math.max(this.z, M.z), this;
  }
  clamp(M, D) {
    return this.x = Math.max(M.x, Math.min(D.x, this.x)), this.y = Math.max(M.y, Math.min(D.y, this.y)), this.z = Math.max(M.z, Math.min(D.z, this.z)), this;
  }
  clampScalar(M, D) {
    return this.x = Math.max(M, Math.min(D, this.x)), this.y = Math.max(M, Math.min(D, this.y)), this.z = Math.max(M, Math.min(D, this.z)), this;
  }
  clampLength(M, D) {
    const t = this.length();
    return this.divideScalar(t || 1).multiplyScalar(Math.max(M, Math.min(D, t)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(M) {
    return this.x * M.x + this.y * M.y + this.z * M.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(M) {
    return this.normalize().multiplyScalar(M);
  }
  lerp(M, D) {
    return this.x += (M.x - this.x) * D, this.y += (M.y - this.y) * D, this.z += (M.z - this.z) * D, this;
  }
  lerpVectors(M, D, t) {
    return this.x = M.x + (D.x - M.x) * t, this.y = M.y + (D.y - M.y) * t, this.z = M.z + (D.z - M.z) * t, this;
  }
  cross(M, D) {
    return D !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(M, D)) : this.crossVectors(this, M);
  }
  crossVectors(M, D) {
    const t = M.x, e = M.y, N = M.z, A = D.x, z = D.y, I = D.z;
    return this.x = e * I - N * z, this.y = N * A - t * I, this.z = t * z - e * A, this;
  }
  projectOnVector(M) {
    const D = M.lengthSq();
    if (D === 0)
      return this.set(0, 0, 0);
    const t = M.dot(this) / D;
    return this.copy(M).multiplyScalar(t);
  }
  projectOnPlane(M) {
    return en.copy(this).projectOnVector(M), this.sub(en);
  }
  reflect(M) {
    return this.sub(en.copy(M).multiplyScalar(2 * this.dot(M)));
  }
  angleTo(M) {
    const D = Math.sqrt(this.lengthSq() * M.lengthSq());
    if (D === 0)
      return Math.PI / 2;
    const t = this.dot(M) / D;
    return Math.acos(OD(t, -1, 1));
  }
  distanceTo(M) {
    return Math.sqrt(this.distanceToSquared(M));
  }
  distanceToSquared(M) {
    const D = this.x - M.x, t = this.y - M.y, e = this.z - M.z;
    return D * D + t * t + e * e;
  }
  manhattanDistanceTo(M) {
    return Math.abs(this.x - M.x) + Math.abs(this.y - M.y) + Math.abs(this.z - M.z);
  }
  setFromSpherical(M) {
    return this.setFromSphericalCoords(M.radius, M.phi, M.theta);
  }
  setFromSphericalCoords(M, D, t) {
    const e = Math.sin(D) * M;
    return this.x = e * Math.sin(t), this.y = Math.cos(D) * M, this.z = e * Math.cos(t), this;
  }
  setFromCylindrical(M) {
    return this.setFromCylindricalCoords(M.radius, M.theta, M.y);
  }
  setFromCylindricalCoords(M, D, t) {
    return this.x = M * Math.sin(D), this.y = t, this.z = M * Math.cos(D), this;
  }
  setFromMatrixPosition(M) {
    const D = M.elements;
    return this.x = D[12], this.y = D[13], this.z = D[14], this;
  }
  setFromMatrixScale(M) {
    const D = this.setFromMatrixColumn(M, 0).length(), t = this.setFromMatrixColumn(M, 1).length(), e = this.setFromMatrixColumn(M, 2).length();
    return this.x = D, this.y = t, this.z = e, this;
  }
  setFromMatrixColumn(M, D) {
    return this.fromArray(M.elements, D * 4);
  }
  setFromMatrix3Column(M, D) {
    return this.fromArray(M.elements, D * 3);
  }
  equals(M) {
    return M.x === this.x && M.y === this.y && M.z === this.z;
  }
  fromArray(M, D = 0) {
    return this.x = M[D], this.y = M[D + 1], this.z = M[D + 2], this;
  }
  toArray(M = [], D = 0) {
    return M[D] = this.x, M[D + 1] = this.y, M[D + 2] = this.z, M;
  }
  fromBufferAttribute(M, D, t) {
    return t !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = M.getX(D), this.y = M.getY(D), this.z = M.getZ(D), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const M = (Math.random() - 0.5) * 2, D = Math.random() * Math.PI * 2, t = Math.sqrt(1 - M ** 2);
    return this.x = t * Math.cos(D), this.y = t * Math.sin(D), this.z = M, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
O.prototype.isVector3 = !0;
const en = /* @__PURE__ */ new O(), GA = /* @__PURE__ */ new aD();
class pD {
  constructor(M = new O(1 / 0, 1 / 0, 1 / 0), D = new O(-1 / 0, -1 / 0, -1 / 0)) {
    this.min = M, this.max = D;
  }
  set(M, D) {
    return this.min.copy(M), this.max.copy(D), this;
  }
  setFromArray(M) {
    let D = 1 / 0, t = 1 / 0, e = 1 / 0, N = -1 / 0, A = -1 / 0, z = -1 / 0;
    for (let I = 0, i = M.length; I < i; I += 3) {
      const T = M[I], u = M[I + 1], g = M[I + 2];
      T < D && (D = T), u < t && (t = u), g < e && (e = g), T > N && (N = T), u > A && (A = u), g > z && (z = g);
    }
    return this.min.set(D, t, e), this.max.set(N, A, z), this;
  }
  setFromBufferAttribute(M) {
    let D = 1 / 0, t = 1 / 0, e = 1 / 0, N = -1 / 0, A = -1 / 0, z = -1 / 0;
    for (let I = 0, i = M.count; I < i; I++) {
      const T = M.getX(I), u = M.getY(I), g = M.getZ(I);
      T < D && (D = T), u < t && (t = u), g < e && (e = g), T > N && (N = T), u > A && (A = u), g > z && (z = g);
    }
    return this.min.set(D, t, e), this.max.set(N, A, z), this;
  }
  setFromPoints(M) {
    this.makeEmpty();
    for (let D = 0, t = M.length; D < t; D++)
      this.expandByPoint(M[D]);
    return this;
  }
  setFromCenterAndSize(M, D) {
    const t = at.copy(D).multiplyScalar(0.5);
    return this.min.copy(M).sub(t), this.max.copy(M).add(t), this;
  }
  setFromObject(M, D = !1) {
    return this.makeEmpty(), this.expandByObject(M, D);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(M) {
    return this.min.copy(M.min), this.max.copy(M.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(M) {
    return this.isEmpty() ? M.set(0, 0, 0) : M.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(M) {
    return this.isEmpty() ? M.set(0, 0, 0) : M.subVectors(this.max, this.min);
  }
  expandByPoint(M) {
    return this.min.min(M), this.max.max(M), this;
  }
  expandByVector(M) {
    return this.min.sub(M), this.max.add(M), this;
  }
  expandByScalar(M) {
    return this.min.addScalar(-M), this.max.addScalar(M), this;
  }
  expandByObject(M, D = !1) {
    M.updateWorldMatrix(!1, !1);
    const t = M.geometry;
    if (t !== void 0)
      if (D && t.attributes != null && t.attributes.position !== void 0) {
        const N = t.attributes.position;
        for (let A = 0, z = N.count; A < z; A++)
          at.fromBufferAttribute(N, A).applyMatrix4(M.matrixWorld), this.expandByPoint(at);
      } else
        t.boundingBox === null && t.computeBoundingBox(), Nn.copy(t.boundingBox), Nn.applyMatrix4(M.matrixWorld), this.union(Nn);
    const e = M.children;
    for (let N = 0, A = e.length; N < A; N++)
      this.expandByObject(e[N], D);
    return this;
  }
  containsPoint(M) {
    return !(M.x < this.min.x || M.x > this.max.x || M.y < this.min.y || M.y > this.max.y || M.z < this.min.z || M.z > this.max.z);
  }
  containsBox(M) {
    return this.min.x <= M.min.x && M.max.x <= this.max.x && this.min.y <= M.min.y && M.max.y <= this.max.y && this.min.z <= M.min.z && M.max.z <= this.max.z;
  }
  getParameter(M, D) {
    return D.set((M.x - this.min.x) / (this.max.x - this.min.x), (M.y - this.min.y) / (this.max.y - this.min.y), (M.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(M) {
    return !(M.max.x < this.min.x || M.min.x > this.max.x || M.max.y < this.min.y || M.min.y > this.max.y || M.max.z < this.min.z || M.min.z > this.max.z);
  }
  intersectsSphere(M) {
    return this.clampPoint(M.center, at), at.distanceToSquared(M.center) <= M.radius * M.radius;
  }
  intersectsPlane(M) {
    let D, t;
    return M.normal.x > 0 ? (D = M.normal.x * this.min.x, t = M.normal.x * this.max.x) : (D = M.normal.x * this.max.x, t = M.normal.x * this.min.x), M.normal.y > 0 ? (D += M.normal.y * this.min.y, t += M.normal.y * this.max.y) : (D += M.normal.y * this.max.y, t += M.normal.y * this.min.y), M.normal.z > 0 ? (D += M.normal.z * this.min.z, t += M.normal.z * this.max.z) : (D += M.normal.z * this.max.z, t += M.normal.z * this.min.z), D <= -M.constant && t >= -M.constant;
  }
  intersectsTriangle(M) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ye), Ge.subVectors(this.max, ye), Yt.subVectors(M.a, ye), Ut.subVectors(M.b, ye), Qt.subVectors(M.c, ye), $D.subVectors(Ut, Yt), Mt.subVectors(Qt, Ut), Ct.subVectors(Yt, Qt);
    let D = [
      0,
      -$D.z,
      $D.y,
      0,
      -Mt.z,
      Mt.y,
      0,
      -Ct.z,
      Ct.y,
      $D.z,
      0,
      -$D.x,
      Mt.z,
      0,
      -Mt.x,
      Ct.z,
      0,
      -Ct.x,
      -$D.y,
      $D.x,
      0,
      -Mt.y,
      Mt.x,
      0,
      -Ct.y,
      Ct.x,
      0
    ];
    return !nn(D, Yt, Ut, Qt, Ge) || (D = [1, 0, 0, 0, 1, 0, 0, 0, 1], !nn(D, Yt, Ut, Qt, Ge)) ? !1 : (We.crossVectors($D, Mt), D = [We.x, We.y, We.z], nn(D, Yt, Ut, Qt, Ge));
  }
  clampPoint(M, D) {
    return D.copy(M).clamp(this.min, this.max);
  }
  distanceToPoint(M) {
    return at.copy(M).clamp(this.min, this.max).sub(M).length();
  }
  getBoundingSphere(M) {
    return this.getCenter(M.center), M.radius = this.getSize(at).length() * 0.5, M;
  }
  intersect(M) {
    return this.min.max(M.min), this.max.min(M.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(M) {
    return this.min.min(M.min), this.max.max(M.max), this;
  }
  applyMatrix4(M) {
    return this.isEmpty() ? this : (BD[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(M), BD[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(M), BD[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(M), BD[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(M), BD[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(M), BD[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(M), BD[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(M), BD[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(M), this.setFromPoints(BD), this);
  }
  translate(M) {
    return this.min.add(M), this.max.add(M), this;
  }
  equals(M) {
    return M.min.equals(this.min) && M.max.equals(this.max);
  }
}
pD.prototype.isBox3 = !0;
const BD = [
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O(),
  /* @__PURE__ */ new O()
], at = /* @__PURE__ */ new O(), Nn = /* @__PURE__ */ new pD(), Yt = /* @__PURE__ */ new O(), Ut = /* @__PURE__ */ new O(), Qt = /* @__PURE__ */ new O(), $D = /* @__PURE__ */ new O(), Mt = /* @__PURE__ */ new O(), Ct = /* @__PURE__ */ new O(), ye = /* @__PURE__ */ new O(), Ge = /* @__PURE__ */ new O(), We = /* @__PURE__ */ new O(), Lt = /* @__PURE__ */ new O();
function nn(n, M, D, t, e) {
  for (let N = 0, A = n.length - 3; N <= A; N += 3) {
    Lt.fromArray(n, N);
    const z = e.x * Math.abs(Lt.x) + e.y * Math.abs(Lt.y) + e.z * Math.abs(Lt.z), I = M.dot(Lt), i = D.dot(Lt), T = t.dot(Lt);
    if (Math.max(-Math.max(I, i, T), Math.min(I, i, T)) > z)
      return !1;
  }
  return !0;
}
const uT = /* @__PURE__ */ new pD(), WA = /* @__PURE__ */ new O(), qe = /* @__PURE__ */ new O(), An = /* @__PURE__ */ new O();
class Ie {
  constructor(M = new O(), D = -1) {
    this.center = M, this.radius = D;
  }
  set(M, D) {
    return this.center.copy(M), this.radius = D, this;
  }
  setFromPoints(M, D) {
    const t = this.center;
    D !== void 0 ? t.copy(D) : uT.setFromPoints(M).getCenter(t);
    let e = 0;
    for (let N = 0, A = M.length; N < A; N++)
      e = Math.max(e, t.distanceToSquared(M[N]));
    return this.radius = Math.sqrt(e), this;
  }
  copy(M) {
    return this.center.copy(M.center), this.radius = M.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(M) {
    return M.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(M) {
    return M.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(M) {
    const D = this.radius + M.radius;
    return M.center.distanceToSquared(this.center) <= D * D;
  }
  intersectsBox(M) {
    return M.intersectsSphere(this);
  }
  intersectsPlane(M) {
    return Math.abs(M.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(M, D) {
    const t = this.center.distanceToSquared(M);
    return D.copy(M), t > this.radius * this.radius && (D.sub(this.center).normalize(), D.multiplyScalar(this.radius).add(this.center)), D;
  }
  getBoundingBox(M) {
    return this.isEmpty() ? (M.makeEmpty(), M) : (M.set(this.center, this.center), M.expandByScalar(this.radius), M);
  }
  applyMatrix4(M) {
    return this.center.applyMatrix4(M), this.radius = this.radius * M.getMaxScaleOnAxis(), this;
  }
  translate(M) {
    return this.center.add(M), this;
  }
  expandByPoint(M) {
    An.subVectors(M, this.center);
    const D = An.lengthSq();
    if (D > this.radius * this.radius) {
      const t = Math.sqrt(D), e = (t - this.radius) * 0.5;
      this.center.add(An.multiplyScalar(e / t)), this.radius += e;
    }
    return this;
  }
  union(M) {
    return this.center.equals(M.center) === !0 ? qe.set(0, 0, 1).multiplyScalar(M.radius) : qe.subVectors(M.center, this.center).normalize().multiplyScalar(M.radius), this.expandByPoint(WA.copy(M.center).add(qe)), this.expandByPoint(WA.copy(M.center).sub(qe)), this;
  }
  equals(M) {
    return M.center.equals(this.center) && M.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const VD = /* @__PURE__ */ new O(), zn = /* @__PURE__ */ new O(), Xe = /* @__PURE__ */ new O(), Dt = /* @__PURE__ */ new O(), In = /* @__PURE__ */ new O(), Je = /* @__PURE__ */ new O(), Tn = /* @__PURE__ */ new O();
class Te {
  constructor(M = new O(), D = new O(0, 0, -1)) {
    this.origin = M, this.direction = D;
  }
  set(M, D) {
    return this.origin.copy(M), this.direction.copy(D), this;
  }
  copy(M) {
    return this.origin.copy(M.origin), this.direction.copy(M.direction), this;
  }
  at(M, D) {
    return D.copy(this.direction).multiplyScalar(M).add(this.origin);
  }
  lookAt(M) {
    return this.direction.copy(M).sub(this.origin).normalize(), this;
  }
  recast(M) {
    return this.origin.copy(this.at(M, VD)), this;
  }
  closestPointToPoint(M, D) {
    D.subVectors(M, this.origin);
    const t = D.dot(this.direction);
    return t < 0 ? D.copy(this.origin) : D.copy(this.direction).multiplyScalar(t).add(this.origin);
  }
  distanceToPoint(M) {
    return Math.sqrt(this.distanceSqToPoint(M));
  }
  distanceSqToPoint(M) {
    const D = VD.subVectors(M, this.origin).dot(this.direction);
    return D < 0 ? this.origin.distanceToSquared(M) : (VD.copy(this.direction).multiplyScalar(D).add(this.origin), VD.distanceToSquared(M));
  }
  distanceSqToSegment(M, D, t, e) {
    zn.copy(M).add(D).multiplyScalar(0.5), Xe.copy(D).sub(M).normalize(), Dt.copy(this.origin).sub(zn);
    const N = M.distanceTo(D) * 0.5, A = -this.direction.dot(Xe), z = Dt.dot(this.direction), I = -Dt.dot(Xe), i = Dt.lengthSq(), T = Math.abs(1 - A * A);
    let u, g, s, j;
    if (T > 0)
      if (u = A * I - z, g = A * z - I, j = N * T, u >= 0)
        if (g >= -j)
          if (g <= j) {
            const y = 1 / T;
            u *= y, g *= y, s = u * (u + A * g + 2 * z) + g * (A * u + g + 2 * I) + i;
          } else
            g = N, u = Math.max(0, -(A * g + z)), s = -u * u + g * (g + 2 * I) + i;
        else
          g = -N, u = Math.max(0, -(A * g + z)), s = -u * u + g * (g + 2 * I) + i;
      else
        g <= -j ? (u = Math.max(0, -(-A * N + z)), g = u > 0 ? -N : Math.min(Math.max(-N, -I), N), s = -u * u + g * (g + 2 * I) + i) : g <= j ? (u = 0, g = Math.min(Math.max(-N, -I), N), s = g * (g + 2 * I) + i) : (u = Math.max(0, -(A * N + z)), g = u > 0 ? N : Math.min(Math.max(-N, -I), N), s = -u * u + g * (g + 2 * I) + i);
    else
      g = A > 0 ? -N : N, u = Math.max(0, -(A * g + z)), s = -u * u + g * (g + 2 * I) + i;
    return t && t.copy(this.direction).multiplyScalar(u).add(this.origin), e && e.copy(Xe).multiplyScalar(g).add(zn), s;
  }
  intersectSphere(M, D) {
    VD.subVectors(M.center, this.origin);
    const t = VD.dot(this.direction), e = VD.dot(VD) - t * t, N = M.radius * M.radius;
    if (e > N)
      return null;
    const A = Math.sqrt(N - e), z = t - A, I = t + A;
    return z < 0 && I < 0 ? null : z < 0 ? this.at(I, D) : this.at(z, D);
  }
  intersectsSphere(M) {
    return this.distanceSqToPoint(M.center) <= M.radius * M.radius;
  }
  distanceToPlane(M) {
    const D = M.normal.dot(this.direction);
    if (D === 0)
      return M.distanceToPoint(this.origin) === 0 ? 0 : null;
    const t = -(this.origin.dot(M.normal) + M.constant) / D;
    return t >= 0 ? t : null;
  }
  intersectPlane(M, D) {
    const t = this.distanceToPlane(M);
    return t === null ? null : this.at(t, D);
  }
  intersectsPlane(M) {
    const D = M.distanceToPoint(this.origin);
    return D === 0 || M.normal.dot(this.direction) * D < 0;
  }
  intersectBox(M, D) {
    let t, e, N, A, z, I;
    const i = 1 / this.direction.x, T = 1 / this.direction.y, u = 1 / this.direction.z, g = this.origin;
    return i >= 0 ? (t = (M.min.x - g.x) * i, e = (M.max.x - g.x) * i) : (t = (M.max.x - g.x) * i, e = (M.min.x - g.x) * i), T >= 0 ? (N = (M.min.y - g.y) * T, A = (M.max.y - g.y) * T) : (N = (M.max.y - g.y) * T, A = (M.min.y - g.y) * T), t > A || N > e || ((N > t || t !== t) && (t = N), (A < e || e !== e) && (e = A), u >= 0 ? (z = (M.min.z - g.z) * u, I = (M.max.z - g.z) * u) : (z = (M.max.z - g.z) * u, I = (M.min.z - g.z) * u), t > I || z > e) || ((z > t || t !== t) && (t = z), (I < e || e !== e) && (e = I), e < 0) ? null : this.at(t >= 0 ? t : e, D);
  }
  intersectsBox(M) {
    return this.intersectBox(M, VD) !== null;
  }
  intersectTriangle(M, D, t, e, N) {
    In.subVectors(D, M), Je.subVectors(t, M), Tn.crossVectors(In, Je);
    let A = this.direction.dot(Tn), z;
    if (A > 0) {
      if (e)
        return null;
      z = 1;
    } else if (A < 0)
      z = -1, A = -A;
    else
      return null;
    Dt.subVectors(this.origin, M);
    const I = z * this.direction.dot(Je.crossVectors(Dt, Je));
    if (I < 0)
      return null;
    const i = z * this.direction.dot(In.cross(Dt));
    if (i < 0 || I + i > A)
      return null;
    const T = -z * Dt.dot(Tn);
    return T < 0 ? null : this.at(T / A, N);
  }
  applyMatrix4(M) {
    return this.origin.applyMatrix4(M), this.direction.transformDirection(M), this;
  }
  equals(M) {
    return M.origin.equals(this.origin) && M.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class aM {
  constructor() {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
  }
  set(M, D, t, e, N, A, z, I, i, T, u, g, s, j, y, a) {
    const c = this.elements;
    return c[0] = M, c[4] = D, c[8] = t, c[12] = e, c[1] = N, c[5] = A, c[9] = z, c[13] = I, c[2] = i, c[6] = T, c[10] = u, c[14] = g, c[3] = s, c[7] = j, c[11] = y, c[15] = a, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new aM().fromArray(this.elements);
  }
  copy(M) {
    const D = this.elements, t = M.elements;
    return D[0] = t[0], D[1] = t[1], D[2] = t[2], D[3] = t[3], D[4] = t[4], D[5] = t[5], D[6] = t[6], D[7] = t[7], D[8] = t[8], D[9] = t[9], D[10] = t[10], D[11] = t[11], D[12] = t[12], D[13] = t[13], D[14] = t[14], D[15] = t[15], this;
  }
  copyPosition(M) {
    const D = this.elements, t = M.elements;
    return D[12] = t[12], D[13] = t[13], D[14] = t[14], this;
  }
  setFromMatrix3(M) {
    const D = M.elements;
    return this.set(D[0], D[3], D[6], 0, D[1], D[4], D[7], 0, D[2], D[5], D[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(M, D, t) {
    return M.setFromMatrixColumn(this, 0), D.setFromMatrixColumn(this, 1), t.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(M, D, t) {
    return this.set(M.x, D.x, t.x, 0, M.y, D.y, t.y, 0, M.z, D.z, t.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(M) {
    const D = this.elements, t = M.elements, e = 1 / ft.setFromMatrixColumn(M, 0).length(), N = 1 / ft.setFromMatrixColumn(M, 1).length(), A = 1 / ft.setFromMatrixColumn(M, 2).length();
    return D[0] = t[0] * e, D[1] = t[1] * e, D[2] = t[2] * e, D[3] = 0, D[4] = t[4] * N, D[5] = t[5] * N, D[6] = t[6] * N, D[7] = 0, D[8] = t[8] * A, D[9] = t[9] * A, D[10] = t[10] * A, D[11] = 0, D[12] = 0, D[13] = 0, D[14] = 0, D[15] = 1, this;
  }
  makeRotationFromEuler(M) {
    M && M.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    const D = this.elements, t = M.x, e = M.y, N = M.z, A = Math.cos(t), z = Math.sin(t), I = Math.cos(e), i = Math.sin(e), T = Math.cos(N), u = Math.sin(N);
    if (M.order === "XYZ") {
      const g = A * T, s = A * u, j = z * T, y = z * u;
      D[0] = I * T, D[4] = -I * u, D[8] = i, D[1] = s + j * i, D[5] = g - y * i, D[9] = -z * I, D[2] = y - g * i, D[6] = j + s * i, D[10] = A * I;
    } else if (M.order === "YXZ") {
      const g = I * T, s = I * u, j = i * T, y = i * u;
      D[0] = g + y * z, D[4] = j * z - s, D[8] = A * i, D[1] = A * u, D[5] = A * T, D[9] = -z, D[2] = s * z - j, D[6] = y + g * z, D[10] = A * I;
    } else if (M.order === "ZXY") {
      const g = I * T, s = I * u, j = i * T, y = i * u;
      D[0] = g - y * z, D[4] = -A * u, D[8] = j + s * z, D[1] = s + j * z, D[5] = A * T, D[9] = y - g * z, D[2] = -A * i, D[6] = z, D[10] = A * I;
    } else if (M.order === "ZYX") {
      const g = A * T, s = A * u, j = z * T, y = z * u;
      D[0] = I * T, D[4] = j * i - s, D[8] = g * i + y, D[1] = I * u, D[5] = y * i + g, D[9] = s * i - j, D[2] = -i, D[6] = z * I, D[10] = A * I;
    } else if (M.order === "YZX") {
      const g = A * I, s = A * i, j = z * I, y = z * i;
      D[0] = I * T, D[4] = y - g * u, D[8] = j * u + s, D[1] = u, D[5] = A * T, D[9] = -z * T, D[2] = -i * T, D[6] = s * u + j, D[10] = g - y * u;
    } else if (M.order === "XZY") {
      const g = A * I, s = A * i, j = z * I, y = z * i;
      D[0] = I * T, D[4] = -u, D[8] = i * T, D[1] = g * u + y, D[5] = A * T, D[9] = s * u - j, D[2] = j * u - s, D[6] = z * T, D[10] = y * u + g;
    }
    return D[3] = 0, D[7] = 0, D[11] = 0, D[12] = 0, D[13] = 0, D[14] = 0, D[15] = 1, this;
  }
  makeRotationFromQuaternion(M) {
    return this.compose(gT, M, rT);
  }
  lookAt(M, D, t) {
    const e = this.elements;
    return LD.subVectors(M, D), LD.lengthSq() === 0 && (LD.z = 1), LD.normalize(), tt.crossVectors(t, LD), tt.lengthSq() === 0 && (Math.abs(t.z) === 1 ? LD.x += 1e-4 : LD.z += 1e-4, LD.normalize(), tt.crossVectors(t, LD)), tt.normalize(), $e.crossVectors(LD, tt), e[0] = tt.x, e[4] = $e.x, e[8] = LD.x, e[1] = tt.y, e[5] = $e.y, e[9] = LD.y, e[2] = tt.z, e[6] = $e.z, e[10] = LD.z, this;
  }
  multiply(M, D) {
    return D !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(M, D)) : this.multiplyMatrices(this, M);
  }
  premultiply(M) {
    return this.multiplyMatrices(M, this);
  }
  multiplyMatrices(M, D) {
    const t = M.elements, e = D.elements, N = this.elements, A = t[0], z = t[4], I = t[8], i = t[12], T = t[1], u = t[5], g = t[9], s = t[13], j = t[2], y = t[6], a = t[10], c = t[14], r = t[3], l = t[7], C = t[11], E = t[15], d = e[0], p = e[4], H = e[8], DM = e[12], G = e[1], o = e[5], h = e[9], Y = e[13], k = e[2], f = e[6], Q = e[10], b = e[14], W = e[3], IM = e[7], Z = e[11], V = e[15];
    return N[0] = A * d + z * G + I * k + i * W, N[4] = A * p + z * o + I * f + i * IM, N[8] = A * H + z * h + I * Q + i * Z, N[12] = A * DM + z * Y + I * b + i * V, N[1] = T * d + u * G + g * k + s * W, N[5] = T * p + u * o + g * f + s * IM, N[9] = T * H + u * h + g * Q + s * Z, N[13] = T * DM + u * Y + g * b + s * V, N[2] = j * d + y * G + a * k + c * W, N[6] = j * p + y * o + a * f + c * IM, N[10] = j * H + y * h + a * Q + c * Z, N[14] = j * DM + y * Y + a * b + c * V, N[3] = r * d + l * G + C * k + E * W, N[7] = r * p + l * o + C * f + E * IM, N[11] = r * H + l * h + C * Q + E * Z, N[15] = r * DM + l * Y + C * b + E * V, this;
  }
  multiplyScalar(M) {
    const D = this.elements;
    return D[0] *= M, D[4] *= M, D[8] *= M, D[12] *= M, D[1] *= M, D[5] *= M, D[9] *= M, D[13] *= M, D[2] *= M, D[6] *= M, D[10] *= M, D[14] *= M, D[3] *= M, D[7] *= M, D[11] *= M, D[15] *= M, this;
  }
  determinant() {
    const M = this.elements, D = M[0], t = M[4], e = M[8], N = M[12], A = M[1], z = M[5], I = M[9], i = M[13], T = M[2], u = M[6], g = M[10], s = M[14], j = M[3], y = M[7], a = M[11], c = M[15];
    return j * (+N * I * u - e * i * u - N * z * g + t * i * g + e * z * s - t * I * s) + y * (+D * I * s - D * i * g + N * A * g - e * A * s + e * i * T - N * I * T) + a * (+D * i * u - D * z * s - N * A * u + t * A * s + N * z * T - t * i * T) + c * (-e * z * T - D * I * u + D * z * g + e * A * u - t * A * g + t * I * T);
  }
  transpose() {
    const M = this.elements;
    let D;
    return D = M[1], M[1] = M[4], M[4] = D, D = M[2], M[2] = M[8], M[8] = D, D = M[6], M[6] = M[9], M[9] = D, D = M[3], M[3] = M[12], M[12] = D, D = M[7], M[7] = M[13], M[13] = D, D = M[11], M[11] = M[14], M[14] = D, this;
  }
  setPosition(M, D, t) {
    const e = this.elements;
    return M.isVector3 ? (e[12] = M.x, e[13] = M.y, e[14] = M.z) : (e[12] = M, e[13] = D, e[14] = t), this;
  }
  invert() {
    const M = this.elements, D = M[0], t = M[1], e = M[2], N = M[3], A = M[4], z = M[5], I = M[6], i = M[7], T = M[8], u = M[9], g = M[10], s = M[11], j = M[12], y = M[13], a = M[14], c = M[15], r = u * a * i - y * g * i + y * I * s - z * a * s - u * I * c + z * g * c, l = j * g * i - T * a * i - j * I * s + A * a * s + T * I * c - A * g * c, C = T * y * i - j * u * i + j * z * s - A * y * s - T * z * c + A * u * c, E = j * u * I - T * y * I - j * z * g + A * y * g + T * z * a - A * u * a, d = D * r + t * l + e * C + N * E;
    if (d === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / d;
    return M[0] = r * p, M[1] = (y * g * N - u * a * N - y * e * s + t * a * s + u * e * c - t * g * c) * p, M[2] = (z * a * N - y * I * N + y * e * i - t * a * i - z * e * c + t * I * c) * p, M[3] = (u * I * N - z * g * N - u * e * i + t * g * i + z * e * s - t * I * s) * p, M[4] = l * p, M[5] = (T * a * N - j * g * N + j * e * s - D * a * s - T * e * c + D * g * c) * p, M[6] = (j * I * N - A * a * N - j * e * i + D * a * i + A * e * c - D * I * c) * p, M[7] = (A * g * N - T * I * N + T * e * i - D * g * i - A * e * s + D * I * s) * p, M[8] = C * p, M[9] = (j * u * N - T * y * N - j * t * s + D * y * s + T * t * c - D * u * c) * p, M[10] = (A * y * N - j * z * N + j * t * i - D * y * i - A * t * c + D * z * c) * p, M[11] = (T * z * N - A * u * N - T * t * i + D * u * i + A * t * s - D * z * s) * p, M[12] = E * p, M[13] = (T * y * e - j * u * e + j * t * g - D * y * g - T * t * a + D * u * a) * p, M[14] = (j * z * e - A * y * e - j * t * I + D * y * I + A * t * a - D * z * a) * p, M[15] = (A * u * e - T * z * e + T * t * I - D * u * I - A * t * g + D * z * g) * p, this;
  }
  scale(M) {
    const D = this.elements, t = M.x, e = M.y, N = M.z;
    return D[0] *= t, D[4] *= e, D[8] *= N, D[1] *= t, D[5] *= e, D[9] *= N, D[2] *= t, D[6] *= e, D[10] *= N, D[3] *= t, D[7] *= e, D[11] *= N, this;
  }
  getMaxScaleOnAxis() {
    const M = this.elements, D = M[0] * M[0] + M[1] * M[1] + M[2] * M[2], t = M[4] * M[4] + M[5] * M[5] + M[6] * M[6], e = M[8] * M[8] + M[9] * M[9] + M[10] * M[10];
    return Math.sqrt(Math.max(D, t, e));
  }
  makeTranslation(M, D, t) {
    return this.set(1, 0, 0, M, 0, 1, 0, D, 0, 0, 1, t, 0, 0, 0, 1), this;
  }
  makeRotationX(M) {
    const D = Math.cos(M), t = Math.sin(M);
    return this.set(1, 0, 0, 0, 0, D, -t, 0, 0, t, D, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(M) {
    const D = Math.cos(M), t = Math.sin(M);
    return this.set(D, 0, t, 0, 0, 1, 0, 0, -t, 0, D, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(M) {
    const D = Math.cos(M), t = Math.sin(M);
    return this.set(D, -t, 0, 0, t, D, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(M, D) {
    const t = Math.cos(D), e = Math.sin(D), N = 1 - t, A = M.x, z = M.y, I = M.z, i = N * A, T = N * z;
    return this.set(i * A + t, i * z - e * I, i * I + e * z, 0, i * z + e * I, T * z + t, T * I - e * A, 0, i * I - e * z, T * I + e * A, N * I * I + t, 0, 0, 0, 0, 1), this;
  }
  makeScale(M, D, t) {
    return this.set(M, 0, 0, 0, 0, D, 0, 0, 0, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeShear(M, D, t, e, N, A) {
    return this.set(1, t, N, 0, M, 1, A, 0, D, e, 1, 0, 0, 0, 0, 1), this;
  }
  compose(M, D, t) {
    const e = this.elements, N = D._x, A = D._y, z = D._z, I = D._w, i = N + N, T = A + A, u = z + z, g = N * i, s = N * T, j = N * u, y = A * T, a = A * u, c = z * u, r = I * i, l = I * T, C = I * u, E = t.x, d = t.y, p = t.z;
    return e[0] = (1 - (y + c)) * E, e[1] = (s + C) * E, e[2] = (j - l) * E, e[3] = 0, e[4] = (s - C) * d, e[5] = (1 - (g + c)) * d, e[6] = (a + r) * d, e[7] = 0, e[8] = (j + l) * p, e[9] = (a - r) * p, e[10] = (1 - (g + y)) * p, e[11] = 0, e[12] = M.x, e[13] = M.y, e[14] = M.z, e[15] = 1, this;
  }
  decompose(M, D, t) {
    const e = this.elements;
    let N = ft.set(e[0], e[1], e[2]).length();
    const A = ft.set(e[4], e[5], e[6]).length(), z = ft.set(e[8], e[9], e[10]).length();
    this.determinant() < 0 && (N = -N), M.x = e[12], M.y = e[13], M.z = e[14], UD.copy(this);
    const i = 1 / N, T = 1 / A, u = 1 / z;
    return UD.elements[0] *= i, UD.elements[1] *= i, UD.elements[2] *= i, UD.elements[4] *= T, UD.elements[5] *= T, UD.elements[6] *= T, UD.elements[8] *= u, UD.elements[9] *= u, UD.elements[10] *= u, D.setFromRotationMatrix(UD), t.x = N, t.y = A, t.z = z, this;
  }
  makePerspective(M, D, t, e, N, A) {
    A === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    const z = this.elements, I = 2 * N / (D - M), i = 2 * N / (t - e), T = (D + M) / (D - M), u = (t + e) / (t - e), g = -(A + N) / (A - N), s = -2 * A * N / (A - N);
    return z[0] = I, z[4] = 0, z[8] = T, z[12] = 0, z[1] = 0, z[5] = i, z[9] = u, z[13] = 0, z[2] = 0, z[6] = 0, z[10] = g, z[14] = s, z[3] = 0, z[7] = 0, z[11] = -1, z[15] = 0, this;
  }
  makeOrthographic(M, D, t, e, N, A) {
    const z = this.elements, I = 1 / (D - M), i = 1 / (t - e), T = 1 / (A - N), u = (D + M) * I, g = (t + e) * i, s = (A + N) * T;
    return z[0] = 2 * I, z[4] = 0, z[8] = 0, z[12] = -u, z[1] = 0, z[5] = 2 * i, z[9] = 0, z[13] = -g, z[2] = 0, z[6] = 0, z[10] = -2 * T, z[14] = -s, z[3] = 0, z[7] = 0, z[11] = 0, z[15] = 1, this;
  }
  equals(M) {
    const D = this.elements, t = M.elements;
    for (let e = 0; e < 16; e++)
      if (D[e] !== t[e])
        return !1;
    return !0;
  }
  fromArray(M, D = 0) {
    for (let t = 0; t < 16; t++)
      this.elements[t] = M[t + D];
    return this;
  }
  toArray(M = [], D = 0) {
    const t = this.elements;
    return M[D] = t[0], M[D + 1] = t[1], M[D + 2] = t[2], M[D + 3] = t[3], M[D + 4] = t[4], M[D + 5] = t[5], M[D + 6] = t[6], M[D + 7] = t[7], M[D + 8] = t[8], M[D + 9] = t[9], M[D + 10] = t[10], M[D + 11] = t[11], M[D + 12] = t[12], M[D + 13] = t[13], M[D + 14] = t[14], M[D + 15] = t[15], M;
  }
}
aM.prototype.isMatrix4 = !0;
const ft = /* @__PURE__ */ new O(), UD = /* @__PURE__ */ new aM(), gT = /* @__PURE__ */ new O(0, 0, 0), rT = /* @__PURE__ */ new O(1, 1, 1), tt = /* @__PURE__ */ new O(), $e = /* @__PURE__ */ new O(), LD = /* @__PURE__ */ new O(), qA = /* @__PURE__ */ new aM(), XA = /* @__PURE__ */ new aD();
class ct {
  constructor(M = 0, D = 0, t = 0, e = ct.DefaultOrder) {
    this._x = M, this._y = D, this._z = t, this._order = e;
  }
  get x() {
    return this._x;
  }
  set x(M) {
    this._x = M, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(M) {
    this._y = M, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(M) {
    this._z = M, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(M) {
    this._order = M, this._onChangeCallback();
  }
  set(M, D, t, e = this._order) {
    return this._x = M, this._y = D, this._z = t, this._order = e, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(M) {
    return this._x = M._x, this._y = M._y, this._z = M._z, this._order = M._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(M, D = this._order, t = !0) {
    const e = M.elements, N = e[0], A = e[4], z = e[8], I = e[1], i = e[5], T = e[9], u = e[2], g = e[6], s = e[10];
    switch (D) {
      case "XYZ":
        this._y = Math.asin(OD(z, -1, 1)), Math.abs(z) < 0.9999999 ? (this._x = Math.atan2(-T, s), this._z = Math.atan2(-A, N)) : (this._x = Math.atan2(g, i), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-OD(T, -1, 1)), Math.abs(T) < 0.9999999 ? (this._y = Math.atan2(z, s), this._z = Math.atan2(I, i)) : (this._y = Math.atan2(-u, N), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(OD(g, -1, 1)), Math.abs(g) < 0.9999999 ? (this._y = Math.atan2(-u, s), this._z = Math.atan2(-A, i)) : (this._y = 0, this._z = Math.atan2(I, N));
        break;
      case "ZYX":
        this._y = Math.asin(-OD(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(g, s), this._z = Math.atan2(I, N)) : (this._x = 0, this._z = Math.atan2(-A, i));
        break;
      case "YZX":
        this._z = Math.asin(OD(I, -1, 1)), Math.abs(I) < 0.9999999 ? (this._x = Math.atan2(-T, i), this._y = Math.atan2(-u, N)) : (this._x = 0, this._y = Math.atan2(z, s));
        break;
      case "XZY":
        this._z = Math.asin(-OD(A, -1, 1)), Math.abs(A) < 0.9999999 ? (this._x = Math.atan2(g, i), this._y = Math.atan2(z, N)) : (this._x = Math.atan2(-T, s), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + D);
    }
    return this._order = D, t === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(M, D, t) {
    return qA.makeRotationFromQuaternion(M), this.setFromRotationMatrix(qA, D, t);
  }
  setFromVector3(M, D = this._order) {
    return this.set(M.x, M.y, M.z, D);
  }
  reorder(M) {
    return XA.setFromEuler(this), this.setFromQuaternion(XA, M);
  }
  equals(M) {
    return M._x === this._x && M._y === this._y && M._z === this._z && M._order === this._order;
  }
  fromArray(M) {
    return this._x = M[0], this._y = M[1], this._z = M[2], M[3] !== void 0 && (this._order = M[3]), this._onChangeCallback(), this;
  }
  toArray(M = [], D = 0) {
    return M[D] = this._x, M[D + 1] = this._y, M[D + 2] = this._z, M[D + 3] = this._order, M;
  }
  toVector3(M) {
    return M ? M.set(this._x, this._y, this._z) : new O(this._x, this._y, this._z);
  }
  _onChange(M) {
    return this._onChangeCallback = M, this;
  }
  _onChangeCallback() {
  }
}
ct.prototype.isEuler = !0;
ct.DefaultOrder = "XYZ";
ct.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ti {
  constructor() {
    this.mask = 1;
  }
  set(M) {
    this.mask = (1 << M | 0) >>> 0;
  }
  enable(M) {
    this.mask |= 1 << M | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(M) {
    this.mask ^= 1 << M | 0;
  }
  disable(M) {
    this.mask &= ~(1 << M | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(M) {
    return (this.mask & M.mask) !== 0;
  }
  isEnabled(M) {
    return (this.mask & (1 << M | 0)) !== 0;
  }
}
let sT = 0;
const JA = /* @__PURE__ */ new O(), mt = /* @__PURE__ */ new aD(), HD = /* @__PURE__ */ new aM(), MN = /* @__PURE__ */ new O(), oe = /* @__PURE__ */ new O(), cT = /* @__PURE__ */ new O(), jT = /* @__PURE__ */ new aD(), $A = /* @__PURE__ */ new O(1, 0, 0), Mz = /* @__PURE__ */ new O(0, 1, 0), Dz = /* @__PURE__ */ new O(0, 0, 1), yT = { type: "added" }, tz = { type: "removed" };
class ZM extends dt {
  constructor() {
    super(), Object.defineProperty(this, "id", { value: sT++ }), this.uuid = bD(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ZM.DefaultUp.clone();
    const M = new O(), D = new ct(), t = new aD(), e = new O(1, 1, 1);
    function N() {
      t.setFromEuler(D, !1);
    }
    function A() {
      D.setFromQuaternion(t, void 0, !1);
    }
    D._onChange(N), t._onChange(A), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: M
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: D
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      modelViewMatrix: {
        value: new aM()
      },
      normalMatrix: {
        value: new gD()
      }
    }), this.matrix = new aM(), this.matrixWorld = new aM(), this.matrixAutoUpdate = ZM.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Ti(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(M) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(M), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(M) {
    return this.quaternion.premultiply(M), this;
  }
  setRotationFromAxisAngle(M, D) {
    this.quaternion.setFromAxisAngle(M, D);
  }
  setRotationFromEuler(M) {
    this.quaternion.setFromEuler(M, !0);
  }
  setRotationFromMatrix(M) {
    this.quaternion.setFromRotationMatrix(M);
  }
  setRotationFromQuaternion(M) {
    this.quaternion.copy(M);
  }
  rotateOnAxis(M, D) {
    return mt.setFromAxisAngle(M, D), this.quaternion.multiply(mt), this;
  }
  rotateOnWorldAxis(M, D) {
    return mt.setFromAxisAngle(M, D), this.quaternion.premultiply(mt), this;
  }
  rotateX(M) {
    return this.rotateOnAxis($A, M);
  }
  rotateY(M) {
    return this.rotateOnAxis(Mz, M);
  }
  rotateZ(M) {
    return this.rotateOnAxis(Dz, M);
  }
  translateOnAxis(M, D) {
    return JA.copy(M).applyQuaternion(this.quaternion), this.position.add(JA.multiplyScalar(D)), this;
  }
  translateX(M) {
    return this.translateOnAxis($A, M);
  }
  translateY(M) {
    return this.translateOnAxis(Mz, M);
  }
  translateZ(M) {
    return this.translateOnAxis(Dz, M);
  }
  localToWorld(M) {
    return M.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(M) {
    return M.applyMatrix4(HD.copy(this.matrixWorld).invert());
  }
  lookAt(M, D, t) {
    M.isVector3 ? MN.copy(M) : MN.set(M, D, t);
    const e = this.parent;
    this.updateWorldMatrix(!0, !1), oe.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? HD.lookAt(oe, MN, this.up) : HD.lookAt(MN, oe, this.up), this.quaternion.setFromRotationMatrix(HD), e && (HD.extractRotation(e.matrixWorld), mt.setFromRotationMatrix(HD), this.quaternion.premultiply(mt.invert()));
  }
  add(M) {
    if (arguments.length > 1) {
      for (let D = 0; D < arguments.length; D++)
        this.add(arguments[D]);
      return this;
    }
    return M === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", M), this) : (M && M.isObject3D ? (M.parent !== null && M.parent.remove(M), M.parent = this, this.children.push(M), M.dispatchEvent(yT)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", M), this);
  }
  remove(M) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.remove(arguments[t]);
      return this;
    }
    const D = this.children.indexOf(M);
    return D !== -1 && (M.parent = null, this.children.splice(D, 1), M.dispatchEvent(tz)), this;
  }
  removeFromParent() {
    const M = this.parent;
    return M !== null && M.remove(this), this;
  }
  clear() {
    for (let M = 0; M < this.children.length; M++) {
      const D = this.children[M];
      D.parent = null, D.dispatchEvent(tz);
    }
    return this.children.length = 0, this;
  }
  attach(M) {
    return this.updateWorldMatrix(!0, !1), HD.copy(this.matrixWorld).invert(), M.parent !== null && (M.parent.updateWorldMatrix(!0, !1), HD.multiply(M.parent.matrixWorld)), M.applyMatrix4(HD), this.add(M), M.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(M) {
    return this.getObjectByProperty("id", M);
  }
  getObjectByName(M) {
    return this.getObjectByProperty("name", M);
  }
  getObjectByProperty(M, D) {
    if (this[M] === D)
      return this;
    for (let t = 0, e = this.children.length; t < e; t++) {
      const A = this.children[t].getObjectByProperty(M, D);
      if (A !== void 0)
        return A;
    }
  }
  getWorldPosition(M) {
    return this.updateWorldMatrix(!0, !1), M.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(M) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(oe, M, cT), M;
  }
  getWorldScale(M) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(oe, jT, M), M;
  }
  getWorldDirection(M) {
    this.updateWorldMatrix(!0, !1);
    const D = this.matrixWorld.elements;
    return M.set(D[8], D[9], D[10]).normalize();
  }
  raycast() {
  }
  traverse(M) {
    M(this);
    const D = this.children;
    for (let t = 0, e = D.length; t < e; t++)
      D[t].traverse(M);
  }
  traverseVisible(M) {
    if (this.visible === !1)
      return;
    M(this);
    const D = this.children;
    for (let t = 0, e = D.length; t < e; t++)
      D[t].traverseVisible(M);
  }
  traverseAncestors(M) {
    const D = this.parent;
    D !== null && (M(D), D.traverseAncestors(M));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(M) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || M) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, M = !0);
    const D = this.children;
    for (let t = 0, e = D.length; t < e; t++)
      D[t].updateMatrixWorld(M);
  }
  updateWorldMatrix(M, D) {
    const t = this.parent;
    if (M === !0 && t !== null && t.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), D === !0) {
      const e = this.children;
      for (let N = 0, A = e.length; N < A; N++)
        e[N].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(M) {
    const D = M === void 0 || typeof M == "string", t = {};
    D && (M = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {}
    }, t.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const e = {};
    e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.castShadow === !0 && (e.castShadow = !0), this.receiveShadow === !0 && (e.receiveShadow = !0), this.visible === !1 && (e.visible = !1), this.frustumCulled === !1 && (e.frustumCulled = !1), this.renderOrder !== 0 && (e.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (e.userData = this.userData), e.layers = this.layers.mask, e.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (e.matrixAutoUpdate = !1), this.isInstancedMesh && (e.type = "InstancedMesh", e.count = this.count, e.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (e.instanceColor = this.instanceColor.toJSON()));
    function N(z, I) {
      return z[I.uuid] === void 0 && (z[I.uuid] = I.toJSON(M)), I.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? e.background = this.background.toJSON() : this.background.isTexture && (e.background = this.background.toJSON(M).uuid)), this.environment && this.environment.isTexture && (e.environment = this.environment.toJSON(M).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      e.geometry = N(M.geometries, this.geometry);
      const z = this.geometry.parameters;
      if (z !== void 0 && z.shapes !== void 0) {
        const I = z.shapes;
        if (Array.isArray(I))
          for (let i = 0, T = I.length; i < T; i++) {
            const u = I[i];
            N(M.shapes, u);
          }
        else
          N(M.shapes, I);
      }
    }
    if (this.isSkinnedMesh && (e.bindMode = this.bindMode, e.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (N(M.skeletons, this.skeleton), e.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const z = [];
        for (let I = 0, i = this.material.length; I < i; I++)
          z.push(N(M.materials, this.material[I]));
        e.material = z;
      } else
        e.material = N(M.materials, this.material);
    if (this.children.length > 0) {
      e.children = [];
      for (let z = 0; z < this.children.length; z++)
        e.children.push(this.children[z].toJSON(M).object);
    }
    if (this.animations.length > 0) {
      e.animations = [];
      for (let z = 0; z < this.animations.length; z++) {
        const I = this.animations[z];
        e.animations.push(N(M.animations, I));
      }
    }
    if (D) {
      const z = A(M.geometries), I = A(M.materials), i = A(M.textures), T = A(M.images), u = A(M.shapes), g = A(M.skeletons), s = A(M.animations);
      z.length > 0 && (t.geometries = z), I.length > 0 && (t.materials = I), i.length > 0 && (t.textures = i), T.length > 0 && (t.images = T), u.length > 0 && (t.shapes = u), g.length > 0 && (t.skeletons = g), s.length > 0 && (t.animations = s);
    }
    return t.object = e, t;
    function A(z) {
      const I = [];
      for (const i in z) {
        const T = z[i];
        delete T.metadata, I.push(T);
      }
      return I;
    }
  }
  clone(M) {
    return new this.constructor().copy(this, M);
  }
  copy(M, D = !0) {
    if (this.name = M.name, this.up.copy(M.up), this.position.copy(M.position), this.rotation.order = M.rotation.order, this.quaternion.copy(M.quaternion), this.scale.copy(M.scale), this.matrix.copy(M.matrix), this.matrixWorld.copy(M.matrixWorld), this.matrixAutoUpdate = M.matrixAutoUpdate, this.matrixWorldNeedsUpdate = M.matrixWorldNeedsUpdate, this.layers.mask = M.layers.mask, this.visible = M.visible, this.castShadow = M.castShadow, this.receiveShadow = M.receiveShadow, this.frustumCulled = M.frustumCulled, this.renderOrder = M.renderOrder, this.userData = JSON.parse(JSON.stringify(M.userData)), D === !0)
      for (let t = 0; t < M.children.length; t++) {
        const e = M.children[t];
        this.add(e.clone());
      }
    return this;
  }
}
ZM.DefaultUp = new O(0, 1, 0);
ZM.DefaultMatrixAutoUpdate = !0;
ZM.prototype.isObject3D = !0;
const QD = /* @__PURE__ */ new O(), GD = /* @__PURE__ */ new O(), un = /* @__PURE__ */ new O(), WD = /* @__PURE__ */ new O(), kt = /* @__PURE__ */ new O(), St = /* @__PURE__ */ new O(), ez = /* @__PURE__ */ new O(), gn = /* @__PURE__ */ new O(), rn = /* @__PURE__ */ new O(), sn = /* @__PURE__ */ new O();
class DD {
  constructor(M = new O(), D = new O(), t = new O()) {
    this.a = M, this.b = D, this.c = t;
  }
  static getNormal(M, D, t, e) {
    e.subVectors(t, D), QD.subVectors(M, D), e.cross(QD);
    const N = e.lengthSq();
    return N > 0 ? e.multiplyScalar(1 / Math.sqrt(N)) : e.set(0, 0, 0);
  }
  static getBarycoord(M, D, t, e, N) {
    QD.subVectors(e, D), GD.subVectors(t, D), un.subVectors(M, D);
    const A = QD.dot(QD), z = QD.dot(GD), I = QD.dot(un), i = GD.dot(GD), T = GD.dot(un), u = A * i - z * z;
    if (u === 0)
      return N.set(-2, -1, -1);
    const g = 1 / u, s = (i * I - z * T) * g, j = (A * T - z * I) * g;
    return N.set(1 - s - j, j, s);
  }
  static containsPoint(M, D, t, e) {
    return this.getBarycoord(M, D, t, e, WD), WD.x >= 0 && WD.y >= 0 && WD.x + WD.y <= 1;
  }
  static getUV(M, D, t, e, N, A, z, I) {
    return this.getBarycoord(M, D, t, e, WD), I.set(0, 0), I.addScaledVector(N, WD.x), I.addScaledVector(A, WD.y), I.addScaledVector(z, WD.z), I;
  }
  static isFrontFacing(M, D, t, e) {
    return QD.subVectors(t, D), GD.subVectors(M, D), QD.cross(GD).dot(e) < 0;
  }
  set(M, D, t) {
    return this.a.copy(M), this.b.copy(D), this.c.copy(t), this;
  }
  setFromPointsAndIndices(M, D, t, e) {
    return this.a.copy(M[D]), this.b.copy(M[t]), this.c.copy(M[e]), this;
  }
  setFromAttributeAndIndices(M, D, t, e) {
    return this.a.fromBufferAttribute(M, D), this.b.fromBufferAttribute(M, t), this.c.fromBufferAttribute(M, e), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(M) {
    return this.a.copy(M.a), this.b.copy(M.b), this.c.copy(M.c), this;
  }
  getArea() {
    return QD.subVectors(this.c, this.b), GD.subVectors(this.a, this.b), QD.cross(GD).length() * 0.5;
  }
  getMidpoint(M) {
    return M.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(M) {
    return DD.getNormal(this.a, this.b, this.c, M);
  }
  getPlane(M) {
    return M.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(M, D) {
    return DD.getBarycoord(M, this.a, this.b, this.c, D);
  }
  getUV(M, D, t, e, N) {
    return DD.getUV(M, this.a, this.b, this.c, D, t, e, N);
  }
  containsPoint(M) {
    return DD.containsPoint(M, this.a, this.b, this.c);
  }
  isFrontFacing(M) {
    return DD.isFrontFacing(this.a, this.b, this.c, M);
  }
  intersectsBox(M) {
    return M.intersectsTriangle(this);
  }
  closestPointToPoint(M, D) {
    const t = this.a, e = this.b, N = this.c;
    let A, z;
    kt.subVectors(e, t), St.subVectors(N, t), gn.subVectors(M, t);
    const I = kt.dot(gn), i = St.dot(gn);
    if (I <= 0 && i <= 0)
      return D.copy(t);
    rn.subVectors(M, e);
    const T = kt.dot(rn), u = St.dot(rn);
    if (T >= 0 && u <= T)
      return D.copy(e);
    const g = I * u - T * i;
    if (g <= 0 && I >= 0 && T <= 0)
      return A = I / (I - T), D.copy(t).addScaledVector(kt, A);
    sn.subVectors(M, N);
    const s = kt.dot(sn), j = St.dot(sn);
    if (j >= 0 && s <= j)
      return D.copy(N);
    const y = s * i - I * j;
    if (y <= 0 && i >= 0 && j <= 0)
      return z = i / (i - j), D.copy(t).addScaledVector(St, z);
    const a = T * j - s * u;
    if (a <= 0 && u - T >= 0 && s - j >= 0)
      return ez.subVectors(N, e), z = (u - T) / (u - T + (s - j)), D.copy(e).addScaledVector(ez, z);
    const c = 1 / (a + y + g);
    return A = y * c, z = g * c, D.copy(t).addScaledVector(kt, A).addScaledVector(St, z);
  }
  equals(M) {
    return M.a.equals(this.a) && M.b.equals(this.b) && M.c.equals(this.c);
  }
}
let oT = 0;
class ID extends dt {
  constructor() {
    super(), Object.defineProperty(this, "id", { value: oT++ }), this.uuid = bD(), this.name = "", this.type = "Material", this.fog = !0, this.blending = ve, this.side = Ye, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Ni, this.blendDst = ni, this.blendEquation = Wt, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = fn, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = AT, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = XN, this.stencilZFail = XN, this.stencilZPass = XN, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(M) {
    this._alphaTest > 0 != M > 0 && this.version++, this._alphaTest = M;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(M) {
    if (M !== void 0)
      for (const D in M) {
        const t = M[D];
        if (t === void 0) {
          console.warn("THREE.Material: '" + D + "' parameter is undefined.");
          continue;
        }
        if (D === "shading") {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = t === ei;
          continue;
        }
        const e = this[D];
        if (e === void 0) {
          console.warn("THREE." + this.type + ": '" + D + "' is not a property of this material.");
          continue;
        }
        e && e.isColor ? e.set(t) : e && e.isVector3 && t && t.isVector3 ? e.copy(t) : this[D] = t;
      }
  }
  toJSON(M) {
    const D = M === void 0 || typeof M == "string";
    D && (M = {
      textures: {},
      images: {}
    });
    const t = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), this.color && this.color.isColor && (t.color = this.color.getHex()), this.roughness !== void 0 && (t.roughness = this.roughness), this.metalness !== void 0 && (t.metalness = this.metalness), this.sheen !== void 0 && (t.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (t.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (t.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (t.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (t.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (t.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (t.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (t.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (t.shininess = this.shininess), this.clearcoat !== void 0 && (t.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (t.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (t.clearcoatMap = this.clearcoatMap.toJSON(M).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (t.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(M).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (t.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(M).uuid, t.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (t.map = this.map.toJSON(M).uuid), this.matcap && this.matcap.isTexture && (t.matcap = this.matcap.toJSON(M).uuid), this.alphaMap && this.alphaMap.isTexture && (t.alphaMap = this.alphaMap.toJSON(M).uuid), this.lightMap && this.lightMap.isTexture && (t.lightMap = this.lightMap.toJSON(M).uuid, t.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (t.aoMap = this.aoMap.toJSON(M).uuid, t.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (t.bumpMap = this.bumpMap.toJSON(M).uuid, t.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (t.normalMap = this.normalMap.toJSON(M).uuid, t.normalMapType = this.normalMapType, t.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (t.displacementMap = this.displacementMap.toJSON(M).uuid, t.displacementScale = this.displacementScale, t.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (t.roughnessMap = this.roughnessMap.toJSON(M).uuid), this.metalnessMap && this.metalnessMap.isTexture && (t.metalnessMap = this.metalnessMap.toJSON(M).uuid), this.emissiveMap && this.emissiveMap.isTexture && (t.emissiveMap = this.emissiveMap.toJSON(M).uuid), this.specularMap && this.specularMap.isTexture && (t.specularMap = this.specularMap.toJSON(M).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (t.specularIntensityMap = this.specularIntensityMap.toJSON(M).uuid), this.specularColorMap && this.specularColorMap.isTexture && (t.specularColorMap = this.specularColorMap.toJSON(M).uuid), this.envMap && this.envMap.isTexture && (t.envMap = this.envMap.toJSON(M).uuid, this.combine !== void 0 && (t.combine = this.combine)), this.envMapIntensity !== void 0 && (t.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (t.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (t.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (t.gradientMap = this.gradientMap.toJSON(M).uuid), this.transmission !== void 0 && (t.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (t.transmissionMap = this.transmissionMap.toJSON(M).uuid), this.thickness !== void 0 && (t.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (t.thicknessMap = this.thicknessMap.toJSON(M).uuid), this.attenuationDistance !== void 0 && (t.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (t.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (t.size = this.size), this.shadowSide !== null && (t.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (t.sizeAttenuation = this.sizeAttenuation), this.blending !== ve && (t.blending = this.blending), this.side !== Ye && (t.side = this.side), this.vertexColors && (t.vertexColors = !0), this.opacity < 1 && (t.opacity = this.opacity), this.transparent === !0 && (t.transparent = this.transparent), t.depthFunc = this.depthFunc, t.depthTest = this.depthTest, t.depthWrite = this.depthWrite, t.colorWrite = this.colorWrite, t.stencilWrite = this.stencilWrite, t.stencilWriteMask = this.stencilWriteMask, t.stencilFunc = this.stencilFunc, t.stencilRef = this.stencilRef, t.stencilFuncMask = this.stencilFuncMask, t.stencilFail = this.stencilFail, t.stencilZFail = this.stencilZFail, t.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (t.rotation = this.rotation), this.polygonOffset === !0 && (t.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (t.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (t.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (t.linewidth = this.linewidth), this.dashSize !== void 0 && (t.dashSize = this.dashSize), this.gapSize !== void 0 && (t.gapSize = this.gapSize), this.scale !== void 0 && (t.scale = this.scale), this.dithering === !0 && (t.dithering = !0), this.alphaTest > 0 && (t.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (t.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (t.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (t.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (t.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (t.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (t.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (t.flatShading = this.flatShading), this.visible === !1 && (t.visible = !1), this.toneMapped === !1 && (t.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (t.userData = this.userData);
    function e(N) {
      const A = [];
      for (const z in N) {
        const I = N[z];
        delete I.metadata, A.push(I);
      }
      return A;
    }
    if (D) {
      const N = e(M.textures), A = e(M.images);
      N.length > 0 && (t.textures = N), A.length > 0 && (t.images = A);
    }
    return t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(M) {
    this.name = M.name, this.fog = M.fog, this.blending = M.blending, this.side = M.side, this.vertexColors = M.vertexColors, this.opacity = M.opacity, this.transparent = M.transparent, this.blendSrc = M.blendSrc, this.blendDst = M.blendDst, this.blendEquation = M.blendEquation, this.blendSrcAlpha = M.blendSrcAlpha, this.blendDstAlpha = M.blendDstAlpha, this.blendEquationAlpha = M.blendEquationAlpha, this.depthFunc = M.depthFunc, this.depthTest = M.depthTest, this.depthWrite = M.depthWrite, this.stencilWriteMask = M.stencilWriteMask, this.stencilFunc = M.stencilFunc, this.stencilRef = M.stencilRef, this.stencilFuncMask = M.stencilFuncMask, this.stencilFail = M.stencilFail, this.stencilZFail = M.stencilZFail, this.stencilZPass = M.stencilZPass, this.stencilWrite = M.stencilWrite;
    const D = M.clippingPlanes;
    let t = null;
    if (D !== null) {
      const e = D.length;
      t = new Array(e);
      for (let N = 0; N !== e; ++N)
        t[N] = D[N].clone();
    }
    return this.clippingPlanes = t, this.clipIntersection = M.clipIntersection, this.clipShadows = M.clipShadows, this.shadowSide = M.shadowSide, this.colorWrite = M.colorWrite, this.precision = M.precision, this.polygonOffset = M.polygonOffset, this.polygonOffsetFactor = M.polygonOffsetFactor, this.polygonOffsetUnits = M.polygonOffsetUnits, this.dithering = M.dithering, this.alphaTest = M.alphaTest, this.alphaToCoverage = M.alphaToCoverage, this.premultipliedAlpha = M.premultipliedAlpha, this.visible = M.visible, this.toneMapped = M.toneMapped, this.userData = JSON.parse(JSON.stringify(M.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(M) {
    M === !0 && this.version++;
  }
}
ID.prototype.isMaterial = !0;
class $n extends ID {
  constructor(M) {
    super(), this.type = "MeshBasicMaterial", this.color = new cM(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = fN, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this.map = M.map, this.lightMap = M.lightMap, this.lightMapIntensity = M.lightMapIntensity, this.aoMap = M.aoMap, this.aoMapIntensity = M.aoMapIntensity, this.specularMap = M.specularMap, this.alphaMap = M.alphaMap, this.envMap = M.envMap, this.combine = M.combine, this.reflectivity = M.reflectivity, this.refractionRatio = M.refractionRatio, this.wireframe = M.wireframe, this.wireframeLinewidth = M.wireframeLinewidth, this.wireframeLinecap = M.wireframeLinecap, this.wireframeLinejoin = M.wireframeLinejoin, this;
  }
}
$n.prototype.isMeshBasicMaterial = !0;
const BM = /* @__PURE__ */ new O(), DN = /* @__PURE__ */ new q();
class AD {
  constructor(M, D, t) {
    if (Array.isArray(M))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "", this.array = M, this.itemSize = D, this.count = M !== void 0 ? M.length / D : 0, this.normalized = t === !0, this.usage = Qe, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(M) {
    M === !0 && this.version++;
  }
  setUsage(M) {
    return this.usage = M, this;
  }
  copy(M) {
    return this.name = M.name, this.array = new M.array.constructor(M.array), this.itemSize = M.itemSize, this.count = M.count, this.normalized = M.normalized, this.usage = M.usage, this;
  }
  copyAt(M, D, t) {
    M *= this.itemSize, t *= D.itemSize;
    for (let e = 0, N = this.itemSize; e < N; e++)
      this.array[M + e] = D.array[t + e];
    return this;
  }
  copyArray(M) {
    return this.array.set(M), this;
  }
  copyColorsArray(M) {
    const D = this.array;
    let t = 0;
    for (let e = 0, N = M.length; e < N; e++) {
      let A = M[e];
      A === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", e), A = new cM()), D[t++] = A.r, D[t++] = A.g, D[t++] = A.b;
    }
    return this;
  }
  copyVector2sArray(M) {
    const D = this.array;
    let t = 0;
    for (let e = 0, N = M.length; e < N; e++) {
      let A = M[e];
      A === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", e), A = new q()), D[t++] = A.x, D[t++] = A.y;
    }
    return this;
  }
  copyVector3sArray(M) {
    const D = this.array;
    let t = 0;
    for (let e = 0, N = M.length; e < N; e++) {
      let A = M[e];
      A === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", e), A = new O()), D[t++] = A.x, D[t++] = A.y, D[t++] = A.z;
    }
    return this;
  }
  copyVector4sArray(M) {
    const D = this.array;
    let t = 0;
    for (let e = 0, N = M.length; e < N; e++) {
      let A = M[e];
      A === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", e), A = new PM()), D[t++] = A.x, D[t++] = A.y, D[t++] = A.z, D[t++] = A.w;
    }
    return this;
  }
  applyMatrix3(M) {
    if (this.itemSize === 2)
      for (let D = 0, t = this.count; D < t; D++)
        DN.fromBufferAttribute(this, D), DN.applyMatrix3(M), this.setXY(D, DN.x, DN.y);
    else if (this.itemSize === 3)
      for (let D = 0, t = this.count; D < t; D++)
        BM.fromBufferAttribute(this, D), BM.applyMatrix3(M), this.setXYZ(D, BM.x, BM.y, BM.z);
    return this;
  }
  applyMatrix4(M) {
    for (let D = 0, t = this.count; D < t; D++)
      BM.x = this.getX(D), BM.y = this.getY(D), BM.z = this.getZ(D), BM.applyMatrix4(M), this.setXYZ(D, BM.x, BM.y, BM.z);
    return this;
  }
  applyNormalMatrix(M) {
    for (let D = 0, t = this.count; D < t; D++)
      BM.x = this.getX(D), BM.y = this.getY(D), BM.z = this.getZ(D), BM.applyNormalMatrix(M), this.setXYZ(D, BM.x, BM.y, BM.z);
    return this;
  }
  transformDirection(M) {
    for (let D = 0, t = this.count; D < t; D++)
      BM.x = this.getX(D), BM.y = this.getY(D), BM.z = this.getZ(D), BM.transformDirection(M), this.setXYZ(D, BM.x, BM.y, BM.z);
    return this;
  }
  set(M, D = 0) {
    return this.array.set(M, D), this;
  }
  getX(M) {
    return this.array[M * this.itemSize];
  }
  setX(M, D) {
    return this.array[M * this.itemSize] = D, this;
  }
  getY(M) {
    return this.array[M * this.itemSize + 1];
  }
  setY(M, D) {
    return this.array[M * this.itemSize + 1] = D, this;
  }
  getZ(M) {
    return this.array[M * this.itemSize + 2];
  }
  setZ(M, D) {
    return this.array[M * this.itemSize + 2] = D, this;
  }
  getW(M) {
    return this.array[M * this.itemSize + 3];
  }
  setW(M, D) {
    return this.array[M * this.itemSize + 3] = D, this;
  }
  setXY(M, D, t) {
    return M *= this.itemSize, this.array[M + 0] = D, this.array[M + 1] = t, this;
  }
  setXYZ(M, D, t, e) {
    return M *= this.itemSize, this.array[M + 0] = D, this.array[M + 1] = t, this.array[M + 2] = e, this;
  }
  setXYZW(M, D, t, e, N) {
    return M *= this.itemSize, this.array[M + 0] = D, this.array[M + 1] = t, this.array[M + 2] = e, this.array[M + 3] = N, this;
  }
  onUpload(M) {
    return this.onUploadCallback = M, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const M = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (M.name = this.name), this.usage !== Qe && (M.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (M.updateRange = this.updateRange), M;
  }
}
AD.prototype.isBufferAttribute = !0;
class ui extends AD {
  constructor(M, D, t) {
    super(new Uint16Array(M), D, t);
  }
}
class gi extends AD {
  constructor(M, D, t) {
    super(new Uint32Array(M), D, t);
  }
}
class aT extends AD {
  constructor(M, D, t) {
    super(new Uint16Array(M), D, t);
  }
}
aT.prototype.isFloat16BufferAttribute = !0;
class WM extends AD {
  constructor(M, D, t) {
    super(new Float32Array(M), D, t);
  }
}
let CT = 0;
const ED = /* @__PURE__ */ new aM(), cn = /* @__PURE__ */ new ZM(), Zt = /* @__PURE__ */ new O(), wD = /* @__PURE__ */ new pD(), ae = /* @__PURE__ */ new pD(), zD = /* @__PURE__ */ new O();
class VM extends dt {
  constructor() {
    super(), Object.defineProperty(this, "id", { value: CT++ }), this.uuid = bD(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(M) {
    return Array.isArray(M) ? this.index = new (ii(M) ? gi : ui)(M, 1) : this.index = M, this;
  }
  getAttribute(M) {
    return this.attributes[M];
  }
  setAttribute(M, D) {
    return this.attributes[M] = D, this;
  }
  deleteAttribute(M) {
    return delete this.attributes[M], this;
  }
  hasAttribute(M) {
    return this.attributes[M] !== void 0;
  }
  addGroup(M, D, t = 0) {
    this.groups.push({
      start: M,
      count: D,
      materialIndex: t
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(M, D) {
    this.drawRange.start = M, this.drawRange.count = D;
  }
  applyMatrix4(M) {
    const D = this.attributes.position;
    D !== void 0 && (D.applyMatrix4(M), D.needsUpdate = !0);
    const t = this.attributes.normal;
    if (t !== void 0) {
      const N = new gD().getNormalMatrix(M);
      t.applyNormalMatrix(N), t.needsUpdate = !0;
    }
    const e = this.attributes.tangent;
    return e !== void 0 && (e.transformDirection(M), e.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(M) {
    return ED.makeRotationFromQuaternion(M), this.applyMatrix4(ED), this;
  }
  rotateX(M) {
    return ED.makeRotationX(M), this.applyMatrix4(ED), this;
  }
  rotateY(M) {
    return ED.makeRotationY(M), this.applyMatrix4(ED), this;
  }
  rotateZ(M) {
    return ED.makeRotationZ(M), this.applyMatrix4(ED), this;
  }
  translate(M, D, t) {
    return ED.makeTranslation(M, D, t), this.applyMatrix4(ED), this;
  }
  scale(M, D, t) {
    return ED.makeScale(M, D, t), this.applyMatrix4(ED), this;
  }
  lookAt(M) {
    return cn.lookAt(M), cn.updateMatrix(), this.applyMatrix4(cn.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Zt).negate(), this.translate(Zt.x, Zt.y, Zt.z), this;
  }
  setFromPoints(M) {
    const D = [];
    for (let t = 0, e = M.length; t < e; t++) {
      const N = M[t];
      D.push(N.x, N.y, N.z || 0);
    }
    return this.setAttribute("position", new WM(D, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new pD());
    const M = this.attributes.position, D = this.morphAttributes.position;
    if (M && M.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new O(-1 / 0, -1 / 0, -1 / 0), new O(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (M !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(M), D)
        for (let t = 0, e = D.length; t < e; t++) {
          const N = D[t];
          wD.setFromBufferAttribute(N), this.morphTargetsRelative ? (zD.addVectors(this.boundingBox.min, wD.min), this.boundingBox.expandByPoint(zD), zD.addVectors(this.boundingBox.max, wD.max), this.boundingBox.expandByPoint(zD)) : (this.boundingBox.expandByPoint(wD.min), this.boundingBox.expandByPoint(wD.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ie());
    const M = this.attributes.position, D = this.morphAttributes.position;
    if (M && M.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new O(), 1 / 0);
      return;
    }
    if (M) {
      const t = this.boundingSphere.center;
      if (wD.setFromBufferAttribute(M), D)
        for (let N = 0, A = D.length; N < A; N++) {
          const z = D[N];
          ae.setFromBufferAttribute(z), this.morphTargetsRelative ? (zD.addVectors(wD.min, ae.min), wD.expandByPoint(zD), zD.addVectors(wD.max, ae.max), wD.expandByPoint(zD)) : (wD.expandByPoint(ae.min), wD.expandByPoint(ae.max));
        }
      wD.getCenter(t);
      let e = 0;
      for (let N = 0, A = M.count; N < A; N++)
        zD.fromBufferAttribute(M, N), e = Math.max(e, t.distanceToSquared(zD));
      if (D)
        for (let N = 0, A = D.length; N < A; N++) {
          const z = D[N], I = this.morphTargetsRelative;
          for (let i = 0, T = z.count; i < T; i++)
            zD.fromBufferAttribute(z, i), I && (Zt.fromBufferAttribute(M, i), zD.add(Zt)), e = Math.max(e, t.distanceToSquared(zD));
        }
      this.boundingSphere.radius = Math.sqrt(e), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const M = this.index, D = this.attributes;
    if (M === null || D.position === void 0 || D.normal === void 0 || D.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const t = M.array, e = D.position.array, N = D.normal.array, A = D.uv.array, z = e.length / 3;
    D.tangent === void 0 && this.setAttribute("tangent", new AD(new Float32Array(4 * z), 4));
    const I = D.tangent.array, i = [], T = [];
    for (let G = 0; G < z; G++)
      i[G] = new O(), T[G] = new O();
    const u = new O(), g = new O(), s = new O(), j = new q(), y = new q(), a = new q(), c = new O(), r = new O();
    function l(G, o, h) {
      u.fromArray(e, G * 3), g.fromArray(e, o * 3), s.fromArray(e, h * 3), j.fromArray(A, G * 2), y.fromArray(A, o * 2), a.fromArray(A, h * 2), g.sub(u), s.sub(u), y.sub(j), a.sub(j);
      const Y = 1 / (y.x * a.y - a.x * y.y);
      !isFinite(Y) || (c.copy(g).multiplyScalar(a.y).addScaledVector(s, -y.y).multiplyScalar(Y), r.copy(s).multiplyScalar(y.x).addScaledVector(g, -a.x).multiplyScalar(Y), i[G].add(c), i[o].add(c), i[h].add(c), T[G].add(r), T[o].add(r), T[h].add(r));
    }
    let C = this.groups;
    C.length === 0 && (C = [{
      start: 0,
      count: t.length
    }]);
    for (let G = 0, o = C.length; G < o; ++G) {
      const h = C[G], Y = h.start, k = h.count;
      for (let f = Y, Q = Y + k; f < Q; f += 3)
        l(t[f + 0], t[f + 1], t[f + 2]);
    }
    const E = new O(), d = new O(), p = new O(), H = new O();
    function DM(G) {
      p.fromArray(N, G * 3), H.copy(p);
      const o = i[G];
      E.copy(o), E.sub(p.multiplyScalar(p.dot(o))).normalize(), d.crossVectors(H, o);
      const Y = d.dot(T[G]) < 0 ? -1 : 1;
      I[G * 4] = E.x, I[G * 4 + 1] = E.y, I[G * 4 + 2] = E.z, I[G * 4 + 3] = Y;
    }
    for (let G = 0, o = C.length; G < o; ++G) {
      const h = C[G], Y = h.start, k = h.count;
      for (let f = Y, Q = Y + k; f < Q; f += 3)
        DM(t[f + 0]), DM(t[f + 1]), DM(t[f + 2]);
    }
  }
  computeVertexNormals() {
    const M = this.index, D = this.getAttribute("position");
    if (D !== void 0) {
      let t = this.getAttribute("normal");
      if (t === void 0)
        t = new AD(new Float32Array(D.count * 3), 3), this.setAttribute("normal", t);
      else
        for (let g = 0, s = t.count; g < s; g++)
          t.setXYZ(g, 0, 0, 0);
      const e = new O(), N = new O(), A = new O(), z = new O(), I = new O(), i = new O(), T = new O(), u = new O();
      if (M)
        for (let g = 0, s = M.count; g < s; g += 3) {
          const j = M.getX(g + 0), y = M.getX(g + 1), a = M.getX(g + 2);
          e.fromBufferAttribute(D, j), N.fromBufferAttribute(D, y), A.fromBufferAttribute(D, a), T.subVectors(A, N), u.subVectors(e, N), T.cross(u), z.fromBufferAttribute(t, j), I.fromBufferAttribute(t, y), i.fromBufferAttribute(t, a), z.add(T), I.add(T), i.add(T), t.setXYZ(j, z.x, z.y, z.z), t.setXYZ(y, I.x, I.y, I.z), t.setXYZ(a, i.x, i.y, i.z);
        }
      else
        for (let g = 0, s = D.count; g < s; g += 3)
          e.fromBufferAttribute(D, g + 0), N.fromBufferAttribute(D, g + 1), A.fromBufferAttribute(D, g + 2), T.subVectors(A, N), u.subVectors(e, N), T.cross(u), t.setXYZ(g + 0, T.x, T.y, T.z), t.setXYZ(g + 1, T.x, T.y, T.z), t.setXYZ(g + 2, T.x, T.y, T.z);
      this.normalizeNormals(), t.needsUpdate = !0;
    }
  }
  merge(M, D) {
    if (!(M && M.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", M);
      return;
    }
    D === void 0 && (D = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
    const t = this.attributes;
    for (const e in t) {
      if (M.attributes[e] === void 0)
        continue;
      const A = t[e].array, z = M.attributes[e], I = z.array, i = z.itemSize * D, T = Math.min(I.length, A.length - i);
      for (let u = 0, g = i; u < T; u++, g++)
        A[g] = I[u];
    }
    return this;
  }
  normalizeNormals() {
    const M = this.attributes.normal;
    for (let D = 0, t = M.count; D < t; D++)
      zD.fromBufferAttribute(M, D), zD.normalize(), M.setXYZ(D, zD.x, zD.y, zD.z);
  }
  toNonIndexed() {
    function M(z, I) {
      const i = z.array, T = z.itemSize, u = z.normalized, g = new i.constructor(I.length * T);
      let s = 0, j = 0;
      for (let y = 0, a = I.length; y < a; y++) {
        z.isInterleavedBufferAttribute ? s = I[y] * z.data.stride + z.offset : s = I[y] * T;
        for (let c = 0; c < T; c++)
          g[j++] = i[s++];
      }
      return new AD(g, T, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const D = new VM(), t = this.index.array, e = this.attributes;
    for (const z in e) {
      const I = e[z], i = M(I, t);
      D.setAttribute(z, i);
    }
    const N = this.morphAttributes;
    for (const z in N) {
      const I = [], i = N[z];
      for (let T = 0, u = i.length; T < u; T++) {
        const g = i[T], s = M(g, t);
        I.push(s);
      }
      D.morphAttributes[z] = I;
    }
    D.morphTargetsRelative = this.morphTargetsRelative;
    const A = this.groups;
    for (let z = 0, I = A.length; z < I; z++) {
      const i = A[z];
      D.addGroup(i.start, i.count, i.materialIndex);
    }
    return D;
  }
  toJSON() {
    const M = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (M.uuid = this.uuid, M.type = this.type, this.name !== "" && (M.name = this.name), Object.keys(this.userData).length > 0 && (M.userData = this.userData), this.parameters !== void 0) {
      const I = this.parameters;
      for (const i in I)
        I[i] !== void 0 && (M[i] = I[i]);
      return M;
    }
    M.data = { attributes: {} };
    const D = this.index;
    D !== null && (M.data.index = {
      type: D.array.constructor.name,
      array: Array.prototype.slice.call(D.array)
    });
    const t = this.attributes;
    for (const I in t) {
      const i = t[I];
      M.data.attributes[I] = i.toJSON(M.data);
    }
    const e = {};
    let N = !1;
    for (const I in this.morphAttributes) {
      const i = this.morphAttributes[I], T = [];
      for (let u = 0, g = i.length; u < g; u++) {
        const s = i[u];
        T.push(s.toJSON(M.data));
      }
      T.length > 0 && (e[I] = T, N = !0);
    }
    N && (M.data.morphAttributes = e, M.data.morphTargetsRelative = this.morphTargetsRelative);
    const A = this.groups;
    A.length > 0 && (M.data.groups = JSON.parse(JSON.stringify(A)));
    const z = this.boundingSphere;
    return z !== null && (M.data.boundingSphere = {
      center: z.center.toArray(),
      radius: z.radius
    }), M;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(M) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const D = {};
    this.name = M.name;
    const t = M.index;
    t !== null && this.setIndex(t.clone(D));
    const e = M.attributes;
    for (const i in e) {
      const T = e[i];
      this.setAttribute(i, T.clone(D));
    }
    const N = M.morphAttributes;
    for (const i in N) {
      const T = [], u = N[i];
      for (let g = 0, s = u.length; g < s; g++)
        T.push(u[g].clone(D));
      this.morphAttributes[i] = T;
    }
    this.morphTargetsRelative = M.morphTargetsRelative;
    const A = M.groups;
    for (let i = 0, T = A.length; i < T; i++) {
      const u = A[i];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const z = M.boundingBox;
    z !== null && (this.boundingBox = z.clone());
    const I = M.boundingSphere;
    return I !== null && (this.boundingSphere = I.clone()), this.drawRange.start = M.drawRange.start, this.drawRange.count = M.drawRange.count, this.userData = M.userData, M.parameters !== void 0 && (this.parameters = Object.assign({}, M.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
VM.prototype.isBufferGeometry = !0;
const Nz = /* @__PURE__ */ new aM(), _t = /* @__PURE__ */ new Te(), jn = /* @__PURE__ */ new Ie(), et = /* @__PURE__ */ new O(), Nt = /* @__PURE__ */ new O(), nt = /* @__PURE__ */ new O(), yn = /* @__PURE__ */ new O(), on = /* @__PURE__ */ new O(), an = /* @__PURE__ */ new O(), tN = /* @__PURE__ */ new O(), eN = /* @__PURE__ */ new O(), NN = /* @__PURE__ */ new O(), nN = /* @__PURE__ */ new q(), AN = /* @__PURE__ */ new q(), zN = /* @__PURE__ */ new q(), Cn = /* @__PURE__ */ new O(), iN = /* @__PURE__ */ new O();
class nD extends ZM {
  constructor(M = new VM(), D = new $n()) {
    super(), this.type = "Mesh", this.geometry = M, this.material = D, this.updateMorphTargets();
  }
  copy(M) {
    return super.copy(M), M.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = M.morphTargetInfluences.slice()), M.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, M.morphTargetDictionary)), this.material = M.material, this.geometry = M.geometry, this;
  }
  updateMorphTargets() {
    const M = this.geometry;
    if (M.isBufferGeometry) {
      const D = M.morphAttributes, t = Object.keys(D);
      if (t.length > 0) {
        const e = D[t[0]];
        if (e !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let N = 0, A = e.length; N < A; N++) {
            const z = e[N].name || String(N);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[z] = N;
          }
        }
      }
    } else {
      const D = M.morphTargets;
      D !== void 0 && D.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
  raycast(M, D) {
    const t = this.geometry, e = this.material, N = this.matrixWorld;
    if (e === void 0 || (t.boundingSphere === null && t.computeBoundingSphere(), jn.copy(t.boundingSphere), jn.applyMatrix4(N), M.ray.intersectsSphere(jn) === !1) || (Nz.copy(N).invert(), _t.copy(M.ray).applyMatrix4(Nz), t.boundingBox !== null && _t.intersectsBox(t.boundingBox) === !1))
      return;
    let A;
    if (t.isBufferGeometry) {
      const z = t.index, I = t.attributes.position, i = t.morphAttributes.position, T = t.morphTargetsRelative, u = t.attributes.uv, g = t.attributes.uv2, s = t.groups, j = t.drawRange;
      if (z !== null)
        if (Array.isArray(e))
          for (let y = 0, a = s.length; y < a; y++) {
            const c = s[y], r = e[c.materialIndex], l = Math.max(c.start, j.start), C = Math.min(z.count, Math.min(c.start + c.count, j.start + j.count));
            for (let E = l, d = C; E < d; E += 3) {
              const p = z.getX(E), H = z.getX(E + 1), DM = z.getX(E + 2);
              A = IN(this, r, M, _t, I, i, T, u, g, p, H, DM), A && (A.faceIndex = Math.floor(E / 3), A.face.materialIndex = c.materialIndex, D.push(A));
            }
          }
        else {
          const y = Math.max(0, j.start), a = Math.min(z.count, j.start + j.count);
          for (let c = y, r = a; c < r; c += 3) {
            const l = z.getX(c), C = z.getX(c + 1), E = z.getX(c + 2);
            A = IN(this, e, M, _t, I, i, T, u, g, l, C, E), A && (A.faceIndex = Math.floor(c / 3), D.push(A));
          }
        }
      else if (I !== void 0)
        if (Array.isArray(e))
          for (let y = 0, a = s.length; y < a; y++) {
            const c = s[y], r = e[c.materialIndex], l = Math.max(c.start, j.start), C = Math.min(I.count, Math.min(c.start + c.count, j.start + j.count));
            for (let E = l, d = C; E < d; E += 3) {
              const p = E, H = E + 1, DM = E + 2;
              A = IN(this, r, M, _t, I, i, T, u, g, p, H, DM), A && (A.faceIndex = Math.floor(E / 3), A.face.materialIndex = c.materialIndex, D.push(A));
            }
          }
        else {
          const y = Math.max(0, j.start), a = Math.min(I.count, j.start + j.count);
          for (let c = y, r = a; c < r; c += 3) {
            const l = c, C = c + 1, E = c + 2;
            A = IN(this, e, M, _t, I, i, T, u, g, l, C, E), A && (A.faceIndex = Math.floor(c / 3), D.push(A));
          }
        }
    } else
      t.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
}
nD.prototype.isMesh = !0;
function LT(n, M, D, t, e, N, A, z) {
  let I;
  if (M.side === eD ? I = t.intersectTriangle(A, N, e, !0, z) : I = t.intersectTriangle(e, N, A, M.side !== Ne, z), I === null)
    return null;
  iN.copy(z), iN.applyMatrix4(n.matrixWorld);
  const i = D.ray.origin.distanceTo(iN);
  return i < D.near || i > D.far ? null : {
    distance: i,
    point: iN.clone(),
    object: n
  };
}
function IN(n, M, D, t, e, N, A, z, I, i, T, u) {
  et.fromBufferAttribute(e, i), Nt.fromBufferAttribute(e, T), nt.fromBufferAttribute(e, u);
  const g = n.morphTargetInfluences;
  if (N && g) {
    tN.set(0, 0, 0), eN.set(0, 0, 0), NN.set(0, 0, 0);
    for (let j = 0, y = N.length; j < y; j++) {
      const a = g[j], c = N[j];
      a !== 0 && (yn.fromBufferAttribute(c, i), on.fromBufferAttribute(c, T), an.fromBufferAttribute(c, u), A ? (tN.addScaledVector(yn, a), eN.addScaledVector(on, a), NN.addScaledVector(an, a)) : (tN.addScaledVector(yn.sub(et), a), eN.addScaledVector(on.sub(Nt), a), NN.addScaledVector(an.sub(nt), a)));
    }
    et.add(tN), Nt.add(eN), nt.add(NN);
  }
  n.isSkinnedMesh && (n.boneTransform(i, et), n.boneTransform(T, Nt), n.boneTransform(u, nt));
  const s = LT(n, M, D, t, et, Nt, nt, Cn);
  if (s) {
    z && (nN.fromBufferAttribute(z, i), AN.fromBufferAttribute(z, T), zN.fromBufferAttribute(z, u), s.uv = DD.getUV(Cn, et, Nt, nt, nN, AN, zN, new q())), I && (nN.fromBufferAttribute(I, i), AN.fromBufferAttribute(I, T), zN.fromBufferAttribute(I, u), s.uv2 = DD.getUV(Cn, et, Nt, nt, nN, AN, zN, new q()));
    const j = {
      a: i,
      b: T,
      c: u,
      normal: new O(),
      materialIndex: 0
    };
    DD.getNormal(et, Nt, nt, j.normal), s.face = j;
  }
  return s;
}
class Re extends VM {
  constructor(M = 1, D = 1, t = 1, e = 1, N = 1, A = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: M,
      height: D,
      depth: t,
      widthSegments: e,
      heightSegments: N,
      depthSegments: A
    };
    const z = this;
    e = Math.floor(e), N = Math.floor(N), A = Math.floor(A);
    const I = [], i = [], T = [], u = [];
    let g = 0, s = 0;
    j("z", "y", "x", -1, -1, t, D, M, A, N, 0), j("z", "y", "x", 1, -1, t, D, -M, A, N, 1), j("x", "z", "y", 1, 1, M, t, D, e, A, 2), j("x", "z", "y", 1, -1, M, t, -D, e, A, 3), j("x", "y", "z", 1, -1, M, D, t, e, N, 4), j("x", "y", "z", -1, -1, M, D, -t, e, N, 5), this.setIndex(I), this.setAttribute("position", new WM(i, 3)), this.setAttribute("normal", new WM(T, 3)), this.setAttribute("uv", new WM(u, 2));
    function j(y, a, c, r, l, C, E, d, p, H, DM) {
      const G = C / p, o = E / H, h = C / 2, Y = E / 2, k = d / 2, f = p + 1, Q = H + 1;
      let b = 0, W = 0;
      const IM = new O();
      for (let Z = 0; Z < Q; Z++) {
        const V = Z * o - Y;
        for (let eM = 0; eM < f; eM++) {
          const uM = eM * G - h;
          IM[y] = uM * r, IM[a] = V * l, IM[c] = k, i.push(IM.x, IM.y, IM.z), IM[y] = 0, IM[a] = 0, IM[c] = d > 0 ? 1 : -1, T.push(IM.x, IM.y, IM.z), u.push(eM / p), u.push(1 - Z / H), b += 1;
        }
      }
      for (let Z = 0; Z < H; Z++)
        for (let V = 0; V < p; V++) {
          const eM = g + V + f * Z, uM = g + V + f * (Z + 1), jM = g + (V + 1) + f * (Z + 1), _ = g + (V + 1) + f * Z;
          I.push(eM, uM, _), I.push(uM, jM, _), W += 6;
        }
      z.addGroup(s, W, DM), s += W, g += b;
    }
  }
  static fromJSON(M) {
    return new Re(M.width, M.height, M.depth, M.widthSegments, M.heightSegments, M.depthSegments);
  }
}
function Ae(n) {
  const M = {};
  for (const D in n) {
    M[D] = {};
    for (const t in n[D]) {
      const e = n[D][t];
      e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion) ? M[D][t] = e.clone() : Array.isArray(e) ? M[D][t] = e.slice() : M[D][t] = e;
    }
  }
  return M;
}
function sD(n) {
  const M = {};
  for (let D = 0; D < n.length; D++) {
    const t = Ae(n[D]);
    for (const e in t)
      M[e] = t[e];
  }
  return M;
}
const wT = { clone: Ae, merge: sD };
var OT = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, xT = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class lt extends ID {
  constructor(M) {
    super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = OT, this.fragmentShader = xT, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, M !== void 0 && (M.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(M));
  }
  copy(M) {
    return super.copy(M), this.fragmentShader = M.fragmentShader, this.vertexShader = M.vertexShader, this.uniforms = Ae(M.uniforms), this.defines = Object.assign({}, M.defines), this.wireframe = M.wireframe, this.wireframeLinewidth = M.wireframeLinewidth, this.lights = M.lights, this.clipping = M.clipping, this.extensions = Object.assign({}, M.extensions), this.glslVersion = M.glslVersion, this;
  }
  toJSON(M) {
    const D = super.toJSON(M);
    D.glslVersion = this.glslVersion, D.uniforms = {};
    for (const e in this.uniforms) {
      const A = this.uniforms[e].value;
      A && A.isTexture ? D.uniforms[e] = {
        type: "t",
        value: A.toJSON(M).uuid
      } : A && A.isColor ? D.uniforms[e] = {
        type: "c",
        value: A.getHex()
      } : A && A.isVector2 ? D.uniforms[e] = {
        type: "v2",
        value: A.toArray()
      } : A && A.isVector3 ? D.uniforms[e] = {
        type: "v3",
        value: A.toArray()
      } : A && A.isVector4 ? D.uniforms[e] = {
        type: "v4",
        value: A.toArray()
      } : A && A.isMatrix3 ? D.uniforms[e] = {
        type: "m3",
        value: A.toArray()
      } : A && A.isMatrix4 ? D.uniforms[e] = {
        type: "m4",
        value: A.toArray()
      } : D.uniforms[e] = {
        value: A
      };
    }
    Object.keys(this.defines).length > 0 && (D.defines = this.defines), D.vertexShader = this.vertexShader, D.fragmentShader = this.fragmentShader;
    const t = {};
    for (const e in this.extensions)
      this.extensions[e] === !0 && (t[e] = !0);
    return Object.keys(t).length > 0 && (D.extensions = t), D;
  }
}
lt.prototype.isShaderMaterial = !0;
class MA extends ZM {
  constructor() {
    super(), this.type = "Camera", this.matrixWorldInverse = new aM(), this.projectionMatrix = new aM(), this.projectionMatrixInverse = new aM();
  }
  copy(M, D) {
    return super.copy(M, D), this.matrixWorldInverse.copy(M.matrixWorldInverse), this.projectionMatrix.copy(M.projectionMatrix), this.projectionMatrixInverse.copy(M.projectionMatrixInverse), this;
  }
  getWorldDirection(M) {
    this.updateWorldMatrix(!0, !1);
    const D = this.matrixWorld.elements;
    return M.set(-D[8], -D[9], -D[10]).normalize();
  }
  updateMatrixWorld(M) {
    super.updateMatrixWorld(M), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(M, D) {
    super.updateWorldMatrix(M, D), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
MA.prototype.isCamera = !0;
class jD extends MA {
  constructor(M = 50, D = 1, t = 0.1, e = 2e3) {
    super(), this.type = "PerspectiveCamera", this.fov = M, this.zoom = 1, this.near = t, this.far = e, this.focus = 10, this.aspect = D, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(M, D) {
    return super.copy(M, D), this.fov = M.fov, this.zoom = M.zoom, this.near = M.near, this.far = M.far, this.focus = M.focus, this.aspect = M.aspect, this.view = M.view === null ? null : Object.assign({}, M.view), this.filmGauge = M.filmGauge, this.filmOffset = M.filmOffset, this;
  }
  setFocalLength(M) {
    const D = 0.5 * this.getFilmHeight() / M;
    this.fov = bn * 2 * Math.atan(D), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const M = Math.tan(JN * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / M;
  }
  getEffectiveFOV() {
    return bn * 2 * Math.atan(Math.tan(JN * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(M, D, t, e, N, A) {
    this.aspect = M / D, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = M, this.view.fullHeight = D, this.view.offsetX = t, this.view.offsetY = e, this.view.width = N, this.view.height = A, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const M = this.near;
    let D = M * Math.tan(JN * 0.5 * this.fov) / this.zoom, t = 2 * D, e = this.aspect * t, N = -0.5 * e;
    const A = this.view;
    if (this.view !== null && this.view.enabled) {
      const I = A.fullWidth, i = A.fullHeight;
      N += A.offsetX * e / I, D -= A.offsetY * t / i, e *= A.width / I, t *= A.height / i;
    }
    const z = this.filmOffset;
    z !== 0 && (N += M * z / this.getFilmWidth()), this.projectionMatrix.makePerspective(N, N + e, D, D - t, M, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(M) {
    const D = super.toJSON(M);
    return D.object.fov = this.fov, D.object.zoom = this.zoom, D.object.near = this.near, D.object.far = this.far, D.object.focus = this.focus, D.object.aspect = this.aspect, this.view !== null && (D.object.view = Object.assign({}, this.view)), D.object.filmGauge = this.filmGauge, D.object.filmOffset = this.filmOffset, D;
  }
}
jD.prototype.isPerspectiveCamera = !0;
const bt = 90, Kt = 1;
class DA extends ZM {
  constructor(M, D, t) {
    if (super(), this.type = "CubeCamera", t.isWebGLCubeRenderTarget !== !0) {
      console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      return;
    }
    this.renderTarget = t;
    const e = new jD(bt, Kt, M, D);
    e.layers = this.layers, e.up.set(0, -1, 0), e.lookAt(new O(1, 0, 0)), this.add(e);
    const N = new jD(bt, Kt, M, D);
    N.layers = this.layers, N.up.set(0, -1, 0), N.lookAt(new O(-1, 0, 0)), this.add(N);
    const A = new jD(bt, Kt, M, D);
    A.layers = this.layers, A.up.set(0, 0, 1), A.lookAt(new O(0, 1, 0)), this.add(A);
    const z = new jD(bt, Kt, M, D);
    z.layers = this.layers, z.up.set(0, 0, -1), z.lookAt(new O(0, -1, 0)), this.add(z);
    const I = new jD(bt, Kt, M, D);
    I.layers = this.layers, I.up.set(0, -1, 0), I.lookAt(new O(0, 0, 1)), this.add(I);
    const i = new jD(bt, Kt, M, D);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new O(0, 0, -1)), this.add(i);
  }
  update(M, D) {
    this.parent === null && this.updateMatrixWorld();
    const t = this.renderTarget, [e, N, A, z, I, i] = this.children, T = M.xr.enabled, u = M.getRenderTarget();
    M.xr.enabled = !1;
    const g = t.texture.generateMipmaps;
    t.texture.generateMipmaps = !1, M.setRenderTarget(t, 0), M.render(D, e), M.setRenderTarget(t, 1), M.render(D, N), M.setRenderTarget(t, 2), M.render(D, A), M.setRenderTarget(t, 3), M.render(D, z), M.setRenderTarget(t, 4), M.render(D, I), t.texture.generateMipmaps = g, M.setRenderTarget(t, 5), M.render(D, i), M.setRenderTarget(u), M.xr.enabled = T, t.texture.needsPMREMUpdate = !0;
  }
}
class SN extends iD {
  constructor(M, D, t, e, N, A, z, I, i, T) {
    M = M !== void 0 ? M : [], D = D !== void 0 ? D : be, super(M, D, t, e, N, A, z, I, i, T), this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(M) {
    this.image = M;
  }
}
SN.prototype.isCubeTexture = !0;
class ri extends dD {
  constructor(M, D, t) {
    Number.isInteger(D) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), D = t), super(M, M, D), D = D || {}, this.texture = new SN(void 0, D.mapping, D.wrapS, D.wrapT, D.magFilter, D.minFilter, D.format, D.type, D.anisotropy, D.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = D.generateMipmaps !== void 0 ? D.generateMipmaps : !1, this.texture.minFilter = D.minFilter !== void 0 ? D.minFilter : uD;
  }
  fromEquirectangularTexture(M, D) {
    this.texture.type = D.type, this.texture.format = yD, this.texture.encoding = D.encoding, this.texture.generateMipmaps = D.generateMipmaps, this.texture.minFilter = D.minFilter, this.texture.magFilter = D.magFilter;
    const t = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, e = new Re(5, 5, 5), N = new lt({
      name: "CubemapFromEquirect",
      uniforms: Ae(t.uniforms),
      vertexShader: t.vertexShader,
      fragmentShader: t.fragmentShader,
      side: eD,
      blending: zt
    });
    N.uniforms.tEquirect.value = D;
    const A = new nD(e, N), z = D.minFilter;
    return D.minFilter === kN && (D.minFilter = uD), new DA(1, 10, this).update(M, A), D.minFilter = z, A.geometry.dispose(), A.material.dispose(), this;
  }
  clear(M, D, t, e) {
    const N = M.getRenderTarget();
    for (let A = 0; A < 6; A++)
      M.setRenderTarget(this, A), M.clear(D, t, e);
    M.setRenderTarget(N);
  }
}
ri.prototype.isWebGLCubeRenderTarget = !0;
const Ln = /* @__PURE__ */ new O(), ET = /* @__PURE__ */ new O(), lT = /* @__PURE__ */ new gD();
class XD {
  constructor(M = new O(1, 0, 0), D = 0) {
    this.normal = M, this.constant = D;
  }
  set(M, D) {
    return this.normal.copy(M), this.constant = D, this;
  }
  setComponents(M, D, t, e) {
    return this.normal.set(M, D, t), this.constant = e, this;
  }
  setFromNormalAndCoplanarPoint(M, D) {
    return this.normal.copy(M), this.constant = -D.dot(this.normal), this;
  }
  setFromCoplanarPoints(M, D, t) {
    const e = Ln.subVectors(t, D).cross(ET.subVectors(M, D)).normalize();
    return this.setFromNormalAndCoplanarPoint(e, M), this;
  }
  copy(M) {
    return this.normal.copy(M.normal), this.constant = M.constant, this;
  }
  normalize() {
    const M = 1 / this.normal.length();
    return this.normal.multiplyScalar(M), this.constant *= M, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(M) {
    return this.normal.dot(M) + this.constant;
  }
  distanceToSphere(M) {
    return this.distanceToPoint(M.center) - M.radius;
  }
  projectPoint(M, D) {
    return D.copy(this.normal).multiplyScalar(-this.distanceToPoint(M)).add(M);
  }
  intersectLine(M, D) {
    const t = M.delta(Ln), e = this.normal.dot(t);
    if (e === 0)
      return this.distanceToPoint(M.start) === 0 ? D.copy(M.start) : null;
    const N = -(M.start.dot(this.normal) + this.constant) / e;
    return N < 0 || N > 1 ? null : D.copy(t).multiplyScalar(N).add(M.start);
  }
  intersectsLine(M) {
    const D = this.distanceToPoint(M.start), t = this.distanceToPoint(M.end);
    return D < 0 && t > 0 || t < 0 && D > 0;
  }
  intersectsBox(M) {
    return M.intersectsPlane(this);
  }
  intersectsSphere(M) {
    return M.intersectsPlane(this);
  }
  coplanarPoint(M) {
    return M.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(M, D) {
    const t = D || lT.getNormalMatrix(M), e = this.coplanarPoint(Ln).applyMatrix4(M), N = this.normal.applyMatrix3(t).normalize();
    return this.constant = -e.dot(N), this;
  }
  translate(M) {
    return this.constant -= M.dot(this.normal), this;
  }
  equals(M) {
    return M.normal.equals(this.normal) && M.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
XD.prototype.isPlane = !0;
const Rt = /* @__PURE__ */ new Ie(), TN = /* @__PURE__ */ new O();
class ZN {
  constructor(M = new XD(), D = new XD(), t = new XD(), e = new XD(), N = new XD(), A = new XD()) {
    this.planes = [M, D, t, e, N, A];
  }
  set(M, D, t, e, N, A) {
    const z = this.planes;
    return z[0].copy(M), z[1].copy(D), z[2].copy(t), z[3].copy(e), z[4].copy(N), z[5].copy(A), this;
  }
  copy(M) {
    const D = this.planes;
    for (let t = 0; t < 6; t++)
      D[t].copy(M.planes[t]);
    return this;
  }
  setFromProjectionMatrix(M) {
    const D = this.planes, t = M.elements, e = t[0], N = t[1], A = t[2], z = t[3], I = t[4], i = t[5], T = t[6], u = t[7], g = t[8], s = t[9], j = t[10], y = t[11], a = t[12], c = t[13], r = t[14], l = t[15];
    return D[0].setComponents(z - e, u - I, y - g, l - a).normalize(), D[1].setComponents(z + e, u + I, y + g, l + a).normalize(), D[2].setComponents(z + N, u + i, y + s, l + c).normalize(), D[3].setComponents(z - N, u - i, y - s, l - c).normalize(), D[4].setComponents(z - A, u - T, y - j, l - r).normalize(), D[5].setComponents(z + A, u + T, y + j, l + r).normalize(), this;
  }
  intersectsObject(M) {
    const D = M.geometry;
    return D.boundingSphere === null && D.computeBoundingSphere(), Rt.copy(D.boundingSphere).applyMatrix4(M.matrixWorld), this.intersectsSphere(Rt);
  }
  intersectsSprite(M) {
    return Rt.center.set(0, 0, 0), Rt.radius = 0.7071067811865476, Rt.applyMatrix4(M.matrixWorld), this.intersectsSphere(Rt);
  }
  intersectsSphere(M) {
    const D = this.planes, t = M.center, e = -M.radius;
    for (let N = 0; N < 6; N++)
      if (D[N].distanceToPoint(t) < e)
        return !1;
    return !0;
  }
  intersectsBox(M) {
    const D = this.planes;
    for (let t = 0; t < 6; t++) {
      const e = D[t];
      if (TN.x = e.normal.x > 0 ? M.max.x : M.min.x, TN.y = e.normal.y > 0 ? M.max.y : M.min.y, TN.z = e.normal.z > 0 ? M.max.z : M.min.z, e.distanceToPoint(TN) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(M) {
    const D = this.planes;
    for (let t = 0; t < 6; t++)
      if (D[t].distanceToPoint(M) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function si() {
  let n = null, M = !1, D = null, t = null;
  function e(N, A) {
    D(N, A), t = n.requestAnimationFrame(e);
  }
  return {
    start: function() {
      M !== !0 && D !== null && (t = n.requestAnimationFrame(e), M = !0);
    },
    stop: function() {
      n.cancelAnimationFrame(t), M = !1;
    },
    setAnimationLoop: function(N) {
      D = N;
    },
    setContext: function(N) {
      n = N;
    }
  };
}
function dT(n, M) {
  const D = M.isWebGL2, t = /* @__PURE__ */ new WeakMap();
  function e(i, T) {
    const u = i.array, g = i.usage, s = n.createBuffer();
    n.bindBuffer(T, s), n.bufferData(T, u, g), i.onUploadCallback();
    let j = 5126;
    return u instanceof Float32Array ? j = 5126 : u instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : u instanceof Uint16Array ? i.isFloat16BufferAttribute ? D ? j = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : j = 5123 : u instanceof Int16Array ? j = 5122 : u instanceof Uint32Array ? j = 5125 : u instanceof Int32Array ? j = 5124 : u instanceof Int8Array ? j = 5120 : (u instanceof Uint8Array || u instanceof Uint8ClampedArray) && (j = 5121), {
      buffer: s,
      type: j,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: i.version
    };
  }
  function N(i, T, u) {
    const g = T.array, s = T.updateRange;
    n.bindBuffer(u, i), s.count === -1 ? n.bufferSubData(u, 0, g) : (D ? n.bufferSubData(u, s.offset * g.BYTES_PER_ELEMENT, g, s.offset, s.count) : n.bufferSubData(u, s.offset * g.BYTES_PER_ELEMENT, g.subarray(s.offset, s.offset + s.count)), s.count = -1);
  }
  function A(i) {
    return i.isInterleavedBufferAttribute && (i = i.data), t.get(i);
  }
  function z(i) {
    i.isInterleavedBufferAttribute && (i = i.data);
    const T = t.get(i);
    T && (n.deleteBuffer(T.buffer), t.delete(i));
  }
  function I(i, T) {
    if (i.isGLBufferAttribute) {
      const g = t.get(i);
      (!g || g.version < i.version) && t.set(i, {
        buffer: i.buffer,
        type: i.type,
        bytesPerElement: i.elementSize,
        version: i.version
      });
      return;
    }
    i.isInterleavedBufferAttribute && (i = i.data);
    const u = t.get(i);
    u === void 0 ? t.set(i, e(i, T)) : u.version < i.version && (N(u.buffer, i, T), u.version = i.version);
  }
  return {
    get: A,
    remove: z,
    update: I
  };
}
class tA extends VM {
  constructor(M = 1, D = 1, t = 1, e = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: M,
      height: D,
      widthSegments: t,
      heightSegments: e
    };
    const N = M / 2, A = D / 2, z = Math.floor(t), I = Math.floor(e), i = z + 1, T = I + 1, u = M / z, g = D / I, s = [], j = [], y = [], a = [];
    for (let c = 0; c < T; c++) {
      const r = c * g - A;
      for (let l = 0; l < i; l++) {
        const C = l * u - N;
        j.push(C, -r, 0), y.push(0, 0, 1), a.push(l / z), a.push(1 - c / I);
      }
    }
    for (let c = 0; c < I; c++)
      for (let r = 0; r < z; r++) {
        const l = r + i * c, C = r + i * (c + 1), E = r + 1 + i * (c + 1), d = r + 1 + i * c;
        s.push(l, C, d), s.push(C, E, d);
      }
    this.setIndex(s), this.setAttribute("position", new WM(j, 3)), this.setAttribute("normal", new WM(y, 3)), this.setAttribute("uv", new WM(a, 2));
  }
  static fromJSON(M) {
    return new tA(M.width, M.height, M.widthSegments, M.heightSegments);
  }
}
var vT = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, pT = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, hT = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, YT = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, UT = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, QT = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, fT = "vec3 transformed = vec3( position );", mT = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, kT = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, ST = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, ZT = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, _T = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, bT = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, KT = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, RT = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, PT = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, FT = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, BT = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, VT = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, HT = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, GT = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, WT = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, qT = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, XT = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, JT = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, $T = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Mu = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Du = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, tu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, eu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Nu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, nu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Au = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, zu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, iu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Iu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Tu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`, uu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, gu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ru = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`, su = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, cu = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, ju = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, yu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, ou = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, au = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, Cu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, Lu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, wu = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Ou = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, xu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Eu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, lu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, du = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, vu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, pu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, hu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Yu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Uu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Qu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, fu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, mu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, ku = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Su = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Zu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, _u = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, bu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ku = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ru = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Pu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Fu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Bu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Vu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Hu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Gu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Wu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, qu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Xu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Ju = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, $u = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Mg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Dg = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, tg = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, eg = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, Ng = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, ng = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ag = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`, zg = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ig = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Ig = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Tg = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ug = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, gg = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, rg = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`, sg = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, cg = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, jg = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, yg = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, og = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, ag = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Cg = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Lg = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const wg = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Og = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, xg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Eg = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, lg = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, dg = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, vg = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, pg = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, hg = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Yg = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Ug = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Qg = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, fg = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, mg = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, kg = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Sg = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Zg = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, _g = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bg = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Kg = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Rg = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pg = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Fg = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Bg = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vg = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Hg = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gg = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Wg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, qg = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xg = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Jg = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, $g = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, YM = {
  alphamap_fragment: vT,
  alphamap_pars_fragment: pT,
  alphatest_fragment: hT,
  alphatest_pars_fragment: YT,
  aomap_fragment: UT,
  aomap_pars_fragment: QT,
  begin_vertex: fT,
  beginnormal_vertex: mT,
  bsdfs: kT,
  bumpmap_pars_fragment: ST,
  clipping_planes_fragment: ZT,
  clipping_planes_pars_fragment: _T,
  clipping_planes_pars_vertex: bT,
  clipping_planes_vertex: KT,
  color_fragment: RT,
  color_pars_fragment: PT,
  color_pars_vertex: FT,
  color_vertex: BT,
  common: VT,
  cube_uv_reflection_fragment: HT,
  defaultnormal_vertex: GT,
  displacementmap_pars_vertex: WT,
  displacementmap_vertex: qT,
  emissivemap_fragment: XT,
  emissivemap_pars_fragment: JT,
  encodings_fragment: $T,
  encodings_pars_fragment: Mu,
  envmap_fragment: Du,
  envmap_common_pars_fragment: tu,
  envmap_pars_fragment: eu,
  envmap_pars_vertex: Nu,
  envmap_physical_pars_fragment: cu,
  envmap_vertex: nu,
  fog_vertex: Au,
  fog_pars_vertex: zu,
  fog_fragment: iu,
  fog_pars_fragment: Iu,
  gradientmap_pars_fragment: Tu,
  lightmap_fragment: uu,
  lightmap_pars_fragment: gu,
  lights_lambert_vertex: ru,
  lights_pars_begin: su,
  lights_toon_fragment: ju,
  lights_toon_pars_fragment: yu,
  lights_phong_fragment: ou,
  lights_phong_pars_fragment: au,
  lights_physical_fragment: Cu,
  lights_physical_pars_fragment: Lu,
  lights_fragment_begin: wu,
  lights_fragment_maps: Ou,
  lights_fragment_end: xu,
  logdepthbuf_fragment: Eu,
  logdepthbuf_pars_fragment: lu,
  logdepthbuf_pars_vertex: du,
  logdepthbuf_vertex: vu,
  map_fragment: pu,
  map_pars_fragment: hu,
  map_particle_fragment: Yu,
  map_particle_pars_fragment: Uu,
  metalnessmap_fragment: Qu,
  metalnessmap_pars_fragment: fu,
  morphnormal_vertex: mu,
  morphtarget_pars_vertex: ku,
  morphtarget_vertex: Su,
  normal_fragment_begin: Zu,
  normal_fragment_maps: _u,
  normal_pars_fragment: bu,
  normal_pars_vertex: Ku,
  normal_vertex: Ru,
  normalmap_pars_fragment: Pu,
  clearcoat_normal_fragment_begin: Fu,
  clearcoat_normal_fragment_maps: Bu,
  clearcoat_pars_fragment: Vu,
  output_fragment: Hu,
  packing: Gu,
  premultiplied_alpha_fragment: Wu,
  project_vertex: qu,
  dithering_fragment: Xu,
  dithering_pars_fragment: Ju,
  roughnessmap_fragment: $u,
  roughnessmap_pars_fragment: Mg,
  shadowmap_pars_fragment: Dg,
  shadowmap_pars_vertex: tg,
  shadowmap_vertex: eg,
  shadowmask_pars_fragment: Ng,
  skinbase_vertex: ng,
  skinning_pars_vertex: Ag,
  skinning_vertex: zg,
  skinnormal_vertex: ig,
  specularmap_fragment: Ig,
  specularmap_pars_fragment: Tg,
  tonemapping_fragment: ug,
  tonemapping_pars_fragment: gg,
  transmission_fragment: rg,
  transmission_pars_fragment: sg,
  uv_pars_fragment: cg,
  uv_pars_vertex: jg,
  uv_vertex: yg,
  uv2_pars_fragment: og,
  uv2_pars_vertex: ag,
  uv2_vertex: Cg,
  worldpos_vertex: Lg,
  background_vert: wg,
  background_frag: Og,
  cube_vert: xg,
  cube_frag: Eg,
  depth_vert: lg,
  depth_frag: dg,
  distanceRGBA_vert: vg,
  distanceRGBA_frag: pg,
  equirect_vert: hg,
  equirect_frag: Yg,
  linedashed_vert: Ug,
  linedashed_frag: Qg,
  meshbasic_vert: fg,
  meshbasic_frag: mg,
  meshlambert_vert: kg,
  meshlambert_frag: Sg,
  meshmatcap_vert: Zg,
  meshmatcap_frag: _g,
  meshnormal_vert: bg,
  meshnormal_frag: Kg,
  meshphong_vert: Rg,
  meshphong_frag: Pg,
  meshphysical_vert: Fg,
  meshphysical_frag: Bg,
  meshtoon_vert: Vg,
  meshtoon_frag: Hg,
  points_vert: Gg,
  points_frag: Wg,
  shadow_vert: qg,
  shadow_frag: Xg,
  sprite_vert: Jg,
  sprite_frag: $g
}, MM = {
  common: {
    diffuse: { value: new cM(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: new gD() },
    uv2Transform: { value: new gD() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: new q(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: new cM(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotShadowMap: { value: [] },
    spotShadowMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: new cM(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: new gD() }
  },
  sprite: {
    diffuse: { value: new cM(16777215) },
    opacity: { value: 1 },
    center: { value: new q(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: new gD() }
  }
}, _D = {
  basic: {
    uniforms: sD([
      MM.common,
      MM.specularmap,
      MM.envmap,
      MM.aomap,
      MM.lightmap,
      MM.fog
    ]),
    vertexShader: YM.meshbasic_vert,
    fragmentShader: YM.meshbasic_frag
  },
  lambert: {
    uniforms: sD([
      MM.common,
      MM.specularmap,
      MM.envmap,
      MM.aomap,
      MM.lightmap,
      MM.emissivemap,
      MM.fog,
      MM.lights,
      {
        emissive: { value: new cM(0) }
      }
    ]),
    vertexShader: YM.meshlambert_vert,
    fragmentShader: YM.meshlambert_frag
  },
  phong: {
    uniforms: sD([
      MM.common,
      MM.specularmap,
      MM.envmap,
      MM.aomap,
      MM.lightmap,
      MM.emissivemap,
      MM.bumpmap,
      MM.normalmap,
      MM.displacementmap,
      MM.fog,
      MM.lights,
      {
        emissive: { value: new cM(0) },
        specular: { value: new cM(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: YM.meshphong_vert,
    fragmentShader: YM.meshphong_frag
  },
  standard: {
    uniforms: sD([
      MM.common,
      MM.envmap,
      MM.aomap,
      MM.lightmap,
      MM.emissivemap,
      MM.bumpmap,
      MM.normalmap,
      MM.displacementmap,
      MM.roughnessmap,
      MM.metalnessmap,
      MM.fog,
      MM.lights,
      {
        emissive: { value: new cM(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: YM.meshphysical_vert,
    fragmentShader: YM.meshphysical_frag
  },
  toon: {
    uniforms: sD([
      MM.common,
      MM.aomap,
      MM.lightmap,
      MM.emissivemap,
      MM.bumpmap,
      MM.normalmap,
      MM.displacementmap,
      MM.gradientmap,
      MM.fog,
      MM.lights,
      {
        emissive: { value: new cM(0) }
      }
    ]),
    vertexShader: YM.meshtoon_vert,
    fragmentShader: YM.meshtoon_frag
  },
  matcap: {
    uniforms: sD([
      MM.common,
      MM.bumpmap,
      MM.normalmap,
      MM.displacementmap,
      MM.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: YM.meshmatcap_vert,
    fragmentShader: YM.meshmatcap_frag
  },
  points: {
    uniforms: sD([
      MM.points,
      MM.fog
    ]),
    vertexShader: YM.points_vert,
    fragmentShader: YM.points_frag
  },
  dashed: {
    uniforms: sD([
      MM.common,
      MM.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: YM.linedashed_vert,
    fragmentShader: YM.linedashed_frag
  },
  depth: {
    uniforms: sD([
      MM.common,
      MM.displacementmap
    ]),
    vertexShader: YM.depth_vert,
    fragmentShader: YM.depth_frag
  },
  normal: {
    uniforms: sD([
      MM.common,
      MM.bumpmap,
      MM.normalmap,
      MM.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: YM.meshnormal_vert,
    fragmentShader: YM.meshnormal_frag
  },
  sprite: {
    uniforms: sD([
      MM.sprite,
      MM.fog
    ]),
    vertexShader: YM.sprite_vert,
    fragmentShader: YM.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: new gD() },
      t2D: { value: null }
    },
    vertexShader: YM.background_vert,
    fragmentShader: YM.background_frag
  },
  cube: {
    uniforms: sD([
      MM.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: YM.cube_vert,
    fragmentShader: YM.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: YM.equirect_vert,
    fragmentShader: YM.equirect_frag
  },
  distanceRGBA: {
    uniforms: sD([
      MM.common,
      MM.displacementmap,
      {
        referencePosition: { value: new O() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: YM.distanceRGBA_vert,
    fragmentShader: YM.distanceRGBA_frag
  },
  shadow: {
    uniforms: sD([
      MM.lights,
      MM.fog,
      {
        color: { value: new cM(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: YM.shadow_vert,
    fragmentShader: YM.shadow_frag
  }
};
_D.physical = {
  uniforms: sD([
    _D.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new q(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new cM(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new q() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new cM(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new cM(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: YM.meshphysical_vert,
  fragmentShader: YM.meshphysical_frag
};
function Mr(n, M, D, t, e, N) {
  const A = new cM(0);
  let z = e === !0 ? 0 : 1, I, i, T = null, u = 0, g = null;
  function s(y, a) {
    let c = !1, r = a.isScene === !0 ? a.background : null;
    r && r.isTexture && (r = M.get(r));
    const l = n.xr, C = l.getSession && l.getSession();
    C && C.environmentBlendMode === "additive" && (r = null), r === null ? j(A, z) : r && r.isColor && (j(r, 1), c = !0), (n.autoClear || c) && n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil), r && (r.isCubeTexture || r.mapping === mN) ? (i === void 0 && (i = new nD(new Re(1, 1, 1), new lt({
      name: "BackgroundCubeMaterial",
      uniforms: Ae(_D.cube.uniforms),
      vertexShader: _D.cube.vertexShader,
      fragmentShader: _D.cube.fragmentShader,
      side: eD,
      depthTest: !1,
      depthWrite: !1,
      fog: !1
    })), i.geometry.deleteAttribute("normal"), i.geometry.deleteAttribute("uv"), i.onBeforeRender = function(E, d, p) {
      this.matrixWorld.copyPosition(p.matrixWorld);
    }, Object.defineProperty(i.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), t.update(i)), i.material.uniforms.envMap.value = r, i.material.uniforms.flipEnvMap.value = r.isCubeTexture && r.isRenderTargetTexture === !1 ? -1 : 1, (T !== r || u !== r.version || g !== n.toneMapping) && (i.material.needsUpdate = !0, T = r, u = r.version, g = n.toneMapping), y.unshift(i, i.geometry, i.material, 0, 0, null)) : r && r.isTexture && (I === void 0 && (I = new nD(new tA(2, 2), new lt({
      name: "BackgroundMaterial",
      uniforms: Ae(_D.background.uniforms),
      vertexShader: _D.background.vertexShader,
      fragmentShader: _D.background.fragmentShader,
      side: Ye,
      depthTest: !1,
      depthWrite: !1,
      fog: !1
    })), I.geometry.deleteAttribute("normal"), Object.defineProperty(I.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), t.update(I)), I.material.uniforms.t2D.value = r, r.matrixAutoUpdate === !0 && r.updateMatrix(), I.material.uniforms.uvTransform.value.copy(r.matrix), (T !== r || u !== r.version || g !== n.toneMapping) && (I.material.needsUpdate = !0, T = r, u = r.version, g = n.toneMapping), y.unshift(I, I.geometry, I.material, 0, 0, null));
  }
  function j(y, a) {
    D.buffers.color.setClear(y.r, y.g, y.b, a, N);
  }
  return {
    getClearColor: function() {
      return A;
    },
    setClearColor: function(y, a = 1) {
      A.set(y), z = a, j(A, z);
    },
    getClearAlpha: function() {
      return z;
    },
    setClearAlpha: function(y) {
      z = y, j(A, z);
    },
    render: s
  };
}
function Dr(n, M, D, t) {
  const e = n.getParameter(34921), N = t.isWebGL2 ? null : M.get("OES_vertex_array_object"), A = t.isWebGL2 || N !== null, z = {}, I = y(null);
  let i = I;
  function T(Y, k, f, Q, b) {
    let W = !1;
    if (A) {
      const IM = j(Q, f, k);
      i !== IM && (i = IM, g(i.object)), W = a(Q, b), W && c(Q, b);
    } else {
      const IM = k.wireframe === !0;
      (i.geometry !== Q.id || i.program !== f.id || i.wireframe !== IM) && (i.geometry = Q.id, i.program = f.id, i.wireframe = IM, W = !0);
    }
    Y.isInstancedMesh === !0 && (W = !0), b !== null && D.update(b, 34963), W && (p(Y, k, f, Q), b !== null && n.bindBuffer(34963, D.get(b).buffer));
  }
  function u() {
    return t.isWebGL2 ? n.createVertexArray() : N.createVertexArrayOES();
  }
  function g(Y) {
    return t.isWebGL2 ? n.bindVertexArray(Y) : N.bindVertexArrayOES(Y);
  }
  function s(Y) {
    return t.isWebGL2 ? n.deleteVertexArray(Y) : N.deleteVertexArrayOES(Y);
  }
  function j(Y, k, f) {
    const Q = f.wireframe === !0;
    let b = z[Y.id];
    b === void 0 && (b = {}, z[Y.id] = b);
    let W = b[k.id];
    W === void 0 && (W = {}, b[k.id] = W);
    let IM = W[Q];
    return IM === void 0 && (IM = y(u()), W[Q] = IM), IM;
  }
  function y(Y) {
    const k = [], f = [], Q = [];
    for (let b = 0; b < e; b++)
      k[b] = 0, f[b] = 0, Q[b] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: k,
      enabledAttributes: f,
      attributeDivisors: Q,
      object: Y,
      attributes: {},
      index: null
    };
  }
  function a(Y, k) {
    const f = i.attributes, Q = Y.attributes;
    let b = 0;
    for (const W in Q) {
      const IM = f[W], Z = Q[W];
      if (IM === void 0 || IM.attribute !== Z || IM.data !== Z.data)
        return !0;
      b++;
    }
    return i.attributesNum !== b || i.index !== k;
  }
  function c(Y, k) {
    const f = {}, Q = Y.attributes;
    let b = 0;
    for (const W in Q) {
      const IM = Q[W], Z = {};
      Z.attribute = IM, IM.data && (Z.data = IM.data), f[W] = Z, b++;
    }
    i.attributes = f, i.attributesNum = b, i.index = k;
  }
  function r() {
    const Y = i.newAttributes;
    for (let k = 0, f = Y.length; k < f; k++)
      Y[k] = 0;
  }
  function l(Y) {
    C(Y, 0);
  }
  function C(Y, k) {
    const f = i.newAttributes, Q = i.enabledAttributes, b = i.attributeDivisors;
    f[Y] = 1, Q[Y] === 0 && (n.enableVertexAttribArray(Y), Q[Y] = 1), b[Y] !== k && ((t.isWebGL2 ? n : M.get("ANGLE_instanced_arrays"))[t.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](Y, k), b[Y] = k);
  }
  function E() {
    const Y = i.newAttributes, k = i.enabledAttributes;
    for (let f = 0, Q = k.length; f < Q; f++)
      k[f] !== Y[f] && (n.disableVertexAttribArray(f), k[f] = 0);
  }
  function d(Y, k, f, Q, b, W) {
    t.isWebGL2 === !0 && (f === 5124 || f === 5125) ? n.vertexAttribIPointer(Y, k, f, b, W) : n.vertexAttribPointer(Y, k, f, Q, b, W);
  }
  function p(Y, k, f, Q) {
    if (t.isWebGL2 === !1 && (Y.isInstancedMesh || Q.isInstancedBufferGeometry) && M.get("ANGLE_instanced_arrays") === null)
      return;
    r();
    const b = Q.attributes, W = f.getAttributes(), IM = k.defaultAttributeValues;
    for (const Z in W) {
      const V = W[Z];
      if (V.location >= 0) {
        let eM = b[Z];
        if (eM === void 0 && (Z === "instanceMatrix" && Y.instanceMatrix && (eM = Y.instanceMatrix), Z === "instanceColor" && Y.instanceColor && (eM = Y.instanceColor)), eM !== void 0) {
          const uM = eM.normalized, jM = eM.itemSize, _ = D.get(eM);
          if (_ === void 0)
            continue;
          const kM = _.buffer, rM = _.type, wM = _.bytesPerElement;
          if (eM.isInterleavedBufferAttribute) {
            const zM = eM.data, vM = zM.stride, OM = eM.offset;
            if (zM && zM.isInstancedInterleavedBuffer) {
              for (let P = 0; P < V.locationSize; P++)
                C(V.location + P, zM.meshPerAttribute);
              Y.isInstancedMesh !== !0 && Q._maxInstanceCount === void 0 && (Q._maxInstanceCount = zM.meshPerAttribute * zM.count);
            } else
              for (let P = 0; P < V.locationSize; P++)
                l(V.location + P);
            n.bindBuffer(34962, kM);
            for (let P = 0; P < V.locationSize; P++)
              d(V.location + P, jM / V.locationSize, rM, uM, vM * wM, (OM + jM / V.locationSize * P) * wM);
          } else {
            if (eM.isInstancedBufferAttribute) {
              for (let zM = 0; zM < V.locationSize; zM++)
                C(V.location + zM, eM.meshPerAttribute);
              Y.isInstancedMesh !== !0 && Q._maxInstanceCount === void 0 && (Q._maxInstanceCount = eM.meshPerAttribute * eM.count);
            } else
              for (let zM = 0; zM < V.locationSize; zM++)
                l(V.location + zM);
            n.bindBuffer(34962, kM);
            for (let zM = 0; zM < V.locationSize; zM++)
              d(V.location + zM, jM / V.locationSize, rM, uM, jM * wM, jM / V.locationSize * zM * wM);
          }
        } else if (IM !== void 0) {
          const uM = IM[Z];
          if (uM !== void 0)
            switch (uM.length) {
              case 2:
                n.vertexAttrib2fv(V.location, uM);
                break;
              case 3:
                n.vertexAttrib3fv(V.location, uM);
                break;
              case 4:
                n.vertexAttrib4fv(V.location, uM);
                break;
              default:
                n.vertexAttrib1fv(V.location, uM);
            }
        }
      }
    }
    E();
  }
  function H() {
    o();
    for (const Y in z) {
      const k = z[Y];
      for (const f in k) {
        const Q = k[f];
        for (const b in Q)
          s(Q[b].object), delete Q[b];
        delete k[f];
      }
      delete z[Y];
    }
  }
  function DM(Y) {
    if (z[Y.id] === void 0)
      return;
    const k = z[Y.id];
    for (const f in k) {
      const Q = k[f];
      for (const b in Q)
        s(Q[b].object), delete Q[b];
      delete k[f];
    }
    delete z[Y.id];
  }
  function G(Y) {
    for (const k in z) {
      const f = z[k];
      if (f[Y.id] === void 0)
        continue;
      const Q = f[Y.id];
      for (const b in Q)
        s(Q[b].object), delete Q[b];
      delete f[Y.id];
    }
  }
  function o() {
    h(), i !== I && (i = I, g(i.object));
  }
  function h() {
    I.geometry = null, I.program = null, I.wireframe = !1;
  }
  return {
    setup: T,
    reset: o,
    resetDefaultState: h,
    dispose: H,
    releaseStatesOfGeometry: DM,
    releaseStatesOfProgram: G,
    initAttributes: r,
    enableAttribute: l,
    disableUnusedAttributes: E
  };
}
function tr(n, M, D, t) {
  const e = t.isWebGL2;
  let N;
  function A(i) {
    N = i;
  }
  function z(i, T) {
    n.drawArrays(N, i, T), D.update(T, N, 1);
  }
  function I(i, T, u) {
    if (u === 0)
      return;
    let g, s;
    if (e)
      g = n, s = "drawArraysInstanced";
    else if (g = M.get("ANGLE_instanced_arrays"), s = "drawArraysInstancedANGLE", g === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    g[s](N, i, T, u), D.update(T, N, u);
  }
  this.setMode = A, this.render = z, this.renderInstances = I;
}
function er(n, M, D) {
  let t;
  function e() {
    if (t !== void 0)
      return t;
    if (M.has("EXT_texture_filter_anisotropic") === !0) {
      const p = M.get("EXT_texture_filter_anisotropic");
      t = n.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      t = 0;
    return t;
  }
  function N(p) {
    if (p === "highp") {
      if (n.getShaderPrecisionFormat(35633, 36338).precision > 0 && n.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      p = "mediump";
    }
    return p === "mediump" && n.getShaderPrecisionFormat(35633, 36337).precision > 0 && n.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const A = typeof WebGL2RenderingContext < "u" && n instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && n instanceof WebGL2ComputeRenderingContext;
  let z = D.precision !== void 0 ? D.precision : "highp";
  const I = N(z);
  I !== z && (console.warn("THREE.WebGLRenderer:", z, "not supported, using", I, "instead."), z = I);
  const i = A || M.has("WEBGL_draw_buffers"), T = D.logarithmicDepthBuffer === !0, u = n.getParameter(34930), g = n.getParameter(35660), s = n.getParameter(3379), j = n.getParameter(34076), y = n.getParameter(34921), a = n.getParameter(36347), c = n.getParameter(36348), r = n.getParameter(36349), l = g > 0, C = A || M.has("OES_texture_float"), E = l && C, d = A ? n.getParameter(36183) : 0;
  return {
    isWebGL2: A,
    drawBuffers: i,
    getMaxAnisotropy: e,
    getMaxPrecision: N,
    precision: z,
    logarithmicDepthBuffer: T,
    maxTextures: u,
    maxVertexTextures: g,
    maxTextureSize: s,
    maxCubemapSize: j,
    maxAttributes: y,
    maxVertexUniforms: a,
    maxVaryings: c,
    maxFragmentUniforms: r,
    vertexTextures: l,
    floatFragmentTextures: C,
    floatVertexTextures: E,
    maxSamples: d
  };
}
function Nr(n) {
  const M = this;
  let D = null, t = 0, e = !1, N = !1;
  const A = new XD(), z = new gD(), I = { value: null, needsUpdate: !1 };
  this.uniform = I, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, g, s) {
    const j = u.length !== 0 || g || t !== 0 || e;
    return e = g, D = T(u, s, 0), t = u.length, j;
  }, this.beginShadows = function() {
    N = !0, T(null);
  }, this.endShadows = function() {
    N = !1, i();
  }, this.setState = function(u, g, s) {
    const j = u.clippingPlanes, y = u.clipIntersection, a = u.clipShadows, c = n.get(u);
    if (!e || j === null || j.length === 0 || N && !a)
      N ? T(null) : i();
    else {
      const r = N ? 0 : t, l = r * 4;
      let C = c.clippingState || null;
      I.value = C, C = T(j, g, l, s);
      for (let E = 0; E !== l; ++E)
        C[E] = D[E];
      c.clippingState = C, this.numIntersection = y ? this.numPlanes : 0, this.numPlanes += r;
    }
  };
  function i() {
    I.value !== D && (I.value = D, I.needsUpdate = t > 0), M.numPlanes = t, M.numIntersection = 0;
  }
  function T(u, g, s, j) {
    const y = u !== null ? u.length : 0;
    let a = null;
    if (y !== 0) {
      if (a = I.value, j !== !0 || a === null) {
        const c = s + y * 4, r = g.matrixWorldInverse;
        z.getNormalMatrix(r), (a === null || a.length < c) && (a = new Float32Array(c));
        for (let l = 0, C = s; l !== y; ++l, C += 4)
          A.copy(u[l]).applyMatrix4(r, z), A.normal.toArray(a, C), a[C + 3] = A.constant;
      }
      I.value = a, I.needsUpdate = !0;
    }
    return M.numPlanes = y, M.numIntersection = 0, a;
  }
}
function nr(n) {
  let M = /* @__PURE__ */ new WeakMap();
  function D(A, z) {
    return z === mn ? A.mapping = be : z === kn && (A.mapping = Ke), A;
  }
  function t(A) {
    if (A && A.isTexture && A.isRenderTargetTexture === !1) {
      const z = A.mapping;
      if (z === mn || z === kn)
        if (M.has(A)) {
          const I = M.get(A).texture;
          return D(I, A.mapping);
        } else {
          const I = A.image;
          if (I && I.height > 0) {
            const i = new ri(I.height / 2);
            return i.fromEquirectangularTexture(n, A), M.set(A, i), A.addEventListener("dispose", e), D(i.texture, A.mapping);
          } else
            return null;
        }
    }
    return A;
  }
  function e(A) {
    const z = A.target;
    z.removeEventListener("dispose", e);
    const I = M.get(z);
    I !== void 0 && (M.delete(z), I.dispose());
  }
  function N() {
    M = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: N
  };
}
class eA extends MA {
  constructor(M = -1, D = 1, t = 1, e = -1, N = 0.1, A = 2e3) {
    super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = M, this.right = D, this.top = t, this.bottom = e, this.near = N, this.far = A, this.updateProjectionMatrix();
  }
  copy(M, D) {
    return super.copy(M, D), this.left = M.left, this.right = M.right, this.top = M.top, this.bottom = M.bottom, this.near = M.near, this.far = M.far, this.zoom = M.zoom, this.view = M.view === null ? null : Object.assign({}, M.view), this;
  }
  setViewOffset(M, D, t, e, N, A) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = M, this.view.fullHeight = D, this.view.offsetX = t, this.view.offsetY = e, this.view.width = N, this.view.height = A, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const M = (this.right - this.left) / (2 * this.zoom), D = (this.top - this.bottom) / (2 * this.zoom), t = (this.right + this.left) / 2, e = (this.top + this.bottom) / 2;
    let N = t - M, A = t + M, z = e + D, I = e - D;
    if (this.view !== null && this.view.enabled) {
      const i = (this.right - this.left) / this.view.fullWidth / this.zoom, T = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      N += i * this.view.offsetX, A = N + i * this.view.width, z -= T * this.view.offsetY, I = z - T * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(N, A, z, I, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(M) {
    const D = super.toJSON(M);
    return D.object.zoom = this.zoom, D.object.left = this.left, D.object.right = this.right, D.object.top = this.top, D.object.bottom = this.bottom, D.object.near = this.near, D.object.far = this.far, this.view !== null && (D.object.view = Object.assign({}, this.view)), D;
  }
}
eA.prototype.isOrthographicCamera = !0;
class _N extends lt {
  constructor(M) {
    super(M), this.type = "RawShaderMaterial";
  }
}
_N.prototype.isRawShaderMaterial = !0;
const ee = 4, Tt = 8, ZD = Math.pow(2, Tt), ci = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ji = Tt - ee + 1 + ci.length, Pt = 20, wn = /* @__PURE__ */ new eA(), { _lodPlanes: Ce, _sizeLods: nz, _sigmas: uN } = /* @__PURE__ */ Ar(), Az = /* @__PURE__ */ new cM();
let On = null;
const wt = (1 + Math.sqrt(5)) / 2, Ft = 1 / wt, zz = [
  /* @__PURE__ */ new O(1, 1, 1),
  /* @__PURE__ */ new O(-1, 1, 1),
  /* @__PURE__ */ new O(1, 1, -1),
  /* @__PURE__ */ new O(-1, 1, -1),
  /* @__PURE__ */ new O(0, wt, Ft),
  /* @__PURE__ */ new O(0, wt, -Ft),
  /* @__PURE__ */ new O(Ft, 0, wt),
  /* @__PURE__ */ new O(-Ft, 0, wt),
  /* @__PURE__ */ new O(wt, Ft, 0),
  /* @__PURE__ */ new O(-wt, Ft, 0)
];
class iz {
  constructor(M) {
    this._renderer = M, this._pingPongRenderTarget = null, this._blurMaterial = zr(Pt), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(M, D = 0, t = 0.1, e = 100) {
    On = this._renderer.getRenderTarget();
    const N = this._allocateTargets();
    return this._sceneToCubeUV(M, t, e, N), D > 0 && this._blur(N, 0, 0, D), this._applyPMREM(N), this._cleanup(N), N;
  }
  fromEquirectangular(M, D = null) {
    return this._fromTexture(M, D);
  }
  fromCubemap(M, D = null) {
    return this._fromTexture(M, D);
  }
  compileCubemapShader() {
    this._cubemapShader === null && (this._cubemapShader = uz(), this._compileMaterial(this._cubemapShader));
  }
  compileEquirectangularShader() {
    this._equirectShader === null && (this._equirectShader = Tz(), this._compileMaterial(this._equirectShader));
  }
  dispose() {
    this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose();
    for (let M = 0; M < Ce.length; M++)
      Ce[M].dispose();
  }
  _cleanup(M) {
    this._renderer.setRenderTarget(On), M.scissorTest = !1, gN(M, 0, 0, M.width, M.height);
  }
  _fromTexture(M, D) {
    On = this._renderer.getRenderTarget();
    const t = D || this._allocateTargets(M);
    return this._textureToCubeUV(M, t), this._applyPMREM(t), this._cleanup(t), t;
  }
  _allocateTargets(M) {
    const D = {
      magFilter: uD,
      minFilter: uD,
      generateMipmaps: !1,
      type: Me,
      format: yD,
      encoding: st,
      depthBuffer: !1
    }, t = Iz(D);
    return t.depthBuffer = !M, this._pingPongRenderTarget === null && (this._pingPongRenderTarget = Iz(D)), t;
  }
  _compileMaterial(M) {
    const D = new nD(Ce[0], M);
    this._renderer.compile(D, wn);
  }
  _sceneToCubeUV(M, D, t, e) {
    const z = new jD(90, 1, D, t), I = [1, -1, 1, 1, 1, 1], i = [1, 1, 1, -1, -1, -1], T = this._renderer, u = T.autoClear, g = T.toneMapping;
    T.getClearColor(Az), T.toneMapping = it, T.autoClear = !1;
    const s = new $n({
      name: "PMREM.Background",
      side: eD,
      depthWrite: !1,
      depthTest: !1
    }), j = new nD(new Re(), s);
    let y = !1;
    const a = M.background;
    a ? a.isColor && (s.color.copy(a), M.background = null, y = !0) : (s.color.copy(Az), y = !0);
    for (let c = 0; c < 6; c++) {
      const r = c % 3;
      r === 0 ? (z.up.set(0, I[c], 0), z.lookAt(i[c], 0, 0)) : r === 1 ? (z.up.set(0, 0, I[c]), z.lookAt(0, i[c], 0)) : (z.up.set(0, I[c], 0), z.lookAt(0, 0, i[c])), gN(e, r * ZD, c > 2 ? ZD : 0, ZD, ZD), T.setRenderTarget(e), y && T.render(j, z), T.render(M, z);
    }
    j.geometry.dispose(), j.material.dispose(), T.toneMapping = g, T.autoClear = u, M.background = a;
  }
  _textureToCubeUV(M, D) {
    const t = this._renderer, e = M.mapping === be || M.mapping === Ke;
    e ? (this._cubemapShader === null && (this._cubemapShader = uz()), this._cubemapShader.uniforms.flipEnvMap.value = M.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectShader === null && (this._equirectShader = Tz());
    const N = e ? this._cubemapShader : this._equirectShader, A = new nD(Ce[0], N), z = N.uniforms;
    z.envMap.value = M, e || z.texelSize.value.set(1 / M.image.width, 1 / M.image.height), gN(D, 0, 0, 3 * ZD, 2 * ZD), t.setRenderTarget(D), t.render(A, wn);
  }
  _applyPMREM(M) {
    const D = this._renderer, t = D.autoClear;
    D.autoClear = !1;
    for (let e = 1; e < ji; e++) {
      const N = Math.sqrt(uN[e] * uN[e] - uN[e - 1] * uN[e - 1]), A = zz[(e - 1) % zz.length];
      this._blur(M, e - 1, e, N, A);
    }
    D.autoClear = t;
  }
  _blur(M, D, t, e, N) {
    const A = this._pingPongRenderTarget;
    this._halfBlur(M, A, D, t, e, "latitudinal", N), this._halfBlur(A, M, t, t, e, "longitudinal", N);
  }
  _halfBlur(M, D, t, e, N, A, z) {
    const I = this._renderer, i = this._blurMaterial;
    A !== "latitudinal" && A !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const T = 3, u = new nD(Ce[e], i), g = i.uniforms, s = nz[t] - 1, j = isFinite(N) ? Math.PI / (2 * s) : 2 * Math.PI / (2 * Pt - 1), y = N / j, a = isFinite(N) ? 1 + Math.floor(T * y) : Pt;
    a > Pt && console.warn(`sigmaRadians, ${N}, is too large and will clip, as it requested ${a} samples when the maximum is set to ${Pt}`);
    const c = [];
    let r = 0;
    for (let d = 0; d < Pt; ++d) {
      const p = d / y, H = Math.exp(-p * p / 2);
      c.push(H), d === 0 ? r += H : d < a && (r += 2 * H);
    }
    for (let d = 0; d < c.length; d++)
      c[d] = c[d] / r;
    g.envMap.value = M.texture, g.samples.value = a, g.weights.value = c, g.latitudinal.value = A === "latitudinal", z && (g.poleAxis.value = z), g.dTheta.value = j, g.mipInt.value = Tt - t;
    const l = nz[e], C = 3 * Math.max(0, ZD - 2 * l), E = (e === 0 ? 0 : 2 * ZD) + 2 * l * (e > Tt - ee ? e - Tt + ee : 0);
    gN(D, C, E, 3 * l, 2 * l), I.setRenderTarget(D), I.render(u, wn);
  }
}
function Ar() {
  const n = [], M = [], D = [];
  let t = Tt;
  for (let e = 0; e < ji; e++) {
    const N = Math.pow(2, t);
    M.push(N);
    let A = 1 / N;
    e > Tt - ee ? A = ci[e - Tt + ee - 1] : e === 0 && (A = 0), D.push(A);
    const z = 1 / (N - 1), I = -z / 2, i = 1 + z / 2, T = [I, I, i, I, i, i, I, I, i, i, I, i], u = 6, g = 6, s = 3, j = 2, y = 1, a = new Float32Array(s * g * u), c = new Float32Array(j * g * u), r = new Float32Array(y * g * u);
    for (let C = 0; C < u; C++) {
      const E = C % 3 * 2 / 3 - 1, d = C > 2 ? 0 : -1, p = [
        E,
        d,
        0,
        E + 2 / 3,
        d,
        0,
        E + 2 / 3,
        d + 1,
        0,
        E,
        d,
        0,
        E + 2 / 3,
        d + 1,
        0,
        E,
        d + 1,
        0
      ];
      a.set(p, s * g * C), c.set(T, j * g * C);
      const H = [C, C, C, C, C, C];
      r.set(H, y * g * C);
    }
    const l = new VM();
    l.setAttribute("position", new AD(a, s)), l.setAttribute("uv", new AD(c, j)), l.setAttribute("faceIndex", new AD(r, y)), n.push(l), t > ee && t--;
  }
  return { _lodPlanes: n, _sizeLods: M, _sigmas: D };
}
function Iz(n) {
  const M = new dD(3 * ZD, 3 * ZD, n);
  return M.texture.mapping = mN, M.texture.name = "PMREM.cubeUv", M.scissorTest = !0, M;
}
function gN(n, M, D, t, e) {
  n.viewport.set(M, D, t, e), n.scissor.set(M, D, t, e);
}
function zr(n) {
  const M = new Float32Array(n), D = new O(0, 1, 0);
  return new _N({
    name: "SphericalGaussianBlur",
    defines: { n },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: M },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: D }
    },
    vertexShader: NA(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: zt,
    depthTest: !1,
    depthWrite: !1
  });
}
function Tz() {
  const n = new q(1, 1);
  return new _N({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null },
      texelSize: { value: n }
    },
    vertexShader: NA(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = texture2D ( envMap, uv ).rgb;
				uv.x += texelSize.x;
				vec3 tr = texture2D ( envMap, uv ).rgb;
				uv.y += texelSize.y;
				vec3 br = texture2D ( envMap, uv ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = texture2D ( envMap, uv ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,
    blending: zt,
    depthTest: !1,
    depthWrite: !1
  });
}
function uz() {
  return new _N({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: NA(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: zt,
    depthTest: !1,
    depthWrite: !1
  });
}
function NA() {
  return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function ir(n) {
  let M = /* @__PURE__ */ new WeakMap(), D = null;
  function t(z) {
    if (z && z.isTexture) {
      const I = z.mapping, i = I === mn || I === kn, T = I === be || I === Ke;
      if (i || T)
        if (z.isRenderTargetTexture && z.needsPMREMUpdate === !0) {
          z.needsPMREMUpdate = !1;
          let u = M.get(z);
          return D === null && (D = new iz(n)), u = i ? D.fromEquirectangular(z, u) : D.fromCubemap(z, u), M.set(z, u), u.texture;
        } else {
          if (M.has(z))
            return M.get(z).texture;
          {
            const u = z.image;
            if (i && u && u.height > 0 || T && u && e(u)) {
              D === null && (D = new iz(n));
              const g = i ? D.fromEquirectangular(z) : D.fromCubemap(z);
              return M.set(z, g), z.addEventListener("dispose", N), g.texture;
            } else
              return null;
          }
        }
    }
    return z;
  }
  function e(z) {
    let I = 0;
    const i = 6;
    for (let T = 0; T < i; T++)
      z[T] !== void 0 && I++;
    return I === i;
  }
  function N(z) {
    const I = z.target;
    I.removeEventListener("dispose", N);
    const i = M.get(I);
    i !== void 0 && (M.delete(I), i.dispose());
  }
  function A() {
    M = /* @__PURE__ */ new WeakMap(), D !== null && (D.dispose(), D = null);
  }
  return {
    get: t,
    dispose: A
  };
}
function Ir(n) {
  const M = {};
  function D(t) {
    if (M[t] !== void 0)
      return M[t];
    let e;
    switch (t) {
      case "WEBGL_depth_texture":
        e = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        e = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        e = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        e = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        e = n.getExtension(t);
    }
    return M[t] = e, e;
  }
  return {
    has: function(t) {
      return D(t) !== null;
    },
    init: function(t) {
      t.isWebGL2 ? D("EXT_color_buffer_float") : (D("WEBGL_depth_texture"), D("OES_texture_float"), D("OES_texture_half_float"), D("OES_texture_half_float_linear"), D("OES_standard_derivatives"), D("OES_element_index_uint"), D("OES_vertex_array_object"), D("ANGLE_instanced_arrays")), D("OES_texture_float_linear"), D("EXT_color_buffer_half_float"), D("WEBGL_multisampled_render_to_texture");
    },
    get: function(t) {
      const e = D(t);
      return e === null && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e;
    }
  };
}
function Tr(n, M, D, t) {
  const e = {}, N = /* @__PURE__ */ new WeakMap();
  function A(u) {
    const g = u.target;
    g.index !== null && M.remove(g.index);
    for (const j in g.attributes)
      M.remove(g.attributes[j]);
    g.removeEventListener("dispose", A), delete e[g.id];
    const s = N.get(g);
    s && (M.remove(s), N.delete(g)), t.releaseStatesOfGeometry(g), g.isInstancedBufferGeometry === !0 && delete g._maxInstanceCount, D.memory.geometries--;
  }
  function z(u, g) {
    return e[g.id] === !0 || (g.addEventListener("dispose", A), e[g.id] = !0, D.memory.geometries++), g;
  }
  function I(u) {
    const g = u.attributes;
    for (const j in g)
      M.update(g[j], 34962);
    const s = u.morphAttributes;
    for (const j in s) {
      const y = s[j];
      for (let a = 0, c = y.length; a < c; a++)
        M.update(y[a], 34962);
    }
  }
  function i(u) {
    const g = [], s = u.index, j = u.attributes.position;
    let y = 0;
    if (s !== null) {
      const r = s.array;
      y = s.version;
      for (let l = 0, C = r.length; l < C; l += 3) {
        const E = r[l + 0], d = r[l + 1], p = r[l + 2];
        g.push(E, d, d, p, p, E);
      }
    } else {
      const r = j.array;
      y = j.version;
      for (let l = 0, C = r.length / 3 - 1; l < C; l += 3) {
        const E = l + 0, d = l + 1, p = l + 2;
        g.push(E, d, d, p, p, E);
      }
    }
    const a = new (ii(g) ? gi : ui)(g, 1);
    a.version = y;
    const c = N.get(u);
    c && M.remove(c), N.set(u, a);
  }
  function T(u) {
    const g = N.get(u);
    if (g) {
      const s = u.index;
      s !== null && g.version < s.version && i(u);
    } else
      i(u);
    return N.get(u);
  }
  return {
    get: z,
    update: I,
    getWireframeAttribute: T
  };
}
function ur(n, M, D, t) {
  const e = t.isWebGL2;
  let N;
  function A(g) {
    N = g;
  }
  let z, I;
  function i(g) {
    z = g.type, I = g.bytesPerElement;
  }
  function T(g, s) {
    n.drawElements(N, s, z, g * I), D.update(s, N, 1);
  }
  function u(g, s, j) {
    if (j === 0)
      return;
    let y, a;
    if (e)
      y = n, a = "drawElementsInstanced";
    else if (y = M.get("ANGLE_instanced_arrays"), a = "drawElementsInstancedANGLE", y === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    y[a](N, s, z, g * I, j), D.update(s, N, j);
  }
  this.setMode = A, this.setIndex = i, this.render = T, this.renderInstances = u;
}
function gr(n) {
  const M = {
    geometries: 0,
    textures: 0
  }, D = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function t(N, A, z) {
    switch (D.calls++, A) {
      case 4:
        D.triangles += z * (N / 3);
        break;
      case 1:
        D.lines += z * (N / 2);
        break;
      case 3:
        D.lines += z * (N - 1);
        break;
      case 2:
        D.lines += z * N;
        break;
      case 0:
        D.points += z * N;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", A);
        break;
    }
  }
  function e() {
    D.frame++, D.calls = 0, D.triangles = 0, D.points = 0, D.lines = 0;
  }
  return {
    memory: M,
    render: D,
    programs: null,
    autoReset: !0,
    reset: e,
    update: t
  };
}
class nA extends iD {
  constructor(M = null, D = 1, t = 1, e = 1) {
    super(null), this.image = { data: M, width: D, height: t, depth: e }, this.magFilter = ND, this.minFilter = ND, this.wrapR = xD, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
nA.prototype.isDataTexture2DArray = !0;
function rr(n, M) {
  return n[0] - M[0];
}
function sr(n, M) {
  return Math.abs(M[1]) - Math.abs(n[1]);
}
function gz(n, M) {
  let D = 1;
  const t = M.isInterleavedBufferAttribute ? M.data.array : M.array;
  t instanceof Int8Array ? D = 127 : t instanceof Int16Array ? D = 32767 : t instanceof Int32Array ? D = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", t), n.divideScalar(D);
}
function cr(n, M, D) {
  const t = {}, e = new Float32Array(8), N = /* @__PURE__ */ new WeakMap(), A = new O(), z = [];
  for (let i = 0; i < 8; i++)
    z[i] = [i, 0];
  function I(i, T, u, g) {
    const s = i.morphTargetInfluences;
    if (M.isWebGL2 === !0) {
      const j = T.morphAttributes.position.length;
      let y = N.get(T);
      if (y === void 0 || y.count !== j) {
        let h = function() {
          G.dispose(), N.delete(T), T.removeEventListener("dispose", h);
        };
        y !== void 0 && y.texture.dispose();
        const r = T.morphAttributes.normal !== void 0, l = T.morphAttributes.position, C = T.morphAttributes.normal || [], E = T.attributes.position.count, d = r === !0 ? 2 : 1;
        let p = E * d, H = 1;
        p > M.maxTextureSize && (H = Math.ceil(p / M.maxTextureSize), p = M.maxTextureSize);
        const DM = new Float32Array(p * H * 4 * j), G = new nA(DM, p, H, j);
        G.format = yD, G.type = Ot, G.needsUpdate = !0;
        const o = d * 4;
        for (let Y = 0; Y < j; Y++) {
          const k = l[Y], f = C[Y], Q = p * H * 4 * Y;
          for (let b = 0; b < k.count; b++) {
            A.fromBufferAttribute(k, b), k.normalized === !0 && gz(A, k);
            const W = b * o;
            DM[Q + W + 0] = A.x, DM[Q + W + 1] = A.y, DM[Q + W + 2] = A.z, DM[Q + W + 3] = 0, r === !0 && (A.fromBufferAttribute(f, b), f.normalized === !0 && gz(A, f), DM[Q + W + 4] = A.x, DM[Q + W + 5] = A.y, DM[Q + W + 6] = A.z, DM[Q + W + 7] = 0);
          }
        }
        y = {
          count: j,
          texture: G,
          size: new q(p, H)
        }, N.set(T, y), T.addEventListener("dispose", h);
      }
      let a = 0;
      for (let r = 0; r < s.length; r++)
        a += s[r];
      const c = T.morphTargetsRelative ? 1 : 1 - a;
      g.getUniforms().setValue(n, "morphTargetBaseInfluence", c), g.getUniforms().setValue(n, "morphTargetInfluences", s), g.getUniforms().setValue(n, "morphTargetsTexture", y.texture, D), g.getUniforms().setValue(n, "morphTargetsTextureSize", y.size);
    } else {
      const j = s === void 0 ? 0 : s.length;
      let y = t[T.id];
      if (y === void 0 || y.length !== j) {
        y = [];
        for (let C = 0; C < j; C++)
          y[C] = [C, 0];
        t[T.id] = y;
      }
      for (let C = 0; C < j; C++) {
        const E = y[C];
        E[0] = C, E[1] = s[C];
      }
      y.sort(sr);
      for (let C = 0; C < 8; C++)
        C < j && y[C][1] ? (z[C][0] = y[C][0], z[C][1] = y[C][1]) : (z[C][0] = Number.MAX_SAFE_INTEGER, z[C][1] = 0);
      z.sort(rr);
      const a = T.morphAttributes.position, c = T.morphAttributes.normal;
      let r = 0;
      for (let C = 0; C < 8; C++) {
        const E = z[C], d = E[0], p = E[1];
        d !== Number.MAX_SAFE_INTEGER && p ? (a && T.getAttribute("morphTarget" + C) !== a[d] && T.setAttribute("morphTarget" + C, a[d]), c && T.getAttribute("morphNormal" + C) !== c[d] && T.setAttribute("morphNormal" + C, c[d]), e[C] = p, r += p) : (a && T.hasAttribute("morphTarget" + C) === !0 && T.deleteAttribute("morphTarget" + C), c && T.hasAttribute("morphNormal" + C) === !0 && T.deleteAttribute("morphNormal" + C), e[C] = 0);
      }
      const l = T.morphTargetsRelative ? 1 : 1 - r;
      g.getUniforms().setValue(n, "morphTargetBaseInfluence", l), g.getUniforms().setValue(n, "morphTargetInfluences", e);
    }
  }
  return {
    update: I
  };
}
function jr(n, M, D, t) {
  let e = /* @__PURE__ */ new WeakMap();
  function N(I) {
    const i = t.render.frame, T = I.geometry, u = M.get(I, T);
    return e.get(u) !== i && (M.update(u), e.set(u, i)), I.isInstancedMesh && (I.hasEventListener("dispose", z) === !1 && I.addEventListener("dispose", z), D.update(I.instanceMatrix, 34962), I.instanceColor !== null && D.update(I.instanceColor, 34962)), u;
  }
  function A() {
    e = /* @__PURE__ */ new WeakMap();
  }
  function z(I) {
    const i = I.target;
    i.removeEventListener("dispose", z), D.remove(i.instanceMatrix), i.instanceColor !== null && D.remove(i.instanceColor);
  }
  return {
    update: N,
    dispose: A
  };
}
class yi extends iD {
  constructor(M = null, D = 1, t = 1, e = 1) {
    super(null), this.image = { data: M, width: D, height: t, depth: e }, this.magFilter = ND, this.minFilter = ND, this.wrapR = xD, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
yi.prototype.isDataTexture3D = !0;
const oi = new iD(), ai = new nA(), Ci = new yi(), Li = new SN(), rz = [], sz = [], cz = new Float32Array(16), jz = new Float32Array(9), yz = new Float32Array(4);
function ue(n, M, D) {
  const t = n[0];
  if (t <= 0 || t > 0)
    return n;
  const e = M * D;
  let N = rz[e];
  if (N === void 0 && (N = new Float32Array(e), rz[e] = N), M !== 0) {
    t.toArray(N, 0);
    for (let A = 1, z = 0; A !== M; ++A)
      z += D, n[A].toArray(N, z);
  }
  return N;
}
function oD(n, M) {
  if (n.length !== M.length)
    return !1;
  for (let D = 0, t = n.length; D < t; D++)
    if (n[D] !== M[D])
      return !1;
  return !0;
}
function cD(n, M) {
  for (let D = 0, t = M.length; D < t; D++)
    n[D] = M[D];
}
function bN(n, M) {
  let D = sz[M];
  D === void 0 && (D = new Int32Array(M), sz[M] = D);
  for (let t = 0; t !== M; ++t)
    D[t] = n.allocateTextureUnit();
  return D;
}
function yr(n, M) {
  const D = this.cache;
  D[0] !== M && (n.uniform1f(this.addr, M), D[0] = M);
}
function or(n, M) {
  const D = this.cache;
  if (M.x !== void 0)
    (D[0] !== M.x || D[1] !== M.y) && (n.uniform2f(this.addr, M.x, M.y), D[0] = M.x, D[1] = M.y);
  else {
    if (oD(D, M))
      return;
    n.uniform2fv(this.addr, M), cD(D, M);
  }
}
function ar(n, M) {
  const D = this.cache;
  if (M.x !== void 0)
    (D[0] !== M.x || D[1] !== M.y || D[2] !== M.z) && (n.uniform3f(this.addr, M.x, M.y, M.z), D[0] = M.x, D[1] = M.y, D[2] = M.z);
  else if (M.r !== void 0)
    (D[0] !== M.r || D[1] !== M.g || D[2] !== M.b) && (n.uniform3f(this.addr, M.r, M.g, M.b), D[0] = M.r, D[1] = M.g, D[2] = M.b);
  else {
    if (oD(D, M))
      return;
    n.uniform3fv(this.addr, M), cD(D, M);
  }
}
function Cr(n, M) {
  const D = this.cache;
  if (M.x !== void 0)
    (D[0] !== M.x || D[1] !== M.y || D[2] !== M.z || D[3] !== M.w) && (n.uniform4f(this.addr, M.x, M.y, M.z, M.w), D[0] = M.x, D[1] = M.y, D[2] = M.z, D[3] = M.w);
  else {
    if (oD(D, M))
      return;
    n.uniform4fv(this.addr, M), cD(D, M);
  }
}
function Lr(n, M) {
  const D = this.cache, t = M.elements;
  if (t === void 0) {
    if (oD(D, M))
      return;
    n.uniformMatrix2fv(this.addr, !1, M), cD(D, M);
  } else {
    if (oD(D, t))
      return;
    yz.set(t), n.uniformMatrix2fv(this.addr, !1, yz), cD(D, t);
  }
}
function wr(n, M) {
  const D = this.cache, t = M.elements;
  if (t === void 0) {
    if (oD(D, M))
      return;
    n.uniformMatrix3fv(this.addr, !1, M), cD(D, M);
  } else {
    if (oD(D, t))
      return;
    jz.set(t), n.uniformMatrix3fv(this.addr, !1, jz), cD(D, t);
  }
}
function Or(n, M) {
  const D = this.cache, t = M.elements;
  if (t === void 0) {
    if (oD(D, M))
      return;
    n.uniformMatrix4fv(this.addr, !1, M), cD(D, M);
  } else {
    if (oD(D, t))
      return;
    cz.set(t), n.uniformMatrix4fv(this.addr, !1, cz), cD(D, t);
  }
}
function xr(n, M) {
  const D = this.cache;
  D[0] !== M && (n.uniform1i(this.addr, M), D[0] = M);
}
function Er(n, M) {
  const D = this.cache;
  oD(D, M) || (n.uniform2iv(this.addr, M), cD(D, M));
}
function lr(n, M) {
  const D = this.cache;
  oD(D, M) || (n.uniform3iv(this.addr, M), cD(D, M));
}
function dr(n, M) {
  const D = this.cache;
  oD(D, M) || (n.uniform4iv(this.addr, M), cD(D, M));
}
function vr(n, M) {
  const D = this.cache;
  D[0] !== M && (n.uniform1ui(this.addr, M), D[0] = M);
}
function pr(n, M) {
  const D = this.cache;
  oD(D, M) || (n.uniform2uiv(this.addr, M), cD(D, M));
}
function hr(n, M) {
  const D = this.cache;
  oD(D, M) || (n.uniform3uiv(this.addr, M), cD(D, M));
}
function Yr(n, M) {
  const D = this.cache;
  oD(D, M) || (n.uniform4uiv(this.addr, M), cD(D, M));
}
function Ur(n, M, D) {
  const t = this.cache, e = D.allocateTextureUnit();
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e), D.safeSetTexture2D(M || oi, e);
}
function Qr(n, M, D) {
  const t = this.cache, e = D.allocateTextureUnit();
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e), D.setTexture3D(M || Ci, e);
}
function fr(n, M, D) {
  const t = this.cache, e = D.allocateTextureUnit();
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e), D.safeSetTextureCube(M || Li, e);
}
function mr(n, M, D) {
  const t = this.cache, e = D.allocateTextureUnit();
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e), D.setTexture2DArray(M || ai, e);
}
function kr(n) {
  switch (n) {
    case 5126:
      return yr;
    case 35664:
      return or;
    case 35665:
      return ar;
    case 35666:
      return Cr;
    case 35674:
      return Lr;
    case 35675:
      return wr;
    case 35676:
      return Or;
    case 5124:
    case 35670:
      return xr;
    case 35667:
    case 35671:
      return Er;
    case 35668:
    case 35672:
      return lr;
    case 35669:
    case 35673:
      return dr;
    case 5125:
      return vr;
    case 36294:
      return pr;
    case 36295:
      return hr;
    case 36296:
      return Yr;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ur;
    case 35679:
    case 36299:
    case 36307:
      return Qr;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return fr;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return mr;
  }
}
function Sr(n, M) {
  n.uniform1fv(this.addr, M);
}
function Zr(n, M) {
  const D = ue(M, this.size, 2);
  n.uniform2fv(this.addr, D);
}
function _r(n, M) {
  const D = ue(M, this.size, 3);
  n.uniform3fv(this.addr, D);
}
function br(n, M) {
  const D = ue(M, this.size, 4);
  n.uniform4fv(this.addr, D);
}
function Kr(n, M) {
  const D = ue(M, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, D);
}
function Rr(n, M) {
  const D = ue(M, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, D);
}
function Pr(n, M) {
  const D = ue(M, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, D);
}
function Fr(n, M) {
  n.uniform1iv(this.addr, M);
}
function Br(n, M) {
  n.uniform2iv(this.addr, M);
}
function Vr(n, M) {
  n.uniform3iv(this.addr, M);
}
function Hr(n, M) {
  n.uniform4iv(this.addr, M);
}
function Gr(n, M) {
  n.uniform1uiv(this.addr, M);
}
function Wr(n, M) {
  n.uniform2uiv(this.addr, M);
}
function qr(n, M) {
  n.uniform3uiv(this.addr, M);
}
function Xr(n, M) {
  n.uniform4uiv(this.addr, M);
}
function Jr(n, M, D) {
  const t = M.length, e = bN(D, t);
  n.uniform1iv(this.addr, e);
  for (let N = 0; N !== t; ++N)
    D.safeSetTexture2D(M[N] || oi, e[N]);
}
function $r(n, M, D) {
  const t = M.length, e = bN(D, t);
  n.uniform1iv(this.addr, e);
  for (let N = 0; N !== t; ++N)
    D.setTexture3D(M[N] || Ci, e[N]);
}
function Ms(n, M, D) {
  const t = M.length, e = bN(D, t);
  n.uniform1iv(this.addr, e);
  for (let N = 0; N !== t; ++N)
    D.safeSetTextureCube(M[N] || Li, e[N]);
}
function Ds(n, M, D) {
  const t = M.length, e = bN(D, t);
  n.uniform1iv(this.addr, e);
  for (let N = 0; N !== t; ++N)
    D.setTexture2DArray(M[N] || ai, e[N]);
}
function ts(n) {
  switch (n) {
    case 5126:
      return Sr;
    case 35664:
      return Zr;
    case 35665:
      return _r;
    case 35666:
      return br;
    case 35674:
      return Kr;
    case 35675:
      return Rr;
    case 35676:
      return Pr;
    case 5124:
    case 35670:
      return Fr;
    case 35667:
    case 35671:
      return Br;
    case 35668:
    case 35672:
      return Vr;
    case 35669:
    case 35673:
      return Hr;
    case 5125:
      return Gr;
    case 36294:
      return Wr;
    case 36295:
      return qr;
    case 36296:
      return Xr;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Jr;
    case 35679:
    case 36299:
    case 36307:
      return $r;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ms;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ds;
  }
}
function es(n, M, D) {
  this.id = n, this.addr = D, this.cache = [], this.setValue = kr(M.type);
}
function wi(n, M, D) {
  this.id = n, this.addr = D, this.cache = [], this.size = M.size, this.setValue = ts(M.type);
}
wi.prototype.updateCache = function(n) {
  const M = this.cache;
  n instanceof Float32Array && M.length !== n.length && (this.cache = new Float32Array(n.length)), cD(M, n);
};
function Oi(n) {
  this.id = n, this.seq = [], this.map = {};
}
Oi.prototype.setValue = function(n, M, D) {
  const t = this.seq;
  for (let e = 0, N = t.length; e !== N; ++e) {
    const A = t[e];
    A.setValue(n, M[A.id], D);
  }
};
const xn = /(\w+)(\])?(\[|\.)?/g;
function oz(n, M) {
  n.seq.push(M), n.map[M.id] = M;
}
function Ns(n, M, D) {
  const t = n.name, e = t.length;
  for (xn.lastIndex = 0; ; ) {
    const N = xn.exec(t), A = xn.lastIndex;
    let z = N[1];
    const I = N[2] === "]", i = N[3];
    if (I && (z = z | 0), i === void 0 || i === "[" && A + 2 === e) {
      oz(D, i === void 0 ? new es(z, n, M) : new wi(z, n, M));
      break;
    } else {
      let u = D.map[z];
      u === void 0 && (u = new Oi(z), oz(D, u)), D = u;
    }
  }
}
function ut(n, M) {
  this.seq = [], this.map = {};
  const D = n.getProgramParameter(M, 35718);
  for (let t = 0; t < D; ++t) {
    const e = n.getActiveUniform(M, t), N = n.getUniformLocation(M, e.name);
    Ns(e, N, this);
  }
}
ut.prototype.setValue = function(n, M, D, t) {
  const e = this.map[M];
  e !== void 0 && e.setValue(n, D, t);
};
ut.prototype.setOptional = function(n, M, D) {
  const t = M[D];
  t !== void 0 && this.setValue(n, D, t);
};
ut.upload = function(n, M, D, t) {
  for (let e = 0, N = M.length; e !== N; ++e) {
    const A = M[e], z = D[A.id];
    z.needsUpdate !== !1 && A.setValue(n, z.value, t);
  }
};
ut.seqWithValue = function(n, M) {
  const D = [];
  for (let t = 0, e = n.length; t !== e; ++t) {
    const N = n[t];
    N.id in M && D.push(N);
  }
  return D;
};
function az(n, M, D) {
  const t = n.createShader(M);
  return n.shaderSource(t, D), n.compileShader(t), t;
}
let ns = 0;
function As(n) {
  const M = n.split(`
`);
  for (let D = 0; D < M.length; D++)
    M[D] = D + 1 + ": " + M[D];
  return M.join(`
`);
}
function zs(n) {
  switch (n) {
    case st:
      return ["Linear", "( value )"];
    case HM:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", n), ["Linear", "( value )"];
  }
}
function Cz(n, M, D) {
  const t = n.getShaderParameter(M, 35713), e = n.getShaderInfoLog(M).trim();
  return t && e === "" ? "" : D.toUpperCase() + `

` + e + `

` + As(n.getShaderSource(M));
}
function is(n, M) {
  const D = zs(M);
  return "vec4 " + n + "( vec4 value ) { return LinearTo" + D[0] + D[1] + "; }";
}
function Is(n, M) {
  let D;
  switch (M) {
    case UI:
      D = "Linear";
      break;
    case QI:
      D = "Reinhard";
      break;
    case fI:
      D = "OptimizedCineon";
      break;
    case mI:
      D = "ACESFilmic";
      break;
    case kI:
      D = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", M), D = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + D + "ToneMapping( color ); }";
}
function Ts(n) {
  return [
    n.extensionDerivatives || n.envMapCubeUV || n.bumpMap || n.tangentSpaceNormalMap || n.clearcoatNormalMap || n.flatShading || n.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (n.extensionFragDepth || n.logarithmicDepthBuffer) && n.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    n.extensionDrawBuffers && n.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (n.extensionShaderTextureLOD || n.envMap || n.transmission) && n.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(de).join(`
`);
}
function us(n) {
  const M = [];
  for (const D in n) {
    const t = n[D];
    t !== !1 && M.push("#define " + D + " " + t);
  }
  return M.join(`
`);
}
function gs(n, M) {
  const D = {}, t = n.getProgramParameter(M, 35721);
  for (let e = 0; e < t; e++) {
    const N = n.getActiveAttrib(M, e), A = N.name;
    let z = 1;
    N.type === 35674 && (z = 2), N.type === 35675 && (z = 3), N.type === 35676 && (z = 4), D[A] = {
      type: N.type,
      location: n.getAttribLocation(M, A),
      locationSize: z
    };
  }
  return D;
}
function de(n) {
  return n !== "";
}
function Lz(n, M) {
  return n.replace(/NUM_DIR_LIGHTS/g, M.numDirLights).replace(/NUM_SPOT_LIGHTS/g, M.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, M.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, M.numPointLights).replace(/NUM_HEMI_LIGHTS/g, M.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, M.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, M.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, M.numPointLightShadows);
}
function wz(n, M) {
  return n.replace(/NUM_CLIPPING_PLANES/g, M.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, M.numClippingPlanes - M.numClipIntersection);
}
const rs = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Kn(n) {
  return n.replace(rs, ss);
}
function ss(n, M) {
  const D = YM[M];
  if (D === void 0)
    throw new Error("Can not resolve #include <" + M + ">");
  return Kn(D);
}
const cs = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, js = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Oz(n) {
  return n.replace(js, xi).replace(cs, ys);
}
function ys(n, M, D, t) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), xi(n, M, D, t);
}
function xi(n, M, D, t) {
  let e = "";
  for (let N = parseInt(M); N < parseInt(D); N++)
    e += t.replace(/\[\s*i\s*\]/g, "[ " + N + " ]").replace(/UNROLLED_LOOP_INDEX/g, N);
  return e;
}
function xz(n) {
  let M = "precision " + n.precision + ` float;
precision ` + n.precision + " int;";
  return n.precision === "highp" ? M += `
#define HIGH_PRECISION` : n.precision === "mediump" ? M += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (M += `
#define LOW_PRECISION`), M;
}
function os(n) {
  let M = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === ti ? M = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === TI ? M = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === le && (M = "SHADOWMAP_TYPE_VSM"), M;
}
function as(n) {
  let M = "ENVMAP_TYPE_CUBE";
  if (n.envMap)
    switch (n.envMapMode) {
      case be:
      case Ke:
        M = "ENVMAP_TYPE_CUBE";
        break;
      case mN:
      case qn:
        M = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return M;
}
function Cs(n) {
  let M = "ENVMAP_MODE_REFLECTION";
  if (n.envMap)
    switch (n.envMapMode) {
      case Ke:
      case qn:
        M = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return M;
}
function Ls(n) {
  let M = "ENVMAP_BLENDING_NONE";
  if (n.envMap)
    switch (n.combine) {
      case fN:
        M = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case hI:
        M = "ENVMAP_BLENDING_MIX";
        break;
      case YI:
        M = "ENVMAP_BLENDING_ADD";
        break;
    }
  return M;
}
function ws(n, M, D, t) {
  const e = n.getContext(), N = D.defines;
  let A = D.vertexShader, z = D.fragmentShader;
  const I = os(D), i = as(D), T = Cs(D), u = Ls(D), g = D.isWebGL2 ? "" : Ts(D), s = us(N), j = e.createProgram();
  let y, a, c = D.glslVersion ? "#version " + D.glslVersion + `
` : "";
  D.isRawShaderMaterial ? (y = [
    s
  ].filter(de).join(`
`), y.length > 0 && (y += `
`), a = [
    g,
    s
  ].filter(de).join(`
`), a.length > 0 && (a += `
`)) : (y = [
    xz(D),
    "#define SHADER_NAME " + D.shaderName,
    s,
    D.instancing ? "#define USE_INSTANCING" : "",
    D.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    D.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    "#define MAX_BONES " + D.maxBones,
    D.useFog && D.fog ? "#define USE_FOG" : "",
    D.useFog && D.fogExp2 ? "#define FOG_EXP2" : "",
    D.map ? "#define USE_MAP" : "",
    D.envMap ? "#define USE_ENVMAP" : "",
    D.envMap ? "#define " + T : "",
    D.lightMap ? "#define USE_LIGHTMAP" : "",
    D.aoMap ? "#define USE_AOMAP" : "",
    D.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    D.bumpMap ? "#define USE_BUMPMAP" : "",
    D.normalMap ? "#define USE_NORMALMAP" : "",
    D.normalMap && D.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    D.normalMap && D.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    D.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    D.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    D.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    D.displacementMap && D.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    D.specularMap ? "#define USE_SPECULARMAP" : "",
    D.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    D.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    D.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    D.metalnessMap ? "#define USE_METALNESSMAP" : "",
    D.alphaMap ? "#define USE_ALPHAMAP" : "",
    D.transmission ? "#define USE_TRANSMISSION" : "",
    D.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    D.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    D.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    D.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    D.vertexTangents ? "#define USE_TANGENT" : "",
    D.vertexColors ? "#define USE_COLOR" : "",
    D.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    D.vertexUvs ? "#define USE_UV" : "",
    D.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    D.flatShading ? "#define FLAT_SHADED" : "",
    D.skinning ? "#define USE_SKINNING" : "",
    D.useVertexTexture ? "#define BONE_TEXTURE" : "",
    D.morphTargets ? "#define USE_MORPHTARGETS" : "",
    D.morphNormals && D.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    D.morphTargets && D.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    D.morphTargets && D.isWebGL2 ? "#define MORPHTARGETS_COUNT " + D.morphTargetsCount : "",
    D.doubleSided ? "#define DOUBLE_SIDED" : "",
    D.flipSided ? "#define FLIP_SIDED" : "",
    D.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    D.shadowMapEnabled ? "#define " + I : "",
    D.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    D.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    D.logarithmicDepthBuffer && D.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(de).join(`
`), a = [
    g,
    xz(D),
    "#define SHADER_NAME " + D.shaderName,
    s,
    D.useFog && D.fog ? "#define USE_FOG" : "",
    D.useFog && D.fogExp2 ? "#define FOG_EXP2" : "",
    D.map ? "#define USE_MAP" : "",
    D.matcap ? "#define USE_MATCAP" : "",
    D.envMap ? "#define USE_ENVMAP" : "",
    D.envMap ? "#define " + i : "",
    D.envMap ? "#define " + T : "",
    D.envMap ? "#define " + u : "",
    D.lightMap ? "#define USE_LIGHTMAP" : "",
    D.aoMap ? "#define USE_AOMAP" : "",
    D.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    D.bumpMap ? "#define USE_BUMPMAP" : "",
    D.normalMap ? "#define USE_NORMALMAP" : "",
    D.normalMap && D.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    D.normalMap && D.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    D.clearcoat ? "#define USE_CLEARCOAT" : "",
    D.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    D.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    D.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    D.specularMap ? "#define USE_SPECULARMAP" : "",
    D.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    D.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    D.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    D.metalnessMap ? "#define USE_METALNESSMAP" : "",
    D.alphaMap ? "#define USE_ALPHAMAP" : "",
    D.alphaTest ? "#define USE_ALPHATEST" : "",
    D.sheen ? "#define USE_SHEEN" : "",
    D.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    D.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    D.transmission ? "#define USE_TRANSMISSION" : "",
    D.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    D.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    D.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    D.vertexTangents ? "#define USE_TANGENT" : "",
    D.vertexColors || D.instancingColor ? "#define USE_COLOR" : "",
    D.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    D.vertexUvs ? "#define USE_UV" : "",
    D.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    D.gradientMap ? "#define USE_GRADIENTMAP" : "",
    D.flatShading ? "#define FLAT_SHADED" : "",
    D.doubleSided ? "#define DOUBLE_SIDED" : "",
    D.flipSided ? "#define FLIP_SIDED" : "",
    D.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    D.shadowMapEnabled ? "#define " + I : "",
    D.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    D.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    D.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    D.logarithmicDepthBuffer && D.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    (D.extensionShaderTextureLOD || D.envMap) && D.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    D.toneMapping !== it ? "#define TONE_MAPPING" : "",
    D.toneMapping !== it ? YM.tonemapping_pars_fragment : "",
    D.toneMapping !== it ? Is("toneMapping", D.toneMapping) : "",
    D.dithering ? "#define DITHERING" : "",
    D.transparent ? "" : "#define OPAQUE",
    YM.encodings_pars_fragment,
    is("linearToOutputTexel", D.outputEncoding),
    D.depthPacking ? "#define DEPTH_PACKING " + D.depthPacking : "",
    `
`
  ].filter(de).join(`
`)), A = Kn(A), A = Lz(A, D), A = wz(A, D), z = Kn(z), z = Lz(z, D), z = wz(z, D), A = Oz(A), z = Oz(z), D.isWebGL2 && D.isRawShaderMaterial !== !0 && (c = `#version 300 es
`, y = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + y, a = [
    "#define varying in",
    D.glslVersion === VA ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    D.glslVersion === VA ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + a);
  const r = c + y + A, l = c + a + z, C = az(e, 35633, r), E = az(e, 35632, l);
  if (e.attachShader(j, C), e.attachShader(j, E), D.index0AttributeName !== void 0 ? e.bindAttribLocation(j, 0, D.index0AttributeName) : D.morphTargets === !0 && e.bindAttribLocation(j, 0, "position"), e.linkProgram(j), n.debug.checkShaderErrors) {
    const H = e.getProgramInfoLog(j).trim(), DM = e.getShaderInfoLog(C).trim(), G = e.getShaderInfoLog(E).trim();
    let o = !0, h = !0;
    if (e.getProgramParameter(j, 35714) === !1) {
      o = !1;
      const Y = Cz(e, C, "vertex"), k = Cz(e, E, "fragment");
      console.error("THREE.WebGLProgram: Shader Error " + e.getError() + " - VALIDATE_STATUS " + e.getProgramParameter(j, 35715) + `

Program Info Log: ` + H + `
` + Y + `
` + k);
    } else
      H !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", H) : (DM === "" || G === "") && (h = !1);
    h && (this.diagnostics = {
      runnable: o,
      programLog: H,
      vertexShader: {
        log: DM,
        prefix: y
      },
      fragmentShader: {
        log: G,
        prefix: a
      }
    });
  }
  e.deleteShader(C), e.deleteShader(E);
  let d;
  this.getUniforms = function() {
    return d === void 0 && (d = new ut(e, j)), d;
  };
  let p;
  return this.getAttributes = function() {
    return p === void 0 && (p = gs(e, j)), p;
  }, this.destroy = function() {
    t.releaseStatesOfProgram(this), e.deleteProgram(j), this.program = void 0;
  }, this.name = D.shaderName, this.id = ns++, this.cacheKey = M, this.usedTimes = 1, this.program = j, this.vertexShader = C, this.fragmentShader = E, this;
}
let Os = 0;
class xs {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(M) {
    const D = M.vertexShader, t = M.fragmentShader, e = this._getShaderStage(D), N = this._getShaderStage(t), A = this._getShaderCacheForMaterial(M);
    return A.has(e) === !1 && (A.add(e), e.usedTimes++), A.has(N) === !1 && (A.add(N), N.usedTimes++), this;
  }
  remove(M) {
    const D = this.materialCache.get(M);
    for (const t of D)
      t.usedTimes--, t.usedTimes === 0 && this.shaderCache.delete(t);
    return this.materialCache.delete(M), this;
  }
  getVertexShaderID(M) {
    return this._getShaderStage(M.vertexShader).id;
  }
  getFragmentShaderID(M) {
    return this._getShaderStage(M.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(M) {
    const D = this.materialCache;
    return D.has(M) === !1 && D.set(M, /* @__PURE__ */ new Set()), D.get(M);
  }
  _getShaderStage(M) {
    const D = this.shaderCache;
    if (D.has(M) === !1) {
      const t = new Es();
      D.set(M, t);
    }
    return D.get(M);
  }
}
class Es {
  constructor() {
    this.id = Os++, this.usedTimes = 0;
  }
}
function ls(n, M, D, t, e, N, A) {
  const z = new Ti(), I = new xs(), i = [], T = e.isWebGL2, u = e.logarithmicDepthBuffer, g = e.floatVertexTextures, s = e.maxVertexUniforms, j = e.vertexTextures;
  let y = e.precision;
  const a = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function c(o) {
    const Y = o.skeleton.bones;
    if (g)
      return 1024;
    {
      const f = Math.floor((s - 20) / 4), Q = Math.min(f, Y.length);
      return Q < Y.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + Y.length + " bones. This GPU supports " + Q + "."), 0) : Q;
    }
  }
  function r(o, h, Y, k, f) {
    const Q = k.fog, b = o.isMeshStandardMaterial ? k.environment : null, W = (o.isMeshStandardMaterial ? D : M).get(o.envMap || b), IM = a[o.type], Z = f.isSkinnedMesh ? c(f) : 0;
    o.precision !== null && (y = e.getMaxPrecision(o.precision), y !== o.precision && console.warn("THREE.WebGLProgram.getParameters:", o.precision, "not supported, using", y, "instead."));
    let V, eM, uM, jM;
    if (IM) {
      const zM = _D[IM];
      V = zM.vertexShader, eM = zM.fragmentShader;
    } else
      V = o.vertexShader, eM = o.fragmentShader, I.update(o), uM = I.getVertexShaderID(o), jM = I.getFragmentShaderID(o);
    const _ = n.getRenderTarget(), kM = o.alphaTest > 0, rM = o.clearcoat > 0;
    return {
      isWebGL2: T,
      shaderID: IM,
      shaderName: o.type,
      vertexShader: V,
      fragmentShader: eM,
      defines: o.defines,
      customVertexShaderID: uM,
      customFragmentShaderID: jM,
      isRawShaderMaterial: o.isRawShaderMaterial === !0,
      glslVersion: o.glslVersion,
      precision: y,
      instancing: f.isInstancedMesh === !0,
      instancingColor: f.isInstancedMesh === !0 && f.instanceColor !== null,
      supportsVertexTextures: j,
      outputEncoding: _ === null ? n.outputEncoding : _.isXRRenderTarget === !0 ? _.texture.encoding : st,
      map: !!o.map,
      matcap: !!o.matcap,
      envMap: !!W,
      envMapMode: W && W.mapping,
      envMapCubeUV: !!W && (W.mapping === mN || W.mapping === qn),
      lightMap: !!o.lightMap,
      aoMap: !!o.aoMap,
      emissiveMap: !!o.emissiveMap,
      bumpMap: !!o.bumpMap,
      normalMap: !!o.normalMap,
      objectSpaceNormalMap: o.normalMapType === nT,
      tangentSpaceNormalMap: o.normalMapType === ie,
      decodeVideoTexture: !!o.map && o.map.isVideoTexture === !0 && o.map.encoding === HM,
      clearcoat: rM,
      clearcoatMap: rM && !!o.clearcoatMap,
      clearcoatRoughnessMap: rM && !!o.clearcoatRoughnessMap,
      clearcoatNormalMap: rM && !!o.clearcoatNormalMap,
      displacementMap: !!o.displacementMap,
      roughnessMap: !!o.roughnessMap,
      metalnessMap: !!o.metalnessMap,
      specularMap: !!o.specularMap,
      specularIntensityMap: !!o.specularIntensityMap,
      specularColorMap: !!o.specularColorMap,
      transparent: o.transparent,
      alphaMap: !!o.alphaMap,
      alphaTest: kM,
      gradientMap: !!o.gradientMap,
      sheen: o.sheen > 0,
      sheenColorMap: !!o.sheenColorMap,
      sheenRoughnessMap: !!o.sheenRoughnessMap,
      transmission: o.transmission > 0,
      transmissionMap: !!o.transmissionMap,
      thicknessMap: !!o.thicknessMap,
      combine: o.combine,
      vertexTangents: !!o.normalMap && !!f.geometry && !!f.geometry.attributes.tangent,
      vertexColors: o.vertexColors,
      vertexAlphas: o.vertexColors === !0 && !!f.geometry && !!f.geometry.attributes.color && f.geometry.attributes.color.itemSize === 4,
      vertexUvs: !!o.map || !!o.bumpMap || !!o.normalMap || !!o.specularMap || !!o.alphaMap || !!o.emissiveMap || !!o.roughnessMap || !!o.metalnessMap || !!o.clearcoatMap || !!o.clearcoatRoughnessMap || !!o.clearcoatNormalMap || !!o.displacementMap || !!o.transmissionMap || !!o.thicknessMap || !!o.specularIntensityMap || !!o.specularColorMap || !!o.sheenColorMap || !!o.sheenRoughnessMap,
      uvsVertexOnly: !(!!o.map || !!o.bumpMap || !!o.normalMap || !!o.specularMap || !!o.alphaMap || !!o.emissiveMap || !!o.roughnessMap || !!o.metalnessMap || !!o.clearcoatNormalMap || o.transmission > 0 || !!o.transmissionMap || !!o.thicknessMap || !!o.specularIntensityMap || !!o.specularColorMap || o.sheen > 0 || !!o.sheenColorMap || !!o.sheenRoughnessMap) && !!o.displacementMap,
      fog: !!Q,
      useFog: o.fog,
      fogExp2: Q && Q.isFogExp2,
      flatShading: !!o.flatShading,
      sizeAttenuation: o.sizeAttenuation,
      logarithmicDepthBuffer: u,
      skinning: f.isSkinnedMesh === !0 && Z > 0,
      maxBones: Z,
      useVertexTexture: g,
      morphTargets: !!f.geometry && !!f.geometry.morphAttributes.position,
      morphNormals: !!f.geometry && !!f.geometry.morphAttributes.normal,
      morphTargetsCount: !!f.geometry && !!f.geometry.morphAttributes.position ? f.geometry.morphAttributes.position.length : 0,
      numDirLights: h.directional.length,
      numPointLights: h.point.length,
      numSpotLights: h.spot.length,
      numRectAreaLights: h.rectArea.length,
      numHemiLights: h.hemi.length,
      numDirLightShadows: h.directionalShadowMap.length,
      numPointLightShadows: h.pointShadowMap.length,
      numSpotLightShadows: h.spotShadowMap.length,
      numClippingPlanes: A.numPlanes,
      numClipIntersection: A.numIntersection,
      dithering: o.dithering,
      shadowMapEnabled: n.shadowMap.enabled && Y.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: o.toneMapped ? n.toneMapping : it,
      physicallyCorrectLights: n.physicallyCorrectLights,
      premultipliedAlpha: o.premultipliedAlpha,
      doubleSided: o.side === Ne,
      flipSided: o.side === eD,
      depthPacking: o.depthPacking !== void 0 ? o.depthPacking : !1,
      index0AttributeName: o.index0AttributeName,
      extensionDerivatives: o.extensions && o.extensions.derivatives,
      extensionFragDepth: o.extensions && o.extensions.fragDepth,
      extensionDrawBuffers: o.extensions && o.extensions.drawBuffers,
      extensionShaderTextureLOD: o.extensions && o.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: T || t.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: T || t.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: T || t.has("EXT_shader_texture_lod"),
      customProgramCacheKey: o.customProgramCacheKey()
    };
  }
  function l(o) {
    const h = [];
    if (o.shaderID ? h.push(o.shaderID) : (h.push(o.customVertexShaderID), h.push(o.customFragmentShaderID)), o.defines !== void 0)
      for (const Y in o.defines)
        h.push(Y), h.push(o.defines[Y]);
    return o.isRawShaderMaterial === !1 && (C(h, o), E(h, o), h.push(n.outputEncoding)), h.push(o.customProgramCacheKey), h.join();
  }
  function C(o, h) {
    o.push(h.precision), o.push(h.outputEncoding), o.push(h.envMapMode), o.push(h.combine), o.push(h.vertexUvs), o.push(h.fogExp2), o.push(h.sizeAttenuation), o.push(h.maxBones), o.push(h.morphTargetsCount), o.push(h.numDirLights), o.push(h.numPointLights), o.push(h.numSpotLights), o.push(h.numHemiLights), o.push(h.numRectAreaLights), o.push(h.numDirLightShadows), o.push(h.numPointLightShadows), o.push(h.numSpotLightShadows), o.push(h.shadowMapType), o.push(h.toneMapping), o.push(h.numClippingPlanes), o.push(h.numClipIntersection);
  }
  function E(o, h) {
    z.disableAll(), h.isWebGL2 && z.enable(0), h.supportsVertexTextures && z.enable(1), h.instancing && z.enable(2), h.instancingColor && z.enable(3), h.map && z.enable(4), h.matcap && z.enable(5), h.envMap && z.enable(6), h.envMapCubeUV && z.enable(7), h.lightMap && z.enable(8), h.aoMap && z.enable(9), h.emissiveMap && z.enable(10), h.bumpMap && z.enable(11), h.normalMap && z.enable(12), h.objectSpaceNormalMap && z.enable(13), h.tangentSpaceNormalMap && z.enable(14), h.clearcoat && z.enable(15), h.clearcoatMap && z.enable(16), h.clearcoatRoughnessMap && z.enable(17), h.clearcoatNormalMap && z.enable(18), h.displacementMap && z.enable(19), h.specularMap && z.enable(20), h.roughnessMap && z.enable(21), h.metalnessMap && z.enable(22), h.gradientMap && z.enable(23), h.alphaMap && z.enable(24), h.alphaTest && z.enable(25), h.vertexColors && z.enable(26), h.vertexAlphas && z.enable(27), h.vertexUvs && z.enable(28), h.vertexTangents && z.enable(29), h.uvsVertexOnly && z.enable(30), h.fog && z.enable(31), o.push(z.mask), z.disableAll(), h.useFog && z.enable(0), h.flatShading && z.enable(1), h.logarithmicDepthBuffer && z.enable(2), h.skinning && z.enable(3), h.useVertexTexture && z.enable(4), h.morphTargets && z.enable(5), h.morphNormals && z.enable(6), h.premultipliedAlpha && z.enable(7), h.shadowMapEnabled && z.enable(8), h.physicallyCorrectLights && z.enable(9), h.doubleSided && z.enable(10), h.flipSided && z.enable(11), h.depthPacking && z.enable(12), h.dithering && z.enable(13), h.specularIntensityMap && z.enable(14), h.specularColorMap && z.enable(15), h.transmission && z.enable(16), h.transmissionMap && z.enable(17), h.thicknessMap && z.enable(18), h.sheen && z.enable(19), h.sheenColorMap && z.enable(20), h.sheenRoughnessMap && z.enable(21), h.decodeVideoTexture && z.enable(22), h.transparent && z.enable(23), o.push(z.mask);
  }
  function d(o) {
    const h = a[o.type];
    let Y;
    if (h) {
      const k = _D[h];
      Y = wT.clone(k.uniforms);
    } else
      Y = o.uniforms;
    return Y;
  }
  function p(o, h) {
    let Y;
    for (let k = 0, f = i.length; k < f; k++) {
      const Q = i[k];
      if (Q.cacheKey === h) {
        Y = Q, ++Y.usedTimes;
        break;
      }
    }
    return Y === void 0 && (Y = new ws(n, h, o, N), i.push(Y)), Y;
  }
  function H(o) {
    if (--o.usedTimes === 0) {
      const h = i.indexOf(o);
      i[h] = i[i.length - 1], i.pop(), o.destroy();
    }
  }
  function DM(o) {
    I.remove(o);
  }
  function G() {
    I.dispose();
  }
  return {
    getParameters: r,
    getProgramCacheKey: l,
    getUniforms: d,
    acquireProgram: p,
    releaseProgram: H,
    releaseShaderCache: DM,
    programs: i,
    dispose: G
  };
}
function ds() {
  let n = /* @__PURE__ */ new WeakMap();
  function M(N) {
    let A = n.get(N);
    return A === void 0 && (A = {}, n.set(N, A)), A;
  }
  function D(N) {
    n.delete(N);
  }
  function t(N, A, z) {
    n.get(N)[A] = z;
  }
  function e() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: M,
    remove: D,
    update: t,
    dispose: e
  };
}
function vs(n, M) {
  return n.groupOrder !== M.groupOrder ? n.groupOrder - M.groupOrder : n.renderOrder !== M.renderOrder ? n.renderOrder - M.renderOrder : n.material.id !== M.material.id ? n.material.id - M.material.id : n.z !== M.z ? n.z - M.z : n.id - M.id;
}
function Ez(n, M) {
  return n.groupOrder !== M.groupOrder ? n.groupOrder - M.groupOrder : n.renderOrder !== M.renderOrder ? n.renderOrder - M.renderOrder : n.z !== M.z ? M.z - n.z : n.id - M.id;
}
function lz() {
  const n = [];
  let M = 0;
  const D = [], t = [], e = [];
  function N() {
    M = 0, D.length = 0, t.length = 0, e.length = 0;
  }
  function A(u, g, s, j, y, a) {
    let c = n[M];
    return c === void 0 ? (c = {
      id: u.id,
      object: u,
      geometry: g,
      material: s,
      groupOrder: j,
      renderOrder: u.renderOrder,
      z: y,
      group: a
    }, n[M] = c) : (c.id = u.id, c.object = u, c.geometry = g, c.material = s, c.groupOrder = j, c.renderOrder = u.renderOrder, c.z = y, c.group = a), M++, c;
  }
  function z(u, g, s, j, y, a) {
    const c = A(u, g, s, j, y, a);
    s.transmission > 0 ? t.push(c) : s.transparent === !0 ? e.push(c) : D.push(c);
  }
  function I(u, g, s, j, y, a) {
    const c = A(u, g, s, j, y, a);
    s.transmission > 0 ? t.unshift(c) : s.transparent === !0 ? e.unshift(c) : D.unshift(c);
  }
  function i(u, g) {
    D.length > 1 && D.sort(u || vs), t.length > 1 && t.sort(g || Ez), e.length > 1 && e.sort(g || Ez);
  }
  function T() {
    for (let u = M, g = n.length; u < g; u++) {
      const s = n[u];
      if (s.id === null)
        break;
      s.id = null, s.object = null, s.geometry = null, s.material = null, s.group = null;
    }
  }
  return {
    opaque: D,
    transmissive: t,
    transparent: e,
    init: N,
    push: z,
    unshift: I,
    finish: T,
    sort: i
  };
}
function ps() {
  let n = /* @__PURE__ */ new WeakMap();
  function M(t, e) {
    let N;
    return n.has(t) === !1 ? (N = new lz(), n.set(t, [N])) : e >= n.get(t).length ? (N = new lz(), n.get(t).push(N)) : N = n.get(t)[e], N;
  }
  function D() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: M,
    dispose: D
  };
}
function hs() {
  const n = {};
  return {
    get: function(M) {
      if (n[M.id] !== void 0)
        return n[M.id];
      let D;
      switch (M.type) {
        case "DirectionalLight":
          D = {
            direction: new O(),
            color: new cM()
          };
          break;
        case "SpotLight":
          D = {
            position: new O(),
            direction: new O(),
            color: new cM(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          D = {
            position: new O(),
            color: new cM(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          D = {
            direction: new O(),
            skyColor: new cM(),
            groundColor: new cM()
          };
          break;
        case "RectAreaLight":
          D = {
            color: new cM(),
            position: new O(),
            halfWidth: new O(),
            halfHeight: new O()
          };
          break;
      }
      return n[M.id] = D, D;
    }
  };
}
function Ys() {
  const n = {};
  return {
    get: function(M) {
      if (n[M.id] !== void 0)
        return n[M.id];
      let D;
      switch (M.type) {
        case "DirectionalLight":
          D = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q()
          };
          break;
        case "SpotLight":
          D = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q()
          };
          break;
        case "PointLight":
          D = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new q(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return n[M.id] = D, D;
    }
  };
}
let Us = 0;
function Qs(n, M) {
  return (M.castShadow ? 1 : 0) - (n.castShadow ? 1 : 0);
}
function fs(n, M) {
  const D = new hs(), t = Ys(), e = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotShadow: [],
    spotShadowMap: [],
    spotShadowMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: []
  };
  for (let T = 0; T < 9; T++)
    e.probe.push(new O());
  const N = new O(), A = new aM(), z = new aM();
  function I(T, u) {
    let g = 0, s = 0, j = 0;
    for (let DM = 0; DM < 9; DM++)
      e.probe[DM].set(0, 0, 0);
    let y = 0, a = 0, c = 0, r = 0, l = 0, C = 0, E = 0, d = 0;
    T.sort(Qs);
    const p = u !== !0 ? Math.PI : 1;
    for (let DM = 0, G = T.length; DM < G; DM++) {
      const o = T[DM], h = o.color, Y = o.intensity, k = o.distance, f = o.shadow && o.shadow.map ? o.shadow.map.texture : null;
      if (o.isAmbientLight)
        g += h.r * Y * p, s += h.g * Y * p, j += h.b * Y * p;
      else if (o.isLightProbe)
        for (let Q = 0; Q < 9; Q++)
          e.probe[Q].addScaledVector(o.sh.coefficients[Q], Y);
      else if (o.isDirectionalLight) {
        const Q = D.get(o);
        if (Q.color.copy(o.color).multiplyScalar(o.intensity * p), o.castShadow) {
          const b = o.shadow, W = t.get(o);
          W.shadowBias = b.bias, W.shadowNormalBias = b.normalBias, W.shadowRadius = b.radius, W.shadowMapSize = b.mapSize, e.directionalShadow[y] = W, e.directionalShadowMap[y] = f, e.directionalShadowMatrix[y] = o.shadow.matrix, C++;
        }
        e.directional[y] = Q, y++;
      } else if (o.isSpotLight) {
        const Q = D.get(o);
        if (Q.position.setFromMatrixPosition(o.matrixWorld), Q.color.copy(h).multiplyScalar(Y * p), Q.distance = k, Q.coneCos = Math.cos(o.angle), Q.penumbraCos = Math.cos(o.angle * (1 - o.penumbra)), Q.decay = o.decay, o.castShadow) {
          const b = o.shadow, W = t.get(o);
          W.shadowBias = b.bias, W.shadowNormalBias = b.normalBias, W.shadowRadius = b.radius, W.shadowMapSize = b.mapSize, e.spotShadow[c] = W, e.spotShadowMap[c] = f, e.spotShadowMatrix[c] = o.shadow.matrix, d++;
        }
        e.spot[c] = Q, c++;
      } else if (o.isRectAreaLight) {
        const Q = D.get(o);
        Q.color.copy(h).multiplyScalar(Y), Q.halfWidth.set(o.width * 0.5, 0, 0), Q.halfHeight.set(0, o.height * 0.5, 0), e.rectArea[r] = Q, r++;
      } else if (o.isPointLight) {
        const Q = D.get(o);
        if (Q.color.copy(o.color).multiplyScalar(o.intensity * p), Q.distance = o.distance, Q.decay = o.decay, o.castShadow) {
          const b = o.shadow, W = t.get(o);
          W.shadowBias = b.bias, W.shadowNormalBias = b.normalBias, W.shadowRadius = b.radius, W.shadowMapSize = b.mapSize, W.shadowCameraNear = b.camera.near, W.shadowCameraFar = b.camera.far, e.pointShadow[a] = W, e.pointShadowMap[a] = f, e.pointShadowMatrix[a] = o.shadow.matrix, E++;
        }
        e.point[a] = Q, a++;
      } else if (o.isHemisphereLight) {
        const Q = D.get(o);
        Q.skyColor.copy(o.color).multiplyScalar(Y * p), Q.groundColor.copy(o.groundColor).multiplyScalar(Y * p), e.hemi[l] = Q, l++;
      }
    }
    r > 0 && (M.isWebGL2 || n.has("OES_texture_float_linear") === !0 ? (e.rectAreaLTC1 = MM.LTC_FLOAT_1, e.rectAreaLTC2 = MM.LTC_FLOAT_2) : n.has("OES_texture_half_float_linear") === !0 ? (e.rectAreaLTC1 = MM.LTC_HALF_1, e.rectAreaLTC2 = MM.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), e.ambient[0] = g, e.ambient[1] = s, e.ambient[2] = j;
    const H = e.hash;
    (H.directionalLength !== y || H.pointLength !== a || H.spotLength !== c || H.rectAreaLength !== r || H.hemiLength !== l || H.numDirectionalShadows !== C || H.numPointShadows !== E || H.numSpotShadows !== d) && (e.directional.length = y, e.spot.length = c, e.rectArea.length = r, e.point.length = a, e.hemi.length = l, e.directionalShadow.length = C, e.directionalShadowMap.length = C, e.pointShadow.length = E, e.pointShadowMap.length = E, e.spotShadow.length = d, e.spotShadowMap.length = d, e.directionalShadowMatrix.length = C, e.pointShadowMatrix.length = E, e.spotShadowMatrix.length = d, H.directionalLength = y, H.pointLength = a, H.spotLength = c, H.rectAreaLength = r, H.hemiLength = l, H.numDirectionalShadows = C, H.numPointShadows = E, H.numSpotShadows = d, e.version = Us++);
  }
  function i(T, u) {
    let g = 0, s = 0, j = 0, y = 0, a = 0;
    const c = u.matrixWorldInverse;
    for (let r = 0, l = T.length; r < l; r++) {
      const C = T[r];
      if (C.isDirectionalLight) {
        const E = e.directional[g];
        E.direction.setFromMatrixPosition(C.matrixWorld), N.setFromMatrixPosition(C.target.matrixWorld), E.direction.sub(N), E.direction.transformDirection(c), g++;
      } else if (C.isSpotLight) {
        const E = e.spot[j];
        E.position.setFromMatrixPosition(C.matrixWorld), E.position.applyMatrix4(c), E.direction.setFromMatrixPosition(C.matrixWorld), N.setFromMatrixPosition(C.target.matrixWorld), E.direction.sub(N), E.direction.transformDirection(c), j++;
      } else if (C.isRectAreaLight) {
        const E = e.rectArea[y];
        E.position.setFromMatrixPosition(C.matrixWorld), E.position.applyMatrix4(c), z.identity(), A.copy(C.matrixWorld), A.premultiply(c), z.extractRotation(A), E.halfWidth.set(C.width * 0.5, 0, 0), E.halfHeight.set(0, C.height * 0.5, 0), E.halfWidth.applyMatrix4(z), E.halfHeight.applyMatrix4(z), y++;
      } else if (C.isPointLight) {
        const E = e.point[s];
        E.position.setFromMatrixPosition(C.matrixWorld), E.position.applyMatrix4(c), s++;
      } else if (C.isHemisphereLight) {
        const E = e.hemi[a];
        E.direction.setFromMatrixPosition(C.matrixWorld), E.direction.transformDirection(c), E.direction.normalize(), a++;
      }
    }
  }
  return {
    setup: I,
    setupView: i,
    state: e
  };
}
function dz(n, M) {
  const D = new fs(n, M), t = [], e = [];
  function N() {
    t.length = 0, e.length = 0;
  }
  function A(u) {
    t.push(u);
  }
  function z(u) {
    e.push(u);
  }
  function I(u) {
    D.setup(t, u);
  }
  function i(u) {
    D.setupView(t, u);
  }
  return {
    init: N,
    state: {
      lightsArray: t,
      shadowsArray: e,
      lights: D
    },
    setupLights: I,
    setupLightsView: i,
    pushLight: A,
    pushShadow: z
  };
}
function ms(n, M) {
  let D = /* @__PURE__ */ new WeakMap();
  function t(N, A = 0) {
    let z;
    return D.has(N) === !1 ? (z = new dz(n, M), D.set(N, [z])) : A >= D.get(N).length ? (z = new dz(n, M), D.get(N).push(z)) : z = D.get(N)[A], z;
  }
  function e() {
    D = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
class Ei extends ID {
  constructor(M) {
    super(), this.type = "MeshDepthMaterial", this.depthPacking = eT, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.depthPacking = M.depthPacking, this.map = M.map, this.alphaMap = M.alphaMap, this.displacementMap = M.displacementMap, this.displacementScale = M.displacementScale, this.displacementBias = M.displacementBias, this.wireframe = M.wireframe, this.wireframeLinewidth = M.wireframeLinewidth, this;
  }
}
Ei.prototype.isMeshDepthMaterial = !0;
class li extends ID {
  constructor(M) {
    super(), this.type = "MeshDistanceMaterial", this.referencePosition = new O(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.referencePosition.copy(M.referencePosition), this.nearDistance = M.nearDistance, this.farDistance = M.farDistance, this.map = M.map, this.alphaMap = M.alphaMap, this.displacementMap = M.displacementMap, this.displacementScale = M.displacementScale, this.displacementBias = M.displacementBias, this;
  }
}
li.prototype.isMeshDistanceMaterial = !0;
const ks = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ss = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function di(n, M, D) {
  let t = new ZN();
  const e = new q(), N = new q(), A = new PM(), z = new Ei({ depthPacking: NT }), I = new li(), i = {}, T = D.maxTextureSize, u = { 0: eD, 1: Ye, 2: Ne }, g = new lt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new q() },
      radius: { value: 4 }
    },
    vertexShader: ks,
    fragmentShader: Ss
  }), s = g.clone();
  s.defines.HORIZONTAL_PASS = 1;
  const j = new VM();
  j.setAttribute("position", new AD(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const y = new nD(j, g), a = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = ti, this.render = function(C, E, d) {
    if (a.enabled === !1 || a.autoUpdate === !1 && a.needsUpdate === !1 || C.length === 0)
      return;
    const p = n.getRenderTarget(), H = n.getActiveCubeFace(), DM = n.getActiveMipmapLevel(), G = n.state;
    G.setBlending(zt), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(!0), G.setScissorTest(!1);
    for (let o = 0, h = C.length; o < h; o++) {
      const Y = C[o], k = Y.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", Y, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1)
        continue;
      e.copy(k.mapSize);
      const f = k.getFrameExtents();
      if (e.multiply(f), N.copy(k.mapSize), (e.x > T || e.y > T) && (e.x > T && (N.x = Math.floor(T / f.x), e.x = N.x * f.x, k.mapSize.x = N.x), e.y > T && (N.y = Math.floor(T / f.y), e.y = N.y * f.y, k.mapSize.y = N.y)), k.map === null && !k.isPointLightShadow && this.type === le) {
        const b = { minFilter: uD, magFilter: uD, format: yD };
        k.map = new dD(e.x, e.y, b), k.map.texture.name = Y.name + ".shadowMap", k.mapPass = new dD(e.x, e.y, b), k.camera.updateProjectionMatrix();
      }
      if (k.map === null) {
        const b = { minFilter: ND, magFilter: ND, format: yD };
        k.map = new dD(e.x, e.y, b), k.map.texture.name = Y.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(k.map), n.clear();
      const Q = k.getViewportCount();
      for (let b = 0; b < Q; b++) {
        const W = k.getViewport(b);
        A.set(N.x * W.x, N.y * W.y, N.x * W.z, N.y * W.w), G.viewport(A), k.updateMatrices(Y, b), t = k.getFrustum(), l(E, d, k.camera, Y, this.type);
      }
      !k.isPointLightShadow && this.type === le && c(k, d), k.needsUpdate = !1;
    }
    a.needsUpdate = !1, n.setRenderTarget(p, H, DM);
  };
  function c(C, E) {
    const d = M.update(y);
    g.defines.VSM_SAMPLES !== C.blurSamples && (g.defines.VSM_SAMPLES = C.blurSamples, s.defines.VSM_SAMPLES = C.blurSamples, g.needsUpdate = !0, s.needsUpdate = !0), g.uniforms.shadow_pass.value = C.map.texture, g.uniforms.resolution.value = C.mapSize, g.uniforms.radius.value = C.radius, n.setRenderTarget(C.mapPass), n.clear(), n.renderBufferDirect(E, null, d, g, y, null), s.uniforms.shadow_pass.value = C.mapPass.texture, s.uniforms.resolution.value = C.mapSize, s.uniforms.radius.value = C.radius, n.setRenderTarget(C.map), n.clear(), n.renderBufferDirect(E, null, d, s, y, null);
  }
  function r(C, E, d, p, H, DM, G) {
    let o = null;
    const h = p.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (h !== void 0 ? o = h : o = p.isPointLight === !0 ? I : z, n.localClippingEnabled && d.clipShadows === !0 && d.clippingPlanes.length !== 0 || d.displacementMap && d.displacementScale !== 0 || d.alphaMap && d.alphaTest > 0) {
      const Y = o.uuid, k = d.uuid;
      let f = i[Y];
      f === void 0 && (f = {}, i[Y] = f);
      let Q = f[k];
      Q === void 0 && (Q = o.clone(), f[k] = Q), o = Q;
    }
    return o.visible = d.visible, o.wireframe = d.wireframe, G === le ? o.side = d.shadowSide !== null ? d.shadowSide : d.side : o.side = d.shadowSide !== null ? d.shadowSide : u[d.side], o.alphaMap = d.alphaMap, o.alphaTest = d.alphaTest, o.clipShadows = d.clipShadows, o.clippingPlanes = d.clippingPlanes, o.clipIntersection = d.clipIntersection, o.displacementMap = d.displacementMap, o.displacementScale = d.displacementScale, o.displacementBias = d.displacementBias, o.wireframeLinewidth = d.wireframeLinewidth, o.linewidth = d.linewidth, p.isPointLight === !0 && o.isMeshDistanceMaterial === !0 && (o.referencePosition.setFromMatrixPosition(p.matrixWorld), o.nearDistance = H, o.farDistance = DM), o;
  }
  function l(C, E, d, p, H) {
    if (C.visible === !1)
      return;
    if (C.layers.test(E.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && H === le) && (!C.frustumCulled || t.intersectsObject(C))) {
      C.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, C.matrixWorld);
      const o = M.update(C), h = C.material;
      if (Array.isArray(h)) {
        const Y = o.groups;
        for (let k = 0, f = Y.length; k < f; k++) {
          const Q = Y[k], b = h[Q.materialIndex];
          if (b && b.visible) {
            const W = r(C, o, b, p, d.near, d.far, H);
            n.renderBufferDirect(d, null, o, W, C, Q);
          }
        }
      } else if (h.visible) {
        const Y = r(C, o, h, p, d.near, d.far, H);
        n.renderBufferDirect(d, null, o, Y, C, null);
      }
    }
    const G = C.children;
    for (let o = 0, h = G.length; o < h; o++)
      l(G[o], E, d, p, H);
  }
}
function Zs(n, M, D) {
  const t = D.isWebGL2;
  function e() {
    let v = !1;
    const TM = new PM();
    let AM = null;
    const LM = new PM(0, 0, 0, 0);
    return {
      setMask: function(F) {
        AM !== F && !v && (n.colorMask(F, F, F, F), AM = F);
      },
      setLocked: function(F) {
        v = F;
      },
      setClear: function(F, oM, UM, qM, CD) {
        CD === !0 && (F *= qM, oM *= qM, UM *= qM), TM.set(F, oM, UM, qM), LM.equals(TM) === !1 && (n.clearColor(F, oM, UM, qM), LM.copy(TM));
      },
      reset: function() {
        v = !1, AM = null, LM.set(-1, 0, 0, 0);
      }
    };
  }
  function N() {
    let v = !1, TM = null, AM = null, LM = null;
    return {
      setTest: function(F) {
        F ? _(2929) : kM(2929);
      },
      setMask: function(F) {
        TM !== F && !v && (n.depthMask(F), TM = F);
      },
      setFunc: function(F) {
        if (AM !== F) {
          if (F)
            switch (F) {
              case OI:
                n.depthFunc(512);
                break;
              case xI:
                n.depthFunc(519);
                break;
              case EI:
                n.depthFunc(513);
                break;
              case fn:
                n.depthFunc(515);
                break;
              case lI:
                n.depthFunc(514);
                break;
              case dI:
                n.depthFunc(518);
                break;
              case vI:
                n.depthFunc(516);
                break;
              case pI:
                n.depthFunc(517);
                break;
              default:
                n.depthFunc(515);
            }
          else
            n.depthFunc(515);
          AM = F;
        }
      },
      setLocked: function(F) {
        v = F;
      },
      setClear: function(F) {
        LM !== F && (n.clearDepth(F), LM = F);
      },
      reset: function() {
        v = !1, TM = null, AM = null, LM = null;
      }
    };
  }
  function A() {
    let v = !1, TM = null, AM = null, LM = null, F = null, oM = null, UM = null, qM = null, CD = null;
    return {
      setTest: function(JM) {
        v || (JM ? _(2960) : kM(2960));
      },
      setMask: function(JM) {
        TM !== JM && !v && (n.stencilMask(JM), TM = JM);
      },
      setFunc: function(JM, fD, PD) {
        (AM !== JM || LM !== fD || F !== PD) && (n.stencilFunc(JM, fD, PD), AM = JM, LM = fD, F = PD);
      },
      setOp: function(JM, fD, PD) {
        (oM !== JM || UM !== fD || qM !== PD) && (n.stencilOp(JM, fD, PD), oM = JM, UM = fD, qM = PD);
      },
      setLocked: function(JM) {
        v = JM;
      },
      setClear: function(JM) {
        CD !== JM && (n.clearStencil(JM), CD = JM);
      },
      reset: function() {
        v = !1, TM = null, AM = null, LM = null, F = null, oM = null, UM = null, qM = null, CD = null;
      }
    };
  }
  const z = new e(), I = new N(), i = new A();
  let T = {}, u = {}, g = /* @__PURE__ */ new WeakMap(), s = [], j = null, y = !1, a = null, c = null, r = null, l = null, C = null, E = null, d = null, p = !1, H = null, DM = null, G = null, o = null, h = null;
  const Y = n.getParameter(35661);
  let k = !1, f = 0;
  const Q = n.getParameter(7938);
  Q.indexOf("WebGL") !== -1 ? (f = parseFloat(/^WebGL (\d)/.exec(Q)[1]), k = f >= 1) : Q.indexOf("OpenGL ES") !== -1 && (f = parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]), k = f >= 2);
  let b = null, W = {};
  const IM = n.getParameter(3088), Z = n.getParameter(2978), V = new PM().fromArray(IM), eM = new PM().fromArray(Z);
  function uM(v, TM, AM) {
    const LM = new Uint8Array(4), F = n.createTexture();
    n.bindTexture(v, F), n.texParameteri(v, 10241, 9728), n.texParameteri(v, 10240, 9728);
    for (let oM = 0; oM < AM; oM++)
      n.texImage2D(TM + oM, 0, 6408, 1, 1, 0, 6408, 5121, LM);
    return F;
  }
  const jM = {};
  jM[3553] = uM(3553, 3553, 1), jM[34067] = uM(34067, 34069, 6), z.setClear(0, 0, 0, 1), I.setClear(1), i.setClear(0), _(2929), I.setFunc(fn), X(!1), iM(yA), _(2884), P(zt);
  function _(v) {
    T[v] !== !0 && (n.enable(v), T[v] = !0);
  }
  function kM(v) {
    T[v] !== !1 && (n.disable(v), T[v] = !1);
  }
  function rM(v, TM) {
    return u[v] !== TM ? (n.bindFramebuffer(v, TM), u[v] = TM, t && (v === 36009 && (u[36160] = TM), v === 36160 && (u[36009] = TM)), !0) : !1;
  }
  function wM(v, TM) {
    let AM = s, LM = !1;
    if (v)
      if (AM = g.get(TM), AM === void 0 && (AM = [], g.set(TM, AM)), v.isWebGLMultipleRenderTargets) {
        const F = v.texture;
        if (AM.length !== F.length || AM[0] !== 36064) {
          for (let oM = 0, UM = F.length; oM < UM; oM++)
            AM[oM] = 36064 + oM;
          AM.length = F.length, LM = !0;
        }
      } else
        AM[0] !== 36064 && (AM[0] = 36064, LM = !0);
    else
      AM[0] !== 1029 && (AM[0] = 1029, LM = !0);
    LM && (D.isWebGL2 ? n.drawBuffers(AM) : M.get("WEBGL_draw_buffers").drawBuffersWEBGL(AM));
  }
  function zM(v) {
    return j !== v ? (n.useProgram(v), j = v, !0) : !1;
  }
  const vM = {
    [Wt]: 32774,
    [gI]: 32778,
    [rI]: 32779
  };
  if (t)
    vM[LA] = 32775, vM[wA] = 32776;
  else {
    const v = M.get("EXT_blend_minmax");
    v !== null && (vM[LA] = v.MIN_EXT, vM[wA] = v.MAX_EXT);
  }
  const OM = {
    [sI]: 0,
    [cI]: 1,
    [jI]: 768,
    [Ni]: 770,
    [wI]: 776,
    [CI]: 774,
    [oI]: 772,
    [yI]: 769,
    [ni]: 771,
    [LI]: 775,
    [aI]: 773
  };
  function P(v, TM, AM, LM, F, oM, UM, qM) {
    if (v === zt) {
      y === !0 && (kM(3042), y = !1);
      return;
    }
    if (y === !1 && (_(3042), y = !0), v !== uI) {
      if (v !== a || qM !== p) {
        if ((c !== Wt || C !== Wt) && (n.blendEquation(32774), c = Wt, C = Wt), qM)
          switch (v) {
            case ve:
              n.blendFuncSeparate(1, 771, 1, 771);
              break;
            case oA:
              n.blendFunc(1, 1);
              break;
            case aA:
              n.blendFuncSeparate(0, 769, 0, 1);
              break;
            case CA:
              n.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", v);
              break;
          }
        else
          switch (v) {
            case ve:
              n.blendFuncSeparate(770, 771, 1, 771);
              break;
            case oA:
              n.blendFunc(770, 1);
              break;
            case aA:
              n.blendFuncSeparate(0, 769, 0, 1);
              break;
            case CA:
              n.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", v);
              break;
          }
        r = null, l = null, E = null, d = null, a = v, p = qM;
      }
      return;
    }
    F = F || TM, oM = oM || AM, UM = UM || LM, (TM !== c || F !== C) && (n.blendEquationSeparate(vM[TM], vM[F]), c = TM, C = F), (AM !== r || LM !== l || oM !== E || UM !== d) && (n.blendFuncSeparate(OM[AM], OM[LM], OM[oM], OM[UM]), r = AM, l = LM, E = oM, d = UM), a = v, p = null;
  }
  function $(v, TM) {
    v.side === Ne ? kM(2884) : _(2884);
    let AM = v.side === eD;
    TM && (AM = !AM), X(AM), v.blending === ve && v.transparent === !1 ? P(zt) : P(v.blending, v.blendEquation, v.blendSrc, v.blendDst, v.blendEquationAlpha, v.blendSrcAlpha, v.blendDstAlpha, v.premultipliedAlpha), I.setFunc(v.depthFunc), I.setTest(v.depthTest), I.setMask(v.depthWrite), z.setMask(v.colorWrite);
    const LM = v.stencilWrite;
    i.setTest(LM), LM && (i.setMask(v.stencilWriteMask), i.setFunc(v.stencilFunc, v.stencilRef, v.stencilFuncMask), i.setOp(v.stencilFail, v.stencilZFail, v.stencilZPass)), CM(v.polygonOffset, v.polygonOffsetFactor, v.polygonOffsetUnits), v.alphaToCoverage === !0 ? _(32926) : kM(32926);
  }
  function X(v) {
    H !== v && (v ? n.frontFace(2304) : n.frontFace(2305), H = v);
  }
  function iM(v) {
    v !== iI ? (_(2884), v !== DM && (v === yA ? n.cullFace(1029) : v === II ? n.cullFace(1028) : n.cullFace(1032))) : kM(2884), DM = v;
  }
  function nM(v) {
    v !== G && (k && n.lineWidth(v), G = v);
  }
  function CM(v, TM, AM) {
    v ? (_(32823), (o !== TM || h !== AM) && (n.polygonOffset(TM, AM), o = TM, h = AM)) : kM(32823);
  }
  function xM(v) {
    v ? _(3089) : kM(3089);
  }
  function QM(v) {
    v === void 0 && (v = 33984 + Y - 1), b !== v && (n.activeTexture(v), b = v);
  }
  function FM(v, TM) {
    b === null && QM();
    let AM = W[b];
    AM === void 0 && (AM = { type: void 0, texture: void 0 }, W[b] = AM), (AM.type !== v || AM.texture !== TM) && (n.bindTexture(v, TM || jM[v]), AM.type = v, AM.texture = TM);
  }
  function RM() {
    const v = W[b];
    v !== void 0 && v.type !== void 0 && (n.bindTexture(v.type, null), v.type = void 0, v.texture = void 0);
  }
  function x() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (v) {
      console.error("THREE.WebGLState:", v);
    }
  }
  function L() {
    try {
      n.texSubImage2D.apply(n, arguments);
    } catch (v) {
      console.error("THREE.WebGLState:", v);
    }
  }
  function R() {
    try {
      n.texSubImage3D.apply(n, arguments);
    } catch (v) {
      console.error("THREE.WebGLState:", v);
    }
  }
  function J() {
    try {
      n.compressedTexSubImage2D.apply(n, arguments);
    } catch (v) {
      console.error("THREE.WebGLState:", v);
    }
  }
  function gM() {
    try {
      n.texStorage2D.apply(n, arguments);
    } catch (v) {
      console.error("THREE.WebGLState:", v);
    }
  }
  function K() {
    try {
      n.texStorage3D.apply(n, arguments);
    } catch (v) {
      console.error("THREE.WebGLState:", v);
    }
  }
  function yM() {
    try {
      n.texImage2D.apply(n, arguments);
    } catch (v) {
      console.error("THREE.WebGLState:", v);
    }
  }
  function sM() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (v) {
      console.error("THREE.WebGLState:", v);
    }
  }
  function NM(v) {
    V.equals(v) === !1 && (n.scissor(v.x, v.y, v.z, v.w), V.copy(v));
  }
  function tM(v) {
    eM.equals(v) === !1 && (n.viewport(v.x, v.y, v.z, v.w), eM.copy(v));
  }
  function lM() {
    n.disable(3042), n.disable(2884), n.disable(2929), n.disable(32823), n.disable(3089), n.disable(2960), n.disable(32926), n.blendEquation(32774), n.blendFunc(1, 0), n.blendFuncSeparate(1, 0, 1, 0), n.colorMask(!0, !0, !0, !0), n.clearColor(0, 0, 0, 0), n.depthMask(!0), n.depthFunc(513), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(519, 0, 4294967295), n.stencilOp(7680, 7680, 7680), n.clearStencil(0), n.cullFace(1029), n.frontFace(2305), n.polygonOffset(0, 0), n.activeTexture(33984), n.bindFramebuffer(36160, null), t === !0 && (n.bindFramebuffer(36009, null), n.bindFramebuffer(36008, null)), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), T = {}, b = null, W = {}, u = {}, g = /* @__PURE__ */ new WeakMap(), s = [], j = null, y = !1, a = null, c = null, r = null, l = null, C = null, E = null, d = null, p = !1, H = null, DM = null, G = null, o = null, h = null, V.set(0, 0, n.canvas.width, n.canvas.height), eM.set(0, 0, n.canvas.width, n.canvas.height), z.reset(), I.reset(), i.reset();
  }
  return {
    buffers: {
      color: z,
      depth: I,
      stencil: i
    },
    enable: _,
    disable: kM,
    bindFramebuffer: rM,
    drawBuffers: wM,
    useProgram: zM,
    setBlending: P,
    setMaterial: $,
    setFlipSided: X,
    setCullFace: iM,
    setLineWidth: nM,
    setPolygonOffset: CM,
    setScissorTest: xM,
    activeTexture: QM,
    bindTexture: FM,
    unbindTexture: RM,
    compressedTexImage2D: x,
    texImage2D: yM,
    texImage3D: sM,
    texStorage2D: gM,
    texStorage3D: K,
    texSubImage2D: L,
    texSubImage3D: R,
    compressedTexSubImage2D: J,
    scissor: NM,
    viewport: tM,
    reset: lM
  };
}
function _s(n, M, D, t, e, N, A) {
  const z = e.isWebGL2, I = e.maxTextures, i = e.maxCubemapSize, T = e.maxTextureSize, u = e.maxSamples, s = M.has("WEBGL_multisampled_render_to_texture") ? M.get("WEBGL_multisampled_render_to_texture") : void 0, j = /* @__PURE__ */ new WeakMap();
  let y, a = !1;
  try {
    a = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function c(x, L) {
    return a ? new OffscreenCanvas(x, L) : fe("canvas");
  }
  function r(x, L, R, J) {
    let gM = 1;
    if ((x.width > J || x.height > J) && (gM = J / Math.max(x.width, x.height)), gM < 1 || L === !0)
      if (typeof HTMLImageElement < "u" && x instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && x instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && x instanceof ImageBitmap) {
        const K = L ? iT : Math.floor, yM = K(gM * x.width), sM = K(gM * x.height);
        y === void 0 && (y = c(yM, sM));
        const NM = R ? c(yM, sM) : y;
        return NM.width = yM, NM.height = sM, NM.getContext("2d").drawImage(x, 0, 0, yM, sM), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + x.width + "x" + x.height + ") to (" + yM + "x" + sM + ")."), NM;
      } else
        return "data" in x && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + x.width + "x" + x.height + ")."), x;
    return x;
  }
  function l(x) {
    return HA(x.width) && HA(x.height);
  }
  function C(x) {
    return z ? !1 : x.wrapS !== xD || x.wrapT !== xD || x.minFilter !== ND && x.minFilter !== uD;
  }
  function E(x, L) {
    return x.generateMipmaps && L && x.minFilter !== ND && x.minFilter !== uD;
  }
  function d(x) {
    n.generateMipmap(x);
  }
  function p(x, L, R, J, gM = !1) {
    if (z === !1)
      return L;
    if (x !== null) {
      if (n[x] !== void 0)
        return n[x];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + x + "'");
    }
    let K = L;
    return L === 6403 && (R === 5126 && (K = 33326), R === 5131 && (K = 33325), R === 5121 && (K = 33321)), L === 33319 && (R === 5126 && (K = 33328), R === 5131 && (K = 33327), R === 5121 && (K = 33323)), L === 6408 && (R === 5126 && (K = 34836), R === 5131 && (K = 34842), R === 5121 && (K = J === HM && gM === !1 ? 35907 : 32856), R === 32819 && (K = 32854), R === 32820 && (K = 32855)), (K === 33325 || K === 33326 || K === 33327 || K === 33328 || K === 34842 || K === 34836) && M.get("EXT_color_buffer_float"), K;
  }
  function H(x, L, R) {
    return E(x, R) === !0 || x.isFramebufferTexture && x.minFilter !== ND && x.minFilter !== uD ? Math.log2(Math.max(L.width, L.height)) + 1 : x.mipmaps !== void 0 && x.mipmaps.length > 0 ? x.mipmaps.length : x.isCompressedTexture && Array.isArray(x.image) ? L.mipmaps.length : 1;
  }
  function DM(x) {
    return x === ND || x === OA || x === xA ? 9728 : 9729;
  }
  function G(x) {
    const L = x.target;
    L.removeEventListener("dispose", G), h(L), L.isVideoTexture && j.delete(L), A.memory.textures--;
  }
  function o(x) {
    const L = x.target;
    L.removeEventListener("dispose", o), Y(L);
  }
  function h(x) {
    const L = t.get(x);
    L.__webglInit !== void 0 && (n.deleteTexture(L.__webglTexture), t.remove(x));
  }
  function Y(x) {
    const L = x.texture, R = t.get(x), J = t.get(L);
    if (!!x) {
      if (J.__webglTexture !== void 0 && (n.deleteTexture(J.__webglTexture), A.memory.textures--), x.depthTexture && x.depthTexture.dispose(), x.isWebGLCubeRenderTarget)
        for (let gM = 0; gM < 6; gM++)
          n.deleteFramebuffer(R.__webglFramebuffer[gM]), R.__webglDepthbuffer && n.deleteRenderbuffer(R.__webglDepthbuffer[gM]);
      else
        n.deleteFramebuffer(R.__webglFramebuffer), R.__webglDepthbuffer && n.deleteRenderbuffer(R.__webglDepthbuffer), R.__webglMultisampledFramebuffer && n.deleteFramebuffer(R.__webglMultisampledFramebuffer), R.__webglColorRenderbuffer && n.deleteRenderbuffer(R.__webglColorRenderbuffer), R.__webglDepthRenderbuffer && n.deleteRenderbuffer(R.__webglDepthRenderbuffer);
      if (x.isWebGLMultipleRenderTargets)
        for (let gM = 0, K = L.length; gM < K; gM++) {
          const yM = t.get(L[gM]);
          yM.__webglTexture && (n.deleteTexture(yM.__webglTexture), A.memory.textures--), t.remove(L[gM]);
        }
      t.remove(L), t.remove(x);
    }
  }
  let k = 0;
  function f() {
    k = 0;
  }
  function Q() {
    const x = k;
    return x >= I && console.warn("THREE.WebGLTextures: Trying to use " + x + " texture units while this GPU supports only " + I), k += 1, x;
  }
  function b(x, L) {
    const R = t.get(x);
    if (x.isVideoTexture && nM(x), x.version > 0 && R.__version !== x.version) {
      const J = x.image;
      if (J === void 0)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      else if (J.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        _(R, x, L);
        return;
      }
    }
    D.activeTexture(33984 + L), D.bindTexture(3553, R.__webglTexture);
  }
  function W(x, L) {
    const R = t.get(x);
    if (x.version > 0 && R.__version !== x.version) {
      _(R, x, L);
      return;
    }
    D.activeTexture(33984 + L), D.bindTexture(35866, R.__webglTexture);
  }
  function IM(x, L) {
    const R = t.get(x);
    if (x.version > 0 && R.__version !== x.version) {
      _(R, x, L);
      return;
    }
    D.activeTexture(33984 + L), D.bindTexture(32879, R.__webglTexture);
  }
  function Z(x, L) {
    const R = t.get(x);
    if (x.version > 0 && R.__version !== x.version) {
      kM(R, x, L);
      return;
    }
    D.activeTexture(33984 + L), D.bindTexture(34067, R.__webglTexture);
  }
  const V = {
    [Sn]: 10497,
    [xD]: 33071,
    [Zn]: 33648
  }, eM = {
    [ND]: 9728,
    [OA]: 9984,
    [xA]: 9986,
    [uD]: 9729,
    [SI]: 9985,
    [kN]: 9987
  };
  function uM(x, L, R) {
    if (R ? (n.texParameteri(x, 10242, V[L.wrapS]), n.texParameteri(x, 10243, V[L.wrapT]), (x === 32879 || x === 35866) && n.texParameteri(x, 32882, V[L.wrapR]), n.texParameteri(x, 10240, eM[L.magFilter]), n.texParameteri(x, 10241, eM[L.minFilter])) : (n.texParameteri(x, 10242, 33071), n.texParameteri(x, 10243, 33071), (x === 32879 || x === 35866) && n.texParameteri(x, 32882, 33071), (L.wrapS !== xD || L.wrapT !== xD) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), n.texParameteri(x, 10240, DM(L.magFilter)), n.texParameteri(x, 10241, DM(L.minFilter)), L.minFilter !== ND && L.minFilter !== uD && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), M.has("EXT_texture_filter_anisotropic") === !0) {
      const J = M.get("EXT_texture_filter_anisotropic");
      if (L.type === Ot && M.has("OES_texture_float_linear") === !1 || z === !1 && L.type === Me && M.has("OES_texture_half_float_linear") === !1)
        return;
      (L.anisotropy > 1 || t.get(L).__currentAnisotropy) && (n.texParameterf(x, J.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(L.anisotropy, e.getMaxAnisotropy())), t.get(L).__currentAnisotropy = L.anisotropy);
    }
  }
  function jM(x, L) {
    x.__webglInit === void 0 && (x.__webglInit = !0, L.addEventListener("dispose", G), x.__webglTexture = n.createTexture(), A.memory.textures++);
  }
  function _(x, L, R) {
    let J = 3553;
    L.isDataTexture2DArray && (J = 35866), L.isDataTexture3D && (J = 32879), jM(x, L), D.activeTexture(33984 + R), D.bindTexture(J, x.__webglTexture), n.pixelStorei(37440, L.flipY), n.pixelStorei(37441, L.premultiplyAlpha), n.pixelStorei(3317, L.unpackAlignment), n.pixelStorei(37443, 0);
    const gM = C(L) && l(L.image) === !1;
    let K = r(L.image, gM, !1, T);
    K = CM(L, K);
    const yM = l(K) || z, sM = N.convert(L.format, L.encoding);
    let NM = N.convert(L.type), tM = p(L.internalFormat, sM, NM, L.encoding, L.isVideoTexture);
    uM(J, L, yM);
    let lM;
    const v = L.mipmaps, TM = z && L.isVideoTexture !== !0, AM = x.__version === void 0, LM = H(L, K, yM);
    if (L.isDepthTexture)
      tM = 6402, z ? L.type === Ot ? tM = 36012 : L.type === lN ? tM = 33190 : L.type === De ? tM = 35056 : tM = 33189 : L.type === Ot && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), L.format === Et && tM === 6402 && L.type !== Ue && L.type !== lN && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), L.type = Ue, NM = N.convert(L.type)), L.format === ne && tM === 6402 && (tM = 34041, L.type !== De && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), L.type = De, NM = N.convert(L.type))), TM && AM ? D.texStorage2D(3553, 1, tM, K.width, K.height) : D.texImage2D(3553, 0, tM, K.width, K.height, 0, sM, NM, null);
    else if (L.isDataTexture)
      if (v.length > 0 && yM) {
        TM && AM && D.texStorage2D(3553, LM, tM, v[0].width, v[0].height);
        for (let F = 0, oM = v.length; F < oM; F++)
          lM = v[F], TM ? D.texSubImage2D(3553, 0, 0, 0, lM.width, lM.height, sM, NM, lM.data) : D.texImage2D(3553, F, tM, lM.width, lM.height, 0, sM, NM, lM.data);
        L.generateMipmaps = !1;
      } else
        TM ? (AM && D.texStorage2D(3553, LM, tM, K.width, K.height), D.texSubImage2D(3553, 0, 0, 0, K.width, K.height, sM, NM, K.data)) : D.texImage2D(3553, 0, tM, K.width, K.height, 0, sM, NM, K.data);
    else if (L.isCompressedTexture) {
      TM && AM && D.texStorage2D(3553, LM, tM, v[0].width, v[0].height);
      for (let F = 0, oM = v.length; F < oM; F++)
        lM = v[F], L.format !== yD ? sM !== null ? TM ? D.compressedTexSubImage2D(3553, F, 0, 0, lM.width, lM.height, sM, lM.data) : D.compressedTexImage2D(3553, F, tM, lM.width, lM.height, 0, lM.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : TM ? D.texSubImage2D(3553, F, 0, 0, lM.width, lM.height, sM, NM, lM.data) : D.texImage2D(3553, F, tM, lM.width, lM.height, 0, sM, NM, lM.data);
    } else if (L.isDataTexture2DArray)
      TM ? (AM && D.texStorage3D(35866, LM, tM, K.width, K.height, K.depth), D.texSubImage3D(35866, 0, 0, 0, 0, K.width, K.height, K.depth, sM, NM, K.data)) : D.texImage3D(35866, 0, tM, K.width, K.height, K.depth, 0, sM, NM, K.data);
    else if (L.isDataTexture3D)
      TM ? (AM && D.texStorage3D(32879, LM, tM, K.width, K.height, K.depth), D.texSubImage3D(32879, 0, 0, 0, 0, K.width, K.height, K.depth, sM, NM, K.data)) : D.texImage3D(32879, 0, tM, K.width, K.height, K.depth, 0, sM, NM, K.data);
    else if (L.isFramebufferTexture)
      TM && AM ? D.texStorage2D(3553, LM, tM, K.width, K.height) : D.texImage2D(3553, 0, tM, K.width, K.height, 0, sM, NM, null);
    else if (v.length > 0 && yM) {
      TM && AM && D.texStorage2D(3553, LM, tM, v[0].width, v[0].height);
      for (let F = 0, oM = v.length; F < oM; F++)
        lM = v[F], TM ? D.texSubImage2D(3553, F, 0, 0, sM, NM, lM) : D.texImage2D(3553, F, tM, sM, NM, lM);
      L.generateMipmaps = !1;
    } else
      TM ? (AM && D.texStorage2D(3553, LM, tM, K.width, K.height), D.texSubImage2D(3553, 0, 0, 0, sM, NM, K)) : D.texImage2D(3553, 0, tM, sM, NM, K);
    E(L, yM) && d(J), x.__version = L.version, L.onUpdate && L.onUpdate(L);
  }
  function kM(x, L, R) {
    if (L.image.length !== 6)
      return;
    jM(x, L), D.activeTexture(33984 + R), D.bindTexture(34067, x.__webglTexture), n.pixelStorei(37440, L.flipY), n.pixelStorei(37441, L.premultiplyAlpha), n.pixelStorei(3317, L.unpackAlignment), n.pixelStorei(37443, 0);
    const J = L && (L.isCompressedTexture || L.image[0].isCompressedTexture), gM = L.image[0] && L.image[0].isDataTexture, K = [];
    for (let F = 0; F < 6; F++)
      !J && !gM ? K[F] = r(L.image[F], !1, !0, i) : K[F] = gM ? L.image[F].image : L.image[F], K[F] = CM(L, K[F]);
    const yM = K[0], sM = l(yM) || z, NM = N.convert(L.format, L.encoding), tM = N.convert(L.type), lM = p(L.internalFormat, NM, tM, L.encoding), v = z && L.isVideoTexture !== !0, TM = x.__version === void 0;
    let AM = H(L, yM, sM);
    uM(34067, L, sM);
    let LM;
    if (J) {
      v && TM && D.texStorage2D(34067, AM, lM, yM.width, yM.height);
      for (let F = 0; F < 6; F++) {
        LM = K[F].mipmaps;
        for (let oM = 0; oM < LM.length; oM++) {
          const UM = LM[oM];
          L.format !== yD ? NM !== null ? v ? D.compressedTexSubImage2D(34069 + F, oM, 0, 0, UM.width, UM.height, NM, UM.data) : D.compressedTexImage2D(34069 + F, oM, lM, UM.width, UM.height, 0, UM.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : v ? D.texSubImage2D(34069 + F, oM, 0, 0, UM.width, UM.height, NM, tM, UM.data) : D.texImage2D(34069 + F, oM, lM, UM.width, UM.height, 0, NM, tM, UM.data);
        }
      }
    } else {
      LM = L.mipmaps, v && TM && (LM.length > 0 && AM++, D.texStorage2D(34067, AM, lM, K[0].width, K[0].height));
      for (let F = 0; F < 6; F++)
        if (gM) {
          v ? D.texSubImage2D(34069 + F, 0, 0, 0, K[F].width, K[F].height, NM, tM, K[F].data) : D.texImage2D(34069 + F, 0, lM, K[F].width, K[F].height, 0, NM, tM, K[F].data);
          for (let oM = 0; oM < LM.length; oM++) {
            const qM = LM[oM].image[F].image;
            v ? D.texSubImage2D(34069 + F, oM + 1, 0, 0, qM.width, qM.height, NM, tM, qM.data) : D.texImage2D(34069 + F, oM + 1, lM, qM.width, qM.height, 0, NM, tM, qM.data);
          }
        } else {
          v ? D.texSubImage2D(34069 + F, 0, 0, 0, NM, tM, K[F]) : D.texImage2D(34069 + F, 0, lM, NM, tM, K[F]);
          for (let oM = 0; oM < LM.length; oM++) {
            const UM = LM[oM];
            v ? D.texSubImage2D(34069 + F, oM + 1, 0, 0, NM, tM, UM.image[F]) : D.texImage2D(34069 + F, oM + 1, lM, NM, tM, UM.image[F]);
          }
        }
    }
    E(L, sM) && d(34067), x.__version = L.version, L.onUpdate && L.onUpdate(L);
  }
  function rM(x, L, R, J, gM) {
    const K = N.convert(R.format, R.encoding), yM = N.convert(R.type), sM = p(R.internalFormat, K, yM, R.encoding);
    t.get(L).__hasExternalTextures || (gM === 32879 || gM === 35866 ? D.texImage3D(gM, 0, sM, L.width, L.height, L.depth, 0, K, yM, null) : D.texImage2D(gM, 0, sM, L.width, L.height, 0, K, yM, null)), D.bindFramebuffer(36160, x), L.useRenderToTexture ? s.framebufferTexture2DMultisampleEXT(36160, J, gM, t.get(R).__webglTexture, 0, iM(L)) : n.framebufferTexture2D(36160, J, gM, t.get(R).__webglTexture, 0), D.bindFramebuffer(36160, null);
  }
  function wM(x, L, R) {
    if (n.bindRenderbuffer(36161, x), L.depthBuffer && !L.stencilBuffer) {
      let J = 33189;
      if (R || L.useRenderToTexture) {
        const gM = L.depthTexture;
        gM && gM.isDepthTexture && (gM.type === Ot ? J = 36012 : gM.type === lN && (J = 33190));
        const K = iM(L);
        L.useRenderToTexture ? s.renderbufferStorageMultisampleEXT(36161, K, J, L.width, L.height) : n.renderbufferStorageMultisample(36161, K, J, L.width, L.height);
      } else
        n.renderbufferStorage(36161, J, L.width, L.height);
      n.framebufferRenderbuffer(36160, 36096, 36161, x);
    } else if (L.depthBuffer && L.stencilBuffer) {
      const J = iM(L);
      R && L.useRenderbuffer ? n.renderbufferStorageMultisample(36161, J, 35056, L.width, L.height) : L.useRenderToTexture ? s.renderbufferStorageMultisampleEXT(36161, J, 35056, L.width, L.height) : n.renderbufferStorage(36161, 34041, L.width, L.height), n.framebufferRenderbuffer(36160, 33306, 36161, x);
    } else {
      const J = L.isWebGLMultipleRenderTargets === !0 ? L.texture[0] : L.texture, gM = N.convert(J.format, J.encoding), K = N.convert(J.type), yM = p(J.internalFormat, gM, K, J.encoding), sM = iM(L);
      R && L.useRenderbuffer ? n.renderbufferStorageMultisample(36161, sM, yM, L.width, L.height) : L.useRenderToTexture ? s.renderbufferStorageMultisampleEXT(36161, sM, yM, L.width, L.height) : n.renderbufferStorage(36161, yM, L.width, L.height);
    }
    n.bindRenderbuffer(36161, null);
  }
  function zM(x, L) {
    if (L && L.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (D.bindFramebuffer(36160, x), !(L.depthTexture && L.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!t.get(L.depthTexture).__webglTexture || L.depthTexture.image.width !== L.width || L.depthTexture.image.height !== L.height) && (L.depthTexture.image.width = L.width, L.depthTexture.image.height = L.height, L.depthTexture.needsUpdate = !0), b(L.depthTexture, 0);
    const J = t.get(L.depthTexture).__webglTexture, gM = iM(L);
    if (L.depthTexture.format === Et)
      L.useRenderToTexture ? s.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, J, 0, gM) : n.framebufferTexture2D(36160, 36096, 3553, J, 0);
    else if (L.depthTexture.format === ne)
      L.useRenderToTexture ? s.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, J, 0, gM) : n.framebufferTexture2D(36160, 33306, 3553, J, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function vM(x) {
    const L = t.get(x), R = x.isWebGLCubeRenderTarget === !0;
    if (x.depthTexture && !L.__autoAllocateDepthBuffer) {
      if (R)
        throw new Error("target.depthTexture not supported in Cube render targets");
      zM(L.__webglFramebuffer, x);
    } else if (R) {
      L.__webglDepthbuffer = [];
      for (let J = 0; J < 6; J++)
        D.bindFramebuffer(36160, L.__webglFramebuffer[J]), L.__webglDepthbuffer[J] = n.createRenderbuffer(), wM(L.__webglDepthbuffer[J], x, !1);
    } else
      D.bindFramebuffer(36160, L.__webglFramebuffer), L.__webglDepthbuffer = n.createRenderbuffer(), wM(L.__webglDepthbuffer, x, !1);
    D.bindFramebuffer(36160, null);
  }
  function OM(x, L, R) {
    const J = t.get(x);
    L !== void 0 && rM(J.__webglFramebuffer, x, x.texture, 36064, 3553), R !== void 0 && vM(x);
  }
  function P(x) {
    const L = x.texture, R = t.get(x), J = t.get(L);
    x.addEventListener("dispose", o), x.isWebGLMultipleRenderTargets !== !0 && (J.__webglTexture === void 0 && (J.__webglTexture = n.createTexture()), J.__version = L.version, A.memory.textures++);
    const gM = x.isWebGLCubeRenderTarget === !0, K = x.isWebGLMultipleRenderTargets === !0, yM = L.isDataTexture3D || L.isDataTexture2DArray, sM = l(x) || z;
    if (gM) {
      R.__webglFramebuffer = [];
      for (let NM = 0; NM < 6; NM++)
        R.__webglFramebuffer[NM] = n.createFramebuffer();
    } else if (R.__webglFramebuffer = n.createFramebuffer(), K)
      if (e.drawBuffers) {
        const NM = x.texture;
        for (let tM = 0, lM = NM.length; tM < lM; tM++) {
          const v = t.get(NM[tM]);
          v.__webglTexture === void 0 && (v.__webglTexture = n.createTexture(), A.memory.textures++);
        }
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
    else if (x.useRenderbuffer)
      if (z) {
        R.__webglMultisampledFramebuffer = n.createFramebuffer(), R.__webglColorRenderbuffer = n.createRenderbuffer(), n.bindRenderbuffer(36161, R.__webglColorRenderbuffer);
        const NM = N.convert(L.format, L.encoding), tM = N.convert(L.type), lM = p(L.internalFormat, NM, tM, L.encoding), v = iM(x);
        n.renderbufferStorageMultisample(36161, v, lM, x.width, x.height), D.bindFramebuffer(36160, R.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(36160, 36064, 36161, R.__webglColorRenderbuffer), n.bindRenderbuffer(36161, null), x.depthBuffer && (R.__webglDepthRenderbuffer = n.createRenderbuffer(), wM(R.__webglDepthRenderbuffer, x, !0)), D.bindFramebuffer(36160, null);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    if (gM) {
      D.bindTexture(34067, J.__webglTexture), uM(34067, L, sM);
      for (let NM = 0; NM < 6; NM++)
        rM(R.__webglFramebuffer[NM], x, L, 36064, 34069 + NM);
      E(L, sM) && d(34067), D.unbindTexture();
    } else if (K) {
      const NM = x.texture;
      for (let tM = 0, lM = NM.length; tM < lM; tM++) {
        const v = NM[tM], TM = t.get(v);
        D.bindTexture(3553, TM.__webglTexture), uM(3553, v, sM), rM(R.__webglFramebuffer, x, v, 36064 + tM, 3553), E(v, sM) && d(3553);
      }
      D.unbindTexture();
    } else {
      let NM = 3553;
      yM && (z ? NM = L.isDataTexture3D ? 32879 : 35866 : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")), D.bindTexture(NM, J.__webglTexture), uM(NM, L, sM), rM(R.__webglFramebuffer, x, L, 36064, NM), E(L, sM) && d(NM), D.unbindTexture();
    }
    x.depthBuffer && vM(x);
  }
  function $(x) {
    const L = l(x) || z, R = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
    for (let J = 0, gM = R.length; J < gM; J++) {
      const K = R[J];
      if (E(K, L)) {
        const yM = x.isWebGLCubeRenderTarget ? 34067 : 3553, sM = t.get(K).__webglTexture;
        D.bindTexture(yM, sM), d(yM), D.unbindTexture();
      }
    }
  }
  function X(x) {
    if (x.useRenderbuffer)
      if (z) {
        const L = x.width, R = x.height;
        let J = 16384;
        const gM = [36064], K = x.stencilBuffer ? 33306 : 36096;
        x.depthBuffer && gM.push(K), x.ignoreDepthForMultisampleCopy || (x.depthBuffer && (J |= 256), x.stencilBuffer && (J |= 1024));
        const yM = t.get(x);
        D.bindFramebuffer(36008, yM.__webglMultisampledFramebuffer), D.bindFramebuffer(36009, yM.__webglFramebuffer), x.ignoreDepthForMultisampleCopy && (n.invalidateFramebuffer(36008, [K]), n.invalidateFramebuffer(36009, [K])), n.blitFramebuffer(0, 0, L, R, 0, 0, L, R, J, 9728), n.invalidateFramebuffer(36008, gM), D.bindFramebuffer(36008, null), D.bindFramebuffer(36009, yM.__webglMultisampledFramebuffer);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
  }
  function iM(x) {
    return z && (x.useRenderbuffer || x.useRenderToTexture) ? Math.min(u, x.samples) : 0;
  }
  function nM(x) {
    const L = A.render.frame;
    j.get(x) !== L && (j.set(x, L), x.update());
  }
  function CM(x, L) {
    const R = x.encoding, J = x.format, gM = x.type;
    return x.isCompressedTexture === !0 || x.isVideoTexture === !0 || x.format === _n || R !== st && (R === HM ? z === !1 ? M.has("EXT_sRGB") === !0 && J === yD ? (x.format = _n, x.minFilter = uD, x.generateMipmaps = !1) : L = vt.sRGBToLinear(L) : (J !== yD || gM !== It) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", R)), L;
  }
  let xM = !1, QM = !1;
  function FM(x, L) {
    x && x.isWebGLRenderTarget && (xM === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), xM = !0), x = x.texture), b(x, L);
  }
  function RM(x, L) {
    x && x.isWebGLCubeRenderTarget && (QM === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), QM = !0), x = x.texture), Z(x, L);
  }
  this.allocateTextureUnit = Q, this.resetTextureUnits = f, this.setTexture2D = b, this.setTexture2DArray = W, this.setTexture3D = IM, this.setTextureCube = Z, this.rebindTextures = OM, this.setupRenderTarget = P, this.updateRenderTargetMipmap = $, this.updateMultisampleRenderTarget = X, this.setupDepthRenderbuffer = vM, this.setupFrameBufferTexture = rM, this.safeSetTexture2D = FM, this.safeSetTextureCube = RM;
}
function bs(n, M, D) {
  const t = D.isWebGL2;
  function e(N, A = null) {
    let z;
    if (N === It)
      return 5121;
    if (N === KI)
      return 32819;
    if (N === RI)
      return 32820;
    if (N === ZI)
      return 5120;
    if (N === _I)
      return 5122;
    if (N === Ue)
      return 5123;
    if (N === bI)
      return 5124;
    if (N === lN)
      return 5125;
    if (N === Ot)
      return 5126;
    if (N === Me)
      return t ? 5131 : (z = M.get("OES_texture_half_float"), z !== null ? z.HALF_FLOAT_OES : null);
    if (N === PI)
      return 6406;
    if (N === yD)
      return 6408;
    if (N === BI)
      return 6409;
    if (N === VI)
      return 6410;
    if (N === Et)
      return 6402;
    if (N === ne)
      return 34041;
    if (N === HI)
      return 6403;
    if (N === FI)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (N === _n)
      return z = M.get("EXT_sRGB"), z !== null ? z.SRGB_ALPHA_EXT : null;
    if (N === GI)
      return 36244;
    if (N === WI)
      return 33319;
    if (N === qI)
      return 33320;
    if (N === XI)
      return 36249;
    if (N === VN || N === HN || N === GN || N === WN)
      if (A === HM)
        if (z = M.get("WEBGL_compressed_texture_s3tc_srgb"), z !== null) {
          if (N === VN)
            return z.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (N === HN)
            return z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (N === GN)
            return z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (N === WN)
            return z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (z = M.get("WEBGL_compressed_texture_s3tc"), z !== null) {
        if (N === VN)
          return z.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (N === HN)
          return z.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (N === GN)
          return z.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (N === WN)
          return z.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (N === EA || N === lA || N === dA || N === vA)
      if (z = M.get("WEBGL_compressed_texture_pvrtc"), z !== null) {
        if (N === EA)
          return z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (N === lA)
          return z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (N === dA)
          return z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (N === vA)
          return z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (N === JI)
      return z = M.get("WEBGL_compressed_texture_etc1"), z !== null ? z.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (N === pA || N === hA)
      if (z = M.get("WEBGL_compressed_texture_etc"), z !== null) {
        if (N === pA)
          return A === HM ? z.COMPRESSED_SRGB8_ETC2 : z.COMPRESSED_RGB8_ETC2;
        if (N === hA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : z.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (N === YA || N === UA || N === QA || N === fA || N === mA || N === kA || N === SA || N === ZA || N === _A || N === bA || N === KA || N === RA || N === PA || N === FA)
      if (z = M.get("WEBGL_compressed_texture_astc"), z !== null) {
        if (N === YA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : z.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (N === UA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : z.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (N === QA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : z.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (N === fA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : z.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (N === mA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : z.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (N === kA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : z.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (N === SA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : z.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (N === ZA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : z.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (N === _A)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : z.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (N === bA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : z.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (N === KA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : z.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (N === RA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : z.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (N === PA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : z.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (N === FA)
          return A === HM ? z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : z.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (N === BA)
      if (z = M.get("EXT_texture_compression_bptc"), z !== null) {
        if (N === BA)
          return A === HM ? z.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : z.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (N === De)
      return t ? 34042 : (z = M.get("WEBGL_depth_texture"), z !== null ? z.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return { convert: e };
}
class vi extends jD {
  constructor(M = []) {
    super(), this.cameras = M;
  }
}
vi.prototype.isArrayCamera = !0;
class xt extends ZM {
  constructor() {
    super(), this.type = "Group";
  }
}
xt.prototype.isGroup = !0;
const Ks = { type: "move" };
class En {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new xt(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new xt(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new O(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new O()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new xt(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new O(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new O()), this._grip;
  }
  dispatchEvent(M) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(M), this._grip !== null && this._grip.dispatchEvent(M), this._hand !== null && this._hand.dispatchEvent(M), this;
  }
  disconnect(M) {
    return this.dispatchEvent({ type: "disconnected", data: M }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(M, D, t) {
    let e = null, N = null, A = null;
    const z = this._targetRay, I = this._grip, i = this._hand;
    if (M && D.session.visibilityState !== "visible-blurred")
      if (z !== null && (e = D.getPose(M.targetRaySpace, t), e !== null && (z.matrix.fromArray(e.transform.matrix), z.matrix.decompose(z.position, z.rotation, z.scale), e.linearVelocity ? (z.hasLinearVelocity = !0, z.linearVelocity.copy(e.linearVelocity)) : z.hasLinearVelocity = !1, e.angularVelocity ? (z.hasAngularVelocity = !0, z.angularVelocity.copy(e.angularVelocity)) : z.hasAngularVelocity = !1, this.dispatchEvent(Ks))), i && M.hand) {
        A = !0;
        for (const y of M.hand.values()) {
          const a = D.getJointPose(y, t);
          if (i.joints[y.jointName] === void 0) {
            const r = new xt();
            r.matrixAutoUpdate = !1, r.visible = !1, i.joints[y.jointName] = r, i.add(r);
          }
          const c = i.joints[y.jointName];
          a !== null && (c.matrix.fromArray(a.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.jointRadius = a.radius), c.visible = a !== null;
        }
        const T = i.joints["index-finger-tip"], u = i.joints["thumb-tip"], g = T.position.distanceTo(u.position), s = 0.02, j = 5e-3;
        i.inputState.pinching && g > s + j ? (i.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: M.handedness,
          target: this
        })) : !i.inputState.pinching && g <= s - j && (i.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: M.handedness,
          target: this
        }));
      } else
        I !== null && M.gripSpace && (N = D.getPose(M.gripSpace, t), N !== null && (I.matrix.fromArray(N.transform.matrix), I.matrix.decompose(I.position, I.rotation, I.scale), N.linearVelocity ? (I.hasLinearVelocity = !0, I.linearVelocity.copy(N.linearVelocity)) : I.hasLinearVelocity = !1, N.angularVelocity ? (I.hasAngularVelocity = !0, I.angularVelocity.copy(N.angularVelocity)) : I.hasAngularVelocity = !1));
    return z !== null && (z.visible = e !== null), I !== null && (I.visible = N !== null), i !== null && (i.visible = A !== null), this;
  }
}
class Rn extends iD {
  constructor(M, D, t, e, N, A, z, I, i, T) {
    if (T = T !== void 0 ? T : Et, T !== Et && T !== ne)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    t === void 0 && T === Et && (t = Ue), t === void 0 && T === ne && (t = De), super(null, e, N, A, z, I, T, t, i), this.image = { width: M, height: D }, this.magFilter = z !== void 0 ? z : ND, this.minFilter = I !== void 0 ? I : ND, this.flipY = !1, this.generateMipmaps = !1;
  }
}
Rn.prototype.isDepthTexture = !0;
class Rs extends dt {
  constructor(M, D) {
    super();
    const t = this;
    let e = null, N = 1, A = null, z = "local-floor";
    const I = M.extensions.has("WEBGL_multisampled_render_to_texture");
    let i = null, T = null, u = null, g = null, s = !1, j = null;
    const y = D.getContextAttributes();
    let a = null, c = null;
    const r = [], l = /* @__PURE__ */ new Map(), C = new jD();
    C.layers.enable(1), C.viewport = new PM();
    const E = new jD();
    E.layers.enable(2), E.viewport = new PM();
    const d = [C, E], p = new vi();
    p.layers.enable(1), p.layers.enable(2);
    let H = null, DM = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Z) {
      let V = r[Z];
      return V === void 0 && (V = new En(), r[Z] = V), V.getTargetRaySpace();
    }, this.getControllerGrip = function(Z) {
      let V = r[Z];
      return V === void 0 && (V = new En(), r[Z] = V), V.getGripSpace();
    }, this.getHand = function(Z) {
      let V = r[Z];
      return V === void 0 && (V = new En(), r[Z] = V), V.getHandSpace();
    };
    function G(Z) {
      const V = l.get(Z.inputSource);
      V && V.dispatchEvent({ type: Z.type, data: Z.inputSource });
    }
    function o() {
      l.forEach(function(Z, V) {
        Z.disconnect(V);
      }), l.clear(), H = null, DM = null, M.setRenderTarget(a), g = null, u = null, T = null, e = null, c = null, IM.stop(), t.isPresenting = !1, t.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Z) {
      N = Z, t.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Z) {
      z = Z, t.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return A;
    }, this.getBaseLayer = function() {
      return u !== null ? u : g;
    }, this.getBinding = function() {
      return T;
    }, this.getFrame = function() {
      return j;
    }, this.getSession = function() {
      return e;
    }, this.setSession = async function(Z) {
      if (e = Z, e !== null) {
        if (a = M.getRenderTarget(), e.addEventListener("select", G), e.addEventListener("selectstart", G), e.addEventListener("selectend", G), e.addEventListener("squeeze", G), e.addEventListener("squeezestart", G), e.addEventListener("squeezeend", G), e.addEventListener("end", o), e.addEventListener("inputsourceschange", h), y.xrCompatible !== !0 && await D.makeXRCompatible(), e.renderState.layers === void 0 || M.capabilities.isWebGL2 === !1) {
          const V = {
            antialias: e.renderState.layers === void 0 ? y.antialias : !0,
            alpha: y.alpha,
            depth: y.depth,
            stencil: y.stencil,
            framebufferScaleFactor: N
          };
          g = new XRWebGLLayer(e, D, V), e.updateRenderState({ baseLayer: g }), c = new dD(g.framebufferWidth, g.framebufferHeight, {
            format: yD,
            type: It,
            encoding: M.outputEncoding
          });
        } else {
          s = y.antialias;
          let V = null, eM = null, uM = null;
          y.depth && (uM = y.stencil ? 35056 : 33190, V = y.stencil ? ne : Et, eM = y.stencil ? De : Ue);
          const jM = {
            colorFormat: M.outputEncoding === HM ? 35907 : 32856,
            depthFormat: uM,
            scaleFactor: N
          };
          T = new XRWebGLBinding(e, D), u = T.createProjectionLayer(jM), e.updateRenderState({ layers: [u] }), s ? c = new Jn(u.textureWidth, u.textureHeight, {
            format: yD,
            type: It,
            depthTexture: new Rn(u.textureWidth, u.textureHeight, eM, void 0, void 0, void 0, void 0, void 0, void 0, V),
            stencilBuffer: y.stencil,
            ignoreDepth: u.ignoreDepthValues,
            useRenderToTexture: I,
            encoding: M.outputEncoding
          }) : c = new dD(u.textureWidth, u.textureHeight, {
            format: yD,
            type: It,
            depthTexture: new Rn(u.textureWidth, u.textureHeight, eM, void 0, void 0, void 0, void 0, void 0, void 0, V),
            stencilBuffer: y.stencil,
            ignoreDepth: u.ignoreDepthValues,
            encoding: M.outputEncoding
          });
        }
        c.isXRRenderTarget = !0, this.setFoveation(1), A = await e.requestReferenceSpace(z), IM.setContext(e), IM.start(), t.isPresenting = !0, t.dispatchEvent({ type: "sessionstart" });
      }
    };
    function h(Z) {
      const V = e.inputSources;
      for (let eM = 0; eM < r.length; eM++)
        l.set(V[eM], r[eM]);
      for (let eM = 0; eM < Z.removed.length; eM++) {
        const uM = Z.removed[eM], jM = l.get(uM);
        jM && (jM.dispatchEvent({ type: "disconnected", data: uM }), l.delete(uM));
      }
      for (let eM = 0; eM < Z.added.length; eM++) {
        const uM = Z.added[eM], jM = l.get(uM);
        jM && jM.dispatchEvent({ type: "connected", data: uM });
      }
    }
    const Y = new O(), k = new O();
    function f(Z, V, eM) {
      Y.setFromMatrixPosition(V.matrixWorld), k.setFromMatrixPosition(eM.matrixWorld);
      const uM = Y.distanceTo(k), jM = V.projectionMatrix.elements, _ = eM.projectionMatrix.elements, kM = jM[14] / (jM[10] - 1), rM = jM[14] / (jM[10] + 1), wM = (jM[9] + 1) / jM[5], zM = (jM[9] - 1) / jM[5], vM = (jM[8] - 1) / jM[0], OM = (_[8] + 1) / _[0], P = kM * vM, $ = kM * OM, X = uM / (-vM + OM), iM = X * -vM;
      V.matrixWorld.decompose(Z.position, Z.quaternion, Z.scale), Z.translateX(iM), Z.translateZ(X), Z.matrixWorld.compose(Z.position, Z.quaternion, Z.scale), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
      const nM = kM + X, CM = rM + X, xM = P - iM, QM = $ + (uM - iM), FM = wM * rM / CM * nM, RM = zM * rM / CM * nM;
      Z.projectionMatrix.makePerspective(xM, QM, FM, RM, nM, CM);
    }
    function Q(Z, V) {
      V === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(V.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
    }
    this.updateCamera = function(Z) {
      if (e === null)
        return;
      p.near = E.near = C.near = Z.near, p.far = E.far = C.far = Z.far, (H !== p.near || DM !== p.far) && (e.updateRenderState({
        depthNear: p.near,
        depthFar: p.far
      }), H = p.near, DM = p.far);
      const V = Z.parent, eM = p.cameras;
      Q(p, V);
      for (let jM = 0; jM < eM.length; jM++)
        Q(eM[jM], V);
      p.matrixWorld.decompose(p.position, p.quaternion, p.scale), Z.position.copy(p.position), Z.quaternion.copy(p.quaternion), Z.scale.copy(p.scale), Z.matrix.copy(p.matrix), Z.matrixWorld.copy(p.matrixWorld);
      const uM = Z.children;
      for (let jM = 0, _ = uM.length; jM < _; jM++)
        uM[jM].updateMatrixWorld(!0);
      eM.length === 2 ? f(p, C, E) : p.projectionMatrix.copy(C.projectionMatrix);
    }, this.getCamera = function() {
      return p;
    }, this.getFoveation = function() {
      if (u !== null)
        return u.fixedFoveation;
      if (g !== null)
        return g.fixedFoveation;
    }, this.setFoveation = function(Z) {
      u !== null && (u.fixedFoveation = Z), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = Z);
    };
    let b = null;
    function W(Z, V) {
      if (i = V.getViewerPose(A), j = V, i !== null) {
        const uM = i.views;
        g !== null && (M.setRenderTargetFramebuffer(c, g.framebuffer), M.setRenderTarget(c));
        let jM = !1;
        uM.length !== p.cameras.length && (p.cameras.length = 0, jM = !0);
        for (let _ = 0; _ < uM.length; _++) {
          const kM = uM[_];
          let rM = null;
          if (g !== null)
            rM = g.getViewport(kM);
          else {
            const zM = T.getViewSubImage(u, kM);
            rM = zM.viewport, _ === 0 && (M.setRenderTargetTextures(c, zM.colorTexture, u.ignoreDepthValues ? void 0 : zM.depthStencilTexture), M.setRenderTarget(c));
          }
          const wM = d[_];
          wM.matrix.fromArray(kM.transform.matrix), wM.projectionMatrix.fromArray(kM.projectionMatrix), wM.viewport.set(rM.x, rM.y, rM.width, rM.height), _ === 0 && p.matrix.copy(wM.matrix), jM === !0 && p.cameras.push(wM);
        }
      }
      const eM = e.inputSources;
      for (let uM = 0; uM < r.length; uM++) {
        const jM = r[uM], _ = eM[uM];
        jM.update(_, V, A);
      }
      b && b(Z, V), j = null;
    }
    const IM = new si();
    IM.setAnimationLoop(W), this.setAnimationLoop = function(Z) {
      b = Z;
    }, this.dispose = function() {
    };
  }
}
function Ps(n) {
  function M(c, r) {
    c.fogColor.value.copy(r.color), r.isFog ? (c.fogNear.value = r.near, c.fogFar.value = r.far) : r.isFogExp2 && (c.fogDensity.value = r.density);
  }
  function D(c, r, l, C, E) {
    r.isMeshBasicMaterial ? t(c, r) : r.isMeshLambertMaterial ? (t(c, r), I(c, r)) : r.isMeshToonMaterial ? (t(c, r), T(c, r)) : r.isMeshPhongMaterial ? (t(c, r), i(c, r)) : r.isMeshStandardMaterial ? (t(c, r), r.isMeshPhysicalMaterial ? g(c, r, E) : u(c, r)) : r.isMeshMatcapMaterial ? (t(c, r), s(c, r)) : r.isMeshDepthMaterial ? (t(c, r), j(c, r)) : r.isMeshDistanceMaterial ? (t(c, r), y(c, r)) : r.isMeshNormalMaterial ? (t(c, r), a(c, r)) : r.isLineBasicMaterial ? (e(c, r), r.isLineDashedMaterial && N(c, r)) : r.isPointsMaterial ? A(c, r, l, C) : r.isSpriteMaterial ? z(c, r) : r.isShadowMaterial ? (c.color.value.copy(r.color), c.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
  }
  function t(c, r) {
    c.opacity.value = r.opacity, r.color && c.diffuse.value.copy(r.color), r.emissive && c.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (c.map.value = r.map), r.alphaMap && (c.alphaMap.value = r.alphaMap), r.specularMap && (c.specularMap.value = r.specularMap), r.alphaTest > 0 && (c.alphaTest.value = r.alphaTest);
    const l = n.get(r).envMap;
    l && (c.envMap.value = l, c.flipEnvMap.value = l.isCubeTexture && l.isRenderTargetTexture === !1 ? -1 : 1, c.reflectivity.value = r.reflectivity, c.ior.value = r.ior, c.refractionRatio.value = r.refractionRatio), r.lightMap && (c.lightMap.value = r.lightMap, c.lightMapIntensity.value = r.lightMapIntensity), r.aoMap && (c.aoMap.value = r.aoMap, c.aoMapIntensity.value = r.aoMapIntensity);
    let C;
    r.map ? C = r.map : r.specularMap ? C = r.specularMap : r.displacementMap ? C = r.displacementMap : r.normalMap ? C = r.normalMap : r.bumpMap ? C = r.bumpMap : r.roughnessMap ? C = r.roughnessMap : r.metalnessMap ? C = r.metalnessMap : r.alphaMap ? C = r.alphaMap : r.emissiveMap ? C = r.emissiveMap : r.clearcoatMap ? C = r.clearcoatMap : r.clearcoatNormalMap ? C = r.clearcoatNormalMap : r.clearcoatRoughnessMap ? C = r.clearcoatRoughnessMap : r.specularIntensityMap ? C = r.specularIntensityMap : r.specularColorMap ? C = r.specularColorMap : r.transmissionMap ? C = r.transmissionMap : r.thicknessMap ? C = r.thicknessMap : r.sheenColorMap ? C = r.sheenColorMap : r.sheenRoughnessMap && (C = r.sheenRoughnessMap), C !== void 0 && (C.isWebGLRenderTarget && (C = C.texture), C.matrixAutoUpdate === !0 && C.updateMatrix(), c.uvTransform.value.copy(C.matrix));
    let E;
    r.aoMap ? E = r.aoMap : r.lightMap && (E = r.lightMap), E !== void 0 && (E.isWebGLRenderTarget && (E = E.texture), E.matrixAutoUpdate === !0 && E.updateMatrix(), c.uv2Transform.value.copy(E.matrix));
  }
  function e(c, r) {
    c.diffuse.value.copy(r.color), c.opacity.value = r.opacity;
  }
  function N(c, r) {
    c.dashSize.value = r.dashSize, c.totalSize.value = r.dashSize + r.gapSize, c.scale.value = r.scale;
  }
  function A(c, r, l, C) {
    c.diffuse.value.copy(r.color), c.opacity.value = r.opacity, c.size.value = r.size * l, c.scale.value = C * 0.5, r.map && (c.map.value = r.map), r.alphaMap && (c.alphaMap.value = r.alphaMap), r.alphaTest > 0 && (c.alphaTest.value = r.alphaTest);
    let E;
    r.map ? E = r.map : r.alphaMap && (E = r.alphaMap), E !== void 0 && (E.matrixAutoUpdate === !0 && E.updateMatrix(), c.uvTransform.value.copy(E.matrix));
  }
  function z(c, r) {
    c.diffuse.value.copy(r.color), c.opacity.value = r.opacity, c.rotation.value = r.rotation, r.map && (c.map.value = r.map), r.alphaMap && (c.alphaMap.value = r.alphaMap), r.alphaTest > 0 && (c.alphaTest.value = r.alphaTest);
    let l;
    r.map ? l = r.map : r.alphaMap && (l = r.alphaMap), l !== void 0 && (l.matrixAutoUpdate === !0 && l.updateMatrix(), c.uvTransform.value.copy(l.matrix));
  }
  function I(c, r) {
    r.emissiveMap && (c.emissiveMap.value = r.emissiveMap);
  }
  function i(c, r) {
    c.specular.value.copy(r.specular), c.shininess.value = Math.max(r.shininess, 1e-4), r.emissiveMap && (c.emissiveMap.value = r.emissiveMap), r.bumpMap && (c.bumpMap.value = r.bumpMap, c.bumpScale.value = r.bumpScale, r.side === eD && (c.bumpScale.value *= -1)), r.normalMap && (c.normalMap.value = r.normalMap, c.normalScale.value.copy(r.normalScale), r.side === eD && c.normalScale.value.negate()), r.displacementMap && (c.displacementMap.value = r.displacementMap, c.displacementScale.value = r.displacementScale, c.displacementBias.value = r.displacementBias);
  }
  function T(c, r) {
    r.gradientMap && (c.gradientMap.value = r.gradientMap), r.emissiveMap && (c.emissiveMap.value = r.emissiveMap), r.bumpMap && (c.bumpMap.value = r.bumpMap, c.bumpScale.value = r.bumpScale, r.side === eD && (c.bumpScale.value *= -1)), r.normalMap && (c.normalMap.value = r.normalMap, c.normalScale.value.copy(r.normalScale), r.side === eD && c.normalScale.value.negate()), r.displacementMap && (c.displacementMap.value = r.displacementMap, c.displacementScale.value = r.displacementScale, c.displacementBias.value = r.displacementBias);
  }
  function u(c, r) {
    c.roughness.value = r.roughness, c.metalness.value = r.metalness, r.roughnessMap && (c.roughnessMap.value = r.roughnessMap), r.metalnessMap && (c.metalnessMap.value = r.metalnessMap), r.emissiveMap && (c.emissiveMap.value = r.emissiveMap), r.bumpMap && (c.bumpMap.value = r.bumpMap, c.bumpScale.value = r.bumpScale, r.side === eD && (c.bumpScale.value *= -1)), r.normalMap && (c.normalMap.value = r.normalMap, c.normalScale.value.copy(r.normalScale), r.side === eD && c.normalScale.value.negate()), r.displacementMap && (c.displacementMap.value = r.displacementMap, c.displacementScale.value = r.displacementScale, c.displacementBias.value = r.displacementBias), n.get(r).envMap && (c.envMapIntensity.value = r.envMapIntensity);
  }
  function g(c, r, l) {
    u(c, r), c.ior.value = r.ior, r.sheen > 0 && (c.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen), c.sheenRoughness.value = r.sheenRoughness, r.sheenColorMap && (c.sheenColorMap.value = r.sheenColorMap), r.sheenRoughnessMap && (c.sheenRoughnessMap.value = r.sheenRoughnessMap)), r.clearcoat > 0 && (c.clearcoat.value = r.clearcoat, c.clearcoatRoughness.value = r.clearcoatRoughness, r.clearcoatMap && (c.clearcoatMap.value = r.clearcoatMap), r.clearcoatRoughnessMap && (c.clearcoatRoughnessMap.value = r.clearcoatRoughnessMap), r.clearcoatNormalMap && (c.clearcoatNormalScale.value.copy(r.clearcoatNormalScale), c.clearcoatNormalMap.value = r.clearcoatNormalMap, r.side === eD && c.clearcoatNormalScale.value.negate())), r.transmission > 0 && (c.transmission.value = r.transmission, c.transmissionSamplerMap.value = l.texture, c.transmissionSamplerSize.value.set(l.width, l.height), r.transmissionMap && (c.transmissionMap.value = r.transmissionMap), c.thickness.value = r.thickness, r.thicknessMap && (c.thicknessMap.value = r.thicknessMap), c.attenuationDistance.value = r.attenuationDistance, c.attenuationColor.value.copy(r.attenuationColor)), c.specularIntensity.value = r.specularIntensity, c.specularColor.value.copy(r.specularColor), r.specularIntensityMap && (c.specularIntensityMap.value = r.specularIntensityMap), r.specularColorMap && (c.specularColorMap.value = r.specularColorMap);
  }
  function s(c, r) {
    r.matcap && (c.matcap.value = r.matcap), r.bumpMap && (c.bumpMap.value = r.bumpMap, c.bumpScale.value = r.bumpScale, r.side === eD && (c.bumpScale.value *= -1)), r.normalMap && (c.normalMap.value = r.normalMap, c.normalScale.value.copy(r.normalScale), r.side === eD && c.normalScale.value.negate()), r.displacementMap && (c.displacementMap.value = r.displacementMap, c.displacementScale.value = r.displacementScale, c.displacementBias.value = r.displacementBias);
  }
  function j(c, r) {
    r.displacementMap && (c.displacementMap.value = r.displacementMap, c.displacementScale.value = r.displacementScale, c.displacementBias.value = r.displacementBias);
  }
  function y(c, r) {
    r.displacementMap && (c.displacementMap.value = r.displacementMap, c.displacementScale.value = r.displacementScale, c.displacementBias.value = r.displacementBias), c.referencePosition.value.copy(r.referencePosition), c.nearDistance.value = r.nearDistance, c.farDistance.value = r.farDistance;
  }
  function a(c, r) {
    r.bumpMap && (c.bumpMap.value = r.bumpMap, c.bumpScale.value = r.bumpScale, r.side === eD && (c.bumpScale.value *= -1)), r.normalMap && (c.normalMap.value = r.normalMap, c.normalScale.value.copy(r.normalScale), r.side === eD && c.normalScale.value.negate()), r.displacementMap && (c.displacementMap.value = r.displacementMap, c.displacementScale.value = r.displacementScale, c.displacementBias.value = r.displacementBias);
  }
  return {
    refreshFogUniforms: M,
    refreshMaterialUniforms: D
  };
}
function Fs() {
  const n = fe("canvas");
  return n.style.display = "block", n;
}
function KM(n = {}) {
  const M = n.canvas !== void 0 ? n.canvas : Fs(), D = n.context !== void 0 ? n.context : null, t = n.alpha !== void 0 ? n.alpha : !1, e = n.depth !== void 0 ? n.depth : !0, N = n.stencil !== void 0 ? n.stencil : !0, A = n.antialias !== void 0 ? n.antialias : !1, z = n.premultipliedAlpha !== void 0 ? n.premultipliedAlpha : !0, I = n.preserveDrawingBuffer !== void 0 ? n.preserveDrawingBuffer : !1, i = n.powerPreference !== void 0 ? n.powerPreference : "default", T = n.failIfMajorPerformanceCaveat !== void 0 ? n.failIfMajorPerformanceCaveat : !1;
  let u = null, g = null;
  const s = [], j = [];
  this.domElement = M, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = st, this.physicallyCorrectLights = !1, this.toneMapping = it, this.toneMappingExposure = 1;
  const y = this;
  let a = !1, c = 0, r = 0, l = null, C = -1, E = null;
  const d = new PM(), p = new PM();
  let H = null, DM = M.width, G = M.height, o = 1, h = null, Y = null;
  const k = new PM(0, 0, DM, G), f = new PM(0, 0, DM, G);
  let Q = !1;
  const b = new ZN();
  let W = !1, IM = !1, Z = null;
  const V = new aM(), eM = new O(), uM = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function jM() {
    return l === null ? o : 1;
  }
  let _ = D;
  function kM(w, U) {
    for (let S = 0; S < w.length; S++) {
      const m = w[S], B = M.getContext(m, U);
      if (B !== null)
        return B;
    }
    return null;
  }
  try {
    const w = {
      alpha: !0,
      depth: e,
      stencil: N,
      antialias: A,
      premultipliedAlpha: z,
      preserveDrawingBuffer: I,
      powerPreference: i,
      failIfMajorPerformanceCaveat: T
    };
    if ("setAttribute" in M && M.setAttribute("data-engine", `three.js r${Wn}`), M.addEventListener("webglcontextlost", lM, !1), M.addEventListener("webglcontextrestored", v, !1), _ === null) {
      const U = ["webgl2", "webgl", "experimental-webgl"];
      if (y.isWebGL1Renderer === !0 && U.shift(), _ = kM(U, w), _ === null)
        throw kM(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    _.getShaderPrecisionFormat === void 0 && (_.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (w) {
    throw console.error("THREE.WebGLRenderer: " + w.message), w;
  }
  let rM, wM, zM, vM, OM, P, $, X, iM, nM, CM, xM, QM, FM, RM, x, L, R, J, gM, K, yM, sM;
  function NM() {
    rM = new Ir(_), wM = new er(_, rM, n), rM.init(wM), yM = new bs(_, rM, wM), zM = new Zs(_, rM, wM), vM = new gr(), OM = new ds(), P = new _s(_, rM, zM, OM, wM, yM, vM), $ = new nr(y), X = new ir(y), iM = new dT(_, wM), sM = new Dr(_, rM, iM, wM), nM = new Tr(_, iM, vM, sM), CM = new jr(_, nM, iM, vM), J = new cr(_, wM, P), x = new Nr(OM), xM = new ls(y, $, X, rM, wM, sM, x), QM = new Ps(OM), FM = new ps(), RM = new ms(rM, wM), R = new Mr(y, $, zM, CM, t, z), L = new di(y, CM, wM), gM = new tr(_, rM, vM, wM), K = new ur(_, rM, vM, wM), vM.programs = xM.programs, y.capabilities = wM, y.extensions = rM, y.properties = OM, y.renderLists = FM, y.shadowMap = L, y.state = zM, y.info = vM;
  }
  NM();
  const tM = new Rs(y, _);
  this.xr = tM, this.getContext = function() {
    return _;
  }, this.getContextAttributes = function() {
    return _.getContextAttributes();
  }, this.forceContextLoss = function() {
    const w = rM.get("WEBGL_lose_context");
    w && w.loseContext();
  }, this.forceContextRestore = function() {
    const w = rM.get("WEBGL_lose_context");
    w && w.restoreContext();
  }, this.getPixelRatio = function() {
    return o;
  }, this.setPixelRatio = function(w) {
    w !== void 0 && (o = w, this.setSize(DM, G, !1));
  }, this.getSize = function(w) {
    return w.set(DM, G);
  }, this.setSize = function(w, U, S) {
    if (tM.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    DM = w, G = U, M.width = Math.floor(w * o), M.height = Math.floor(U * o), S !== !1 && (M.style.width = w + "px", M.style.height = U + "px"), this.setViewport(0, 0, w, U);
  }, this.getDrawingBufferSize = function(w) {
    return w.set(DM * o, G * o).floor();
  }, this.setDrawingBufferSize = function(w, U, S) {
    DM = w, G = U, o = S, M.width = Math.floor(w * S), M.height = Math.floor(U * S), this.setViewport(0, 0, w, U);
  }, this.getCurrentViewport = function(w) {
    return w.copy(d);
  }, this.getViewport = function(w) {
    return w.copy(k);
  }, this.setViewport = function(w, U, S, m) {
    w.isVector4 ? k.set(w.x, w.y, w.z, w.w) : k.set(w, U, S, m), zM.viewport(d.copy(k).multiplyScalar(o).floor());
  }, this.getScissor = function(w) {
    return w.copy(f);
  }, this.setScissor = function(w, U, S, m) {
    w.isVector4 ? f.set(w.x, w.y, w.z, w.w) : f.set(w, U, S, m), zM.scissor(p.copy(f).multiplyScalar(o).floor());
  }, this.getScissorTest = function() {
    return Q;
  }, this.setScissorTest = function(w) {
    zM.setScissorTest(Q = w);
  }, this.setOpaqueSort = function(w) {
    h = w;
  }, this.setTransparentSort = function(w) {
    Y = w;
  }, this.getClearColor = function(w) {
    return w.copy(R.getClearColor());
  }, this.setClearColor = function() {
    R.setClearColor.apply(R, arguments);
  }, this.getClearAlpha = function() {
    return R.getClearAlpha();
  }, this.setClearAlpha = function() {
    R.setClearAlpha.apply(R, arguments);
  }, this.clear = function(w, U, S) {
    let m = 0;
    (w === void 0 || w) && (m |= 16384), (U === void 0 || U) && (m |= 256), (S === void 0 || S) && (m |= 1024), _.clear(m);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    M.removeEventListener("webglcontextlost", lM, !1), M.removeEventListener("webglcontextrestored", v, !1), FM.dispose(), RM.dispose(), OM.dispose(), $.dispose(), X.dispose(), CM.dispose(), sM.dispose(), xM.dispose(), tM.dispose(), tM.removeEventListener("sessionstart", UM), tM.removeEventListener("sessionend", qM), Z && (Z.dispose(), Z = null), CD.stop();
  };
  function lM(w) {
    w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), a = !0;
  }
  function v() {
    console.log("THREE.WebGLRenderer: Context Restored."), a = !1;
    const w = vM.autoReset, U = L.enabled, S = L.autoUpdate, m = L.needsUpdate, B = L.type;
    NM(), vM.autoReset = w, L.enabled = U, L.autoUpdate = S, L.needsUpdate = m, L.type = B;
  }
  function TM(w) {
    const U = w.target;
    U.removeEventListener("dispose", TM), AM(U);
  }
  function AM(w) {
    LM(w), OM.remove(w);
  }
  function LM(w) {
    const U = OM.get(w).programs;
    U !== void 0 && (U.forEach(function(S) {
      xM.releaseProgram(S);
    }), w.isShaderMaterial && xM.releaseShaderCache(w));
  }
  this.renderBufferDirect = function(w, U, S, m, B, EM) {
    U === null && (U = uM);
    const dM = B.isMesh && B.matrixWorld.determinant() < 0, hM = DI(w, U, S, m, B);
    zM.setMaterial(m, dM);
    let pM = S.index;
    const _M = S.attributes.position;
    if (pM === null) {
      if (_M === void 0 || _M.count === 0)
        return;
    } else if (pM.count === 0)
      return;
    let fM = 1;
    m.wireframe === !0 && (pM = nM.getWireframeAttribute(S), fM = 2), sM.setup(B, m, hM, S, pM);
    let mM, $M = gM;
    pM !== null && (mM = iM.get(pM), $M = K, $M.setIndex(mM));
    const ot = pM !== null ? pM.count : _M.count, pt = S.drawRange.start * fM, SM = S.drawRange.count * fM, mD = EM !== null ? EM.start * fM : 0, tD = EM !== null ? EM.count * fM : 1 / 0, kD = Math.max(pt, mD), Ve = Math.min(ot, pt + SM, mD + tD) - 1, SD = Math.max(0, Ve - kD + 1);
    if (SD !== 0) {
      if (B.isMesh)
        m.wireframe === !0 ? (zM.setLineWidth(m.wireframeLinewidth * jM()), $M.setMode(1)) : $M.setMode(4);
      else if (B.isLine) {
        let FD = m.linewidth;
        FD === void 0 && (FD = 1), zM.setLineWidth(FD * jM()), B.isLineSegments ? $M.setMode(1) : B.isLineLoop ? $M.setMode(2) : $M.setMode(3);
      } else
        B.isPoints ? $M.setMode(0) : B.isSprite && $M.setMode(4);
      if (B.isInstancedMesh)
        $M.renderInstances(kD, SD, B.count);
      else if (S.isInstancedBufferGeometry) {
        const FD = Math.min(S.instanceCount, S._maxInstanceCount);
        $M.renderInstances(kD, SD, FD);
      } else
        $M.render(kD, SD);
    }
  }, this.compile = function(w, U) {
    g = RM.get(w), g.init(), j.push(g), w.traverseVisible(function(S) {
      S.isLight && S.layers.test(U.layers) && (g.pushLight(S), S.castShadow && g.pushShadow(S));
    }), g.setupLights(y.physicallyCorrectLights), w.traverse(function(S) {
      const m = S.material;
      if (m)
        if (Array.isArray(m))
          for (let B = 0; B < m.length; B++) {
            const EM = m[B];
            BN(EM, w, S);
          }
        else
          BN(m, w, S);
    }), j.pop(), g = null;
  };
  let F = null;
  function oM(w) {
    F && F(w);
  }
  function UM() {
    CD.stop();
  }
  function qM() {
    CD.start();
  }
  const CD = new si();
  CD.setAnimationLoop(oM), typeof window < "u" && CD.setContext(window), this.setAnimationLoop = function(w) {
    F = w, tM.setAnimationLoop(w), w === null ? CD.stop() : CD.start();
  }, tM.addEventListener("sessionstart", UM), tM.addEventListener("sessionend", qM), this.render = function(w, U) {
    if (U !== void 0 && U.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (a === !0)
      return;
    w.autoUpdate === !0 && w.updateMatrixWorld(), U.parent === null && U.updateMatrixWorld(), tM.enabled === !0 && tM.isPresenting === !0 && (tM.cameraAutoUpdate === !0 && tM.updateCamera(U), U = tM.getCamera()), w.isScene === !0 && w.onBeforeRender(y, w, U, l), g = RM.get(w, j.length), g.init(), j.push(g), V.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), b.setFromProjectionMatrix(V), IM = this.localClippingEnabled, W = x.init(this.clippingPlanes, IM, U), u = FM.get(w, s.length), u.init(), s.push(u), JM(w, U, 0, y.sortObjects), u.finish(), y.sortObjects === !0 && u.sort(h, Y), W === !0 && x.beginShadows();
    const S = g.state.shadowsArray;
    if (L.render(S, w, U), W === !0 && x.endShadows(), this.info.autoReset === !0 && this.info.reset(), R.render(u, w), g.setupLights(y.physicallyCorrectLights), U.isArrayCamera) {
      const m = U.cameras;
      for (let B = 0, EM = m.length; B < EM; B++) {
        const dM = m[B];
        fD(u, w, dM, dM.viewport);
      }
    } else
      fD(u, w, U);
    l !== null && (P.updateMultisampleRenderTarget(l), P.updateRenderTargetMipmap(l)), w.isScene === !0 && w.onAfterRender(y, w, U), zM.buffers.depth.setTest(!0), zM.buffers.depth.setMask(!0), zM.buffers.color.setMask(!0), zM.setPolygonOffset(!1), sM.resetDefaultState(), C = -1, E = null, j.pop(), j.length > 0 ? g = j[j.length - 1] : g = null, s.pop(), s.length > 0 ? u = s[s.length - 1] : u = null;
  };
  function JM(w, U, S, m) {
    if (w.visible === !1)
      return;
    if (w.layers.test(U.layers)) {
      if (w.isGroup)
        S = w.renderOrder;
      else if (w.isLOD)
        w.autoUpdate === !0 && w.update(U);
      else if (w.isLight)
        g.pushLight(w), w.castShadow && g.pushShadow(w);
      else if (w.isSprite) {
        if (!w.frustumCulled || b.intersectsSprite(w)) {
          m && eM.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);
          const dM = CM.update(w), hM = w.material;
          hM.visible && u.push(w, dM, hM, S, eM.z, null);
        }
      } else if ((w.isMesh || w.isLine || w.isPoints) && (w.isSkinnedMesh && w.skeleton.frame !== vM.render.frame && (w.skeleton.update(), w.skeleton.frame = vM.render.frame), !w.frustumCulled || b.intersectsObject(w))) {
        m && eM.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);
        const dM = CM.update(w), hM = w.material;
        if (Array.isArray(hM)) {
          const pM = dM.groups;
          for (let _M = 0, fM = pM.length; _M < fM; _M++) {
            const mM = pM[_M], $M = hM[mM.materialIndex];
            $M && $M.visible && u.push(w, dM, $M, S, eM.z, mM);
          }
        } else
          hM.visible && u.push(w, dM, hM, S, eM.z, null);
      }
    }
    const EM = w.children;
    for (let dM = 0, hM = EM.length; dM < hM; dM++)
      JM(EM[dM], U, S, m);
  }
  function fD(w, U, S, m) {
    const B = w.opaque, EM = w.transmissive, dM = w.transparent;
    g.setupLightsView(S), EM.length > 0 && PD(B, U, S), m && zM.viewport(d.copy(m)), B.length > 0 && Be(B, U, S), EM.length > 0 && Be(EM, U, S), dM.length > 0 && Be(dM, U, S);
  }
  function PD(w, U, S) {
    if (Z === null) {
      const dM = A === !0 && wM.isWebGL2 === !0 ? Jn : dD;
      Z = new dM(1024, 1024, {
        generateMipmaps: !0,
        type: yM.convert(Me) !== null ? Me : It,
        minFilter: kN,
        magFilter: ND,
        wrapS: xD,
        wrapT: xD,
        useRenderToTexture: rM.has("WEBGL_multisampled_render_to_texture")
      });
    }
    const m = y.getRenderTarget();
    y.setRenderTarget(Z), y.clear();
    const B = y.toneMapping;
    y.toneMapping = it, Be(w, U, S), y.toneMapping = B, P.updateMultisampleRenderTarget(Z), P.updateRenderTargetMipmap(Z), y.setRenderTarget(m);
  }
  function Be(w, U, S) {
    const m = U.isScene === !0 ? U.overrideMaterial : null;
    for (let B = 0, EM = w.length; B < EM; B++) {
      const dM = w[B], hM = dM.object, pM = dM.geometry, _M = m === null ? dM.material : m, fM = dM.group;
      hM.layers.test(S.layers) && MI(hM, U, S, pM, _M, fM);
    }
  }
  function MI(w, U, S, m, B, EM) {
    w.onBeforeRender(y, U, S, m, B, EM), w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), B.onBeforeRender(y, U, S, m, w, EM), B.transparent === !0 && B.side === Ne ? (B.side = eD, B.needsUpdate = !0, y.renderBufferDirect(S, U, m, B, w, EM), B.side = Ye, B.needsUpdate = !0, y.renderBufferDirect(S, U, m, B, w, EM), B.side = Ne) : y.renderBufferDirect(S, U, m, B, w, EM), w.onAfterRender(y, U, S, m, B, EM);
  }
  function BN(w, U, S) {
    U.isScene !== !0 && (U = uM);
    const m = OM.get(w), B = g.state.lights, EM = g.state.shadowsArray, dM = B.state.version, hM = xM.getParameters(w, B.state, EM, U, S), pM = xM.getProgramCacheKey(hM);
    let _M = m.programs;
    m.environment = w.isMeshStandardMaterial ? U.environment : null, m.fog = U.fog, m.envMap = (w.isMeshStandardMaterial ? X : $).get(w.envMap || m.environment), _M === void 0 && (w.addEventListener("dispose", TM), _M = /* @__PURE__ */ new Map(), m.programs = _M);
    let fM = _M.get(pM);
    if (fM !== void 0) {
      if (m.currentProgram === fM && m.lightsStateVersion === dM)
        return jA(w, hM), fM;
    } else
      hM.uniforms = xM.getUniforms(w), w.onBuild(S, hM, y), w.onBeforeCompile(hM, y), fM = xM.acquireProgram(hM, pM), _M.set(pM, fM), m.uniforms = hM.uniforms;
    const mM = m.uniforms;
    (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === !0) && (mM.clippingPlanes = x.uniform), jA(w, hM), m.needsLights = eI(w), m.lightsStateVersion = dM, m.needsLights && (mM.ambientLightColor.value = B.state.ambient, mM.lightProbe.value = B.state.probe, mM.directionalLights.value = B.state.directional, mM.directionalLightShadows.value = B.state.directionalShadow, mM.spotLights.value = B.state.spot, mM.spotLightShadows.value = B.state.spotShadow, mM.rectAreaLights.value = B.state.rectArea, mM.ltc_1.value = B.state.rectAreaLTC1, mM.ltc_2.value = B.state.rectAreaLTC2, mM.pointLights.value = B.state.point, mM.pointLightShadows.value = B.state.pointShadow, mM.hemisphereLights.value = B.state.hemi, mM.directionalShadowMap.value = B.state.directionalShadowMap, mM.directionalShadowMatrix.value = B.state.directionalShadowMatrix, mM.spotShadowMap.value = B.state.spotShadowMap, mM.spotShadowMatrix.value = B.state.spotShadowMatrix, mM.pointShadowMap.value = B.state.pointShadowMap, mM.pointShadowMatrix.value = B.state.pointShadowMatrix);
    const $M = fM.getUniforms(), ot = ut.seqWithValue($M.seq, mM);
    return m.currentProgram = fM, m.uniformsList = ot, fM;
  }
  function jA(w, U) {
    const S = OM.get(w);
    S.outputEncoding = U.outputEncoding, S.instancing = U.instancing, S.skinning = U.skinning, S.morphTargets = U.morphTargets, S.morphNormals = U.morphNormals, S.morphTargetsCount = U.morphTargetsCount, S.numClippingPlanes = U.numClippingPlanes, S.numIntersection = U.numClipIntersection, S.vertexAlphas = U.vertexAlphas, S.vertexTangents = U.vertexTangents, S.toneMapping = U.toneMapping;
  }
  function DI(w, U, S, m, B) {
    U.isScene !== !0 && (U = uM), P.resetTextureUnits();
    const EM = U.fog, dM = m.isMeshStandardMaterial ? U.environment : null, hM = l === null ? y.outputEncoding : l.isXRRenderTarget === !0 ? l.texture.encoding : st, pM = (m.isMeshStandardMaterial ? X : $).get(m.envMap || dM), _M = m.vertexColors === !0 && !!S.attributes.color && S.attributes.color.itemSize === 4, fM = !!m.normalMap && !!S.attributes.tangent, mM = !!S.morphAttributes.position, $M = !!S.morphAttributes.normal, ot = S.morphAttributes.position ? S.morphAttributes.position.length : 0, pt = m.toneMapped ? y.toneMapping : it, SM = OM.get(m), mD = g.state.lights;
    if (W === !0 && (IM === !0 || w !== E)) {
      const hD = w === E && m.id === C;
      x.setState(m, w, hD);
    }
    let tD = !1;
    m.version === SM.__version ? (SM.needsLights && SM.lightsStateVersion !== mD.state.version || SM.outputEncoding !== hM || B.isInstancedMesh && SM.instancing === !1 || !B.isInstancedMesh && SM.instancing === !0 || B.isSkinnedMesh && SM.skinning === !1 || !B.isSkinnedMesh && SM.skinning === !0 || SM.envMap !== pM || m.fog && SM.fog !== EM || SM.numClippingPlanes !== void 0 && (SM.numClippingPlanes !== x.numPlanes || SM.numIntersection !== x.numIntersection) || SM.vertexAlphas !== _M || SM.vertexTangents !== fM || SM.morphTargets !== mM || SM.morphNormals !== $M || SM.toneMapping !== pt || wM.isWebGL2 === !0 && SM.morphTargetsCount !== ot) && (tD = !0) : (tD = !0, SM.__version = m.version);
    let kD = SM.currentProgram;
    tD === !0 && (kD = BN(m, U, B));
    let Ve = !1, SD = !1, FD = !1;
    const rD = kD.getUniforms(), je = SM.uniforms;
    if (zM.useProgram(kD.program) && (Ve = !0, SD = !0, FD = !0), m.id !== C && (C = m.id, SD = !0), Ve || E !== w) {
      if (rD.setValue(_, "projectionMatrix", w.projectionMatrix), wM.logarithmicDepthBuffer && rD.setValue(_, "logDepthBufFC", 2 / (Math.log(w.far + 1) / Math.LN2)), E !== w && (E = w, SD = !0, FD = !0), m.isShaderMaterial || m.isMeshPhongMaterial || m.isMeshToonMaterial || m.isMeshStandardMaterial || m.envMap) {
        const hD = rD.map.cameraPosition;
        hD !== void 0 && hD.setValue(_, eM.setFromMatrixPosition(w.matrixWorld));
      }
      (m.isMeshPhongMaterial || m.isMeshToonMaterial || m.isMeshLambertMaterial || m.isMeshBasicMaterial || m.isMeshStandardMaterial || m.isShaderMaterial) && rD.setValue(_, "isOrthographic", w.isOrthographicCamera === !0), (m.isMeshPhongMaterial || m.isMeshToonMaterial || m.isMeshLambertMaterial || m.isMeshBasicMaterial || m.isMeshStandardMaterial || m.isShaderMaterial || m.isShadowMaterial || B.isSkinnedMesh) && rD.setValue(_, "viewMatrix", w.matrixWorldInverse);
    }
    if (B.isSkinnedMesh) {
      rD.setOptional(_, B, "bindMatrix"), rD.setOptional(_, B, "bindMatrixInverse");
      const hD = B.skeleton;
      hD && (wM.floatVertexTextures ? (hD.boneTexture === null && hD.computeBoneTexture(), rD.setValue(_, "boneTexture", hD.boneTexture, P), rD.setValue(_, "boneTextureSize", hD.boneTextureSize)) : rD.setOptional(_, hD, "boneMatrices"));
    }
    return !!S && (S.morphAttributes.position !== void 0 || S.morphAttributes.normal !== void 0) && J.update(B, S, m, kD), (SD || SM.receiveShadow !== B.receiveShadow) && (SM.receiveShadow = B.receiveShadow, rD.setValue(_, "receiveShadow", B.receiveShadow)), SD && (rD.setValue(_, "toneMappingExposure", y.toneMappingExposure), SM.needsLights && tI(je, FD), EM && m.fog && QM.refreshFogUniforms(je, EM), QM.refreshMaterialUniforms(je, m, o, G, Z), ut.upload(_, SM.uniformsList, je, P)), m.isShaderMaterial && m.uniformsNeedUpdate === !0 && (ut.upload(_, SM.uniformsList, je, P), m.uniformsNeedUpdate = !1), m.isSpriteMaterial && rD.setValue(_, "center", B.center), rD.setValue(_, "modelViewMatrix", B.modelViewMatrix), rD.setValue(_, "normalMatrix", B.normalMatrix), rD.setValue(_, "modelMatrix", B.matrixWorld), kD;
  }
  function tI(w, U) {
    w.ambientLightColor.needsUpdate = U, w.lightProbe.needsUpdate = U, w.directionalLights.needsUpdate = U, w.directionalLightShadows.needsUpdate = U, w.pointLights.needsUpdate = U, w.pointLightShadows.needsUpdate = U, w.spotLights.needsUpdate = U, w.spotLightShadows.needsUpdate = U, w.rectAreaLights.needsUpdate = U, w.hemisphereLights.needsUpdate = U;
  }
  function eI(w) {
    return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return c;
  }, this.getActiveMipmapLevel = function() {
    return r;
  }, this.getRenderTarget = function() {
    return l;
  }, this.setRenderTargetTextures = function(w, U, S) {
    OM.get(w.texture).__webglTexture = U, OM.get(w.depthTexture).__webglTexture = S;
    const m = OM.get(w);
    m.__hasExternalTextures = !0, m.__hasExternalTextures && (m.__autoAllocateDepthBuffer = S === void 0, m.__autoAllocateDepthBuffer || w.useRenderToTexture && (console.warn("render-to-texture extension was disabled because an external texture was provided"), w.useRenderToTexture = !1, w.useRenderbuffer = !0));
  }, this.setRenderTargetFramebuffer = function(w, U) {
    const S = OM.get(w);
    S.__webglFramebuffer = U, S.__useDefaultFramebuffer = U === void 0;
  }, this.setRenderTarget = function(w, U = 0, S = 0) {
    l = w, c = U, r = S;
    let m = !0;
    if (w) {
      const pM = OM.get(w);
      pM.__useDefaultFramebuffer !== void 0 ? (zM.bindFramebuffer(36160, null), m = !1) : pM.__webglFramebuffer === void 0 ? P.setupRenderTarget(w) : pM.__hasExternalTextures && P.rebindTextures(w, OM.get(w.texture).__webglTexture, OM.get(w.depthTexture).__webglTexture);
    }
    let B = null, EM = !1, dM = !1;
    if (w) {
      const pM = w.texture;
      (pM.isDataTexture3D || pM.isDataTexture2DArray) && (dM = !0);
      const _M = OM.get(w).__webglFramebuffer;
      w.isWebGLCubeRenderTarget ? (B = _M[U], EM = !0) : w.useRenderbuffer ? B = OM.get(w).__webglMultisampledFramebuffer : B = _M, d.copy(w.viewport), p.copy(w.scissor), H = w.scissorTest;
    } else
      d.copy(k).multiplyScalar(o).floor(), p.copy(f).multiplyScalar(o).floor(), H = Q;
    if (zM.bindFramebuffer(36160, B) && wM.drawBuffers && m && zM.drawBuffers(w, B), zM.viewport(d), zM.scissor(p), zM.setScissorTest(H), EM) {
      const pM = OM.get(w.texture);
      _.framebufferTexture2D(36160, 36064, 34069 + U, pM.__webglTexture, S);
    } else if (dM) {
      const pM = OM.get(w.texture), _M = U || 0;
      _.framebufferTextureLayer(36160, 36064, pM.__webglTexture, S || 0, _M);
    }
    C = -1;
  }, this.readRenderTargetPixels = function(w, U, S, m, B, EM, dM) {
    if (!(w && w.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let hM = OM.get(w).__webglFramebuffer;
    if (w.isWebGLCubeRenderTarget && dM !== void 0 && (hM = hM[dM]), hM) {
      zM.bindFramebuffer(36160, hM);
      try {
        const pM = w.texture, _M = pM.format, fM = pM.type;
        if (_M !== yD && yM.convert(_M) !== _.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const mM = fM === Me && (rM.has("EXT_color_buffer_half_float") || wM.isWebGL2 && rM.has("EXT_color_buffer_float"));
        if (fM !== It && yM.convert(fM) !== _.getParameter(35738) && !(fM === Ot && (wM.isWebGL2 || rM.has("OES_texture_float") || rM.has("WEBGL_color_buffer_float"))) && !mM) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        _.checkFramebufferStatus(36160) === 36053 ? U >= 0 && U <= w.width - m && S >= 0 && S <= w.height - B && _.readPixels(U, S, m, B, yM.convert(_M), yM.convert(fM), EM) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
      } finally {
        const pM = l !== null ? OM.get(l).__webglFramebuffer : null;
        zM.bindFramebuffer(36160, pM);
      }
    }
  }, this.copyFramebufferToTexture = function(w, U, S = 0) {
    if (U.isFramebufferTexture !== !0) {
      console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
      return;
    }
    const m = Math.pow(2, -S), B = Math.floor(U.image.width * m), EM = Math.floor(U.image.height * m);
    P.setTexture2D(U, 0), _.copyTexSubImage2D(3553, S, 0, 0, w.x, w.y, B, EM), zM.unbindTexture();
  }, this.copyTextureToTexture = function(w, U, S, m = 0) {
    const B = U.image.width, EM = U.image.height, dM = yM.convert(S.format), hM = yM.convert(S.type);
    P.setTexture2D(S, 0), _.pixelStorei(37440, S.flipY), _.pixelStorei(37441, S.premultiplyAlpha), _.pixelStorei(3317, S.unpackAlignment), U.isDataTexture ? _.texSubImage2D(3553, m, w.x, w.y, B, EM, dM, hM, U.image.data) : U.isCompressedTexture ? _.compressedTexSubImage2D(3553, m, w.x, w.y, U.mipmaps[0].width, U.mipmaps[0].height, dM, U.mipmaps[0].data) : _.texSubImage2D(3553, m, w.x, w.y, dM, hM, U.image), m === 0 && S.generateMipmaps && _.generateMipmap(3553), zM.unbindTexture();
  }, this.copyTextureToTexture3D = function(w, U, S, m, B = 0) {
    if (y.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const EM = w.max.x - w.min.x + 1, dM = w.max.y - w.min.y + 1, hM = w.max.z - w.min.z + 1, pM = yM.convert(m.format), _M = yM.convert(m.type);
    let fM;
    if (m.isDataTexture3D)
      P.setTexture3D(m, 0), fM = 32879;
    else if (m.isDataTexture2DArray)
      P.setTexture2DArray(m, 0), fM = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    _.pixelStorei(37440, m.flipY), _.pixelStorei(37441, m.premultiplyAlpha), _.pixelStorei(3317, m.unpackAlignment);
    const mM = _.getParameter(3314), $M = _.getParameter(32878), ot = _.getParameter(3316), pt = _.getParameter(3315), SM = _.getParameter(32877), mD = S.isCompressedTexture ? S.mipmaps[0] : S.image;
    _.pixelStorei(3314, mD.width), _.pixelStorei(32878, mD.height), _.pixelStorei(3316, w.min.x), _.pixelStorei(3315, w.min.y), _.pixelStorei(32877, w.min.z), S.isDataTexture || S.isDataTexture3D ? _.texSubImage3D(fM, B, U.x, U.y, U.z, EM, dM, hM, pM, _M, mD.data) : S.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), _.compressedTexSubImage3D(fM, B, U.x, U.y, U.z, EM, dM, hM, pM, mD.data)) : _.texSubImage3D(fM, B, U.x, U.y, U.z, EM, dM, hM, pM, _M, mD), _.pixelStorei(3314, mM), _.pixelStorei(32878, $M), _.pixelStorei(3316, ot), _.pixelStorei(3315, pt), _.pixelStorei(32877, SM), B === 0 && m.generateMipmaps && _.generateMipmap(fM), zM.unbindTexture();
  }, this.initTexture = function(w) {
    P.setTexture2D(w, 0), zM.unbindTexture();
  }, this.resetState = function() {
    c = 0, r = 0, l = null, zM.reset(), sM.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
KM.prototype.isWebGLRenderer = !0;
class Bs extends KM {
}
Bs.prototype.isWebGL1Renderer = !0;
class AA extends ZM {
  constructor() {
    super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(M, D) {
    return super.copy(M, D), M.background !== null && (this.background = M.background.clone()), M.environment !== null && (this.environment = M.environment.clone()), M.fog !== null && (this.fog = M.fog.clone()), M.overrideMaterial !== null && (this.overrideMaterial = M.overrideMaterial.clone()), this.autoUpdate = M.autoUpdate, this.matrixAutoUpdate = M.matrixAutoUpdate, this;
  }
  toJSON(M) {
    const D = super.toJSON(M);
    return this.fog !== null && (D.object.fog = this.fog.toJSON()), D;
  }
}
AA.prototype.isScene = !0;
class Pe {
  constructor(M, D) {
    this.array = M, this.stride = D, this.count = M !== void 0 ? M.length / D : 0, this.usage = Qe, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = bD();
  }
  onUploadCallback() {
  }
  set needsUpdate(M) {
    M === !0 && this.version++;
  }
  setUsage(M) {
    return this.usage = M, this;
  }
  copy(M) {
    return this.array = new M.array.constructor(M.array), this.count = M.count, this.stride = M.stride, this.usage = M.usage, this;
  }
  copyAt(M, D, t) {
    M *= this.stride, t *= D.stride;
    for (let e = 0, N = this.stride; e < N; e++)
      this.array[M + e] = D.array[t + e];
    return this;
  }
  set(M, D = 0) {
    return this.array.set(M, D), this;
  }
  clone(M) {
    M.arrayBuffers === void 0 && (M.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = bD()), M.arrayBuffers[this.array.buffer._uuid] === void 0 && (M.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const D = new this.array.constructor(M.arrayBuffers[this.array.buffer._uuid]), t = new this.constructor(D, this.stride);
    return t.setUsage(this.usage), t;
  }
  onUpload(M) {
    return this.onUploadCallback = M, this;
  }
  toJSON(M) {
    return M.arrayBuffers === void 0 && (M.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = bD()), M.arrayBuffers[this.array.buffer._uuid] === void 0 && (M.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
Pe.prototype.isInterleavedBuffer = !0;
const MD = /* @__PURE__ */ new O();
class me {
  constructor(M, D, t, e = !1) {
    this.name = "", this.data = M, this.itemSize = D, this.offset = t, this.normalized = e === !0;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(M) {
    this.data.needsUpdate = M;
  }
  applyMatrix4(M) {
    for (let D = 0, t = this.data.count; D < t; D++)
      MD.x = this.getX(D), MD.y = this.getY(D), MD.z = this.getZ(D), MD.applyMatrix4(M), this.setXYZ(D, MD.x, MD.y, MD.z);
    return this;
  }
  applyNormalMatrix(M) {
    for (let D = 0, t = this.count; D < t; D++)
      MD.x = this.getX(D), MD.y = this.getY(D), MD.z = this.getZ(D), MD.applyNormalMatrix(M), this.setXYZ(D, MD.x, MD.y, MD.z);
    return this;
  }
  transformDirection(M) {
    for (let D = 0, t = this.count; D < t; D++)
      MD.x = this.getX(D), MD.y = this.getY(D), MD.z = this.getZ(D), MD.transformDirection(M), this.setXYZ(D, MD.x, MD.y, MD.z);
    return this;
  }
  setX(M, D) {
    return this.data.array[M * this.data.stride + this.offset] = D, this;
  }
  setY(M, D) {
    return this.data.array[M * this.data.stride + this.offset + 1] = D, this;
  }
  setZ(M, D) {
    return this.data.array[M * this.data.stride + this.offset + 2] = D, this;
  }
  setW(M, D) {
    return this.data.array[M * this.data.stride + this.offset + 3] = D, this;
  }
  getX(M) {
    return this.data.array[M * this.data.stride + this.offset];
  }
  getY(M) {
    return this.data.array[M * this.data.stride + this.offset + 1];
  }
  getZ(M) {
    return this.data.array[M * this.data.stride + this.offset + 2];
  }
  getW(M) {
    return this.data.array[M * this.data.stride + this.offset + 3];
  }
  setXY(M, D, t) {
    return M = M * this.data.stride + this.offset, this.data.array[M + 0] = D, this.data.array[M + 1] = t, this;
  }
  setXYZ(M, D, t, e) {
    return M = M * this.data.stride + this.offset, this.data.array[M + 0] = D, this.data.array[M + 1] = t, this.data.array[M + 2] = e, this;
  }
  setXYZW(M, D, t, e, N) {
    return M = M * this.data.stride + this.offset, this.data.array[M + 0] = D, this.data.array[M + 1] = t, this.data.array[M + 2] = e, this.data.array[M + 3] = N, this;
  }
  clone(M) {
    if (M === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
      const D = [];
      for (let t = 0; t < this.count; t++) {
        const e = t * this.data.stride + this.offset;
        for (let N = 0; N < this.itemSize; N++)
          D.push(this.data.array[e + N]);
      }
      return new AD(new this.array.constructor(D), this.itemSize, this.normalized);
    } else
      return M.interleavedBuffers === void 0 && (M.interleavedBuffers = {}), M.interleavedBuffers[this.data.uuid] === void 0 && (M.interleavedBuffers[this.data.uuid] = this.data.clone(M)), new me(M.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(M) {
    if (M === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
      const D = [];
      for (let t = 0; t < this.count; t++) {
        const e = t * this.data.stride + this.offset;
        for (let N = 0; N < this.itemSize; N++)
          D.push(this.data.array[e + N]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: D,
        normalized: this.normalized
      };
    } else
      return M.interleavedBuffers === void 0 && (M.interleavedBuffers = {}), M.interleavedBuffers[this.data.uuid] === void 0 && (M.interleavedBuffers[this.data.uuid] = this.data.toJSON(M)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
me.prototype.isInterleavedBufferAttribute = !0;
class pi extends ID {
  constructor(M) {
    super(), this.type = "SpriteMaterial", this.color = new cM(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this.map = M.map, this.alphaMap = M.alphaMap, this.rotation = M.rotation, this.sizeAttenuation = M.sizeAttenuation, this;
  }
}
pi.prototype.isSpriteMaterial = !0;
let Bt;
const Le = /* @__PURE__ */ new O(), Vt = /* @__PURE__ */ new O(), Ht = /* @__PURE__ */ new O(), Gt = /* @__PURE__ */ new q(), we = /* @__PURE__ */ new q(), hi = /* @__PURE__ */ new aM(), rN = /* @__PURE__ */ new O(), Oe = /* @__PURE__ */ new O(), sN = /* @__PURE__ */ new O(), vz = /* @__PURE__ */ new q(), ln = /* @__PURE__ */ new q(), pz = /* @__PURE__ */ new q();
class Vs extends ZM {
  constructor(M) {
    if (super(), this.type = "Sprite", Bt === void 0) {
      Bt = new VM();
      const D = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), t = new Pe(D, 5);
      Bt.setIndex([0, 1, 2, 0, 2, 3]), Bt.setAttribute("position", new me(t, 3, 0, !1)), Bt.setAttribute("uv", new me(t, 2, 3, !1));
    }
    this.geometry = Bt, this.material = M !== void 0 ? M : new pi(), this.center = new q(0.5, 0.5);
  }
  raycast(M, D) {
    M.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Vt.setFromMatrixScale(this.matrixWorld), hi.copy(M.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(M.camera.matrixWorldInverse, this.matrixWorld), Ht.setFromMatrixPosition(this.modelViewMatrix), M.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Vt.multiplyScalar(-Ht.z);
    const t = this.material.rotation;
    let e, N;
    t !== 0 && (N = Math.cos(t), e = Math.sin(t));
    const A = this.center;
    cN(rN.set(-0.5, -0.5, 0), Ht, A, Vt, e, N), cN(Oe.set(0.5, -0.5, 0), Ht, A, Vt, e, N), cN(sN.set(0.5, 0.5, 0), Ht, A, Vt, e, N), vz.set(0, 0), ln.set(1, 0), pz.set(1, 1);
    let z = M.ray.intersectTriangle(rN, Oe, sN, !1, Le);
    if (z === null && (cN(Oe.set(-0.5, 0.5, 0), Ht, A, Vt, e, N), ln.set(0, 1), z = M.ray.intersectTriangle(rN, sN, Oe, !1, Le), z === null))
      return;
    const I = M.ray.origin.distanceTo(Le);
    I < M.near || I > M.far || D.push({
      distance: I,
      point: Le.clone(),
      uv: DD.getUV(Le, rN, Oe, sN, vz, ln, pz, new q()),
      face: null,
      object: this
    });
  }
  copy(M) {
    return super.copy(M), M.center !== void 0 && this.center.copy(M.center), this.material = M.material, this;
  }
}
Vs.prototype.isSprite = !0;
function cN(n, M, D, t, e, N) {
  Gt.subVectors(n, D).addScalar(0.5).multiply(t), e !== void 0 ? (we.x = N * Gt.x - e * Gt.y, we.y = e * Gt.x + N * Gt.y) : we.copy(Gt), n.copy(M), n.x += we.x, n.y += we.y, n.applyMatrix4(hi);
}
const hz = /* @__PURE__ */ new O(), Yz = /* @__PURE__ */ new PM(), Uz = /* @__PURE__ */ new PM(), Hs = /* @__PURE__ */ new O(), Qz = /* @__PURE__ */ new aM();
class Yi extends nD {
  constructor(M, D) {
    super(M, D), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new aM(), this.bindMatrixInverse = new aM();
  }
  copy(M) {
    return super.copy(M), this.bindMode = M.bindMode, this.bindMatrix.copy(M.bindMatrix), this.bindMatrixInverse.copy(M.bindMatrixInverse), this.skeleton = M.skeleton, this;
  }
  bind(M, D) {
    this.skeleton = M, D === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), D = this.matrixWorld), this.bindMatrix.copy(D), this.bindMatrixInverse.copy(D).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const M = new PM(), D = this.geometry.attributes.skinWeight;
    for (let t = 0, e = D.count; t < e; t++) {
      M.x = D.getX(t), M.y = D.getY(t), M.z = D.getZ(t), M.w = D.getW(t);
      const N = 1 / M.manhattanLength();
      N !== 1 / 0 ? M.multiplyScalar(N) : M.set(1, 0, 0, 0), D.setXYZW(t, M.x, M.y, M.z, M.w);
    }
  }
  updateMatrixWorld(M) {
    super.updateMatrixWorld(M), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(M, D) {
    const t = this.skeleton, e = this.geometry;
    Yz.fromBufferAttribute(e.attributes.skinIndex, M), Uz.fromBufferAttribute(e.attributes.skinWeight, M), hz.copy(D).applyMatrix4(this.bindMatrix), D.set(0, 0, 0);
    for (let N = 0; N < 4; N++) {
      const A = Uz.getComponent(N);
      if (A !== 0) {
        const z = Yz.getComponent(N);
        Qz.multiplyMatrices(t.bones[z].matrixWorld, t.boneInverses[z]), D.addScaledVector(Hs.copy(hz).applyMatrix4(Qz), A);
      }
    }
    return D.applyMatrix4(this.bindMatrixInverse);
  }
}
Yi.prototype.isSkinnedMesh = !0;
class Gs extends ZM {
  constructor() {
    super(), this.type = "Bone";
  }
}
Gs.prototype.isBone = !0;
class Ws extends iD {
  constructor(M = null, D = 1, t = 1, e, N, A, z, I, i = ND, T = ND, u, g) {
    super(null, A, z, I, i, T, e, N, u, g), this.image = { data: M, width: D, height: t }, this.magFilter = i, this.minFilter = T, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
Ws.prototype.isDataTexture = !0;
class Pn extends AD {
  constructor(M, D, t, e = 1) {
    typeof t == "number" && (e = t, t = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(M, D, t), this.meshPerAttribute = e;
  }
  copy(M) {
    return super.copy(M), this.meshPerAttribute = M.meshPerAttribute, this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.meshPerAttribute = this.meshPerAttribute, M.isInstancedBufferAttribute = !0, M;
  }
}
Pn.prototype.isInstancedBufferAttribute = !0;
const fz = /* @__PURE__ */ new aM(), mz = /* @__PURE__ */ new aM(), jN = [], xe = /* @__PURE__ */ new nD();
class qs extends nD {
  constructor(M, D, t) {
    super(M, D), this.instanceMatrix = new Pn(new Float32Array(t * 16), 16), this.instanceColor = null, this.count = t, this.frustumCulled = !1;
  }
  copy(M) {
    return super.copy(M), this.instanceMatrix.copy(M.instanceMatrix), M.instanceColor !== null && (this.instanceColor = M.instanceColor.clone()), this.count = M.count, this;
  }
  getColorAt(M, D) {
    D.fromArray(this.instanceColor.array, M * 3);
  }
  getMatrixAt(M, D) {
    D.fromArray(this.instanceMatrix.array, M * 16);
  }
  raycast(M, D) {
    const t = this.matrixWorld, e = this.count;
    if (xe.geometry = this.geometry, xe.material = this.material, xe.material !== void 0)
      for (let N = 0; N < e; N++) {
        this.getMatrixAt(N, fz), mz.multiplyMatrices(t, fz), xe.matrixWorld = mz, xe.raycast(M, jN);
        for (let A = 0, z = jN.length; A < z; A++) {
          const I = jN[A];
          I.instanceId = N, I.object = this, D.push(I);
        }
        jN.length = 0;
      }
  }
  setColorAt(M, D) {
    this.instanceColor === null && (this.instanceColor = new Pn(new Float32Array(this.instanceMatrix.count * 3), 3)), D.toArray(this.instanceColor.array, M * 3);
  }
  setMatrixAt(M, D) {
    D.toArray(this.instanceMatrix.array, M * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
qs.prototype.isInstancedMesh = !0;
class gt extends ID {
  constructor(M) {
    super(), this.type = "LineBasicMaterial", this.color = new cM(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this.linewidth = M.linewidth, this.linecap = M.linecap, this.linejoin = M.linejoin, this;
  }
}
gt.prototype.isLineBasicMaterial = !0;
const kz = /* @__PURE__ */ new O(), Sz = /* @__PURE__ */ new O(), Zz = /* @__PURE__ */ new aM(), dn = /* @__PURE__ */ new Te(), yN = /* @__PURE__ */ new Ie();
class zA extends ZM {
  constructor(M = new VM(), D = new gt()) {
    super(), this.type = "Line", this.geometry = M, this.material = D, this.updateMorphTargets();
  }
  copy(M) {
    return super.copy(M), this.material = M.material, this.geometry = M.geometry, this;
  }
  computeLineDistances() {
    const M = this.geometry;
    if (M.isBufferGeometry)
      if (M.index === null) {
        const D = M.attributes.position, t = [0];
        for (let e = 1, N = D.count; e < N; e++)
          kz.fromBufferAttribute(D, e - 1), Sz.fromBufferAttribute(D, e), t[e] = t[e - 1], t[e] += kz.distanceTo(Sz);
        M.setAttribute("lineDistance", new WM(t, 1));
      } else
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else
      M.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    return this;
  }
  raycast(M, D) {
    const t = this.geometry, e = this.matrixWorld, N = M.params.Line.threshold, A = t.drawRange;
    if (t.boundingSphere === null && t.computeBoundingSphere(), yN.copy(t.boundingSphere), yN.applyMatrix4(e), yN.radius += N, M.ray.intersectsSphere(yN) === !1)
      return;
    Zz.copy(e).invert(), dn.copy(M.ray).applyMatrix4(Zz);
    const z = N / ((this.scale.x + this.scale.y + this.scale.z) / 3), I = z * z, i = new O(), T = new O(), u = new O(), g = new O(), s = this.isLineSegments ? 2 : 1;
    if (t.isBufferGeometry) {
      const j = t.index, a = t.attributes.position;
      if (j !== null) {
        const c = Math.max(0, A.start), r = Math.min(j.count, A.start + A.count);
        for (let l = c, C = r - 1; l < C; l += s) {
          const E = j.getX(l), d = j.getX(l + 1);
          if (i.fromBufferAttribute(a, E), T.fromBufferAttribute(a, d), dn.distanceSqToSegment(i, T, g, u) > I)
            continue;
          g.applyMatrix4(this.matrixWorld);
          const H = M.ray.origin.distanceTo(g);
          H < M.near || H > M.far || D.push({
            distance: H,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: l,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      } else {
        const c = Math.max(0, A.start), r = Math.min(a.count, A.start + A.count);
        for (let l = c, C = r - 1; l < C; l += s) {
          if (i.fromBufferAttribute(a, l), T.fromBufferAttribute(a, l + 1), dn.distanceSqToSegment(i, T, g, u) > I)
            continue;
          g.applyMatrix4(this.matrixWorld);
          const d = M.ray.origin.distanceTo(g);
          d < M.near || d > M.far || D.push({
            distance: d,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: l,
            face: null,
            faceIndex: null,
            object: this
          });
        }
      }
    } else
      t.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
  updateMorphTargets() {
    const M = this.geometry;
    if (M.isBufferGeometry) {
      const D = M.morphAttributes, t = Object.keys(D);
      if (t.length > 0) {
        const e = D[t[0]];
        if (e !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let N = 0, A = e.length; N < A; N++) {
            const z = e[N].name || String(N);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[z] = N;
          }
        }
      }
    } else {
      const D = M.morphTargets;
      D !== void 0 && D.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
}
zA.prototype.isLine = !0;
const _z = /* @__PURE__ */ new O(), bz = /* @__PURE__ */ new O();
class ke extends zA {
  constructor(M, D) {
    super(M, D), this.type = "LineSegments";
  }
  computeLineDistances() {
    const M = this.geometry;
    if (M.isBufferGeometry)
      if (M.index === null) {
        const D = M.attributes.position, t = [];
        for (let e = 0, N = D.count; e < N; e += 2)
          _z.fromBufferAttribute(D, e), bz.fromBufferAttribute(D, e + 1), t[e] = e === 0 ? 0 : t[e - 1], t[e + 1] = t[e] + _z.distanceTo(bz);
        M.setAttribute("lineDistance", new WM(t, 1));
      } else
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else
      M.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    return this;
  }
}
ke.prototype.isLineSegments = !0;
class Xs extends zA {
  constructor(M, D) {
    super(M, D), this.type = "LineLoop";
  }
}
Xs.prototype.isLineLoop = !0;
class Jt extends ID {
  constructor(M) {
    super(), this.type = "PointsMaterial", this.color = new cM(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this.map = M.map, this.alphaMap = M.alphaMap, this.size = M.size, this.sizeAttenuation = M.sizeAttenuation, this;
  }
}
Jt.prototype.isPointsMaterial = !0;
const Kz = /* @__PURE__ */ new aM(), Fn = /* @__PURE__ */ new Te(), oN = /* @__PURE__ */ new Ie(), aN = /* @__PURE__ */ new O();
class dN extends ZM {
  constructor(M = new VM(), D = new Jt()) {
    super(), this.type = "Points", this.geometry = M, this.material = D, this.updateMorphTargets();
  }
  copy(M) {
    return super.copy(M), this.material = M.material, this.geometry = M.geometry, this;
  }
  raycast(M, D) {
    const t = this.geometry, e = this.matrixWorld, N = M.params.Points.threshold, A = t.drawRange;
    if (t.boundingSphere === null && t.computeBoundingSphere(), oN.copy(t.boundingSphere), oN.applyMatrix4(e), oN.radius += N, M.ray.intersectsSphere(oN) === !1)
      return;
    Kz.copy(e).invert(), Fn.copy(M.ray).applyMatrix4(Kz);
    const z = N / ((this.scale.x + this.scale.y + this.scale.z) / 3), I = z * z;
    if (t.isBufferGeometry) {
      const i = t.index, u = t.attributes.position;
      if (i !== null) {
        const g = Math.max(0, A.start), s = Math.min(i.count, A.start + A.count);
        for (let j = g, y = s; j < y; j++) {
          const a = i.getX(j);
          aN.fromBufferAttribute(u, a), Rz(aN, a, I, e, M, D, this);
        }
      } else {
        const g = Math.max(0, A.start), s = Math.min(u.count, A.start + A.count);
        for (let j = g, y = s; j < y; j++)
          aN.fromBufferAttribute(u, j), Rz(aN, j, I, e, M, D, this);
      }
    } else
      console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
  updateMorphTargets() {
    const M = this.geometry;
    if (M.isBufferGeometry) {
      const D = M.morphAttributes, t = Object.keys(D);
      if (t.length > 0) {
        const e = D[t[0]];
        if (e !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let N = 0, A = e.length; N < A; N++) {
            const z = e[N].name || String(N);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[z] = N;
          }
        }
      }
    } else {
      const D = M.morphTargets;
      D !== void 0 && D.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  }
}
dN.prototype.isPoints = !0;
function Rz(n, M, D, t, e, N, A) {
  const z = Fn.distanceSqToPoint(n);
  if (z < D) {
    const I = new O();
    Fn.closestPointToPoint(n, I), I.applyMatrix4(t);
    const i = e.ray.origin.distanceTo(I);
    if (i < e.near || i > e.far)
      return;
    N.push({
      distance: i,
      distanceToRay: Math.sqrt(z),
      point: I,
      index: M,
      face: null,
      object: A
    });
  }
}
class Ui extends iD {
  constructor(M, D, t, e, N, A, z, I, i) {
    super(M, D, t, e, N, A, z, I, i), this.minFilter = A !== void 0 ? A : uD, this.magFilter = N !== void 0 ? N : uD, this.generateMipmaps = !1;
    const T = this;
    function u() {
      T.needsUpdate = !0, M.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in M && M.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const M = this.image;
    "requestVideoFrameCallback" in M === !1 && M.readyState >= M.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
Ui.prototype.isVideoTexture = !0;
class Js extends iD {
  constructor(M, D, t) {
    super({ width: M, height: D }), this.format = t, this.magFilter = ND, this.minFilter = ND, this.generateMipmaps = !1, this.needsUpdate = !0;
  }
}
Js.prototype.isFramebufferTexture = !0;
class $s extends iD {
  constructor(M, D, t, e, N, A, z, I, i, T, u, g) {
    super(null, A, z, I, i, T, e, N, u, g), this.image = { width: D, height: t }, this.mipmaps = M, this.flipY = !1, this.generateMipmaps = !1;
  }
}
$s.prototype.isCompressedTexture = !0;
class Mc extends iD {
  constructor(M, D, t, e, N, A, z, I, i) {
    super(M, D, t, e, N, A, z, I, i), this.needsUpdate = !0;
  }
}
Mc.prototype.isCanvasTexture = !0;
new O();
new O();
new O();
new DD();
class vD {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(M, D) {
    const t = this.getUtoTmapping(M);
    return this.getPoint(t, D);
  }
  getPoints(M = 5) {
    const D = [];
    for (let t = 0; t <= M; t++)
      D.push(this.getPoint(t / M));
    return D;
  }
  getSpacedPoints(M = 5) {
    const D = [];
    for (let t = 0; t <= M; t++)
      D.push(this.getPointAt(t / M));
    return D;
  }
  getLength() {
    const M = this.getLengths();
    return M[M.length - 1];
  }
  getLengths(M = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === M + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const D = [];
    let t, e = this.getPoint(0), N = 0;
    D.push(0);
    for (let A = 1; A <= M; A++)
      t = this.getPoint(A / M), N += t.distanceTo(e), D.push(N), e = t;
    return this.cacheArcLengths = D, D;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  getUtoTmapping(M, D) {
    const t = this.getLengths();
    let e = 0;
    const N = t.length;
    let A;
    D ? A = D : A = M * t[N - 1];
    let z = 0, I = N - 1, i;
    for (; z <= I; )
      if (e = Math.floor(z + (I - z) / 2), i = t[e] - A, i < 0)
        z = e + 1;
      else if (i > 0)
        I = e - 1;
      else {
        I = e;
        break;
      }
    if (e = I, t[e] === A)
      return e / (N - 1);
    const T = t[e], g = t[e + 1] - T, s = (A - T) / g;
    return (e + s) / (N - 1);
  }
  getTangent(M, D) {
    let e = M - 1e-4, N = M + 1e-4;
    e < 0 && (e = 0), N > 1 && (N = 1);
    const A = this.getPoint(e), z = this.getPoint(N), I = D || (A.isVector2 ? new q() : new O());
    return I.copy(z).sub(A).normalize(), I;
  }
  getTangentAt(M, D) {
    const t = this.getUtoTmapping(M);
    return this.getTangent(t, D);
  }
  computeFrenetFrames(M, D) {
    const t = new O(), e = [], N = [], A = [], z = new O(), I = new aM();
    for (let s = 0; s <= M; s++) {
      const j = s / M;
      e[s] = this.getTangentAt(j, new O());
    }
    N[0] = new O(), A[0] = new O();
    let i = Number.MAX_VALUE;
    const T = Math.abs(e[0].x), u = Math.abs(e[0].y), g = Math.abs(e[0].z);
    T <= i && (i = T, t.set(1, 0, 0)), u <= i && (i = u, t.set(0, 1, 0)), g <= i && t.set(0, 0, 1), z.crossVectors(e[0], t).normalize(), N[0].crossVectors(e[0], z), A[0].crossVectors(e[0], N[0]);
    for (let s = 1; s <= M; s++) {
      if (N[s] = N[s - 1].clone(), A[s] = A[s - 1].clone(), z.crossVectors(e[s - 1], e[s]), z.length() > Number.EPSILON) {
        z.normalize();
        const j = Math.acos(OD(e[s - 1].dot(e[s]), -1, 1));
        N[s].applyMatrix4(I.makeRotationAxis(z, j));
      }
      A[s].crossVectors(e[s], N[s]);
    }
    if (D === !0) {
      let s = Math.acos(OD(N[0].dot(N[M]), -1, 1));
      s /= M, e[0].dot(z.crossVectors(N[0], N[M])) > 0 && (s = -s);
      for (let j = 1; j <= M; j++)
        N[j].applyMatrix4(I.makeRotationAxis(e[j], s * j)), A[j].crossVectors(e[j], N[j]);
    }
    return {
      tangents: e,
      normals: N,
      binormals: A
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(M) {
    return this.arcLengthDivisions = M.arcLengthDivisions, this;
  }
  toJSON() {
    const M = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return M.arcLengthDivisions = this.arcLengthDivisions, M.type = this.type, M;
  }
  fromJSON(M) {
    return this.arcLengthDivisions = M.arcLengthDivisions, this;
  }
}
class KN extends vD {
  constructor(M = 0, D = 0, t = 1, e = 1, N = 0, A = Math.PI * 2, z = !1, I = 0) {
    super(), this.type = "EllipseCurve", this.aX = M, this.aY = D, this.xRadius = t, this.yRadius = e, this.aStartAngle = N, this.aEndAngle = A, this.aClockwise = z, this.aRotation = I;
  }
  getPoint(M, D) {
    const t = D || new q(), e = Math.PI * 2;
    let N = this.aEndAngle - this.aStartAngle;
    const A = Math.abs(N) < Number.EPSILON;
    for (; N < 0; )
      N += e;
    for (; N > e; )
      N -= e;
    N < Number.EPSILON && (A ? N = 0 : N = e), this.aClockwise === !0 && !A && (N === e ? N = -e : N = N - e);
    const z = this.aStartAngle + M * N;
    let I = this.aX + this.xRadius * Math.cos(z), i = this.aY + this.yRadius * Math.sin(z);
    if (this.aRotation !== 0) {
      const T = Math.cos(this.aRotation), u = Math.sin(this.aRotation), g = I - this.aX, s = i - this.aY;
      I = g * T - s * u + this.aX, i = g * u + s * T + this.aY;
    }
    return t.set(I, i);
  }
  copy(M) {
    return super.copy(M), this.aX = M.aX, this.aY = M.aY, this.xRadius = M.xRadius, this.yRadius = M.yRadius, this.aStartAngle = M.aStartAngle, this.aEndAngle = M.aEndAngle, this.aClockwise = M.aClockwise, this.aRotation = M.aRotation, this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.aX = this.aX, M.aY = this.aY, M.xRadius = this.xRadius, M.yRadius = this.yRadius, M.aStartAngle = this.aStartAngle, M.aEndAngle = this.aEndAngle, M.aClockwise = this.aClockwise, M.aRotation = this.aRotation, M;
  }
  fromJSON(M) {
    return super.fromJSON(M), this.aX = M.aX, this.aY = M.aY, this.xRadius = M.xRadius, this.yRadius = M.yRadius, this.aStartAngle = M.aStartAngle, this.aEndAngle = M.aEndAngle, this.aClockwise = M.aClockwise, this.aRotation = M.aRotation, this;
  }
}
KN.prototype.isEllipseCurve = !0;
class Qi extends KN {
  constructor(M, D, t, e, N, A) {
    super(M, D, t, t, e, N, A), this.type = "ArcCurve";
  }
}
Qi.prototype.isArcCurve = !0;
function iA() {
  let n = 0, M = 0, D = 0, t = 0;
  function e(N, A, z, I) {
    n = N, M = z, D = -3 * N + 3 * A - 2 * z - I, t = 2 * N - 2 * A + z + I;
  }
  return {
    initCatmullRom: function(N, A, z, I, i) {
      e(A, z, i * (z - N), i * (I - A));
    },
    initNonuniformCatmullRom: function(N, A, z, I, i, T, u) {
      let g = (A - N) / i - (z - N) / (i + T) + (z - A) / T, s = (z - A) / T - (I - A) / (T + u) + (I - z) / u;
      g *= T, s *= T, e(A, z, g, s);
    },
    calc: function(N) {
      const A = N * N, z = A * N;
      return n + M * N + D * A + t * z;
    }
  };
}
const CN = new O(), vn = new iA(), pn = new iA(), hn = new iA();
class fi extends vD {
  constructor(M = [], D = !1, t = "centripetal", e = 0.5) {
    super(), this.type = "CatmullRomCurve3", this.points = M, this.closed = D, this.curveType = t, this.tension = e;
  }
  getPoint(M, D = new O()) {
    const t = D, e = this.points, N = e.length, A = (N - (this.closed ? 0 : 1)) * M;
    let z = Math.floor(A), I = A - z;
    this.closed ? z += z > 0 ? 0 : (Math.floor(Math.abs(z) / N) + 1) * N : I === 0 && z === N - 1 && (z = N - 2, I = 1);
    let i, T;
    this.closed || z > 0 ? i = e[(z - 1) % N] : (CN.subVectors(e[0], e[1]).add(e[0]), i = CN);
    const u = e[z % N], g = e[(z + 1) % N];
    if (this.closed || z + 2 < N ? T = e[(z + 2) % N] : (CN.subVectors(e[N - 1], e[N - 2]).add(e[N - 1]), T = CN), this.curveType === "centripetal" || this.curveType === "chordal") {
      const s = this.curveType === "chordal" ? 0.5 : 0.25;
      let j = Math.pow(i.distanceToSquared(u), s), y = Math.pow(u.distanceToSquared(g), s), a = Math.pow(g.distanceToSquared(T), s);
      y < 1e-4 && (y = 1), j < 1e-4 && (j = y), a < 1e-4 && (a = y), vn.initNonuniformCatmullRom(i.x, u.x, g.x, T.x, j, y, a), pn.initNonuniformCatmullRom(i.y, u.y, g.y, T.y, j, y, a), hn.initNonuniformCatmullRom(i.z, u.z, g.z, T.z, j, y, a);
    } else
      this.curveType === "catmullrom" && (vn.initCatmullRom(i.x, u.x, g.x, T.x, this.tension), pn.initCatmullRom(i.y, u.y, g.y, T.y, this.tension), hn.initCatmullRom(i.z, u.z, g.z, T.z, this.tension));
    return t.set(vn.calc(I), pn.calc(I), hn.calc(I)), t;
  }
  copy(M) {
    super.copy(M), this.points = [];
    for (let D = 0, t = M.points.length; D < t; D++) {
      const e = M.points[D];
      this.points.push(e.clone());
    }
    return this.closed = M.closed, this.curveType = M.curveType, this.tension = M.tension, this;
  }
  toJSON() {
    const M = super.toJSON();
    M.points = [];
    for (let D = 0, t = this.points.length; D < t; D++) {
      const e = this.points[D];
      M.points.push(e.toArray());
    }
    return M.closed = this.closed, M.curveType = this.curveType, M.tension = this.tension, M;
  }
  fromJSON(M) {
    super.fromJSON(M), this.points = [];
    for (let D = 0, t = M.points.length; D < t; D++) {
      const e = M.points[D];
      this.points.push(new O().fromArray(e));
    }
    return this.closed = M.closed, this.curveType = M.curveType, this.tension = M.tension, this;
  }
}
fi.prototype.isCatmullRomCurve3 = !0;
function Pz(n, M, D, t, e) {
  const N = (t - M) * 0.5, A = (e - D) * 0.5, z = n * n, I = n * z;
  return (2 * D - 2 * t + N + A) * I + (-3 * D + 3 * t - 2 * N - A) * z + N * n + D;
}
function Dc(n, M) {
  const D = 1 - n;
  return D * D * M;
}
function tc(n, M) {
  return 2 * (1 - n) * n * M;
}
function ec(n, M) {
  return n * n * M;
}
function pe(n, M, D, t) {
  return Dc(n, M) + tc(n, D) + ec(n, t);
}
function Nc(n, M) {
  const D = 1 - n;
  return D * D * D * M;
}
function nc(n, M) {
  const D = 1 - n;
  return 3 * D * D * n * M;
}
function Ac(n, M) {
  return 3 * (1 - n) * n * n * M;
}
function zc(n, M) {
  return n * n * n * M;
}
function he(n, M, D, t, e) {
  return Nc(n, M) + nc(n, D) + Ac(n, t) + zc(n, e);
}
class IA extends vD {
  constructor(M = new q(), D = new q(), t = new q(), e = new q()) {
    super(), this.type = "CubicBezierCurve", this.v0 = M, this.v1 = D, this.v2 = t, this.v3 = e;
  }
  getPoint(M, D = new q()) {
    const t = D, e = this.v0, N = this.v1, A = this.v2, z = this.v3;
    return t.set(he(M, e.x, N.x, A.x, z.x), he(M, e.y, N.y, A.y, z.y)), t;
  }
  copy(M) {
    return super.copy(M), this.v0.copy(M.v0), this.v1.copy(M.v1), this.v2.copy(M.v2), this.v3.copy(M.v3), this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.v0 = this.v0.toArray(), M.v1 = this.v1.toArray(), M.v2 = this.v2.toArray(), M.v3 = this.v3.toArray(), M;
  }
  fromJSON(M) {
    return super.fromJSON(M), this.v0.fromArray(M.v0), this.v1.fromArray(M.v1), this.v2.fromArray(M.v2), this.v3.fromArray(M.v3), this;
  }
}
IA.prototype.isCubicBezierCurve = !0;
class mi extends vD {
  constructor(M = new O(), D = new O(), t = new O(), e = new O()) {
    super(), this.type = "CubicBezierCurve3", this.v0 = M, this.v1 = D, this.v2 = t, this.v3 = e;
  }
  getPoint(M, D = new O()) {
    const t = D, e = this.v0, N = this.v1, A = this.v2, z = this.v3;
    return t.set(he(M, e.x, N.x, A.x, z.x), he(M, e.y, N.y, A.y, z.y), he(M, e.z, N.z, A.z, z.z)), t;
  }
  copy(M) {
    return super.copy(M), this.v0.copy(M.v0), this.v1.copy(M.v1), this.v2.copy(M.v2), this.v3.copy(M.v3), this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.v0 = this.v0.toArray(), M.v1 = this.v1.toArray(), M.v2 = this.v2.toArray(), M.v3 = this.v3.toArray(), M;
  }
  fromJSON(M) {
    return super.fromJSON(M), this.v0.fromArray(M.v0), this.v1.fromArray(M.v1), this.v2.fromArray(M.v2), this.v3.fromArray(M.v3), this;
  }
}
mi.prototype.isCubicBezierCurve3 = !0;
class RN extends vD {
  constructor(M = new q(), D = new q()) {
    super(), this.type = "LineCurve", this.v1 = M, this.v2 = D;
  }
  getPoint(M, D = new q()) {
    const t = D;
    return M === 1 ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(M).add(this.v1)), t;
  }
  getPointAt(M, D) {
    return this.getPoint(M, D);
  }
  getTangent(M, D) {
    const t = D || new q();
    return t.copy(this.v2).sub(this.v1).normalize(), t;
  }
  copy(M) {
    return super.copy(M), this.v1.copy(M.v1), this.v2.copy(M.v2), this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.v1 = this.v1.toArray(), M.v2 = this.v2.toArray(), M;
  }
  fromJSON(M) {
    return super.fromJSON(M), this.v1.fromArray(M.v1), this.v2.fromArray(M.v2), this;
  }
}
RN.prototype.isLineCurve = !0;
class ic extends vD {
  constructor(M = new O(), D = new O()) {
    super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = M, this.v2 = D;
  }
  getPoint(M, D = new O()) {
    const t = D;
    return M === 1 ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(M).add(this.v1)), t;
  }
  getPointAt(M, D) {
    return this.getPoint(M, D);
  }
  copy(M) {
    return super.copy(M), this.v1.copy(M.v1), this.v2.copy(M.v2), this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.v1 = this.v1.toArray(), M.v2 = this.v2.toArray(), M;
  }
  fromJSON(M) {
    return super.fromJSON(M), this.v1.fromArray(M.v1), this.v2.fromArray(M.v2), this;
  }
}
class TA extends vD {
  constructor(M = new q(), D = new q(), t = new q()) {
    super(), this.type = "QuadraticBezierCurve", this.v0 = M, this.v1 = D, this.v2 = t;
  }
  getPoint(M, D = new q()) {
    const t = D, e = this.v0, N = this.v1, A = this.v2;
    return t.set(pe(M, e.x, N.x, A.x), pe(M, e.y, N.y, A.y)), t;
  }
  copy(M) {
    return super.copy(M), this.v0.copy(M.v0), this.v1.copy(M.v1), this.v2.copy(M.v2), this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.v0 = this.v0.toArray(), M.v1 = this.v1.toArray(), M.v2 = this.v2.toArray(), M;
  }
  fromJSON(M) {
    return super.fromJSON(M), this.v0.fromArray(M.v0), this.v1.fromArray(M.v1), this.v2.fromArray(M.v2), this;
  }
}
TA.prototype.isQuadraticBezierCurve = !0;
class ki extends vD {
  constructor(M = new O(), D = new O(), t = new O()) {
    super(), this.type = "QuadraticBezierCurve3", this.v0 = M, this.v1 = D, this.v2 = t;
  }
  getPoint(M, D = new O()) {
    const t = D, e = this.v0, N = this.v1, A = this.v2;
    return t.set(pe(M, e.x, N.x, A.x), pe(M, e.y, N.y, A.y), pe(M, e.z, N.z, A.z)), t;
  }
  copy(M) {
    return super.copy(M), this.v0.copy(M.v0), this.v1.copy(M.v1), this.v2.copy(M.v2), this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.v0 = this.v0.toArray(), M.v1 = this.v1.toArray(), M.v2 = this.v2.toArray(), M;
  }
  fromJSON(M) {
    return super.fromJSON(M), this.v0.fromArray(M.v0), this.v1.fromArray(M.v1), this.v2.fromArray(M.v2), this;
  }
}
ki.prototype.isQuadraticBezierCurve3 = !0;
class uA extends vD {
  constructor(M = []) {
    super(), this.type = "SplineCurve", this.points = M;
  }
  getPoint(M, D = new q()) {
    const t = D, e = this.points, N = (e.length - 1) * M, A = Math.floor(N), z = N - A, I = e[A === 0 ? A : A - 1], i = e[A], T = e[A > e.length - 2 ? e.length - 1 : A + 1], u = e[A > e.length - 3 ? e.length - 1 : A + 2];
    return t.set(Pz(z, I.x, i.x, T.x, u.x), Pz(z, I.y, i.y, T.y, u.y)), t;
  }
  copy(M) {
    super.copy(M), this.points = [];
    for (let D = 0, t = M.points.length; D < t; D++) {
      const e = M.points[D];
      this.points.push(e.clone());
    }
    return this;
  }
  toJSON() {
    const M = super.toJSON();
    M.points = [];
    for (let D = 0, t = this.points.length; D < t; D++) {
      const e = this.points[D];
      M.points.push(e.toArray());
    }
    return M;
  }
  fromJSON(M) {
    super.fromJSON(M), this.points = [];
    for (let D = 0, t = M.points.length; D < t; D++) {
      const e = M.points[D];
      this.points.push(new q().fromArray(e));
    }
    return this;
  }
}
uA.prototype.isSplineCurve = !0;
var Si = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Qi,
  CatmullRomCurve3: fi,
  CubicBezierCurve: IA,
  CubicBezierCurve3: mi,
  EllipseCurve: KN,
  LineCurve: RN,
  LineCurve3: ic,
  QuadraticBezierCurve: TA,
  QuadraticBezierCurve3: ki,
  SplineCurve: uA
});
class Ic extends vD {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(M) {
    this.curves.push(M);
  }
  closePath() {
    const M = this.curves[0].getPoint(0), D = this.curves[this.curves.length - 1].getPoint(1);
    M.equals(D) || this.curves.push(new RN(D, M));
  }
  getPoint(M, D) {
    const t = M * this.getLength(), e = this.getCurveLengths();
    let N = 0;
    for (; N < e.length; ) {
      if (e[N] >= t) {
        const A = e[N] - t, z = this.curves[N], I = z.getLength(), i = I === 0 ? 0 : 1 - A / I;
        return z.getPointAt(i, D);
      }
      N++;
    }
    return null;
  }
  getLength() {
    const M = this.getCurveLengths();
    return M[M.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const M = [];
    let D = 0;
    for (let t = 0, e = this.curves.length; t < e; t++)
      D += this.curves[t].getLength(), M.push(D);
    return this.cacheLengths = M, M;
  }
  getSpacedPoints(M = 40) {
    const D = [];
    for (let t = 0; t <= M; t++)
      D.push(this.getPoint(t / M));
    return this.autoClose && D.push(D[0]), D;
  }
  getPoints(M = 12) {
    const D = [];
    let t;
    for (let e = 0, N = this.curves; e < N.length; e++) {
      const A = N[e], z = A && A.isEllipseCurve ? M * 2 : A && (A.isLineCurve || A.isLineCurve3) ? 1 : A && A.isSplineCurve ? M * A.points.length : M, I = A.getPoints(z);
      for (let i = 0; i < I.length; i++) {
        const T = I[i];
        t && t.equals(T) || (D.push(T), t = T);
      }
    }
    return this.autoClose && D.length > 1 && !D[D.length - 1].equals(D[0]) && D.push(D[0]), D;
  }
  copy(M) {
    super.copy(M), this.curves = [];
    for (let D = 0, t = M.curves.length; D < t; D++) {
      const e = M.curves[D];
      this.curves.push(e.clone());
    }
    return this.autoClose = M.autoClose, this;
  }
  toJSON() {
    const M = super.toJSON();
    M.autoClose = this.autoClose, M.curves = [];
    for (let D = 0, t = this.curves.length; D < t; D++) {
      const e = this.curves[D];
      M.curves.push(e.toJSON());
    }
    return M;
  }
  fromJSON(M) {
    super.fromJSON(M), this.autoClose = M.autoClose, this.curves = [];
    for (let D = 0, t = M.curves.length; D < t; D++) {
      const e = M.curves[D];
      this.curves.push(new Si[e.type]().fromJSON(e));
    }
    return this;
  }
}
class Bn extends Ic {
  constructor(M) {
    super(), this.type = "Path", this.currentPoint = new q(), M && this.setFromPoints(M);
  }
  setFromPoints(M) {
    this.moveTo(M[0].x, M[0].y);
    for (let D = 1, t = M.length; D < t; D++)
      this.lineTo(M[D].x, M[D].y);
    return this;
  }
  moveTo(M, D) {
    return this.currentPoint.set(M, D), this;
  }
  lineTo(M, D) {
    const t = new RN(this.currentPoint.clone(), new q(M, D));
    return this.curves.push(t), this.currentPoint.set(M, D), this;
  }
  quadraticCurveTo(M, D, t, e) {
    const N = new TA(this.currentPoint.clone(), new q(M, D), new q(t, e));
    return this.curves.push(N), this.currentPoint.set(t, e), this;
  }
  bezierCurveTo(M, D, t, e, N, A) {
    const z = new IA(this.currentPoint.clone(), new q(M, D), new q(t, e), new q(N, A));
    return this.curves.push(z), this.currentPoint.set(N, A), this;
  }
  splineThru(M) {
    const D = [this.currentPoint.clone()].concat(M), t = new uA(D);
    return this.curves.push(t), this.currentPoint.copy(M[M.length - 1]), this;
  }
  arc(M, D, t, e, N, A) {
    const z = this.currentPoint.x, I = this.currentPoint.y;
    return this.absarc(M + z, D + I, t, e, N, A), this;
  }
  absarc(M, D, t, e, N, A) {
    return this.absellipse(M, D, t, t, e, N, A), this;
  }
  ellipse(M, D, t, e, N, A, z, I) {
    const i = this.currentPoint.x, T = this.currentPoint.y;
    return this.absellipse(M + i, D + T, t, e, N, A, z, I), this;
  }
  absellipse(M, D, t, e, N, A, z, I) {
    const i = new KN(M, D, t, e, N, A, z, I);
    if (this.curves.length > 0) {
      const u = i.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(i);
    const T = i.getPoint(1);
    return this.currentPoint.copy(T), this;
  }
  copy(M) {
    return super.copy(M), this.currentPoint.copy(M.currentPoint), this;
  }
  toJSON() {
    const M = super.toJSON();
    return M.currentPoint = this.currentPoint.toArray(), M;
  }
  fromJSON(M) {
    return super.fromJSON(M), this.currentPoint.fromArray(M.currentPoint), this;
  }
}
class ge extends Bn {
  constructor(M) {
    super(M), this.uuid = bD(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(M) {
    const D = [];
    for (let t = 0, e = this.holes.length; t < e; t++)
      D[t] = this.holes[t].getPoints(M);
    return D;
  }
  extractPoints(M) {
    return {
      shape: this.getPoints(M),
      holes: this.getPointsHoles(M)
    };
  }
  copy(M) {
    super.copy(M), this.holes = [];
    for (let D = 0, t = M.holes.length; D < t; D++) {
      const e = M.holes[D];
      this.holes.push(e.clone());
    }
    return this;
  }
  toJSON() {
    const M = super.toJSON();
    M.uuid = this.uuid, M.holes = [];
    for (let D = 0, t = this.holes.length; D < t; D++) {
      const e = this.holes[D];
      M.holes.push(e.toJSON());
    }
    return M;
  }
  fromJSON(M) {
    super.fromJSON(M), this.uuid = M.uuid, this.holes = [];
    for (let D = 0, t = M.holes.length; D < t; D++) {
      const e = M.holes[D];
      this.holes.push(new Bn().fromJSON(e));
    }
    return this;
  }
}
const Tc = {
  triangulate: function(n, M, D = 2) {
    const t = M && M.length, e = t ? M[0] * D : n.length;
    let N = Zi(n, 0, e, D, !0);
    const A = [];
    if (!N || N.next === N.prev)
      return A;
    let z, I, i, T, u, g, s;
    if (t && (N = cc(n, M, N, D)), n.length > 80 * D) {
      z = i = n[0], I = T = n[1];
      for (let j = D; j < e; j += D)
        u = n[j], g = n[j + 1], u < z && (z = u), g < I && (I = g), u > i && (i = u), g > T && (T = g);
      s = Math.max(i - z, T - I), s = s !== 0 ? 1 / s : 0;
    }
    return Se(N, A, D, z, I, s), A;
  }
};
function Zi(n, M, D, t, e) {
  let N, A;
  if (e === lc(n, M, D, t) > 0)
    for (N = M; N < D; N += t)
      A = Fz(N, n[N], n[N + 1], A);
  else
    for (N = D - t; N >= M; N -= t)
      A = Fz(N, n[N], n[N + 1], A);
  return A && PN(A, A.next) && (_e(A), A = A.next), A;
}
function jt(n, M) {
  if (!n)
    return n;
  M || (M = n);
  let D = n, t;
  do
    if (t = !1, !D.steiner && (PN(D, D.next) || XM(D.prev, D, D.next) === 0)) {
      if (_e(D), D = M = D.prev, D === D.next)
        break;
      t = !0;
    } else
      D = D.next;
  while (t || D !== M);
  return M;
}
function Se(n, M, D, t, e, N, A) {
  if (!n)
    return;
  !A && N && Cc(n, t, e, N);
  let z = n, I, i;
  for (; n.prev !== n.next; ) {
    if (I = n.prev, i = n.next, N ? gc(n, t, e, N) : uc(n)) {
      M.push(I.i / D), M.push(n.i / D), M.push(i.i / D), _e(n), n = i.next, z = i.next;
      continue;
    }
    if (n = i, n === z) {
      A ? A === 1 ? (n = rc(jt(n), M, D), Se(n, M, D, t, e, N, 2)) : A === 2 && sc(n, M, D, t, e, N) : Se(jt(n), M, D, t, e, N, 1);
      break;
    }
  }
}
function uc(n) {
  const M = n.prev, D = n, t = n.next;
  if (XM(M, D, t) >= 0)
    return !1;
  let e = n.next.next;
  for (; e !== n.prev; ) {
    if ($t(M.x, M.y, D.x, D.y, t.x, t.y, e.x, e.y) && XM(e.prev, e, e.next) >= 0)
      return !1;
    e = e.next;
  }
  return !0;
}
function gc(n, M, D, t) {
  const e = n.prev, N = n, A = n.next;
  if (XM(e, N, A) >= 0)
    return !1;
  const z = e.x < N.x ? e.x < A.x ? e.x : A.x : N.x < A.x ? N.x : A.x, I = e.y < N.y ? e.y < A.y ? e.y : A.y : N.y < A.y ? N.y : A.y, i = e.x > N.x ? e.x > A.x ? e.x : A.x : N.x > A.x ? N.x : A.x, T = e.y > N.y ? e.y > A.y ? e.y : A.y : N.y > A.y ? N.y : A.y, u = Vn(z, I, M, D, t), g = Vn(i, T, M, D, t);
  let s = n.prevZ, j = n.nextZ;
  for (; s && s.z >= u && j && j.z <= g; ) {
    if (s !== n.prev && s !== n.next && $t(e.x, e.y, N.x, N.y, A.x, A.y, s.x, s.y) && XM(s.prev, s, s.next) >= 0 || (s = s.prevZ, j !== n.prev && j !== n.next && $t(e.x, e.y, N.x, N.y, A.x, A.y, j.x, j.y) && XM(j.prev, j, j.next) >= 0))
      return !1;
    j = j.nextZ;
  }
  for (; s && s.z >= u; ) {
    if (s !== n.prev && s !== n.next && $t(e.x, e.y, N.x, N.y, A.x, A.y, s.x, s.y) && XM(s.prev, s, s.next) >= 0)
      return !1;
    s = s.prevZ;
  }
  for (; j && j.z <= g; ) {
    if (j !== n.prev && j !== n.next && $t(e.x, e.y, N.x, N.y, A.x, A.y, j.x, j.y) && XM(j.prev, j, j.next) >= 0)
      return !1;
    j = j.nextZ;
  }
  return !0;
}
function rc(n, M, D) {
  let t = n;
  do {
    const e = t.prev, N = t.next.next;
    !PN(e, N) && _i(e, t, t.next, N) && Ze(e, N) && Ze(N, e) && (M.push(e.i / D), M.push(t.i / D), M.push(N.i / D), _e(t), _e(t.next), t = n = N), t = t.next;
  } while (t !== n);
  return jt(t);
}
function sc(n, M, D, t, e, N) {
  let A = n;
  do {
    let z = A.next.next;
    for (; z !== A.prev; ) {
      if (A.i !== z.i && Oc(A, z)) {
        let I = bi(A, z);
        A = jt(A, A.next), I = jt(I, I.next), Se(A, M, D, t, e, N), Se(I, M, D, t, e, N);
        return;
      }
      z = z.next;
    }
    A = A.next;
  } while (A !== n);
}
function cc(n, M, D, t) {
  const e = [];
  let N, A, z, I, i;
  for (N = 0, A = M.length; N < A; N++)
    z = M[N] * t, I = N < A - 1 ? M[N + 1] * t : n.length, i = Zi(n, z, I, t, !1), i === i.next && (i.steiner = !0), e.push(wc(i));
  for (e.sort(jc), N = 0; N < e.length; N++)
    yc(e[N], D), D = jt(D, D.next);
  return D;
}
function jc(n, M) {
  return n.x - M.x;
}
function yc(n, M) {
  if (M = oc(n, M), M) {
    const D = bi(M, n);
    jt(M, M.next), jt(D, D.next);
  }
}
function oc(n, M) {
  let D = M;
  const t = n.x, e = n.y;
  let N = -1 / 0, A;
  do {
    if (e <= D.y && e >= D.next.y && D.next.y !== D.y) {
      const g = D.x + (e - D.y) * (D.next.x - D.x) / (D.next.y - D.y);
      if (g <= t && g > N) {
        if (N = g, g === t) {
          if (e === D.y)
            return D;
          if (e === D.next.y)
            return D.next;
        }
        A = D.x < D.next.x ? D : D.next;
      }
    }
    D = D.next;
  } while (D !== M);
  if (!A)
    return null;
  if (t === N)
    return A;
  const z = A, I = A.x, i = A.y;
  let T = 1 / 0, u;
  D = A;
  do
    t >= D.x && D.x >= I && t !== D.x && $t(e < i ? t : N, e, I, i, e < i ? N : t, e, D.x, D.y) && (u = Math.abs(e - D.y) / (t - D.x), Ze(D, n) && (u < T || u === T && (D.x > A.x || D.x === A.x && ac(A, D))) && (A = D, T = u)), D = D.next;
  while (D !== z);
  return A;
}
function ac(n, M) {
  return XM(n.prev, n, M.prev) < 0 && XM(M.next, n, n.next) < 0;
}
function Cc(n, M, D, t) {
  let e = n;
  do
    e.z === null && (e.z = Vn(e.x, e.y, M, D, t)), e.prevZ = e.prev, e.nextZ = e.next, e = e.next;
  while (e !== n);
  e.prevZ.nextZ = null, e.prevZ = null, Lc(e);
}
function Lc(n) {
  let M, D, t, e, N, A, z, I, i = 1;
  do {
    for (D = n, n = null, N = null, A = 0; D; ) {
      for (A++, t = D, z = 0, M = 0; M < i && (z++, t = t.nextZ, !!t); M++)
        ;
      for (I = i; z > 0 || I > 0 && t; )
        z !== 0 && (I === 0 || !t || D.z <= t.z) ? (e = D, D = D.nextZ, z--) : (e = t, t = t.nextZ, I--), N ? N.nextZ = e : n = e, e.prevZ = N, N = e;
      D = t;
    }
    N.nextZ = null, i *= 2;
  } while (A > 1);
  return n;
}
function Vn(n, M, D, t, e) {
  return n = 32767 * (n - D) * e, M = 32767 * (M - t) * e, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, M = (M | M << 8) & 16711935, M = (M | M << 4) & 252645135, M = (M | M << 2) & 858993459, M = (M | M << 1) & 1431655765, n | M << 1;
}
function wc(n) {
  let M = n, D = n;
  do
    (M.x < D.x || M.x === D.x && M.y < D.y) && (D = M), M = M.next;
  while (M !== n);
  return D;
}
function $t(n, M, D, t, e, N, A, z) {
  return (e - A) * (M - z) - (n - A) * (N - z) >= 0 && (n - A) * (t - z) - (D - A) * (M - z) >= 0 && (D - A) * (N - z) - (e - A) * (t - z) >= 0;
}
function Oc(n, M) {
  return n.next.i !== M.i && n.prev.i !== M.i && !xc(n, M) && (Ze(n, M) && Ze(M, n) && Ec(n, M) && (XM(n.prev, n, M.prev) || XM(n, M.prev, M)) || PN(n, M) && XM(n.prev, n, n.next) > 0 && XM(M.prev, M, M.next) > 0);
}
function XM(n, M, D) {
  return (M.y - n.y) * (D.x - M.x) - (M.x - n.x) * (D.y - M.y);
}
function PN(n, M) {
  return n.x === M.x && n.y === M.y;
}
function _i(n, M, D, t) {
  const e = wN(XM(n, M, D)), N = wN(XM(n, M, t)), A = wN(XM(D, t, n)), z = wN(XM(D, t, M));
  return !!(e !== N && A !== z || e === 0 && LN(n, D, M) || N === 0 && LN(n, t, M) || A === 0 && LN(D, n, t) || z === 0 && LN(D, M, t));
}
function LN(n, M, D) {
  return M.x <= Math.max(n.x, D.x) && M.x >= Math.min(n.x, D.x) && M.y <= Math.max(n.y, D.y) && M.y >= Math.min(n.y, D.y);
}
function wN(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}
function xc(n, M) {
  let D = n;
  do {
    if (D.i !== n.i && D.next.i !== n.i && D.i !== M.i && D.next.i !== M.i && _i(D, D.next, n, M))
      return !0;
    D = D.next;
  } while (D !== n);
  return !1;
}
function Ze(n, M) {
  return XM(n.prev, n, n.next) < 0 ? XM(n, M, n.next) >= 0 && XM(n, n.prev, M) >= 0 : XM(n, M, n.prev) < 0 || XM(n, n.next, M) < 0;
}
function Ec(n, M) {
  let D = n, t = !1;
  const e = (n.x + M.x) / 2, N = (n.y + M.y) / 2;
  do
    D.y > N != D.next.y > N && D.next.y !== D.y && e < (D.next.x - D.x) * (N - D.y) / (D.next.y - D.y) + D.x && (t = !t), D = D.next;
  while (D !== n);
  return t;
}
function bi(n, M) {
  const D = new Hn(n.i, n.x, n.y), t = new Hn(M.i, M.x, M.y), e = n.next, N = M.prev;
  return n.next = M, M.prev = n, D.next = e, e.prev = D, t.next = D, D.prev = t, N.next = t, t.prev = N, t;
}
function Fz(n, M, D, t) {
  const e = new Hn(n, M, D);
  return t ? (e.next = t.next, e.prev = t, t.next.prev = e, t.next = e) : (e.prev = e, e.next = e), e;
}
function _e(n) {
  n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
}
function Hn(n, M, D) {
  this.i = n, this.x = M, this.y = D, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function lc(n, M, D, t) {
  let e = 0;
  for (let N = M, A = D - t; N < D; N += t)
    e += (n[A] - n[N]) * (n[N + 1] + n[A + 1]), A = N;
  return e;
}
class rt {
  static area(M) {
    const D = M.length;
    let t = 0;
    for (let e = D - 1, N = 0; N < D; e = N++)
      t += M[e].x * M[N].y - M[N].x * M[e].y;
    return t * 0.5;
  }
  static isClockWise(M) {
    return rt.area(M) < 0;
  }
  static triangulateShape(M, D) {
    const t = [], e = [], N = [];
    Bz(M), Vz(t, M);
    let A = M.length;
    D.forEach(Bz);
    for (let I = 0; I < D.length; I++)
      e.push(A), A += D[I].length, Vz(t, D[I]);
    const z = Tc.triangulate(t, e);
    for (let I = 0; I < z.length; I += 3)
      N.push(z.slice(I, I + 3));
    return N;
  }
}
function Bz(n) {
  const M = n.length;
  M > 2 && n[M - 1].equals(n[0]) && n.pop();
}
function Vz(n, M) {
  for (let D = 0; D < M.length; D++)
    n.push(M[D].x), n.push(M[D].y);
}
class re extends VM {
  constructor(M = new ge([new q(0.5, 0.5), new q(-0.5, 0.5), new q(-0.5, -0.5), new q(0.5, -0.5)]), D = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: M,
      options: D
    }, M = Array.isArray(M) ? M : [M];
    const t = this, e = [], N = [];
    for (let z = 0, I = M.length; z < I; z++) {
      const i = M[z];
      A(i);
    }
    this.setAttribute("position", new WM(e, 3)), this.setAttribute("uv", new WM(N, 2)), this.computeVertexNormals();
    function A(z) {
      const I = [], i = D.curveSegments !== void 0 ? D.curveSegments : 12, T = D.steps !== void 0 ? D.steps : 1;
      let u = D.depth !== void 0 ? D.depth : 1, g = D.bevelEnabled !== void 0 ? D.bevelEnabled : !0, s = D.bevelThickness !== void 0 ? D.bevelThickness : 0.2, j = D.bevelSize !== void 0 ? D.bevelSize : s - 0.1, y = D.bevelOffset !== void 0 ? D.bevelOffset : 0, a = D.bevelSegments !== void 0 ? D.bevelSegments : 3;
      const c = D.extrudePath, r = D.UVGenerator !== void 0 ? D.UVGenerator : dc;
      D.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), u = D.amount);
      let l, C = !1, E, d, p, H;
      c && (l = c.getSpacedPoints(T), C = !0, g = !1, E = c.computeFrenetFrames(T, !1), d = new O(), p = new O(), H = new O()), g || (a = 0, s = 0, j = 0, y = 0);
      const DM = z.extractPoints(i);
      let G = DM.shape;
      const o = DM.holes;
      if (!rt.isClockWise(G)) {
        G = G.reverse();
        for (let P = 0, $ = o.length; P < $; P++) {
          const X = o[P];
          rt.isClockWise(X) && (o[P] = X.reverse());
        }
      }
      const Y = rt.triangulateShape(G, o), k = G;
      for (let P = 0, $ = o.length; P < $; P++) {
        const X = o[P];
        G = G.concat(X);
      }
      function f(P, $, X) {
        return $ || console.error("THREE.ExtrudeGeometry: vec does not exist"), $.clone().multiplyScalar(X).add(P);
      }
      const Q = G.length, b = Y.length;
      function W(P, $, X) {
        let iM, nM, CM;
        const xM = P.x - $.x, QM = P.y - $.y, FM = X.x - P.x, RM = X.y - P.y, x = xM * xM + QM * QM, L = xM * RM - QM * FM;
        if (Math.abs(L) > Number.EPSILON) {
          const R = Math.sqrt(x), J = Math.sqrt(FM * FM + RM * RM), gM = $.x - QM / R, K = $.y + xM / R, yM = X.x - RM / J, sM = X.y + FM / J, NM = ((yM - gM) * RM - (sM - K) * FM) / (xM * RM - QM * FM);
          iM = gM + xM * NM - P.x, nM = K + QM * NM - P.y;
          const tM = iM * iM + nM * nM;
          if (tM <= 2)
            return new q(iM, nM);
          CM = Math.sqrt(tM / 2);
        } else {
          let R = !1;
          xM > Number.EPSILON ? FM > Number.EPSILON && (R = !0) : xM < -Number.EPSILON ? FM < -Number.EPSILON && (R = !0) : Math.sign(QM) === Math.sign(RM) && (R = !0), R ? (iM = -QM, nM = xM, CM = Math.sqrt(x)) : (iM = xM, nM = QM, CM = Math.sqrt(x / 2));
        }
        return new q(iM / CM, nM / CM);
      }
      const IM = [];
      for (let P = 0, $ = k.length, X = $ - 1, iM = P + 1; P < $; P++, X++, iM++)
        X === $ && (X = 0), iM === $ && (iM = 0), IM[P] = W(k[P], k[X], k[iM]);
      const Z = [];
      let V, eM = IM.concat();
      for (let P = 0, $ = o.length; P < $; P++) {
        const X = o[P];
        V = [];
        for (let iM = 0, nM = X.length, CM = nM - 1, xM = iM + 1; iM < nM; iM++, CM++, xM++)
          CM === nM && (CM = 0), xM === nM && (xM = 0), V[iM] = W(X[iM], X[CM], X[xM]);
        Z.push(V), eM = eM.concat(V);
      }
      for (let P = 0; P < a; P++) {
        const $ = P / a, X = s * Math.cos($ * Math.PI / 2), iM = j * Math.sin($ * Math.PI / 2) + y;
        for (let nM = 0, CM = k.length; nM < CM; nM++) {
          const xM = f(k[nM], IM[nM], iM);
          rM(xM.x, xM.y, -X);
        }
        for (let nM = 0, CM = o.length; nM < CM; nM++) {
          const xM = o[nM];
          V = Z[nM];
          for (let QM = 0, FM = xM.length; QM < FM; QM++) {
            const RM = f(xM[QM], V[QM], iM);
            rM(RM.x, RM.y, -X);
          }
        }
      }
      const uM = j + y;
      for (let P = 0; P < Q; P++) {
        const $ = g ? f(G[P], eM[P], uM) : G[P];
        C ? (p.copy(E.normals[0]).multiplyScalar($.x), d.copy(E.binormals[0]).multiplyScalar($.y), H.copy(l[0]).add(p).add(d), rM(H.x, H.y, H.z)) : rM($.x, $.y, 0);
      }
      for (let P = 1; P <= T; P++)
        for (let $ = 0; $ < Q; $++) {
          const X = g ? f(G[$], eM[$], uM) : G[$];
          C ? (p.copy(E.normals[P]).multiplyScalar(X.x), d.copy(E.binormals[P]).multiplyScalar(X.y), H.copy(l[P]).add(p).add(d), rM(H.x, H.y, H.z)) : rM(X.x, X.y, u / T * P);
        }
      for (let P = a - 1; P >= 0; P--) {
        const $ = P / a, X = s * Math.cos($ * Math.PI / 2), iM = j * Math.sin($ * Math.PI / 2) + y;
        for (let nM = 0, CM = k.length; nM < CM; nM++) {
          const xM = f(k[nM], IM[nM], iM);
          rM(xM.x, xM.y, u + X);
        }
        for (let nM = 0, CM = o.length; nM < CM; nM++) {
          const xM = o[nM];
          V = Z[nM];
          for (let QM = 0, FM = xM.length; QM < FM; QM++) {
            const RM = f(xM[QM], V[QM], iM);
            C ? rM(RM.x, RM.y + l[T - 1].y, l[T - 1].x + X) : rM(RM.x, RM.y, u + X);
          }
        }
      }
      jM(), _();
      function jM() {
        const P = e.length / 3;
        if (g) {
          let $ = 0, X = Q * $;
          for (let iM = 0; iM < b; iM++) {
            const nM = Y[iM];
            wM(nM[2] + X, nM[1] + X, nM[0] + X);
          }
          $ = T + a * 2, X = Q * $;
          for (let iM = 0; iM < b; iM++) {
            const nM = Y[iM];
            wM(nM[0] + X, nM[1] + X, nM[2] + X);
          }
        } else {
          for (let $ = 0; $ < b; $++) {
            const X = Y[$];
            wM(X[2], X[1], X[0]);
          }
          for (let $ = 0; $ < b; $++) {
            const X = Y[$];
            wM(X[0] + Q * T, X[1] + Q * T, X[2] + Q * T);
          }
        }
        t.addGroup(P, e.length / 3 - P, 0);
      }
      function _() {
        const P = e.length / 3;
        let $ = 0;
        kM(k, $), $ += k.length;
        for (let X = 0, iM = o.length; X < iM; X++) {
          const nM = o[X];
          kM(nM, $), $ += nM.length;
        }
        t.addGroup(P, e.length / 3 - P, 1);
      }
      function kM(P, $) {
        let X = P.length;
        for (; --X >= 0; ) {
          const iM = X;
          let nM = X - 1;
          nM < 0 && (nM = P.length - 1);
          for (let CM = 0, xM = T + a * 2; CM < xM; CM++) {
            const QM = Q * CM, FM = Q * (CM + 1), RM = $ + iM + QM, x = $ + nM + QM, L = $ + nM + FM, R = $ + iM + FM;
            zM(RM, x, L, R);
          }
        }
      }
      function rM(P, $, X) {
        I.push(P), I.push($), I.push(X);
      }
      function wM(P, $, X) {
        vM(P), vM($), vM(X);
        const iM = e.length / 3, nM = r.generateTopUV(t, e, iM - 3, iM - 2, iM - 1);
        OM(nM[0]), OM(nM[1]), OM(nM[2]);
      }
      function zM(P, $, X, iM) {
        vM(P), vM($), vM(iM), vM($), vM(X), vM(iM);
        const nM = e.length / 3, CM = r.generateSideWallUV(t, e, nM - 6, nM - 3, nM - 2, nM - 1);
        OM(CM[0]), OM(CM[1]), OM(CM[3]), OM(CM[1]), OM(CM[2]), OM(CM[3]);
      }
      function vM(P) {
        e.push(I[P * 3 + 0]), e.push(I[P * 3 + 1]), e.push(I[P * 3 + 2]);
      }
      function OM(P) {
        N.push(P.x), N.push(P.y);
      }
    }
  }
  toJSON() {
    const M = super.toJSON(), D = this.parameters.shapes, t = this.parameters.options;
    return vc(D, t, M);
  }
  static fromJSON(M, D) {
    const t = [];
    for (let N = 0, A = M.shapes.length; N < A; N++) {
      const z = D[M.shapes[N]];
      t.push(z);
    }
    const e = M.options.extrudePath;
    return e !== void 0 && (M.options.extrudePath = new Si[e.type]().fromJSON(e)), new re(t, M.options);
  }
}
const dc = {
  generateTopUV: function(n, M, D, t, e) {
    const N = M[D * 3], A = M[D * 3 + 1], z = M[t * 3], I = M[t * 3 + 1], i = M[e * 3], T = M[e * 3 + 1];
    return [
      new q(N, A),
      new q(z, I),
      new q(i, T)
    ];
  },
  generateSideWallUV: function(n, M, D, t, e, N) {
    const A = M[D * 3], z = M[D * 3 + 1], I = M[D * 3 + 2], i = M[t * 3], T = M[t * 3 + 1], u = M[t * 3 + 2], g = M[e * 3], s = M[e * 3 + 1], j = M[e * 3 + 2], y = M[N * 3], a = M[N * 3 + 1], c = M[N * 3 + 2];
    return Math.abs(z - T) < Math.abs(A - i) ? [
      new q(A, 1 - I),
      new q(i, 1 - u),
      new q(g, 1 - j),
      new q(y, 1 - c)
    ] : [
      new q(z, 1 - I),
      new q(T, 1 - u),
      new q(s, 1 - j),
      new q(a, 1 - c)
    ];
  }
};
function vc(n, M, D) {
  if (D.shapes = [], Array.isArray(n))
    for (let t = 0, e = n.length; t < e; t++) {
      const N = n[t];
      D.shapes.push(N.uuid);
    }
  else
    D.shapes.push(n.uuid);
  return M.extrudePath !== void 0 && (D.options.extrudePath = M.extrudePath.toJSON()), D;
}
class FN extends VM {
  constructor(M = new ge([new q(0, 0.5), new q(-0.5, -0.5), new q(0.5, -0.5)]), D = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: M,
      curveSegments: D
    };
    const t = [], e = [], N = [], A = [];
    let z = 0, I = 0;
    if (Array.isArray(M) === !1)
      i(M);
    else
      for (let T = 0; T < M.length; T++)
        i(M[T]), this.addGroup(z, I, T), z += I, I = 0;
    this.setIndex(t), this.setAttribute("position", new WM(e, 3)), this.setAttribute("normal", new WM(N, 3)), this.setAttribute("uv", new WM(A, 2));
    function i(T) {
      const u = e.length / 3, g = T.extractPoints(D);
      let s = g.shape;
      const j = g.holes;
      rt.isClockWise(s) === !1 && (s = s.reverse());
      for (let a = 0, c = j.length; a < c; a++) {
        const r = j[a];
        rt.isClockWise(r) === !0 && (j[a] = r.reverse());
      }
      const y = rt.triangulateShape(s, j);
      for (let a = 0, c = j.length; a < c; a++) {
        const r = j[a];
        s = s.concat(r);
      }
      for (let a = 0, c = s.length; a < c; a++) {
        const r = s[a];
        e.push(r.x, r.y, 0), N.push(0, 0, 1), A.push(r.x, r.y);
      }
      for (let a = 0, c = y.length; a < c; a++) {
        const r = y[a], l = r[0] + u, C = r[1] + u, E = r[2] + u;
        t.push(l, C, E), I += 3;
      }
    }
  }
  toJSON() {
    const M = super.toJSON(), D = this.parameters.shapes;
    return pc(D, M);
  }
  static fromJSON(M, D) {
    const t = [];
    for (let e = 0, N = M.shapes.length; e < N; e++) {
      const A = D[M.shapes[e]];
      t.push(A);
    }
    return new FN(t, M.curveSegments);
  }
}
function pc(n, M) {
  if (M.shapes = [], Array.isArray(n))
    for (let D = 0, t = n.length; D < t; D++) {
      const e = n[D];
      M.shapes.push(e.uuid);
    }
  else
    M.shapes.push(n.uuid);
  return M;
}
class hc extends ID {
  constructor(M) {
    super(), this.type = "ShadowMaterial", this.color = new cM(0), this.transparent = !0, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this;
  }
}
hc.prototype.isShadowMaterial = !0;
class Ki extends ID {
  constructor(M) {
    super(), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new cM(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new cM(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ie, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.defines = { STANDARD: "" }, this.color.copy(M.color), this.roughness = M.roughness, this.metalness = M.metalness, this.map = M.map, this.lightMap = M.lightMap, this.lightMapIntensity = M.lightMapIntensity, this.aoMap = M.aoMap, this.aoMapIntensity = M.aoMapIntensity, this.emissive.copy(M.emissive), this.emissiveMap = M.emissiveMap, this.emissiveIntensity = M.emissiveIntensity, this.bumpMap = M.bumpMap, this.bumpScale = M.bumpScale, this.normalMap = M.normalMap, this.normalMapType = M.normalMapType, this.normalScale.copy(M.normalScale), this.displacementMap = M.displacementMap, this.displacementScale = M.displacementScale, this.displacementBias = M.displacementBias, this.roughnessMap = M.roughnessMap, this.metalnessMap = M.metalnessMap, this.alphaMap = M.alphaMap, this.envMap = M.envMap, this.envMapIntensity = M.envMapIntensity, this.refractionRatio = M.refractionRatio, this.wireframe = M.wireframe, this.wireframeLinewidth = M.wireframeLinewidth, this.wireframeLinecap = M.wireframeLinecap, this.wireframeLinejoin = M.wireframeLinejoin, this.flatShading = M.flatShading, this;
  }
}
Ki.prototype.isMeshStandardMaterial = !0;
class Yc extends Ki {
  constructor(M) {
    super(), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new q(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return OD(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(D) {
        this.ior = (1 + 0.4 * D) / (1 - 0.4 * D);
      }
    }), this.sheenColor = new cM(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationColor = new cM(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new cM(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._transmission = 0, this.setValues(M);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(M) {
    this._sheen > 0 != M > 0 && this.version++, this._sheen = M;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(M) {
    this._clearcoat > 0 != M > 0 && this.version++, this._clearcoat = M;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(M) {
    this._transmission > 0 != M > 0 && this.version++, this._transmission = M;
  }
  copy(M) {
    return super.copy(M), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = M.clearcoat, this.clearcoatMap = M.clearcoatMap, this.clearcoatRoughness = M.clearcoatRoughness, this.clearcoatRoughnessMap = M.clearcoatRoughnessMap, this.clearcoatNormalMap = M.clearcoatNormalMap, this.clearcoatNormalScale.copy(M.clearcoatNormalScale), this.ior = M.ior, this.sheen = M.sheen, this.sheenColor.copy(M.sheenColor), this.sheenColorMap = M.sheenColorMap, this.sheenRoughness = M.sheenRoughness, this.sheenRoughnessMap = M.sheenRoughnessMap, this.transmission = M.transmission, this.transmissionMap = M.transmissionMap, this.thickness = M.thickness, this.thicknessMap = M.thicknessMap, this.attenuationDistance = M.attenuationDistance, this.attenuationColor.copy(M.attenuationColor), this.specularIntensity = M.specularIntensity, this.specularIntensityMap = M.specularIntensityMap, this.specularColor.copy(M.specularColor), this.specularColorMap = M.specularColorMap, this;
  }
}
Yc.prototype.isMeshPhysicalMaterial = !0;
class Ri extends ID {
  constructor(M) {
    super(), this.type = "MeshPhongMaterial", this.color = new cM(16777215), this.specular = new cM(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new cM(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ie, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = fN, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this.specular.copy(M.specular), this.shininess = M.shininess, this.map = M.map, this.lightMap = M.lightMap, this.lightMapIntensity = M.lightMapIntensity, this.aoMap = M.aoMap, this.aoMapIntensity = M.aoMapIntensity, this.emissive.copy(M.emissive), this.emissiveMap = M.emissiveMap, this.emissiveIntensity = M.emissiveIntensity, this.bumpMap = M.bumpMap, this.bumpScale = M.bumpScale, this.normalMap = M.normalMap, this.normalMapType = M.normalMapType, this.normalScale.copy(M.normalScale), this.displacementMap = M.displacementMap, this.displacementScale = M.displacementScale, this.displacementBias = M.displacementBias, this.specularMap = M.specularMap, this.alphaMap = M.alphaMap, this.envMap = M.envMap, this.combine = M.combine, this.reflectivity = M.reflectivity, this.refractionRatio = M.refractionRatio, this.wireframe = M.wireframe, this.wireframeLinewidth = M.wireframeLinewidth, this.wireframeLinecap = M.wireframeLinecap, this.wireframeLinejoin = M.wireframeLinejoin, this.flatShading = M.flatShading, this;
  }
}
Ri.prototype.isMeshPhongMaterial = !0;
class Uc extends ID {
  constructor(M) {
    super(), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new cM(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new cM(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ie, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this.map = M.map, this.gradientMap = M.gradientMap, this.lightMap = M.lightMap, this.lightMapIntensity = M.lightMapIntensity, this.aoMap = M.aoMap, this.aoMapIntensity = M.aoMapIntensity, this.emissive.copy(M.emissive), this.emissiveMap = M.emissiveMap, this.emissiveIntensity = M.emissiveIntensity, this.bumpMap = M.bumpMap, this.bumpScale = M.bumpScale, this.normalMap = M.normalMap, this.normalMapType = M.normalMapType, this.normalScale.copy(M.normalScale), this.displacementMap = M.displacementMap, this.displacementScale = M.displacementScale, this.displacementBias = M.displacementBias, this.alphaMap = M.alphaMap, this.wireframe = M.wireframe, this.wireframeLinewidth = M.wireframeLinewidth, this.wireframeLinecap = M.wireframeLinecap, this.wireframeLinejoin = M.wireframeLinejoin, this;
  }
}
Uc.prototype.isMeshToonMaterial = !0;
class Qc extends ID {
  constructor(M) {
    super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ie, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.bumpMap = M.bumpMap, this.bumpScale = M.bumpScale, this.normalMap = M.normalMap, this.normalMapType = M.normalMapType, this.normalScale.copy(M.normalScale), this.displacementMap = M.displacementMap, this.displacementScale = M.displacementScale, this.displacementBias = M.displacementBias, this.wireframe = M.wireframe, this.wireframeLinewidth = M.wireframeLinewidth, this.flatShading = M.flatShading, this;
  }
}
Qc.prototype.isMeshNormalMaterial = !0;
class Gn extends ID {
  constructor(M) {
    super(), this.type = "MeshLambertMaterial", this.color = new cM(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new cM(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = fN, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this.map = M.map, this.lightMap = M.lightMap, this.lightMapIntensity = M.lightMapIntensity, this.aoMap = M.aoMap, this.aoMapIntensity = M.aoMapIntensity, this.emissive.copy(M.emissive), this.emissiveMap = M.emissiveMap, this.emissiveIntensity = M.emissiveIntensity, this.specularMap = M.specularMap, this.alphaMap = M.alphaMap, this.envMap = M.envMap, this.combine = M.combine, this.reflectivity = M.reflectivity, this.refractionRatio = M.refractionRatio, this.wireframe = M.wireframe, this.wireframeLinewidth = M.wireframeLinewidth, this.wireframeLinecap = M.wireframeLinecap, this.wireframeLinejoin = M.wireframeLinejoin, this;
  }
}
Gn.prototype.isMeshLambertMaterial = !0;
class fc extends ID {
  constructor(M) {
    super(), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new cM(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ie, this.normalScale = new q(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.defines = { MATCAP: "" }, this.color.copy(M.color), this.matcap = M.matcap, this.map = M.map, this.bumpMap = M.bumpMap, this.bumpScale = M.bumpScale, this.normalMap = M.normalMap, this.normalMapType = M.normalMapType, this.normalScale.copy(M.normalScale), this.displacementMap = M.displacementMap, this.displacementScale = M.displacementScale, this.displacementBias = M.displacementBias, this.alphaMap = M.alphaMap, this.flatShading = M.flatShading, this;
  }
}
fc.prototype.isMeshMatcapMaterial = !0;
class mc extends gt {
  constructor(M) {
    super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(M);
  }
  copy(M) {
    return super.copy(M), this.scale = M.scale, this.dashSize = M.dashSize, this.gapSize = M.gapSize, this;
  }
}
mc.prototype.isLineDashedMaterial = !0;
const GM = {
  arraySlice: function(n, M, D) {
    return GM.isTypedArray(n) ? new n.constructor(n.subarray(M, D !== void 0 ? D : n.length)) : n.slice(M, D);
  },
  convertArray: function(n, M, D) {
    return !n || !D && n.constructor === M ? n : typeof M.BYTES_PER_ELEMENT == "number" ? new M(n) : Array.prototype.slice.call(n);
  },
  isTypedArray: function(n) {
    return ArrayBuffer.isView(n) && !(n instanceof DataView);
  },
  getKeyframeOrder: function(n) {
    function M(e, N) {
      return n[e] - n[N];
    }
    const D = n.length, t = new Array(D);
    for (let e = 0; e !== D; ++e)
      t[e] = e;
    return t.sort(M), t;
  },
  sortedArray: function(n, M, D) {
    const t = n.length, e = new n.constructor(t);
    for (let N = 0, A = 0; A !== t; ++N) {
      const z = D[N] * M;
      for (let I = 0; I !== M; ++I)
        e[A++] = n[z + I];
    }
    return e;
  },
  flattenJSON: function(n, M, D, t) {
    let e = 1, N = n[0];
    for (; N !== void 0 && N[t] === void 0; )
      N = n[e++];
    if (N === void 0)
      return;
    let A = N[t];
    if (A !== void 0)
      if (Array.isArray(A))
        do
          A = N[t], A !== void 0 && (M.push(N.time), D.push.apply(D, A)), N = n[e++];
        while (N !== void 0);
      else if (A.toArray !== void 0)
        do
          A = N[t], A !== void 0 && (M.push(N.time), A.toArray(D, D.length)), N = n[e++];
        while (N !== void 0);
      else
        do
          A = N[t], A !== void 0 && (M.push(N.time), D.push(A)), N = n[e++];
        while (N !== void 0);
  },
  subclip: function(n, M, D, t, e = 30) {
    const N = n.clone();
    N.name = M;
    const A = [];
    for (let I = 0; I < N.tracks.length; ++I) {
      const i = N.tracks[I], T = i.getValueSize(), u = [], g = [];
      for (let s = 0; s < i.times.length; ++s) {
        const j = i.times[s] * e;
        if (!(j < D || j >= t)) {
          u.push(i.times[s]);
          for (let y = 0; y < T; ++y)
            g.push(i.values[s * T + y]);
        }
      }
      u.length !== 0 && (i.times = GM.convertArray(u, i.times.constructor), i.values = GM.convertArray(g, i.values.constructor), A.push(i));
    }
    N.tracks = A;
    let z = 1 / 0;
    for (let I = 0; I < N.tracks.length; ++I)
      z > N.tracks[I].times[0] && (z = N.tracks[I].times[0]);
    for (let I = 0; I < N.tracks.length; ++I)
      N.tracks[I].shift(-1 * z);
    return N.resetDuration(), N;
  },
  makeClipAdditive: function(n, M = 0, D = n, t = 30) {
    t <= 0 && (t = 30);
    const e = D.tracks.length, N = M / t;
    for (let A = 0; A < e; ++A) {
      const z = D.tracks[A], I = z.ValueTypeName;
      if (I === "bool" || I === "string")
        continue;
      const i = n.tracks.find(function(c) {
        return c.name === z.name && c.ValueTypeName === I;
      });
      if (i === void 0)
        continue;
      let T = 0;
      const u = z.getValueSize();
      z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (T = u / 3);
      let g = 0;
      const s = i.getValueSize();
      i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (g = s / 3);
      const j = z.times.length - 1;
      let y;
      if (N <= z.times[0]) {
        const c = T, r = u - T;
        y = GM.arraySlice(z.values, c, r);
      } else if (N >= z.times[j]) {
        const c = j * u + T, r = c + u - T;
        y = GM.arraySlice(z.values, c, r);
      } else {
        const c = z.createInterpolant(), r = T, l = u - T;
        c.evaluate(N), y = GM.arraySlice(c.resultBuffer, r, l);
      }
      I === "quaternion" && new aD().fromArray(y).normalize().conjugate().toArray(y);
      const a = i.times.length;
      for (let c = 0; c < a; ++c) {
        const r = c * s + g;
        if (I === "quaternion")
          aD.multiplyQuaternionsFlat(i.values, r, y, 0, i.values, r);
        else {
          const l = s - g * 2;
          for (let C = 0; C < l; ++C)
            i.values[r + C] -= y[C];
        }
      }
    }
    return n.blendMode = zi, n;
  }
};
class yt {
  constructor(M, D, t, e) {
    this.parameterPositions = M, this._cachedIndex = 0, this.resultBuffer = e !== void 0 ? e : new D.constructor(t), this.sampleValues = D, this.valueSize = t, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(M) {
    const D = this.parameterPositions;
    let t = this._cachedIndex, e = D[t], N = D[t - 1];
    M: {
      D: {
        let A;
        t: {
          e:
            if (!(M < e)) {
              for (let z = t + 2; ; ) {
                if (e === void 0) {
                  if (M < N)
                    break e;
                  return t = D.length, this._cachedIndex = t, this.afterEnd_(t - 1, M, N);
                }
                if (t === z)
                  break;
                if (N = e, e = D[++t], M < e)
                  break D;
              }
              A = D.length;
              break t;
            }
          if (!(M >= N)) {
            const z = D[1];
            M < z && (t = 2, N = z);
            for (let I = t - 2; ; ) {
              if (N === void 0)
                return this._cachedIndex = 0, this.beforeStart_(0, M, e);
              if (t === I)
                break;
              if (e = N, N = D[--t - 1], M >= N)
                break D;
            }
            A = t, t = 0;
            break t;
          }
          break M;
        }
        for (; t < A; ) {
          const z = t + A >>> 1;
          M < D[z] ? A = z : t = z + 1;
        }
        if (e = D[t], N = D[t - 1], N === void 0)
          return this._cachedIndex = 0, this.beforeStart_(0, M, e);
        if (e === void 0)
          return t = D.length, this._cachedIndex = t, this.afterEnd_(t - 1, N, M);
      }
      this._cachedIndex = t, this.intervalChanged_(t, N, e);
    }
    return this.interpolate_(t, N, M, e);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(M) {
    const D = this.resultBuffer, t = this.sampleValues, e = this.valueSize, N = M * e;
    for (let A = 0; A !== e; ++A)
      D[A] = t[N + A];
    return D;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
yt.prototype.beforeStart_ = yt.prototype.copySampleValue_;
yt.prototype.afterEnd_ = yt.prototype.copySampleValue_;
class kc extends yt {
  constructor(M, D, t, e) {
    super(M, D, t, e), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: qt,
      endingEnd: qt
    };
  }
  intervalChanged_(M, D, t) {
    const e = this.parameterPositions;
    let N = M - 2, A = M + 1, z = e[N], I = e[A];
    if (z === void 0)
      switch (this.getSettings_().endingStart) {
        case Xt:
          N = M, z = 2 * D - t;
          break;
        case hN:
          N = e.length - 2, z = D + e[N] - e[N + 1];
          break;
        default:
          N = M, z = t;
      }
    if (I === void 0)
      switch (this.getSettings_().endingEnd) {
        case Xt:
          A = M, I = 2 * t - D;
          break;
        case hN:
          A = 1, I = t + e[1] - e[0];
          break;
        default:
          A = M - 1, I = D;
      }
    const i = (t - D) * 0.5, T = this.valueSize;
    this._weightPrev = i / (D - z), this._weightNext = i / (I - t), this._offsetPrev = N * T, this._offsetNext = A * T;
  }
  interpolate_(M, D, t, e) {
    const N = this.resultBuffer, A = this.sampleValues, z = this.valueSize, I = M * z, i = I - z, T = this._offsetPrev, u = this._offsetNext, g = this._weightPrev, s = this._weightNext, j = (t - D) / (e - D), y = j * j, a = y * j, c = -g * a + 2 * g * y - g * j, r = (1 + g) * a + (-1.5 - 2 * g) * y + (-0.5 + g) * j + 1, l = (-1 - s) * a + (1.5 + s) * y + 0.5 * j, C = s * a - s * y;
    for (let E = 0; E !== z; ++E)
      N[E] = c * A[T + E] + r * A[i + E] + l * A[I + E] + C * A[u + E];
    return N;
  }
}
class Pi extends yt {
  constructor(M, D, t, e) {
    super(M, D, t, e);
  }
  interpolate_(M, D, t, e) {
    const N = this.resultBuffer, A = this.sampleValues, z = this.valueSize, I = M * z, i = I - z, T = (t - D) / (e - D), u = 1 - T;
    for (let g = 0; g !== z; ++g)
      N[g] = A[i + g] * u + A[I + g] * T;
    return N;
  }
}
class Sc extends yt {
  constructor(M, D, t, e) {
    super(M, D, t, e);
  }
  interpolate_(M) {
    return this.copySampleValue_(M - 1);
  }
}
class RD {
  constructor(M, D, t, e) {
    if (M === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (D === void 0 || D.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + M);
    this.name = M, this.times = GM.convertArray(D, this.TimeBufferType), this.values = GM.convertArray(t, this.ValueBufferType), this.setInterpolation(e || this.DefaultInterpolation);
  }
  static toJSON(M) {
    const D = M.constructor;
    let t;
    if (D.toJSON !== this.toJSON)
      t = D.toJSON(M);
    else {
      t = {
        name: M.name,
        times: GM.convertArray(M.times, Array),
        values: GM.convertArray(M.values, Array)
      };
      const e = M.getInterpolation();
      e !== M.DefaultInterpolation && (t.interpolation = e);
    }
    return t.type = M.ValueTypeName, t;
  }
  InterpolantFactoryMethodDiscrete(M) {
    return new Sc(this.times, this.values, this.getValueSize(), M);
  }
  InterpolantFactoryMethodLinear(M) {
    return new Pi(this.times, this.values, this.getValueSize(), M);
  }
  InterpolantFactoryMethodSmooth(M) {
    return new kc(this.times, this.values, this.getValueSize(), M);
  }
  setInterpolation(M) {
    let D;
    switch (M) {
      case vN:
        D = this.InterpolantFactoryMethodDiscrete;
        break;
      case pN:
        D = this.InterpolantFactoryMethodLinear;
        break;
      case qN:
        D = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (D === void 0) {
      const t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (M !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(t);
      return console.warn("THREE.KeyframeTrack:", t), this;
    }
    return this.createInterpolant = D, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return vN;
      case this.InterpolantFactoryMethodLinear:
        return pN;
      case this.InterpolantFactoryMethodSmooth:
        return qN;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(M) {
    if (M !== 0) {
      const D = this.times;
      for (let t = 0, e = D.length; t !== e; ++t)
        D[t] += M;
    }
    return this;
  }
  scale(M) {
    if (M !== 1) {
      const D = this.times;
      for (let t = 0, e = D.length; t !== e; ++t)
        D[t] *= M;
    }
    return this;
  }
  trim(M, D) {
    const t = this.times, e = t.length;
    let N = 0, A = e - 1;
    for (; N !== e && t[N] < M; )
      ++N;
    for (; A !== -1 && t[A] > D; )
      --A;
    if (++A, N !== 0 || A !== e) {
      N >= A && (A = Math.max(A, 1), N = A - 1);
      const z = this.getValueSize();
      this.times = GM.arraySlice(t, N, A), this.values = GM.arraySlice(this.values, N * z, A * z);
    }
    return this;
  }
  validate() {
    let M = !0;
    const D = this.getValueSize();
    D - Math.floor(D) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), M = !1);
    const t = this.times, e = this.values, N = t.length;
    N === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), M = !1);
    let A = null;
    for (let z = 0; z !== N; z++) {
      const I = t[z];
      if (typeof I == "number" && isNaN(I)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, z, I), M = !1;
        break;
      }
      if (A !== null && A > I) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, z, I, A), M = !1;
        break;
      }
      A = I;
    }
    if (e !== void 0 && GM.isTypedArray(e))
      for (let z = 0, I = e.length; z !== I; ++z) {
        const i = e[z];
        if (isNaN(i)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, z, i), M = !1;
          break;
        }
      }
    return M;
  }
  optimize() {
    const M = GM.arraySlice(this.times), D = GM.arraySlice(this.values), t = this.getValueSize(), e = this.getInterpolation() === qN, N = M.length - 1;
    let A = 1;
    for (let z = 1; z < N; ++z) {
      let I = !1;
      const i = M[z], T = M[z + 1];
      if (i !== T && (z !== 1 || i !== M[0]))
        if (e)
          I = !0;
        else {
          const u = z * t, g = u - t, s = u + t;
          for (let j = 0; j !== t; ++j) {
            const y = D[u + j];
            if (y !== D[g + j] || y !== D[s + j]) {
              I = !0;
              break;
            }
          }
        }
      if (I) {
        if (z !== A) {
          M[A] = M[z];
          const u = z * t, g = A * t;
          for (let s = 0; s !== t; ++s)
            D[g + s] = D[u + s];
        }
        ++A;
      }
    }
    if (N > 0) {
      M[A] = M[N];
      for (let z = N * t, I = A * t, i = 0; i !== t; ++i)
        D[I + i] = D[z + i];
      ++A;
    }
    return A !== M.length ? (this.times = GM.arraySlice(M, 0, A), this.values = GM.arraySlice(D, 0, A * t)) : (this.times = M, this.values = D), this;
  }
  clone() {
    const M = GM.arraySlice(this.times, 0), D = GM.arraySlice(this.values, 0), t = this.constructor, e = new t(this.name, M, D);
    return e.createInterpolant = this.createInterpolant, e;
  }
}
RD.prototype.TimeBufferType = Float32Array;
RD.prototype.ValueBufferType = Float32Array;
RD.prototype.DefaultInterpolation = pN;
class se extends RD {
}
se.prototype.ValueTypeName = "bool";
se.prototype.ValueBufferType = Array;
se.prototype.DefaultInterpolation = vN;
se.prototype.InterpolantFactoryMethodLinear = void 0;
se.prototype.InterpolantFactoryMethodSmooth = void 0;
class Fi extends RD {
}
Fi.prototype.ValueTypeName = "color";
class UN extends RD {
}
UN.prototype.ValueTypeName = "number";
class Zc extends yt {
  constructor(M, D, t, e) {
    super(M, D, t, e);
  }
  interpolate_(M, D, t, e) {
    const N = this.resultBuffer, A = this.sampleValues, z = this.valueSize, I = (t - D) / (e - D);
    let i = M * z;
    for (let T = i + z; i !== T; i += 4)
      aD.slerpFlat(N, 0, A, i - z, A, i, I);
    return N;
  }
}
class Fe extends RD {
  InterpolantFactoryMethodLinear(M) {
    return new Zc(this.times, this.values, this.getValueSize(), M);
  }
}
Fe.prototype.ValueTypeName = "quaternion";
Fe.prototype.DefaultInterpolation = pN;
Fe.prototype.InterpolantFactoryMethodSmooth = void 0;
class ce extends RD {
}
ce.prototype.ValueTypeName = "string";
ce.prototype.ValueBufferType = Array;
ce.prototype.DefaultInterpolation = vN;
ce.prototype.InterpolantFactoryMethodLinear = void 0;
ce.prototype.InterpolantFactoryMethodSmooth = void 0;
class QN extends RD {
}
QN.prototype.ValueTypeName = "vector";
class Hz {
  constructor(M, D = -1, t, e = Xn) {
    this.name = M, this.tracks = t, this.duration = D, this.blendMode = e, this.uuid = bD(), this.duration < 0 && this.resetDuration();
  }
  static parse(M) {
    const D = [], t = M.tracks, e = 1 / (M.fps || 1);
    for (let A = 0, z = t.length; A !== z; ++A)
      D.push(bc(t[A]).scale(e));
    const N = new this(M.name, M.duration, D, M.blendMode);
    return N.uuid = M.uuid, N;
  }
  static toJSON(M) {
    const D = [], t = M.tracks, e = {
      name: M.name,
      duration: M.duration,
      tracks: D,
      uuid: M.uuid,
      blendMode: M.blendMode
    };
    for (let N = 0, A = t.length; N !== A; ++N)
      D.push(RD.toJSON(t[N]));
    return e;
  }
  static CreateFromMorphTargetSequence(M, D, t, e) {
    const N = D.length, A = [];
    for (let z = 0; z < N; z++) {
      let I = [], i = [];
      I.push((z + N - 1) % N, z, (z + 1) % N), i.push(0, 1, 0);
      const T = GM.getKeyframeOrder(I);
      I = GM.sortedArray(I, 1, T), i = GM.sortedArray(i, 1, T), !e && I[0] === 0 && (I.push(N), i.push(i[0])), A.push(new UN(".morphTargetInfluences[" + D[z].name + "]", I, i).scale(1 / t));
    }
    return new this(M, -1, A);
  }
  static findByName(M, D) {
    let t = M;
    if (!Array.isArray(M)) {
      const e = M;
      t = e.geometry && e.geometry.animations || e.animations;
    }
    for (let e = 0; e < t.length; e++)
      if (t[e].name === D)
        return t[e];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(M, D, t) {
    const e = {}, N = /^([\w-]*?)([\d]+)$/;
    for (let z = 0, I = M.length; z < I; z++) {
      const i = M[z], T = i.name.match(N);
      if (T && T.length > 1) {
        const u = T[1];
        let g = e[u];
        g || (e[u] = g = []), g.push(i);
      }
    }
    const A = [];
    for (const z in e)
      A.push(this.CreateFromMorphTargetSequence(z, e[z], D, t));
    return A;
  }
  static parseAnimation(M, D) {
    if (!M)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const t = function(u, g, s, j, y) {
      if (s.length !== 0) {
        const a = [], c = [];
        GM.flattenJSON(s, a, c, j), a.length !== 0 && y.push(new u(g, a, c));
      }
    }, e = [], N = M.name || "default", A = M.fps || 30, z = M.blendMode;
    let I = M.length || -1;
    const i = M.hierarchy || [];
    for (let u = 0; u < i.length; u++) {
      const g = i[u].keys;
      if (!(!g || g.length === 0))
        if (g[0].morphTargets) {
          const s = {};
          let j;
          for (j = 0; j < g.length; j++)
            if (g[j].morphTargets)
              for (let y = 0; y < g[j].morphTargets.length; y++)
                s[g[j].morphTargets[y]] = -1;
          for (const y in s) {
            const a = [], c = [];
            for (let r = 0; r !== g[j].morphTargets.length; ++r) {
              const l = g[j];
              a.push(l.time), c.push(l.morphTarget === y ? 1 : 0);
            }
            e.push(new UN(".morphTargetInfluence[" + y + "]", a, c));
          }
          I = s.length * (A || 1);
        } else {
          const s = ".bones[" + D[u].name + "]";
          t(QN, s + ".position", g, "pos", e), t(Fe, s + ".quaternion", g, "rot", e), t(QN, s + ".scale", g, "scl", e);
        }
    }
    return e.length === 0 ? null : new this(N, I, e, z);
  }
  resetDuration() {
    const M = this.tracks;
    let D = 0;
    for (let t = 0, e = M.length; t !== e; ++t) {
      const N = this.tracks[t];
      D = Math.max(D, N.times[N.times.length - 1]);
    }
    return this.duration = D, this;
  }
  trim() {
    for (let M = 0; M < this.tracks.length; M++)
      this.tracks[M].trim(0, this.duration);
    return this;
  }
  validate() {
    let M = !0;
    for (let D = 0; D < this.tracks.length; D++)
      M = M && this.tracks[D].validate();
    return M;
  }
  optimize() {
    for (let M = 0; M < this.tracks.length; M++)
      this.tracks[M].optimize();
    return this;
  }
  clone() {
    const M = [];
    for (let D = 0; D < this.tracks.length; D++)
      M.push(this.tracks[D].clone());
    return new this.constructor(this.name, this.duration, M, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function _c(n) {
  switch (n.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return UN;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return QN;
    case "color":
      return Fi;
    case "quaternion":
      return Fe;
    case "bool":
    case "boolean":
      return se;
    case "string":
      return ce;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + n);
}
function bc(n) {
  if (n.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const M = _c(n.type);
  if (n.times === void 0) {
    const D = [], t = [];
    GM.flattenJSON(n.keys, D, t, "value"), n.times = D, n.values = t;
  }
  return M.parse !== void 0 ? M.parse(n) : new M(n.name, n.times, n.values, n.interpolation);
}
const ze = {
  enabled: !1,
  files: {},
  add: function(n, M) {
    this.enabled !== !1 && (this.files[n] = M);
  },
  get: function(n) {
    if (this.enabled !== !1)
      return this.files[n];
  },
  remove: function(n) {
    delete this.files[n];
  },
  clear: function() {
    this.files = {};
  }
};
class Kc {
  constructor(M, D, t) {
    const e = this;
    let N = !1, A = 0, z = 0, I;
    const i = [];
    this.onStart = void 0, this.onLoad = M, this.onProgress = D, this.onError = t, this.itemStart = function(T) {
      z++, N === !1 && e.onStart !== void 0 && e.onStart(T, A, z), N = !0;
    }, this.itemEnd = function(T) {
      A++, e.onProgress !== void 0 && e.onProgress(T, A, z), A === z && (N = !1, e.onLoad !== void 0 && e.onLoad());
    }, this.itemError = function(T) {
      e.onError !== void 0 && e.onError(T);
    }, this.resolveURL = function(T) {
      return I ? I(T) : T;
    }, this.setURLModifier = function(T) {
      return I = T, this;
    }, this.addHandler = function(T, u) {
      return i.push(T, u), this;
    }, this.removeHandler = function(T) {
      const u = i.indexOf(T);
      return u !== -1 && i.splice(u, 2), this;
    }, this.getHandler = function(T) {
      for (let u = 0, g = i.length; u < g; u += 2) {
        const s = i[u], j = i[u + 1];
        if (s.global && (s.lastIndex = 0), s.test(T))
          return j;
      }
      return null;
    };
  }
}
const Rc = new Kc();
class JD {
  constructor(M) {
    this.manager = M !== void 0 ? M : Rc, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(M, D) {
    const t = this;
    return new Promise(function(e, N) {
      t.load(M, e, D, N);
    });
  }
  parse() {
  }
  setCrossOrigin(M) {
    return this.crossOrigin = M, this;
  }
  setWithCredentials(M) {
    return this.withCredentials = M, this;
  }
  setPath(M) {
    return this.path = M, this;
  }
  setResourcePath(M) {
    return this.resourcePath = M, this;
  }
  setRequestHeader(M) {
    return this.requestHeader = M, this;
  }
}
const qD = {};
class Bi extends JD {
  constructor(M) {
    super(M);
  }
  load(M, D, t, e) {
    M === void 0 && (M = ""), this.path !== void 0 && (M = this.path + M), M = this.manager.resolveURL(M);
    const N = ze.get(M);
    if (N !== void 0)
      return this.manager.itemStart(M), setTimeout(() => {
        D && D(N), this.manager.itemEnd(M);
      }, 0), N;
    if (qD[M] !== void 0) {
      qD[M].push({
        onLoad: D,
        onProgress: t,
        onError: e
      });
      return;
    }
    qD[M] = [], qD[M].push({
      onLoad: D,
      onProgress: t,
      onError: e
    });
    const A = new Request(M, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), z = this.mimeType, I = this.responseType;
    fetch(A).then((i) => {
      if (i.status === 200 || i.status === 0) {
        if (i.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || i.body.getReader === void 0)
          return i;
        const T = qD[M], u = i.body.getReader(), g = i.headers.get("Content-Length"), s = g ? parseInt(g) : 0, j = s !== 0;
        let y = 0;
        const a = new ReadableStream({
          start(c) {
            r();
            function r() {
              u.read().then(({ done: l, value: C }) => {
                if (l)
                  c.close();
                else {
                  y += C.byteLength;
                  const E = new ProgressEvent("progress", { lengthComputable: j, loaded: y, total: s });
                  for (let d = 0, p = T.length; d < p; d++) {
                    const H = T[d];
                    H.onProgress && H.onProgress(E);
                  }
                  c.enqueue(C), r();
                }
              });
            }
          }
        });
        return new Response(a);
      } else
        throw Error(`fetch for "${i.url}" responded with ${i.status}: ${i.statusText}`);
    }).then((i) => {
      switch (I) {
        case "arraybuffer":
          return i.arrayBuffer();
        case "blob":
          return i.blob();
        case "document":
          return i.text().then((T) => new DOMParser().parseFromString(T, z));
        case "json":
          return i.json();
        default:
          if (z === void 0)
            return i.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(z), g = u && u[1] ? u[1].toLowerCase() : void 0, s = new TextDecoder(g);
            return i.arrayBuffer().then((j) => s.decode(j));
          }
      }
    }).then((i) => {
      ze.add(M, i);
      const T = qD[M];
      delete qD[M];
      for (let u = 0, g = T.length; u < g; u++) {
        const s = T[u];
        s.onLoad && s.onLoad(i);
      }
    }).catch((i) => {
      const T = qD[M];
      if (T === void 0)
        throw this.manager.itemError(M), i;
      delete qD[M];
      for (let u = 0, g = T.length; u < g; u++) {
        const s = T[u];
        s.onError && s.onError(i);
      }
      this.manager.itemError(M);
    }).finally(() => {
      this.manager.itemEnd(M);
    }), this.manager.itemStart(M);
  }
  setResponseType(M) {
    return this.responseType = M, this;
  }
  setMimeType(M) {
    return this.mimeType = M, this;
  }
}
class Vi extends JD {
  constructor(M) {
    super(M);
  }
  load(M, D, t, e) {
    this.path !== void 0 && (M = this.path + M), M = this.manager.resolveURL(M);
    const N = this, A = ze.get(M);
    if (A !== void 0)
      return N.manager.itemStart(M), setTimeout(function() {
        D && D(A), N.manager.itemEnd(M);
      }, 0), A;
    const z = fe("img");
    function I() {
      T(), ze.add(M, this), D && D(this), N.manager.itemEnd(M);
    }
    function i(u) {
      T(), e && e(u), N.manager.itemError(M), N.manager.itemEnd(M);
    }
    function T() {
      z.removeEventListener("load", I, !1), z.removeEventListener("error", i, !1);
    }
    return z.addEventListener("load", I, !1), z.addEventListener("error", i, !1), M.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (z.crossOrigin = this.crossOrigin), N.manager.itemStart(M), z.src = M, z;
  }
}
class Pc extends JD {
  constructor(M) {
    super(M);
  }
  load(M, D, t, e) {
    const N = new SN(), A = new Vi(this.manager);
    A.setCrossOrigin(this.crossOrigin), A.setPath(this.path);
    let z = 0;
    function I(i) {
      A.load(M[i], function(T) {
        N.images[i] = T, z++, z === 6 && (N.needsUpdate = !0, D && D(N));
      }, void 0, e);
    }
    for (let i = 0; i < M.length; ++i)
      I(i);
    return N;
  }
}
class Hi extends JD {
  constructor(M) {
    super(M);
  }
  load(M, D, t, e) {
    const N = new iD(), A = new Vi(this.manager);
    return A.setCrossOrigin(this.crossOrigin), A.setPath(this.path), A.load(M, function(z) {
      N.image = z, N.needsUpdate = !0, D !== void 0 && D(N);
    }, t, e), N;
  }
}
class KD extends ZM {
  constructor(M, D = 1) {
    super(), this.type = "Light", this.color = new cM(M), this.intensity = D;
  }
  dispose() {
  }
  copy(M) {
    return super.copy(M), this.color.copy(M.color), this.intensity = M.intensity, this;
  }
  toJSON(M) {
    const D = super.toJSON(M);
    return D.object.color = this.color.getHex(), D.object.intensity = this.intensity, this.groundColor !== void 0 && (D.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (D.object.distance = this.distance), this.angle !== void 0 && (D.object.angle = this.angle), this.decay !== void 0 && (D.object.decay = this.decay), this.penumbra !== void 0 && (D.object.penumbra = this.penumbra), this.shadow !== void 0 && (D.object.shadow = this.shadow.toJSON()), D;
  }
}
KD.prototype.isLight = !0;
class Fc extends KD {
  constructor(M, D, t) {
    super(M, t), this.type = "HemisphereLight", this.position.copy(ZM.DefaultUp), this.updateMatrix(), this.groundColor = new cM(D);
  }
  copy(M) {
    return KD.prototype.copy.call(this, M), this.groundColor.copy(M.groundColor), this;
  }
}
Fc.prototype.isHemisphereLight = !0;
const Gz = /* @__PURE__ */ new aM(), Wz = /* @__PURE__ */ new O(), qz = /* @__PURE__ */ new O();
class gA {
  constructor(M) {
    this.camera = M, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new q(512, 512), this.map = null, this.mapPass = null, this.matrix = new aM(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ZN(), this._frameExtents = new q(1, 1), this._viewportCount = 1, this._viewports = [
      new PM(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(M) {
    const D = this.camera, t = this.matrix;
    Wz.setFromMatrixPosition(M.matrixWorld), D.position.copy(Wz), qz.setFromMatrixPosition(M.target.matrixWorld), D.lookAt(qz), D.updateMatrixWorld(), Gz.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Gz), t.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), t.multiply(D.projectionMatrix), t.multiply(D.matrixWorldInverse);
  }
  getViewport(M) {
    return this._viewports[M];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(M) {
    return this.camera = M.camera.clone(), this.bias = M.bias, this.radius = M.radius, this.mapSize.copy(M.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const M = {};
    return this.bias !== 0 && (M.bias = this.bias), this.normalBias !== 0 && (M.normalBias = this.normalBias), this.radius !== 1 && (M.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (M.mapSize = this.mapSize.toArray()), M.camera = this.camera.toJSON(!1).object, delete M.camera.matrix, M;
  }
}
class Gi extends gA {
  constructor() {
    super(new jD(50, 1, 0.5, 500)), this.focus = 1;
  }
  updateMatrices(M) {
    const D = this.camera, t = bn * 2 * M.angle * this.focus, e = this.mapSize.width / this.mapSize.height, N = M.distance || D.far;
    (t !== D.fov || e !== D.aspect || N !== D.far) && (D.fov = t, D.aspect = e, D.far = N, D.updateProjectionMatrix()), super.updateMatrices(M);
  }
  copy(M) {
    return super.copy(M), this.focus = M.focus, this;
  }
}
Gi.prototype.isSpotLightShadow = !0;
class Bc extends KD {
  constructor(M, D, t = 0, e = Math.PI / 3, N = 0, A = 1) {
    super(M, D), this.type = "SpotLight", this.position.copy(ZM.DefaultUp), this.updateMatrix(), this.target = new ZM(), this.distance = t, this.angle = e, this.penumbra = N, this.decay = A, this.shadow = new Gi();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(M) {
    this.intensity = M / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(M) {
    return super.copy(M), this.distance = M.distance, this.angle = M.angle, this.penumbra = M.penumbra, this.decay = M.decay, this.target = M.target.clone(), this.shadow = M.shadow.clone(), this;
  }
}
Bc.prototype.isSpotLight = !0;
const Xz = /* @__PURE__ */ new aM(), Ee = /* @__PURE__ */ new O(), Yn = /* @__PURE__ */ new O();
class Wi extends gA {
  constructor() {
    super(new jD(90, 1, 0.5, 500)), this._frameExtents = new q(4, 2), this._viewportCount = 6, this._viewports = [
      new PM(2, 1, 1, 1),
      new PM(0, 1, 1, 1),
      new PM(3, 1, 1, 1),
      new PM(1, 1, 1, 1),
      new PM(3, 0, 1, 1),
      new PM(1, 0, 1, 1)
    ], this._cubeDirections = [
      new O(1, 0, 0),
      new O(-1, 0, 0),
      new O(0, 0, 1),
      new O(0, 0, -1),
      new O(0, 1, 0),
      new O(0, -1, 0)
    ], this._cubeUps = [
      new O(0, 1, 0),
      new O(0, 1, 0),
      new O(0, 1, 0),
      new O(0, 1, 0),
      new O(0, 0, 1),
      new O(0, 0, -1)
    ];
  }
  updateMatrices(M, D = 0) {
    const t = this.camera, e = this.matrix, N = M.distance || t.far;
    N !== t.far && (t.far = N, t.updateProjectionMatrix()), Ee.setFromMatrixPosition(M.matrixWorld), t.position.copy(Ee), Yn.copy(t.position), Yn.add(this._cubeDirections[D]), t.up.copy(this._cubeUps[D]), t.lookAt(Yn), t.updateMatrixWorld(), e.makeTranslation(-Ee.x, -Ee.y, -Ee.z), Xz.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Xz);
  }
}
Wi.prototype.isPointLightShadow = !0;
class Vc extends KD {
  constructor(M, D, t = 0, e = 1) {
    super(M, D), this.type = "PointLight", this.distance = t, this.decay = e, this.shadow = new Wi();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(M) {
    this.intensity = M / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(M) {
    return super.copy(M), this.distance = M.distance, this.decay = M.decay, this.shadow = M.shadow.clone(), this;
  }
}
Vc.prototype.isPointLight = !0;
class qi extends gA {
  constructor() {
    super(new eA(-5, 5, 5, -5, 0.5, 500));
  }
}
qi.prototype.isDirectionalLightShadow = !0;
class Xi extends KD {
  constructor(M, D) {
    super(M, D), this.type = "DirectionalLight", this.position.copy(ZM.DefaultUp), this.updateMatrix(), this.target = new ZM(), this.shadow = new qi();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(M) {
    return super.copy(M), this.target = M.target.clone(), this.shadow = M.shadow.clone(), this;
  }
}
Xi.prototype.isDirectionalLight = !0;
class Hc extends KD {
  constructor(M, D) {
    super(M, D), this.type = "AmbientLight";
  }
}
Hc.prototype.isAmbientLight = !0;
class Gc extends KD {
  constructor(M, D, t = 10, e = 10) {
    super(M, D), this.type = "RectAreaLight", this.width = t, this.height = e;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(M) {
    this.intensity = M / (this.width * this.height * Math.PI);
  }
  copy(M) {
    return super.copy(M), this.width = M.width, this.height = M.height, this;
  }
  toJSON(M) {
    const D = super.toJSON(M);
    return D.object.width = this.width, D.object.height = this.height, D;
  }
}
Gc.prototype.isRectAreaLight = !0;
class Ji {
  constructor() {
    this.coefficients = [];
    for (let M = 0; M < 9; M++)
      this.coefficients.push(new O());
  }
  set(M) {
    for (let D = 0; D < 9; D++)
      this.coefficients[D].copy(M[D]);
    return this;
  }
  zero() {
    for (let M = 0; M < 9; M++)
      this.coefficients[M].set(0, 0, 0);
    return this;
  }
  getAt(M, D) {
    const t = M.x, e = M.y, N = M.z, A = this.coefficients;
    return D.copy(A[0]).multiplyScalar(0.282095), D.addScaledVector(A[1], 0.488603 * e), D.addScaledVector(A[2], 0.488603 * N), D.addScaledVector(A[3], 0.488603 * t), D.addScaledVector(A[4], 1.092548 * (t * e)), D.addScaledVector(A[5], 1.092548 * (e * N)), D.addScaledVector(A[6], 0.315392 * (3 * N * N - 1)), D.addScaledVector(A[7], 1.092548 * (t * N)), D.addScaledVector(A[8], 0.546274 * (t * t - e * e)), D;
  }
  getIrradianceAt(M, D) {
    const t = M.x, e = M.y, N = M.z, A = this.coefficients;
    return D.copy(A[0]).multiplyScalar(0.886227), D.addScaledVector(A[1], 2 * 0.511664 * e), D.addScaledVector(A[2], 2 * 0.511664 * N), D.addScaledVector(A[3], 2 * 0.511664 * t), D.addScaledVector(A[4], 2 * 0.429043 * t * e), D.addScaledVector(A[5], 2 * 0.429043 * e * N), D.addScaledVector(A[6], 0.743125 * N * N - 0.247708), D.addScaledVector(A[7], 2 * 0.429043 * t * N), D.addScaledVector(A[8], 0.429043 * (t * t - e * e)), D;
  }
  add(M) {
    for (let D = 0; D < 9; D++)
      this.coefficients[D].add(M.coefficients[D]);
    return this;
  }
  addScaledSH(M, D) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].addScaledVector(M.coefficients[t], D);
    return this;
  }
  scale(M) {
    for (let D = 0; D < 9; D++)
      this.coefficients[D].multiplyScalar(M);
    return this;
  }
  lerp(M, D) {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].lerp(M.coefficients[t], D);
    return this;
  }
  equals(M) {
    for (let D = 0; D < 9; D++)
      if (!this.coefficients[D].equals(M.coefficients[D]))
        return !1;
    return !0;
  }
  copy(M) {
    return this.set(M.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(M, D = 0) {
    const t = this.coefficients;
    for (let e = 0; e < 9; e++)
      t[e].fromArray(M, D + e * 3);
    return this;
  }
  toArray(M = [], D = 0) {
    const t = this.coefficients;
    for (let e = 0; e < 9; e++)
      t[e].toArray(M, D + e * 3);
    return M;
  }
  static getBasisAt(M, D) {
    const t = M.x, e = M.y, N = M.z;
    D[0] = 0.282095, D[1] = 0.488603 * e, D[2] = 0.488603 * N, D[3] = 0.488603 * t, D[4] = 1.092548 * t * e, D[5] = 1.092548 * e * N, D[6] = 0.315392 * (3 * N * N - 1), D[7] = 1.092548 * t * N, D[8] = 0.546274 * (t * t - e * e);
  }
}
Ji.prototype.isSphericalHarmonics3 = !0;
class rA extends KD {
  constructor(M = new Ji(), D = 1) {
    super(void 0, D), this.sh = M;
  }
  copy(M) {
    return super.copy(M), this.sh.copy(M.sh), this;
  }
  fromJSON(M) {
    return this.intensity = M.intensity, this.sh.fromArray(M.sh), this;
  }
  toJSON(M) {
    const D = super.toJSON(M);
    return D.object.sh = this.sh.toArray(), D;
  }
}
rA.prototype.isLightProbe = !0;
class Wc {
  static decodeText(M) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(M);
    let D = "";
    for (let t = 0, e = M.length; t < e; t++)
      D += String.fromCharCode(M[t]);
    try {
      return decodeURIComponent(escape(D));
    } catch {
      return D;
    }
  }
  static extractUrlBase(M) {
    const D = M.lastIndexOf("/");
    return D === -1 ? "./" : M.substr(0, D + 1);
  }
  static resolveURL(M, D) {
    return typeof M != "string" || M === "" ? "" : (/^https?:\/\//i.test(D) && /^\//.test(M) && (D = D.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(M) || /^data:.*,.*$/i.test(M) || /^blob:.*$/i.test(M) ? M : D + M);
  }
}
class qc extends VM {
  constructor() {
    super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(M) {
    return super.copy(M), this.instanceCount = M.instanceCount, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const M = super.toJSON(this);
    return M.instanceCount = this.instanceCount, M.isInstancedBufferGeometry = !0, M;
  }
}
qc.prototype.isInstancedBufferGeometry = !0;
class Xc extends JD {
  constructor(M) {
    super(M), typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(M) {
    return this.options = M, this;
  }
  load(M, D, t, e) {
    M === void 0 && (M = ""), this.path !== void 0 && (M = this.path + M), M = this.manager.resolveURL(M);
    const N = this, A = ze.get(M);
    if (A !== void 0)
      return N.manager.itemStart(M), setTimeout(function() {
        D && D(A), N.manager.itemEnd(M);
      }, 0), A;
    const z = {};
    z.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", z.headers = this.requestHeader, fetch(M, z).then(function(I) {
      return I.blob();
    }).then(function(I) {
      return createImageBitmap(I, Object.assign(N.options, { colorSpaceConversion: "none" }));
    }).then(function(I) {
      ze.add(M, I), D && D(I), N.manager.itemEnd(M);
    }).catch(function(I) {
      e && e(I), N.manager.itemError(M), N.manager.itemEnd(M);
    }), N.manager.itemStart(M);
  }
}
Xc.prototype.isImageBitmapLoader = !0;
let ON;
const Jc = {
  getContext: function() {
    return ON === void 0 && (ON = new (window.AudioContext || window.webkitAudioContext)()), ON;
  },
  setContext: function(n) {
    ON = n;
  }
};
class $c extends JD {
  constructor(M) {
    super(M);
  }
  load(M, D, t, e) {
    const N = this, A = new Bi(this.manager);
    A.setResponseType("arraybuffer"), A.setPath(this.path), A.setRequestHeader(this.requestHeader), A.setWithCredentials(this.withCredentials), A.load(M, function(z) {
      try {
        const I = z.slice(0);
        Jc.getContext().decodeAudioData(I, function(T) {
          D(T);
        });
      } catch (I) {
        e ? e(I) : console.error(I), N.manager.itemError(M);
      }
    }, t, e);
  }
}
class Mj extends rA {
  constructor(M, D, t = 1) {
    super(void 0, t);
    const e = new cM().set(M), N = new cM().set(D), A = new O(e.r, e.g, e.b), z = new O(N.r, N.g, N.b), I = Math.sqrt(Math.PI), i = I * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(A).add(z).multiplyScalar(I), this.sh.coefficients[1].copy(A).sub(z).multiplyScalar(i);
  }
}
Mj.prototype.isHemisphereLightProbe = !0;
class Dj extends rA {
  constructor(M, D = 1) {
    super(void 0, D);
    const t = new cM().set(M);
    this.sh.coefficients[0].set(t.r, t.g, t.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
Dj.prototype.isAmbientLightProbe = !0;
class tj extends ZM {
  constructor(M) {
    super(), this.type = "Audio", this.listener = M, this.context = M.context, this.gain = this.context.createGain(), this.gain.connect(M.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(M) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = M, this.connect(), this;
  }
  setMediaElementSource(M) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(M), this.connect(), this;
  }
  setMediaStreamSource(M) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(M), this.connect(), this;
  }
  setBuffer(M) {
    return this.buffer = M, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(M = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + M;
    const D = this.context.createBufferSource();
    return D.buffer = this.buffer, D.loop = this.loop, D.loopStart = this.loopStart, D.loopEnd = this.loopEnd, D.onended = this.onEnded.bind(this), D.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = D, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  }
  stop() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let M = 1, D = this.filters.length; M < D; M++)
        this.filters[M - 1].connect(this.filters[M]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this._connected = !0, this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let M = 1, D = this.filters.length; M < D; M++)
        this.filters[M - 1].disconnect(this.filters[M]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else
      this.source.disconnect(this.getOutput());
    return this._connected = !1, this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(M) {
    return M || (M = []), this._connected === !0 ? (this.disconnect(), this.filters = M.slice(), this.connect()) : this.filters = M.slice(), this;
  }
  setDetune(M) {
    if (this.detune = M, this.source.detune !== void 0)
      return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(M) {
    return this.setFilters(M ? [M] : []);
  }
  setPlaybackRate(M) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = M, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  }
  setLoop(M) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = M, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  }
  setLoopStart(M) {
    return this.loopStart = M, this;
  }
  setLoopEnd(M) {
    return this.loopEnd = M, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(M) {
    return this.gain.gain.setTargetAtTime(M, this.context.currentTime, 0.01), this;
  }
}
class ej {
  constructor(M, D, t) {
    this.binding = M, this.valueSize = t;
    let e, N, A;
    switch (D) {
      case "quaternion":
        e = this._slerp, N = this._slerpAdditive, A = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(t * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        e = this._select, N = this._select, A = this._setAdditiveIdentityOther, this.buffer = new Array(t * 5);
        break;
      default:
        e = this._lerp, N = this._lerpAdditive, A = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(t * 5);
    }
    this._mixBufferRegion = e, this._mixBufferRegionAdditive = N, this._setIdentity = A, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  accumulate(M, D) {
    const t = this.buffer, e = this.valueSize, N = M * e + e;
    let A = this.cumulativeWeight;
    if (A === 0) {
      for (let z = 0; z !== e; ++z)
        t[N + z] = t[z];
      A = D;
    } else {
      A += D;
      const z = D / A;
      this._mixBufferRegion(t, N, 0, z, e);
    }
    this.cumulativeWeight = A;
  }
  accumulateAdditive(M) {
    const D = this.buffer, t = this.valueSize, e = t * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(D, e, 0, M, t), this.cumulativeWeightAdditive += M;
  }
  apply(M) {
    const D = this.valueSize, t = this.buffer, e = M * D + D, N = this.cumulativeWeight, A = this.cumulativeWeightAdditive, z = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, N < 1) {
      const I = D * this._origIndex;
      this._mixBufferRegion(t, e, I, 1 - N, D);
    }
    A > 0 && this._mixBufferRegionAdditive(t, e, this._addIndex * D, 1, D);
    for (let I = D, i = D + D; I !== i; ++I)
      if (t[I] !== t[I + D]) {
        z.setValue(t, e);
        break;
      }
  }
  saveOriginalState() {
    const M = this.binding, D = this.buffer, t = this.valueSize, e = t * this._origIndex;
    M.getValue(D, e);
    for (let N = t, A = e; N !== A; ++N)
      D[N] = D[e + N % t];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  restoreOriginalState() {
    const M = this.valueSize * 3;
    this.binding.setValue(this.buffer, M);
  }
  _setAdditiveIdentityNumeric() {
    const M = this._addIndex * this.valueSize, D = M + this.valueSize;
    for (let t = M; t < D; t++)
      this.buffer[t] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const M = this._origIndex * this.valueSize, D = this._addIndex * this.valueSize;
    for (let t = 0; t < this.valueSize; t++)
      this.buffer[D + t] = this.buffer[M + t];
  }
  _select(M, D, t, e, N) {
    if (e >= 0.5)
      for (let A = 0; A !== N; ++A)
        M[D + A] = M[t + A];
  }
  _slerp(M, D, t, e) {
    aD.slerpFlat(M, D, M, D, M, t, e);
  }
  _slerpAdditive(M, D, t, e, N) {
    const A = this._workIndex * N;
    aD.multiplyQuaternionsFlat(M, A, M, D, M, t), aD.slerpFlat(M, D, M, D, M, A, e);
  }
  _lerp(M, D, t, e, N) {
    const A = 1 - e;
    for (let z = 0; z !== N; ++z) {
      const I = D + z;
      M[I] = M[I] * A + M[t + z] * e;
    }
  }
  _lerpAdditive(M, D, t, e, N) {
    for (let A = 0; A !== N; ++A) {
      const z = D + A;
      M[z] = M[z] + M[t + A] * e;
    }
  }
}
const sA = "\\[\\]\\.:\\/", Nj = new RegExp("[" + sA + "]", "g"), cA = "[^" + sA + "]", nj = "[^" + sA.replace("\\.", "") + "]", Aj = /((?:WC+[\/:])*)/.source.replace("WC", cA), zj = /(WCOD+)?/.source.replace("WCOD", nj), ij = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", cA), Ij = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", cA), Tj = new RegExp("^" + Aj + zj + ij + Ij + "$"), uj = ["material", "materials", "bones"];
class gj {
  constructor(M, D, t) {
    const e = t || bM.parseTrackName(D);
    this._targetGroup = M, this._bindings = M.subscribe_(D, e);
  }
  getValue(M, D) {
    this.bind();
    const t = this._targetGroup.nCachedObjects_, e = this._bindings[t];
    e !== void 0 && e.getValue(M, D);
  }
  setValue(M, D) {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, N = t.length; e !== N; ++e)
      t[e].setValue(M, D);
  }
  bind() {
    const M = this._bindings;
    for (let D = this._targetGroup.nCachedObjects_, t = M.length; D !== t; ++D)
      M[D].bind();
  }
  unbind() {
    const M = this._bindings;
    for (let D = this._targetGroup.nCachedObjects_, t = M.length; D !== t; ++D)
      M[D].unbind();
  }
}
class bM {
  constructor(M, D, t) {
    this.path = D, this.parsedPath = t || bM.parseTrackName(D), this.node = bM.findNode(M, this.parsedPath.nodeName) || M, this.rootNode = M, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(M, D, t) {
    return M && M.isAnimationObjectGroup ? new bM.Composite(M, D, t) : new bM(M, D, t);
  }
  static sanitizeNodeName(M) {
    return M.replace(/\s/g, "_").replace(Nj, "");
  }
  static parseTrackName(M) {
    const D = Tj.exec(M);
    if (!D)
      throw new Error("PropertyBinding: Cannot parse trackName: " + M);
    const t = {
      nodeName: D[2],
      objectName: D[3],
      objectIndex: D[4],
      propertyName: D[5],
      propertyIndex: D[6]
    }, e = t.nodeName && t.nodeName.lastIndexOf(".");
    if (e !== void 0 && e !== -1) {
      const N = t.nodeName.substring(e + 1);
      uj.indexOf(N) !== -1 && (t.nodeName = t.nodeName.substring(0, e), t.objectName = N);
    }
    if (t.propertyName === null || t.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + M);
    return t;
  }
  static findNode(M, D) {
    if (!D || D === "" || D === "." || D === -1 || D === M.name || D === M.uuid)
      return M;
    if (M.skeleton) {
      const t = M.skeleton.getBoneByName(D);
      if (t !== void 0)
        return t;
    }
    if (M.children) {
      const t = function(N) {
        for (let A = 0; A < N.length; A++) {
          const z = N[A];
          if (z.name === D || z.uuid === D)
            return z;
          const I = t(z.children);
          if (I)
            return I;
        }
        return null;
      }, e = t(M.children);
      if (e)
        return e;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(M, D) {
    M[D] = this.targetObject[this.propertyName];
  }
  _getValue_array(M, D) {
    const t = this.resolvedProperty;
    for (let e = 0, N = t.length; e !== N; ++e)
      M[D++] = t[e];
  }
  _getValue_arrayElement(M, D) {
    M[D] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(M, D) {
    this.resolvedProperty.toArray(M, D);
  }
  _setValue_direct(M, D) {
    this.targetObject[this.propertyName] = M[D];
  }
  _setValue_direct_setNeedsUpdate(M, D) {
    this.targetObject[this.propertyName] = M[D], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(M, D) {
    this.targetObject[this.propertyName] = M[D], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(M, D) {
    const t = this.resolvedProperty;
    for (let e = 0, N = t.length; e !== N; ++e)
      t[e] = M[D++];
  }
  _setValue_array_setNeedsUpdate(M, D) {
    const t = this.resolvedProperty;
    for (let e = 0, N = t.length; e !== N; ++e)
      t[e] = M[D++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(M, D) {
    const t = this.resolvedProperty;
    for (let e = 0, N = t.length; e !== N; ++e)
      t[e] = M[D++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(M, D) {
    this.resolvedProperty[this.propertyIndex] = M[D];
  }
  _setValue_arrayElement_setNeedsUpdate(M, D) {
    this.resolvedProperty[this.propertyIndex] = M[D], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(M, D) {
    this.resolvedProperty[this.propertyIndex] = M[D], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(M, D) {
    this.resolvedProperty.fromArray(M, D);
  }
  _setValue_fromArray_setNeedsUpdate(M, D) {
    this.resolvedProperty.fromArray(M, D), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(M, D) {
    this.resolvedProperty.fromArray(M, D), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(M, D) {
    this.bind(), this.getValue(M, D);
  }
  _setValue_unbound(M, D) {
    this.bind(), this.setValue(M, D);
  }
  bind() {
    let M = this.node;
    const D = this.parsedPath, t = D.objectName, e = D.propertyName;
    let N = D.propertyIndex;
    if (M || (M = bM.findNode(this.rootNode, D.nodeName) || this.rootNode, this.node = M), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !M) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (t) {
      let i = D.objectIndex;
      switch (t) {
        case "materials":
          if (!M.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!M.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          M = M.material.materials;
          break;
        case "bones":
          if (!M.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          M = M.skeleton.bones;
          for (let T = 0; T < M.length; T++)
            if (M[T].name === i) {
              i = T;
              break;
            }
          break;
        default:
          if (M[t] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          M = M[t];
      }
      if (i !== void 0) {
        if (M[i] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, M);
          return;
        }
        M = M[i];
      }
    }
    const A = M[e];
    if (A === void 0) {
      const i = D.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + i + "." + e + " but it wasn't found.", M);
      return;
    }
    let z = this.Versioning.None;
    this.targetObject = M, M.needsUpdate !== void 0 ? z = this.Versioning.NeedsUpdate : M.matrixWorldNeedsUpdate !== void 0 && (z = this.Versioning.MatrixWorldNeedsUpdate);
    let I = this.BindingType.Direct;
    if (N !== void 0) {
      if (e === "morphTargetInfluences") {
        if (!M.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (M.geometry.isBufferGeometry) {
          if (!M.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          M.morphTargetDictionary[N] !== void 0 && (N = M.morphTargetDictionary[N]);
        } else {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
          return;
        }
      }
      I = this.BindingType.ArrayElement, this.resolvedProperty = A, this.propertyIndex = N;
    } else
      A.fromArray !== void 0 && A.toArray !== void 0 ? (I = this.BindingType.HasFromToArray, this.resolvedProperty = A) : Array.isArray(A) ? (I = this.BindingType.EntireArray, this.resolvedProperty = A) : this.propertyName = e;
    this.getValue = this.GetterByBindingType[I], this.setValue = this.SetterByBindingTypeAndVersioning[I][z];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
bM.Composite = gj;
bM.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
bM.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
bM.prototype.GetterByBindingType = [
  bM.prototype._getValue_direct,
  bM.prototype._getValue_array,
  bM.prototype._getValue_arrayElement,
  bM.prototype._getValue_toArray
];
bM.prototype.SetterByBindingTypeAndVersioning = [
  [
    bM.prototype._setValue_direct,
    bM.prototype._setValue_direct_setNeedsUpdate,
    bM.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    bM.prototype._setValue_array,
    bM.prototype._setValue_array_setNeedsUpdate,
    bM.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    bM.prototype._setValue_arrayElement,
    bM.prototype._setValue_arrayElement_setNeedsUpdate,
    bM.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    bM.prototype._setValue_fromArray,
    bM.prototype._setValue_fromArray_setNeedsUpdate,
    bM.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class rj {
  constructor(M, D, t = null, e = D.blendMode) {
    this._mixer = M, this._clip = D, this._localRoot = t, this.blendMode = e;
    const N = D.tracks, A = N.length, z = new Array(A), I = {
      endingStart: qt,
      endingEnd: qt
    };
    for (let i = 0; i !== A; ++i) {
      const T = N[i].createInterpolant(null);
      z[i] = T, T.settings = I;
    }
    this._interpolantSettings = I, this._interpolants = z, this._propertyBindings = new Array(A), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = MT, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(M) {
    return this._startTime = M, this;
  }
  setLoop(M, D) {
    return this.loop = M, this.repetitions = D, this;
  }
  setEffectiveWeight(M) {
    return this.weight = M, this._effectiveWeight = this.enabled ? M : 0, this.stopFading();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(M) {
    return this._scheduleFading(M, 0, 1);
  }
  fadeOut(M) {
    return this._scheduleFading(M, 1, 0);
  }
  crossFadeFrom(M, D, t) {
    if (M.fadeOut(D), this.fadeIn(D), t) {
      const e = this._clip.duration, N = M._clip.duration, A = N / e, z = e / N;
      M.warp(1, A, D), this.warp(z, 1, D);
    }
    return this;
  }
  crossFadeTo(M, D, t) {
    return M.crossFadeFrom(this, D, t);
  }
  stopFading() {
    const M = this._weightInterpolant;
    return M !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(M)), this;
  }
  setEffectiveTimeScale(M) {
    return this.timeScale = M, this._effectiveTimeScale = this.paused ? 0 : M, this.stopWarping();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(M) {
    return this.timeScale = this._clip.duration / M, this.stopWarping();
  }
  syncWith(M) {
    return this.time = M.time, this.timeScale = M.timeScale, this.stopWarping();
  }
  halt(M) {
    return this.warp(this._effectiveTimeScale, 0, M);
  }
  warp(M, D, t) {
    const e = this._mixer, N = e.time, A = this.timeScale;
    let z = this._timeScaleInterpolant;
    z === null && (z = e._lendControlInterpolant(), this._timeScaleInterpolant = z);
    const I = z.parameterPositions, i = z.sampleValues;
    return I[0] = N, I[1] = N + t, i[0] = M / A, i[1] = D / A, this;
  }
  stopWarping() {
    const M = this._timeScaleInterpolant;
    return M !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(M)), this;
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(M, D, t, e) {
    if (!this.enabled) {
      this._updateWeight(M);
      return;
    }
    const N = this._startTime;
    if (N !== null) {
      const I = (M - N) * t;
      if (I < 0 || t === 0)
        return;
      this._startTime = null, D = t * I;
    }
    D *= this._updateTimeScale(M);
    const A = this._updateTime(D), z = this._updateWeight(M);
    if (z > 0) {
      const I = this._interpolants, i = this._propertyBindings;
      switch (this.blendMode) {
        case zi:
          for (let T = 0, u = I.length; T !== u; ++T)
            I[T].evaluate(A), i[T].accumulateAdditive(z);
          break;
        case Xn:
        default:
          for (let T = 0, u = I.length; T !== u; ++T)
            I[T].evaluate(A), i[T].accumulate(e, z);
      }
    }
  }
  _updateWeight(M) {
    let D = 0;
    if (this.enabled) {
      D = this.weight;
      const t = this._weightInterpolant;
      if (t !== null) {
        const e = t.evaluate(M)[0];
        D *= e, M > t.parameterPositions[1] && (this.stopFading(), e === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = D, D;
  }
  _updateTimeScale(M) {
    let D = 0;
    if (!this.paused) {
      D = this.timeScale;
      const t = this._timeScaleInterpolant;
      t !== null && (D *= t.evaluate(M)[0], M > t.parameterPositions[1] && (this.stopWarping(), D === 0 ? this.paused = !0 : this.timeScale = D));
    }
    return this._effectiveTimeScale = D, D;
  }
  _updateTime(M) {
    const D = this._clip.duration, t = this.loop;
    let e = this.time + M, N = this._loopCount;
    const A = t === DT;
    if (M === 0)
      return N === -1 ? e : A && (N & 1) === 1 ? D - e : e;
    if (t === $I) {
      N === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      M: {
        if (e >= D)
          e = D;
        else if (e < 0)
          e = 0;
        else {
          this.time = e;
          break M;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = e, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: M < 0 ? -1 : 1
        });
      }
    } else {
      if (N === -1 && (M >= 0 ? (N = 0, this._setEndings(!0, this.repetitions === 0, A)) : this._setEndings(this.repetitions === 0, !0, A)), e >= D || e < 0) {
        const z = Math.floor(e / D);
        e -= D * z, N += Math.abs(z);
        const I = this.repetitions - N;
        if (I <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = M > 0 ? D : 0, this.time = e, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: M > 0 ? 1 : -1
          });
        else {
          if (I === 1) {
            const i = M < 0;
            this._setEndings(i, !i, A);
          } else
            this._setEndings(!1, !1, A);
          this._loopCount = N, this.time = e, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: z
          });
        }
      } else
        this.time = e;
      if (A && (N & 1) === 1)
        return D - e;
    }
    return e;
  }
  _setEndings(M, D, t) {
    const e = this._interpolantSettings;
    t ? (e.endingStart = Xt, e.endingEnd = Xt) : (M ? e.endingStart = this.zeroSlopeAtStart ? Xt : qt : e.endingStart = hN, D ? e.endingEnd = this.zeroSlopeAtEnd ? Xt : qt : e.endingEnd = hN);
  }
  _scheduleFading(M, D, t) {
    const e = this._mixer, N = e.time;
    let A = this._weightInterpolant;
    A === null && (A = e._lendControlInterpolant(), this._weightInterpolant = A);
    const z = A.parameterPositions, I = A.sampleValues;
    return z[0] = N, I[0] = D, z[1] = N + M, I[1] = t, this;
  }
}
class sj extends dt {
  constructor(M) {
    super(), this._root = M, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(M, D) {
    const t = M._localRoot || this._root, e = M._clip.tracks, N = e.length, A = M._propertyBindings, z = M._interpolants, I = t.uuid, i = this._bindingsByRootAndName;
    let T = i[I];
    T === void 0 && (T = {}, i[I] = T);
    for (let u = 0; u !== N; ++u) {
      const g = e[u], s = g.name;
      let j = T[s];
      if (j !== void 0)
        ++j.referenceCount, A[u] = j;
      else {
        if (j = A[u], j !== void 0) {
          j._cacheIndex === null && (++j.referenceCount, this._addInactiveBinding(j, I, s));
          continue;
        }
        const y = D && D._propertyBindings[u].binding.parsedPath;
        j = new ej(bM.create(t, s, y), g.ValueTypeName, g.getValueSize()), ++j.referenceCount, this._addInactiveBinding(j, I, s), A[u] = j;
      }
      z[u].resultBuffer = j.buffer;
    }
  }
  _activateAction(M) {
    if (!this._isActiveAction(M)) {
      if (M._cacheIndex === null) {
        const t = (M._localRoot || this._root).uuid, e = M._clip.uuid, N = this._actionsByClip[e];
        this._bindAction(M, N && N.knownActions[0]), this._addInactiveAction(M, e, t);
      }
      const D = M._propertyBindings;
      for (let t = 0, e = D.length; t !== e; ++t) {
        const N = D[t];
        N.useCount++ === 0 && (this._lendBinding(N), N.saveOriginalState());
      }
      this._lendAction(M);
    }
  }
  _deactivateAction(M) {
    if (this._isActiveAction(M)) {
      const D = M._propertyBindings;
      for (let t = 0, e = D.length; t !== e; ++t) {
        const N = D[t];
        --N.useCount === 0 && (N.restoreOriginalState(), this._takeBackBinding(N));
      }
      this._takeBackAction(M);
    }
  }
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const M = this;
    this.stats = {
      actions: {
        get total() {
          return M._actions.length;
        },
        get inUse() {
          return M._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return M._bindings.length;
        },
        get inUse() {
          return M._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return M._controlInterpolants.length;
        },
        get inUse() {
          return M._nActiveControlInterpolants;
        }
      }
    };
  }
  _isActiveAction(M) {
    const D = M._cacheIndex;
    return D !== null && D < this._nActiveActions;
  }
  _addInactiveAction(M, D, t) {
    const e = this._actions, N = this._actionsByClip;
    let A = N[D];
    if (A === void 0)
      A = {
        knownActions: [M],
        actionByRoot: {}
      }, M._byClipCacheIndex = 0, N[D] = A;
    else {
      const z = A.knownActions;
      M._byClipCacheIndex = z.length, z.push(M);
    }
    M._cacheIndex = e.length, e.push(M), A.actionByRoot[t] = M;
  }
  _removeInactiveAction(M) {
    const D = this._actions, t = D[D.length - 1], e = M._cacheIndex;
    t._cacheIndex = e, D[e] = t, D.pop(), M._cacheIndex = null;
    const N = M._clip.uuid, A = this._actionsByClip, z = A[N], I = z.knownActions, i = I[I.length - 1], T = M._byClipCacheIndex;
    i._byClipCacheIndex = T, I[T] = i, I.pop(), M._byClipCacheIndex = null;
    const u = z.actionByRoot, g = (M._localRoot || this._root).uuid;
    delete u[g], I.length === 0 && delete A[N], this._removeInactiveBindingsForAction(M);
  }
  _removeInactiveBindingsForAction(M) {
    const D = M._propertyBindings;
    for (let t = 0, e = D.length; t !== e; ++t) {
      const N = D[t];
      --N.referenceCount === 0 && this._removeInactiveBinding(N);
    }
  }
  _lendAction(M) {
    const D = this._actions, t = M._cacheIndex, e = this._nActiveActions++, N = D[e];
    M._cacheIndex = e, D[e] = M, N._cacheIndex = t, D[t] = N;
  }
  _takeBackAction(M) {
    const D = this._actions, t = M._cacheIndex, e = --this._nActiveActions, N = D[e];
    M._cacheIndex = e, D[e] = M, N._cacheIndex = t, D[t] = N;
  }
  _addInactiveBinding(M, D, t) {
    const e = this._bindingsByRootAndName, N = this._bindings;
    let A = e[D];
    A === void 0 && (A = {}, e[D] = A), A[t] = M, M._cacheIndex = N.length, N.push(M);
  }
  _removeInactiveBinding(M) {
    const D = this._bindings, t = M.binding, e = t.rootNode.uuid, N = t.path, A = this._bindingsByRootAndName, z = A[e], I = D[D.length - 1], i = M._cacheIndex;
    I._cacheIndex = i, D[i] = I, D.pop(), delete z[N], Object.keys(z).length === 0 && delete A[e];
  }
  _lendBinding(M) {
    const D = this._bindings, t = M._cacheIndex, e = this._nActiveBindings++, N = D[e];
    M._cacheIndex = e, D[e] = M, N._cacheIndex = t, D[t] = N;
  }
  _takeBackBinding(M) {
    const D = this._bindings, t = M._cacheIndex, e = --this._nActiveBindings, N = D[e];
    M._cacheIndex = e, D[e] = M, N._cacheIndex = t, D[t] = N;
  }
  _lendControlInterpolant() {
    const M = this._controlInterpolants, D = this._nActiveControlInterpolants++;
    let t = M[D];
    return t === void 0 && (t = new Pi(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), t.__cacheIndex = D, M[D] = t), t;
  }
  _takeBackControlInterpolant(M) {
    const D = this._controlInterpolants, t = M.__cacheIndex, e = --this._nActiveControlInterpolants, N = D[e];
    M.__cacheIndex = e, D[e] = M, N.__cacheIndex = t, D[t] = N;
  }
  clipAction(M, D, t) {
    const e = D || this._root, N = e.uuid;
    let A = typeof M == "string" ? Hz.findByName(e, M) : M;
    const z = A !== null ? A.uuid : M, I = this._actionsByClip[z];
    let i = null;
    if (t === void 0 && (A !== null ? t = A.blendMode : t = Xn), I !== void 0) {
      const u = I.actionByRoot[N];
      if (u !== void 0 && u.blendMode === t)
        return u;
      i = I.knownActions[0], A === null && (A = i._clip);
    }
    if (A === null)
      return null;
    const T = new rj(this, A, D, t);
    return this._bindAction(T, i), this._addInactiveAction(T, z, N), T;
  }
  existingAction(M, D) {
    const t = D || this._root, e = t.uuid, N = typeof M == "string" ? Hz.findByName(t, M) : M, A = N ? N.uuid : M, z = this._actionsByClip[A];
    return z !== void 0 && z.actionByRoot[e] || null;
  }
  stopAllAction() {
    const M = this._actions, D = this._nActiveActions;
    for (let t = D - 1; t >= 0; --t)
      M[t].stop();
    return this;
  }
  update(M) {
    M *= this.timeScale;
    const D = this._actions, t = this._nActiveActions, e = this.time += M, N = Math.sign(M), A = this._accuIndex ^= 1;
    for (let i = 0; i !== t; ++i)
      D[i]._update(e, M, N, A);
    const z = this._bindings, I = this._nActiveBindings;
    for (let i = 0; i !== I; ++i)
      z[i].apply(A);
    return this;
  }
  setTime(M) {
    this.time = 0;
    for (let D = 0; D < this._actions.length; D++)
      this._actions[D].time = 0;
    return this.update(M);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(M) {
    const D = this._actions, t = M.uuid, e = this._actionsByClip, N = e[t];
    if (N !== void 0) {
      const A = N.knownActions;
      for (let z = 0, I = A.length; z !== I; ++z) {
        const i = A[z];
        this._deactivateAction(i);
        const T = i._cacheIndex, u = D[D.length - 1];
        i._cacheIndex = null, i._byClipCacheIndex = null, u._cacheIndex = T, D[T] = u, D.pop(), this._removeInactiveBindingsForAction(i);
      }
      delete e[t];
    }
  }
  uncacheRoot(M) {
    const D = M.uuid, t = this._actionsByClip;
    for (const A in t) {
      const z = t[A].actionByRoot, I = z[D];
      I !== void 0 && (this._deactivateAction(I), this._removeInactiveAction(I));
    }
    const e = this._bindingsByRootAndName, N = e[D];
    if (N !== void 0)
      for (const A in N) {
        const z = N[A];
        z.restoreOriginalState(), this._removeInactiveBinding(z);
      }
  }
  uncacheAction(M, D) {
    const t = this.existingAction(M, D);
    t !== null && (this._deactivateAction(t), this._removeInactiveAction(t));
  }
}
sj.prototype._controlInterpolantsResultBuffer = new Float32Array(1);
class cj extends Pe {
  constructor(M, D, t = 1) {
    super(M, D), this.meshPerAttribute = t;
  }
  copy(M) {
    return super.copy(M), this.meshPerAttribute = M.meshPerAttribute, this;
  }
  clone(M) {
    const D = super.clone(M);
    return D.meshPerAttribute = this.meshPerAttribute, D;
  }
  toJSON(M) {
    const D = super.toJSON(M);
    return D.isInstancedInterleavedBuffer = !0, D.meshPerAttribute = this.meshPerAttribute, D;
  }
}
cj.prototype.isInstancedInterleavedBuffer = !0;
const At = /* @__PURE__ */ new O(), xN = /* @__PURE__ */ new aM(), Un = /* @__PURE__ */ new aM();
class jj extends ke {
  constructor(M) {
    const D = $i(M), t = new VM(), e = [], N = [], A = new cM(0, 0, 1), z = new cM(0, 1, 0);
    for (let i = 0; i < D.length; i++) {
      const T = D[i];
      T.parent && T.parent.isBone && (e.push(0, 0, 0), e.push(0, 0, 0), N.push(A.r, A.g, A.b), N.push(z.r, z.g, z.b));
    }
    t.setAttribute("position", new WM(e, 3)), t.setAttribute("color", new WM(N, 3));
    const I = new gt({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
    super(t, I), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = M, this.bones = D, this.matrix = M.matrixWorld, this.matrixAutoUpdate = !1;
  }
  updateMatrixWorld(M) {
    const D = this.bones, t = this.geometry, e = t.getAttribute("position");
    Un.copy(this.root.matrixWorld).invert();
    for (let N = 0, A = 0; N < D.length; N++) {
      const z = D[N];
      z.parent && z.parent.isBone && (xN.multiplyMatrices(Un, z.matrixWorld), At.setFromMatrixPosition(xN), e.setXYZ(A, At.x, At.y, At.z), xN.multiplyMatrices(Un, z.parent.matrixWorld), At.setFromMatrixPosition(xN), e.setXYZ(A + 1, At.x, At.y, At.z), A += 2);
    }
    t.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(M);
  }
}
function $i(n) {
  const M = [];
  n && n.isBone && M.push(n);
  for (let D = 0; D < n.children.length; D++)
    M.push.apply(M, $i(n.children[D]));
  return M;
}
class yj extends ke {
  constructor(M = 10, D = 10, t = 4473924, e = 8947848) {
    t = new cM(t), e = new cM(e);
    const N = D / 2, A = M / D, z = M / 2, I = [], i = [];
    for (let g = 0, s = 0, j = -z; g <= D; g++, j += A) {
      I.push(-z, 0, j, z, 0, j), I.push(j, 0, -z, j, 0, z);
      const y = g === N ? t : e;
      y.toArray(i, s), s += 3, y.toArray(i, s), s += 3, y.toArray(i, s), s += 3, y.toArray(i, s), s += 3;
    }
    const T = new VM();
    T.setAttribute("position", new WM(I, 3)), T.setAttribute("color", new WM(i, 3));
    const u = new gt({ vertexColors: !0, toneMapped: !1 });
    super(T, u), this.type = "GridHelper";
  }
}
const oj = new Float32Array(1);
new Int32Array(oj.buffer);
vD.create = function(n, M) {
  return console.log("THREE.Curve.create() has been deprecated"), n.prototype = Object.create(vD.prototype), n.prototype.constructor = n, n.prototype.getPoint = M, n;
};
Bn.prototype.fromPoints = function(n) {
  return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(n);
};
yj.prototype.setColors = function() {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
jj.prototype.update = function() {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
JD.prototype.extractUrlBase = function(n) {
  return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Wc.extractUrlBase(n);
};
JD.Handlers = {
  add: function() {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
  },
  get: function() {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
  }
};
pD.prototype.center = function(n) {
  return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(n);
};
pD.prototype.empty = function() {
  return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
pD.prototype.isIntersectionBox = function(n) {
  return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(n);
};
pD.prototype.isIntersectionSphere = function(n) {
  return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(n);
};
pD.prototype.size = function(n) {
  return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(n);
};
Ie.prototype.empty = function() {
  return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
};
ZN.prototype.setFromMatrix = function(n) {
  return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(n);
};
gD.prototype.flattenToArrayOffset = function(n, M) {
  return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(n, M);
};
gD.prototype.multiplyVector3 = function(n) {
  return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), n.applyMatrix3(this);
};
gD.prototype.multiplyVector3Array = function() {
  console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
};
gD.prototype.applyToBufferAttribute = function(n) {
  return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), n.applyMatrix3(this);
};
gD.prototype.applyToVector3Array = function() {
  console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
};
gD.prototype.getInverse = function(n) {
  return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(n).invert();
};
aM.prototype.extractPosition = function(n) {
  return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(n);
};
aM.prototype.flattenToArrayOffset = function(n, M) {
  return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(n, M);
};
aM.prototype.getPosition = function() {
  return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new O().setFromMatrixColumn(this, 3);
};
aM.prototype.setRotationFromQuaternion = function(n) {
  return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(n);
};
aM.prototype.multiplyToArray = function() {
  console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
};
aM.prototype.multiplyVector3 = function(n) {
  return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), n.applyMatrix4(this);
};
aM.prototype.multiplyVector4 = function(n) {
  return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), n.applyMatrix4(this);
};
aM.prototype.multiplyVector3Array = function() {
  console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
};
aM.prototype.rotateAxis = function(n) {
  console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), n.transformDirection(this);
};
aM.prototype.crossVector = function(n) {
  return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), n.applyMatrix4(this);
};
aM.prototype.translate = function() {
  console.error("THREE.Matrix4: .translate() has been removed.");
};
aM.prototype.rotateX = function() {
  console.error("THREE.Matrix4: .rotateX() has been removed.");
};
aM.prototype.rotateY = function() {
  console.error("THREE.Matrix4: .rotateY() has been removed.");
};
aM.prototype.rotateZ = function() {
  console.error("THREE.Matrix4: .rotateZ() has been removed.");
};
aM.prototype.rotateByAxis = function() {
  console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
};
aM.prototype.applyToBufferAttribute = function(n) {
  return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), n.applyMatrix4(this);
};
aM.prototype.applyToVector3Array = function() {
  console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
};
aM.prototype.makeFrustum = function(n, M, D, t, e, N) {
  return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(n, M, t, D, e, N);
};
aM.prototype.getInverse = function(n) {
  return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(n).invert();
};
XD.prototype.isIntersectionLine = function(n) {
  return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(n);
};
aD.prototype.multiplyVector3 = function(n) {
  return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), n.applyQuaternion(this);
};
aD.prototype.inverse = function() {
  return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert();
};
Te.prototype.isIntersectionBox = function(n) {
  return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(n);
};
Te.prototype.isIntersectionPlane = function(n) {
  return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(n);
};
Te.prototype.isIntersectionSphere = function(n) {
  return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(n);
};
DD.prototype.area = function() {
  return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
};
DD.prototype.barycoordFromPoint = function(n, M) {
  return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(n, M);
};
DD.prototype.midpoint = function(n) {
  return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(n);
};
DD.prototypenormal = function(n) {
  return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(n);
};
DD.prototype.plane = function(n) {
  return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(n);
};
DD.barycoordFromPoint = function(n, M, D, t, e) {
  return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), DD.getBarycoord(n, M, D, t, e);
};
DD.normal = function(n, M, D, t) {
  return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), DD.getNormal(n, M, D, t);
};
ge.prototype.extractAllPoints = function(n) {
  return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(n);
};
ge.prototype.extrude = function(n) {
  return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new re(this, n);
};
ge.prototype.makeGeometry = function(n) {
  return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new FN(this, n);
};
q.prototype.fromAttribute = function(n, M, D) {
  return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(n, M, D);
};
q.prototype.distanceToManhattan = function(n) {
  return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(n);
};
q.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
O.prototype.setEulerFromRotationMatrix = function() {
  console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
};
O.prototype.setEulerFromQuaternion = function() {
  console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
};
O.prototype.getPositionFromMatrix = function(n) {
  return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(n);
};
O.prototype.getScaleFromMatrix = function(n) {
  return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(n);
};
O.prototype.getColumnFromMatrix = function(n, M) {
  return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(M, n);
};
O.prototype.applyProjection = function(n) {
  return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(n);
};
O.prototype.fromAttribute = function(n, M, D) {
  return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(n, M, D);
};
O.prototype.distanceToManhattan = function(n) {
  return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(n);
};
O.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
PM.prototype.fromAttribute = function(n, M, D) {
  return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(n, M, D);
};
PM.prototype.lengthManhattan = function() {
  return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
};
ZM.prototype.getChildByName = function(n) {
  return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(n);
};
ZM.prototype.renderDepth = function() {
  console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
};
ZM.prototype.translate = function(n, M) {
  return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(M, n);
};
ZM.prototype.getWorldRotation = function() {
  console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
};
ZM.prototype.applyMatrix = function(n) {
  return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(n);
};
Object.defineProperties(ZM.prototype, {
  eulerOrder: {
    get: function() {
      return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
    },
    set: function(n) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = n;
    }
  },
  useQuaternion: {
    get: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    }
  }
});
nD.prototype.setDrawMode = function() {
  console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
};
Object.defineProperties(nD.prototype, {
  drawMode: {
    get: function() {
      return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), tT;
    },
    set: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }
});
Yi.prototype.initBones = function() {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
jD.prototype.setLens = function(n, M) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), M !== void 0 && (this.filmGauge = M), this.setFocalLength(n);
};
Object.defineProperties(KD.prototype, {
  onlyShadow: {
    set: function() {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    }
  },
  shadowCameraFov: {
    set: function(n) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = n;
    }
  },
  shadowCameraLeft: {
    set: function(n) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = n;
    }
  },
  shadowCameraRight: {
    set: function(n) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = n;
    }
  },
  shadowCameraTop: {
    set: function(n) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = n;
    }
  },
  shadowCameraBottom: {
    set: function(n) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = n;
    }
  },
  shadowCameraNear: {
    set: function(n) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = n;
    }
  },
  shadowCameraFar: {
    set: function(n) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = n;
    }
  },
  shadowCameraVisible: {
    set: function() {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
    }
  },
  shadowBias: {
    set: function(n) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = n;
    }
  },
  shadowDarkness: {
    set: function() {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    }
  },
  shadowMapWidth: {
    set: function(n) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = n;
    }
  },
  shadowMapHeight: {
    set: function(n) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = n;
    }
  }
});
Object.defineProperties(AD.prototype, {
  length: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
    }
  },
  dynamic: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === YN;
    },
    set: function() {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(YN);
    }
  }
});
AD.prototype.setDynamic = function(n) {
  return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(n === !0 ? YN : Qe), this;
};
AD.prototype.copyIndicesArray = function() {
  console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
}, AD.prototype.setArray = function() {
  console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
VM.prototype.addIndex = function(n) {
  console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(n);
};
VM.prototype.addAttribute = function(n, M) {
  return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(M && M.isBufferAttribute) && !(M && M.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(n, new AD(arguments[1], arguments[2]))) : n === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(M), this) : this.setAttribute(n, M);
};
VM.prototype.addDrawCall = function(n, M, D) {
  D !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(n, M);
};
VM.prototype.clearDrawCalls = function() {
  console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
};
VM.prototype.computeOffsets = function() {
  console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
};
VM.prototype.removeAttribute = function(n) {
  return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(n);
};
VM.prototype.applyMatrix = function(n) {
  return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(n);
};
Object.defineProperties(VM.prototype, {
  drawcalls: {
    get: function() {
      return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
    }
  },
  offsets: {
    get: function() {
      return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
    }
  }
});
Pe.prototype.setDynamic = function(n) {
  return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(n === !0 ? YN : Qe), this;
};
Pe.prototype.setArray = function() {
  console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
};
re.prototype.getArrays = function() {
  console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");
};
re.prototype.addShapeList = function() {
  console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");
};
re.prototype.addShape = function() {
  console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");
};
AA.prototype.dispose = function() {
  console.error("THREE.Scene: .dispose() has been removed.");
};
Object.defineProperties(ID.prototype, {
  wrapAround: {
    get: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    }
  },
  overdraw: {
    get: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    }
  },
  wrapRGB: {
    get: function() {
      return console.warn("THREE.Material: .wrapRGB has been removed."), new cM();
    }
  },
  shading: {
    get: function() {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
    },
    set: function(n) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === ei;
    }
  },
  stencilMask: {
    get: function() {
      return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
    },
    set: function(n) {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = n;
    }
  },
  vertexTangents: {
    get: function() {
      console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
    },
    set: function() {
      console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
    }
  }
});
Object.defineProperties(lt.prototype, {
  derivatives: {
    get: function() {
      return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
    },
    set: function(n) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = n;
    }
  }
});
KM.prototype.clearTarget = function(n, M, D, t) {
  console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(n), this.clear(M, D, t);
};
KM.prototype.animate = function(n) {
  console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(n);
};
KM.prototype.getCurrentRenderTarget = function() {
  return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
};
KM.prototype.getMaxAnisotropy = function() {
  return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
};
KM.prototype.getPrecision = function() {
  return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
};
KM.prototype.resetGLState = function() {
  return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
};
KM.prototype.supportsFloatTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
};
KM.prototype.supportsHalfFloatTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
};
KM.prototype.supportsStandardDerivatives = function() {
  return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
};
KM.prototype.supportsCompressedTextureS3TC = function() {
  return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
};
KM.prototype.supportsCompressedTexturePVRTC = function() {
  return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
};
KM.prototype.supportsBlendMinMax = function() {
  return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
};
KM.prototype.supportsVertexTextures = function() {
  return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
};
KM.prototype.supportsInstancedArrays = function() {
  return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
};
KM.prototype.enableScissorTest = function(n) {
  console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(n);
};
KM.prototype.initMaterial = function() {
  console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
};
KM.prototype.addPrePlugin = function() {
  console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
};
KM.prototype.addPostPlugin = function() {
  console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
};
KM.prototype.updateShadowMap = function() {
  console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
};
KM.prototype.setFaceCulling = function() {
  console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
};
KM.prototype.allocTextureUnit = function() {
  console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
};
KM.prototype.setTexture = function() {
  console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
};
KM.prototype.setTexture2D = function() {
  console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
};
KM.prototype.setTextureCube = function() {
  console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
};
KM.prototype.getActiveMipMapLevel = function() {
  return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
};
Object.defineProperties(KM.prototype, {
  shadowMapEnabled: {
    get: function() {
      return this.shadowMap.enabled;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = n;
    }
  },
  shadowMapType: {
    get: function() {
      return this.shadowMap.type;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = n;
    }
  },
  shadowMapCullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  context: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
    }
  },
  vr: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
    }
  },
  gammaInput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
    }
  },
  gammaOutput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = n === !0 ? HM : st;
    }
  },
  toneMappingWhitePoint: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
    }
  },
  gammaFactor: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
    }
  }
});
Object.defineProperties(di.prototype, {
  cullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  renderReverseSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    }
  },
  renderSingleSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(dD.prototype, {
  wrapS: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = n;
    }
  },
  wrapT: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = n;
    }
  },
  magFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = n;
    }
  },
  minFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = n;
    }
  },
  anisotropy: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = n;
    }
  },
  offset: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = n;
    }
  },
  repeat: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = n;
    }
  },
  format: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = n;
    }
  },
  type: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = n;
    }
  },
  generateMipmaps: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
    },
    set: function(n) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = n;
    }
  }
});
tj.prototype.load = function(n) {
  console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
  const M = this;
  return new $c().load(n, function(t) {
    M.setBuffer(t);
  }), this;
};
DA.prototype.updateCubeMap = function(n, M) {
  return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(n, M);
};
DA.prototype.clear = function(n, M, D, t) {
  return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(n, M, D, t);
};
vt.crossOrigin = void 0;
vt.loadTexture = function(n, M, D, t) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  const e = new Hi();
  e.setCrossOrigin(this.crossOrigin);
  const N = e.load(n, D, void 0, t);
  return M && (N.mapping = M), N;
};
vt.loadTextureCube = function(n, M, D, t) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  const e = new Pc();
  e.setCrossOrigin(this.crossOrigin);
  const N = e.load(n, D, void 0, t);
  return M && (N.mapping = M), N;
};
vt.loadCompressedTexture = function() {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
vt.loadCompressedTextureCube = function() {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Wn
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Wn);
const aj = /^[og]\s*(.+)?/, Cj = /^mtllib /, Lj = /^usemtl /, wj = /^usemap /, Jz = /\s+/, $z = new O(), Qn = new O(), Mi = new O(), Di = new O(), lD = new O(), EN = new cM();
function Oj() {
  const n = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(M, D) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = M, this.object.fromDeclaration = D !== !1;
        return;
      }
      const t = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: M || "",
        fromDeclaration: D !== !1,
        geometry: {
          vertices: [],
          normals: [],
          colors: [],
          uvs: [],
          hasUVIndices: !1
        },
        materials: [],
        smooth: !0,
        startMaterial: function(e, N) {
          const A = this._finalize(!1);
          A && (A.inherited || A.groupCount <= 0) && this.materials.splice(A.index, 1);
          const z = {
            index: this.materials.length,
            name: e || "",
            mtllib: Array.isArray(N) && N.length > 0 ? N[N.length - 1] : "",
            smooth: A !== void 0 ? A.smooth : this.smooth,
            groupStart: A !== void 0 ? A.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(I) {
              const i = {
                index: typeof I == "number" ? I : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return i.clone = this.clone.bind(i), i;
            }
          };
          return this.materials.push(z), z;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(e) {
          const N = this.currentMaterial();
          if (N && N.groupEnd === -1 && (N.groupEnd = this.geometry.vertices.length / 3, N.groupCount = N.groupEnd - N.groupStart, N.inherited = !1), e && this.materials.length > 1)
            for (let A = this.materials.length - 1; A >= 0; A--)
              this.materials[A].groupCount <= 0 && this.materials.splice(A, 1);
          return e && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), N;
        }
      }, t && t.name && typeof t.clone == "function") {
        const e = t.clone(0);
        e.inherited = !0, this.object.materials.push(e);
      }
      this.objects.push(this.object);
    },
    finalize: function() {
      this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
    },
    parseVertexIndex: function(M, D) {
      const t = parseInt(M, 10);
      return (t >= 0 ? t - 1 : t + D / 3) * 3;
    },
    parseNormalIndex: function(M, D) {
      const t = parseInt(M, 10);
      return (t >= 0 ? t - 1 : t + D / 3) * 3;
    },
    parseUVIndex: function(M, D) {
      const t = parseInt(M, 10);
      return (t >= 0 ? t - 1 : t + D / 2) * 2;
    },
    addVertex: function(M, D, t) {
      const e = this.vertices, N = this.object.geometry.vertices;
      N.push(e[M + 0], e[M + 1], e[M + 2]), N.push(e[D + 0], e[D + 1], e[D + 2]), N.push(e[t + 0], e[t + 1], e[t + 2]);
    },
    addVertexPoint: function(M) {
      const D = this.vertices;
      this.object.geometry.vertices.push(D[M + 0], D[M + 1], D[M + 2]);
    },
    addVertexLine: function(M) {
      const D = this.vertices;
      this.object.geometry.vertices.push(D[M + 0], D[M + 1], D[M + 2]);
    },
    addNormal: function(M, D, t) {
      const e = this.normals, N = this.object.geometry.normals;
      N.push(e[M + 0], e[M + 1], e[M + 2]), N.push(e[D + 0], e[D + 1], e[D + 2]), N.push(e[t + 0], e[t + 1], e[t + 2]);
    },
    addFaceNormal: function(M, D, t) {
      const e = this.vertices, N = this.object.geometry.normals;
      $z.fromArray(e, M), Qn.fromArray(e, D), Mi.fromArray(e, t), lD.subVectors(Mi, Qn), Di.subVectors($z, Qn), lD.cross(Di), lD.normalize(), N.push(lD.x, lD.y, lD.z), N.push(lD.x, lD.y, lD.z), N.push(lD.x, lD.y, lD.z);
    },
    addColor: function(M, D, t) {
      const e = this.colors, N = this.object.geometry.colors;
      e[M] !== void 0 && N.push(e[M + 0], e[M + 1], e[M + 2]), e[D] !== void 0 && N.push(e[D + 0], e[D + 1], e[D + 2]), e[t] !== void 0 && N.push(e[t + 0], e[t + 1], e[t + 2]);
    },
    addUV: function(M, D, t) {
      const e = this.uvs, N = this.object.geometry.uvs;
      N.push(e[M + 0], e[M + 1]), N.push(e[D + 0], e[D + 1]), N.push(e[t + 0], e[t + 1]);
    },
    addDefaultUV: function() {
      const M = this.object.geometry.uvs;
      M.push(0, 0), M.push(0, 0), M.push(0, 0);
    },
    addUVLine: function(M) {
      const D = this.uvs;
      this.object.geometry.uvs.push(D[M + 0], D[M + 1]);
    },
    addFace: function(M, D, t, e, N, A, z, I, i) {
      const T = this.vertices.length;
      let u = this.parseVertexIndex(M, T), g = this.parseVertexIndex(D, T), s = this.parseVertexIndex(t, T);
      if (this.addVertex(u, g, s), this.addColor(u, g, s), z !== void 0 && z !== "") {
        const j = this.normals.length;
        u = this.parseNormalIndex(z, j), g = this.parseNormalIndex(I, j), s = this.parseNormalIndex(i, j), this.addNormal(u, g, s);
      } else
        this.addFaceNormal(u, g, s);
      if (e !== void 0 && e !== "") {
        const j = this.uvs.length;
        u = this.parseUVIndex(e, j), g = this.parseUVIndex(N, j), s = this.parseUVIndex(A, j), this.addUV(u, g, s), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(M) {
      this.object.geometry.type = "Points";
      const D = this.vertices.length;
      for (let t = 0, e = M.length; t < e; t++) {
        const N = this.parseVertexIndex(M[t], D);
        this.addVertexPoint(N), this.addColor(N);
      }
    },
    addLineGeometry: function(M, D) {
      this.object.geometry.type = "Line";
      const t = this.vertices.length, e = this.uvs.length;
      for (let N = 0, A = M.length; N < A; N++)
        this.addVertexLine(this.parseVertexIndex(M[N], t));
      for (let N = 0, A = D.length; N < A; N++)
        this.addUVLine(this.parseUVIndex(D[N], e));
    }
  };
  return n.startObject("", !1), n;
}
class xj extends JD {
  constructor(M) {
    super(M), this.materials = null;
  }
  load(M, D, t, e) {
    const N = this, A = new Bi(this.manager);
    A.setPath(this.path), A.setRequestHeader(this.requestHeader), A.setWithCredentials(this.withCredentials), A.load(M, function(z) {
      try {
        D(N.parse(z));
      } catch (I) {
        e ? e(I) : console.error(I), N.manager.itemError(M);
      }
    }, t, e);
  }
  setMaterials(M) {
    return this.materials = M, this;
  }
  parse(M) {
    const D = new Oj();
    M.indexOf(`\r
`) !== -1 && (M = M.replace(/\r\n/g, `
`)), M.indexOf(`\\
`) !== -1 && (M = M.replace(/\\\n/g, ""));
    const t = M.split(`
`);
    let e = [];
    for (let z = 0, I = t.length; z < I; z++) {
      const i = t[z].trimStart();
      if (i.length === 0)
        continue;
      const T = i.charAt(0);
      if (T !== "#")
        if (T === "v") {
          const u = i.split(Jz);
          switch (u[0]) {
            case "v":
              D.vertices.push(parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3])), u.length >= 7 ? (EN.setRGB(parseFloat(u[4]), parseFloat(u[5]), parseFloat(u[6])).convertSRGBToLinear(), D.colors.push(EN.r, EN.g, EN.b)) : D.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              D.normals.push(parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3]));
              break;
            case "vt":
              D.uvs.push(parseFloat(u[1]), parseFloat(u[2]));
              break;
          }
        } else if (T === "f") {
          const g = i.slice(1).trim().split(Jz), s = [];
          for (let y = 0, a = g.length; y < a; y++) {
            const c = g[y];
            if (c.length > 0) {
              const r = c.split("/");
              s.push(r);
            }
          }
          const j = s[0];
          for (let y = 1, a = s.length - 1; y < a; y++) {
            const c = s[y], r = s[y + 1];
            D.addFace(j[0], c[0], r[0], j[1], c[1], r[1], j[2], c[2], r[2]);
          }
        } else if (T === "l") {
          const u = i.substring(1).trim().split(" ");
          let g = [];
          const s = [];
          if (i.indexOf("/") === -1)
            g = u;
          else
            for (let j = 0, y = u.length; j < y; j++) {
              const a = u[j].split("/");
              a[0] !== "" && g.push(a[0]), a[1] !== "" && s.push(a[1]);
            }
          D.addLineGeometry(g, s);
        } else if (T === "p") {
          const g = i.slice(1).trim().split(" ");
          D.addPointGeometry(g);
        } else if ((e = aj.exec(i)) !== null) {
          const u = (" " + e[0].slice(1).trim()).slice(1);
          D.startObject(u);
        } else if (Lj.test(i))
          D.object.startMaterial(i.substring(7).trim(), D.materialLibraries);
        else if (Cj.test(i))
          D.materialLibraries.push(i.substring(7).trim());
        else if (wj.test(i))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (T === "s") {
          if (e = i.split(" "), e.length > 1) {
            const g = e[1].trim().toLowerCase();
            D.object.smooth = g !== "0" && g !== "off";
          } else
            D.object.smooth = !0;
          const u = D.object.currentMaterial();
          u && (u.smooth = D.object.smooth);
        } else {
          if (i === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + i + '"');
        }
    }
    D.finalize();
    const N = new xt();
    if (N.materialLibraries = [].concat(D.materialLibraries), !(D.objects.length === 1 && D.objects[0].geometry.vertices.length === 0) === !0)
      for (let z = 0, I = D.objects.length; z < I; z++) {
        const i = D.objects[z], T = i.geometry, u = i.materials, g = T.type === "Line", s = T.type === "Points";
        let j = !1;
        if (T.vertices.length === 0)
          continue;
        const y = new VM();
        y.setAttribute("position", new WM(T.vertices, 3)), T.normals.length > 0 && y.setAttribute("normal", new WM(T.normals, 3)), T.colors.length > 0 && (j = !0, y.setAttribute("color", new WM(T.colors, 3))), T.hasUVIndices === !0 && y.setAttribute("uv", new WM(T.uvs, 2));
        const a = [];
        for (let r = 0, l = u.length; r < l; r++) {
          const C = u[r], E = C.name + "_" + C.smooth + "_" + j;
          let d = D.materials[E];
          if (this.materials !== null) {
            if (d = this.materials.create(C.name), g && d && !(d instanceof gt)) {
              const p = new gt();
              ID.prototype.copy.call(p, d), p.color.copy(d.color), d = p;
            } else if (s && d && !(d instanceof Jt)) {
              const p = new Jt({ size: 10, sizeAttenuation: !1 });
              ID.prototype.copy.call(p, d), p.color.copy(d.color), p.map = d.map, d = p;
            }
          }
          d === void 0 && (g ? d = new gt() : s ? d = new Jt({ size: 1, sizeAttenuation: !1 }) : d = new Ri(), d.name = C.name, d.flatShading = !C.smooth, d.vertexColors = j, D.materials[E] = d), a.push(d);
        }
        let c;
        if (a.length > 1) {
          for (let r = 0, l = u.length; r < l; r++) {
            const C = u[r];
            y.addGroup(C.groupStart, C.groupCount, r);
          }
          g ? c = new ke(y, a) : s ? c = new dN(y, a) : c = new nD(y, a);
        } else
          g ? c = new ke(y, a[0]) : s ? c = new dN(y, a[0]) : c = new nD(y, a[0]);
        c.name = i.name, N.add(c);
      }
    else if (D.vertices.length > 0) {
      const z = new Jt({ size: 1, sizeAttenuation: !1 }), I = new VM();
      I.setAttribute("position", new WM(D.vertices, 3)), D.colors.length > 0 && D.colors[0] !== void 0 && (I.setAttribute("color", new WM(D.colors, 3)), z.vertexColors = !0);
      const i = new dN(I, z);
      N.add(i);
    }
    return N;
  }
}
class Ej extends xt {
  constructor(M) {
    super(), this.animation = this.floatAnim, this.goingHome = !1, this.homeTimeout = null, this.home = {
      position: new O(M.position.x, M.position.y, M.position.z),
      rotation: new ct(M.rotation.x, M.rotation.y, M.rotation.z)
    }, this.reset();
  }
  reset() {
    this.position.copy(this.home.position), this.rotation.copy(this.home.rotation), this.speed = new O(), this.rotSpeed = new ct(), this.acceleration = new O();
  }
  homeAnim(M) {
    if (!this.goingHome) {
      this.goingHome = !0;
      const D = 1;
      this.speed.subVectors(this.home.position, this.position).multiplyScalar(1 / D);
      const t = this.rotSpeed.toVector3();
      t.subVectors(this.home.rotation, this.rotation).multiplyScalar(1 / D), this.rotSpeed.setFromVector3(t), this.homeTimeout = setTimeout(() => {
        this.goingHome = !1, this.reset(), this.startFloat();
      }, D * 1e3);
    }
    this.position.addScaledVector(this.speed, M), this.rotation.setFromVector3(this.rotation.toVector3().addScaledVector(this.rotSpeed, M));
  }
  startFloat() {
    this.acceleration.y = -0.01, this.animation = this.floatAnim;
  }
  floatAnim() {
    this.position.y < -2 && (this.acceleration.y = 0.01), this.position.y > 2 && (this.acceleration.y = -0.01), this.speed.y = Math.min(this.speed.y + this.acceleration.y, 0.1), this.position.y += this.speed.y;
  }
  rotateAnim() {
    this.rotation.y += 0.02;
  }
  lookAtAnim(M, { x: D, y: t, z: e }) {
    const N = new O(D, t, e).sub(this.position);
    this.lookAt(N);
  }
}
function lj(n, M, D) {
  const A = D / 2.2, z = new ge();
  return z.moveTo(0, 0 + D), z.lineTo(0, 0 + M - D), z.quadraticCurveTo(0, 0 + M, 0 + D, 0 + M), z.lineTo(n / 2 - 25 / 2 - A, 0 + M), z.quadraticCurveTo(n / 2 - 25 / 2, 0 + M, n / 2 - 25 / 2, 0 + M - A / 10), z.quadraticCurveTo(n / 2 - 25 / 2, 0 + M - A, n / 2 - 25 / 2 + A, 0 + M - A), z.lineTo(n / 2 + 25 / 2 - A, 0 + M - A), z.quadraticCurveTo(n / 2 + 25 / 2, 0 + M - A, n / 2 + 25 / 2, 0 + M - A / 10), z.quadraticCurveTo(n / 2 + 25 / 2, 0 + M, n / 2 + 25 / 2 + A, 0 + M), z.lineTo(0 + n - D, 0 + M), z.quadraticCurveTo(0 + n, 0 + M, 0 + n, 0 + M - D), z.lineTo(0 + n, 0 + D), z.quadraticCurveTo(0 + n, 0, 0 + n - D, 0), z.lineTo(0 + D, 0), z.quadraticCurveTo(0, 0, 0, 0 + D), new FN(z);
}
const dj = (n, M) => {
  const D = n.__vccOpts || n;
  for (const [t, e] of M)
    D[t] = e;
  return D;
  name: "Mockup",
  props: {
    screen: {
      type: null
    },
    lightClr: {
      type: String,
      default: "white"
    },
    phoneClr: {
      type: String,
      default: "white"
    },
    position: {
      type: Object,
      default: () => ({})
    },
    rotation: {
      type: Object,
      default: () => ({})
    },
    linearFilter: {
      type: Boolean
    }
  },
  setup(n) {
    const M = NI(null);
    let D, t;
    const e = [];
    let N, A = 0, z = 0;
    function I() {
      const y = () => {
        D = new jD(45, M.value.clientWidth / M.value.clientHeight, 0.1, 1e4), t = new AA();
        const c = new Xi(n.lightClr);
        t.add(c), c.position.set(0, 0, 300), D.position.set(0, 0, 200);
      }, a = (c, r) => {
        const l = new Ej({
          position: {
            x: 0,
            y: 0,
            z: 0,
            ...r.position
          },
          rotation: {
            x: -0.2,
            y: 0.3,
            z: 0.06,
            ...r.rotation
          }
        }), C = () => {
          const G = lj(54, 115.80000000000001, 8);
          let o;
          typeof c == "string" ? o = new Hi().load(c) : o = new Ui(c), o.anisotropy = N.capabilities.getMaxAnisotropy();
          const h = new Gn({ map: o });
          n.linearFilter && (h.map.minFilter = uD);
          const Y = new nD(G, h);
          (() => {
            const f = new pD().setFromObject(Y), Q = new O();
            f.getSize(Q);
            const b = new O(), W = Y.geometry.attributes.position, IM = Y.geometry.attributes.uv;
            for (let Z = 0; Z < W.count; Z += 1)
              b.fromBufferAttribute(W, Z), IM.setXY(Z, (b.x - f.min.x) / Q.x, (b.y - f.min.y) / Q.y);
          })(), Y.translateZ(3.6), Y.geometry.center(), l.add(Y);
        }, E = () => {
          new xj().load(vj, (p) => {
            const H = new ZM();
            p.traverse((DM) => {
              if (DM instanceof nD) {
                DM.material = new Gn({ color: n.phoneClr }), DM.geometry.center();
                const G = new nD(DM.geometry, DM.material), o = 8.6;
                G.rotateX(Math.PI / 2), G.scale.set(-o, o, o), H.add(G);
              }
            }), l.add(H);
          });
        };
        return l.startFloat(), t.add(l), C(), E(), l;
      };
      if (N = new KM({ antialias: !0, alpha: !0 }), N.setSize(M.value.clientWidth, M.value.clientHeight), y(), Array.isArray(n.screen))
        for (let c = 0; c <= n.screen.length - 1; c += 1)
          e.push(a(n.screen[c], {
            position: n.position[c],
            rotation: n.rotation[c]
          }));
      else
        e.push(a(n.screen, {
          position: n.position,
          rotation: n.rotation
        }));
      M.value.appendChild(N.domElement);
    }
    let i = 0;
    function T(y) {
      y *= 1e-3;
      const a = y - i;
      i = y, requestAnimationFrame(T), e.length && e.forEach((c) => {
        c.animation(a, { x: A / 2, y: z / 2, z: D.position.z });
      }), N.render(t, D);
    }
    function u() {
      e.length && e.forEach((y) => {
        y.animation = y.lookAtAnim, y.goingHome = !1, clearTimeout(y.homeTimeout);
      });
    }
    function g() {
      e.length && e.forEach((y) => {
        y.animation = y.homeAnim;
      });
    }
    function s(y) {
      const a = M.value.getBoundingClientRect();
      A = y.clientX - a.left - a.width / 2, z = -(y.clientY - a.top - a.height / 2);
    }
    function j(y) {
      y.preventDefault();
      const a = M.value.getBoundingClientRect();
      A = y.touches[0].clientX - a.left - a.width / 2, z = -(y.touches[0].clientY - a.top - a.height / 2);
    }
    return nI(() => {
      I(), T(0);
    }), {
      container: M,
      handleMouseEnter: u,
      handleMouseLeave: g,
      handleMouseMove: s,
      handleTouchMove: j
    };
  }
};
function hj(n, M, D, t, e, N) {
  return AI(), zI("div", {
    ref: "container",
    onMouseenter: M[0] || (M[0] = (...A) => t.handleMouseEnter && t.handleMouseEnter(...A)),
    onMouseleave: M[1] || (M[1] = (...A) => t.handleMouseLeave && t.handleMouseLeave(...A)),
    onMousemove: M[2] || (M[2] = (...A) => t.handleMouseMove && t.handleMouseMove(...A)),
    onTouchstart: M[3] || (M[3] = (...A) => t.handleMouseEnter && t.handleMouseEnter(...A)),
    onTouchend: M[4] || (M[4] = (...A) => t.handleMouseLeave && t.handleMouseLeave(...A)),
    onTouchmove: M[5] || (M[5] = (...A) => t.handleTouchMove && t.handleTouchMove(...A))
  }, null, 544);
}
const Uj = /* @__PURE__ */ dj(pj, [["render", hj]]);
export {
  Uj as default
};