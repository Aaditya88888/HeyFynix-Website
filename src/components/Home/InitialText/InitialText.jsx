"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InitialText = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .to(".word .text-foreground", {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
      });
  }, []);

  return (
    <div className="scroll-section relative z-0 h-[200vh] bg-black text-white">
      <div className="sticky top-0 mx-auto flex items-center py-20">
        <div className="flex flex-col justify-center">
          {/* First Line */}
          <span className="text-white/20 flex flex-wrap text-2xl tracking-tighter md:text-3xl lg:text-5xl xl:text-7xl">
            {[
              "Ever",
              "feel",
              "like",
              "your",
              "brand",
              "needs",
              "that",
              "extra",
              "spark",
              "to",
              "stand",
              "out?",
              "That's",
              "where",
              "we",
              "come",
              "in!",
            ].map((word, index) => (
              <span key={index} className="word relative mx-1 lg:mx-1.5">
                <span className="absolute opacity-30 text-white">{word}</span>
                <span
                  className="text-foreground text-white"
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              </span>
            ))}
          </span>

          {/* Second Line */}
          <span className="text-white/20 flex flex-wrap text-2xl tracking-tighter md:text-3xl lg:text-5xl xl:text-7xl mt-4">
            {[
              "We",
              "believe",
              "in",
              "getting",
              "the",
              "work",
              "done",
              "and",
              "letting",
              "the",
              "results",
              "show",
              "you",
              "who",
              "we",
              "are!",
            ].map((word, index) => (
              <span key={index} className="word relative mx-1 lg:mx-1.5">
                <span className="absolute opacity-30 text-white">{word}</span>
                <span
                  className="text-foreground text-white"
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
              </span>
            ))}
          </span>
        </div>
      </div>

      <style jsx>{`
        .word {
          position: relative;
          display: inline-block;
        }
        .word .absolute {
          transition: opacity 0.2s ease;
        }
        .word .text-foreground {
          position: relative;
          z-index: 10;
        }
        .word .text-foreground[style*="opacity: 1"] ~ .absolute {
          opacity: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default InitialText;
