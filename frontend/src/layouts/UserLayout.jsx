import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function UserLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default UserLayout;