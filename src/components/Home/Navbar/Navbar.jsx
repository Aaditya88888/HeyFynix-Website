"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion"; 

import { usePathname, useRouter } from "next/navigation";
import LoadingOverlay from "@/components/LoadingOverlay";

export default function LusionNavbar() {
  const [soundOn, setSoundOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false); // loader state
  const audioRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  // Top pe yeh add karo (existing imports ke saath)
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
        .catch((e) => console.warn("Audio play failed", e));
    } else {
      audioRef.current.pause();
    }
  }, [soundOn]);

  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle Link click with loader
  const handleLinkClick = (path) => {
    if (pathname === path) return;
    setLoading(true);
    setMenuOpen(false);
    setTimeout(() => {
      router.push(path);
    }, 1600); // 1.6s loader animation duration
  };

  return (
    <>
      {loading && <LoadingOverlay />}

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Montserrat:ital,wght@1,800&display=swap"
        rel="stylesheet"
      />

      {/* LEFT SIDE LOGO */}
      <div className="fixed left-16 top-12 z-50">
        <h3
          className="text-white text-2xl font-semibold italic leading-none"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          HEYFYNIX
        </h3>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="fixed right-10 top-10 z-50 flex flex-row items-center space-x-5">
        {/* SOUND BUTTON */}
        <button
          onClick={() => setSoundOn((p) => !p)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
            e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
          }}
          className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gray-200 backdrop-blur-md overflow-hidden cursor-pointer"
          aria-label={soundOn ? "Mute" : "Unmute"}
        >
          <span
            className="absolute inset-0 rounded-full bg-[#F23737] scale-0 group-hover:scale-150 transition-transform duration-400 ease-out"
            style={{
              transformOrigin: "var(--mouse-x, 50%) var(--mouse-y, 50%)",
            }}
          />
          {soundOn ? (
            <div className="relative w-6 h-6 z-10">
              <svg
                width="24"
                height="24"
                viewBox="4 4 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
              >
                <path
                  d="M5 12 Q 7 8, 9 12 T 13 12 T 17 12 T 21 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  className="origin-center transition-colors duration-300 group-hover:stroke-white"
                  style={{
                    strokeDasharray: "6 6",
                    strokeDashoffset: 0,
                    animation: "wave 1.4s ease-in-out infinite",
                  }}
                />
              </svg>
            </div>
          ) : (
            <div className="relative w-6 h-6 z-10">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black -rotate-180 origin-center transition-colors duration-300 group-hover:bg-white" />
            </div>
          )}
        </button>

        {/* LET'S TALK */}
        <button className="group flex items-center justify-center px-3 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-sm tracking-tighter hover:bg-[#F23737] transition-all duration-300 min-w-[120px] overflow-hidden">
          <div className="w-4 h-4 flex items-center justify-center">
            <Image
              src="/ArrowRight.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            />
          </div>
          <span className="transition-transform duration-300 -translate-x-2 group-hover:translate-x-2.5">
            LET'S TALK
          </span>
          <span className="w-1 h-1 rounded-full bg-white transition-all duration-300 opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-0 ml-2 -translate-x-1 group-hover:translate-x-0" />
        </button>

        {/* MENU BUTTON */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`group relative px-2 py-2 rounded-full bg-gray-200 backdrop-blur-md border border-white text-black font-semibold tracking-tighter flex items-center justify-center gap-2 transition-all duration-200 ${
            menuOpen ? "bg-white" : "hover:bg-white"
          } min-w-[100px]`}
        >
          <span className="w-12 text-center">
            {menuOpen ? "CLOSE" : "MENU"}
          </span>
          <span
            className={`flex gap-1 w-5 justify-center items-center transition-all duration-300 ease-in-out group-hover:rotate-90 ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            <span className="w-1 h-1 bg-black rounded-full transition-all duration-200"></span>
            <span className="w-1 h-1 bg-black rounded-full transition-all duration-200"></span>
          </span>
        </button>
      </div>

      {/* MENU PANEL */}

      {/* MENU PANEL - No hydration error + zero space when closed */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{
            opacity: menuOpen ? 1 : 0,
            scale: menuOpen ? 1 : 0.95,
            y: menuOpen ? 0 : -20,
            display: menuOpen ? "block" : "none", // ← Important: hide from layout when closed
          }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-10 top-24 z-40 w-72 bg-[rgb(96,94,94)] backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden pointer-events-none"
          style={{ transformOrigin: "top right" }}
        >
          {/* Backdrop - only interactive when menu open */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: menuOpen ? 0.7 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 -left-full -right-full -top-full -bottom-full bg-black/70 cursor-pointer"
            onClick={closeMenu}
          />

          {/* Content - pointer events only when open */}
          <div
            className={`relative py-4 px-10 ${
              menuOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <nav>
              {menuItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <motion.div
                    key={item.name}
                    className="relative overflow-hidden group rounded-2xl -mx-6 px-6 py-2.5"
                    whileHover={
                      isActive ? {} : { backgroundColor: "rgba(0, 0, 0, 0.6)" }
                    }
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {!isActive && (
                      <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
                    )}

                    <motion.div
                      className="relative z-10"
                      initial="initial"
                      whileHover={isActive ? "initial" : "hover"}
                    >
                      {isActive ? (
                        <div className="relative block text-3xl text-white/60 font-normal cursor-default overflow-hidden h-[2.2rem]">
                          <div className="relative h-full flex items-center">
                            {item.name}
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => handleLinkClick(item.path)}
                          className="relative block text-3xl text-white font-normal cursor-pointer overflow-hidden h-[2.2rem]"
                        >
                          <div className="relative h-full">
                            <motion.span
                              className="absolute inset-0 flex items-center leading-none"
                              variants={{
                                initial: { y: 0, opacity: 1 },
                                hover: { y: -36, opacity: 0.85 },
                              }}
                              transition={{
                                duration: 1,
                                ease: [0.1, 1, 0.1, 1],
                              }}
                            >
                              {item.name}
                            </motion.span>
                            <motion.span
                              className="absolute inset-0 flex items-center text-[rgb(192,180,180)] leading-none"
                              variants={{
                                initial: { y: 36, opacity: 0 },
                                hover: { y: 0, opacity: 1 },
                              }}
                              transition={{
                                duration: 1,
                                ease: [0.1, 1, 0.1, 1],
                              }}
                            >
                              {item.name}
                            </motion.span>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {isActive ? (
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white opacity-70 z-10" />
                    ) : (
                      <motion.span
                        className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none z-10"
                        initial={{ x: -20 }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </motion.span>
                    )}
                  </motion.div>
                );
              })}
            </nav>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
