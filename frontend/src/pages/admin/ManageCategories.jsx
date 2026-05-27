import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const initialCategories = [
  {
    id: 1,
    title: 'Electronics',
    description: 'Gadgets, Appliances, Computing',
    count: 4281,
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnt66KLaCKc_J8mZyLD_MW0EMLAGqgLGZ2K_XJO6JgrRv0HOLlxu7Uf1e4rmd8dsy6JxQFaH20eSUkxkwAOukACoJDVeqf5tRI7aovT2ejau5an56C1m87kdFGm3JmX8My1-ApojTxN6292gnPVqOB2EofcP5FZDvbfWjcFSPpAWYmc5BUwP6zYMB_07tQOF7MRP4qDie5NSaJi66g0cXcNZGZtWYKU4_9G3IZ2O3aFR_lE7--hOm8ZCbJnxFQOWTaOUHAAvf1R6M'
  },
  {
    id: 2,
    title: 'Fashion',
    description: 'Men, Women, Accessories',
    count: 8912,
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiCelb-xE6C1lGX14AuFCUZmQ_zWjKHfBXY1JHySRyJ3YHjjQ96TqItNlphAOQWeUMwBNlnG_bKl3hTWIme0OYfeSjj_6v-bkKHdW1KT_y_pSAPThqk_z0NAuLTvf7gKS8G6Tyf7t7SWc-Uc9a_AXjDRif8qh6zXzjtwnE_gZ4Ta8aoEBgytQQT-n-KU0Laq4RS_NQsBuWQ7tSLLUycktrkAQyAnm4PjwY16WSX02RhU7QH9TkhIcWdsvNbnQzgJmFnpZgiJndBb8'
  },
  {
    id: 3,
    title: 'Properties',
    description: 'Rental, Sale, Commercial',
    count: 1504,
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHV1LlXa7F1OoMhePygGKcxa9Ksa7Tj9Uoxhw0Gn4jhH93DNJ1yySJslUNDEhIRRlpQGK6DFgTDW7hxWPTeNQZ26l4coQ6dTU0vPBG23Kvsccm2YpNv8Ji8h5wkUoQ5OwUTmh_AXqteCQiSNzjBTKFECeEzeukQGnLb79IdH9NeqByVI_HvoDRs9diPijLU-l4IUEpKRNJ06OfAFs8qx1ND4B0vRQEOWJDbSuVVaUHzDO8CiDPCADtHbf77DTSLaEozFZ0RWO9QrU'
  },
  {
    id: 4,
    title: 'Bikes',
    description: 'Motorbikes, Cycles, Parts',
    count: 842,
    status: 'Pending',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBoZ737hi0Grxoe85hgN2RMag_zrEugujshPyTa03pj-rYmmTk6--KLPw2viNzrz4TJs7xKztMm72kY36HzQ3nP2NT39CputqzQxne_uVufZqtfh0RZajSE3o_JWXt9c193o0ifUgXnn62l0oK-1Zv_RMQp0MwsZDjBPGOVytWwvo8p_i4dGXWceCHILq7U6dIeb0_r_Y2bGf6eNmJgHAxa5kI57z1Fdtsg028BAvPCbr2e_qMSh2vsmMSpEbBVFDKzZeEeOUDaTo'
  }
];

function ManageCategories() {
  const [categories, setCategories] = useState(initialCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [editingCategory, setEditingCategory] = useState(null);
  
  // Form fields
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formStatus, setFormStatus] = useState('Active');

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const handleToggleStatus = (id) => {
    setCategories(categories.map(c => 
      c.id === id ? { ...c, status: c.status === 'Active' ? 'Pending' : 'Active' } : c
    ));
  };

  const openAddModal = () => {
    setModalMode('add');
    setFormTitle('');
    setFormDescription('');
    setFormImage('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60');
    setFormStatus('Active');
    setIsModalOpen(true);
  };

  const openEditModal = (category) => {
    setModalMode('edit');
    setEditingCategory(category);
    setFormTitle(category.title);
    setFormDescription(category.description);
    setFormImage(category.image);
    setFormStatus(category.status);
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    if (modalMode === 'add') {
      const newCategory = {
        id: Date.now(),
        title: formTitle,
        description: formDescription,
        count: 0,
        status: formStatus,
        image: formImage
      };
      setCategories([...categories, newCategory]);
    } else {
      setCategories(categories.map(c => 
        c.id === editingCategory.id 
          ? { ...c, title: formTitle, description: formDescription, image: formImage, status: formStatus } 
          : c
      ));
    }
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 md:space-y-10">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-primary">Categories</h2>
            <p className="text-xs md:text-sm text-on-surface-variant font-medium mt-1">
              Manage marketplace hierarchies, listing volume, and discoverability.
            </p>
          </div>
          <button 
            onClick={openAddModal}
            className="bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            <span className="material-symbols-outlined text-sm font-bold">add_circle</span>
            Add New Category
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm">
          <div className="relative w-full sm:max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            <input 
              type="text" 
              placeholder="Search categories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-surface-container-low border border-transparent rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3.5 py-2.5 hover:bg-slate-50 text-on-surface-variant font-bold text-xs cursor-pointer border border-outline-variant/10 rounded-lg">
              <span className="material-symbols-outlined text-lg">filter_list</span> Filter
            </button>
            <button className="flex items-center gap-1.5 px-3.5 py-2.5 hover:bg-slate-50 text-on-surface-variant font-bold text-xs cursor-pointer border border-outline-variant/10 rounded-lg">
              <span className="material-symbols-outlined text-lg">swap_vert</span> Sort
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredCategories.map((category) => (
            <div 
              key={category.id} 
              className="group bg-white border border-outline-variant/10 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              {/* Category Image */}
              <div className="relative h-24 sm:h-40 overflow-hidden bg-slate-100 flex-shrink-0">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <span className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded text-[8px] sm:text-[10px] font-extrabold flex items-center gap-0.5 sm:gap-1 backdrop-blur-md border ${
                    category.status === 'Active' 
                      ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-700 border-amber-500/20'
                  }`}>
                    <span className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${category.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                    {category.status}
                  </span>
                </div>
              </div>

              {/* Category Details */}
              <div className="p-3 sm:p-5 space-y-2.5 sm:space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                    <h4 className="font-extrabold text-[11px] sm:text-sm text-on-surface leading-tight truncate">{category.title}</h4>
                    <span className="text-primary font-extrabold text-[8px] sm:text-xs bg-primary/5 px-1.5 sm:px-2 py-0.5 rounded w-fit">{category.count.toLocaleString()} listings</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-on-surface-variant font-medium mt-1 line-clamp-2">{category.description}</p>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-1 sm:gap-1.5 pt-2 border-t border-outline-variant/5">
                  <button 
                    onClick={() => openEditModal(category)}
                    className="p-1 sm:p-1.5 hover:bg-slate-50 rounded-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer flex items-center justify-center" 
                    title="Edit"
                  >
                    <span className="material-symbols-outlined text-[13px] sm:text-base">edit</span>
                  </button>
                  
                  <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
                    {/* Toggle switch for status */}
                    <label className="relative inline-flex items-center cursor-pointer h-5 sm:h-6">
                      <input 
                        type="checkbox" 
                        checked={category.status === 'Active'} 
                        onChange={() => handleToggleStatus(category.id)}
                        className="sr-only peer"
                      />
                      <div className="w-8 sm:w-10 h-4.5 sm:h-5.5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3.5 sm:after:h-4.5 after:w-3.5 sm:after:w-4.5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                    
                    <button 
                      onClick={() => handleDelete(category.id)}
                      className="p-1 sm:p-1.5 hover:bg-error/5 rounded-lg text-error transition-colors cursor-pointer flex items-center justify-center" 
                      title="Delete"
                    >
                      <span className="material-symbols-outlined text-[13px] sm:text-base">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More categories indicator (Skeleton Loader Simulation) */}
        <div className="text-center py-8 border border-dashed border-outline-variant/40 rounded-2xl bg-surface-container-low/20 mt-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white border border-outline-variant/10 rounded-full mb-3 shadow-sm">
            <span className="material-symbols-outlined text-on-surface-variant text-lg">refresh</span>
          </div>
          <h5 className="text-on-surface font-extrabold text-xs">Syncing additional segments...</h5>
          <p className="text-on-surface-variant text-[10px] font-semibold max-w-xs mx-auto mt-1">
            Updating index layers and listing cache for 14 other custom sub-categories.
          </p>
        </div>
      </div>

      {/* Add / Edit Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-200">
          <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-outline-variant/10 flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-outline-variant/10">
              <h3 className="font-extrabold text-sm text-on-surface">
                {modalMode === 'add' ? 'Add New Category' : 'Edit Category'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="p-1 rounded-full hover:bg-slate-100 text-on-surface-variant cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSave}>
              <div className="p-5 space-y-4">
                {/* Title Input */}
                <div>
                  <label className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Category Name</label>
                  <input 
                    type="text" 
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-outline-variant/50 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                    placeholder="e.g. Electronics, Fashion"
                  />
                </div>

                {/* Description Input */}
                <div>
                  <label className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Short Description</label>
                  <textarea 
                    rows="2"
                    value={formDescription}
                    onChange={(e) => setFormDescription(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-outline-variant/50 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Brief summary of category contents"
                  />
                </div>

                {/* Image URL Input */}
                <div>
                  <label className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Image Preview URL</label>
                  <input 
                    type="url" 
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-outline-variant/50 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                    placeholder="https://example.com/image.png"
                  />
                </div>

                {/* Status Input */}
                <div>
                  <label className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Initial Status</label>
                  <select 
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-outline-variant/50 rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-white cursor-pointer"
                  >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-outline-variant/10 flex items-center justify-end gap-2.5 rounded-b-2xl">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)} 
                  className="px-3.5 py-2 border border-outline-variant hover:bg-slate-100 text-on-surface text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-3.5 py-2 bg-primary hover:bg-primary-container text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default ManageCategories;
