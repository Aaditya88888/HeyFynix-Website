// app/sections/EarthSection.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function EarthSection({ scrollProgress, setScrollProgress }) {
  const mountRef = useRef(null);

  useEffect(() => {
    // ==================== THREE.JS SETUP ====================
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // ==================== EARTH MODEL ====================
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      '/earth (1).glb',
      (gltf) => {
        const model = gltf.scene;
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.side = THREE.DoubleSide;
            if (child.material.map) {
              child.material.map.colorSpace = THREE.SRGBColorSpace;
              child.material.map.flipY = false;
            }
            child.material.needsUpdate = true;
          }
        });

        // Auto scale & center
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 4 / maxDim;
        model.scale.set(scale, scale, scale);
        model.position.y = -0.5;
        earthGroup.add(model);
      },
      undefined,
      () => {
        // Fallback blue sphere
        const fallback = new THREE.Mesh(
          new THREE.SphereGeometry(4, 64, 64),
          new THREE.MeshStandardMaterial({ color: 0x3399ff, roughness: 0.7, metalness: 0.3 })
        );
        earthGroup.add(fallback);
      }
    );

    // ==================== LIGHTING ====================
    scene.add(new THREE.AmbientLight(0x404040, 1.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(10, 10, 10);
    scene.add(dirLight);

    // ==================== CYLINDRICAL GALLERY ====================
    const imageUrls = [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200',
    ];

    const images = [];
    const galleryGroup = new THREE.Group();
    const radius = 8;
    const textureLoader = new THREE.TextureLoader();

    [...imageUrls, ...imageUrls].forEach((url, i) => {
      const tex = textureLoader.load(url);
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), mat);
      const angle = (i / 12) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * radius, 2, Math.sin(angle) * radius);
      mesh.lookAt(0, 2, 0);
      galleryGroup.add(mesh);
      images.push(mesh);
    });

    scene.add(galleryGroup);

    // ==================== TWINKLING STARS ====================
    const starsGeometry = new THREE.BufferGeometry();
    const vertices = [];
    const sizes = [];

    for (let i = 0; i < 2500; i++) {
      const radius = 50 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      vertices.push(
        Math.sin(phi) * Math.cos(theta) * radius,
        Math.sin(phi) * Math.sin(theta) * radius,
        Math.cos(phi) * radius
      );
      sizes.push(Math.random() > 0.95 ? Math.random() * 3 + 3 : Math.random() * 0.8 + 0.6);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    const starMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        attribute float size;
        uniform float time;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (1.0 + sin(time * 3.0 + position.y * 0.1) * 0.4);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starsGeometry, starMaterial);
    scene.add(stars);

    // ==================== SCROLL & ANIMATION ====================
    let currentScroll = 0;
    let targetScroll = 0;
    const clock = new THREE.Clock();

    const handleWheel = (e) => {
      e.preventDefault();
      targetScroll += e.deltaY * 0.0012;
      targetScroll = Math.max(0, Math.min(1.4, targetScroll));
      setScrollProgress(Math.min(1, targetScroll));
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      starMaterial.uniforms.time.value = elapsed;

      currentScroll += (targetScroll - currentScroll) * 0.09;

      // Gallery auto-rotation and fade
      galleryGroup.rotation.y += 0.002; // Auto-rotation speed
      images.forEach((img) => {
        img.material.opacity = Math.max(0, 1 - currentScroll * 2);
      });

      // Earth animation
      earthGroup.rotation.y += 0.006 + currentScroll * 0.03;
      earthGroup.position.y = -1.2 - currentScroll * 1.3;
      earthGroup.scale.setScalar(1 + currentScroll * 0.45);

      // Camera zoom
      const zoom = 1 + currentScroll * 0.3;
      camera.position.z = 5 / zoom;
      camera.fov = 75 / zoom;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starMaterial.dispose();
    };
  }, [setScrollProgress]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Canvas - MUST receive wheel events */}
      <div
        ref={mountRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',   // Critical: allow scroll
          zIndex: 1,
        }}
      />

      {/* First Title */}
      <div style={{
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fff',
        fontSize: '4rem',
        fontWeight: 'bold',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 10,
        opacity: Math.max(0, 1 - scrollProgress * 3),
        transition: 'opacity 0.6s ease',
        textShadow: '0 4px 20px rgba(0,0,0,0.7)',
        whiteSpace: 'nowrap',
      }}>
        We tell Stories the world remembers
      </div>

      {/* Second Title */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fff',
        fontSize: '5.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 10,
        opacity: scrollProgress > 0.2 && scrollProgress < 0.9 ? 1 : 0,
        transition: 'opacity 0.8s ease',
        textShadow: '0 0 40px rgba(0,0,0,0.9)',
        whiteSpace: 'nowrap',
      }}>
        Our Featured Work
      </div>
    </div>
  );
}
// components/work/Globe.jsx
// 'use client';

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// export default function Globe() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const currentMount = mountRef.current;

//     // Clear any old canvas
//     while (currentMount.firstChild) {
//       currentMount.removeChild(currentMount.firstChild);
//     }

//     // Scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);

//     // Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       currentMount.clientWidth / currentMount.clientHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     currentMount.appendChild(renderer.domElement);

//     // Earth Group
//     const earthGroup = new THREE.Group();
//     scene.add(earthGroup);

//     // Load GLB
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
//             if (child.material.emissiveMap) {
//               child.material.emissiveMap.colorSpace = THREE.SRGBColorSpace;
//             }
//             child.material.needsUpdate = true;
//           }
//         });

//         const box = new THREE.Box3().setFromObject(model);
//         const center = box.getCenter(new THREE.Vector3());
//         const size = box.getSize(new THREE.Vector3());
//         const maxDim = Math.max(size.x, size.y, size.z);
//         const scale = 4 / maxDim;

//         model.scale.set(scale, scale, scale);
//         model.position.sub(center.clone().multiplyScalar(scale));
//         earthGroup.add(model);
//       },
//       undefined,
//       (error) => {
//         console.error('GLB load error:', error);
//         const fallback = new THREE.Mesh(
//           new THREE.SphereGeometry(4, 64, 64),
//           new THREE.MeshStandardMaterial({ color: 0x3399ff })
//         );
//         earthGroup.add(fallback);
//       }
//     );

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0x404040, 1.2);
//     scene.add(ambientLight);
//     const mainLight = new THREE.DirectionalLight(0xffffff, 3);
//     mainLight.position.set(10, 10, 10);
//     scene.add(mainLight);

//     // Animation
//     const clock = new THREE.Clock();
//     const animate = () => {
//       requestAnimationFrame(animate);
//       const elapsed = clock.getElapsedTime();

//       earthGroup.rotation.y += 0.005;
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Resize
//     const handleResize = () => {
//       camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (currentMount.contains(renderer.domElement)) {
//         currentMount.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       className="absolute inset-0 w-full h-full"
//       style={{ pointerEvents: 'none' }} // Allows scrolling
//     />
//   );
// }