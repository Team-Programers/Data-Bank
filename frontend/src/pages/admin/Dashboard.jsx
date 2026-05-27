import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6 md:space-y-10">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center md:items-end">
          <div>
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-primary">Overview</h2>
            <p className="text-[10px] md:text-base text-on-surface-variant font-medium mt-0.5 md:mt-1">Welcome back, here's what's happening today.</p>
          </div>
          <button className="bg-primary text-white hover:bg-primary/95 px-3 py-1.5 md:px-6 md:py-2.5 rounded-lg font-bold text-[10px] md:text-xs flex items-center gap-1.5 md:gap-2 hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer whitespace-nowrap">
            <span className="material-symbols-outlined text-xs md:text-sm" data-icon="download">download</span>
            Export Report
          </button>
        </div>

        {/* Summary Cards (Bento-lite - 4 cards in a single row on mobile with hidden icons/badges on mobile) */}
        <div className="grid grid-cols-4 gap-2 md:gap-6">
          {/* Card 1: Total Sales */}
          <div className="bg-white p-2.5 md:p-6 rounded-xl border border-outline-variant/10 shadow-[0px_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200">
            <div>
              <div className="hidden md:flex justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl" data-icon="payments">payments</span>
                </div>
                <span className="text-emerald-700 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm font-bold" data-icon="trending_up">trending_up</span>
                  +12.5%
                </span>
              </div>
              <p className="text-on-surface-variant font-bold text-[8px] md:text-xs uppercase tracking-wider line-clamp-1">Sales</p>
            </div>
            <h3 className="text-xs sm:text-sm md:text-2xl font-extrabold text-on-surface mt-0.5 md:mt-1 truncate">$142.3k</h3>
          </div>

          {/* Card 2: Active Listings */}
          <div className="bg-white p-2.5 md:p-6 rounded-xl border border-outline-variant/10 shadow-[0px_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200">
            <div>
              <div className="hidden md:flex justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl" data-icon="inventory">inventory</span>
                </div>
                <span className="text-on-surface-variant font-bold text-xs bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" data-icon="remove">remove</span>
                  0%
                </span>
              </div>
              <p className="text-on-surface-variant font-bold text-[8px] md:text-xs uppercase tracking-wider line-clamp-1">Active</p>
            </div>
            <h3 className="text-xs sm:text-sm md:text-2xl font-extrabold text-on-surface mt-0.5 md:mt-1 truncate">1,204</h3>
          </div>

          {/* Card 3: New Users */}
          <div className="bg-white p-2.5 md:p-6 rounded-xl border border-outline-variant/10 shadow-[0px_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200">
            <div>
              <div className="hidden md:flex justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl" data-icon="person_add">person_add</span>
                </div>
                <span className="text-emerald-700 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm font-bold" data-icon="trending_up">trending_up</span>
                  +8.2%
                </span>
              </div>
              <p className="text-on-surface-variant font-bold text-[8px] md:text-xs uppercase tracking-wider line-clamp-1">Users</p>
            </div>
            <h3 className="text-xs sm:text-sm md:text-2xl font-extrabold text-on-surface mt-0.5 md:mt-1 truncate">482</h3>
          </div>

          {/* Card 4: Pending Listings */}
          <div className="bg-white p-2.5 md:p-6 rounded-xl border border-outline-variant/10 shadow-[0px_8px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-200">
            <div>
              <div className="hidden md:flex justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl" data-icon="pending_actions">pending_actions</span>
                </div>
                <span className="text-[#b8860b] font-bold text-xs bg-yellow-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" data-icon="pending">pending</span>
                  New
                </span>
              </div>
              <p className="text-on-surface-variant font-bold text-[8px] md:text-xs uppercase tracking-wider line-clamp-1">Pending</p>
            </div>
            <h3 className="text-xs sm:text-sm md:text-2xl font-extrabold text-on-surface mt-0.5 md:mt-1 truncate">12</h3>
          </div>
        </div>

        {/* Middle Section: Chart */}
        <div className="grid grid-cols-1 gap-6">
          {/* Sales Performance Chart */}
          <div className="lg:col-span-full bg-white p-4 md:p-8 rounded-xl border border-outline-variant/10 shadow-[0px_8px_30px_rgba(0,0,0,0.02)] flex flex-col gap-4 md:gap-6 min-h-[320px] md:min-h-[450px]">
            <div className="flex justify-between items-center">
              <h4 className="font-headline-md text-headline-md text-on-surface text-sm md:text-lg font-bold">Sales Performance</h4>
              <select className="bg-slate-50 border border-slate-200 rounded-lg text-[10px] md:text-xs font-bold px-2 py-1 md:px-4 md:py-2 focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            
            <div className="relative w-full mt-4 flex items-end justify-between gap-1.5 md:gap-4 px-1 md:px-2 flex-grow h-40 md:h-64">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-4 md:pb-6">
                <div className="border-b border-outline-variant/10 w-full h-0"></div>
                <div className="border-b border-outline-variant/10 w-full h-0"></div>
                <div className="border-b border-outline-variant/10 w-full h-0"></div>
                <div className="border-b border-outline-variant/10 w-full h-0"></div>
              </div>

              {/* Mon */}
              <div className="group relative w-full h-[60%] bg-primary/10 rounded-t md:rounded-t-lg transition-all hover:bg-primary/30 cursor-pointer">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0e1814] text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2.5 py-1 md:py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  Mon: $12k
                </div>
              </div>

              {/* Tue */}
              <div className="group relative w-full h-[45%] bg-primary/10 rounded-t md:rounded-t-lg transition-all hover:bg-primary/30 cursor-pointer">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0e1814] text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2.5 py-1 md:py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  Tue: $9k
                </div>
              </div>

              {/* Wed */}
              <div className="group relative w-full h-[85%] bg-primary rounded-t md:rounded-t-lg transition-all hover:bg-primary/80 cursor-pointer">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0e1814] text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2.5 py-1 md:py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  Wed: $28k
                </div>
              </div>

              {/* Thu */}
              <div className="group relative w-full h-[55%] bg-primary/10 rounded-t md:rounded-t-lg transition-all hover:bg-primary/30 cursor-pointer">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0e1814] text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2.5 py-1 md:py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  Thu: $14k
                </div>
              </div>

              {/* Fri */}
              <div className="group relative w-full h-[70%] bg-primary/10 rounded-t md:rounded-t-lg transition-all hover:bg-primary/30 cursor-pointer">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0e1814] text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2.5 py-1 md:py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  Fri: $22k
                </div>
              </div>

              {/* Sat */}
              <div className="group relative w-full h-[40%] bg-primary/10 rounded-t md:rounded-t-lg transition-all hover:bg-primary/30 cursor-pointer">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0e1814] text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2.5 py-1 md:py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  Sat: $8k
                </div>
              </div>

              {/* Sun */}
              <div className="group relative w-full h-[95%] bg-primary rounded-t md:rounded-t-lg transition-all hover:bg-primary/80 cursor-pointer">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0e1814] text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2.5 py-1 md:py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  Sun: $32k
                </div>
              </div>
            </div>

            <div className="flex justify-between px-1 md:px-2 text-[9px] md:text-[10px] font-bold text-on-surface-variant opacity-60 mt-1">
              <span className="w-full text-center">MON</span>
              <span className="w-full text-center">TUE</span>
              <span className="w-full text-center">WED</span>
              <span className="w-full text-center">THU</span>
              <span className="w-full text-center">FRI</span>
              <span className="w-full text-center">SAT</span>
              <span className="w-full text-center">SUN</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
