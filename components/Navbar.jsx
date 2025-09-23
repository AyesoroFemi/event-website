"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Logo from '../public/logo.jpg'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="logo" className="h-14 w-auto" />
              <span className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>
                {/* <Image src={Logo} width={100} height={100}/> */}
              </span>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a className={`transition-colors duration-200 font-medium ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white'
              }`} href="#">Home</a>
              <a className={`transition-colors duration-200 font-medium ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white'
              }`} href="#">Register</a>
              <a className={`transition-colors duration-200 font-medium ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white'
              }`} href="#">Speakers</a>
              <a className={`transition-colors duration-200 font-medium ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white'
              }`} href="#">Exhibitors</a>
            </nav>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href="#" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full px-6 py-3 transition-colors duration-200 shadow-lg hover:shadow-xl">Get Tickets</a>
            {/* Mobile menu button */}
            <button className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
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