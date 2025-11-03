// "use client";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export default function CursorEffect() {
//   const containerRef = useRef(null);
//   const lastMouse = useRef({ x: 0, y: 0 });
//   const mouseVelocity = useRef({ x: 0, y: 0 });

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

//     // === Particles ===
//     const particleCount = 400;
//     const geometry = new THREE.BufferGeometry();

//     const positions = new Float32Array(particleCount * 3);
//     const velocities = new Float32Array(particleCount * 2);
//     const life = new Float32Array(particleCount);
//     const lifeAttr = new Float32Array(particleCount);

//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = 0;
//       positions[i * 3 + 1] = 0;
//       life[i] = lifeAttr[i] = 0;
//     }

//     geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     geometry.setAttribute("aLife", new THREE.BufferAttribute(lifeAttr, 1));

//     const material = new THREE.ShaderMaterial({
//       transparent: true,
//       depthWrite: false,
//       blending: THREE.AdditiveBlending,
//       vertexShader: `
//     attribute float aLife;
//     varying float vLife;
//     uniform float uSize;
//     void main() {
//       vLife = aLife;
//       vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//       gl_Position = projectionMatrix * mvPosition;
//       gl_PointSize = uSize * aLife;
//     }
//   `,
//       fragmentShader: `
//     varying float vLife;
//     uniform vec3 uColor;
//     uniform float uOpacity;
//     void main() {
//       if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
//       gl_FragColor = vec4(uColor, uOpacity * vLife);
//     }
//   `,
//       uniforms: {
//         uSize: { value: 5 },
//         uColor: { value: new THREE.Color(0x00ffff) },
//         // uColor: { value: new THREE.Color(0xffffff) },
//         uOpacity: { value: 1.0 },
//       },
//     });

//     const particles = new THREE.Points(geometry, material);
//     scene.add(particles);

//     // === Mouse Trail Logic ===
//     let particleIndex = 0; // Round-robin index to avoid random gaps

//     const onMouseMove = (e) => {
//       const currentX = e.clientX - window.innerWidth / 2;
//       const currentY = -(e.clientY - window.innerHeight / 2);

//       // Calculate movement delta
//       const dx = currentX - lastMouse.current.x;
//       const dy = currentY - lastMouse.current.y;

//       // Update velocity (smoothed)
//       mouseVelocity.current.x = dx * 0.1;
//       mouseVelocity.current.y = dy * 0.1;

//       // === Spawn 3–5 particles per move in a tight cluster ===
//       const spawnCount = Math.min(5, Math.floor(Math.hypot(dx, dy) / 10) + 1);

//       for (let i = 0; i < spawnCount; i++) {
//         const idx = particleIndex % particleCount;
//         particleIndex++;

//         // Spawn near cursor with small random offset
//         const offsetX = (Math.random() - 0.5) * 8;
//         const offsetY = (Math.random() - 0.5) * 8;

//         positions[idx * 3] = currentX + offsetX;
//         positions[idx * 3 + 1] = currentY + offsetY;

//         // Velocity: follow mouse direction + randomness
//         const speed = 1 + Math.random() * 2;
//         velocities[idx * 2] =
//           mouseVelocity.current.x * speed + (Math.random() - 0.5) * 1.5;
//         velocities[idx * 2 + 1] =
//           mouseVelocity.current.y * speed + (Math.random() - 0.5) * 1.5;

//         life[idx] = lifeAttr[idx] = 1.0;
//       }

//       lastMouse.current.x = currentX;
//       lastMouse.current.y = currentY;

//       geometry.attributes.position.needsUpdate = true;
//       geometry.attributes.aLife.needsUpdate = true;
//     };

//     window.addEventListener("mousemove", onMouseMove);

//     // === Animation Loop ===
//     const animate = () => {
//       let activeCount = 0;

//       for (let i = 0; i < particleCount; i++) {
//         if (life[i] > 0) {
//           positions[i * 3] += velocities[i * 2];
//           positions[i * 3 + 1] += velocities[i * 2 + 1];

//           life[i] -= 0.015; // Slower fade
//           lifeAttr[i] = life[i];

//           // Friction
//           velocities[i * 2] *= 0.94;
//           velocities[i * 2 + 1] *= 0.94;

//           activeCount++;
//         } else {
//           positions[i * 3] = 0;
//           positions[i * 3 + 1] = 0;
//           lifeAttr[i] = 0;
//         }
//       }

//       geometry.attributes.position.needsUpdate = true;
//       geometry.attributes.aLife.needsUpdate = true;

//       // Optional: adjust opacity based on activity
//       material.uniforms.uOpacity.value = THREE.MathUtils.lerp(
//         0.6,
//         1.0,
//         activeCount / 100
//       );

//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     // === Resize ===
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

"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CursorEffect() {
  const containerRef = useRef(null);
  const lastMouse = useRef({ x: 0, y: 0 });
  const mouseVelocity = useRef({ x: 0, y: 0 });

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

    // === Particles ===
    const particleCount = 400;
    const geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 2);
    const life = new Float32Array(particleCount);
    const lifeAttr = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
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
    uniform float uSize;
    void main() {
      vLife = aLife;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = uSize * aLife;
    }
  `,
      fragmentShader: `
    varying float vLife;
    uniform vec3 uColor;
    uniform float uOpacity;
    void main() {
      if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
      gl_FragColor = vec4(uColor, uOpacity * vLife);
    }
  `,
      uniforms: {
        uSize: { value: 5 },
        uColor: { value: new THREE.Color(0x00ffff) },
        // uColor: { value: new THREE.Color(0xffffff) },
        uOpacity: { value: 1.0 },
      },
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // === Mouse Trail Logic ===
    let particleIndex = 0; // Round-robin index to avoid random gaps

    const onMouseMove = (e) => {
      const currentX = e.clientX - window.innerWidth / 2;
      const currentY = -(e.clientY - window.innerHeight / 2);

      // Calculate movement delta
      const dx = currentX - lastMouse.current.x;
      const dy = currentY - lastMouse.current.y;

      // Update velocity (smoothed)
      mouseVelocity.current.x = dx * 0.1;
      mouseVelocity.current.y = dy * 0.1;

      // === Spawn 3–5 particles per move in a tight cluster ===
      const spawnCount = Math.min(5, Math.floor(Math.hypot(dx, dy) / 10) + 1);

      for (let i = 0; i < spawnCount; i++) {
        const idx = particleIndex % particleCount;
        particleIndex++;

        // Spawn near cursor with small random offset
        const offsetX = (Math.random() - 0.5) * 8;
        const offsetY = (Math.random() - 0.5) * 8;

        positions[idx * 3] = currentX + offsetX;
        positions[idx * 3 + 1] = currentY + offsetY;

        // Velocity: follow mouse direction + randomness
        const speed = 1 + Math.random() * 2;
        velocities[idx * 2] =
          mouseVelocity.current.x * speed + (Math.random() - 0.5) * 1.5;
        velocities[idx * 2 + 1] =
          mouseVelocity.current.y * speed + (Math.random() - 0.5) * 1.5;

        life[idx] = lifeAttr[idx] = 1.0;
      }

      lastMouse.current.x = currentX;
      lastMouse.current.y = currentY;

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aLife.needsUpdate = true;
    };

    window.addEventListener("mousemove", onMouseMove);

    // === Animation Loop ===
    const animate = () => {
      let activeCount = 0;

      for (let i = 0; i < particleCount; i++) {
        if (life[i] > 0) {
          positions[i * 3] += velocities[i * 2];
          positions[i * 3 + 1] += velocities[i * 2 + 1];

          life[i] -= 0.015; // Slower fade
          lifeAttr[i] = life[i];

          // Friction
          velocities[i * 2] *= 0.94;
          velocities[i * 2 + 1] *= 0.94;

          activeCount++;
        } else {
          positions[i * 3] = 0;
          positions[i * 3 + 1] = 0;
          lifeAttr[i] = 0;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aLife.needsUpdate = true;

      // Optional: adjust opacity based on activity
      material.uniforms.uOpacity.value = THREE.MathUtils.lerp(
        0.6,
        1.0,
        activeCount / 100
      );

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // === Resize ===
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
