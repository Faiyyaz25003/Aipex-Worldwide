
"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* Top Row */}
      <div className="flex justify-between items-center p-3 max-w-10xl mx-auto">
        {/* Logo */}
        <img src="/aipex-logo.png" alt="Aipex Logo" className="h-24" />

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-md text-base hover:bg-green-700 transition">
            Download our Android App
          </button>

          <span className="text-blue-600 font-semibold cursor-pointer">IN</span>
          <span className="text-red-600 font-semibold cursor-pointer">UAE</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Navbar Component */}
      <Navbar mobileMenu={mobileMenu} />
    </header>
  );
};

export default Header;
