"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MobileBottomNavbar from "./MobileBottomNavbar";
import "./btn.css";

const navItems = ["Home", "About", "Services", "Work with Us", "Contact"];

const Navbar = () => {
  const pathname = usePathname(); // Get current route

  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full hidden md:flex justify-center px-4 py-2 sticky top-0 z-50">
        <nav className="bg-[#000000] bg-opacity-90 rounded-xl max-w-7xl w-full flex items-center justify-between px-4 py-2 h-14 shadow-md">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo1.png" // logo placed in public/images/
              alt="Heyfynix logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white font-semibold text-base select-none ml-2">
              Heyfynix
            </span>
          </div>

          {/* Nav Links with Framer Motion */}
          <ul className="flex space-x-6 text-white text-sm font-medium">
            {navItems.map((item, index) => {
              const href = `/${item.toLowerCase().trim().replace(/\s+/g, "")}`;
              const isActive = pathname === href;

              return (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={href}
                    className={`relative px-1 py-1 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:rounded-full
                     after:bg-gray-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                     ${
                       isActive
                         ? "text-white font-semibold after:scale-x-100"
                         : "hover:text-blue-400 hover:after:scale-x-100"
                     }`}
                  >
                    {item}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* Say Hello Button */}
          <Link href="/contact">
            <button className="create-button">
              <span>Say Hello</span>
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      <MobileBottomNavbar />
    </>
  );
};

export default Navbar;
