import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function AdminSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 text-xs font-semibold ${
      isActive
        ? 'bg-primary-container text-on-primary-container shadow-sm'
        : 'text-on-surface-variant hover:translate-x-0.5 hover:bg-surface-container-high dark:hover:bg-surface-variant'
    }`;

  return (
    <aside className={`fixed left-0 top-0 h-full w-56 bg-surface dark:bg-inverse-surface shadow-sm flex flex-col p-3 z-50 border-r border-outline-variant/10 transition-transform duration-300 transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center mb-6 px-1.5 pt-1">
        <div>
          <h1 className="text-base font-extrabold text-primary dark:text-inverse-primary leading-tight tracking-tight">MarketElite Pro</h1>
          <p className="text-[10px] text-on-surface-variant opacity-75 font-semibold">Admin Console</p>
        </div>
        <button onClick={onClose} className="lg:hidden w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
      
      <nav className="flex-grow space-y-0.5">
        <NavLink to="/admin/dashboard" className={linkClass}>
          <span className="material-symbols-outlined text-lg" data-icon="dashboard">dashboard</span>
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink to="/admin/approve-listings" className={linkClass}>
          <span className="material-symbols-outlined text-lg" data-icon="fact_check">fact_check</span>
          <span>Approve Listings</span>
        </NavLink>
        
        <NavLink to="/admin/categories" className={linkClass}>
          <span className="material-symbols-outlined text-lg" data-icon="category">category</span>
          <span>Categories</span>
        </NavLink>
        
        <NavLink to="/admin/products" end className={linkClass}>
          <span className="material-symbols-outlined text-lg" data-icon="inventory_2">inventory_2</span>
          <span>Products</span>
        </NavLink>
        
        <NavLink to="/admin/users" className={linkClass}>
          <span className="material-symbols-outlined text-lg" data-icon="group">group</span>
          <span>View Users</span>
        </NavLink>
      </nav>
      
      <div className="mt-auto pt-3 border-t border-outline-variant/10 space-y-0.5">
        <NavLink to="/admin/settings" className={linkClass}>
          <span className="material-symbols-outlined text-lg" data-icon="settings">settings</span>
          <span>Settings</span>
        </NavLink>
        
        <a 
          href="#logout" 
          onClick={handleLogout} 
          className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-on-surface-variant hover:translate-x-0.5 hover:bg-surface-container-high dark:hover:bg-surface-variant transition-all duration-200 rounded-lg cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg" data-icon="logout">logout</span>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}

export default AdminSidebar;
