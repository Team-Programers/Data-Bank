import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
      { name: 'Newsroom', path: '/news' },
    ],
    legal: [
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Cookie Settings', path: '/cookies' },
      { name: 'Trust & Safety', path: '/safety' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Selling Guide', path: '/selling-guide' },
      { name: 'Buying Guide', path: '/buying-guide' },
      { name: 'Press', path: '/press' },
    ],
    marketplace: [
      { name: 'Explore All', path: '/marketplace' },
      { name: 'Gift Cards', path: '/gift-cards' },
      { name: 'Store Locator', path: '/stores' },
      { name: 'Mobile App', path: '/mobile-app' },
    ],
  };

  return (
    <footer className="bg-surface border-t border-outline-variant pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link className="text-2xl font-bold text-primary mb-6 block tracking-tight" to="/">
              MarketElite
            </Link>
            <p className="text-on-surface-variant text-sm font-medium leading-relaxed max-w-xs mb-8">
              The world's leading marketplace for high-end commerce. Discover verified luxury, tech, and collectibles from elite sellers globally.
            </p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-200" href="#" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-200" href="#" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-200" href="#" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-200" href="#" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4 text-sm font-semibold text-on-surface-variant">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link className="hover:text-primary transition-colors" to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-[10px]">Legal</h4>
            <ul className="space-y-4 text-sm font-semibold text-on-surface-variant">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link className="hover:text-primary transition-colors" to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-[10px]">Support</h4>
            <ul className="space-y-4 text-sm font-semibold text-on-surface-variant">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link className="hover:text-primary transition-colors" to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-[10px]">Marketplace</h4>
            <ul className="space-y-4 text-sm font-semibold text-on-surface-variant">
              {footerLinks.marketplace.map((link) => (
                <li key={link.name}>
                  <Link className="hover:text-primary transition-colors" to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-outline-variant pt-10 flex flex-col md:flex-row justify-between items-center text-[13px] font-semibold text-on-surface-variant">
          <p>© 2024 MarketElite Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link className="hover:text-primary transition-colors" to="/security">Security</Link>
            <Link className="hover:text-primary transition-colors" to="/compliance">Compliance</Link>
            <Link className="hover:text-primary transition-colors" to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
