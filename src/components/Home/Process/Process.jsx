"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Process = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = document.querySelector(".slider");

    gsap.to(slider, {
      x: () =>
        -(slider.scrollWidth - document.documentElement.clientWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-slider-container",
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => "+=" + slider.offsetWidth,
      },
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="horizontal-slider-container">
      <div className="slider-wrapper">
        <div className="slider">
          {[...Array(5)].map((_, index) => (
            <div className="image-wrapper" key={index}>
              <img
                src="https://images.pexels.com/photos/34229775/pexels-photo-34229775.jpeg"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }

        .horizontal-slider-container {
          position: relative;
          background-color: black;
          overflow: hidden;
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
          flex-wrap: nowrap;
          height: 100%;
          gap: 20px;
          padding: 0 20px;
          align-items: center;
        }

        .image-wrapper {
          flex: 0 0 auto;
          position: relative;
          width: 30vw;
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
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
        }
      `}</style>
    </section>
  );
};

export default Process;
