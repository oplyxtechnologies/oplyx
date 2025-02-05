"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 bg-[#ffffff]  md:bg-opacity-50 md:backdrop-blur-2xl transition-all duration-300 ${
        isScrolled ? "" : ""
      }`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse text-black"
        >
          <Image
            className="w-24"
            src="/logo.svg"
            alt="Oplyx Logo"
            width={24}
            height={24}
          />
        </a>

        {/* Hamburger Icon */}
        <button
          type="button"
          className="inline-block items-center justify-center p-2 w-10 h-10 rounded-lg z-40 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>

          {/* Hamburger Lines */}

          <div
            className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 transform  ${
              isMenuOpen ? "rotate-45 translate-y-0.5 " : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 transform  ${
              isMenuOpen ? "-rotate-45 -translate-y-0.5 " : ""
            }`}
          ></div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium text-center flex flex-col md:flex-row md:space-x-8 gap-4 rtl:space-x-reverse">
            {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block text-black text-center md:p-0 hover:text-[#0000b7] transition-all ease-in-out duration-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white z-30 md:hidden transform transition-transform shadow-md  duration-300 ${
          isMenuOpen
            ? "translate-x-0  shadow-gray-400 backdrop-blur-md bg-opacity-10 "
            : "translate-x-full shadow-none  backdrop-blur-none bg-opacity-100"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-6 py-20">
          {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block text-black text-xl font-medium hover:text-[#0000b7] transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Close Button */}
      </div>
    </nav>
  );
};

export default Nav;
