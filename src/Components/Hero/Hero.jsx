
"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero.jpeg')", // ✅ from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(1.2)", // ✅ makes image slightly brighter
      }}
    >
      {/* Overlay (lighter now) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-3xl md:text-3xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          We offer innovative logistics solutions that
        </h1>
        <p className="text-base md:text-3xl text-gray-200 mb-8">
          deliver your couriers on time.
        </p>
      </div>
    </section>
  );
};

export default Hero;
