"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const MakesUsDifferent = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const lastX = useRef(0);
  const speed = useRef(2);
  const animationActive = useRef(true);
  const velocity = useRef(0);
  const momentumTween = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    const cards = slider.children;
    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 40;
    const totalCardWidth = cardWidth + gap;

    // Clone for infinite scroll
    const originalCardCount = cards.length;
    for (let i = 0; i < originalCardCount; i++) {
      const clone = cards[i].cloneNode(true);
      slider.appendChild(clone);
    }

    gsap.set(slider, { x: 0 });

    // ✅ Prevent default image drag
    slider.addEventListener("dragstart", (e) => e.preventDefault());

    // ✅ Auto scrolling
    const animate = () => {
      if (!animationActive.current) return;

      const currentXVal = gsap.getProperty(slider, "x");
      let newX = currentXVal + speed.current;

      if (newX >= 0) {
        newX -= totalCardWidth;
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        gsap.set(slider, { x: newX });
      } else {
        gsap.set(slider, { x: newX });
      }
    };

    gsap.ticker.add(animate);

    // ✅ Drag start
    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX;
      velocity.current = 0;
      lastX.current = e.clientX;
      animationActive.current = false;
      if (momentumTween.current) momentumTween.current.kill();
    };

    // ✅ Drag move
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.clientX;
      const delta = clientX - startX.current;
      const currentSliderX = gsap.getProperty(slider, "x");
      gsap.set(slider, { x: currentSliderX + delta });

      velocity.current = clientX - lastX.current;
      lastX.current = clientX;
      startX.current = clientX;
    };

    // ✅ Drag end (momentum)
    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const currentVelocity = velocity.current;

      if (momentumTween.current) momentumTween.current.kill();

      momentumTween.current = gsap.to(slider, {
        x: `+=${currentVelocity * 25}`,
        duration: Math.min(Math.abs(currentVelocity) * 0.3, 1.2),
        ease: "power3.out",
        onComplete: () => {
          animationActive.current = true;
        },
      });
    };

    // ✅ Mouse events
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseUp);

    // ✅ Touch events (for mobile)
    container.addEventListener("touchstart", (e) => {
      isDragging.current = true;
      startX.current = e.touches[0].clientX;
      velocity.current = 0;
      lastX.current = e.touches[0].clientX;
      animationActive.current = false;
      if (momentumTween.current) momentumTween.current.kill();
    });

    container.addEventListener("touchmove", (e) => {
      if (!isDragging.current) return;
      const clientX = e.touches[0].clientX;
      const delta = clientX - startX.current;
      const currentSliderX = gsap.getProperty(slider, "x");
      gsap.set(slider, { x: currentSliderX + delta });

      velocity.current = clientX - lastX.current;
      lastX.current = clientX;
      startX.current = clientX;
    });

    container.addEventListener("touchend", () => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const currentVelocity = velocity.current;
      if (momentumTween.current) momentumTween.current.kill();

      momentumTween.current = gsap.to(slider, {
        x: `+=${currentVelocity * 25}`,
        duration: Math.min(Math.abs(currentVelocity) * 0.3, 1.2),
        ease: "power3.out",
        onComplete: () => {
          animationActive.current = true;
        },
      });
    });

    // ✅ Cleanup
    return () => {
      gsap.ticker.remove(animate);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  const images = [
    "/images/home/process-2.jpg",
    "/images/home/process-2.jpg",
    "/images/home/process-2.jpg",
    "/images/home/process-2.jpg",
    "/images/home/process-2.jpg",
    "/images/home/process-2.jpg",
    "/images/home/process-2.jpg",
    "/images/home/process-2.jpg",
    "/images/home/process-2.jpg",
  ];

  const texts = [
    "Tell stories that move people.",
    "Design brand voices that are unforgettable.",
    "Create work that isn’t just trendy, but timeless.",
    "Partner with teams who care about meaning, not just metrics.",
    "We Partner with teams who care about meaning, not just metrics.",
    "We inspire innovation through bold creativity.",
    "We build lasting connections with every audience.",
    "We deliver solutions that align with your vision.",
    "We embrace challenges to drive meaningful impact.",
  ];

  return (
    <>
      <div className="text-white bg-black text-section flex items-center justify-between px-[5%] pt-10 pb-0">
        <div className="right text-right max-w-lg">
          <p className="text-lg">
            Wondering how we turn your vision into something tangible? It's
            simple, collaborative, and a ton of fun. Here's the scoop:
          </p>
        </div>
        <div className="left text-left max-w-lg italic">
          <h1>
            <span className="text-3xl">Our </span>
            <span className="font-bold">Why!!!</span>
          </h1>
          <div className="-mt-2">
            <h3 className="font-bold leading-[1] mb-0 pb-0">
              Makes Us Different
            </h3>
          </div>
        </div>
      </div>

      <section className="horizontal-slider-container pl-16" ref={containerRef}>
        <div className="slider-wrapper">
          <div className="slider" ref={sliderRef}>
            {images.map((img, i) => (
              <div className="image-wrapper" key={i}>
                <img src={img} alt={`Different ${i + 1}`} />
                <div className="image-text">
                  <h3 className="image-heading">{texts[i]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .horizontal-slider-container {
            position: relative;
            background-color: black;
            overflow: hidden;
            margin-top: -1rem;
            cursor: grab;
            user-select: none;
            -webkit-user-drag: none;
          }
          .horizontal-slider-container:active {
            cursor: grabbing;
          }
          .text-section {
            padding: 6rem 10%;
            color: white;
            min-height: 50vh;
          }
          .slider-wrapper {
            overflow: hidden;
            width: 100%;
            height: 100vh;
            transform: translateY(-5rem);
            user-select: none;
            -webkit-user-drag: none;
          }
          .slider {
            display: flex;
            gap: 40px;
            padding: 0 20px;
            align-items: center;
            height: 100%;
            position: relative;
            white-space: nowrap;
            user-select: none;
            -webkit-user-drag: none;
          }
          .image-wrapper {
            flex: 0 0 auto;
            width: 25vw;
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border: 2px solid transparent;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            user-select: none;
            -webkit-user-drag: none;
          }
          .image-wrapper:hover {
            border-color: #3b82f6;
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.8),
              0 0 50px rgba(59, 130, 246, 0.5), 0 0 75px rgba(59, 130, 246, 0.3);
          }
          .image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.5s ease;
            opacity: 0.8;
            user-select: none;
            -webkit-user-drag: none;
          }
          .image-wrapper:hover img {
            transform: scale(1.1);
          }
          .image-text {
            position: absolute;
            bottom: 8%;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            text-align: center;
            font-weight: 500;
            padding: 1rem 1.2rem;
            border-radius: 10px;
            width: 85%;
            word-wrap: break-word;
            white-space: normal;
            overflow: hidden;
          }
          .image-heading {
            font-size: 1.6rem;
            font-weight: 700;
          }
        `}</style>
      </section>
    </>
  );
};

export default MakesUsDifferent;
