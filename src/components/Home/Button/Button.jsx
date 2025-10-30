"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Button() {
  useEffect(() => {
    gsap.from("#home-featured-cta", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <a
        id="home-featured-cta"
        href="/projects"
        target="_blank"
        className="inline-flex items-center justify-center text-white border-2 border-white px-7 py-3 rounded-full overflow-hidden relative cursor-pointer transition-colors duration-[350ms] ease-linear shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      >
        <span
          id="home-featured-cta-dot"
          className="w-2 h-2 rounded-full bg-white opacity-100 scale-100 mr-2 transition-all duration-300 ease-in-out"
        ></span>

        <span
          id="home-featured-cta-text"
          className="font-medium text-[15px] tracking-[0.5px] relative z-[1] transition-colors duration-300"
        >
          About Us
        </span>

        <span
          id="home-featured-cta-arrow"
          className="inline-flex items-center justify-center opacity-0 -translate-x-2 w-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            className="w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
            />
          </svg>
        </span>
      </a>

      <style jsx>{`
        a#home-featured-cta::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: #fff;
          transform: scaleX(0);
          transform-origin: left center;
          border-radius: 40px;
          z-index: 0;
          transition: transform 0.25s ease;
        }

        a#home-featured-cta:hover::before {
          transform: scaleX(1);
        }

        a#home-featured-cta:hover {
          border-color: transparent;
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
        }

        /* ✅ Text and arrow both turn black on hover */
        a#home-featured-cta:hover #home-featured-cta-text,
        a#home-featured-cta:hover #home-featured-cta-arrow svg {
          color: black !important;
          stroke: black !important;
        }

        a#home-featured-cta:hover #home-featured-cta-dot {
          opacity: 0;
          transform: scale(0);
          margin-right: 0;
        }

        a#home-featured-cta:hover #home-featured-cta-arrow {
          opacity: 1;
          transform: translateX(0);
          width: 16px;
          margin-left: 13px;
        }
      `}</style>
    </>
  );
}
