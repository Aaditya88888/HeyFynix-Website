"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhoWeAre = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#reveal-section",
        pin: true,
        start: "top top",
        end: "+=200%",
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to("#top-panel", { yPercent: -100, duration: 1, ease: "none" }, 0)
      .to("#bottom-panel", { yPercent: 100, duration: 1, ease: "none" }, 0)
      .to(
        "#content",
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          onUpdate: function () {
            const progress = this.progress();
            gsap.set("#content", {
              opacity: progress,
              scale: 0.95 + progress * 0.05,
            });
          },
        },
        0
      );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Pinned Reveal Section */}
      <div id="pin-spacer" className="relative w-full">
        <div
          id="reveal-section"
          className="relative w-full h-screen overflow-hidden bg-white"
        >
          {/* Top Panel */}
          <div
            id="top-panel"
            className="absolute top-0 left-0 w-full h-1/2 bg-black z-30"
          ></div>

          {/* Content */}

          <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 bg-black text-white font-sans">
            {/* Background subtle animated shapes */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute w-72 h-72 bg-white/10 rounded-full animate-pulse blur-3xl -top-24 -left-24"></div>
              <div className="absolute w-96 h-96 bg-white/5 rounded-full animate-pulse blur-3xl -bottom-32 -right-32"></div>
            </div>

            {/* Content */}
            <div className="relative max-w-4xl text-center space-y-8 z-10">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 drop-shadow-lg">
                Who We Are
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-paragraph">
                Imagine a team that's as excited about your ideas as you are.
                That's us! We're a bunch of passionate creatives who live for
                solving problems with a dash of fun and a whole lot of heart.
                Whether it's crafting a killer brand story or dreaming up
                digital experiences, we're all about making things that connect
                on a human level.
              </p>

              <p className="text-xl md:text-2xl text-gray-100 font-semibold animate-paragraph">
                What's your story? We'd love to hear it and help you tell it
                better. Join the fun!
              </p>

              <button className="relative mt-6 px-10 py-4 font-semibold text-black bg-white rounded-full overflow-hidden shadow-lg transition-all duration-500 group cursor-pointer">
                <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Join Us
                </span>
                <span className="absolute inset-0 rounded-full border-2 border-white group-hover:border-gray-300 blur-[1px] group-hover:blur-sm transition-all duration-500"></span>
              </button>
            </div>
          </section>

          {/* Bottom Panel */}
          <div
            id="bottom-panel"
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-30"
          ></div>

          {/* Top & Bottom Panel Text */}
          <style jsx>{`
            #top-panel::before,
            #bottom-panel::before {
              content: "Hey, Nice to Meet You!";
              position: absolute;
              width: 100%;
              text-align: center;
              font-size: clamp(2rem, 6vw, 4rem);
              text-transform: uppercase;
              font-weight: 700;
              letter-spacing: 0.1em;
              color: #fff;
              text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              margin: 0;
            }
            #top-panel::before {
              bottom: 0;
              clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
              transform: translateY(50%);
            }
            #bottom-panel::before {
              top: 0;
              clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
              transform: translateY(-50%);
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
