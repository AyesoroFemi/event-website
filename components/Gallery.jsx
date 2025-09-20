import React from 'react'
import Image from 'next/image'

const tiles = new Array(7).fill('/hero.jpg')

export default function Gallery() {
  return (
    <section className="py-0 w-full">
      <div className="relative z-10 w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 auto-rows-[300px]">
          {/* Large portrait image - left side */}
          <div className="row-span-2">
            <div className="w-full h-[620px] overflow-hidden">
              <Image src={tiles[0]} alt="gallery-0" width={620} height={620} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Top right landscape */}
          <div className="col-span-1 lg:col-span-2">
            <div className="w-full h-[300px] overflow-hidden">
              <Image src={tiles[1]} alt="gallery-1" width={1000} height={300} className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Bottom row - 4 smaller images */}
          <div className="w-full h-[300px] overflow-hidden">
            <Image src={tiles[2]} alt="gallery-2" width={480} height={300} className="object-cover w-full h-full" />
          </div>

          <div className="row-span-2  overflow-hidden lg:col-span-1">
            <Image src={tiles[5]} alt="gallery-5" width={480} height={620} className="object-cover w-full h-full" />
          </div>

          <div className="w-full h-[300px] overflow-hidden">
            <Image src={tiles[3]} alt="gallery-3" width={480} height={300} className="object-cover w-full h-full" />
          </div>

          <div className="w-full h-[300px] overflow-hidden">
            <Image src={tiles[4]} alt="gallery-4" width={480} height={300} className="object-cover w-full h-full" />
          </div>

        </div>
      </div>
    </section>
  )
}