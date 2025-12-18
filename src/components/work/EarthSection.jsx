

// 'use client';

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from 'lenis';

// gsap.registerPlugin(ScrollTrigger);

// export default function EarthSection({ onComplete }) {
//   const mountRef = useRef(null);
//   const sectionRef = useRef(null);
//   const earthGroupRef = useRef(new THREE.Group());
//   const galleryGroupRef = useRef(new THREE.Group());
//   const cameraRef = useRef(null);
//   const rendererRef = useRef(null);
//   const imagesRef = useRef([]);
//   const text1Ref = useRef(null); // "Our Featured Work"
//   const text2Ref = useRef(null);
//   const typewriterRef = useRef(null);
//   const raycaster = useRef(new THREE.Raycaster());
// const mouse = useRef(new THREE.Vector2());
// const isOverEarth = useRef(false);


//  useEffect(() => {
//   let lenis;
//   let isDragging = false;
//   let previousMouseX = 0;
//   let velocity = 0;
//   let autoRotateSpeed = 0.1; // base auto-rotation speed

//   // === LENIS SETUP ===
//   lenis = new Lenis({
//     duration: 1.4,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     smooth: true,
//     smoothTouch: false,
//   });

//   lenis.on('scroll', ScrollTrigger.update);

//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });
//   gsap.ticker.lagSmoothing(0);

//   // === THREE.JS SETUP ===
//   const scene = new THREE.Scene();
//   scene.background = new THREE.Color(0x000000);

//   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//   camera.position.z = 5;
//   cameraRef.current = camera;

//   const renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   mountRef.current.appendChild(renderer.domElement);
//   rendererRef.current = renderer;

//   scene.add(earthGroupRef.current);
//   scene.add(galleryGroupRef.current);

//   // Load Earth Model (same as before)
//   const loader = new GLTFLoader();
//   loader.load(
//     '/earth (1).glb',
//     (gltf) => {
//       const model = gltf.scene;
//       model.traverse((child) => {
//         if (child.isMesh) {
//           child.castShadow = true;
//           child.receiveShadow = true;
//           if (child.material) {
//             child.material = new THREE.MeshStandardMaterial({
//               ...child.material,
//               roughness: 0.6,
//               metalness: 0.8,
//               envMapIntensity: 0.3,
//             });
//             if (child.material.map) {
//               child.material.map.colorSpace = THREE.SRGBColorSpace;
//             }
//           }
//         }
//       });

//       const box = new THREE.Box3().setFromObject(model);
//       const size = box.getSize(new THREE.Vector3());
//       const scale = 4 / Math.max(size.x, size.y, size.z);
//       model.scale.set(scale, scale, scale);
//       model.position.y = -0.5;
//       earthGroupRef.current.add(model);
//     },
//     undefined,
//     () => {
//       const sphere = new THREE.Mesh(
//         new THREE.SphereGeometry(2, 64, 64),
//         new THREE.MeshStandardMaterial({ color: 0x3399ff })
//       );
//       earthGroupRef.current.add(sphere);
//     }
//   );

//   // Lights
//   scene.add(new THREE.AmbientLight(0x404040, 2));
//   const light = new THREE.DirectionalLight(0xffffff, 4);
//   light.position.set(10, 10, 10);
//   scene.add(light);

//   // Gallery Images (same)
//   const urls = [
//     'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
//     'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
//     'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
//     'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
//     'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
//     'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200',
//   ];

//   urls.concat(urls).forEach((url, i) => {
//     new THREE.TextureLoader().load(url, (tex) => {
//       tex.colorSpace = THREE.SRGBColorSpace;
//       const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
//       const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), mat);
//       const angle = (i / 12) * Math.PI * 2;
//       mesh.position.set(Math.cos(angle) * 8, 2, Math.sin(angle) * 8);
//       mesh.lookAt(0, 2, 0);
//       galleryGroupRef.current.add(mesh);
//       imagesRef.current.push(mesh);
//     });
//   });

//   // Stars (same)
//   const starsGeo = new THREE.BufferGeometry();
//   const positions = [];
//   const sizes = [];
//   for (let i = 0; i < 3000; i++) {
//     const radius = 50 + Math.random() * 80;
//     const theta = Math.random() * Math.PI * 2;
//     const phi = Math.acos(2 * Math.random() - 1);
//     positions.push(
//       radius * Math.sin(phi) * Math.cos(theta),
//       radius * Math.sin(phi) * Math.sin(theta),
//       radius * Math.cos(phi)
//     );
//     sizes.push(Math.random() > 0.95 ? 4 : 1);
//   }
//   starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//   starsGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

//   const starsMat = new THREE.ShaderMaterial({
//     uniforms: { time: { value: 0 } },
//     vertexShader: `
//       attribute float size;
//       uniform float time;
//       void main() {
//         vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//         gl_PointSize = size * (1.0 + sin(time * 3.0 + position.y) * 0.5);
//         gl_Position = projectionMatrix * mvPosition;
//       }
//     `,
//     fragmentShader: `
//       void main() {
//         float dist = length(gl_PointCoord - vec2(0.5));
//         gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - smoothstep(0.0, 0.5, dist));
//       }
//     `,
//     transparent: true,
//     blending: THREE.AdditiveBlending,
//   });

//   const stars = new THREE.Points(starsGeo, starsMat);
//   scene.add(stars);

//   // === DRAG INTERACTION FOR EARTH + GALLERY ===
//   const handleMouseDown = (e) => {
//      if (!isOverEarth.current) return;
//   isDragging = true;
//   previousMouseX = e.clientX;
//   velocity = 0;
//   canvas.style.cursor = 'grabbing';
// };

//  const handleMouseMove = (e) => {
//   // Update mouse position for raycasting
//   mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//   mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  
//   // Check if mouse is over Earth
//   raycaster.current.setFromCamera(mouse.current, camera);
//   const intersects = raycaster.current.intersectObjects(earthGroupRef.current.children, true);
//   const isNowOverEarth = intersects.length > 0;
  
//   // Update cursor based on hover state
//   if (isNowOverEarth !== isOverEarth.current) {
//     canvas.style.cursor = isNowOverEarth ? 'grab' : 'default';
//     isOverEarth.current = isNowOverEarth;
//   }

//   // Only process drag if actually dragging and over Earth
//   if (!isDragging || !isOverEarth.current) return;

//   const deltaX = e.clientX - previousMouseX;
//   const rotationSpeed = 0.005;
//   const rotationY = deltaX * rotationSpeed;

//   earthGroupRef.current.rotation.y += rotationY;
//   galleryGroupRef.current.rotation.y += rotationY;

//   previousMouseX = e.clientX;
//   velocity = deltaX * 0.03;
// };

//   const handleMouseUp = () => {
//     isDragging = false;
//   };

//   // Touch support
//   const handleTouchStart = (e) => {
//   // Check if touch is over Earth
//   const touch = e.touches[0];
//   mouse.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
//   mouse.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
  
//   raycaster.current.setFromCamera(mouse.current, camera);
//   const intersects = raycaster.current.intersectObjects(earthGroupRef.current.children, true);
  
//   if (intersects.length > 0) {
//     isDragging = true;
//     previousMouseX = touch.clientX;
//     velocity = 0;
//     e.preventDefault(); // Prevent page scroll
//   }
// };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;
//     const deltaX = e.touches[0].clientX - previousMouseX;
//     const rotationY = deltaX * 0.005;

//     earthGroupRef.current.rotation.y += rotationY;
//     galleryGroupRef.current.rotation.y += rotationY;

//     previousMouseX = e.touches[0].clientX;
//     velocity = deltaX * 0.01; //0.03
//   };

//   const handleTouchEnd = () => {
//     isDragging = false;
//   };

//   // Add event listeners
//   const canvas = renderer.domElement;
//   canvas.addEventListener('mousedown', handleMouseDown);
//   window.addEventListener('mousemove', handleMouseMove);
//   window.addEventListener('mouseup', handleMouseUp);

//   canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
//   canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
//   canvas.addEventListener('touchend', handleTouchEnd);

//   // Typewriter text setup
//   const fullText = "We tell Stories the world remembers";
//   const chars = fullText.split('');
//   typewriterRef.current.innerHTML = chars.map(char => `<span style="opacity:0">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
//   const spans = typewriterRef.current.querySelectorAll('span');

//   // === GSAP SCROLLTRIGGER ===
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: sectionRef.current,
//       start: "top top",
//       end: "+=200%",
//       scrub: 1,
//       pin: true,
//       pinSpacing: true,
//       anticipatePin: 1,
//       invalidateOnRefresh: true,
//       onLeave: () => {
//         ScrollTrigger.getById(tl.scrollTrigger.id)?.disable();
//         onComplete?.();
//       },
//       onLeaveBack: () => {
//         ScrollTrigger.getById(tl.scrollTrigger.id)?.enable();
//       },
//       onUpdate: (self) => {
//         const p = self.progress;

//         // Controlled rotation from scroll (additive)
//         earthGroupRef.current.rotation.y = p * 4;
//         galleryGroupRef.current.rotation.y = p * 4; // sync gallery

//         earthGroupRef.current.position.y = -1.2 - p * 1.3;
//         earthGroupRef.current.scale.setScalar(1 + p * 0.6);

//         imagesRef.current.forEach(img => {
//           img.material.opacity = Math.max(0, 1 - p * 2.5);
//         });

//         const zoom = 1 + p * 0.4;
//         camera.position.z = 5 / zoom;
//         camera.fov = 75 / zoom;
//         camera.updateProjectionMatrix();

//         gsap.to(text1Ref.current, { opacity: Math.max(0, 1 - p * 4), y: -50 * p, duration: 0.3 });
//         gsap.to(text2Ref.current, {
//           opacity: p > 0.3 ? (p - 0.3) / 0.7 : 0,
//           y: p > 0.3 ? 0 : 50,
//           duration: 0.4
//         });

//         const typeProgress = gsap.utils.clamp(0, 1, (p - 0.4) / 0.5);
//         const visibleChars = Math.floor(typeProgress * spans.length);
//         spans.forEach((span, i) => {
//           span.style.opacity = i < visibleChars ? 1 : 0;
//         });

//         if (p > 0.98) onComplete?.();
//       },
//     }
//   });

//   setTimeout(() => ScrollTrigger.refresh(), 1000);

//   // === ANIMATION LOOP ===
//   const clock = new THREE.Clock();
//   const animate = () => {
//     requestAnimationFrame(animate);

//     const elapsed = clock.getElapsedTime();

//     // Auto-rotate + inertia from drag
//     if (!isDragging && Math.abs(velocity) > 0.001) {
//       const friction = 0.95;
//       earthGroupRef.current.rotation.y += velocity;
//       galleryGroupRef.current.rotation.y += velocity;
//       velocity *= friction;
//     } else if (!isDragging) {
//       // Normal auto-rotation when idle
//       const slowAutoSpeed = autoRotateSpeed * 0.03;
//       earthGroupRef.current.rotation.y += slowAutoSpeed;
//       galleryGroupRef.current.rotation.y += slowAutoSpeed;
//     }

//     starsMat.uniforms.time.value = elapsed;

//     renderer.render(scene, camera);
//   };

//   animate();

//   // Resize handler
//   const onResize = () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     ScrollTrigger.refresh();
//   };
//   window.addEventListener('resize', onResize);

//   // Cleanup
//   return () => {
//     lenis.destroy();
//     gsap.ticker.remove(lenis.raf);

//     canvas.removeEventListener('mousedown', handleMouseDown);
//     window.removeEventListener('mousemove', handleMouseMove);
//     window.removeEventListener('mouseup', handleMouseUp);
//     canvas.removeEventListener('touchstart', handleTouchStart);
//     canvas.removeEventListener('touchmove', handleTouchMove);
//     canvas.removeEventListener('touchend', handleTouchEnd);

//     window.removeEventListener('resize', onResize);
//     ScrollTrigger.getAll().forEach(st => st.kill());
//     renderer.dispose();
//   };
// }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         background: '#000',
//       }}
//     >
//       <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

//       {/* TEXT 1 - Bottom (fades out) */}
//       <h2
//         ref={text1Ref}
//         style={{
//           position: 'absolute',
//           bottom: '3%',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           color: 'white',
//           fontSize: 'clamp(3rem, 8vw, 7rem)',
//           fontWeight: 'bold',
//           textAlign: 'center',
//           pointerEvents: 'none',
//           zIndex: 10,
//           textShadow: '0 4px 30px rgba(0,0,0,0.8)',
//           whiteSpace: 'nowrap',
//           opacity: 1,
//         }}
//       >
//         Our Featured Work
//       </h2>

//       {/* TEXT 2 - Top (fades in) */}
//       <div
//         ref={text2Ref}
//         style={{
//           position: 'absolute',
//           top: '20%',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           color: 'white',
//           fontSize: 'clamp(1.8rem, 5vw, 5rem)',
//           fontWeight:'bolder',
//           textAlign: 'center',
//           pointerEvents: 'none',
//           zIndex: 10,
//           textShadow: '0 0 40px rgba(0,0,0,0.9)',
//           whiteSpace: 'nowrap',
//           opacity: 0,
//           letterSpacing: '0.01em',
//         }}
//       >
//        <div
//           ref={typewriterRef}
//           style={{
//             display: 'inline-block',
//             fontFamily: 'inherit',
//           }}
//         />
//         <style jsx>{`
//           span {
//             display: inline-block;
//             transition: opacity 0.01s;
//           }
//         `}</style>
//       </div>
     
//     </section>
//   );
// }




'use client';

import React, { useEffect, useRef ,useState} from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function EarthSection({ onComplete }) {
  const mountRef = useRef(null);
  const sectionRef = useRef(null);
  const earthGroupRef = useRef(new THREE.Group());
  const galleryGroupRef = useRef(new THREE.Group());
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const imagesRef = useRef([]);
  const text1Ref = useRef(null); // "Our Featured Work"
  const text2Ref = useRef(null);
  const typewriterRef = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
const mouse = useRef(new THREE.Vector2());
const isOverEarth = useRef(false);
const [windowSize, setWindowSize] = useState({
  width: typeof window !== 'undefined' ? window.innerWidth : 0,
  height: typeof window !== 'undefined' ? window.innerHeight : 0
});
const [isMobile, setIsMobile] = useState(false);
const isMobileRef = useRef(false);

useEffect(() => {
  // This code only runs on the client side
  const checkMobile = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    isMobileRef.current = mobile;
  };
  
  // Set initial state
  checkMobile();
  
  // Add event listener for window resize
  window.addEventListener('resize', checkMobile);
  
  return () => {
    window.removeEventListener('resize', checkMobile);
  };
}, []);
 useEffect(() => {
  let lenis;
  let isDragging = false;
  let previousMouseX = 0;
  let velocity = 0;
  let autoRotateSpeed = 0.1; // base auto-rotation speed

  // === LENIS SETUP ===
  lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // === THREE.JS SETUP ===
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  cameraRef.current = camera;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  mountRef.current.appendChild(renderer.domElement);
  rendererRef.current = renderer;

  scene.add(earthGroupRef.current);
  scene.add(galleryGroupRef.current);

  // Load Earth Model (same as before)
  const loader = new GLTFLoader();
loader.load(
  '/earth (1).glb',
  (gltf) => {
    const model = gltf.scene;
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material = new THREE.MeshStandardMaterial({
            ...child.material,
            roughness: 0.6,
            metalness: 0.8,
            envMapIntensity: 0.3,
          });
          if (child.material.map) {
            child.material.map.colorSpace = THREE.SRGBColorSpace;
          }
        }
      }
    });

    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const baseScale = 4 / Math.max(size.x, size.y, size.z);
    
    // Only apply mobile scaling if actually on mobile
     if (isMobileRef.current) {
      const scale = baseScale * 0.7;
      model.scale.set(scale, scale, scale);
      model.position.y = -0.4;
    } else {
      model.scale.set(baseScale, baseScale, baseScale);
      model.position.y = -0.5;
    }
    
    earthGroupRef.current.add(model);
  },
  undefined,
  () => {
    // Fallback sphere
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 64, 64),
      new THREE.MeshStandardMaterial({ color: 0x3399ff })
    );
    // Only scale down on mobile
    if (window.innerWidth < 768) {
      sphere.scale.setScalar(0.7);
    }
    earthGroupRef.current.add(sphere);
  }
);

  // Lights
  scene.add(new THREE.AmbientLight(0x404040, 2));
  const light = new THREE.DirectionalLight(0xffffff, 4);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Gallery Images (same)
  const urls = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200',
  ];

// In the main useEffect, where you create the gallery images:
urls.concat(urls).forEach((url, i) => {
  new THREE.TextureLoader().load(url, (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.MeshBasicMaterial({ 
      map: tex, 
      transparent: true, 
      side: THREE.DoubleSide 
    });
    
    // Adjust size based on screen width
    const size = isMobile ? 3 : 4; // Smaller size on mobile
    
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(size, size), // Use dynamic size
      mat
    );
    
    const angle = (i / 12) * Math.PI * 2;
    mesh.position.set(
      Math.cos(angle) * (isMobile ? 7 : 8), // Slightly closer on mobile
      2, 
      Math.sin(angle) * (isMobile ? 7 : 8)  // Slightly closer on mobile
    );
    mesh.lookAt(0, 2, 0);
    galleryGroupRef.current.add(mesh);
    imagesRef.current.push(mesh);
  });
});

  // Stars (same)
  const starsGeo = new THREE.BufferGeometry();
  const positions = [];
  const sizes = [];
  for (let i = 0; i < 3000; i++) {
    const radius = 50 + Math.random() * 80;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions.push(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
    sizes.push(Math.random() > 0.95 ? 4 : 1);
  }
  starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  starsGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

  const starsMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      attribute float size;
      uniform float time;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (1.0 + sin(time * 3.0 + position.y) * 0.5);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - smoothstep(0.0, 0.5, dist));
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });

  const stars = new THREE.Points(starsGeo, starsMat);
  scene.add(stars);

  // === DRAG INTERACTION FOR EARTH + GALLERY ===
  const handleMouseDown = (e) => {
     if (!isOverEarth.current) return;
  isDragging = true;
  previousMouseX = e.clientX;
  velocity = 0;
  canvas.style.cursor = 'grabbing';
};

 const handleMouseMove = (e) => {
  // Update mouse position for raycasting
  mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  
  // Check if mouse is over Earth
  raycaster.current.setFromCamera(mouse.current, camera);
  const intersects = raycaster.current.intersectObjects(earthGroupRef.current.children, true);
  const isNowOverEarth = intersects.length > 0;
  
  // Update cursor based on hover state
  if (isNowOverEarth !== isOverEarth.current) {
    canvas.style.cursor = isNowOverEarth ? 'grab' : 'default';
    isOverEarth.current = isNowOverEarth;
  }

  // Only process drag if actually dragging and over Earth
  if (!isDragging || !isOverEarth.current) return;

  const deltaX = e.clientX - previousMouseX;
  const rotationSpeed = 0.005;
  const rotationY = deltaX * rotationSpeed;

  earthGroupRef.current.rotation.y += rotationY;
  galleryGroupRef.current.rotation.y += rotationY;

  previousMouseX = e.clientX;
  velocity = deltaX * 0.03;
};

  const handleMouseUp = () => {
    isDragging = false;
  };

  // Touch support
  const handleTouchStart = (e) => {
  // Check if touch is over Earth
  const touch = e.touches[0];
  mouse.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
  mouse.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.current.setFromCamera(mouse.current, camera);
  const intersects = raycaster.current.intersectObjects(earthGroupRef.current.children, true);
  
  if (intersects.length > 0) {
    isDragging = true;
    previousMouseX = touch.clientX;
    velocity = 0;
    e.preventDefault(); // Prevent page scroll
  }
};

 const handleTouchMove = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const touch = e.touches[0];
  const deltaX = touch.clientX - previousMouseX;
  const rotationY = deltaX * (window.innerWidth < 768 ? 0.003 : 0.005); // Slower rotation on mobile

  earthGroupRef.current.rotation.y += rotationY;
  galleryGroupRef.current.rotation.y += rotationY;

  previousMouseX = touch.clientX;
  velocity = deltaX * (window.innerWidth < 768 ? 0.005 : 0.01);
};

  const handleTouchEnd = () => {
    isDragging = false;
  };

  // Add event listeners
  const canvas = renderer.domElement;
  canvas.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);

  canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
  canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
  canvas.addEventListener('touchend', handleTouchEnd);

  // Typewriter text setup
  const fullText = "We tell Stories the world remembers";
  const chars = fullText.split('');
  typewriterRef.current.innerHTML = chars.map(char => `<span style="opacity:0">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
  const spans = typewriterRef.current.querySelectorAll('span');

  // === GSAP SCROLLTRIGGER ===
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: window.innerWidth < 768 ? "+=300%" : "+=200%", // Longer scroll on mobile
    scrub: window.innerWidth < 768 ? 1.5 : 1, // Smoother scrub on mobile
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onLeave: () => {
        ScrollTrigger.getById(tl.scrollTrigger.id)?.disable();
        onComplete?.();
      },
      onLeaveBack: () => {
        ScrollTrigger.getById(tl.scrollTrigger.id)?.enable();
      },
      onUpdate: (self) => {
        const p = self.progress;
  const mobile = isMobileRef.current; // Use ref here since it's in a callback

        // Controlled rotation from scroll (additive)
        earthGroupRef.current.rotation.y = p * 4;
        galleryGroupRef.current.rotation.y = p * 4; // sync gallery

  earthGroupRef.current.position.y = mobile ? (-0.4 - p * 0.8) : (-1.2 - p * 1.3);
  earthGroupRef.current.scale.setScalar((1 + p * 0.6) * (mobile ? 0.8 : 1));

        imagesRef.current.forEach(img => {
          img.material.opacity = Math.max(0, 1 - p * 2.5);
        });

        const zoom = 1 + p * 0.4;
        camera.position.z = 5 / zoom;
        camera.fov = 75 / zoom;
        camera.updateProjectionMatrix();
const isMobile = window.innerWidth < 768;
  if (isMobile) {
    earthGroupRef.current.position.y = -0.8;
    const scale = 0.8;
    earthGroupRef.current.scale.set(scale, scale, scale);
    galleryGroupRef.current.scale.set(scale, scale, scale);
  }
        gsap.to(text1Ref.current, { opacity: Math.max(0, 1 - p * 4), y: -50 * p, duration: 0.3 });
        gsap.to(text2Ref.current, {
          opacity: p > 0.3 ? (p - 0.3) / 0.7 : 0,
          y: p > 0.3 ? 0 : 50,
          duration: 0.4
        });

        const typeProgress = gsap.utils.clamp(0, 1, (p - 0.4) / 0.5);
        const visibleChars = Math.floor(typeProgress * spans.length);
        spans.forEach((span, i) => {
          span.style.opacity = i < visibleChars ? 1 : 0;
        });

        if (p > 0.98) onComplete?.();
      },
    }
  });

  setTimeout(() => ScrollTrigger.refresh(), 1000);

  // === ANIMATION LOOP ===
  const clock = new THREE.Clock();
  const animate = () => {
    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    // Auto-rotate + inertia from drag
    if (!isDragging && Math.abs(velocity) > 0.001) {
      const friction = 0.95;
      earthGroupRef.current.rotation.y += velocity;
      galleryGroupRef.current.rotation.y += velocity;
      velocity *= friction;
    } else if (!isDragging) {
      // Normal auto-rotation when idle
      const slowAutoSpeed = autoRotateSpeed * 0.03;
      earthGroupRef.current.rotation.y += slowAutoSpeed;
      galleryGroupRef.current.rotation.y += slowAutoSpeed;
    }

    starsMat.uniforms.time.value = elapsed;

    renderer.render(scene, camera);
  };

  animate();

  // Resize handler
const onResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const mobile = width < 768;
  
  setWindowSize({ width, height });
  
  // Update camera FOV based on screen size
  camera.fov = mobile ? 80 : 75;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  // Adjust renderer size
  renderer.setSize(width, height);
  
  // Adjust Earth and gallery scale
  const scale = mobile ? 0.8 : 1;
  if (earthGroupRef.current) {
    earthGroupRef.current.scale.set(scale, scale, scale);
    galleryGroupRef.current.scale.set(scale, scale, scale);
  }
  
  // Adjust camera position
  camera.position.z = mobile ? 6 : 5;
  
  ScrollTrigger.refresh();
};
  window.addEventListener('resize', onResize);

  // Cleanup
  return () => {
    lenis.destroy();
    gsap.ticker.remove(lenis.raf);

    canvas.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    canvas.removeEventListener('touchstart', handleTouchStart);
    canvas.removeEventListener('touchmove', handleTouchMove);
    canvas.removeEventListener('touchend', handleTouchEnd);

    window.removeEventListener('resize', onResize);
    ScrollTrigger.getAll().forEach(st => st.kill());
    renderer.dispose();
  };
}, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

      {/* TEXT 1 - Bottom (fades out) */}
      <h2
        ref={text1Ref}
        style={{
          position: 'absolute',
          bottom: isMobile ? '12%' : '3%',
          left: isMobile?'50%%':'50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: isMobile ? 'clamp(2rem, 6vw, 5rem)' : 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 'bold',
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 10,
          textShadow: '0 4px 30px rgba(0,0,0,0.8)',
          whiteSpace: 'nowrap',
          opacity: 1,
        }}
      >
        Our Featured Work
      </h2>

      {/* TEXT 2 - Top (fades in) */}
      <div
        ref={text2Ref}
        style={{
          position: 'absolute',
          top: '20%',
          left: isMobile?'50%':'30%',
          transform: 'translateX(-50%)',
          color: 'white',
    fontSize: isMobile ? 'clamp(1.1rem, 3vw, 2.5rem)' : 'clamp(1.8rem, 6vw, 5rem)',
          fontWeight:'bolder',
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 10,
          textShadow: '0 0 40px rgba(0,0,0,0.9)',
    whiteSpace: isMobile ? 'normal' : 'nowrap',  // Allow text to wrap on mobile
          opacity: 0,
              width: isMobile ? '90%' : 'auto',  // Constrain width on mobile
    maxWidth: '800px',  // Prevent text from becoming too wide
    padding: isMobile ? '0 15px' : '0' , // Add padding on mobile

          letterSpacing: '0.01em',
        }}
      >
       <div
          ref={typewriterRef}
          style={{
            display: 'inline-block',
            fontFamily: 'inherit',
             textAlign: 'center',
      width: '100%' 
          }}
        />
        <style jsx>{`
          span {
            display: inline-block;
            transition: opacity 0.01s;
          }
        `}</style>
      </div>
     
    </section>
  );
}