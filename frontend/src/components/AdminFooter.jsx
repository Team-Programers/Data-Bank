import React from 'react';

function AdminFooter() {
  return (
    <footer className="mt-auto px-8 py-8 border-t border-outline-variant/10 text-on-surface-variant/50 text-xs flex justify-between items-center bg-surface">
      <p>© 2026 MarketElite Pro Systems. All rights reserved.</p>
      <div className="flex gap-6 font-semibold">
        <a className="hover:text-primary transition-colors" href="#privacy">Privacy Policy</a>
        <a className="hover:text-primary transition-colors" href="#health">System Health</a>
        <a className="hover:text-primary transition-colors" href="#support">Support</a>
      </div>
    </footer>
  );
}

export default AdminFooter;
