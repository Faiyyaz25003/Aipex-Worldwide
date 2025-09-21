"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[300px] md:h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/hero.jpeg')", // ✅ Your image in /public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-5xl px-6 text-left">
        <h1 className="text-xl md:text-[40px] font-extrabold leading-snug tracking-tight drop-shadow-lg font-sans">
          We offer innovative logistics solutions that <br />
          deliver your shipments on time.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
