// "use client";

// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
// import MobileBottomNavbar from "./MobileBottomNavbar";
// import "./btn.css";

// const navItems = ["Home", "About", "Services", "Work with Us", "Contact"];

// const Navbar = () => {
//   const pathname = usePathname(); // Get current route

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <div className="w-full hidden md:flex justify-center px-4 py-2 sticky top-0 z-50">
//         <nav className="bg-[#000000] bg-opacity-90 rounded-xl max-w-7xl w-full flex items-center justify-between px-4 py-2 h-14 shadow-md">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src="/images/logo1.png" // logo placed in public/images/
//               alt="Heyfynix logo"
//               className="w-10 h-10 rounded-full"
//             />
//             <span className="text-white font-semibold text-base select-none ml-2">
//               Heyfynix
//             </span>
//           </div>

//           {/* Nav Links with Framer Motion */}
//           <ul className="flex space-x-6 text-white text-sm font-medium">
//             {navItems.map((item, index) => {
//               const href = `/${item.toLowerCase().trim().replace(/\s+/g, "")}`;
//               const isActive = pathname === href;

//               return (
//                 <motion.li
//                   key={item}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Link
//                     href={href}
//                     className={`relative px-1 py-1 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:rounded-full
//                      after:bg-gray-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
//                      ${
//                        isActive
//                          ? "text-white font-semibold after:scale-x-100"
//                          : "hover:text-blue-400 hover:after:scale-x-100"
//                      }`}
//                   >
//                     {item}
//                   </Link>
//                 </motion.li>
//               );
//             })}
//           </ul>

//           {/* Say Hello Button */}
//           <Link href="/contact">
//             <button className="create-button">
//               <span>Say Hello</span>
//             </button>
//           </Link>
//         </nav>
//       </div>

//       {/* Mobile Nav */}
//       <MobileBottomNavbar />
//     </>
//   );
// };

// export default Navbar;

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  // ---- 1. Start muted -------------------------------------------------
  const [soundOn, setSoundOn] = useState(false); // ← changed to false
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  // -----------------------------------------------------------------
  // 1. Create the Audio element once (on mount) and keep it in a ref
  // -----------------------------------------------------------------
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

  // -----------------------------------------------------------------
  // 2. Play / pause when soundOn changes
  // -----------------------------------------------------------------
  useEffect(() => {
    if (!audioRef.current) return;

    if (soundOn) {
      audioRef.current
        .play()
        .catch((e) =>
          console.warn("Audio play failed (user interaction required?)", e)
        );
    } else {
      audioRef.current.pause();
    }
  }, [soundOn]);

  // -----------------------------------------------------------------
  // 3. UI
  // -----------------------------------------------------------------
  return (
    <>
      {/* LEFT SIDE VERTICAL LOGO */}
      <div className="fixed left-16 top-12 z-50">
        <h3 className="text-white text-[22px] font-bold leading-none rotate-0">
          HEYFYNIX
        </h3>
      </div>

      {/* RIGHT SIDE BUTTON GROUP */}
      <div className="fixed right-10 top-10 z-50 flex flex-row items-center space-x-6">
        {/* SOUND BUTTON */}

        <button
          onClick={() => setSoundOn((prev) => !prev)}
          className="relative w-10 h-10 flex items-center justify-center rounded-full 
             bg-gray-200 backdrop-blur-md border border-white/30 
             text-black text-2xl transition cursor-pointer hover:bg-blue-500"
          aria-label={soundOn ? "Mute" : "Unmute"}
        >
          {/* Sound wave icon when on */}
          {soundOn ? (
            <Image src="/Activity.svg" alt="Sound on" width={24} height={24} />
          ) : (
            // Diagonal line when muted
            <div className="relative w-6 h-6">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-black transform " />
            </div>
          )}
        </button>

        {/* LET'S TALK */}

        <button
          className="group relative px-6 py-2 rounded-full bg-white/20 backdrop-blur-md 
                            text-white font-bold tracking-tighter
                           hover:bg-blue-500 transition-all duration-300 flex items-center gap-4"
        >
          <span>LET'S TALK</span>
        </button>

        {/* MENU BUTTON */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="px-6 py-2 rounded-full bg-gray-200 backdrop-blur-md 
                     border border-white text-black font-semibold tracking-wider 
                     hover:bg-white transition-all duration-300 flex items-center gap-2"
        >
          MENU
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
          </span>
        </button>
      </div>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-40" />
      )}
    </>
  );
}
