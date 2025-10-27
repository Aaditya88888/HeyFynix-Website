"use client";
import { useEffect, useState } from "react";

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const bgOverlay = document.getElementById("bgOverlay");
    const cards = document.querySelectorAll(".group");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const hoverImage = card.getAttribute("data-image");
        bgOverlay.style.backgroundImage = `url(${hoverImage})`;
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
      });
    };
  }, []);

  const sections = [
    {
      title: "Branding",
      desc: "Who are you when no one’s watching? That’s what we help you define.",
      extra:
        "We build unique brand identities that help people remember you. When your visuals and story stay consistent, you can increase your revenue by 23%.",
      img: "https://images.pexels.com/photos/6606317/pexels-photo-6606317.jpeg",
    },
    {
      title: "Filmmaking",
      desc: "People forget ads. They remember stories.",
      extra:
        "A strong story builds a connection, and video is the best way to tell it. Our brand films and commercials boost awareness by 54%.",
      img: "https://images.pexels.com/photos/11001143/pexels-photo-11001143.jpeg",
    },
    {
      title: "Content Creation",
      desc: "Scroll. Scroll. Skip. Stop. That “stop” moment? That’s us.",
      extra:
        "People scroll fast, we help stop the scroll with stunning visuals. Because brands with high-quality content with visuals get 650% more engagement than low quality ones.",
      img: "https://images.pexels.com/photos/31293423/pexels-photo-31293423.jpeg",
    },
    {
      title: "Marketing",
      desc: "Marketing is not about being loud. It’s about being remembered.",
      extra:
        "We turn social pages into growing communities that drive real business. 78% of people are more likely to buy from brands they follow and feel connected to.",
      img: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
    },
    {
      title: "Web Design",
      desc: "Your website isn’t just a link. It’s your first impression.",
      extra:
        "We create websites that don’t just exist, they work. They guide, convert, and tell your story with clarity and style. 88% of users leave if the experience is poor.",
      img: "https://images.pexels.com/photos/1009949/pexels-photo-1009949.jpeg",
    },
    {
      title: "Creative Consultancy",
      desc: "Feeling stuck? Let’s talk about strategy.",
      extra:
        "Confused about how to position your brand? We help you find clarity. We believe clear positioning can help brands grow 2x faster.",
      img: "https://images.pexels.com/photos/34188758/pexels-photo-34188758.jpeg",
    },
  ];

  return (
    <div className="font-poppins bg-black text-white overflow-x-hidden">
      {/* Heading Section */}
      <div className="text-center py-20 px-5 max-w-5xl mx-auto relative z-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">What We Do</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
          What Can We Do for You? Let's Dive In
        </h3>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Your challenges are our playground. Here’s how we can team up to make
          things happen (and we're pretty darn good at it).
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="grid grid-cols-3 grid-rows-2 w-full min-h-screen relative z-10"
        id="container"
      >
        {/* BG overlay */}
        <div
          id="bgOverlay"
          className="absolute inset-0 bg-black bg-cover bg-center transition-all duration-500 z-0"
        ></div>

        {sections.map((section, idx) => (
          <div
            key={idx}
            className="relative flex items-end justify-center overflow-hidden cursor-pointer border border-white/5 group z-10"
            data-image={section.img}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent transition-all duration-500 group-hover:from-[#001446]/80 group-hover:to-transparent"></div>

            {/* Text content container */}
            <div
              className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center p-8 z-10 w-full transition-all duration-500 ease-out ${
                hoveredIndex === idx ? "-translate-y-10" : "translate-y-0"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2 text-white transition-all duration-500">
                {section.title}
              </h3>
              <p className="text-base leading-6 text-gray-300 max-w-[350px] mx-auto transition-all duration-500">
                {section.desc}
              </p>

              {/* Extra text on hover with animation */}
              <div
                className={`text-sm leading-6 text-gray-400 max-w-[350px] mx-auto mt-3 transition-all duration-500 ease-out ${
                  hoveredIndex === idx
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                {section.extra}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
