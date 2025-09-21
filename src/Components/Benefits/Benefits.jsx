
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
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h3 className="text-red-600 font-semibold text-sm">
        An ISO 9001:2005 certified company
      </h3>
      <h2 className="text-3xl font-bold mt-2 mb-6">The Aipex Benefit</h2>
      <p className="text-gray-700 max-w-3xl mb-12">
        Our expertise and many years of experience have enabled us to provide a
        wholesome supply chain solution. Our operations network leveraged with
        our employee workforce has enabled us to reach destinations across India
        and International markets.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            {item.icon}
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
