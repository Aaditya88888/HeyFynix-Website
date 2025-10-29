"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Button = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.from(btnRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <a
      ref={btnRef}
      id="home-featured-cta"
      href="/projects"
      target="_blank"
      className="cta-button"
    >
      <span id="home-featured-cta-dot"></span>
      <span id="home-featured-cta-text">About Us</span>
      <span id="home-featured-cta-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
          />
        </svg>
      </span>

      <style jsx>{`
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          color: #fff;
          border: 2px solid #fff;
          padding: 12px 24px;
          border-radius: 40px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: #fff;
          color: #000;
        }

        #home-featured-cta-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          transform: scale(1);
          transition: all 0.3s ease;
        }

        .cta-button:hover #home-featured-cta-dot {
          transform: scale(1.5);
          background: #000;
        }

        #home-featured-cta-text {
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.5px;
          position: relative;
        }

        #home-featured-cta-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .cta-button:hover #home-featured-cta-arrow {
          transform: translateX(6px);
        }

        #home-featured-cta-arrow svg {
          width: 16px;
          height: 16px;
        }
      `}</style>
    </a>
  );
};

export default Button;
