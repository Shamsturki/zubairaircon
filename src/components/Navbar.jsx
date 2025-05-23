import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-extrabold gradient-text">ZubairAircon</a>
        <div className="hidden md:flex space-x-6">
          <a href="/roservices" className="nav-link text-gray-300 hover:text-blue-400 transition">RO Services</a>
          <a href="/services" className="nav-link text-gray-300 hover:text-blue-400 transition"> AC Services</a>
        </div>
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="/" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition">Home</a>
          <a href="/roservices" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition">RO Services</a>
          <a href="/services" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition">Services</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;