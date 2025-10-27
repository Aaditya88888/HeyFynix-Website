"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MakesUsDifferent = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const lastScrollY = useRef(0);
  const overlayRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const slider = sliderRef.current;
    const container = containerRef.current;

    // ScrollTrigger animation for slider
    const scrollTween = gsap.to(slider, {
      x: () => -(slider.scrollWidth - container.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => "+=" + (slider.scrollWidth - container.clientWidth),
        invalidateOnRefresh: true,
      },
    });

    // Continuous auto-scroll
    let speed = -3;
    const ticker = gsap.ticker.add(() => {
      const currentX = gsap.getProperty(slider, "x");
      const maxX = -(slider.scrollWidth - container.clientWidth);
      const minX = 0;
      if (currentX > maxX && currentX < minX) {
        gsap.set(slider, { x: currentX - speed });
      }
    });

    // Detect scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      speed =
        currentScrollY > lastScrollY.current
          ? -Math.abs(speed)
          : Math.abs(speed);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // GSAP Text Animation for top section
    gsap.from(textRef.current.children, {
      opacity: 0,
      y: 50,
      scale: 0.8,
      color: "#ffffff",
      textShadow: "0px 0px 0px rgba(255,255,255,0)",
      stagger: 0.4,
      duration: 1.5,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
      onUpdate: function () {
        gsap.to(textRef.current.children, {
          textShadow: "0px 0px 15px rgba(255,255,255,0.8)",
          duration: 0.5,
          repeat: -1,
          yoyo: true,
        });
      },
    });

    return () => {
      scrollTween.scrollTrigger.kill();
      gsap.ticker.remove(ticker);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    "https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg",
    "https://images.pexels.com/photos/34087412/pexels-photo-34087412.jpeg",
    "https://images.pexels.com/photos/34183957/pexels-photo-34183957.jpeg",
    "https://images.pexels.com/photos/34137666/pexels-photo-34137666.jpeg",
  ];

  const texts = [
    "Tell stories that move people",
    "Design brand voices that are unforgettable",
    "Create work that isn’t just trendy, but timeless",
    "Partner with teams who care about meaning, not just metrics",
  ];

  return (
    <>
      {/* Top Text Section Above Slider */}
      <div
        className="text-white bg-black text-section flex flex-col items-center justify-center text-center"
        ref={textRef}
      >
        <h1 className="text-5xl font-bold mb-4">Our why makes us different</h1>
        <h2 className="text-2xl font-semibold mb-4">
          We adapt. We evolve. We rise.
        </h2>
        <p className="text-lg max-w-xl mb-2">
          We’re not here to be another content studio.
        </p>
        <p className="text-lg max-w-xl">We’re here to:</p>
      </div>

      {/* Slider Section */}
      <section className="horizontal-slider-container" ref={containerRef}>
        <div className="slider-wrapper">
          <div className="slider" ref={sliderRef}>
            {images.map((img, i) => (
              <div className="image-wrapper" key={i}>
                <img src={img} alt={`Different ${i + 1}`} />
                <div
                  className="image-text"
                  ref={(el) => (overlayRefs.current[i] = el)}
                >
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
          }
          .text-section {
            padding: 6rem 10%;
            color: white;
            min-height: 50vh;
          }
          .slider-wrapper {
            position: sticky;
            top: 0;
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
          }
          .image-wrapper {
            flex: 0 0 auto;
            width: 30vw;
            height: 70%;
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
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            text-align: center;
            font-weight: 500;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          .image-wrapper:hover img {
            opacity: 0.5;
          }
          .image-wrapper:hover .image-text {
            opacity: 1;
            pointer-events: auto;
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
