"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const MakesUsDifferent = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    const cards = slider.children;
    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 20;
    const totalCardWidth = cardWidth + gap;
    const speed = 2;

    const originalCardCount = cards.length;
    for (let i = 0; i < originalCardCount; i++) {
      const clone = cards[i].cloneNode(true);
      slider.appendChild(clone);
    }

    gsap.set(slider, { x: 0 });

    const animate = () => {
      const currentX = gsap.getProperty(slider, "x");
      let newX = currentX + speed;

      if (newX >= 0) {
        newX -= totalCardWidth;
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        gsap.set(slider, { x: newX });
      } else {
        gsap.set(slider, { x: newX });
      }
    };

    gsap.ticker.add(animate);
    return () => gsap.ticker.remove(animate);
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
      {/* Text Section */}
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

      {/* Slider Section */}
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

          /* ✅ Same card styling as Process component */
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
            opacity: 0.8;
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
            .image-heading {
              font-size: 1.2rem;
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
            .image-heading {
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default MakesUsDifferent;
