import React from 'react'

export default function About() {
  return (
  <section className="relative bg-black/70 text-white pt-28 pb-12">
      {/* Top S-curve to match hero bottom (nudged up) */}
  <div className="absolute -top-20 left-0 right-0 overflow-visible pointer-events-none" aria-hidden="true">
        <svg className="block w-full h-44" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Filled shape (matches About background) */}
          <path d="M0,110 C240,35 480,190 720,110 C960,35 1200,190 1440,110 L1440,0 L0,0 Z" fill="#000" />
          {/* Subtle highlight stroke following the same S path to show the joint. Use a very translucent light color so it's visible against black. */}
          <path d="M0,110 C240,35 480,190 720,110 C960,35 1200,190 1440,110" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

  <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">About The Event</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            TRAVCONEXPO is a premier platform where travel entrepreneurs, industry experts, and the general public can gather to network, learn, and explore travel-related products and services. The event aims to integrate professional development with public engagement, fostering innovation and growth in the travel industry.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-xs text-gray-400 font-semibold tracking-wide">WHERE</h3>
            <p className="mt-4 text-gray-200">Balmoral Convention Center</p>
            <p className="text-gray-200">Federal Palace Hotel, Lagos, NG</p>
          </div>

          <div>
            <h3 className="text-xs text-gray-400 font-semibold tracking-wide">WHEN</h3>
            <p className="mt-4 text-gray-200">Friday and Saturday</p>
            <p className="text-gray-200">September 19 – 20, 2025</p>
          </div>

          <div className="flex md:justify-end justify-start">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-6 py-3">View Speakers</button>
          </div>
        </div>
      </div>
    </section>
  )
}