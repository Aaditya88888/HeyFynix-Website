// components/MyMainCode.jsx
"use client";
import React, { useEffect, useRef } from "react";
import "./MyMain.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MyMainCode() {
  const wrapperRef = useRef(null);
  const rafRef = useRef(null);
  const cornerTimelineRef = useRef(null);
  const cornerCreatedRef = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // create structural DOM inside wrapper
    wrapper.innerHTML = `
      <div class="solar-inner">
        <div id="solarCanvasContainer" class="solar-canvas-container"></div>
        <div id="cornerContainerPlaceholder"></div>
      </div>
    `;

    // defensive body background
    document.body.style.background = "#000";
    document.body.style.color = "#fff";

    const container = wrapper.querySelector("#solarCanvasContainer");

    // ---------- THREE SETUP ----------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    camera.position.set(0, 50, 350);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.domElement.className = "three-canvas";
    renderer.domElement.style.opacity = "0";
    renderer.domElement.style.transition = "opacity 0.35s linear";
    container.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.className = "label-renderer";
    labelRenderer.domElement.style.pointerEvents = "none";
    labelRenderer.domElement.style.opacity = "0";
    labelRenderer.domElement.style.transition = "opacity 0.35s linear";
    container.appendChild(labelRenderer.domElement);

    const starsScene = new THREE.Scene();
    const starsCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    starsCamera.position.z = 400;
    const starsRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    starsRenderer.setSize(window.innerWidth, window.innerHeight);
    starsRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    starsRenderer.domElement.className = "stars-canvas";
    starsRenderer.domElement.style.opacity = "0";
    starsRenderer.domElement.style.transition = "opacity 0.35s linear";
    container.appendChild(starsRenderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.22));
    const fillLight1 = new THREE.PointLight(0xffffff, 0.45, 2500);
    fillLight1.position.set(500, 200, 500);
    scene.add(fillLight1);
    const fillLight2 = new THREE.PointLight(0xffffff, 0.35, 2000);
    fillLight2.position.set(-400, -200, -300);
    scene.add(fillLight2);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x404040, 0.6));
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.9);
    rimLight.position.set(0, 200, 400);
    scene.add(rimLight);
    const backLight = new THREE.PointLight(0xffffff, 0.45, 1500);
    backLight.position.set(0, -200, -500);
    scene.add(backLight);
    renderer.toneMappingExposure = 1.1;

    // Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = window.innerWidth < 768 ? 4000 : 8000;
    const starVertices = [];
    const spread = 2500;
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const starTexture = new THREE.TextureLoader().load(
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/circle.png"
    );
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2.2,
      map: starTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starsBg = new THREE.Points(starGeometry, starMaterial);
    starsScene.add(starsBg);

    // Solar system group
    const gltfLoader = new GLTFLoader();
    const solarSystem = new THREE.Group();
    solarSystem.scale.set(0.01, 0.01, 0.01);
    solarSystem.userData.progress = 0;
    solarSystem.userData.visible = false;
    scene.add(solarSystem);

    // Planets
    const planets = [
      {
        name: "Sun",
        radius: 46,
        distance: 0,
        speed: 0,
        rotation: 0.001,
        file: "the_star_sun.glb",
        info: "The Sun, star at center.",
      },
      {
        name: "Mercury",
        radius: 6,
        distance: 40,
        speed: 0.008,
        rotation: 0.004,
        file: "mercury.glb",
        info: "Closest planet to Sun.",
      },
      {
        name: "Venus",
        radius: 9,
        distance: 60,
        speed: 0.006,
        rotation: 0.002,
        file: "venus.glb",
        info: "Very hot planet.",
      },
      {
        name: "Earth",
        radius: 11,
        distance: 80,
        speed: 0.004,
        rotation: 0.01,
        file: "earth.glb",
        info: "Our home planet.",
      },
      {
        name: "Mars",
        radius: 13,
        distance: 100,
        speed: 0.003,
        rotation: 0.008,
        file: "mars.glb",
        info: "Red planet.",
      },
      {
        name: "Jupiter",
        radius: 17,
        distance: 130,
        speed: 0.0015,
        rotation: 0.005,
        file: "jupiter.glb",
        info: "Largest planet.",
      },
      {
        name: "Saturn",
        radius: 16,
        distance: 155,
        speed: 0.0012,
        rotation: 0.008,
        file: "saturn.glb",
        info: "Has rings.",
      },
      {
        name: "Uranus",
        radius: 13,
        distance: 180,
        speed: 0.0009,
        rotation: 0.003,
        file: "uranus.glb",
        info: "Rotates on side.",
      },
      {
        name: "Neptune",
        radius: 10,
        distance: 200,
        speed: 0.0009,
        rotation: 0.003,
        file: "neptune.glb",
        info: "Far gas giant.",
      },
    ];

    const planetMeshes = [];
    const orbitMeshes = [];

    function loadPlanetModel(planet) {
      gltfLoader.load(
        `/textures/models/${planet.file}`,
        (gltf) => {
          const mesh = gltf.scene;
          mesh.traverse((node) => {
            if (node.isMesh) {
              let mat = node.material;
              const apply = (m) => {
                if (!m) return;
                if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) {
                  if (planet.name !== "Sun") {
                    if (m.color) {
                      const avg = (m.color.r + m.color.g + m.color.b) / 3;
                      if (avg < 0.12)
                        m.color.lerp(new THREE.Color(0x888888), 0.35);
                    }
                    m.metalness = Math.min(0.25, m.metalness ?? 0.1);
                    m.roughness = Math.max(0.25, m.roughness ?? 0.6);
                    if (
                      !m.emissive ||
                      m.emissive.equals(new THREE.Color(0x000000))
                    ) {
                      m.emissive = new THREE.Color(0x050505);
                    }
                    m.emissiveIntensity = Math.max(
                      0.2,
                      m.emissiveIntensity ?? 0.4
                    );
                  }
                  m.needsUpdate = true;
                }
              };
              Array.isArray(mat) ? mat.forEach(apply) : apply(mat);
              node.castShadow = node.receiveShadow = true;
            }
          });

          const bbox = new THREE.Box3().setFromObject(mesh);
          const center = bbox.getCenter(new THREE.Vector3());
          mesh.position.sub(center);
          const size = bbox.getSize(new THREE.Vector3());
          let scale = planet.radius / Math.max(size.x, size.y, size.z);
          if (planet.name === "Sun") scale *= 0.8;
          mesh.scale.setScalar(scale);

          const pivot = new THREE.Object3D();
          pivot.rotation.y = Math.random() * Math.PI * 2;
          pivot.userData.speed = planet.speed;
          pivot.userData.isPlanet = true;
          mesh.position.set(planet.distance, 0, 0);
          pivot.add(mesh);
          solarSystem.add(pivot);

          const labelDiv = document.createElement("div");
          labelDiv.className = "planet-label";
          labelDiv.textContent = `${planet.name}: ${planet.info}`;
          const label = new CSS2DObject(labelDiv);
          label.position.set(0, planet.radius + 15, 0);
          label.visible = false;
          mesh.add(label);
          mesh.userData.label = label;
          mesh.userData.isPlanet = true;

          if (planet.distance > 0) {
            const ringWidth = Math.max(0.06, planet.radius * 0.02 + 0.02);
            const orbit = new THREE.RingGeometry(
              planet.distance - ringWidth,
              planet.distance + ringWidth,
              256
            );
            const orbitMat = new THREE.MeshBasicMaterial({
              color: 0xffffff,
              side: THREE.DoubleSide,
              transparent: true,
              opacity: 0.25,
              blending: THREE.AdditiveBlending,
              depthWrite: false,
            });
            const orbitMesh = new THREE.Mesh(orbit, orbitMat);
            orbitMesh.rotation.x = Math.PI / 2;
            solarSystem.add(orbitMesh);
            orbitMeshes.push(orbitMesh);
          }
          planetMeshes.push({ mesh, pivot, planet });
        },
        null,
        (err) => console.error(`Failed to load ${planet.file}:`, err)
      );
    }

    planets.forEach(loadPlanetModel);

    function updateMeshMap() {
      planetMeshes.forEach((p) => {
        if (p.planet.distance > 0) p.pivot.rotation.y += p.planet.speed;
        p.mesh.rotation.y += p.planet.rotation;
      });
      orbitMeshes.forEach((m) => (m.rotation.z += 0.0002));
    }

    // raycaster for hover labels
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let lastHoveredPlanet = null;
    const mouseMoveHandler = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        planetMeshes.map((p) => p.mesh),
        true
      );
      if (lastHoveredPlanet?.userData.label)
        lastHoveredPlanet.userData.label.visible = false;
      lastHoveredPlanet = null;
      if (intersects.length > 0) {
        let obj = intersects[0].object;
        while (obj && !obj.userData.isPlanet) obj = obj.parent;
        if (obj?.userData.label) {
          obj.userData.label.visible = true;
          lastHoveredPlanet = obj;
        }
      }
    };
    container.addEventListener("mousemove", mouseMoveHandler);

    // ---------- Corner Text CREATION & ANIMATION ----------
    // We'll add left and right corner texts, build spans, and create a GSAP timeline.
    function createCornerTexts() {
      if (cornerCreatedRef.current) return;
      cornerCreatedRef.current = true;

      const leftText = {
        lines: ["Every idea starts small", "We nurture it into orbit"],
        class: "left",
      };
      const rightText = {
        lines: ["Big visions need space.", "We give them galaxies"],
        class: "right",
      };

      const placeholder = wrapper.querySelector("#cornerContainerPlaceholder");
      // build wrapper for both corners
      const frag = document.createDocumentFragment();

      [leftText, rightText].forEach((cfg) => {
        const corner = document.createElement("div");
        corner.className = `corner-text ${cfg.class}`;
        corner.setAttribute("aria-hidden", "true");
        // create box
        const box = document.createElement("div");
        box.className = `corner-box ${cfg.class}`;
        const content = document.createElement("div");
        content.className = "corner-content";

        // fill lines with spans
        cfg.lines.forEach((line) => {
          const lineDiv = document.createElement("div");
          lineDiv.style.display = "block";
          lineDiv.style.textAlign = "center";
          lineDiv.style.width = "100%";
          lineDiv.style.margin = "0 auto";
          lineDiv.style.marginBottom = "0.1em";
          // create spans for each char
          for (const ch of line.split("")) {
            const span = document.createElement("span");
            span.textContent = ch === " " ? "\u00A0" : ch;
            span.style.opacity = "0";
            span.style.transform = "translateY(30px)";
            span.style.display = "inline-block";
            span.style.willChange = "transform, opacity";
            lineDiv.appendChild(span);
          }
          content.appendChild(lineDiv);
        });

        box.appendChild(content);
        corner.appendChild(box);
        frag.appendChild(corner);
      });

      placeholder.appendChild(frag);

      // collect spans
      const leftCorner = wrapper.querySelector(".corner-text.left");
      const rightCorner = wrapper.querySelector(".corner-text.right");
      const leftSpans = Array.from(leftCorner.querySelectorAll("span"));
      const rightSpans = Array.from(rightCorner.querySelectorAll("span"));

      // create timeline but paused
      const tl = gsap.timeline({ paused: true });
      // left reveal
      tl.to(
        leftCorner,
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
        0
      );
      tl.to(
        leftSpans,
        { opacity: 1, y: 0, stagger: 0.03, duration: 0.32, ease: "power3.out" },
        0.05
      );
      // right reveal slightly after
      tl.to(
        rightCorner,
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
        0.3
      );
      tl.to(
        rightSpans,
        { opacity: 1, y: 0, stagger: 0.03, duration: 0.32, ease: "power3.out" },
        0.35
      );

      // store timeline
      cornerTimelineRef.current = tl;
    }

    // ---------- Animation loop ----------
    const animate = () => {
      updateMeshMap();

      const p = solarSystem.userData.progress || 0;
      const scaleFactor = window.innerWidth < 768 ? 0.7 : 1;
      const baseScale = 0.15 + (0.8 - 0.15) * p;
      solarSystem.scale.setScalar(baseScale * scaleFactor);
      const minY = -window.innerHeight * 0.6; // start somewhat lower but not way offscreen
      const maxY = 0; // final y
      solarSystem.position.y = minY + (maxY - minY) * p;
      camera.position.z = (350 - 150 * p) * scaleFactor;
      camera.lookAt(0, 0, 0);

      const scrollOffset = p - 0.5;
      starsBg.position.set(
        scrollOffset * 250,
        scrollOffset * 180,
        scrollOffset * 300
      );

      starsCamera.rotation.copy(camera.rotation);
      starsCamera.position.copy(camera.position);
      starsCamera.position.z = 400;

      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
      starsRenderer.render(starsScene, starsCamera);

      // also update corner texts movement (slight upward motion) when created
      if (cornerCreatedRef.current) {
        const leftCorner = wrapper.querySelector(".corner-text.left");
        const rightCorner = wrapper.querySelector(".corner-text.right");
        const moveY = (1 - p) * 20; // when p=0 it's 20px down, when p=1 it's 0
        if (leftCorner) leftCorner.style.transform = `translateY(${moveY}px)`;
        if (rightCorner) rightCorner.style.transform = `translateY(${moveY}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // ---------- ScrollTrigger / pin ----------

    const parentSection =
      wrapper.closest(".solar-section") || wrapper.parentElement;
    const st = ScrollTrigger.create({
      trigger: parentSection,
      start: "top 40%",
      end: "bottom top+=200%",
      scrub: true,
      pin: parentSection,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = Math.min(Math.max(self.progress, 0), 1);
        solarSystem.userData.progress = progress;

        // renderer visibility
        const visible = progress > 0.01;
        renderer.domElement.style.opacity = visible ? "1" : "0";
        labelRenderer.domElement.style.opacity = visible ? "1" : "0";
        starsRenderer.domElement.style.opacity = visible ? "1" : "0";
        controls.enableRotate = progress > 0.15;
        renderer.domElement.style.pointerEvents = visible ? "auto" : "none";

        // create corner texts when first visible
        if (progress > 0.02 && !cornerCreatedRef.current) {
          createCornerTexts();
        }

        // trigger timeline when progress crosses threshold
        const showThreshold = 0.18; // tune as needed
        const hideThreshold = 0.12;
        const tl = cornerTimelineRef.current;
        if (tl) {
          if (
            progress >= showThreshold &&
            !tl.isActive() &&
            tl.progress() === 0
          ) {
            tl.play();
          } else if (progress < hideThreshold && tl.progress() > 0) {
            tl.reverse();
          }
        }
      },
      onEnter: () => {
        // on enter ensure renderers visible
        renderer.domElement.style.opacity = "1";
        labelRenderer.domElement.style.opacity = "1";
        starsRenderer.domElement.style.opacity = "1";
      },
      onLeaveBack: () => {
        // hide labels and corner text when leaving back
        planetMeshes.forEach(
          (p) =>
            p.mesh.userData.label && (p.mesh.userData.label.visible = false)
        );
        renderer.domElement.style.opacity = "0";
        labelRenderer.domElement.style.opacity = "0";
        starsRenderer.domElement.style.opacity = "0";
        const tl = cornerTimelineRef.current;
        if (tl && tl.progress() > 0) tl.reverse();
      },
    });

    // ---------- Resize + keyboard ----------
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      labelRenderer.setSize(window.innerWidth, window.innerHeight);
      starsRenderer.setSize(window.innerWidth, window.innerHeight);
      starsCamera.aspect = window.innerWidth / window.innerHeight;
      starsCamera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const keyHandler = (e) => {
      const scrollHeight =
        (parentSection?.offsetHeight || document.documentElement.scrollHeight) -
        window.innerHeight;
      const step = Math.max(200, scrollHeight * 0.05);
      let y = window.scrollY;
      if (e.key === "ArrowDown") y = Math.min(y + step, scrollHeight);
      if (e.key === "ArrowUp") y = Math.max(y - step, 0);
      window.scrollTo(0, y);
    };
    window.addEventListener("keydown", keyHandler);

    // start RAF
    rafRef.current = requestAnimationFrame(animate);

    // ---------- CLEANUP ----------
    return () => {
      try {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        ScrollTrigger.getAll().forEach((t) => t.kill());
        container.removeEventListener("mousemove", mouseMoveHandler);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("keydown", keyHandler);

        // kill corner timeline if exists
        if (cornerTimelineRef.current) {
          try {
            cornerTimelineRef.current.kill();
          } catch (e) {}
        }

        // dispose renderers & remove DOM
        renderer.dispose();
        starsRenderer.dispose();
        labelRenderer.domElement?.parentNode?.removeChild(
          labelRenderer.domElement
        );
        renderer.domElement?.parentNode?.removeChild(renderer.domElement);
        starsRenderer.domElement?.parentNode?.removeChild(
          starsRenderer.domElement
        );
      } catch (err) {
        // ignore cleanup errors
      }
      wrapper.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ width: "100%", height: "100%", position: "relative" }}
    />
  );
}
