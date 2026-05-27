import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const initialUsers = [
  {
    id: 'USR-8821',
    name: 'Alex Rivera',
    email: 'alex.rivera@marketelite.com',
    role: 'Vendor',
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf05sNQHsb7fcD8cIjQcEybJoze1mmXfRdiFAXzEUI8S6w-vIITjO3ePiF_Jd6SPmXXPjfgCyP24jFCT1iI3xUSS0rxqzBHNZZJK4QI55kRRvUkrRcbmqLEAB4GK1mlZeD5cSHSikHW9ZukqXu6E-Hf-Ambmn1UxrPMu1SVwUIfxNCVcTEaPwabbYfaqCbbsfMSjkya7v9khn9uESjc907purH5k3cAjVbedhfuA2wEJPT2gmm9ETJK61pjelKts1R7uaLfQjnXag'
  },
  {
    id: 'USR-9042',
    name: 'Sarah Chen',
    email: 's.chen@digitalflow.io',
    role: 'Vendor',
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5oQiYHxJxTarOF1GalkiLZ4dzO0zuFr37kG7Kltody3GXz_whin-NUmV0oqZK2Xq9BRl1BBKY7mn3gaW0uXle3cB8-hgzhawleEHOtxG3FUB_CjnBVL6B5TZzGj3EmUU-hBHNFHsMkmI97vb87DHq6t8wAtKw3D4XhUDRNayVa0hhEylpbWCRi3kqquXjAYrZ12_uGq5UHhOTPdT19Sr5UVsHim509n2LmZsceAnGx1DR3PNEfPGWAngi9Fq67DP6wzTZ6QJsogM'
  },
  {
    id: 'USR-1138',
    name: 'Marcus Bennett',
    email: 'm.bennett@nexus.com',
    role: 'Buyer',
    status: 'Pending',
    initials: 'MB'
  },
  {
    id: 'USR-7729',
    name: 'Elena Rodriguez',
    email: 'elena.r@lifestyle.pt',
    role: 'Admin',
    status: 'Suspended',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbxpMYWbgwZjaiMJfdtqIb0WGa6jDIRdJ_XfGKbIgGakoS1cbT3gKNPz1m0xR7WOsSKrk-lXLvS7DgpiZyGMVTnRsDtBBwxz7qTpPBiP0e9UmE9fekjkq9WWffANlhwD5_8DJMt30E5JW6yWmeyJza6meFENkJKnEOh2oQEPBMfQx_bQKzlQmtoWJ0lNYPORzhW68_Wu5bPQK5wV8IOO2tprzqLPPIl-yVw-GWpUg22iuEL5th9IVw4o4sSmq0dc7_P8vbRS3SNsk'
  }
];

function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Any Status');
  const [selectedUserId, setSelectedUserId] = useState(null);

  const selectedUser = users.find(u => u.id === selectedUserId);

  // Derived metrics
  const totalUsers = users.length;
  const activeUsersCount = users.filter(u => u.status === 'Active').length;

  // Toggle Status
  const handleToggleStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' };
      }
      return u;
    }));
  };

  // Delete/Ban User
  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
    if (selectedUserId === id) {
      setSelectedUserId(null);
    }
  };

  // Filtering
  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          u.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'Any Status' || u.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6 md:space-y-10 w-full">
          {/* Header Section */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-primary tracking-tight">User Management</h2>
            <p className="text-xs sm:text-base text-on-surface-variant mt-0.5 sm:mt-1">Monitor and manage marketplace accounts.</p>
          </div>

          {/* Metrics Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 mb-2 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">group</span>
                </div>
                <span className="flex items-center gap-1 text-success text-[9px] sm:text-xs font-bold bg-success/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
                  <span className="material-symbols-outlined text-[12px] sm:text-[14px]">trending_up</span> 12.5%
                </span>
              </div>
              <h3 className="text-on-surface-variant text-[9px] sm:text-xs font-bold mb-0.5 sm:mb-1 uppercase tracking-wider">Total Users</h3>
              <p className="text-lg sm:text-3xl font-black text-on-surface">{totalUsers + 8638}</p>
            </div>

            <div className="bg-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 mb-2 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">online_prediction</span>
                </div>
                <span className="bg-success/10 text-success text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg font-bold border border-success/20 uppercase animate-pulse">Live</span>
              </div>
              <h3 className="text-on-surface-variant text-[9px] sm:text-xs font-bold mb-0.5 sm:mb-1 uppercase tracking-wider">Active Now</h3>
              <p className="text-lg sm:text-3xl font-black text-on-surface">1,240</p>
            </div>
            
            <div className="hidden lg:block lg:col-span-2"></div>
          </div>

          {/* Table Controls */}
          <div className="bg-white rounded-t-2xl border-t border-x border-outline-variant/10 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              
              {/* Local Search */}
              <div className="relative flex-grow sm:flex-none sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
                <input 
                  type="text" 
                  placeholder="Search users..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-surface-container-low border border-transparent rounded-xl text-xs font-semibold focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none"
                />
              </div>              <div className="flex items-center bg-surface-container-low rounded-xl px-3 py-2 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-all flex-1 sm:flex-none">
                <span className="text-[10px] sm:text-xs font-bold text-on-surface-variant mr-2 uppercase tracking-wider hidden sm:inline">Status:</span>
                <select 
                  className="bg-transparent border-none text-xs font-bold text-on-surface focus:ring-0 cursor-pointer w-full outline-none"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option>Any Status</option>
                  <option>Active</option>
                  <option>Suspended</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2.5 rounded-xl transition-colors w-full sm:w-auto border border-primary/10">
              <span className="material-symbols-outlined text-[16px]">download</span>
              Export CSV
            </button>
          </div>

          {/* User Data Table */}
          <div className="bg-white rounded-b-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap min-w-full md:min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-outline-variant/10">
                    <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-extrabold text-on-surface-variant uppercase tracking-wider w-[25%]">User</th>
                    <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-extrabold text-on-surface-variant uppercase tracking-wider w-[25%] hidden md:table-cell">Email</th>
                    <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-extrabold text-on-surface-variant uppercase tracking-wider w-[15%] hidden md:table-cell">Role</th>
                    <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-extrabold text-on-surface-variant uppercase tracking-wider w-[15%]">Status</th>
                    <th className="px-4 sm:px-6 py-4 text-[10px] sm:text-xs font-extrabold text-on-surface-variant uppercase tracking-wider text-right w-[20%]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center text-on-surface-variant">
                        <div className="flex flex-col items-center justify-center">
                          <span className="material-symbols-outlined text-4xl mb-3 opacity-20">group_off</span>
                          <p className="font-semibold text-sm">No users found matching your criteria.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((u) => (
                      <tr 
                        key={u.id} 
                        className="hover:bg-slate-50/80 transition-colors duration-150 group cursor-pointer"
                        onClick={() => setSelectedUserId(u.id)}
                      >
                        <td className="px-4 sm:px-6 py-4">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            {u.image ? (
                              <img src={u.image} alt={u.name} className="w-8 h-8 sm:w-11 sm:h-11 rounded-full object-cover border border-outline-variant/20 shadow-sm shrink-0" />
                            ) : (
                              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20 shrink-0 text-xs sm:text-sm">
                                {u.initials}
                              </div>
                            )}
                            <div className="truncate">
                              <p className="font-bold text-xs sm:text-base text-on-surface truncate">{u.name}</p>
                              <p className="text-[9px] sm:text-xs text-on-surface-variant font-medium mt-0.5 tracking-wide">ID: #{u.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-medium text-on-surface-variant truncate hidden md:table-cell">
                          {u.email}
                        </td>
                        <td className="px-4 sm:px-6 py-4 hidden md:table-cell">
                          <span className="px-2.5 py-1 rounded text-[10px] sm:text-xs font-bold bg-surface-container text-on-surface-variant">
                            {u.role}
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              u.status === 'Active' ? 'bg-success' : 
                              u.status === 'Pending' || u.status === 'Reviewing' ? 'bg-warning' : 'bg-error'
                            }`}></div>
                            <span className="text-xs sm:text-sm font-bold text-on-surface">{u.status}</span>
                          </div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 items-center">
                            {/* Toggle active status inline */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleToggleStatus(u.id); }}
                              className={`relative inline-flex h-4.5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none mr-2 ${
                                u.status === 'Active' ? 'bg-primary' : 'bg-outline-variant'
                              }`}
                              title={u.status === 'Active' ? 'Suspend User' : 'Activate User'}
                            >
                              <span className={`pointer-events-none inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                                u.status === 'Active' ? 'translate-x-3.5' : 'translate-x-0'
                              }`}></span>
                            </button>


                            
                            <button 
                              onClick={(e) => { e.stopPropagation(); handleDelete(u.id); }}
                              className={`p-1.5 sm:p-2 hover:bg-error/10 rounded-xl transition-all cursor-pointer ${
                                u.status === 'Suspended' ? 'text-error hover:text-error' : 'text-on-surface-variant hover:text-error'
                              }`}
                              title="Delete/Ban User"
                            >
                              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                                {u.status === 'Suspended' ? 'delete_forever' : 'block'}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination bar */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
              <p className="font-semibold text-[10px] sm:text-xs text-on-surface-variant">
                Showing <span className="font-bold text-on-surface">1 - {filteredUsers.length}</span> of <span className="font-bold text-on-surface">{filteredUsers.length}</span>
              </p>
              <div className="flex items-center gap-1.5">
                <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant disabled:opacity-35" disabled>
                  <span className="material-symbols-outlined text-[16px] sm:text-lg">chevron_left</span>
                </button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-primary text-white text-[10px] sm:text-xs font-bold shadow-sm">1</button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant text-[10px] sm:text-xs font-bold">2</button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant text-[10px] sm:text-xs font-bold">3</button>
                <span className="text-on-surface-variant px-1 font-bold">...</span>
                <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant text-[10px] sm:text-xs font-bold">216</button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] sm:text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

        {/* Responsive Details Modal */}
        {selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-200" onClick={() => setSelectedUserId(null)}>
            <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-outline-variant/10 flex flex-col transition-all transform scale-100" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-outline-variant/10">
                <div>
                  <span className="text-[9px] bg-primary/5 text-primary px-2 py-0.5 rounded font-extrabold">#{selectedUser.id}</span>
                  <h3 className="font-extrabold text-sm text-on-surface mt-1">User Profile</h3>
                </div>
                <button 
                  onClick={() => setSelectedUserId(null)} 
                  className="p-1 rounded-full hover:bg-slate-100 text-on-surface-variant cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5 space-y-4 flex-grow">
                {/* User Avatar & Name */}
                <div className="flex flex-col items-center justify-center py-2 sm:py-4">
                  {selectedUser.image ? (
                    <img src={selectedUser.image} alt={selectedUser.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-surface-container-low shadow-sm mb-2 sm:mb-3" />
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border-4 border-surface-container-low shadow-sm mb-2 sm:mb-3 text-xl sm:text-2xl">
                      {selectedUser.initials}
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-extrabold text-on-surface">{selectedUser.name}</h3>
                  <p className="text-xs sm:text-sm font-medium text-on-surface-variant mt-0.5">{selectedUser.email}</p>
                </div>

                {/* Detail fields */}
                <div className="grid grid-cols-2 gap-3.5 mt-2">
                  <div>
                    <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Role</span>
                    <p className="font-semibold text-xs text-on-surface mt-0.5">{selectedUser.role}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Status</span>
                    <p className="font-extrabold text-xs text-on-surface mt-0.5 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${selectedUser.status === 'Active' ? 'bg-success' : selectedUser.status === 'Suspended' ? 'bg-error' : 'bg-warning'}`}></span>
                      {selectedUser.status}
                    </p>
                  </div>
                  
                  <div className="col-span-2 border-t border-outline-variant/10 pt-3 mt-1">
                    <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Joined Date</span>
                    <p className="font-bold text-xs text-on-surface mt-0.5">May 20, 2026</p>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="p-4 bg-slate-50 border-t border-outline-variant/10 flex items-center justify-between gap-2.5 rounded-b-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Account Active</span>
                  <button 
                    onClick={() => handleToggleStatus(selectedUser.id)}
                    className={`relative inline-flex h-4.5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      selectedUser.status === 'Active' ? 'bg-primary' : 'bg-outline-variant'
                    }`}
                  >
                    <span className={`pointer-events-none inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                      selectedUser.status === 'Active' ? 'translate-x-3.5' : 'translate-x-0'
                    }`}></span>
                  </button>
                </div>
                <div className="flex items-center gap-2.5">
                  <button 
                    onClick={() => handleDelete(selectedUser.id)} 
                    className="px-3.5 py-2 border border-error hover:bg-error/5 text-error text-xs font-bold rounded-lg cursor-pointer transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {selectedUser.status === 'Suspended' ? 'delete_forever' : 'block'}
                    </span>
                    {selectedUser.status === 'Suspended' ? 'Delete' : 'Ban User'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default ManageUsers;
