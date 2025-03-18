import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">TravelWeather</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#" className="hover:text-indigo-600 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition duration-300">Services</a></li>
            <li><a href="#weather" className="hover:text-indigo-600 transition duration-300">Weather</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition duration-300">Contact</a></li>
          </ul>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="bg-white rounded-md shadow-lg py-2">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">About</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Services</a></li>
              <li><a href="#weather" className="block px-4 py-2 hover:bg-gray-100">Weather</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 