
// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// export default function EarthSection({ onComplete }) {
//   const mountRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);
//   const [hasPassedSection, setHasPassedSection] = useState(false);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);

//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     mountRef.current.appendChild(renderer.domElement);

//     const earthGroup = new THREE.Group();
//     scene.add(earthGroup);

//     const galleryGroup = new THREE.Group();
//     scene.add(galleryGroup);

//     const gltfLoader = new GLTFLoader();
//     gltfLoader.load(
//       '/earth (1).glb',
//       (gltf) => {
//         const model = gltf.scene;
//         model.traverse((child) => {
//           if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//             child.material.side = THREE.DoubleSide;
//             if (child.material.map) {
//               child.material.map.colorSpace = THREE.SRGBColorSpace;
//               child.material.map.flipY = false;
//             }
//             child.material.needsUpdate = true;
//           }
//         });

//         const box = new THREE.Box3().setFromObject(model);
//         const size = box.getSize(new THREE.Vector3());
//         const maxDim = Math.max(size.x, size.y, size.z);
//         const scale = 4 / maxDim;
//         model.scale.set(scale, scale, scale);
//         model.position.y = -0.5;
//         earthGroup.add(model);
//       },
//       undefined,
//       () => {
//         const fallback = new THREE.Mesh(
//           new THREE.SphereGeometry(4, 64, 64),
//           new THREE.MeshStandardMaterial({ color: 0x3399ff, roughness: 0.7, metalness: 0.3 })
//         );
//         earthGroup.add(fallback);
//       }
//     );

//     scene.add(new THREE.AmbientLight(0x404040, 1.5));
//     const dirLight = new THREE.DirectionalLight(0xffffff, 3);
//     dirLight.position.set(10, 10, 10);
//     scene.add(dirLight);

//     const imageUrls = [
//       'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
//       'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
//       'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
//       'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
//       'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
//       'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200',
//     ];

//     const images = [];
//     const radius = 8;
//     const textureLoader = new THREE.TextureLoader();

//     [...imageUrls, ...imageUrls].forEach((url, i) => {
//       const tex = textureLoader.load(url);
//       tex.colorSpace = THREE.SRGBColorSpace;
//       const mat = new THREE.MeshBasicMaterial({
//         map: tex,
//         side: THREE.DoubleSide,
//         transparent: true,
//         opacity: 1,
//       });
//       const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), mat);
//       const angle = (i / 12) * Math.PI * 2;
//       mesh.position.set(Math.cos(angle) * radius, 2, Math.sin(angle) * radius);
//       mesh.lookAt(0, 2, 0);
//       galleryGroup.add(mesh);
//       images.push(mesh);
//     });

//     const starsGeometry = new THREE.BufferGeometry();
//     const vertices = [];
//     const sizes = [];

//     for (let i = 0; i < 2500; i++) {
//       const radius = 50 + Math.random() * 60;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
//       vertices.push(
//         Math.sin(phi) * Math.cos(theta) * radius,
//         Math.sin(phi) * Math.sin(theta) * radius,
//         Math.cos(phi) * radius
//       );
//       sizes.push(Math.random() > 0.95 ? Math.random() * 3 + 3 : Math.random() * 0.8 + 0.6);
//     }

//     starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
//     starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

//     const starMaterial = new THREE.ShaderMaterial({
//       uniforms: { time: { value: 0 } },
//       vertexShader: `
//         attribute float size;
//         uniform float time;
//         void main() {
//           vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
//           gl_PointSize = size * (1.0 + sin(time * 3.0 + position.y * 0.1) * 0.4);
//           gl_Position = projectionMatrix * mvPosition;
//         }
//       `,
//       fragmentShader: `
//         void main() {
//           float dist = length(gl_PointCoord - vec2(0.5));
//           float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
//           gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
//         }
//       `,
//       transparent: true,
//       blending: THREE.AdditiveBlending,
//     });

//     const stars = new THREE.Points(starsGeometry, starMaterial);
//     scene.add(stars);

//     let currentScroll = 0;
//     let targetScroll = 0;

//     const handleWheel = (e) => {
//       // Only prevent default when Earth section is active and not passed
//       if (!isComplete || (isComplete && !hasPassedSection && e.deltaY < 0)) {
//         e.preventDefault();
        
//         // If scrolling back up from completed state and haven't passed the section, reset
//         if (isComplete && !hasPassedSection && e.deltaY < 0) {
//           setIsComplete(false);
//           targetScroll = Math.max(0, targetScroll + e.deltaY * 0.0012);
//         } else if (!isComplete) {
//           targetScroll += e.deltaY * 0.0012;
//           targetScroll = Math.max(0, Math.min(1.4, targetScroll));
//           setScrollProgress(Math.min(1, targetScroll));

//           if (targetScroll >= 1.3) {
//             setIsComplete(true);
//             setHasPassedSection(true);
//             onComplete && onComplete();
//           }
//         }
//       }
      
//       // If user scrolls down after completing section, mark as passed
//       if (isComplete && e.deltaY > 0 && !hasPassedSection) {
//         setHasPassedSection(true);
//       }
//     };

//     window.addEventListener('wheel', handleWheel, { passive: false });

//     const clock = new THREE.Clock();
//     const animate = () => {
//       requestAnimationFrame(animate);
//       const elapsed = clock.getElapsedTime();
//       starMaterial.uniforms.time.value = elapsed;

//       if (!isComplete) {
//         currentScroll += (targetScroll - currentScroll) * 0.09;

//         images.forEach((img) => {
//           img.material.opacity = Math.max(0, 1 - currentScroll * 2);
//         });

//         const galleryGroup = scene.children.find(child => child.type === 'Group' && child !== earthGroup);
//         if (galleryGroup) {
//           galleryGroup.rotation.y += 0.002;
//         }
//         earthGroup.rotation.y += 0.006;
//         earthGroup.position.y = -1.2 - currentScroll * 1.3;
//         earthGroup.scale.setScalar(1 + currentScroll * 0.45);

//         const zoom = 1 + currentScroll * 0.3;
//         camera.position.z = 5 / zoom;
//         camera.fov = 75 / zoom;
//         camera.updateProjectionMatrix();
//       }

//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('resize', handleResize);
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//       starsGeometry.dispose();
//       starMaterial.dispose();
//     };
//   }, [onComplete, isComplete,hasPassedSection]);

//   return (
//     <div
//       style={{
//         position: (isComplete && scrollProgress < 0.1) ? 'absolute' : 'fixed',
//         top: 0,
//         left: 0,
//         width: '100vw',
//         height: '100vh',
//         zIndex: (isComplete && scrollProgress < 0.1) ? -100 : 9999,
//         pointerEvents: isComplete ? 'none' : 'auto',
//         opacity: isComplete ? 0 : 1,
//         // transform: isComplete ? 'translateY(-10vh)' : 'translateY(0)',
//         transition: 'all 1.5s cubic-bezier(0.22,1,0.36,1)',
//       }}
//     >
//       <div ref={mountRef} style={{ position: 'absolute', inset: 0 }} />

//       <div
//         style={{
//           position: 'absolute',
//           top: '80%',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           color: '#fff',
//           fontSize: '6rem',
//           fontWeight: 'bold',
//           textAlign: 'center',
//           pointerEvents: 'none',
//           zIndex: 10,
//           opacity: Math.max(0, 1 - scrollProgress * 3),
//           transition: 'opacity 0.6s ease',
//           textShadow: '0 4px 20px rgba(0,0,0,0.7)',
//           whiteSpace: 'nowrap',
//         }}
//       >
//            Our Featured Work
//       </div>

//       <div
//         style={{
//           position: 'absolute',
//           top: '10%',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           color: '#fff',
//           fontSize: '4rem',
//           fontWeight: 'bold',
//           textAlign: 'center',
//           pointerEvents: 'none',
//           zIndex: 10,
//           opacity: scrollProgress > 0.2 && scrollProgress < 0.9 ? 1 : 0,
//           transition: 'opacity 0.8s ease',
//           textShadow: '0 0 40px rgba(0,0,0,0.9)',
//           whiteSpace: 'nowrap',
//         }}
//       >
     
//         We tell Stories the world remembers
//       </div>
//     </div>
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

  useEffect(() => {
    let lenis;

    // === LENIS SETUP (MUST BE FIRST) ===
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    // Critical: Sync Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // GSAP ticker for Lenis
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

    // Load Earth
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
      // Keep the original material but adjust specific properties
      child.material = new THREE.MeshStandardMaterial({
        ...child.material, // Spread the original material properties
        roughness: 0.6,    // Slightly rough to reduce shininess
        metalness: 0.8,   // Keep a bit of metalness for realism
        envMapIntensity: 0.3 ,// Reduce environment reflections
        

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

    // Gallery Images
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

    // Stars
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

    scene.add(new THREE.Points(starsGeo, starsMat));
const fullText = "We tell Stories the world remembers";
    const chars = fullText.split('');
    typewriterRef.current.innerHTML = chars.map(char => `<span style="opacity:0">${char === ' ' ? '&nbsp;' : char}</span>`).join('');

    const spans = typewriterRef.current.querySelectorAll('span');
    // === GSAP + SCROLLTRIGGER (THE MAGIC) ===
    const tl = gsap.timeline({
    // Inside EarthSection useEffect – replace the entire scrollTrigger config
scrollTrigger: {
  trigger: sectionRef.current,
  start: "top top",
  end: "+=200%",
  scrub: 1,
  pin: true,
  pinSpacing: true,
  anticipatePin: 1,
  invalidateOnRefresh: true,

  // THIS IS THE KEY LINE YOU WERE MISSING
  onLeave: () => {
    ScrollTrigger.getById(tl.scrollTrigger.id)?.disable(); // unpin!
    onComplete?.();
  },

  // Optional: allow scrolling back smoothly
  onLeaveBack: () => {
    ScrollTrigger.getById(tl.scrollTrigger.id)?.enable();
  },

  onUpdate: (self) => {
    const p = self.progress;

    earthGroupRef.current.rotation.y = p * 4;
    earthGroupRef.current.position.y = -1.2 - p * 1.3; //1.5
    earthGroupRef.current.scale.setScalar(1 + p * 0.6);

    imagesRef.current.forEach(img => {
      img.material.opacity = Math.max(0, 1 - p * 2.5);
    });

    const zoom = 1 + p * 0.4;
    camera.position.z = 5 / zoom;
    camera.fov = 75 / zoom;
    camera.updateProjectionMatrix();

    gsap.to(text1Ref.current, {
          opacity: Math.max(0, 1 - p * 4),
          y: -50 * p,
          duration: 0.3
        });

        // TEXT 2: "We tell Stories..." → fade in after 30%
        gsap.to(text2Ref.current, {
          opacity: p > 0.3 ? (p - 0.3) / 0.7 : 0,
          y: p > 0.3 ? 0 : 50,
          duration: 0.4
        });
        const typeProgress = gsap.utils.clamp(0, 1, (p - 0.4) / 0.5); // from 0.4 → 0.9
        const visibleChars = Math.floor(typeProgress * spans.length);

        spans.forEach((span, i) => {
          span.style.opacity = i < visibleChars ? 1 : 0;
        });
        if (p > 0.98) onComplete?.();
  },
}
    });

    // Force refresh after everything loads
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    // Render loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      starsMat.uniforms.time.value = elapsed;
      
      // Auto-rotate the gallery
      galleryGroupRef.current.rotation.y = elapsed * 0.1; // Rotate at 0.2 radians per second
          earthGroupRef.current.rotation.y = elapsed * 0.2; // Adjust speed as needed (0.2 is a good starting point)

      renderer.render(scene, camera);
    };
    animate();

    // Resize
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