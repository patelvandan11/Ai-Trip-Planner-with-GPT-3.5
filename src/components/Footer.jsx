import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="hover:text-gray-700">Terms of Service</a>
          <a href="#" className="hover:text-gray-700">Contact Us</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-xl">🌐</a>
          <a href="#" className="text-xl">📘</a>
          <a href="#" className="text-xl">📸</a>
        </div>
        <p className="text-gray-600 mt-4">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 