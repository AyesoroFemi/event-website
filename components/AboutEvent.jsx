import React from "react";

export default function AboutEvent() {
  return (
    <section className="relative bg-black text-white py-16">
      {/* Zigzag Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            fill="currentColor"
            points="0,100 50,0 100,100 100,100 0,100"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About The Event</h2>
        <p className="text-gray-300 leading-relaxed mb-12">
          TRAVCONEXPO is poised to being Nigeria’s first dedicated travel trade
          fair and conference focused on capacity building and business growth
          for travel practitioners and professionals. It is designed as a
          premier platform where travel entrepreneurs, industry experts, and the
          general public can gather to network, learn, and explore
          travel-related products and services. The event aims to integrate
          professional development with public engagement, fostering innovation
          and growth in the travel industry.
        </p>

        <div className="grid md:grid-cols-3 items-center gap-6">
          {/* Location */}
          <div>
            <h3 className="font-bold text-lg mb-2">WHERE</h3>
            <p>Balmoral Convention Center</p>
            <p>Federal Palace Hotel, Lagos, NG</p>
          </div>

          {/* Date */}
          <div>
            <h3 className="font-bold text-lg mb-2">WHEN</h3>
            <p>Friday and Saturday</p>
            <p>September 19 to 20, 2025</p>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
              View Speakers
            </button>
          </div>
        </div>
      </div>

      {/* Zigzag Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-6 text-[#065f73]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            fill="currentColor"
            points="0,100 50,0 100,100 100,100 0,100"
          />
        </svg>
      </div>
    </section>
  );
}
