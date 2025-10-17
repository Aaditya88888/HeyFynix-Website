"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InitialText = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    // Fade in the white text while scrolling
    timeline.to(".word .text-foreground", {
      opacity: 1,
      stagger: 0.5,
      ease: "none",
    });

    // Fade out the white text at the very end
    timeline.to(
      ".word .text-foreground",
      {
        opacity: 0,
        ease: "none",
      },
      ">" // starts after previous animation finishes
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="hidden w-full text-4xl leading-[0.6] tracking-[-0.02em] md:block lg:text-6xl lg:leading-[1.06]">
      <div className="scroll-section relative z-0 h-[200vh] bg-black text-white">
        <div className="sticky top-0 mx-auto flex items-center py-20">
          <div className="flex flex-col justify-center">
            {/* First Line */}
            <span className="text-white/20 flex flex-wrap text-2xl tracking-tighter md:text-2xl lg:text-4xl xl:text-6xl">
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
                  <span
                    className="absolute text-white"
                    style={{ opacity: 0.3 }}
                  >
                    {word}
                  </span>
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
            <span className="text-white/20 flex flex-wrap text-2xl tracking-tighter md:text-2xl lg:text-4xl xl:text-6xl mt-4">
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
                  <span
                    className="absolute text-white"
                    style={{ opacity: 0.3 }}
                  >
                    {word}
                  </span>
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
          .word .text-foreground {
            position: relative;
            z-index: 10;
          }
        `}</style>
      </div>
    </div>
  );
};

export default InitialText;
