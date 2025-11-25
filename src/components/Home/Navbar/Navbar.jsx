"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function LusionNavbar() {
  const [soundOn, setSoundOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio("/sounds/audio.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

 useEffect(() => {
    if (!audioRef.current) return;

    if (soundOn) {
      audioRef.current
        .play()
        .catch((e) => console.warn("Audio play failed (user interaction required?)", e));
    } else {
      audioRef.current.pause();
    }
  }, [soundOn]);

   return (
    <>
      {/* Google Fonts: Montserrat ExtraBold Italic */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Montserrat:ital,wght@1,800&display=swap"
        rel="stylesheet"
      />

      {/* LEFT SIDE VERTICAL LOGO */}
      <div className="fixed left-16 top-12 z-990">
        <h3
          className="text-white text-2xl font-semibold italic leading-none"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          HEYFYNIX
        </h3>
      </div>

      {/* RIGHT SIDE BUTTON GROUP */}
      <div className="fixed right-10 top-10 z-990 flex flex-row items-center space-x-5">
        {/* SOUND BUTTON */}
<button
  onClick={() => setSoundOn(p => !p)}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  }}
  className="
    group relative flex items-center justify-center
    w-11 h-11 rounded-full
    bg-gray-200 backdrop-blur-md 
    overflow-hidden cursor-pointer
  "
  aria-label={soundOn ? 'Mute' : 'Unmute'}
>
  {/* ----- BLUE CIRCLE (grows from cursor position) ----- */}
  <span
    className="
      absolute inset-0 rounded-full bg-[#F23737]
      scale-0 group-hover:scale-150
      transition-transform duration-400 ease-out
    "
    style={{
      transformOrigin: 'var(--mouse-x, 50%) var(--mouse-y, 50%)'
    }}
  />

  {/* ----- ICON (always on top) ----- */}
  {soundOn ? (
    // MOVING BLACK WAVE when sound is ON
   <div className="relative w-6 h-6 z-950">
  <svg
    width="24"
    height="24"
    viewBox="4 4 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full"
  >
    <path
      d={`
        M5 12 
        Q 7 8, 9 12 
        T 13 12 
        T 17 12 
        T 21 12
      `}
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      className="
        origin-center
        transition-colors duration-300
        group-hover:stroke-white
      "
      style={{
        strokeDasharray: '6 6',
        strokeDashoffset: 0,
        animation: 'wave 1.4s ease-in-out infinite',
      }}
    />
  </svg>
</div>
  ) : (
    // STATIC BLACK LINE when muted
    <div className="relative w-6 h-6 z-10">
      <div
        className="
          absolute top-1/2 left-0 w-full h-0.5 bg-black
          -rotate-180 origin-center
          transition-colors duration-300
          group-hover:bg-white
        "
      />
    </div>
  )}
</button>
        {/* LET'S TALK */}
    <button
  className="group flex items-center justify-center 
             px-3 py-3 rounded-full bg-white/20 backdrop-blur-md 
             text-white font-semibold text-sm tracking-tighter
             hover:bg-[#F23737] transition-all duration-300
             min-w-[120px] overflow-hidden"
>
  {/* Reserved space for arrow */}
  <div className="w-4 h-4 flex items-center justify-center">
    <Image
      src="/ArrowRight.svg"
      alt="Arrow"
      width={16}
      height={16}
      className="transition-all duration-300
                 opacity-0 group-hover:opacity-100 
                 -translate-x-4 group-hover:translate-x-0"
    />
  </div>

  {/* Text */}
  <span className="transition-transform duration-300 -translate-x-2 group-hover:translate-x-2.5">
    LET'S TALK
  </span>

  {/* Dot */}
  <span
    className="w-1 h-1 rounded-full bg-white transition-all duration-300
               opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-0
               ml-2 -translate-x-1 group-hover:translate-x-0"
  />
</button>

        {/* MENU BUTTON */}
       <button
  onClick={() => setMenuOpen(prev => !prev)}
  className={`
    group relative px-2 py-2 rounded-full bg-gray-200 backdrop-blur-md 
    border border-white text-black font-semibold tracking-tighter 
    flex items-center justify-center gap-2 transition-all duration-200
    ${menuOpen ? 'bg-white' : 'hover:bg-white'}
    min-w-[100px]
  `}
>
  {/* Fixed-width text */}
  <span className="w-12 text-center">
    {menuOpen ? 'CLOSE' : 'MENU'}
  </span>

  {/* Dots container with rotation on hover */}
  <span
    className={`
      flex gap-1 w-5 justify-center items-center transition-all duration-300 ease-in-out
      group-hover:rotate-90
      ${menuOpen ? 'rotate-90' : 'rotate-0'}
    `}
  >
    <span className="w-1 h-1 bg-black rounded-full transition-all duration-200"></span>
    <span className="w-1 h-1 bg-black rounded-full transition-all duration-200"></span>
  </span>
</button>
      </div>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-900" />
      )}
    </>
  );
}

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function Navbar() {
//   // ---- NAVBAR SHOW DELAY ----
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowNavbar(true); // show after 2.5 sec
//     }, 250);

//     return () => clearTimeout(timer);
//   }, []);

//   // ---- 1. Start muted -------------------------------------------------
//   const [soundOn, setSoundOn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const audioRef = useRef(null);

//   // Create audio once
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const audio = new Audio("/sounds/audio.mp3");
//     audio.loop = true;
//     audio.volume = 0.4;
//     audioRef.current = audio;

//     return () => {
//       audio.pause();
//       audio.src = "";
//     };
//   }, []);

//   // Play/pause audio when soundOn changes
//   useEffect(() => {
//     if (!audioRef.current) return;

//     if (soundOn) {
//       audioRef.current
//         .play()
//         .catch((e) =>
//           console.warn("Audio play failed (user interaction required?)", e)
//         );
//     } else {
//       audioRef.current.pause();
//     }
//   }, [soundOn]);

//   // If navbar is not ready → Don't render anything
//   if (!showNavbar) return null;

//   // ---- UI ----
//   return (
//     <div className="animate-fadeIn">
//       {/* LEFT SIDE VERTICAL LOGO */}
//       <div className="fixed left-16 top-12 z-990">
//         <h3 className="text-white text-[22px] font-bold leading-none rotate-0">
//           HEYFYNIX
//         </h3>
//       </div>

//       {/* RIGHT SIDE BUTTON GROUP */}
//       <div className="fixed right-10 top-10 z-990 flex flex-row items-center space-x-6">
//         {/* SOUND BUTTON */}
//         <button
//           onClick={() => setSoundOn((prev) => !prev)}
//           className="relative w-10 h-10 flex items-center justify-center rounded-full 
//              bg-gray-200 backdrop-blur-md border border-white/30 
//              text-black text-2xl transition cursor-pointer hover:bg-blue-500"
//           aria-label={soundOn ? "Mute" : "Unmute"}
//         >
//           {soundOn ? (
//             <Image src="/Activity.svg" alt="Sound on" width={24} height={24} />
//           ) : (
//             <div className="relative w-6 h-6">
//               <div className="absolute top-1/2 left-0 w-full h-1 bg-black" />
//             </div>
//           )}
//         </button>

//         {/* LET'S TALK */}
//         <button
//           className="group relative px-6 py-2 rounded-full bg-white/20 backdrop-blur-md 
//                      text-white font-bold tracking-tighter
//                      hover:bg-blue-500 transition-all duration-300 flex items-center gap-4"
//         >
//           <span>LET'S TALK</span>
//         </button>

//         {/* MENU BUTTON */}
//         <button
//           onClick={() => setMenuOpen((prev) => !prev)}
//           className="px-6 py-2 rounded-full bg-gray-200 backdrop-blur-md 
//                      border border-white text-black font-semibold tracking-wider 
//                      hover:bg-white transition-all duration-300 flex items-center gap-2"
//         >
//           MENU
//           <span className="flex gap-1">
//             <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
//             <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
//           </span>
//         </button>
//       </div>

//       {/* MENU OVERLAY */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-40" />
//       )}
//     </div>
//   );
// }