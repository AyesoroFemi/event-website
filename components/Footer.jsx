import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / brand */}
        <div>
          <div className="mb-4">
            <Image src="/file.svg" alt="logo" width={140} height={36} />
          </div>
          <p className="text-gray-300 max-w-md">
            TRAVCONEXPO is poised to bring Nigeria's travel trade community together — a focused conference and expo for professionals, practitioners and industry partners.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center" href="#" aria-label="facebook">
              <Image src="/globe.svg" alt="fb" width={18} height={18} />
            </a>
            <a className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center" href="#" aria-label="instagram">
              <Image src="/next.svg" alt="ig" width={18} height={18} />
            </a>
            <a className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center" href="#" aria-label="twitter">
              <Image src="/vercel.svg" alt="tw" width={18} height={18} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-gray-400 mb-4">Don't miss a thing! Sign up to receive daily news.</p>

          <form className="flex gap-3 max-w-md">
            <input
              className="flex-1 rounded-md px-4 py-3 text-black"
              placeholder="Your email address"
              aria-label="email"
              type="email"
            />
            <button className="bg-amber-500 hover:bg-amber-600 rounded-md px-5 py-3">Subscribe</button>
          </form>
        </div>

        {/* Social feed */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Social Feed</h3>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
              <Image src="/file.svg" alt="avatar" width={64} height={64} />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="w-20 h-20 bg-gray-800 rounded overflow-hidden">
                  <Image src="/file.svg" alt={`thumb-${n}`} width={80} height={80} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="bg-gray-800 text-white px-3 py-2 rounded">Load More</button>
            <button className="bg-sky-600 text-white px-3 py-2 rounded flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              Follow on Instagram
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>© Copyright Travconex Projects Ltd 2025</div>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer