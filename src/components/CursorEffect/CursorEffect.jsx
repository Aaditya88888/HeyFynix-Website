// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export default function CursorEffect() {
//   const containerRef = useRef(null);
//   const shootingStarRef = useRef(null);

//   useEffect(() => {
//     class THREERoot {
//       width = 0;
//       height = 0;
//       speed = 60 / 1000;
//       time = 0;
//       firstTime = 0;
//       stopTime = 0;
//       updateCallbacks = [];
//       resizeCallbacks = [];
//       objects = {};
//       animationFrameId = null;
//       startTime = 0;
//       renderer;
//       canvas;
//       container;
//       camera;
//       scene;

//       constructor(params) {
//         const {
//           container = document.body,
//           fov = 45,
//           zNear = 0.1,
//           zFar = 10000,
//           cameraPosition = [0, 0, 30],
//           isAutoStart = true,
//           pixelRatio = window.devicePixelRatio,
//           antialias = window.devicePixelRatio === 1,
//           alpha = false,
//           clearColor = 0x000000,
//           canvas = document.createElement("canvas"),
//         } = params;

//         this.renderer = new THREE.WebGLRenderer({ antialias, alpha, canvas });
//         this.renderer.setPixelRatio(pixelRatio);
//         this.renderer.setClearColor(clearColor, alpha ? 0 : 1);
//         this.canvas = this.renderer.domElement;
//         this.container =
//           typeof container === "string"
//             ? document.querySelector(container)
//             : container;
//         if (!params.canvas) this.container.appendChild(this.canvas);

//         this.setSize();
//         this.camera = new THREE.PerspectiveCamera(
//           fov,
//           this.width / this.height,
//           zNear,
//           zFar
//         );
//         this.camera.position.set(...cameraPosition);
//         this.camera.updateProjectionMatrix();
//         this.scene = new THREE.Scene();

//         this.resize();
//         window.addEventListener("resize", () => this.resize());

//         if (isAutoStart) this.start();
//       }

//       setSize() {
//         this.width = this.container.clientWidth;
//         this.height = this.container.clientHeight;
//       }

//       start() {
//         const startTime = this.stopTime || this.firstTime;
//         requestAnimationFrame((ts) => {
//           this.startTime = ts - startTime;
//           this.time = ts - this.startTime;
//         });
//         this.tick();
//       }

//       tick() {
//         this.update();
//         this.render();
//         this.animationFrameId = requestAnimationFrame((ts) => {
//           this.time = ts - this.startTime;
//           this.tick();
//         });
//       }

//       update() {
//         const time = this.time * this.speed;
//         this.updateCallbacks.forEach((fn) => fn(time));
//       }

//       render() {
//         this.renderer.render(this.scene, this.camera);
//       }

//       stop() {
//         if (this.animationFrameId !== null)
//           cancelAnimationFrame(this.animationFrameId);
//         this.animationFrameId = null;
//         this.stopTime = this.time;
//       }

//       addUpdateCallback(cb) {
//         this.updateCallbacks.push(cb);
//       }
//       addResizeCallback(cb) {
//         this.resizeCallbacks.push(cb);
//       }
//       add(object, key) {
//         if (key) this.objects[key] = object;
//         this.scene.add(object);
//       }

//       resize() {
//         this.setSize();
//         this.camera.aspect = this.width / this.height;
//         this.camera.updateProjectionMatrix();
//         this.renderer.setSize(this.width, this.height);
//         this.resizeCallbacks.forEach((cb) => cb());
//       }
//     }

//     // ---------- Shaders (White Stars) ----------
//     const vertexShader = `
//       precision highp float;
//       attribute vec3 position;
//       attribute vec4 mouse;
//       attribute vec2 aFront;
//       attribute float random;
//       uniform vec2 resolution;
//       uniform float pixelRatio;
//       uniform float timestamp;
//       uniform float size;
//       uniform float minSize;
//       uniform float speed;
//       uniform float far;
//       uniform float spread;
//       uniform float maxSpread;
//       uniform float maxZ;
//       uniform float maxDiff;
//       uniform float diffPow;
//       varying float vProgress;
//       varying float vRandom;
//       varying float vDiff;
//       varying float vSpreadLength;
//       varying float vPositionZ;
//       uniform mat4 modelViewMatrix;
//       uniform mat4 projectionMatrix;

//       float cubicOut(float t) {
//         float f = t - 1.0;
//         return f * f * f + 1.0;
//       }

//       const float PI = 3.1415926;
//       const float PI2 = PI * 2.0;

//       void main() {
//         if (mouse.x < 0.0) {
//           gl_Position = vec4(0.0);
//           gl_PointSize = 0.0;
//           return;
//         }

//         float progress = clamp((timestamp - mouse.z) * speed, 0.0, 1.0);
//         if (progress >= 1.0) {
//           gl_Position = vec4(0.0);
//           gl_PointSize = 0.0;
//           return;
//         }

//         float startX = mouse.x - resolution.x / 2.0;
//         float startY = mouse.y - resolution.y / 2.0;
//         vec3 startPos = vec3(startX, startY, random * 50.0);
//         float diff = clamp(mouse.w / maxDiff, 0.0, 1.0);
//         diff = pow(diff, diffPow);
//         vec3 cPos = position * 2.0 - 1.0;
//         float rad = cPos.x * PI2 - PI;
//         vec2 xySpread = vec2(cos(rad), sin(rad)) * spread * mix(1.0, maxSpread, diff) * cPos.y;
//         vec3 endPos = startPos;
//         endPos.xy += xySpread;
//         endPos.xy -= aFront * far * random;
//         endPos.z += cPos.z * maxZ * (pixelRatio > 1.0 ? 1.2 : 1.0);
//         float posProg = cubicOut(progress);
//         vec3 curPos = mix(startPos, endPos, posProg);

//         vProgress = progress;
//         vRandom = random;
//         vDiff = diff;
//         vSpreadLength = cPos.y;
//         vPositionZ = position.z;

//         gl_Position = projectionMatrix * modelViewMatrix * vec4(curPos, 1.0);
//         // gl_PointSize = max(curPos.z * size * diff * pixelRatio, minSize * (pixelRatio > 1.0 ? 1.3 : 1.0));
//         float tipScale = mix(0.2, 1.0, vProgress);
// gl_PointSize = max(
//   curPos.z * size * diff * pixelRatio * tipScale,
//   minSize * (pixelRatio > 1.0 ? 1.3 : 1.0)
// );
//       }
//     `;

//     const fragmentShader = `
//       precision highp float;
//       uniform float fadeSpeed;
//       uniform float shortRangeFadeSpeed;
//       uniform float minFlashingSpeed;
//       uniform float blur;
//       varying float vProgress;
//       varying float vRandom;
//       varying float vDiff;
//       varying float vSpreadLength;
//       varying float vPositionZ;

//       highp float random(vec2 co) {
//         highp float a = 12.9898;
//         highp float b = 78.233;
//         highp float c = 43758.5453;
//         highp float dt = dot(co.xy, vec2(a,b));
//         highp float sn = mod(dt, 3.14);
//         return fract(sin(sn) * c);
//       }

//       float quadraticIn(float t) { return t * t; }
//       float sineOut(float t) { return sin(t * 1.5707963267948966); }

//       const vec3 baseColor = vec3(1.0, 1.0, 1.0);
//       const float brightnessBoost = 4.5;

//       void main() {
//         vec2 p = gl_PointCoord * 2.0 - 1.0;
//         float len = length(p);
//         float cRandom = random(vec2(vProgress * mix(minFlashingSpeed, 1.0, vRandom)));
//         cRandom = mix(0.7, 2.8, cRandom);
//         float cBlur = blur * mix(1.0, 0.3, vPositionZ);
//         float shape = smoothstep(1.0 - cBlur, 1.0 + cBlur, (1.0 - cBlur) / len);
//         shape *= mix(0.7, 1.0, vRandom);
//         if (shape == 0.0) discard;

//         float darkness = mix(0.5, 1.0, vPositionZ);
//         float alphaProg = vProgress * fadeSpeed * mix(2.5, 1.0, pow(vDiff, 0.6));
//         alphaProg *= mix(shortRangeFadeSpeed, 1.0, sineOut(vSpreadLength) * quadraticIn(vDiff));
//         float alpha = 1.0 - min(alphaProg, 1.0);
//         alpha *= cRandom * vDiff * brightnessBoost;

//         gl_FragColor = vec4(baseColor * darkness * cRandom, shape * alpha);
//       }
//     `;

//     // ---------- Optimized ShootingStar with Reduced Spread ----------
//     class ShootingStar {
//       PER_MOUSE = 1200;
//       COUNT = this.PER_MOUSE * 300;
//       MOUSE_ATTRIBUTE_COUNT = 4;
//       FRONT_ATTRIBUTE_COUNT = 2;
//       geometry;
//       material;
//       mesh;
//       root;
//       mouseI = 0;
//       currentPos = new THREE.Vector2();
//       targetPos = new THREE.Vector2();
//       isStarted = false;
//       rafId = null;

//       constructor() {
//         this.root = new THREERoot({
//           container: containerRef.current,
//           fov: ((Math.atan(window.innerHeight / 2 / 5000) * 180) / Math.PI) * 2,
//           zFar: 5000,
//           cameraPosition: [0, 0, 5000],
//           alpha: true,
//           clearColor: 0x000000,
//           antialias: true,
//         });

//         const geometry = new THREE.BufferGeometry();
//         const positions = new Float32Array(this.COUNT * 3);
//         const mouses = new Float32Array(
//           this.COUNT * this.MOUSE_ATTRIBUTE_COUNT
//         );
//         const fronts = new Float32Array(
//           this.COUNT * this.FRONT_ATTRIBUTE_COUNT
//         );
//         const randoms = new Float32Array(this.COUNT);

//         for (let i = 0; i < this.COUNT; i++) {
//           const theta = Math.random() * 2 * Math.PI;
//           const r = Math.sqrt(Math.random());
//           positions[i * 3] = Math.cos(theta) * r * 0.5 + 0.5;
//           positions[i * 3 + 1] = Math.sin(theta) * r * 0.5 + 0.5;
//           positions[i * 3 + 2] = Math.random() * 2 - 1;
//           randoms[i] = Math.random();
//           mouses[i * 4] = -1;
//         }

//         geometry.setAttribute(
//           "position",
//           new THREE.BufferAttribute(positions, 3)
//         );
//         geometry.setAttribute(
//           "mouse",
//           new THREE.BufferAttribute(mouses, this.MOUSE_ATTRIBUTE_COUNT)
//         );
//         geometry.setAttribute(
//           "aFront",
//           new THREE.BufferAttribute(fronts, this.FRONT_ATTRIBUTE_COUNT)
//         );
//         geometry.setAttribute("random", new THREE.BufferAttribute(randoms, 1));

//         const uniforms = {
//           resolution: {
//             value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//           },
//           pixelRatio: { value: window.devicePixelRatio },
//           timestamp: { value: 0 },
//           // size: { value: 0.05 },
//           // minSize: { value: 1.2 },
//           size: { value: 0.03 },
//           minSize: { value: 0.4 },
//           speed: { value: 0.1 },
//           fadeSpeed: { value: 7.0 },
//           shortRangeFadeSpeed: { value: 1.8 },
//           minFlashingSpeed: { value: 0.2 },
//           blur: { value: 1.4 },
//           far: { value: 12 }, // Reduced from 18
//           spread: { value: 20 }, // Reduced from 20 → much tighter
//           maxSpread: { value: 5 }, // Reduced from 12 → max 8*3 = 24 (was 240!)
//           maxZ: { value: 140 },
//           maxDiff: { value: 80 }, // Reduced from 140 → less sensitive to fast moves
//           diffPow: { value: 0.35 },
//         };

//         const material = new THREE.RawShaderMaterial({
//           uniforms,
//           vertexShader,
//           fragmentShader,
//           transparent: true,
//           blending: THREE.AdditiveBlending,
//           depthTest: false,
//         });

//         const mesh = new THREE.Points(geometry, material);
//         this.root.add(mesh);

//         this.geometry = geometry;
//         this.material = material;
//         this.mesh = mesh;

//         this.root.addUpdateCallback(() => {
//           this.material.uniforms.timestamp.value = performance.now() / 1000;
//         });

//         this.root.addResizeCallback(() => {
//           this.material.uniforms.resolution.value.set(
//             window.innerWidth,
//             window.innerHeight
//           );
//         });
//       }

//       draw = () => {
//         if (!this.isStarted) return;

//         const diff = this.targetPos.clone().sub(this.currentPos);
//         const length = diff.length();
//         if (length < 1) return;

//         const front = diff.clone().normalize();
//         const now = performance.now() / 1000;

//         for (let i = 0; i < this.PER_MOUSE; i++) {
//           const ci =
//             (this.mouseI + i * this.MOUSE_ATTRIBUTE_COUNT) %
//             (this.COUNT * this.MOUSE_ATTRIBUTE_COUNT);
//           const lerpT = i / this.PER_MOUSE;
//           const pos = this.currentPos.clone().lerp(this.targetPos, lerpT);
//           const startTime = now - lerpT * 0.04;

//           this.geometry.attributes.mouse.array[ci] = pos.x;
//           this.geometry.attributes.mouse.array[ci + 1] =
//             window.innerHeight - pos.y;
//           this.geometry.attributes.mouse.array[ci + 2] = startTime;
//           this.geometry.attributes.mouse.array[ci + 3] = length;
//           this.geometry.attributes.aFront.array[ci] = front.x;
//           this.geometry.attributes.aFront.array[ci + 1] = front.y;
//         }

//         this.currentPos.copy(this.targetPos);
//         this.geometry.attributes.mouse.needsUpdate = true;
//         this.geometry.attributes.aFront.needsUpdate = true;
//         this.mouseI =
//           (this.mouseI + this.MOUSE_ATTRIBUTE_COUNT * this.PER_MOUSE) %
//           (this.COUNT * this.MOUSE_ATTRIBUTE_COUNT);
//       };

//       start() {
//         this.isStarted = false;
//         this.mouseI = 0;
//         this.currentPos.set(0, 0);
//         this.targetPos.set(0, 0);

//         let handler;
//         const onMove = (e) => {
//           const { clientX, clientY } = "touches" in e ? e.touches[0] : e;
//           this.targetPos.set(clientX, clientY);

//           if (!this.isStarted) {
//             this.currentPos.copy(this.targetPos);
//             this.isStarted = true;
//             document.body.style.cursor = "none";

//             const tick = () => {
//               this.draw();
//               this.rafId = requestAnimationFrame(tick);
//             };
//             tick();
//           }
//         };

//         handler = onMove;
//         window.addEventListener("pointermove", handler);
//         window.addEventListener("touchmove", handler, { passive: true });

//         return () => {
//           window.removeEventListener("pointermove", handler);
//           window.removeEventListener("touchmove", handler);
//           if (this.rafId) cancelAnimationFrame(this.rafId);
//         };
//       }
//     }

//     const shootingStar = new ShootingStar();
//     shootingStarRef.current = shootingStar;
//     const cleanup = shootingStar.start();

//     return () => {
//       shootingStar.root.stop();
//       document.body.style.cursor = "";
//       cleanup();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 pointer-events-none z-[9999]"
//       style={{ width: "100vw", height: "100vh" }}
//     />
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CursorEffect() {
  const containerRef = useRef(null);
  const shootingStarRef = useRef(null);

  useEffect(() => {
    class THREERoot {
      width = 0;
      height = 0;
      speed = 60 / 1000;
      time = 0;
      firstTime = 0;
      stopTime = 0;
      updateCallbacks = [];
      resizeCallbacks = [];
      objects = {};
      animationFrameId = null;
      startTime = 0;
      renderer;
      canvas;
      container;
      camera;
      scene;

      constructor(params) {
        const {
          container = document.body,
          fov = 45,
          zNear = 0.1,
          zFar = 10000,
          cameraPosition = [0, 0, 30],
          isAutoStart = true,
          pixelRatio = window.devicePixelRatio,
          antialias = window.devicePixelRatio === 1,
          alpha = false,
          clearColor = 0x000000,
          canvas = document.createElement("canvas"),
        } = params;

        this.renderer = new THREE.WebGLRenderer({ antialias, alpha, canvas });
        this.renderer.setPixelRatio(pixelRatio);
        this.renderer.setClearColor(clearColor, alpha ? 0 : 1);
        this.canvas = this.renderer.domElement;
        this.container =
          typeof container === "string"
            ? document.querySelector(container)
            : container;
        if (!params.canvas) this.container.appendChild(this.canvas);

        this.setSize();
        this.camera = new THREE.PerspectiveCamera(
          fov,
          this.width / this.height,
          zNear,
          zFar
        );
        this.camera.position.set(...cameraPosition);
        this.camera.updateProjectionMatrix();
        this.scene = new THREE.Scene();

        this.resize();
        window.addEventListener("resize", () => this.resize());

        if (isAutoStart) this.start();
      }

      setSize() {
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;
      }

      start() {
        const startTime = this.stopTime || this.firstTime;
        requestAnimationFrame((ts) => {
          this.startTime = ts - startTime;
          this.time = ts - this.startTime;
        });
        this.tick();
      }

      tick() {
        this.update();
        this.render();
        this.animationFrameId = requestAnimationFrame((ts) => {
          this.time = ts - this.startTime;
          this.tick();
        });
      }

      update() {
        const time = this.time * this.speed;
        this.updateCallbacks.forEach((fn) => fn(time));
      }

      render() {
        this.renderer.render(this.scene, this.camera);
      }

      stop() {
        if (this.animationFrameId !== null)
          cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
        this.stopTime = this.time;
      }

      addUpdateCallback(cb) {
        this.updateCallbacks.push(cb);
      }
      addResizeCallback(cb) {
        this.resizeCallbacks.push(cb);
      }
      add(object, key) {
        if (key) this.objects[key] = object;
        this.scene.add(object);
      }

      resize() {
        this.setSize();
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.width, this.height);
        this.resizeCallbacks.forEach((cb) => cb());
      }
    }

    // ---------- Shaders (White Stars) ----------
    const vertexShader = `
      precision highp float;
      attribute vec3 position;
      attribute vec4 mouse;
      attribute vec2 aFront;
      attribute float random;
      uniform vec2 resolution;
      uniform float pixelRatio;
      uniform float timestamp;
      uniform float size;
      uniform float minSize;
      uniform float speed;
      uniform float far;
      uniform float spread;
      uniform float maxSpread;
      uniform float maxZ;
      uniform float maxDiff;
      uniform float diffPow;
      varying float vProgress;
      varying float vRandom;
      varying float vDiff;
      varying float vSpreadLength;
      varying float vPositionZ;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;

      float cubicOut(float t) {
        float f = t - 1.0;
        return f * f * f + 1.0;
      }

      const float PI = 3.1415926;
      const float PI2 = PI * 2.0;

      void main() {
        if (mouse.x < 0.0) {
          gl_Position = vec4(0.0);
          gl_PointSize = 0.0;
          return;
        }

        float progress = clamp((timestamp - mouse.z) * speed, 0.0, 1.0);
        if (progress >= 1.0) {
          gl_Position = vec4(0.0);
          gl_PointSize = 0.0;
          return;
        }

        float startX = mouse.x - resolution.x / 2.0;
        float startY = mouse.y - resolution.y / 2.0;
        vec3 startPos = vec3(startX, startY, random * 50.0);
        float diff = clamp(mouse.w / maxDiff, 0.0, 1.0);
        diff = pow(diff, diffPow);
        vec3 cPos = position * 2.0 - 1.0;
        float rad = cPos.x * PI2 - PI;
        vec2 xySpread = vec2(cos(rad), sin(rad)) * spread * mix(1.0, maxSpread, diff) * cPos.y;
        vec3 endPos = startPos;
        endPos.xy += xySpread;
        endPos.xy -= aFront * far * random;
        endPos.z += cPos.z * maxZ * (pixelRatio > 1.0 ? 1.2 : 1.0);
        float posProg = cubicOut(progress);
        vec3 curPos = mix(startPos, endPos, posProg);

        vProgress = progress;
        vRandom = random;
        vDiff = diff;
        vSpreadLength = cPos.y;
        vPositionZ = position.z;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(curPos, 1.0);
        // gl_PointSize = max(curPos.z * size * diff * pixelRatio, minSize * (pixelRatio > 1.0 ? 1.3 : 1.0));
        float tipScale = mix(0.2, 1.0, vProgress); 
gl_PointSize = max(
  curPos.z * size * diff * pixelRatio * tipScale,
  minSize * (pixelRatio > 1.0 ? 1.3 : 1.0)
);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float fadeSpeed;
      uniform float shortRangeFadeSpeed;
      uniform float minFlashingSpeed;
      uniform float blur;
      varying float vProgress;
      varying float vRandom;
      varying float vDiff;
      varying float vSpreadLength;
      varying float vPositionZ;

      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a,b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }

      float quadraticIn(float t) { return t * t; }
      float sineOut(float t) { return sin(t * 1.5707963267948966); }

      const vec3 baseColor = vec3(1.0, 1.0, 1.0);
      const float brightnessBoost = 4.5;

      void main() {
        vec2 p = gl_PointCoord * 2.0 - 1.0;
        float len = length(p);
        float cRandom = random(vec2(vProgress * mix(minFlashingSpeed, 1.0, vRandom)));
        cRandom = mix(0.7, 2.8, cRandom);
        float cBlur = blur * mix(1.0, 0.3, vPositionZ);
        float shape = smoothstep(1.0 - cBlur, 1.0 + cBlur, (1.0 - cBlur) / len);
        shape *= mix(0.7, 1.0, vRandom);
        if (shape == 0.0) discard;

        float darkness = mix(0.5, 1.0, vPositionZ);
        float alphaProg = vProgress * fadeSpeed * mix(2.5, 1.0, pow(vDiff, 0.6));
        alphaProg *= mix(shortRangeFadeSpeed, 1.0, sineOut(vSpreadLength) * quadraticIn(vDiff));
        float alpha = 1.0 - min(alphaProg, 1.0);
        alpha *= cRandom * vDiff * brightnessBoost;

        gl_FragColor = vec4(baseColor * darkness * cRandom, shape * alpha);
      }
    `;

    // ---------- Optimized ShootingStar with Reduced Spread ----------
    class ShootingStar {
      PER_MOUSE = 1200;
      COUNT = this.PER_MOUSE * 300;
      MOUSE_ATTRIBUTE_COUNT = 4;
      FRONT_ATTRIBUTE_COUNT = 2;
      geometry;
      material;
      mesh;
      root;
      mouseI = 0;
      currentPos = new THREE.Vector2();
      targetPos = new THREE.Vector2();
      isStarted = false;
      rafId = null;

      constructor() {
        this.root = new THREERoot({
          container: containerRef.current,
          fov: ((Math.atan(window.innerHeight / 2 / 5000) * 180) / Math.PI) * 2,
          zFar: 5000,
          cameraPosition: [0, 0, 5000],
          alpha: true,
          clearColor: 0x000000,
          antialias: true,
        });

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.COUNT * 3);
        const mouses = new Float32Array(
          this.COUNT * this.MOUSE_ATTRIBUTE_COUNT
        );
        const fronts = new Float32Array(
          this.COUNT * this.FRONT_ATTRIBUTE_COUNT
        );
        const randoms = new Float32Array(this.COUNT);

        for (let i = 0; i < this.COUNT; i++) {
          const theta = Math.random() * 2 * Math.PI;
          const r = Math.sqrt(Math.random());
          positions[i * 3] = Math.cos(theta) * r * 0.5 + 0.5;
          positions[i * 3 + 1] = Math.sin(theta) * r * 0.5 + 0.5;
          positions[i * 3 + 2] = Math.random() * 2 - 1;
          randoms[i] = Math.random();
          mouses[i * 4] = -1;
        }

        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        geometry.setAttribute(
          "mouse",
          new THREE.BufferAttribute(mouses, this.MOUSE_ATTRIBUTE_COUNT)
        );
        geometry.setAttribute(
          "aFront",
          new THREE.BufferAttribute(fronts, this.FRONT_ATTRIBUTE_COUNT)
        );
        geometry.setAttribute("random", new THREE.BufferAttribute(randoms, 1));

        const uniforms = {
          resolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          },
          pixelRatio: { value: window.devicePixelRatio },
          timestamp: { value: 0 },
          // size: { value: 0.05 },
          // minSize: { value: 1.2 },
          size: { value: 0.03 },
          minSize: { value: 0.4 },
          speed: { value: 0.1 },
          fadeSpeed: { value: 7.0 },
          shortRangeFadeSpeed: { value: 1.8 },
          minFlashingSpeed: { value: 0.2 },
          blur: { value: 1.4 },
          far: { value: 12 }, // Reduced from 18
          spread: { value: 20 }, // Reduced from 20 → much tighter
          maxSpread: { value: 5 }, // Reduced from 12 → max 8*3 = 24 (was 240!)
          maxZ: { value: 140 },
          maxDiff: { value: 80 }, // Reduced from 140 → less sensitive to fast moves
          diffPow: { value: 0.35 },
        };

        const material = new THREE.RawShaderMaterial({
          uniforms,
          vertexShader,
          fragmentShader,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthTest: false,
        });

        const mesh = new THREE.Points(geometry, material);
        this.root.add(mesh);

        this.geometry = geometry;
        this.material = material;
        this.mesh = mesh;

        this.root.addUpdateCallback(() => {
          this.material.uniforms.timestamp.value = performance.now() / 1000;
        });

        this.root.addResizeCallback(() => {
          this.material.uniforms.resolution.value.set(
            window.innerWidth,
            window.innerHeight
          );
        });
      }

      draw = () => {
        if (!this.isStarted) return;

        const diff = this.targetPos.clone().sub(this.currentPos);
        const length = diff.length();
        if (length < 1) return;

        const front = diff.clone().normalize();
        const now = performance.now() / 1000;

        for (let i = 0; i < this.PER_MOUSE; i++) {
          const ci =
            (this.mouseI + i * this.MOUSE_ATTRIBUTE_COUNT) %
            (this.COUNT * this.MOUSE_ATTRIBUTE_COUNT);
          const lerpT = i / this.PER_MOUSE;
          const pos = this.currentPos.clone().lerp(this.targetPos, lerpT);
          const startTime = now - lerpT * 0.04;

          this.geometry.attributes.mouse.array[ci] = pos.x;
          this.geometry.attributes.mouse.array[ci + 1] =
            window.innerHeight - pos.y;
          this.geometry.attributes.mouse.array[ci + 2] = startTime;
          this.geometry.attributes.mouse.array[ci + 3] = length;
          this.geometry.attributes.aFront.array[ci] = front.x;
          this.geometry.attributes.aFront.array[ci + 1] = front.y;
        }

        this.currentPos.copy(this.targetPos);
        this.geometry.attributes.mouse.needsUpdate = true;
        this.geometry.attributes.aFront.needsUpdate = true;
        this.mouseI =
          (this.mouseI + this.MOUSE_ATTRIBUTE_COUNT * this.PER_MOUSE) %
          (this.COUNT * this.MOUSE_ATTRIBUTE_COUNT);
      };

      start() {
        this.isStarted = false;
        this.mouseI = 0;
        this.currentPos.set(0, 0);
        this.targetPos.set(0, 0);

        let handler;
        const onMove = (e) => {
          const { clientX, clientY } = "touches" in e ? e.touches[0] : e;
          this.targetPos.set(clientX, clientY);

          if (!this.isStarted) {
            this.currentPos.copy(this.targetPos);
            this.isStarted = true;
            document.body.style.cursor = "none";

            const tick = () => {
              this.draw();
              this.rafId = requestAnimationFrame(tick);
            };
            tick();
          }
        };

        handler = onMove;
        window.addEventListener("pointermove", handler);
        window.addEventListener("touchmove", handler, { passive: true });

        return () => {
          window.removeEventListener("pointermove", handler);
          window.removeEventListener("touchmove", handler);
          if (this.rafId) cancelAnimationFrame(this.rafId);
        };
      }
    }

    const shootingStar = new ShootingStar();
    shootingStarRef.current = shootingStar;
    const cleanup = shootingStar.start();

    return () => {
      shootingStar.root.stop();
      document.body.style.cursor = "";
      cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[100000]"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
