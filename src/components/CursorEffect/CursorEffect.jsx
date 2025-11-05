// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export default function CursorEffect() {
//   const containerRef = useRef(null);
//   const lastMouse = useRef({ x: 0, y: 0 });
//   const hasMoved = useRef(false);

//   useEffect(() => {
//     const scene = new THREE.Scene();

//     const camera = new THREE.OrthographicCamera(
//       window.innerWidth / -2,
//       window.innerWidth / 2,
//       window.innerHeight / 2,
//       window.innerHeight / -2,
//       1,
//       1000
//     );
//     camera.position.z = 10;

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     containerRef.current.appendChild(renderer.domElement);

//     // === Particle setup ===
//     const particleCount = 60000;
//     const geometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(particleCount * 3);
//     const velocities = new Float32Array(particleCount * 2);
//     const life = new Float32Array(particleCount);
//     const lifeAttr = new Float32Array(particleCount);

//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = positions[i * 3 + 1] = 0;
//       life[i] = lifeAttr[i] = 0;
//     }

//     geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     geometry.setAttribute("aLife", new THREE.BufferAttribute(lifeAttr, 1));

//     const material = new THREE.ShaderMaterial({
//       transparent: true,
//       depthWrite: false,
//       blending: THREE.AdditiveBlending,
//       vertexShader: `
//         attribute float aLife;
//         varying float vLife;
//         void main() {
//           vLife = aLife;
//           vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//           gl_Position = projectionMatrix * mvPosition;
//           gl_PointSize = 4.0 * aLife;
//         }
//       `,

//       fragmentShader: `
//   varying float vLife;
//   uniform float uTime;

//   float random(vec2 st) {
//     return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
//   }

//   void main() {
//     vec2 coord = gl_PointCoord - vec2(0.5);
//     float dist = length(coord);
//     if (dist > 0.5) discard;

//     float sparkle = random(gl_FragCoord.xy * 0.1 + uTime * 5.0);
//     float intensity = smoothstep(0.5, 0.0, dist) * (0.6 + sparkle * 1.5);

//     // === White Glow ===
//     vec3 finalColor = vec3(1.0, 1.0, 1.0);

//     float fade = vLife * (1.0 - vLife);
//     gl_FragColor = vec4(finalColor * intensity, fade * 1.5);
//   }
// `,

//       uniforms: {
//         uTime: { value: 0 },
//       },
//     });

//     const particles = new THREE.Points(geometry, material);
//     scene.add(particles);

//     let particleIndex = 0;

//     const onMouseMove = (e) => {
//       const currentX = e.clientX - window.innerWidth / 2;
//       const currentY = -(e.clientY - window.innerHeight / 2);

//       if (!hasMoved.current) {
//         lastMouse.current = { x: currentX, y: currentY };
//         hasMoved.current = true;
//         return;
//       }

//       const dx = currentX - lastMouse.current.x;
//       const dy = currentY - lastMouse.current.y;
//       const distance = Math.sqrt(dx * dx + dy * dy);
//       const steps = Math.max(1, Math.floor(distance / 10));

//       for (let s = 0; s <= steps; s++) {
//         const t = s / steps;
//         const interpX = lastMouse.current.x + dx * t;
//         const interpY = lastMouse.current.y + dy * t;

//         const spawnCount = 80;
//         for (let i = 0; i < spawnCount; i++) {
//           const idx = particleIndex % particleCount;
//           particleIndex++;

//           const offsetX = (Math.random() - 0.5) * 20;
//           const offsetY = (Math.random() - 0.5) * 20;

//           positions[idx * 3] = interpX + offsetX;
//           positions[idx * 3 + 1] = interpY + offsetY;

//           velocities[idx * 2] = dx * 0.02 + (Math.random() - 0.5) * 0.6;
//           velocities[idx * 2 + 1] = dy * 0.02 + (Math.random() - 0.5) * 0.6;

//           life[idx] = lifeAttr[idx] = 1.0;
//         }
//       }

//       lastMouse.current = { x: currentX, y: currentY };
//       geometry.attributes.position.needsUpdate = true;
//       geometry.attributes.aLife.needsUpdate = true;
//     };

//     window.addEventListener("mousemove", onMouseMove);

//     let time = 0;
//     const animate = () => {
//       time += 0.02;
//       material.uniforms.uTime.value = time;

//       for (let i = 0; i < particleCount; i++) {
//         if (life[i] > 0) {
//           positions[i * 3] += velocities[i * 2];
//           positions[i * 3 + 1] += velocities[i * 2 + 1];
//           life[i] -= 0.018;
//           lifeAttr[i] = life[i];
//           velocities[i * 2] *= 0.94;
//           velocities[i * 2 + 1] *= 0.94;
//         }
//       }

//       geometry.attributes.position.needsUpdate = true;
//       geometry.attributes.aLife.needsUpdate = true;
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     const handleResize = () => {
//       camera.left = window.innerWidth / -2;
//       camera.right = window.innerWidth / 2;
//       camera.top = window.innerHeight / 2;
//       camera.bottom = window.innerHeight / -2;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("resize", handleResize);
//       containerRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
//     />
//   );
// }

// *******************************************

"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CursorEffect() {
  const containerRef = useRef(null);
  const lastMouse = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // === Particle setup ===
    const particleCount = 60000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 2);
    const life = new Float32Array(particleCount);
    const lifeAttr = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = positions[i * 3 + 1] = 0;
      life[i] = lifeAttr[i] = 0;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aLife", new THREE.BufferAttribute(lifeAttr, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float aLife;
        varying float vLife;
        void main() {
          vLife = aLife;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = 4.0 * aLife;
        }
      `,

      fragmentShader: `
  varying float vLife;
  uniform float uTime;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;

    float sparkle = random(gl_FragCoord.xy * 0.1 + uTime * 5.0);
    float intensity = smoothstep(0.5, 0.0, dist) * (0.6 + sparkle * 1.5);

    // === White Glow ===
    vec3 finalColor = vec3(1.0, 1.0, 1.0);

    float fade = vLife * (1.0 - vLife);
    gl_FragColor = vec4(finalColor * intensity, fade * 1.5);
  }
`,

      uniforms: {
        uTime: { value: 0 },
      },
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let particleIndex = 0;

    const onMouseMove = (e) => {
      const currentX = e.clientX - window.innerWidth / 2;
      const currentY = -(e.clientY - window.innerHeight / 2);

      if (!hasMoved.current) {
        lastMouse.current = { x: currentX, y: currentY };
        hasMoved.current = true;
        return;
      }

      const dx = currentX - lastMouse.current.x;
      const dy = currentY - lastMouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const steps = Math.max(1, Math.floor(distance / 10));

      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const interpX = lastMouse.current.x + dx * t;
        const interpY = lastMouse.current.y + dy * t;

        const spawnCount = 40;
        for (let i = 0; i < spawnCount; i++) {
          const idx = particleIndex % particleCount;
          particleIndex++;

          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 0.2;

          positions[idx * 3] = interpX + offsetX;
          positions[idx * 3 + 1] = interpY + offsetY;

          velocities[idx * 2] = dx * 0.02 + (Math.random() - 0.5) * 0.6;
          velocities[idx * 2 + 1] = dy * 0.02 + (Math.random() - 0.5) * 0.6;

          life[idx] = lifeAttr[idx] = 1.0;
        }
      }

      lastMouse.current = { x: currentX, y: currentY };
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aLife.needsUpdate = true;
    };

    window.addEventListener("mousemove", onMouseMove);

    let time = 0;
    const animate = () => {
      time += 0.02;
      material.uniforms.uTime.value = time;

      for (let i = 0; i < particleCount; i++) {
        if (life[i] > 0) {
          positions[i * 3] += velocities[i * 2];
          positions[i * 3 + 1] += velocities[i * 2 + 1];
          life[i] -= 0.018;
          lifeAttr[i] = life[i];
          velocities[i * 2] *= 0.94;
          velocities[i * 2 + 1] *= 0.94;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aLife.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}
