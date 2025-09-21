
"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Navbar = ({ mobileMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      label: "COURIER SERVICES",
      dropdown: [
        "Domestic Courier",
        "International Courier",  
        "E-commerce Courier",
        "Liquid Courier",
        "Medicine Courier",
        "University Document Courier",
        "Dangerous Goods Courier",
        "Transport Service",
      ],
    },
    { label: "CUSTOMS CLEARING" },
    { label: "WAREHOUSING & FULFILLMENT" },
    { label: "GET IN TOUCH" },
    {
      label: "TRACK SHIPMENT",
      dropdown: ["Single Shipment", "Multiple Shipment"],
    },
    { label: "LOGIN" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-red-600 text-white  hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between px-12 py-3">
          <ul className="flex gap-10">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer font-semibold flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.label}
                {item.dropdown && (
                  <FiChevronDown
                    className={`transition-transform duration-200 text-sm ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 top-full mt-2 bg-white text-black rounded shadow-md w-56 transition-all duration-200 ${
                      openDropdown === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    {item.dropdown.map((drop, i) => (
                      <p
                        key={i}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {drop}
                      </p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      {mobileMenu && (
        <nav className="bg-red-600 text-white md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-red-400 pb-2">
                {item.dropdown ? (
                  <details>
                    <summary className="cursor-pointer font-medium flex items-center justify-between">
                      {item.label} <FiChevronDown />
                    </summary>
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.dropdown.map((drop, i) => (
                        <p key={i} className="cursor-pointer text-sm">
                          {drop}
                        </p>
                      ))}
                    </div>
                  </details>
                ) : (
                  <span className="cursor-pointer font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
