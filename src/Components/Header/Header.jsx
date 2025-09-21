
"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* Top Row */}
      <div className="flex justify-between ml-[25px] p-3 max-w-10xl mx-auto">
        {/* Logo (Always Visible) */}
        <img
          src="/aipex-logo.png"
          alt="Aipex Logo"
          className="ml-0 md:ml-[30px] h-20 md:h-24"
        />

        {/* Right Section (Hide in Mobile, Show in Desktop) */}
        <div className="hidden md:flex mr-0 md:mr-[75px] items-center gap-4">
          <button className="bg-green-600 text-white px-6 py-3  rounded-md text-base hover:bg-green-700 transition">
            Download our Android App
          </button>

          <span className="text-blue-600 font-semibold cursor-pointer">IN</span>
          <span className="text-red-600 font-semibold cursor-pointer">UAE</span>
        </div>
      </div>

      {/* Navbar Component */}
      <Navbar />
    </header>
  );
};

export default Header;
