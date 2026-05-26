import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Marketplace() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  // Rich products dataset with pricing, ratings, offers, and warranty matching high-fidelity mobile views
  const initialProducts = [
    {
      id: 'e1',
      title: 'Acoustic Pro Headphones',
      price: 299,
      originalPrice: 499,
      discount: 40,
      rating: 4.5,
      reviews: 1478,
      isAssured: true,
      category: 'Electronics',
      location: 'New York, NY',
      tag: 'BESTSELLER',
      shipping: 'Free Shipping',
      condition: 'New',
      bankOffer: 284,
      exchangeOffer: 80,
      warranty: '1 year warranty by MarketElite',
      image: '/electronics_headphones.png',
      description: 'Immersive sound experience with advanced active noise cancellation and memory foam earcups.'
    },
    {
      id: 'e2',
      title: 'Elite Smartwatch Series',
      price: 449,
      originalPrice: 699,
      discount: 35,
      rating: 4.6,
      reviews: 892,
      isAssured: true,
      category: 'Electronics',
      location: 'Austin, TX',
      tag: 'New Release',
      condition: 'New',
      bankOffer: 420,
      exchangeOffer: 120,
      warranty: '1 year warranty by MarketElite',
      image: '/electronics_smartwatch.png',
      description: 'Next-gen health monitoring, custom workout tracking, and sleek responsive tactile controls.'
    },
    {
      id: 'e3',
      title: 'Vintage Perfume Oud & Rose',
      price: 1250,
      originalPrice: 1999,
      discount: 37,
      rating: 4.8,
      reviews: 245,
      isAssured: false,
      category: 'Fashion',
      location: 'London, UK',
      tag: 'BESTSELLER',
      condition: 'New',
      bankOffer: 1180,
      exchangeOffer: 300,
      warranty: 'Original Brand Warranty',
      image: '/premium_luxury_goods.png',
      description: 'Exquisite fragrance blending rich agarwood oud and delicate Turkish rose notes.'
    },
    {
      id: 'e4',
      title: 'Lumix Mirrorless G9 Camera',
      price: 890,
      originalPrice: 1490,
      discount: 40,
      rating: 4.2,
      reviews: 512,
      isAssured: true,
      category: 'Electronics',
      location: 'San Francisco, CA',
      tag: 'Hot Deal',
      condition: 'Used',
      bankOffer: 790,
      exchangeOffer: 300,
      warranty: '6 months seller warranty',
      image: '/electronics_camera.png',
      description: 'Ultra-fast autofocus mirrorless camera featuring 4K video recording and robust image stabilization.'
    },
    {
      id: 'e5',
      title: 'Ultra HD 4K Monitor',
      price: 899,
      originalPrice: 1299,
      discount: 30,
      rating: 4.7,
      reviews: 1024,
      isAssured: true,
      category: 'Electronics',
      location: 'Seattle, WA',
      tag: 'Top Rated',
      condition: 'Refurbished',
      bankOffer: 849,
      exchangeOffer: 200,
      warranty: '3 years manufacturer warranty',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN25uuOAtyKRDVrXiSyJe0r4NmA-B2Hnn_2NMHuEedLjkXIJ4oPUNKClbWj9IKIPsUvd1hNxm7VtSKk_WQXdxswvJt4UCUHzqWOsEJIaqJBy9ZwwjpMlUAUcRfr77BZwQWTHvs-ju0IznpgkDq_Pv8vdriTPw7gMa1OJbUiyblWpm4NrlJzdfrTlpB8apLrvXUMauaNXN6SVF5Moah5kFzxZRSg7BSLAHQFkvuiZ-4qsFEXN8WqsmG7SFKrc0WpmGlt06ece6y3SY',
      description: 'Professional creator monitor with 100% sRGB coverage and factory calibrated color accuracy.'
    },
    {
      id: 'e6',
      title: 'Mechanical Keyboard RGB',
      price: 159,
      originalPrice: 249,
      discount: 36,
      rating: 4.4,
      reviews: 310,
      isAssured: true,
      category: 'Electronics',
      location: 'Miami, FL',
      tag: 'Staff Pick',
      condition: 'New',
      bankOffer: 149,
      exchangeOffer: 40,
      warranty: '1 year warranty by MarketElite',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uj5vGNjGhN72JQP2sSzZaPGXQ458Vir-A1BEHXGBZHhYv10vqyujT8ZscvuEs92zbI-MXjVEnrPWjnTFampWuNrZiNVfVHP7TIfY6P1i16usigZmIpzEFgih1FnCwC7wSZSCYLTzYqg8LLOo48jCIhEPou76QrZNd7NOLFP3e9ySUCCh4IDiq5_7JZyVmuKWUWq3TRb2DeQ5H_09SzuapmBZo9eRfUrXcoHQUepS2doa9iTr73LhWzLoU',
      description: 'Hot-swappable mechanical switches with vibrant RGB backlighting and premium aluminum top plate.'
    },
    {
      id: 'e7',
      title: 'Minimalist Bamboo LED Lamp',
      price: 120,
      originalPrice: 199,
      discount: 39,
      rating: 4.3,
      reviews: 156,
      isAssured: false,
      category: 'Home & Living',
      location: 'Portland, OR',
      tag: 'BESTSELLER',
      shipping: 'Free Shipping',
      condition: 'Used',
      bankOffer: 110,
      exchangeOffer: 20,
      warranty: '1 year warranty by DecorElite',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnnmuQB9n1qFR7lrIa88UdXJEA8GvckwzKEDOePyRMsrpBRM5f_ELTyKiFg5YurCDmImBxiWk5siMpkU1dqztX1itu-BRjUmvvPbweakXZXZOTY2HuBTU_zW7TpeMvzubqsMWmCTMtoYf5MET-RplEWyKSvJPtEHcS2tsV1ZsVaJ_cV0hXpyxq7tFwvYpgiR-3nRWzotaXhpHi8-USJezLTvTLQ5gNalc4guKig64R4Ap0n3XdJAAG4-TkKcjahDxWqEUFjDLc7_E',
      description: 'Warm LED ambient bedside lamp designed with a sustainable brushed bamboo base.'
    },
    {
      id: 'e8',
      title: 'Sonic Fabric Speaker',
      price: 199,
      originalPrice: 349,
      discount: 43,
      rating: 4.5,
      reviews: 408,
      isAssured: true,
      category: 'Electronics',
      location: 'Chicago, IL',
      tag: 'Sold Out Soon',
      condition: 'Used',
      bankOffer: 199,
      exchangeOffer: 60,
      warranty: '1 year brand warranty',
      image: '/electronics_speaker.png',
      description: 'High-fidelity cylindrical Bluetooth speaker wrapped in tactile, sustainable textured fabric.'
    }
  ];

  // Filters State
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : ['Electronics']
  );
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(2500);
  const [location, setLocation] = useState('All Locations');
  const [condition, setCondition] = useState('All');
  const [sortBy, setSortBy] = useState('Newest Arrivals');
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Handle wishlisting
  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  // Categories list
  const categoriesList = [
  'Electronics',
  'Fashion',
  'Mobiles',
  'Vehicles',
  'Properties',
  'Services',
  'Jobs',
  'Furniture',
  'Pets',
  'Home & Living'
];

  // Handle Category check
  const handleCategoryChange = (cat) => {
    const isSelected = selectedCategories.some(c => c.toLowerCase() === cat.toLowerCase());
    if (isSelected) {
      setSelectedCategories(selectedCategories.filter(c => c.toLowerCase() !== cat.toLowerCase()));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceMin(0);
    setPriceMax(2500);
    setLocation('All Locations');
    setCondition('All');
    setSearchQuery('');
  };

  // Cycle through sort options on mobile click
  const cycleSortMobile = () => {
    if (sortBy === 'Newest Arrivals') {
      setSortBy('Price: Low to High');
    } else if (sortBy === 'Price: Low to High') {
      setSortBy('Price: High to Low');
    } else {
      setSortBy('Newest Arrivals');
    }
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Search query
    if (searchQuery.trim() !== '') {
      result = result.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => {
        return selectedCategories.some(cat => p.category.toLowerCase() === cat.toLowerCase());
      });
    }

    // Price range
    result = result.filter(p => p.price >= priceMin && p.price <= priceMax);

    // Location
    if (location !== 'All Locations') {
      if (location === 'North America') {
        result = result.filter(p => ['New York, NY', 'Austin, TX', 'Seattle, WA', 'San Francisco, CA', 'Miami, FL', 'Portland, OR', 'Chicago, IL'].includes(p.location));
      } else if (location === 'Europe') {
        result = result.filter(p => ['London, UK'].includes(p.location));
      } else if (location === 'Asia') {
        result = result.filter(p => p.location.includes('Tokyo') || p.location.includes('UAE'));
      }
    }

    // Condition
    if (condition !== 'All') {
      result = result.filter(p => p.condition.toLowerCase() === condition.toLowerCase());
    }

    // Sort By
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategories, priceMin, priceMax, location, condition, sortBy, searchQuery]);

  // Sidebar / Drawer Filter Content helper
  const renderFilterContent = () => (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="space-y-2">
        <h3 className="font-bold text-xs uppercase tracking-wider text-on-surface">Search keywords</h3>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-on-surface-variant/70">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </span>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container border border-outline-variant/35 rounded-xl py-2.5 pl-9 pr-4 text-sm text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-semibold"
            placeholder="Filter by name..."
            type="text"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-3 pt-4 border-t border-outline-variant/30">
        <h3 className="font-bold text-xs uppercase tracking-wider text-on-surface">Category</h3>
        <div className="space-y-2.5">
          {categoriesList.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                checked={selectedCategories.some(c => c.toLowerCase() === cat.toLowerCase())}
                onChange={() => handleCategoryChange(cat)}
                className="w-4.5 h-4.5 rounded border-outline-variant text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                type="checkbox"
              />
              <span className="text-sm font-semibold text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-4 pt-4 border-t border-outline-variant/30">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xs uppercase tracking-wider text-on-surface">Price Range</h3>
          <span className="text-xs font-bold text-primary">${priceMin} - ${priceMax}</span>
        </div>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="2500"
            value={priceMax}
            onChange={(e) => setPriceMax(Number(e.target.value))}
            className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="text-[10px] uppercase font-bold text-on-surface-variant block mb-1">Min</label>
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs font-bold">$</span>
                <input
                  value={priceMin}
                  onChange={(e) => setPriceMin(Number(e.target.value))}
                  className="w-full pl-6 pr-2.5 py-2 bg-surface-container border border-outline-variant/20 rounded-xl text-xs text-on-surface focus:outline-none focus:border-primary font-semibold"
                  type="number"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-[10px] uppercase font-bold text-on-surface-variant block mb-1">Max</label>
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs font-bold">$</span>
                <input
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full pl-6 pr-2.5 py-2 bg-surface-container border border-outline-variant/20 rounded-xl text-xs text-on-surface focus:outline-none focus:border-primary font-semibold"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Filter */}
      <div className="space-y-3 pt-4 border-t border-outline-variant/30">
        <h3 className="font-bold text-xs uppercase tracking-wider text-on-surface">Location</h3>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-surface-container border border-outline-variant/20 rounded-xl py-2.5 px-3 text-sm text-on-surface font-semibold focus:outline-none cursor-pointer"
        >
          <option>All Locations</option>
          <option>North America</option>
          <option>Europe</option>
          <option>Asia</option>
        </select>
      </div>

      {/* Condition Filter */}
      <div className="space-y-3 pt-4 border-t border-outline-variant/30">
        <h3 className="font-bold text-xs uppercase tracking-wider text-on-surface">Condition</h3>
        <div className="flex flex-wrap gap-2">
          {['All', 'New', 'Used', 'Refurbished'].map((cond) => (
            <button
              key={cond}
              onClick={() => setCondition(cond)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${condition === cond
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-on-surface hover:bg-outline-variant/30'
                }`}
            >
              {cond}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="max-w-[1400px] mx-auto py-0 sm:py-8 sm:px-6 md:px-12 flex flex-col lg:flex-row gap-8 w-full relative">

      {/* Desktop Sidebar (visible on large screen) */}
      <aside className="hidden lg:block lg:w-64 shrink-0 bg-white p-6 rounded-2xl border border-outline-variant/30 h-fit shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-on-surface">Filters</h2>
          <button
            onClick={clearFilters}
            className="text-sm text-primary font-bold hover:underline cursor-pointer"
          >
            Clear All
          </button>
        </div>
        {renderFilterContent()}
      </aside>

      {/* Mobile Sort & Filter Bar (Flipkart Style) */}
      <div className="flex sm:hidden border-b border-outline-variant/20 bg-white sticky top-[56px] z-30 shadow-sm w-full divide-x divide-outline-variant/20">
        <button
          onClick={cycleSortMobile}
          className="flex-1 py-3.5 flex items-center justify-center gap-2 font-bold text-sm text-on-surface hover:bg-slate-50 cursor-pointer active:bg-slate-100 transition-colors"
        >
          <svg className="w-4.5 h-4.5 text-on-surface-variant" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
          Sort ({sortBy.replace('Price: ', '')})
        </button>
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex-1 py-3.5 flex items-center justify-center gap-2 font-bold text-sm text-on-surface hover:bg-slate-50 cursor-pointer active:bg-slate-100 transition-colors"
        >
          <svg className="w-4.5 h-4.5 text-on-surface-variant" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
          </svg>
          Filter
          {selectedCategories.length + (condition !== 'All' ? 1 : 0) + (location !== 'All Locations' ? 1 : 0) > 0 && (
            <span className="bg-primary text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
              {selectedCategories.length + (condition !== 'All' ? 1 : 0) + (location !== 'All Locations' ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Horizontal Quick Filters (Flipkart Style) */}
      <div className="flex sm:hidden overflow-x-auto gap-2.5 py-2.5 px-4 bg-white border-b border-outline-variant/15 scrollbar-none sticky top-[108px] z-20 shadow-sm w-full">
        <button
          onClick={() => setCondition(condition === 'New' ? 'All' : 'New')}
          className={`px-3.5 py-1.5 rounded-lg border text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${condition === 'New' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/30 bg-white text-on-surface-variant'
            }`}
        >
          Condition: New
        </button>
        <button
          onClick={() => setPriceMax(priceMax === 500 ? 2500 : 500)}
          className={`px-3.5 py-1.5 rounded-lg border text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${priceMax === 500 ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/30 bg-white text-on-surface-variant'
            }`}
        >
          Under $500
        </button>
        <button
          onClick={() => setLocation(location === 'North America' ? 'All Locations' : 'North America')}
          className={`px-3.5 py-1.5 rounded-lg border text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${location === 'North America' ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/30 bg-white text-on-surface-variant'
            }`}
        >
          North America
        </button>
      </div>

      {/* Mobile Filter Slide-Over Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />
          {/* Drawer Panel */}
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-6 px-6 shadow-2xl transition-transform duration-300 transform translate-x-0">
            <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-6">
              <h2 className="text-xl font-bold text-on-surface">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-on-surface-variant hover:text-on-surface p-1 cursor-pointer"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {renderFilterContent()}

            <div className="mt-8 pt-4 border-t border-outline-variant/30">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full bg-primary text-white font-bold py-3.5 rounded-xl cursor-pointer shadow-lg active:scale-95 transition-all text-center"
              >
                Apply Filters
              </button>
              <button
                onClick={() => { clearFilters(); setIsMobileFilterOpen(false); }}
                className="w-full bg-surface-container text-on-surface font-bold py-3.5 rounded-xl cursor-pointer mt-3 active:scale-95 transition-all text-center text-sm"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product List Area */}
      <section className="flex-grow px-0 sm:px-0">
        {/* Desktop / Tablet Header */}
        <div className="hidden sm:flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
              Explore {selectedCategories.length === 1 ? selectedCategories[0] : 'Products'}
            </h1>
            <p className="text-on-surface-variant font-medium mt-1">Showing {filteredProducts.length} results</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Tablet Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-outline-variant/30 px-4 py-2.5 rounded-xl font-bold text-sm text-on-surface cursor-pointer hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
            >
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
              </svg>
              Filters
              {selectedCategories.length + (condition !== 'All' ? 1 : 0) + (location !== 'All Locations' ? 1 : 0) > 0 && (
                <span className="bg-primary text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                  {selectedCategories.length + (condition !== 'All' ? 1 : 0) + (location !== 'All Locations' ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-on-surface-variant whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-outline-variant/30 rounded-xl py-2.5 pl-3 pr-8 text-sm font-bold text-on-surface focus:outline-none shadow-sm cursor-pointer"
              >
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid - Renders list rows on mobile and grids on desktop */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-outline-variant/30 shadow-sm mx-4 sm:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-on-surface-variant/50 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z" />
            </svg>
            <h3 className="text-lg font-bold text-on-surface mb-1">No products found</h3>
            <p className="text-sm text-on-surface-variant font-medium max-w-sm mx-auto">
              Try adjusting your filter keywords, category settings, or price ranges.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 bg-transparent border-none">
            {filteredProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative border border-outline-variant/30 flex flex-col justify-between cursor-pointer">
                <div>
                  {item.tag && (
                    <div className={`absolute top-2 left-2 z-10 text-[8px] sm:text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded flex items-center gap-1 ${
                      item.tag === 'BESTSELLER' || item.tag === 'Top Rated' ? 'bg-emerald-800 text-white' : 'bg-primary text-white'
                    }`}>
                      {(item.tag === 'BESTSELLER' || item.tag === 'Top Rated') && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 sm:w-3 sm:h-3">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                      )}
                      {item.tag}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(item.id); }}
                    className={`absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm transition-colors backdrop-blur-sm cursor-pointer ${
                      wishlist.includes(item.id) ? 'text-error hover:text-on-surface-variant' : 'text-on-surface-variant hover:text-error'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill={wishlist.includes(item.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>

                  {/* Product Image Container */}
                  <div className="h-[140px] sm:h-[200px] bg-surface-container-lowest w-full overflow-hidden relative">
                    <img
                      alt={item.title}
                      className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-white text-primary text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-3 sm:p-5">
                    {/* Price and Discount Row */}
                    <div className="flex flex-wrap items-baseline gap-1.5 mb-1">
                      <span className="text-sm sm:text-lg font-bold text-primary">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-on-surface-variant line-through text-[10px] sm:text-xs font-semibold">${item.originalPrice}</span>
                      )}
                      {item.discount && (
                        <span className="text-emerald-600 font-bold text-[10px] sm:text-xs">
                          {item.discount}% Off
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xs sm:text-base text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1" title={item.title}>
                      {item.title}
                    </h3>

                    {/* Location */}
                    <p className="text-on-surface-variant text-[10px] sm:text-xs mb-1.5 font-medium flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-on-surface-variant">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {item.location}
                    </p>

                    {/* Ratings & Review Badge */}
                    {item.rating && (
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="bg-[#388e3c] text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.2 rounded flex items-center gap-0.5">
                          <span>{item.rating}</span>
                          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.868 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                          </svg>
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-on-surface-variant font-semibold">({item.reviews.toLocaleString()})</span>
                        {item.isAssured && (
                          <span className="text-[8px] bg-blue-600 text-white font-extrabold px-1 rounded italic leading-none py-0.5">
                            Assured
                          </span>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-500 text-[10px] sm:text-xs line-clamp-2 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Shipping & Condition Badges */}
                {(item.shipping || item.condition) && (
                  <div className="px-3 pb-3 sm:px-5 sm:pb-5 pt-0">
                    <div className="pt-2 sm:pt-3 border-t border-outline-variant/30 flex gap-2 flex-wrap">
                      {item.shipping && (
                        <span className="bg-emerald-50 text-emerald-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-tight px-2 py-0.5 rounded border border-emerald-100">
                          {item.shipping}
                        </span>
                      )}
                      {item.condition && (
                        <span className="bg-surface-container text-on-surface-variant text-[9px] sm:text-[10px] font-bold uppercase tracking-tight px-2 py-0.5 rounded">
                          {item.condition}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* Loading State */}
        <div className="mt-12 mb-8 flex flex-col items-center justify-center space-y-3">
          <div className="w-8 h-8 border-4 border-outline-variant border-t-primary rounded-full animate-spin"></div>
          <p className="text-on-surface-variant text-sm font-semibold">Loading more premium finds...</p>
        </div>
      </section>
    </main>
  );
}
