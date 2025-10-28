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
    const speed = -3; // reversed direction
    const containerWidth = container.clientWidth;

    const cardsNeeded = Math.ceil(containerWidth / totalCardWidth) + 2;
    const originalCardCount = cards.length;
    for (let i = 0; i < originalCardCount * cardsNeeded; i++) {
      const clone = cards[i % originalCardCount].cloneNode(true);
      slider.appendChild(clone);
    }

    const totalCards = slider.children.length;
    const totalSliderWidth = totalCards * totalCardWidth;
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
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
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
    <>
      {/* ✅ Simple static text section (no animation) */}
      <div className="text-white bg-black text-section flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Process</h1>
        <h2 className="text-2xl font-semibold mb-4">
          How We Work, It's All About You
        </h2>
        <p className="text-lg max-w-xl">
          Wondering how we turn your vision into something tangible? It's
          simple, collaborative, and a ton of fun. Here's the scoop:
        </p>
      </div>

      {/* Slider Section */}
      <section className="horizontal-slider-container" ref={containerRef}>
        <div className="slider-wrapper">
          <div className="slider" ref={sliderRef}>
            {images.map((img, i) => (
              <div className="image-wrapper" key={i}>
                <img src={img} alt={`Process ${i + 1}`} />
                <div className="image-text">
                  <h3 className="image-heading">{points[i].heading}</h3>
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
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border-radius: 10px;
          }
          .image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: opacity 0.3s ease;
          }
          .image-text {
            position: absolute;
            bottom: 8%;
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
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
          .image-content {
            font-size: 1.2rem;
            font-weight: 400;
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
    </>
  );
};

export default Process;
