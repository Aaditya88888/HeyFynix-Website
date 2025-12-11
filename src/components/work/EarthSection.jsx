

// // 'use client';
// // import React, { useEffect, useRef } from 'react';
// // import * as THREE from 'three';
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import Lenis from 'lenis';

// // gsap.registerPlugin(ScrollTrigger);

// // export default function EarthSection({ onComplete }) {
// //   const mountRef = useRef(null);
// //   const sectionRef = useRef(null);
// //   const earthGroupRef = useRef(new THREE.Group());
// //   const galleryGroupRef = useRef(new THREE.Group());
// //   const cameraRef = useRef(null);
// //   const rendererRef = useRef(null);
// //   const imagesRef = useRef([]);
// //   const text1Ref = useRef(null);
// //   const text2Ref = useRef(null);
// //   const typewriterRef = useRef(null);

// //   // Drag state
// //   const isDragging = useRef(false);
// //   const previousMouseX = useRef(0);
// //   const rotationVelocity = useRef(0);
// //   const targetRotationY = useRef(0);

// //   // Config
// //   const DRAG_SENSITIVITY = 0.005;
// //   const INERTIA_DAMPING = 0.94;
// //   const AUTO_ROTATE_SPEED = 0.03; // radians/sec

// //   useEffect(() => {
// //     let lenis;

// //     // === LENIS SMOOTH SCROLL ===
// //     lenis = new Lenis({
// //       duration: 1.4,
// //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //       smooth: true,
// //       smoothTouch: false,
// //     });
// //     lenis.on('scroll', ScrollTrigger.update);
// //     gsap.ticker.add((time) => lenis.raf(time * 1000));
// //     gsap.ticker.lagSmoothing(0);

// //     // === THREE.JS SETUP ===
// //     const scene = new THREE.Scene();
// //     scene.background = new THREE.Color(0x000000);

// //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //     camera.position.z = 5;
// //     cameraRef.current = camera;

// //     const renderer = new THREE.WebGLRenderer({ antialias: true });
// //     renderer.setPixelRatio(window.devicePixelRatio);
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     mountRef.current.appendChild(renderer.domElement);
// //     rendererRef.current = renderer;

// //     scene.add(earthGroupRef.current);
// //     scene.add(galleryGroupRef.current);

// //     // === LOAD EARTH MODEL ===
// //     const loader = new GLTFLoader();
// //     loader.load(
// //       '/earth (1).glb',
// //       (gltf) => {
// //         const model = gltf.scene;
// //         model.traverse((child) => {
// //           if (child.isMesh) {
// //             child.castShadow = true;
// //             child.receiveShadow = true;
// //             if (child.material) {
// //               child.material = new THREE.MeshStandardMaterial({
// //                 ...child.material,
// //                 roughness: 0.6,
// //                 metalness: 0.8,
// //                 envMapIntensity: 0.3,
// //               });
// //               if (child.material.map) {
// //                 child.material.map.colorSpace = THREE.SRGBColorSpace;
// //               }
// //             }
// //           }
// //         });

// //         const box = new THREE.Box3().setFromObject(model);
// //         const size = box.getSize(new THREE.Vector3());
// //         const scale = 4 / Math.max(size.x, size.y, size.z);
// //         model.scale.set(scale, scale, scale);
// //         model.position.y = -0.5;
// //         earthGroupRef.current.add(model);
// //       },
// //       undefined,
// //       () => {
// //         // Fallback blue sphere
// //         const sphere = new THREE.Mesh(
// //           new THREE.SphereGeometry(2, 64, 64),
// //           new THREE.MeshStandardMaterial({ color: 0x3399ff })
// //         );
// //         earthGroupRef.current.add(sphere);
// //       }
// //     );

// //     // === LIGHTING ===
// //     scene.add(new THREE.AmbientLight(0x404040, 2));
// //     const light = new THREE.DirectionalLight(0xffffff, 4);
// //     light.position.set(10, 10, 10);
// //     scene.add(light);

// //     // === GALLERY RING ===
// //     const urls = [
// //       'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
// //       'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
// //       'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
// //       'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
// //       'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
// //       'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200',
// //     ];

// //     urls.concat(urls).forEach((url, i) => {
// //       new THREE.TextureLoader().load(url, (tex) => {
// //         tex.colorSpace = THREE.SRGBColorSpace;
// //         const mat = new THREE.MeshBasicMaterial({
// //           map: tex,
// //           transparent: true,
// //           side: THREE.DoubleSide,
// //         });
// //         const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), mat);
// //         const angle = (i / 12) * Math.PI * 2;
// //         mesh.position.set(Math.cos(angle) * 8, 2, Math.sin(angle) * 8);
// //         mesh.lookAt(0, 2, 0);
// //         galleryGroupRef.current.add(mesh);
// //         imagesRef.current.push(mesh);
// //       });
// //     });

// //     // === STARS ===
// //     const starsGeo = new THREE.BufferGeometry();
// //     const positions = [];
// //     const sizes = [];
// //     for (let i = 0; i < 3000; i++) {
// //       const radius = 50 + Math.random() * 80;
// //       const theta = Math.random() * Math.PI * 2;
// //       const phi = Math.acos(2 * Math.random() - 1);
// //       positions.push(
// //         radius * Math.sin(phi) * Math.cos(theta),
// //         radius * Math.sin(phi) * Math.sin(theta),
// //         radius * Math.cos(phi)
// //       );
// //       sizes.push(Math.random() > 0.95 ? 4 : 1);
// //     }
// //     starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
// //     starsGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

// //     const starsMat = new THREE.ShaderMaterial({
// //       uniforms: { time: { value: 0 } },
// //       vertexShader: `
// //         attribute float size;
// //         uniform float time;
// //         void main() {
// //           vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
// //           gl_PointSize = size * (1.0 + sin(time * 3.0 + position.y) * 0.5);
// //           gl_Position = projectionMatrix * mvPosition;
// //         }
// //       `,
// //       fragmentShader: `
// //         void main() {
// //           float dist = length(gl_PointCoord - vec2(0.5));
// //           gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - smoothstep(0.0, 0.5, dist));
// //         }
// //       `,
// //       transparent: true,
// //       blending: THREE.AdditiveBlending,
// //     });
// //     scene.add(new THREE.Points(starsGeo, starsMat));

// //     // === TYPEWRITER TEXT ===
// //     const fullText = "We tell Stories the world remembers";
// //     const chars = fullText.split('');
// //     if (typewriterRef.current) {
// //       typewriterRef.current.innerHTML = chars
// //         .map((char) => `<span style="opacity:0">${char === ' ' ? '&nbsp;' : char}</span>`)
// //         .join('');
// //     }
// //     const spans = typewriterRef.current?.querySelectorAll('span') || [];

// //     // === DRAG TO ROTATE (Earth + Gallery together) ===
// //     const canvas = renderer.domElement;
// //     canvas.style.touchAction = 'none';
// //     canvas.style.cursor = 'grab';

// //     const handlePointerDown = (e) => {
// //       isDragging.current = true;
// //       canvas.style.cursor = 'grabbing';
// //       previousMouseX.current = e.clientX || e.touches[0].clientX;
// //       rotationVelocity.current = 0;
// //     };

// //     const handlePointerMove = (e) => {
// //       if (!isDragging.current) return;
// //       const clientX = e.clientX || (e.touches && e.touches[0].clientX);
// //       const deltaX = clientX - previousMouseX.current;
// //       previousMouseX.current = clientX;

// //       const deltaRotation = deltaX * DRAG_SENSITIVITY;
// //       rotationVelocity.current = deltaRotation;
// //       targetRotationY.current += deltaRotation;
// //     };

// //     const handlePointerUp = () => {
// //       isDragging.current = false;
// //       canvas.style.cursor = 'grab';
// //     };

// //     canvas.addEventListener('pointerdown', handlePointerDown);
// //     window.addEventListener('pointermove', handlePointerMove);
// //     window.addEventListener('pointerup', handlePointerUp);
// //     window.addEventListener('pointerleave', handlePointerUp);

// //     // === SCROLLTRIGGER TIMELINE ===
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: sectionRef.current,
// //         start: 'top top',
// //         end: '+=200%',
// //         scrub: 1,
// //         pin: true,
// //         pinSpacing: true,
// //         anticipatePin: 1,
// //         invalidateOnRefresh: true,
// //         onLeave: () => {
// //           ScrollTrigger.getById(tl.scrollTrigger.id)?.disable();
// //           onComplete?.();
// //         },
// //         onLeaveBack: () => {
// //           ScrollTrigger.getById(tl.scrollTrigger.id)?.enable();
// //         },
// //         onUpdate: (self) => {
// //           const p = self.progress;

// //           earthGroupRef.current.rotation.y = p * 4;
// //           earthGroupRef.current.position.y = -1.2 - p * 1.3;
// //           earthGroupRef.current.scale.setScalar(1 + p * 0.6);

// //           imagesRef.current.forEach((img) => {
// //             img.material.opacity = Math.max(0, 1 - p * 2.5);
// //           });

// //           const zoom = 1 + p * 0.4;
// //           camera.position.z = 5 / zoom;
// //           camera.fov = 75 / zoom;
// //           camera.updateProjectionMatrix();

// //           gsap.to(text1Ref.current, { opacity: Math.max(0, 1 - p * 4), y: -50 * p, duration: 0.3 });
// //           gsap.to(text2Ref.current, {
// //             opacity: p > 0.3 ? (p - 0.3) / 0.7 : 0,
// //             y: p > 0.3 ? 0 : 50,
// //             duration: 0.4,
// //           });

// //           const typeProgress = gsap.utils.clamp(0, 1, (p - 0.4) / 0.5);
// //           const visibleChars = Math.floor(typeProgress * spans.length);
// //           spans.forEach((span, i) => {
// //             span.style.opacity = i < visibleChars ? 1 : 0;
// //           });

// //           if (p > 0.98) onComplete?.();
// //         },
// //       },
// //     });

// //     // === ANIMATION LOOP ===
// //     const clock = new THREE.Clock();
// //     const animate = () => {
// //       requestAnimationFrame(animate);
// //       const deltaTime = clock.getDelta();

// //       // Auto-rotate + inertia when not dragging
// //       if (!isDragging.current) {
// //         targetRotationY.current += AUTO_ROTATE_SPEED * deltaTime;
// //         rotationVelocity.current *= INERTIA_DAMPING;
// //         targetRotationY.current += rotationVelocity.current;
// //         if (Math.abs(rotationVelocity.current) < 0.0001) rotationVelocity.current = 0;
// //       }

// //       // Smoothly follow target rotation
// //       const lerp = 0.1;
// //       earthGroupRef.current.rotation.y += (targetRotationY.current - earthGroupRef.current.rotation.y) * lerp;
// //       galleryGroupRef.current.rotation.y += (targetRotationY.current - galleryGroupRef.current.rotation.y) * lerp;

// //       starsMat.uniforms.time.value = clock.getElapsedTime();
// //       renderer.render(scene, camera);
// //     };
// //     animate();

// //     // === RESIZE ===
// //     const onResize = () => {
// //       camera.aspect = window.innerWidth / window.innerHeight;
// //       camera.updateProjectionMatrix();
// //       renderer.setSize(window.innerWidth, window.innerHeight);
// //       ScrollTrigger.refresh();
// //     };
// //     window.addEventListener('resize', onResize);

// //     // === CLEANUP ===
// //     return () => {
// //       lenis.destroy();
// //       gsap.ticker.remove(lenis.raf);
// //       window.removeEventListener('resize', onResize);
// //       canvas.removeEventListener('pointerdown', handlePointerDown);
// //       window.removeEventListener('pointermove', handlePointerMove);
// //       window.removeEventListener('pointerup', handlePointerUp);
// //       window.removeEventListener('pointerleave', handlePointerUp);
// //       ScrollTrigger.getAll().forEach((st) => st.kill());
// //       renderer.dispose();
// //       mountRef.current?.removeChild(renderer.domElement);
// //     };
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       style={{
// //         position: 'relative',
// //         width: '100vw',
// //         height: '100vh',
// //         overflow: 'hidden',
// //         background: '#000',
// //       }}
// //     >
// //       <div
// //         ref={mountRef}
// //         style={{
// //           position: 'absolute',
// //           inset: 0,
// //           cursor: 'grab',
// //         }}
// //       />

// //       <h2
// //         ref={text1Ref}
// //         style={{
// //           position: 'absolute',
// //           bottom: '3%',
// //           left: '50%',
// //           transform: 'translateX(-50%)',
// //           color: 'white',
// //           fontSize: 'clamp(3rem, 8vw, 7rem)',
// //           fontWeight: 'bold',
// //           textAlign: 'center',
// //           pointerEvents: 'none',
// //           zIndex: 10,
// //           textShadow: '0 4px 30px rgba(0,0,0,0.8)',
// //           whiteSpace: 'nowrap',
// //         }}
// //       >
// //         Our Featured Work
// //       </h2>

// //       <div
// //         ref={text2Ref}
// //         style={{
// //           position: 'absolute',
// //           top: '20%',
// //           left: '50%',
// //           transform: 'translateX(-50%)',
// //           color: 'white',
// //           fontSize: 'clamp(1.8rem, 5vw, 5rem)',
// //           fontWeight: 'bolder',
// //           textAlign: 'center',
// //           pointerEvents: 'none',
// //           zIndex: 10,
// //           textShadow: '0 0 40px rgba(0,0,0,0.9)',
// //           whiteSpace: 'nowrap',
// //           opacity: 0,
// //           letterSpacing: '0.01em',
// //         }}
// //       >
// //         <div ref={typewriterRef} style={{ display: 'inline-block' }} />
// //         <style jsx>{`
// //           span {
// //             display: inline-block;
// //             transition: opacity 0.1s ease-out;
// //           }
// //         `}</style>
// //       </div>
// //     </section>
// //   );
// // }


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
//   const text1Ref = useRef(null);
//   const text2Ref = useRef(null);
//   const typewriterRef = useRef(null);

//   // Drag state
//   const isDragging = useRef(false);
//   const previousMouseX = useRef(0);
//   const rotationVelocity = useRef(0);
//   const targetRotationY = useRef(0);

//   // Interaction helpers
//   const raycaster = useRef(new THREE.Raycaster());
//   const mouse = useRef(new THREE.Vector2());

//   // Config
//   const DRAG_SENSITIVITY = 0.005;
//   const INERTIA_DAMPING = 0.94;
//   const AUTO_ROTATE_SPEED = 0.03;

//   useEffect(() => {
//     let lenis;

//     // === LENIS SETUP ===
//     lenis = new Lenis({
//       duration: 1.4,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//       smoothTouch: false,
//     });
//     lenis.on('scroll', ScrollTrigger.update);
//     gsap.ticker.add((time) => lenis.raf(time * 1000));
//     gsap.ticker.lagSmoothing(0);

//     // === THREE.JS SETUP ===
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);

//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;
//     cameraRef.current = camera;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     scene.add(earthGroupRef.current);
//     scene.add(galleryGroupRef.current);

//     // === LOAD EARTH MODEL ===
//     const loader = new GLTFLoader();
//     loader.load(
//       '/earth (1).glb',
//       (gltf) => {
//         const model = gltf.scene;
//         model.traverse((child) => {
//           if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//             if (child.material) {
//               child.material = new THREE.MeshStandardMaterial({
//                 ...child.material,
//                 roughness: 0.6,
//                 metalness: 0.8,
//                 envMapIntensity: 0.3,
//               });
//               if (child.material.map) {
//                 child.material.map.colorSpace = THREE.SRGBColorSpace;
//               }
//             }
//           }
//         });

//         const box = new THREE.Box3().setFromObject(model);
//         const size = box.getSize(new THREE.Vector3());
//         const scale = 4 / Math.max(size.x, size.y, size.z);
//         model.scale.set(scale, scale, scale);
//         model.position.y = -0.5;
//         earthGroupRef.current.add(model);
//       },
//       undefined,
//       () => {
//         const sphere = new THREE.Mesh(
//           new THREE.SphereGeometry(2, 64, 64),
//           new THREE.MeshStandardMaterial({ color: 0x3399ff })
//         );
//         earthGroupRef.current.add(sphere);
//       }
//     );

//     // === LIGHTING ===
//     scene.add(new THREE.AmbientLight(0x404040, 2));
//     const light = new THREE.DirectionalLight(0xffffff, 4);
//     light.position.set(10, 10, 10);
//     scene.add(light);

//     // === GALLERY RING ===
//     const urls = [
//       'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
//       'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
//       'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
//       'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
//       'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
//       'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200',
//     ];

//     urls.concat(urls).forEach((url, i) => {
//       new THREE.TextureLoader().load(url, (tex) => {
//         tex.colorSpace = THREE.SRGBColorSpace;
//         const mat = new THREE.MeshBasicMaterial({
//           map: tex,
//           transparent: true,
//           side: THREE.DoubleSide,
//         });
//         const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), mat);
//         const angle = (i / 12) * Math.PI * 2;
//         mesh.position.set(Math.cos(angle) * 8, 2, Math.sin(angle) * 8);
//         mesh.lookAt(0, 2, 0);
//         galleryGroupRef.current.add(mesh);
//         imagesRef.current.push(mesh);
//       });
//     });

//     // === STARS ===
//     const starsGeo = new THREE.BufferGeometry();
//     const positions = [];
//     const sizes = [];
//     for (let i = 0; i < 3000; i++) {
//       const radius = 50 + Math.random() * 80;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
//       positions.push(
//         radius * Math.sin(phi) * Math.cos(theta),
//         radius * Math.sin(phi) * Math.sin(theta),
//         radius * Math.cos(phi)
//       );
//       sizes.push(Math.random() > 0.95 ? 4 : 1);
//     }
//     starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
//     starsGeo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

//     const starsMat = new THREE.ShaderMaterial({
//       uniforms: { time: { value: 0 } },
//       vertexShader: `
//         attribute float size;
//         uniform float time;
//         void main() {
//           vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//           gl_PointSize = size * (1.0 + sin(time * 3.0 + position.y) * 0.5);
//           gl_Position = projectionMatrix * mvPosition;
//         }
//       `,
//       fragmentShader: `
//         void main() {
//           float dist = length(gl_PointCoord - vec2(0.5));
//           gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - smoothstep(0.0, 0.5, dist));
//         }
//       `,
//       transparent: true,
//       blending: THREE.AdditiveBlending,
//     });
//     scene.add(new THREE.Points(starsGeo, starsMat));

//     // === TYPEWRITER SETUP ===
//     const fullText = "We tell Stories the world remembers";
//     const chars = fullText.split('');
//     if (typewriterRef.current) {
//       typewriterRef.current.innerHTML = chars
//         .map((char) => `<span style="opacity:0">${char === ' ' ? '&nbsp;' : char}</span>`)
//         .join('');
//     }
//     const spans = typewriterRef.current?.querySelectorAll('span') || [];

//     // === DRAG ONLY ON EARTH ===
//     const canvas = renderer.domElement;
//     canvas.style.touchAction = 'none';

//     const handlePointerDown = (e) => {
//       mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

//       raycaster.current.setFromCamera(mouse.current, camera);

//       const intersects = raycaster.current.intersectObjects(earthGroupRef.current.children, true);

//       if (intersects.length > 0) {
//         isDragging.current = true;
//         canvas.style.cursor = 'grabbing';
//         previousMouseX.current = e.clientX;
//         rotationVelocity.current = 0;
//       }
//     };

//     const handlePointerMove = (e) => {
//       if (!isDragging.current) return;

//       const deltaX = e.clientX - previousMouseX.current;
//       previousMouseX.current = e.clientX;

//       const deltaRotation = deltaX * DRAG_SENSITIVITY;
//       rotationVelocity.current = deltaRotation;
//       targetRotationY.current += deltaRotation;
//     };

//     const handlePointerUp = () => {
//       if (isDragging.current) {
//         isDragging.current = false;
//         canvas.style.cursor = 'default';
//       }
//     };

//     canvas.addEventListener('pointerdown', handlePointerDown);
//     window.addEventListener('pointermove', handlePointerMove);
//     window.addEventListener('pointerup', handlePointerUp);
//     window.addEventListener('pointerleave', handlePointerUp);

//     // === SCROLLTRIGGER ===
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: 'top top',
//         end: '+=200%',
//         scrub: 1,
//         pin: true,
//         pinSpacing: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         onLeave: () => {
//           ScrollTrigger.getById(tl.scrollTrigger.id)?.disable();
//           onComplete?.();
//         },
//         onLeaveBack: () => {
//           ScrollTrigger.getById(tl.scrollTrigger.id)?.enable();
//         },
//         onUpdate: (self) => {
//           const p = self.progress;

//           earthGroupRef.current.rotation.y = p * 4;
//           earthGroupRef.current.position.y = -1.2 - p * 1.3;
//           earthGroupRef.current.scale.setScalar(1 + p * 0.6);

//           imagesRef.current.forEach((img) => {
//             img.material.opacity = Math.max(0, 1 - p * 2.5);
//           });

//           const zoom = 1 + p * 0.4;
//           camera.position.z = 5 / zoom;
//           camera.fov = 75 / zoom;
//           camera.updateProjectionMatrix();

//           gsap.to(text1Ref.current, { opacity: Math.max(0, 1 - p * 4), y: -50 * p, duration: 0.3 });
//           gsap.to(text2Ref.current, {
//             opacity: p > 0.3 ? (p - 0.3) / 0.7 : 0,
//             y: p > 0.3 ? 0 : 50,
//             duration: 0.4,
//           });

//           const typeProgress = gsap.utils.clamp(0, 1, (p - 0.4) / 0.5);
//           const visibleChars = Math.floor(typeProgress * spans.length);
//           spans.forEach((span, i) => {
//             span.style.opacity = i < visibleChars ? 1 : 0;
//           });

//           if (p > 0.98) onComplete?.();
//         },
//       },
//     });

//     // === ANIMATION LOOP ===
//     const clock = new THREE.Clock();
//     const animate = () => {
//       requestAnimationFrame(animate);
//       const deltaTime = clock.getDelta();

//       // Hover cursor (only show grab when over Earth)
//       if (!isDragging.current) {
//         raycaster.current.setFromCamera(mouse.current, camera);
//         const intersects = raycaster.current.intersectObjects(earthGroupRef.current.children, true);
//         canvas.style.cursor = intersects.length > 0 ? 'grab' : 'default';
//       }

//       // Auto-rotate + inertia
//       if (!isDragging.current) {
//         targetRotationY.current += AUTO_ROTATE_SPEED * deltaTime;
//         rotationVelocity.current *= INERTIA_DAMPING;
//         targetRotationY.current += rotationVelocity.current;
//         if (Math.abs(rotationVelocity.current) < 0.0001) rotationVelocity.current = 0;
//       }

//       // Apply smooth rotation to both groups
//       const lerp = 0.1;
//       earthGroupRef.current.rotation.y += (targetRotationY.current - earthGroupRef.current.rotation.y) * lerp;
//       galleryGroupRef.current.rotation.y += (targetRotationY.current - galleryGroupRef.current.rotation.y) * lerp;

//       starsMat.uniforms.time.value = clock.getElapsedTime();
//       renderer.render(scene, camera);
//     };
//     animate();

//     // === RESIZE ===
//     const onResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       ScrollTrigger.refresh();
//     };
//     window.addEventListener('resize', onResize);

//     // Cleanup
//     return () => {
//       lenis.destroy();
//       gsap.ticker.remove(lenis.raf);
//       window.removeEventListener('resize', onResize);
//       canvas.removeEventListener('pointerdown', handlePointerDown);
//       window.removeEventListener('pointermove', handlePointerMove);
//       window.removeEventListener('pointerup', handlePointerUp);
//       window.removeEventListener('pointerleave', handlePointerUp);
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//       renderer.dispose();
//       mountRef.current?.removeChild(renderer.domElement);
//     };
//   }, []);

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
//       <div
//         ref={mountRef}
//         style={{
//           position: 'absolute',
//           inset: 0,
//         }}
//       />

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
//         }}
//       >
//         Our Featured Work
//       </h2>

//       <div
//         ref={text2Ref}
//         style={{
//           position: 'absolute',
//           top: '20%',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           color: 'white',
//           fontSize: 'clamp(1.8rem, 5vw, 5rem)',
//           fontWeight: 'bolder',
//           textAlign: 'center',
//           pointerEvents: 'none',
//           zIndex: 10,
//           textShadow: '0 0 40px rgba(0,0,0,0.9)',
//           whiteSpace: 'nowrap',
//           opacity: 0,
//           letterSpacing: '0.01em',
//         }}
//       >
//         <div ref={typewriterRef} style={{ display: 'inline-block' }} />
//         <style jsx>{`
//           span {
//             display: inline-block;
//             transition: opacity 0.1s ease-out;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }





'use client';

import React, { useEffect, useRef } from 'react';
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
      const scale = 4 / Math.max(size.x, size.y, size.z);
      model.scale.set(scale, scale, scale);
      model.position.y = -0.5;
      earthGroupRef.current.add(model);
    },
    undefined,
    () => {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(2, 64, 64),
        new THREE.MeshStandardMaterial({ color: 0x3399ff })
      );
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

  urls.concat(urls).forEach((url, i) => {
    new THREE.TextureLoader().load(url, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), mat);
      const angle = (i / 12) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * 8, 2, Math.sin(angle) * 8);
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
    const deltaX = e.touches[0].clientX - previousMouseX;
    const rotationY = deltaX * 0.005;

    earthGroupRef.current.rotation.y += rotationY;
    galleryGroupRef.current.rotation.y += rotationY;

    previousMouseX = e.touches[0].clientX;
    velocity = deltaX * 0.01; //0.03
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
      end: "+=200%",
      scrub: 1,
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

        // Controlled rotation from scroll (additive)
        earthGroupRef.current.rotation.y = p * 4;
        galleryGroupRef.current.rotation.y = p * 4; // sync gallery

        earthGroupRef.current.position.y = -1.2 - p * 1.3;
        earthGroupRef.current.scale.setScalar(1 + p * 0.6);

        imagesRef.current.forEach(img => {
          img.material.opacity = Math.max(0, 1 - p * 2.5);
        });

        const zoom = 1 + p * 0.4;
        camera.position.z = 5 / zoom;
        camera.fov = 75 / zoom;
        camera.updateProjectionMatrix();

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
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
          bottom: '3%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
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
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: 'clamp(1.8rem, 5vw, 5rem)',
          fontWeight:'bolder',
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 10,
          textShadow: '0 0 40px rgba(0,0,0,0.9)',
          whiteSpace: 'nowrap',
          opacity: 0,
          letterSpacing: '0.01em',
        }}
      >
       <div
          ref={typewriterRef}
          style={{
            display: 'inline-block',
            fontFamily: 'inherit',
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