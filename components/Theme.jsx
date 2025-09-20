import React from 'react'
import Image from 'next/image'
import Face from '../public/hero.jpg'


export default function Theme() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full-bleed image on large screens: occupies the right half of the viewport (left edge at center) */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 left-1/2 z-0">
        <Image src={Face} alt="theme media" fill className="object-cover" />
      </div>

      <div className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left text block constrained and nudged further left on large screens */}
          <div className="max-w-[1400px] lg:max-w-[1600px] transform lg:-translate-x-40">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">Theme</div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-500 leading-tight mb-6">
              Innovating the future of Travel:
              <span className="block">Empowering Entrepreneurs in a New Era.</span>
            </h3>
            <p className="text-gray-600 max-w-prose">
              Focus is on the transformative power of innovation within the travel industry, especially in the wake of recent global challenges. It emphasizes the critical role of entrepreneurs in shaping the future of travel through creativity, adaptability, and sustainable practices.
            </p>
          </div>

          {/* Inline image for small screens (hidden on lg because full-bleed is used) */}
          <div className="lg:hidden flex justify-center">
            <div className="w-full max-w-[520px] aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative">
              <Image src={Face} alt="media" className="w-full h-full object-cover" />
              {/* pager dot */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <span className="block w-3 h-3 bg-white rounded-full shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}