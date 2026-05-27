import React from 'react';

function AdminNavbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 right-0 h-16 bg-white/75 backdrop-blur-md flex justify-between items-center px-4 md:px-8 w-full z-40 border-b border-outline-variant/10">
      <div className="flex items-center">
        {/* Hamburger Menu Toggle (Mobile) */}
        <button 
          onClick={onMenuClick} 
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer mr-2"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        
        {/* Search Box */}
        <div className="hidden md:flex items-center bg-surface-container-low rounded-lg px-3 py-1.5 w-64 lg:w-96 border border-outline-variant/30 focus-within:ring-2 focus-within:ring-primary focus-within:bg-white transition-all shadow-sm focus-within:shadow-md">
          <span className="material-symbols-outlined text-on-surface-variant mr-2" data-icon="search">search</span>
          <input 
            className="bg-transparent border-none focus:outline-none text-sm w-full placeholder:text-on-surface-variant/50 text-on-surface font-medium" 
            placeholder="Search orders, products, or users..." 
            type="text"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer relative">
          <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-outline-variant/20"></div>
        
        <div className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-surface-container-high transition-colors cursor-pointer group">
          <span className="font-label-sm text-xs font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">Admin User</span>
          <span className="material-symbols-outlined text-primary" data-icon="account_circle" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
