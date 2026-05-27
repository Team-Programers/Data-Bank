import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';
import AdminFooter from '../components/AdminFooter';

function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-on-surface">
      {/* Mobile Sidebar Overlay Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Wrapper */}
      <div className="ml-0 lg:ml-56 min-h-screen flex flex-col transition-all duration-300">
        {/* TopNavBar */}
        <AdminNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Page Canvas */}
        <main className="p-4 md:p-8 flex flex-col max-w-[1280px] w-full gap-6 md:gap-10 flex-grow mx-auto">
          {children}
        </main>

        {/* Footer Context */}
        <AdminFooter />
      </div>
    </div>
  );
}

export default AdminLayout;
