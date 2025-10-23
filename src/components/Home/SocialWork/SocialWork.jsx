"use client";

import { useEffect } from "react";
import gsap from "gsap";
import * as THREE from "three";

const SocialWork = () => {
  useEffect(() => {
    // GSAP Animations
    try {
      gsap
        .timeline({ defaults: { duration: 1, ease: "power3.out" } })
        .fromTo(
          ".heading",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.5 }
        )
        .fromTo(
          ".paragraph:nth-of-type(1)",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=1"
        )
        .fromTo(
          ".paragraph:nth-of-type(2)",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.5"
        );
    } catch (error) {
      console.error("GSAP Animation Error:", error);
      document.querySelectorAll(".heading, .paragraph").forEach((el) => {
        el.style.opacity = 1;
        el.style.transform = "none";
      });
    }

    // Three.js Floating Particles
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("particles"),
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const isMobile = window.innerWidth <= 768;
      const particlesCount = isMobile ? 800 : 1500;
      const posArray = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (isMobile ? 8 : 10);
      }
      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const material = new THREE.PointsMaterial({
        size: isMobile ? 0.02 : 0.03,
        color: 0x60a5fa,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, material);
      scene.add(particlesMesh);

      camera.position.z = isMobile ? 4 : 5;

      const animate = () => {
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.0005;
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particlesCount * 3; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.0005;
          if (positions[i + 1] > 5) positions[i + 1] = -5;
        }
        particlesGeometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
      };
    } catch (error) {
      console.error("Three.js Error:", error);
      const canvas = document.getElementById("particles");
      if (canvas) canvas.style.display = "none";
    }
  }, []);

  return (
    <section
      id="social-work-section"
      className="relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-16 pb-16 md:pb-0"
      style={{
        background: "linear-gradient(to bottom, #e0f2fe, #bfdbfe)",
      }}
    >
      <canvas
        id="particles"
        className="absolute top-0 left-0 w-full h-full z-5"
      ></canvas>
      <div className="content relative z-10 max-w-[90%] sm:max-w-[80%] md:max-w-3xl lg:max-w-4xl">
        <h1 className="heading text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-blue-800 mb-4 sm:mb-6 md:mb-8 opacity-0 scale-95">
          Social Work, Driven By Compassion
        </h1>
        <p className="paragraph text-base sm:text-lg md:text-xl lg:text-3xl text-gray-700 mb-4 sm:mb-5 md:mb-6 opacity-0 translate-y-5">
          We are tied to the idea that creativity and compassion can go
          hand-in-hand. Every project fuels meaningful change, with 5% of
          profits supporting communities and animals in need. Our work creates
          impact beyond the screen as we work to build a better world.
        </p>
        <p className="paragraph text-base sm:text-lg md:text-xl lg:text-3xl text-gray-700 opacity-0 translate-y-5">
          Some bonds leave a mark that time and distance can't erase. This work
          is a quiet tribute to a soul who awakened compassion within us.
        </p>
      </div>
    </section>
  );
};

export default SocialWork;
