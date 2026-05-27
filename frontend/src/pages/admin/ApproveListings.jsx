import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const pendingListings = [
  {
    id: 'LST-8902',
    title: 'Pro Series Headphones Z2',
    category: 'Electronics & Audio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl_W6HTvJlQLWlPiLA0h0WlMMf1S-fG1ei8Mj0vtL6SQwx1knHwxEDXQe_Eh5N0mPq7EoOmCm258c4l2FVvTNT8uYwB9lQl0_cy87QGAEvuBJ9bmHu-7Lq1al9rBD8ZqCI0DSfaT1thg32aYIBblIKz9Z3_YNhyhi7vtZkxp0vwPe_HrXpAzPjr7SOrbdQd3Bb2Jk1FSQo42JsF0d9vdWqGhGLDvTYIS5_E88s8cR1FUA_sJm4CM8112X26hJINV_rMSgq87Y-zuw',
    seller: 'Digital Dynamics Ltd.',
    sellerRating: 4.8,
    sellerSales: 214,
    price: 299.00,
    date: 'Oct 12, 2023',
    time: '10:42 AM'
  },
  {
    id: 'LST-8895',
    title: 'SwiftRun V3 Athletics',
    category: 'Fashion & Sports',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPeQD_qXFTxiVq0TVkU9JHHGZ0CTy1IVUoWn0a6uwPZAqXnRMYhalWF3dFXH5y1SKExGe5AwC2Cb88HDKwMmZLSNURsIuevSfi7lt59artl3lYq7-urmh2farJluFb-mbsMkQlW3SBT8Dn3vQrjv5d3EovpZIXhC2fHh04O-DQ_Ade2juGfdfwBcXSsNqQitqj7svp5Jl2VMi_nHYOs4yma1GjOXclzNo7dsHYhXXPXRD8LuTSmgNlDAAInTntsqGFrtb3-_rtH8Q',
    seller: 'Marco Polo Outfitters',
    sellerRating: 4.2,
    sellerSales: 89,
    price: 120.00,
    date: 'Oct 11, 2023',
    time: '03:15 PM'
  },
  {
    id: 'LST-8891',
    title: 'Horizon SmartWatch 4',
    category: 'Electronics & Wearables',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClOo2ohSgz6em1naVLBm1jfMS57JoqrFLh9DBFFFjfhSzwKKklQJwN4DynaaJ6nvP7OOBIL7zBalI3ijvIED4ve4mxD41O5FjDFRpRTcWC6nvQu78yhSMWEmvGMT_65abZNav2-j8ZZdDWd5usixqRI4UfBX7sf1RX6QvcdoLiZTLAkQUy6hhalkrdLb8nRbdbtlC9W9dpZ63dHPIQiN0jGpL88FsfaT8Yhutu2J_s-tfHC5aNhiWuCVR48cQ2j6m__FWcKyc3Oqo',
    seller: 'Quantum Tech Store',
    sellerRating: 4.9,
    sellerSales: 1023,
    price: 450.00,
    date: 'Oct 11, 2023',
    time: '09:00 AM'
  },
  {
    id: 'LST-8874',
    title: 'Galaxy X Plus',
    category: 'Electronics & Mobile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmHxOZPZ2fitHG8YXJuzVSKk6Y5wgrrxg-6zCs4Hwi85GFTGGLHjxwGrMwNUtpjkg7Hhhr9UAfXDcis8aWOUZTdj_VaX4kXvqNhSpYC0rX02Md5mTvTpyOw3NCUB9Q3JJywLz31tCNHyRQRIoMr1e4rJ3Sg72O2xvcq3L-q8zaG6OtwUqNd7fUrplHvgR-0Tu1JheFAraMGHYGtlwlOsg00htHgy1C7_pwx9VELN2t_3WOeDTp9l2xzw5wSKI0iYyZ4BVJM1TToek',
    seller: 'Aura Electronics',
    sellerRating: 3.5,
    sellerSales: 12,
    price: 899.00,
    date: 'Oct 10, 2023',
    time: '11:22 PM'
  }
];

function ApproveListings() {
  const [selectedListing, setSelectedListing] = React.useState(null);

  return (
    <AdminLayout>
      <div className="space-y-6 md:space-y-10">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-primary">Approve Listings</h2>
            <p className="text-xs md:text-sm text-on-surface-variant font-medium mt-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse inline-block"></span>
              24 Pending Submissions requiring your review
            </p>
          </div>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto">
            <span className="material-symbols-outlined text-sm font-bold">done_all</span>
            Auto-Approve All
          </button>
        </div>

        {/* Filters Section */}
        <div className="flex flex-row items-center gap-3">
          {/* Date Filter */}
          <div className="bg-white px-3 py-2 rounded-xl border border-outline-variant/10 shadow-sm flex items-center gap-2 flex-1 sm:flex-initial sm:w-64">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">calendar_today</span>
            <select className="w-full border-none bg-transparent text-xs font-semibold focus:ring-0 focus:outline-none cursor-pointer text-on-surface">
              <option>Date: Latest First</option>
              <option>Date: Oldest First</option>
              <option>Today Only</option>
            </select>
          </div>

          {/* Reset Filters */}
          <button className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-primary hover:bg-primary-container/20 rounded-xl transition-colors font-bold text-xs cursor-pointer border border-transparent hover:border-outline-variant/25 whitespace-nowrap">
            <span className="material-symbols-outlined text-lg">restart_alt</span>
            Reset Filters
          </button>
        </div>

        {/* Listings Data Table */}
        <div className="bg-white rounded-2xl border border-outline-variant/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-0">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/10">
                  <th className="px-2 md:px-6 py-4 text-[10px] font-extrabold uppercase tracking-wider text-on-surface-variant">Product Info</th>
                  <th className="hidden sm:table-cell px-2 md:px-6 py-4 text-[10px] font-extrabold uppercase tracking-wider text-on-surface-variant">Seller Details</th>
                  <th className="hidden sm:table-cell px-6 py-4 text-[10px] font-extrabold uppercase tracking-wider text-on-surface-variant">Price</th>
                  <th className="hidden sm:table-cell px-6 py-4 text-[10px] font-extrabold uppercase tracking-wider text-on-surface-variant">Submitted</th>
                  <th className="px-2 md:px-6 py-4 text-[10px] font-extrabold uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {pendingListings.map((listing) => (
                  <tr 
                    key={listing.id} 
                    onClick={() => setSelectedListing(listing)}
                    className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer"
                  >
                    
                    {/* Product Info */}
                    <td className="px-2 md:px-6 py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-surface-container-low border border-outline-variant/10 shadow-inner flex-shrink-0">
                          <img 
                            src={listing.image} 
                            alt={listing.title} 
                            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-[11px] sm:text-xs text-on-surface leading-tight truncate max-w-[100px] sm:max-w-none">{listing.title}</p>
                          <p className="text-[9px] sm:text-[10px] text-on-surface-variant font-medium mt-0.5 truncate">{listing.category}</p>
                        </div>
                      </div>
                    </td>

                    {/* Seller Details */}
                    <td className="hidden sm:table-cell px-2 md:px-6 py-3 md:py-4">
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-[11px] sm:text-xs text-on-surface truncate max-w-[80px] sm:max-w-none">{listing.seller}</span>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          <span className="material-symbols-outlined text-amber-500 text-[10px] sm:text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="text-[9px] sm:text-[10px] text-on-surface-variant font-medium truncate">{listing.sellerRating}</span>
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="hidden sm:table-cell px-6 py-4">
                      <span className="font-bold text-xs text-on-surface">${listing.price.toFixed(2)}</span>
                    </td>

                    {/* Submitted Date */}
                    <td className="hidden sm:table-cell px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-on-surface">{listing.date}</span>
                        <span className="text-[10px] text-on-surface-variant font-medium mt-0.5">{listing.time}</span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-2 md:px-6 py-3 md:py-4 text-right">
                      <div className="flex items-center justify-end gap-1 sm:gap-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="px-2 py-1 md:px-3 md:py-1.5 bg-primary hover:bg-primary-container text-white text-[9px] md:text-[10px] font-bold rounded-md md:rounded-lg transition-colors cursor-pointer"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="px-2 py-1 md:px-3 md:py-1.5 border border-error hover:bg-error/5 text-error text-[9px] md:text-[10px] font-bold rounded-md md:rounded-lg transition-colors cursor-pointer"
                        >
                          Reject
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedListing(listing);
                          }}
                          className="hidden sm:inline-block p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-base">visibility</span>
                        </button>
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="px-6 py-4 bg-surface-container-low/30 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/10">
            <p className="text-[10px] text-on-surface-variant font-semibold">Showing <span className="text-on-surface font-extrabold">1-4</span> of <span className="text-on-surface font-extrabold">24</span> pending items</p>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg border border-outline-variant/20 hover:bg-slate-50 text-on-surface-variant transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer" disabled>
                <span className="material-symbols-outlined text-sm font-bold">chevron_left</span>
              </button>
              <button className="w-6 h-6 rounded-md bg-primary text-white text-[10px] font-extrabold shadow-sm">1</button>
              <button className="w-6 h-6 rounded-md hover:bg-slate-50 text-on-surface-variant text-[10px] font-bold transition-colors cursor-pointer">2</button>
              <button className="w-6 h-6 rounded-md hover:bg-slate-50 text-on-surface-variant text-[10px] font-bold transition-colors cursor-pointer">3</button>
              <span className="text-on-surface-variant text-[10px] font-bold mx-1">...</span>
              <button className="w-6 h-6 rounded-md hover:bg-slate-50 text-on-surface-variant text-[10px] font-bold transition-colors cursor-pointer">6</button>
              <button className="p-1.5 rounded-lg border border-outline-variant/20 hover:bg-slate-50 text-on-surface-variant transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm font-bold">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Details Modal */}
      {selectedListing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-outline-variant/10 flex flex-col transition-all transform scale-100">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-outline-variant/10">
              <div>
                <span className="text-[9px] bg-primary/5 text-primary px-2 py-0.5 rounded font-extrabold">{selectedListing.id}</span>
                <h3 className="font-extrabold text-sm text-on-surface mt-1">Listing Details</h3>
              </div>
              <button 
                onClick={() => setSelectedListing(null)} 
                className="p-1 rounded-full hover:bg-slate-100 text-on-surface-variant cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-4 flex-grow">
              {/* Product Image */}
              <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10 shadow-inner flex-shrink-0">
                <img 
                  src={selectedListing.image} 
                  alt={selectedListing.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detail fields */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="col-span-2">
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Product Title</span>
                  <p className="font-bold text-xs sm:text-sm text-on-surface mt-0.5">{selectedListing.title}</p>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Category</span>
                  <p className="font-semibold text-xs text-on-surface mt-0.5">{selectedListing.category}</p>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Price</span>
                  <p className="font-extrabold text-xs text-on-surface mt-0.5">${selectedListing.price.toFixed(2)}</p>
                </div>
                
                <div className="col-span-2 border-t border-outline-variant/10 pt-3 mt-1">
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Seller Details</span>
                  <div className="flex justify-between items-center mt-1">
                    <p className="font-bold text-xs text-on-surface">{selectedListing.seller}</p>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-amber-500 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-[10px] text-on-surface-variant font-semibold">{selectedListing.sellerRating} ({selectedListing.sellerSales} sales)</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 border-t border-outline-variant/10 pt-3 mt-1">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Submitted On</span>
                      <p className="font-semibold text-xs text-on-surface mt-0.5">{selectedListing.date}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Time</span>
                      <p className="font-semibold text-xs text-on-surface mt-0.5">{selectedListing.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-outline-variant/10 flex items-center justify-end gap-2.5 rounded-b-2xl">
              <button 
                onClick={() => setSelectedListing(null)} 
                className="px-3.5 py-2 border border-outline-variant hover:bg-slate-100 text-on-surface text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => setSelectedListing(null)} 
                className="px-3.5 py-2 border border-error hover:bg-error/5 text-error text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                Reject
              </button>
              <button 
                onClick={() => setSelectedListing(null)} 
                className="px-3.5 py-2 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default ApproveListings;
