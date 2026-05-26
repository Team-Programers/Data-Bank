import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Categories', path: '/categories' },
    { name: 'How it Works', path: '/how-it-works' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo & Navigation */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-900" to="/" data-purpose="logo">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <span>MarketElite</span>
          </Link>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-black font-semibold'
                    : 'hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side: Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-black px-4 py-2 transition-colors duration-200 cursor-pointer">
            Log in
          </Link>
          <Link to="/sell-product" className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-on-primary-fixed-variant transition-all duration-200 shadow-sm cursor-pointer active:scale-95">
            Get started
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-black transition-colors duration-200 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Drop-down Menu) */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 px-6 py-6 flex flex-col space-y-6 md:hidden shadow-xl transition-all duration-300 ease-in-out z-40">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-black'
                    : 'text-slate-600 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="border-t border-slate-100 pt-4 flex flex-col space-y-4">
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-center font-semibold text-slate-600 hover:text-black py-2 cursor-pointer">
              Log in
            </Link>
            <Link to="/sell-product" onClick={() => setIsOpen(false)} className="bg-primary hover:bg-on-primary-fixed-variant text-white text-center font-semibold py-2.5 px-6 rounded-full transition-all duration-200 shadow-sm cursor-pointer active:scale-95">
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
