"use client";
import Image from "next/image";
import { useState } from "react";

const StickyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-white to-gray-100 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-6">
          <div className="flex-shrink-0">
            <Image
              src="/images/LogoSoldier.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full w-12 h-12 md:w-16 md:h-16"
            />
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600"
            >
              {isMenuOpen ? (
                <Image
                  src="/images/close.png"
                  alt="Close Icon"
                  width={26}
                  height={26}
                />
              ) : (
                <Image
                  src="/images/hamburger.png"
                  alt="Hamburger Icon"
                  width={26}
                  height={26}
                />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex-row md:flex space-x-0 md:space-x-9 text-red-900 font-army text-[25px] md:text-[30px] absolute md:relative top-16 md:top-0 left-0 w-full md:bg-transparent p-6 md:p-0 md:items-center md:w-auto  bg-gradient-to-r from-white to-gray-100`}
          >
            <a
              href="#hero"
              className="block py-2 md:py-0 md:inline hover:text-gray-900 transition duration-300  hover:scale-105 md:hover:scale-110"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 md:py-0 md:inline hover:text-gray-900 transition duration-300 hover:scale-105 md:hover:scale-110"
            >
              About Us
            </a>
            <a
              href="#CTA"
              className="block py-2 md:py-0 md:inline hover:text-gray-900 transition duration-300 hover:scale-105 md:hover:scale-110"
            >
              Donate
            </a>
            <a
              href="#gallery"
              className="block py-2 md:py-0 md:inline hover:text-gray-900 transition duration-300 hover:scale-105 md:hover:scale-110"
            >
              Gallery
            </a>
            <a
              href="#faq"
              className="block py-2 md:py-0 md:inline hover:text-gray-900 transition duration-300 hover:scale-105 md:hover:scale-110"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="block py-2 md:py-0 md:inline hover:text-gray-900 transition duration-300 hover:scale-105 md:hover:scale-110"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
