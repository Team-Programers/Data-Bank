import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const initialProducts = [
  {
    id: 1,
    name: 'Pro-Wireless Noise Headphones',
    sku: 'WH-10042',
    category: 'Electronics',
    price: 299.00,
    stock: 1204,
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACj1sBgtEx0q_4BL1hM_4t3bkVXJ_NGgiULtMKgjW8b-cLg_2FGErS1canmJKtYOv6I5ZBgsEkht-KJXZMtWIVVgdOvvOTZNNoWmxSK9H9qvOTmlgnj03Tyi6GCUD1ayLQygiTXD1baVkw5xYH8oVZVahPJlExThisPSKGHcZi4Zj7msL3TjobhkcwaQryLgqVjPNEYosNtkQxPHhZJG3dV8xO4GdD_1iAX6yt5kTOb7JN2Qz136H0W2HB0kr-9dqMSBOfvMFe0bQ'
  },
  {
    id: 2,
    name: 'Limited Edition Red Runners',
    sku: 'RS-4492',
    category: 'Fashion',
    price: 120.00,
    stock: 12,
    status: 'Active',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA214bFVnwoA-KEDnK_nJDVmw_eldJyEA-yojWmWVgrGtndEnQEd5faYBYs0UG8TwLDasHnKFXqP8qUu3ScPOk25GdNtwjzcN2mPHoH-yasErtF7lMcUJyqhq84cKWvjWrNK4icxML49iLmB4ybjYF4RAz3AJFEqHgRisVm2enC3ktcLlW3fOxGzVfrBEyUAHjhVpl20zJjbPIdTJPvYWToLTcazL3-Q5vpaJSJsF5APl9GxQhsECx6qM5bwQ3ZRwjtiQ0EjRbptpI'
  },
  {
    id: 3,
    name: 'Minimalist SmartWatch 2.0',
    sku: 'SW-MIN-2',
    category: 'Electronics',
    price: 450.00,
    stock: 582,
    status: 'Inactive',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbIpln2MMjvdcuhzKSa4hh3n9W0rYhj0Ibozy18_Rzb9i92C9vAUYekFQUoNsKzOH84_Es-D-yy7Z0Z7fMpDRfoGTb3n1LU77PEiZvc9gbKxuI2cGOLAbP6phmVruNpTMLBsFwI1tSubuelyJjNTrcpPAxt0Q_o_nT0dhlsUg1WCkUfn60S715jy6_C5FnnB233deqF2RP0GxGr0dMourvdKLOKRxjSm4oo5DBSNZ2J8oNfTTgFqDAi1c0XSmxIQZLOExvwoTYKzE'
  }
];

function ManageProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [priceRange, setPriceRange] = useState('Price Range');
  
  // View Details Modal State
  const [selectedProductId, setSelectedProductId] = useState(null);
  const selectedProduct = products.find(p => p.id === selectedProductId);

  // Derived metrics
  const totalProducts = products.length;
  
  // Calculate top category dynamically
  const categoryCounts = products.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});
  let topCategory = 'N/A';
  let maxCount = 0;
  Object.entries(categoryCounts).forEach(([cat, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topCategory = cat;
    }
  });

  // Toggle status
  const handleToggleStatus = (id) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, status: p.status === 'Active' ? 'Inactive' : 'Active' } : p
    ));
  };

  // Delete product
  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
    if (selectedProductId === id) {
      setSelectedProductId(null);
    }
  };

 

  // Reset all filters
  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setPriceRange('Price Range');
  };

  // Filtered products list
  const filteredProducts = products.filter(p => {
    // Search filter
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.sku.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === 'All Categories' || p.category === selectedCategory;
    
    // Price filter
    let matchesPrice = true;
    if (priceRange === '$0 - $50') {
      matchesPrice = p.price >= 0 && p.price <= 50;
    } else if (priceRange === '$50 - $200') {
      matchesPrice = p.price > 50 && p.price <= 200;
    } else if (priceRange === '$200+') {
      matchesPrice = p.price > 200;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <AdminLayout>
      <div className="space-y-6 md:space-y-10">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-primary">Products Management</h2>
            <p className="text-xs md:text-sm text-on-surface-variant font-medium mt-1">
              Monitor and manage all live listings across the marketplace.
            </p>
          </div>
        </div>

        {/* Bento Metric Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Card 1 */}
          <div className="bg-white p-3 sm:p-4 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] sm:text-[20px]">inventory</span>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">Total Products</p>
                  <h3 className="text-base sm:text-xl font-bold text-on-surface">{totalProducts.toLocaleString()}</h3>
                </div>
              </div>
              <span className="self-start lg:self-auto text-emerald-700 font-extrabold flex items-center gap-0.5 bg-emerald-500/10 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px]">
                <span className="material-symbols-outlined text-[10px] sm:text-xs">trending_up</span> 12%
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-3 sm:p-4 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-amber-500/10 text-amber-600 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] sm:text-[20px]">star</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">Top Category</p>
                  <h3 className="text-base sm:text-xl font-bold text-on-surface truncate">{topCategory}</h3>
                </div>
              </div>
              <span className="self-start lg:self-auto text-on-surface-variant font-extrabold bg-surface-container-low px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] whitespace-nowrap">
                {maxCount > 0 ? `${Math.round((maxCount / totalProducts) * 100)}% Vol` : '0% Vol'}
              </span>
            </div>
          </div>
        </div>

        {/* Filters and Local Search */}
        <div className="bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input Box */}
            <div className="relative flex-grow min-w-[200px] sm:max-w-xs">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input 
                type="text" 
                placeholder="Search by name or SKU..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-surface-container-low border border-transparent rounded-lg text-xs font-semibold focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white transition-all outline-none"
              />
            </div>

            {/* Filter by Category */}
            <div className="flex items-center gap-2 flex-grow sm:flex-none">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-surface-container-low border border-transparent rounded-lg font-semibold text-xs px-3 py-2 focus:ring-1 focus:ring-primary focus:bg-white outline-none cursor-pointer text-on-surface w-full"
              >
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Living</option>
              </select>
            </div>

            {/* Filter by Price */}
            <div className="flex items-center gap-2 flex-grow sm:flex-none">
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-surface-container-low border border-transparent rounded-lg font-semibold text-xs px-3 py-2 focus:ring-1 focus:ring-primary focus:bg-white outline-none cursor-pointer text-on-surface w-full"
              >
                <option>Price Range</option>
                <option>$0 - $50</option>
                <option>$50 - $200</option>
                <option>$200+</option>
              </select>
            </div>

            {/* Reset Action */}
            <div className="ml-auto flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-end">
              <button 
                onClick={handleReset}
                className="text-primary font-bold text-xs hover:underline px-3 py-2 cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Products Table Container */}
        <div className="bg-white rounded-xl border border-outline-variant/10 shadow-sm overflow-hidden flex-grow flex flex-col">
          <div className="overflow-x-auto custom-scrollbar min-w-0">
            <table className="w-full text-left border-collapse table-fixed min-w-[700px]">
              <thead>
                <tr class="bg-surface-container-low border-b border-outline-variant/10">
                  <th className="w-[50%] px-4 sm:px-6 py-3 font-extrabold text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider">Product</th>
                  <th className="w-[15%] px-4 sm:px-6 py-3 font-extrabold text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider">Category</th>
                  <th className="w-[15%] px-4 sm:px-6 py-3 font-extrabold text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider">Price</th>
                  <th className="w-[10%] px-4 sm:px-6 py-3 font-extrabold text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="w-[10%] px-4 sm:px-6 py-3 font-extrabold text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-xs font-semibold text-on-surface-variant">
                      No products match the criteria.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((p) => (
                    <tr 
                      key={p.id} 
                      className="hover:bg-surface-container-low/50 transition-colors duration-150 group cursor-pointer"
                      onClick={() => setSelectedProductId(p.id)}
                    >
                      {/* Product details */}
                      <td className="px-4 sm:px-6 py-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
                            <img alt={p.name} className="w-full h-full object-cover" src={p.image} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-xs sm:text-sm text-on-surface truncate leading-snug">{p.name}</p>
                            <p className="font-semibold text-[10px] sm:text-xs text-on-surface-variant mt-0.5">SKU: {p.sku}</p>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-4 sm:px-6 py-3">
                        <span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded font-bold text-[10px] sm:text-xs">
                          {p.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="px-4 sm:px-6 py-3">
                        <span className="font-semibold text-xs sm:text-sm text-on-surface">${p.price.toFixed(2)}</span>
                      </td>

                      {/* Status switch toggle */}
                      <td className="px-4 sm:px-6 py-3">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleToggleStatus(p.id); }}
                          className={`relative inline-flex h-4.5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            p.status === 'Active' ? 'bg-primary' : 'bg-outline-variant'
                          }`}
                        >
                          <span className={`pointer-events-none inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                            p.status === 'Active' ? 'translate-x-3.5' : 'translate-x-0'
                          }`}></span>
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="px-4 sm:px-6 py-3 text-right">
                        <div className="flex items-center justify-end gap-1 transition-opacity">
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }}
                            className="p-1 sm:p-1.5 hover:bg-error/10 hover:text-error rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-[13px] sm:text-[18px]">delete</span>
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
          <div className="px-4 sm:px-6 py-3 bg-surface-container-low border-t border-outline-variant/10 flex items-center justify-between mt-auto">
            <p className="font-semibold text-[10px] sm:text-xs text-on-surface-variant">
              Showing <span className="font-bold text-on-surface">1 - {filteredProducts.length}</span> of <span className="font-bold text-on-surface">{filteredProducts.length}</span>
            </p>
            <div className="flex items-center gap-1.5">
              <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant disabled:opacity-35" disabled>
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary text-white text-[10px] sm:text-xs font-bold shadow-sm">1</button>
              <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-outline-variant/20 hover:bg-white transition-all text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-200" onClick={() => setSelectedProductId(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-outline-variant/10 flex flex-col transition-all transform scale-100" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-outline-variant/10">
              <div>
                <span className="text-[9px] bg-primary/5 text-primary px-2 py-0.5 rounded font-extrabold">#{selectedProduct.id}</span>
                <h3 className="font-extrabold text-sm text-on-surface mt-1">Product Details</h3>
              </div>
              <button 
                onClick={() => setSelectedProductId(null)} 
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
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detail fields */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="col-span-2">
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Product Title</span>
                  <p className="font-bold text-xs sm:text-sm text-on-surface mt-0.5">{selectedProduct.name}</p>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Category</span>
                  <p className="font-semibold text-xs text-on-surface mt-0.5">{selectedProduct.category}</p>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Price</span>
                  <p className="font-extrabold text-xs text-on-surface mt-0.5">${selectedProduct.price.toFixed(2)}</p>
                </div>
                
                <div className="col-span-2 border-t border-outline-variant/10 pt-3 mt-1">
                  <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">SKU</span>
                  <p className="font-bold text-xs text-on-surface mt-0.5">{selectedProduct.sku}</p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-50 border-t border-outline-variant/10 flex items-center justify-between gap-2.5 rounded-b-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-extrabold text-on-surface-variant uppercase tracking-wider">Visibility</span>
                <button 
                  onClick={() => handleToggleStatus(selectedProduct.id)}
                  className={`relative inline-flex h-4.5 w-8 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    selectedProduct.status === 'Active' ? 'bg-primary' : 'bg-outline-variant'
                  }`}
                >
                  <span className={`pointer-events-none inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                    selectedProduct.status === 'Active' ? 'translate-x-3.5' : 'translate-x-0'
                  }`}></span>
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <button 
                  onClick={() => handleDelete(selectedProduct.id)} 
                  className="px-3.5 py-2 border border-error hover:bg-error/5 text-error text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}

export default ManageProducts;
