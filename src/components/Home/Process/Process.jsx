"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Process = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const lastX = useRef(0);
  const speed = useRef(-2);
  const animationActive = useRef(true);
  const velocity = useRef(0);
  const momentumTween = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    const container = containerRef.current;
    const cards = slider.children;
    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 40;
    const totalCardWidth = cardWidth + gap;
    const containerWidth = container.clientWidth;

    const cardsNeeded = Math.ceil(containerWidth / totalCardWidth) + 2;
    const originalCardCount = cards.length;
    for (let i = 0; i < originalCardCount * cardsNeeded; i++) {
      const clone = cards[i % originalCardCount].cloneNode(true);
      slider.appendChild(clone);
    }

    gsap.set(slider, { x: -totalCardWidth });

    const animate = () => {
      if (!animationActive.current) return;

      const currentXPos = gsap.getProperty(slider, "x");
      let newX = currentXPos + speed.current;

      if (newX <= -totalCardWidth * Math.ceil(cardsNeeded)) {
        newX += totalCardWidth * Math.ceil(cardsNeeded);
        for (let i = 0; i < Math.ceil(cardsNeeded); i++) {
          slider.appendChild(slider.firstElementChild);
        }
        gsap.set(slider, { x: newX });
      } else {
        gsap.set(slider, { x: newX });
      }
    };

    gsap.ticker.add(animate);

    // ✅ Mouse event handlers
    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX;
      velocity.current = 0;
      lastX.current = e.clientX;
      animationActive.current = false;
      if (momentumTween.current) momentumTween.current.kill();
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const clientX = e.clientX || e.touches?.[0]?.clientX;
      const delta = clientX - startX.current;
      const currentSliderX = gsap.getProperty(slider, "x");
      gsap.set(slider, { x: currentSliderX + delta });

      velocity.current = clientX - lastX.current;
      lastX.current = clientX;

      startX.current = clientX;
    };

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

    // ✅ Add mouse event listeners
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseUp);

    // ✅ Touch support (for mobile)
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

    return () => {
      gsap.ticker.remove(animate);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  const images = [
    "/images/home/process-1.jpg",
    "/images/home/process-2.jpg",
    "/images/home/process-3.jpg",
    "/images/home/process-4.jpg",
    "/images/home/process-5.jpg",
  ];

  const points = [
    {
      heading: "Discover",
      content:
        "We start by chatting, what's your goal, who’s your audience, and what keeps you up at night?",
    },
    {
      heading: "Ideate",
      content:
        "Then we brainstorm like crazy, throwing ideas around until we find the perfect fit for you.",
    },
    {
      heading: "Create",
      content:
        "Time to roll up our sleeves and build it with creativity and care.",
    },
    {
      heading: "Refine",
      content: "We loop you in for feedback – your input makes it shine!",
    },
    {
      heading: "Launch",
      content: "Boom! We deliver, celebrate, and watch the magic unfold.",
    },
  ];

  return (
    <main>
      <div className="text-white bg-black text-section flex items-center justify-between px-[5%] pt-16 pb-6">
        <div className="left text-left max-w-lg">
          <h1 className="text-5xl font-bold italic leading-[1] mb-0 pb-0">
            PROCESS
          </h1>
          <h4 className="text-2xl font-medium mt-[-15px]">
            How We Work, It's All About You
          </h4>
        </div>

        <div className="right text-right max-w-lg">
          <p className="text-lg">
            Wondering how we turn your vision into something tangible? It's
            simple, collaborative, and a ton of fun. Here's the scoop:
          </p>
        </div>
      </div>

      <section className="horizontal-slider-container pl-16" ref={containerRef}>
        <div className="slider-wrapper">
          <div className="slider" ref={sliderRef}>
            {images.map((img, i) => (
              <div className="image-wrapper" key={i}>
                <img src={img} alt={`Process ${i + 1}`} />
                <div className="image-text">
                  <h3>Step {i + 1}</h3>
                  <h2 className="image-heading italic">{points[i].heading}</h2>
                  <p className="image-content">{points[i].content}</p>
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
            margin-top: -3rem;
            cursor: grab;
          }
          .horizontal-slider-container:active {
            cursor: grabbing;
          }
          .text-section {
            min-height: 40vh;
            background-color: black;
            color: white;
          }
          .slider-wrapper {
            overflow: hidden;
            width: 100%;
            height: 80vh;
          }
          .slider {
            display: flex;
            gap: 40px;
            padding: 0 20px;
            align-items: center;
            height: 100%;
            position: relative;
            white-space: nowrap;
          }
          .image-wrapper {
            flex: 0 0 auto;
            width: 25vw;
            height: 75%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border: 2px solid transparent;
            transition: border-color 0.3s ease;
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
            opacity: 0.7;
            transition: transform 0.5s ease;
          }
          .image-wrapper:hover img {
            transform: scale(1.1);
          }
          .image-text {
            position: absolute;
            bottom: 20%;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            text-align: center;
            font-weight: 500;
            padding: 1rem 1.2rem;
            border-radius: 10px;
            width: 85%;
            overflow: hidden;
            white-space: normal; /* ✅ allow text to wrap */
            word-wrap: break-word; /* ✅ break long words if needed */
          }
          .image-heading {
            font-size: 4.5rem;
            font-weight: 700;
          }

          .image-content {
            font-size: 1.2rem;
            opacity: 0;
            transform: translateY(15px);
            transition: opacity 0.5s ease, transform 0.5s ease;
            pointer-events: none;
          }
          .image-wrapper:hover .image-content {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </section>
    </main>
  );
};

export default Process;
