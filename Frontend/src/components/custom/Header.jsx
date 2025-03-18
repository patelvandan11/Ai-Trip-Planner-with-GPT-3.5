import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    console.log("Login button clicked");
    setIsMenuOpen(false);
  };

  return (
    <div className='p-2 shadow-sm'>
      <div className='flex justify-between items-center px-4 md:px-5'>
        <img src="/logo.svg" alt="Logo" className="h-8 md:h-10" />
        
        {/* Desktop menu */}
        <div className='hidden md:flex gap-4 lg:gap-7'>
          <Button className="text-black bg-yellow-400 md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all hover:scale-105" onClick={() => window.location.href = "/"}>Home</Button>
          <Button className="text-black bg-yellow-400 md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all hover:scale-105">Sign Up</Button>
          <Button className="text-black bg-yellow-400 md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all hover:scale-105">About</Button>
          <Button className="text-black bg-yellow-400 md:text-base px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all hover:scale-105" onClick={() => window.location.href = "/login"}>Login</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className='md:hidden'>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-white z-50 flex flex-col items-center justify-center'>
          <Button className="w-full mb-4" onClick={() => window.location.href = "/"}>Home</Button>
          <Button className="w-full mb-4" onClick={() => setIsMenuOpen(false)}>Sign Up</Button>
          <Button className="w-full mb-4" onClick={() => setIsMenuOpen(false)}>About</Button>
          <Button className="w-full mb-4" onClick={() => window.location.href = "/login"}>Login</Button>
          <Button className="w-full" onClick={() => setIsMenuOpen(false)}>Close</Button>
        </div>
      )}
    </div>
  );
}

export default Header;