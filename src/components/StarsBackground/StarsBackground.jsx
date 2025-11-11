// "use client";

// import { useEffect, useRef } from "react";

// export default function StarsBackground() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let w, h;
//     function resize() {
//       w = canvas.width = window.innerWidth;
//       h = canvas.height = window.innerHeight;
//     }
//     resize();
//     window.addEventListener("resize", resize);

//     const layers = [
//       { count: 100, size: 0.6, speed: 0.05, opacity: 0.4 },
//       { count: 200, size: 1, speed: 0.1, opacity: 0.6 },
//       { count: 100, size: 1, speed: 0.15, opacity: 0.8 },
//     ];

//     const stars = [];

//     layers.forEach((layer) => {
//       for (let i = 0; i < layer.count; i++) {
//         stars.push({
//           x: Math.random() * w,
//           y: Math.random() * h,
//           radius: layer.size * (0.7 + Math.random() * 0.6),
//           baseOpacity: layer.opacity * (0.7 + Math.random() * 0.3),
//           twinkleSpeed: 0.008 + Math.random() * 0.015,
//           twinklePhase: Math.random() * Math.PI * 2,
//           speedY: layer.speed * (0.8 + Math.random() * 0.4),
//         });
//       }
//     });

//     let time = 0;
//     let animationId;

//     function animate() {
//       ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
//       ctx.fillRect(0, 0, w, h);

//       time += 0.016;

//       stars.forEach((star) => {
//         star.y -= star.speedY;
//         if (star.y < -10) star.y = h + 10;

//         const twinkle =
//           Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 1;
//         const opacity = star.baseOpacity * twinkle;

//         const gradient = ctx.createRadialGradient(
//           star.x,
//           star.y,
//           0,
//           star.x,
//           star.y,
//           star.radius * 3
//         );
//         gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
//         gradient.addColorStop(0.3, `rgba(200, 220, 255, ${opacity * 0.6})`);
//         gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
//         ctx.fillStyle = gradient;
//         ctx.fill();

//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius * 0.7, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
//         ctx.fill();
//       });

//       animationId = requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed top-0 left-0 w-full h-full"
//       style={{ background: "#000", zIndex: "-1" }}
//     />
//   );
// }

// **********************************************

"use client";

import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const layers = [
      { count: 100, size: 0.6, speed: 0.05, opacity: 0.4 },
      { count: 200, size: 1, speed: 0.1, opacity: 0.6 },
      { count: 100, size: 1, speed: 0.15, opacity: 0.8 },
    ];

    // const layers = [
    //   { count: 1000, size: 0.6, speed: 0.05, opacity: 0.4 },
    //   { count: 1500, size: 1, speed: 0.1, opacity: 0.6 },
    //   { count: 1600, size: 1, speed: 0.15, opacity: 0.8 },
    // ];

    // const layers = [
    //   { count: 380, size: 0.6, speed: 0.04, opacity: 0.5 }, // far stars
    //   { count: 620, size: 1.0, speed: 0.09, opacity: 0.7 }, // mid stars
    //   { count: 420, size: 1.4, speed: 0.16, opacity: 0.9 }, // bright close stars ← NEW LAYER
    //   { count: 180, size: 2.2, speed: 0.28, opacity: 1.0 }, // very bright shooting stars (rare)
    // ];

    const stars = [];

    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: layer.size * (0.7 + Math.random() * 0.6),
          baseOpacity: layer.opacity * (0.7 + Math.random() * 0.3),
          twinkleSpeed: 0.008 + Math.random() * 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
          speedY: layer.speed * (0.8 + Math.random() * 0.4),
        });
      }
    });

    let time = 0;
    let animationId;

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, w, h);

      time += 0.016;

      stars.forEach((star) => {
        star.y -= star.speedY;
        if (star.y < -10) star.y = h + 10;

        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 1;
        const opacity = star.baseOpacity * twinkle;

        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(0.3, `rgba(200, 220, 255, ${opacity * 0.6})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        background: "#000",
        zIndex: -1, // 🔥 Set to 0 (instead of -1)
        position: "fixed",
        inset: 0,
      }}
    />
  );
}
