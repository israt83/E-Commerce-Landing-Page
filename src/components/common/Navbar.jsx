import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl tracking-[6px] font-light text-[#C9A24E]">
          CHRONOVA
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <a className="hover:text-yellow-500 transition" href="#">HOME</a>
          <a className="hover:text-yellow-500 transition" href="#">COLLECTIONS</a>
          <a className="hover:text-yellow-500 transition" href="#">BEST SELLERS</a>
          <a className="hover:text-yellow-500 transition" href="#">ABOUT US</a>
          <a className="hover:text-yellow-500 transition" href="#">CONTACT</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <FiSearch className="w-5 h-5 cursor-pointer hover:text-yellow-500" />
          <FiUser className="w-5 h-5 cursor-pointer hover:text-yellow-500" />

          <div className="relative cursor-pointer">
            <FiShoppingCart className="w-5 h-5 hover:text-yellow-500" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-yellow-500 text-black rounded-full px-1">
              2
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm">
          <a className="block hover:text-yellow-500">HOME</a>
          <a className="block hover:text-yellow-500">COLLECTIONS</a>
          <a className="block hover:text-yellow-500">BEST SELLERS</a>
          <a className="block hover:text-yellow-500">ABOUT US</a>
          <a className="block hover:text-yellow-500">CONTACT</a>
        </div>
      )}
    </header>
  );
}