import React from 'react'

export default function JoinUs() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-[url('/hero.jpg')] bg-center bg-cover bg-fixed">
      {/* Top curved border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none" aria-hidden="true">
        <svg className="relative block w-[calc(100%+1px)] h-12 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,60 350,60 600,20 C850,-20 1050,40 1200,80 L1200,0 L0,0 Z" fill="#ffffff" opacity="0.06"></path>
        </svg>
      </div>
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl text-center px-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4">Join the Workshop!</h2>
        <p className="text-white/90 max-w-5xl mx-auto mb-8">
          Now is the time to book your spot in our maiden edition. Engage in 40+ sessions with 25+ seasoned speakers and network with Travelpreneurs to take your travel/tourism and hospitality business to the next level.
        </p>

        <a
          href="#tickets"
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-amber-600 transition"
        >
          Get Tickets
        </a>

        <div className="mt-12 grid grid-cols-5 gap-6 justify-center items-center text-white">
          <div className="flex flex-col items-center">
            <div className="text-5xl font-extrabold">00</div>
            <div className="text-sm text-white/70">weeks</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-extrabold">00</div>
            <div className="text-sm text-white/70">days</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-extrabold">00</div>
            <div className="text-sm text-white/70">hours</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-extrabold">00</div>
            <div className="text-sm text-white/70">minutes</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl font-extrabold">00</div>
            <div className="text-sm text-white/70">seconds</div>
          </div>
        </div>
      </div>
      {/* Bottom curved border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none" aria-hidden="true">
        <svg className="relative block w-[calc(100%+1px)] h-12 md:h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C150,80 350,80 600,110 C850,140 1050,80 1200,40 L1200,120 L0,120 Z" fill="#ffffff" opacity="0.06"></path>
        </svg>
      </div>
    </section>
  )
}