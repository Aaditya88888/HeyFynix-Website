// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const MakesUsDifferent = () => {
//   const containerRef = useRef(null);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const slider = sliderRef.current;
//     const container = containerRef.current;
//     const cards = slider.children;
//     const cardWidth = cards[0]?.offsetWidth || 0;
//     const gap = 20; // Matches the gap in your CSS
//     const totalCardWidth = cardWidth + gap;
//     const speed = 3; // Pixels per frame (adjust for faster/slower animation)

//     // Duplicate cards to ensure seamless looping
//     const originalCardCount = cards.length;
//     for (let i = 0; i < originalCardCount; i++) {
//       const clone = cards[i].cloneNode(true);
//       slider.appendChild(clone);
//     }

//     // Set initial position
//     gsap.set(slider, { x: 0 });

//     // Infinite scroll animation
//     const animate = () => {
//       const currentX = gsap.getProperty(slider, "x");

//       let newX = currentX + speed;

//       // When the last card is fully out of view on the right, move it to the start
//       if (newX >= 0) {
//         newX -= totalCardWidth; // Adjust x position
//         slider.insertBefore(slider.lastElementChild, slider.firstElementChild); // Move last card to start
//         gsap.set(slider, { x: newX }); // Update position to avoid jump
//       } else {
//         gsap.set(slider, { x: newX });
//       }
//     };

//     // Add animation to GSAP ticker for smooth frame-by-frame updates
//     gsap.ticker.add(animate);

//     // Cleanup
//     return () => {
//       gsap.ticker.remove(animate);
//     };
//   }, []);

//   const images = [
//     "https://images.pexels.com/photos/34154499/pexels-photo-34154499.jpeg",
//     "https://images.pexels.com/photos/34087412/pexels-photo-34087412.jpeg",
//     "https://images.pexels.com/photos/34183957/pexels-photo-34183957.jpeg",
//     "https://images.pexels.com/photos/34137666/pexels-photo-34137666.jpeg",
//   ];

//   const texts = [
//     "Tell stories that move people",
//     "Design brand voices that are unforgettable",
//     "Create work that isn’t just trendy, but timeless",
//     "Partner with teams who care about meaning, not just metrics",
//   ];

//   return (
//     <>
//       {/* ✅ Simple Static Text Section (No Animations) */}
//       <div className="text-white bg-black text-section flex flex-col items-center justify-center text-center">
//         <h1 className="text-5xl font-bold mb-4">Our why makes us different</h1>
//         <h2 className="text-2xl font-semibold mb-4">
//           We adapt. We evolve. We rise.
//         </h2>
//         <p className="text-lg max-w-xl mb-2">
//           We’re not here to be another content studio.
//         </p>
//         <p className="text-lg max-w-xl">We’re here to:</p>
//       </div>

//       {/* Slider Section */}
//       <section className="horizontal-slider-container" ref={containerRef}>
//         <div className="slider-wrapper">
//           <div className="slider" ref={sliderRef}>
//             {images.map((img, i) => (
//               <div className="image-wrapper" key={i}>
//                 <img src={img} alt={`Different ${i + 1}`} />
//                 <div className="image-text">
//                   <h3 className="image-heading">{texts[i]}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <style jsx>{`
//           .horizontal-slider-container {
//             position: relative;
//             background-color: black;
//             overflow: hidden;
//           }
//           .text-section {
//             padding: 6rem 10%;
//             color: white;
//             min-height: 50vh;
//           }
//           .slider-wrapper {
//             overflow: hidden;
//             width: 100%;
//             height: 100vh;
//           }
//           .slider {
//             display: flex;
//             gap: 20px;
//             padding: 0 20px;
//             align-items: center;
//             height: 100%;
//             position: relative;
//             white-space: nowrap; /* Prevents wrapping */
//           }
//           .image-wrapper {
//             flex: 0 0 auto;
//             width: 25vw;
//             height: 60%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             position: relative;
//             overflow: hidden;
//             border-radius: 10px;
//           }
//           .image-wrapper img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             object-position: center;
//             transition: opacity 0.3s ease;
//           }
//           .image-text {
//             position: absolute;
//             bottom: 8%;
//             left: 50%;
//             transform: translateX(-50%);
//             color: white;
//             text-align: center;
//             font-weight: 500;
//             opacity: 1;
//             pointer-events: none;
//             padding: 1rem 1.2rem;
//             border-radius: 10px;
//             width: 85%;
//             word-wrap: break-word;
//             white-space: normal;
//             overflow: hidden;
//             box-sizing: border-box;
//           }

//           .image-heading {
//             font-size: 1.6rem;
//             font-weight: 700;
//           }

//           @media screen and (max-width: 1024px) {
//             .image-wrapper {
//               width: 45vw;
//               height: 60%;
//             }
//             .slider {
//               gap: 15px;
//               padding: 0 15px;
//             }
//             .image-heading {
//               font-size: 1.4rem;
//             }
//           }

//           @media screen and (max-width: 768px) {
//             .image-wrapper {
//               width: 65vw;
//               height: 50%;
//             }
//             .slider {
//               gap: 10px;
//               padding: 0 10px;
//             }
//             .image-heading {
//               font-size: 1.2rem;
//             }
//           }

//           @media screen and (max-width: 480px) {
//             .image-wrapper {
//               width: 85vw;
//               height: 40%;
//             }
//             .slider {
//               gap: 8px;
//               padding: 0 8px;
//             }
//             .image-heading {
//               font-size: 1rem;
//             }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default MakesUsDifferent;

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
    const gap = 20; // Matches the gap in your CSS
    const totalCardWidth = cardWidth + gap;
    const speed = 3; // Pixels per frame (adjust for faster/slower animation)

    // Duplicate cards to ensure seamless looping
    const originalCardCount = cards.length;
    for (let i = 0; i < originalCardCount; i++) {
      const clone = cards[i].cloneNode(true);
      slider.appendChild(clone);
    }

    // Set initial position
    gsap.set(slider, { x: 0 });

    // Infinite scroll animation
    const animate = () => {
      const currentX = gsap.getProperty(slider, "x");

      let newX = currentX + speed;

      // When the last card is fully out of view on the right, move it to the start
      if (newX >= 0) {
        newX -= totalCardWidth;
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        gsap.set(slider, { x: newX });
      } else {
        gsap.set(slider, { x: newX });
      }
    };

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
    };
  }, []);

  // ✅ Using local image from public/images
  const images = [
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
    "/images/home/differentimage.jpg",
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
      {/* ✅ Simple Static Text Section (No Animations) */}
      <div className="text-white bg-black text-section flex flex-col items-center justify-center text-center">
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
