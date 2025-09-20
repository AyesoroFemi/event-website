import React from 'react'

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/globe.svg" alt="logo" className="h-12 w-auto" />
              <span className="text-white font-bold text-xl">TravelExpo</span>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a className="text-white/90 hover:text-white transition-colors duration-200 font-medium" href="#">Home</a>
              <a className="text-white/90 hover:text-white transition-colors duration-200 font-medium" href="#">Register</a>
              <a className="text-white/90 hover:text-white transition-colors duration-200 font-medium" href="#">Speakers</a>
              <a className="text-white/90 hover:text-white transition-colors duration-200 font-medium" href="#">Exhibitors</a>
            </nav>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-6 py-3 transition-colors duration-200 shadow-lg hover:shadow-xl">Get Tickets</a>
            {/* Mobile menu button */}
            <button className="lg:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar