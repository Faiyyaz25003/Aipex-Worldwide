
import React from "react";
import { MapPin, Shield, Clock, Users, LayoutDashboard } from "lucide-react";

const Benefits = () => {
  const items = [
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      text: "Service to over 200+ Destinations Worldwide",
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-600" />,
      text: "Service to over 27,000+ pin codes in India",
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      text: "A service network of 5+ offices and 50+ staff",
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-red-600" />,
      text: "Automated tools and dashboard to track",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      text: "Safe and Secure shipments delivery",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      text: "On time and efficient delivery schedules",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      text: "Get real time tracking and delivery status",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-8 md:py-16 px-4 md:px-6">
      <h3 className="text-red-500 font-semibold text-2xl">
        An ISO 9001:2005 certified company
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4 md:mb-6">
        The Aipex Benefit
      </h2>
      <p className="text-gray-700 max-w-3xl mb-8 md:mb-12 text-sm md:text-base">
        Our expertise and many years of experience have enabled us to provide a
        wholesome supply chain solution. Our operations network leveraged with
        our employee workforce has enabled us to reach destinations across India
        and International markets.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4 md:p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3 md:gap-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
