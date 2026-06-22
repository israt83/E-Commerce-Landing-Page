import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-light tracking-widest">
              STAY AHEAD OF TIME
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Subscribe for exclusive offers and timeless updates
            </p>
          </div>

          <div className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-[320px] px-4 py-3 bg-black border border-white/20 focus:outline-none focus:border-[#C9A24E]"
            />
            <button className="px-6 py-3 bg-[#C9A24E] text-black font-medium tracking-wide hover:bg-[#b8943f] transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

          {/* Brand */}
          <div>
            <h1 className="text-2xl tracking-[0.3em] text-[#C9A24E]">
              CHRONOVA
            </h1>
            <p className="text-gray-400 text-sm mt-4 leading-6">
              Crafted for timeless elegance. Premium Swiss-inspired watches
              designed for modern lifestyle.
            </p>

            <div className="flex gap-4 mt-5 text-gray-400">
              <FaFacebookF className="w-5 h-5 hover:text-[#C9A24E] cursor-pointer" />
              <FaInstagram className="w-5 h-5 hover:text-[#C9A24E] cursor-pointer" />
              <FaTwitter className="w-5 h-5 hover:text-[#C9A24E] cursor-pointer" />
              <FaYoutube className="w-5 h-5 hover:text-[#C9A24E] cursor-pointer" />
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-[#C9A24E] tracking-widest mb-4">COLLECTIONS</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Classic</li>
              <li className="hover:text-white cursor-pointer">Sports</li>
              <li className="hover:text-white cursor-pointer">Luxury</li>
              <li className="hover:text-white cursor-pointer">Limited Edition</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#C9A24E] tracking-widest mb-4">COMPANY</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Story</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C9A24E] tracking-widest mb-4">CONTACT</h3>

            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <MdPhone className="w-4 h-4" /> +123 456 789
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="w-4 h-4" /> info@chronova.com
              </p>
              <p className="flex items-center gap-2">
                <MdLocationOn className="w-4 h-4" /> Geneva, Switzerland
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Chronova. All Rights Reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}