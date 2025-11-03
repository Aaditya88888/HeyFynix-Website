// "use client";

// import { useEffect, useState, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Button from "../Button/Button";

// const Work = () => {
//   const [imgs, setImgs] = useState([
//     "https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg",
//     "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg",
//     "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
//     "https://images.pexels.com/photos/34410855/pexels-photo-34410855.jpeg",
//     "https://images.pexels.com/photos/33430991/pexels-photo-33430991.jpeg",
//   ]);

//   const containerRef = useRef(null);
//   const isAnimating = useRef(false);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const duration = 1000;

//     ScrollTrigger.create({
//       trigger: ".image-container",
//       start: "top top",
//       end: `+=${duration}`,
//       pin: true,
//       scrub: true,
//     });

//     gsap.to(".center", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       width: "30vw",
//       height: "40vh",
//     });

//     gsap.to(".left", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       x: "0",
//       opacity: 1,
//     });

//     gsap.to(".right", {
//       scrollTrigger: {
//         trigger: ".image-container",
//         start: "top top",
//         end: `+=${duration}`,
//         scrub: true,
//       },
//       x: "0",
//       opacity: 1,
//     });
//   }, []);

//   // ✅ Smooth + black-gap-free slide
//   const slide = (direction) => {
//     if (isAnimating.current) return;
//     isAnimating.current = true;

//     const slides = containerRef.current.querySelectorAll(".slide");
//     const moveX = direction === "right" ? -100 : 100;

//     const tl = gsap.timeline({
//       defaults: { duration: 0.8, ease: "power2.inOut" },
//       onComplete: () => {
//         setImgs((prev) => {
//           const updated = [...prev];
//           if (direction === "right") {
//             const first = updated.shift();
//             updated.push(first);
//           } else {
//             const last = updated.pop();
//             updated.unshift(last);
//           }
//           return updated;
//         });

//         // Wait until the DOM updates and then run the "new image" slide-in
//         requestAnimationFrame(() => {
//           const newSlides = containerRef.current.querySelectorAll(".slide");

//           if (direction === "right") {
//             // place new right image off-screen first
//             gsap.set(newSlides[2], { xPercent: 100, opacity: 0 });
//             gsap.to(newSlides[2], {
//               xPercent: 0,
//               opacity: 1,
//               duration: 0.8,
//               ease: "power2.inOut",
//               onComplete: () => (isAnimating.current = false),
//             });
//           } else {
//             // place new left image off-screen first
//             gsap.set(newSlides[0], { xPercent: -100, opacity: 0 });
//             gsap.to(newSlides[0], {
//               xPercent: 0,
//               opacity: 1,
//               duration: 0.8,
//               ease: "power2.inOut",
//               onComplete: () => (isAnimating.current = false),
//             });
//           }
//         });
//       },
//     });

//     tl.to(slides, { xPercent: moveX });
//   };

//   const handleNext = () => slide("right");
//   const handlePrev = () => slide("left");

//   return (
//     <div className="overflow-x-hidden bg-black m-0 text-white">
//       <div className="text-center py-16 px-6 md:px-12">
//         <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] font-bold mb-4">
//           Work
//         </h1>
//         <h2 className="text-[2.5vw] sm:text-[2vw] md:text-[1.8vw] font-semibold mb-4">
//           Stuff We’re Super Proud Of
//         </h2>
//         <p className="text-[1.3vw] sm:text-[1.1vw] md:text-[1vw] text-gray-300 max-w-4xl mx-auto leading-relaxed">
//           We’re proud of the problems we’ve solved and the stories we’ve told.
//           From bold branding to immersive films for established brands, our
//           portfolio reflects our commitment to excellence. Here's a peek at what
//           we’ve been up to:
//         </p>
//       </div>

//       {/* ✅ Image Section */}
//       <div
//         ref={containerRef}
//         className="image-container flex justify-center items-center gap-5 h-screen overflow-hidden relative"
//       >
//         {/* Left image */}
//         <img
//           className="slide left flex-shrink-0 w-[30vw] h-[40vh] -translate-x-[100vw] opacity-0 object-cover"
//           src={imgs[0]}
//           alt="Image 1"
//         />

//         {/* Center image */}
//         <div className="slide center flex-shrink-0 w-[90vw] h-[90vh] opacity-100 relative overflow-hidden">
//           <img
//             className="w-full h-full object-cover"
//             src={imgs[1]}
//             alt="Image 2"
//           />

//           {/* Navigation Buttons */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
//           >
//             <ChevronLeft size={28} />
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
//           >
//             <ChevronRight size={28} />
//           </button>
//         </div>

//         {/* Right image */}
//         <img
//           className="slide right flex-shrink-0 w-[30vw] h-[40vh] translate-x-[100vw] opacity-0 object-cover"
//           src={imgs[2]}
//           alt="Image 3"
//         />
//       </div>

//       {/* ✅ Button Section */}
//       <div className="button-container flex justify-center items-center py-16">
//         <Button />
//       </div>
//     </div>
//   );
// };

// export default Work;
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CursorEffect() {
  const containerRef = useRef(null);
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // === Setup ===
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
    const particleCount = 1500;
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
        uniform float uSize;
        void main() {
          vLife = aLife;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPos;
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
        uSize: { value: 4 },
        uColor: { value: new THREE.Color(0x00ffff) },
        uOpacity: { value: 1.0 },
      },
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // === Mouse Trail ===
    let particleIndex = 0;
    const FIXED_SPEED = 3.0; // ← This controls how far particles go

    const onMouseMove = (e) => {
      const curX = e.clientX - window.innerWidth / 2;
      const curY = -(e.clientY - window.innerHeight / 2);

      const dx = curX - lastMouse.current.x;
      const dy = curY - lastMouse.current.y;

      // Only use direction, not magnitude
      const len = Math.hypot(dx, dy);
      if (len < 2) return; // ignore tiny moves

      const dirX = dx / len;
      const dirY = dy / len;

      // Spawn 1–3 particles per move
      const spawnCount = len > 20 ? 3 : len > 10 ? 2 : 1;

      for (let i = 0; i < spawnCount; i++) {
        const idx = particleIndex % particleCount;
        particleIndex++;

        // Start exactly at cursor
        positions[idx * 3] = curX;
        positions[idx * 3 + 1] = curY;

        // Fixed speed in mouse direction
        velocities[idx * 2] = dirX * FIXED_SPEED;
        velocities[idx * 2 + 1] = dirY * FIXED_SPEED;

        life[idx] = lifeAttr[idx] = 1.0;
      }

      lastMouse.current.x = curX;
      lastMouse.current.y = curY;

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aLife.needsUpdate = true;
    };

    window.addEventListener("mousemove", onMouseMove);

    // === Animate ===
    const animate = () => {
      for (let i = 0; i < particleCount; i++) {
        if (life[i] > 0) {
          positions[i * 3] += velocities[i * 2];
          positions[i * 3 + 1] += velocities[i * 2 + 1];

          life[i] -= 0.02;
          lifeAttr[i] = life[i];

          // NO FRICTION — KEEP FULL SPEED
        } else {
          positions[i * 3] = positions[i * 3 + 1] = 0;
          lifeAttr[i] = 0;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.aLife.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // === Resize ===
    const onResize = () => {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
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
