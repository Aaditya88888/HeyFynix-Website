"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Process = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Smooth infinite horizontal scroll (reversed: right → left)
    const slider = sliderRef.current;
    const container = containerRef.current;
    const cards = slider.children;
    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 20;
    const totalCardWidth = cardWidth + gap;
    const speed = -2; // reversed direction
    const containerWidth = container.clientWidth;

    const cardsNeeded = Math.ceil(containerWidth / totalCardWidth) + 2;
    const originalCardCount = cards.length;
    for (let i = 0; i < originalCardCount * cardsNeeded; i++) {
      const clone = cards[i % originalCardCount].cloneNode(true);
      slider.appendChild(clone);
    }

    gsap.set(slider, { x: -totalCardWidth });

    const animate = () => {
      const currentX = gsap.getProperty(slider, "x");
      let newX = currentX + speed;

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

    return () => {
      gsap.ticker.remove(animate);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
      {/* ✅ Reduced bottom padding for tighter spacing */}
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

      {/* ✅ Reduced top gap for slider */}
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
          }

          .text-section {
            min-height: 40vh;
            background-color: black;
            color: white;
          }

          @media screen and (max-width: 768px) {
            .text-section {
              flex-direction: column;
              text-align: center;
              gap: 2rem;
              padding: 4rem 5%;
            }

            .left,
            .right {
              text-align: center !important;
            }
          }

          .slider-wrapper {
            overflow: hidden;
            width: 100%;
            height: 80vh; /* ✅ reduced height from 100vh */
          }

          .slider {
            display: flex;
            gap: 20px;
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
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }

          .image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.5s ease;
            // transition: transform 0.5s ease, opacity 0.3s ease; /* ✅ added transform */
            opacity: 0.7;
          }

          .image-wrapper:hover img {
            transform: scale(1.1); /* ✅ smooth zoom-in on hover */
          }

          .image-text {
            position: absolute;
            bottom: 20%;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            text-align: center;
            font-weight: 500;
            opacity: 1;
            pointer-events: none;
            padding: 1rem 1.2rem;
            border-radius: 10px;
            width: 85%;
            word-wrap: break-word;
            white-space: normal;
            overflow: hidden;
            box-sizing: border-box;
          }

          .image-heading {
            font-size: 4.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .image-content {
            font-size: 1.2rem;
            font-weight: 400;
            opacity: 0; /* hidden by default */
            max-height: 0;
            overflow: hidden;
            transition: opacity 0.4s ease, max-height 0.4s ease;
          }

          /* 👇 when user hovers the image, show the content */
          .image-wrapper:hover .image-content {
            opacity: 1;
            max-height: 200px; /* enough height to reveal text smoothly */
          }

          @media screen and (max-width: 1024px) {
            .image-wrapper {
              width: 45vw;
              height: 60%;
            }
            .slider {
              gap: 15px;
              padding: 0 15px;
            }
            .image-heading {
              font-size: 1.4rem;
            }
            .image-content {
              font-size: 1rem;
            }
          }

          @media screen and (max-width: 768px) {
            .image-wrapper {
              width: 65vw;
              height: 50%;
            }
            .slider {
              gap: 10px;
              padding: 0 10px;
            }
            .image-text {
              bottom: 8%;
              padding: 0.8rem 1rem;
            }
            .image-heading {
              font-size: 1.2rem;
            }
            .image-content {
              font-size: 0.9rem;
            }
          }

          @media screen and (max-width: 480px) {
            .image-wrapper {
              width: 85vw;
              height: 40%;
            }
            .slider {
              gap: 8px;
              padding: 0 8px;
            }
            .image-text {
              bottom: 6%;
              padding: 0.6rem 0.8rem;
            }
            .image-heading {
              font-size: 1rem;
            }
            .image-content {
              font-size: 0.8rem;
            }
          }
        `}</style>
      </section>
    </main>
  );
};

export default Process;
