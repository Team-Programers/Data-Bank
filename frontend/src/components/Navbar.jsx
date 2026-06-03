import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
            <span>DataBank</span>
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
          <Link to="/sell-product" className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-teal-400 to-blue-600 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 inline-flex cursor-pointer">
            <div className="bg-white rounded-full px-5 py-1.5 flex items-center justify-center gap-1.5 h-full w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-slate-900">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-[15px] font-bold text-blue-700 tracking-wide uppercase">Sell</span>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-black transition-colors duration-200 focus:outline-none cursor-pointer flex items-center justify-center w-8 h-8"
            aria-label="Toggle menu"
          >
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: isOpen ? -45 : 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
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
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Drop-down Menu) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -12 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 px-6 pb-6 pt-4 flex flex-col space-y-6 md:hidden shadow-xl z-40 overflow-hidden"
          >
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
              <Link to="/sell-product" onClick={() => setIsOpen(false)} className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-teal-400 to-blue-600 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 flex w-full">
                <div className="bg-white rounded-full py-2.5 flex items-center justify-center gap-1.5 w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-slate-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <span className="text-base font-bold text-blue-700 tracking-wide uppercase">Sell</span>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
