import React from 'react'

export default function Hero() {
  return (
    <header className="relative w-full h-[80vh] text-white overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.jpg)' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* subtle bottom wave gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
        <div className="w-full text-center md:text-left">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="block text-white">Travelpreneur</span>
            <span className="block text-amber-400 mt-2">Expo</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto md:mx-0">
            19–20 September 2025. Balmoral Convention Centre, Federal Palace Hotel – Lagos.
          </p>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
            <a href="#" className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-8 py-3">Join The Conference</a>
            <a href="#" className="inline-block text-white border border-white/20 rounded-full px-6 py-3 hover:bg-white/5">Learn More</a>
          </div>
        </div>
      </div>

      {/* decorative S-shaped cutout (uses mask so section below shows through) */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-60 pointer-events-none z-0"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id="s-cutout">
            {/* white = visible, black = masked (transparent) */}
            <rect x="0" y="0" width="1440" fill="white" />
            <path d="M0,110 C240,35 480,190 720,110 C960,35 1200,190 1440,110 L1440,200 L0,200 Z" fill="black" />
          </mask>
        </defs>

        {/* a black rect uses the mask to create a transparent S-shaped hole */}
        <rect x="0" y="0" width="1440" height="200" fill="#000" mask="url(#s-cutout)" />
      </svg>
    </header>
  )
}