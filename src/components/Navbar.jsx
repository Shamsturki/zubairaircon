import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/60 backdrop-blur-lg border-b border-white/20 shadow-[0_2px_6px_0_rgba(255,255,255,0.2)]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-black to-blue-700 bg-clip-text text-transparent tracking-tight"
        >
          ZubairAircon
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-200 font-medium">
          <Link
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1"
            to="/roservices"
          >
            RO Services
          </Link>
          <Link
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1"
            to="/services"
          >
            AC Services
          </Link>
          <a
            href="/catalogue/rocatlogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300 border-b-2 border-transparent hover:border-blue-400 pb-1"
          >
            RO Catalogue
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16m-7 6h7'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-xl rounded-b-xl shadow-inner border-t border-gray-700">
          <a
            href="/"
            className="block px-6 py-2 text-gray-200 hover:text-blue-400 hover:bg-gray-700 transition duration-300 border-b border-gray-700"
          >
            Home
          </a>
          <a
            href="/roservices"
            className="block px-6 py-2 text-gray-200 hover:text-blue-400 hover:bg-gray-700 transition duration-300 border-b border-gray-700"
          >
            RO Services
          </a>
          <a
            href="/services"
            className="block px-6 py-2 text-gray-200 hover:text-blue-400 hover:bg-gray-700 transition duration-300 border-b border-gray-700"
          >
            AC Services
          </a>
          <a
            href="/catalogue/rocatlogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-2 text-gray-200 hover:text-blue-400 hover:bg-gray-700 transition duration-300"
          >
            RO Catalogue
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
