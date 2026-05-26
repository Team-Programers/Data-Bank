import React, { useState } from 'react';

export default function ProductDetail() {
  // Images from the design spec
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBf0Ni1bIsgnhKZZALw-t9qVrWKtYvPzEiFsdhjJzg6DnEd5MfJw-y1Amlui04MwfTnOVTF-e8faIa7EV36TzkKxhzscWCzMSDhpDb6h3OJjy6SXPTqCFoRilZxahzMOklAptypZXPR0LP8pwC2V8vHoU5ACRJjgcHXuRicvNpv4It6tavySvSdCCTeMKL3CDyDwYyrBJjOwswOKK2hD6JZv_sy8Bg7RptKwrAgP4Jf1e81kk2K1GDidKoHBNRVfLszZ7FU6HPjrXs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDags_lr88DbDRA_ceSr9n10Ud3Q_oP8C6vdxaXHYBCjo351UtWl5CT0GiWiR7uyFt72DoFjDVz1LCGHwF3uPQPLSaArZgDVkwXLVLplBFetwEq29mzRA5EKyvsH1Lg4fuI_uz9Yzi9lDR-csGhV5zA8j74RR3oyltRY0LOge3ZRyIu3dTYyTW1Y0da1xZF8V3fS_FUsBpS4BOap2hC-JLQcXqViqdERQPMXs3ueY7zHQ4-BA7txMQIvPWQ9ijCkYIfyFm4_YNAIgk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCtVFERlf88kCCtqWqoTQ8G6zu88ERGxciOzX2i77O6XHF4p5RVvDAyfrS7B2vtnSPFz7p_Z_nckNUtw5CppyWIPEO3aXZ8SHg5EOwd7u7kU6a83fGiZb9re9DQDtXRYLTsiGhUnFwQGvSWnByUPoz2tYRE-gqCmtUMr3MB1s9CAHPtYSKenSq8ZboUE-B3rNbe0kseYmX0fiMhHICKnGUg1KqR1ZwcDz1PPbGQ2J0RMFejp1BETOjMFSO67JD2WZATa12a_Y6F1KQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDigiOvEYGS-QtBfVsEUB4y0JvTrNhwTVFdg31gi7ubIWhQ42zCgyeTv6ZnyuN6zvVy8njUbJl7IpDSf0rOl7EaKtadWt-3Npt2vLegp7HRt2XEvR51ltZTtLCc08l6kY-iQzFwecGH8MeStIfWUbUwRk9Vr3Wu5lJF-3bkGwrbns_DDA8NF8eWWDYEun9yJCb5aWOdc2CDe-wnrsrdbT35_9VvuqpDEEn62bAsK0F8eM_6leR420mBzI1kNqSh0KO2sv79FkHoGr0'
  ];

  // States
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedConfig, setSelectedConfig] = useState('16 Cores');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const [wishlist, setWishlist] = useState(false);

  const configs = ['16 Cores', '24 Cores', '32 Cores'];

  // Details
  const product = {
    title: 'Quantum Core Processor X9',
    rating: 4.8,
    reviews: 124,
    sku: 'QC-X9-2024',
    price: 899.00,
    originalPrice: 1299.00,
    discount: 30,
    seller: {
      name: 'TechCorp Solutions',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAm9gZdzkAN4tWuKOe3j8IFLeuFxj_BcOzzuWdwh1LU0bwL-KXtKpHt3CTiD5nFpUeRsxdq_yq5MrIYPMJ0Ib6bkhfUraPiSlSaWPwfCi3dDLAgW0EVNQEtcMgL6x9cC0XA4uHc_S_ruZs-GqCRQ-cA8dGHRj7Utexamoq4mQbUUqfUxGDU780YQUrIpEs_P8uh2cTxWTzUrkC_s5QYiWAOObpSWoQlbMIR0ffNZv5j-E3Rt_DMcsiEb7UK70qpOrhqrEsbF45JXU',
      description: 'Premium Enterprise Vendor. Verified Partner.'
    }
  };

  const relatedProducts = [
    {
      id: 1,
      category: 'Motherboards',
      title: 'Apex Z990 Elite Motherboard',
      price: 349.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwknPJUcfwBqrKaCe40jn8xRCW6Q5PaYTrfwyZprJdCB4XdgK9zpr_lzw0pHitGQwNKGqmWx9aptbuA6GJgkFqGH3VeQIbqBRyF955ZXEd9Zu-UDUkBw9GC76k3lxpgdyLlMtcrMfGKp34lichOvWZy1aeyg0Ae4aJvrGjBdMfrxCLJG-CCjEn5U46XCHvRSQQxMZSGNFaSjcbheipNI6e4Crb9QJ9-LqOVMaH1-GCWVI-4Y4Y_nV8BF-jc81HcNauyuHJI5VG-DE'
    },
    {
      id: 2,
      category: 'Memory',
      title: 'ViperX 64GB DDR5 RAM Kit',
      price: 289.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmyZTPsbwCnXI_etfr3ukT688Q6U4nLz5-jGETjxNOGhJk_HG3oKu472-Wi6CO3sBowgw4xjAeH21Dhb7duwnqJ0StyBzzJiweDapfw_VBk1CwbOkfOetyBu_DngPJ5Qu4HMkuXMfE721PWMhOe4vEwSYIwJZcHpkKJjS7V3HijqI6a3Or5AmaAcNoUAfhSXpjC87BK-ikNlS9UsdE9ge5Xw446YimaWWkgtceYKTqZmYRiiHlgToAYmkRJYy4TNfwLoYbjC-S_Dc'
    },
    {
      id: 3,
      category: 'Cooling',
      title: 'FrostFlow 360mm AIO Liquid Cooler',
      price: 159.00,
      originalPrice: 199.00,
      tag: 'Sale',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCVbN523iPHzXynYe1jXO5Q47kaD5elteTUmHaBvhJGmWIc1HSIuDJ5H7tnJqw3riyQ8APgcl7Z5TBSh8jM3ozGRZobGYTzRuFACosGpULmZBdsvo7IqTVHaXTV6nPespf28XB4-ar5iDgv5m4m8xgJgPhZ5o25B4AfrlGz-_mwTt85V8rBHdJ5Ql1d6c8pUHjvY3zPOb8LRsujuI42RPLGhoDFyTwxTQk0zB8D0vcopzjBeF3iuv1K057u16oQCnlSd-tVBi6Ugc'
    },
    {
      id: 4,
      category: 'Graphics',
      title: 'Titan RTX 5090 Super',
      price: 1899.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcAHt6nZiNU950dqLT2X8eVAvpLcbIpb3elGS7PDaD0hAmVtM7ESwYx8aBTV3nnd5J0bWNkuKHwiVh3Ff0cGGLx87TJAXray5LcZwsKR8DbS-dSLEYYkYP7BlBZ57HI_eYo6eg0tdcxTrd2TYcnHJH5BqF-VUg2FB_DtDNc37BUjDFaD7RKosqOaJmFbOQWwyGwj9bpMIkiyHPBERs8IDjW8Ix36LJaN67jE2HXxlui90r1hvcMeXdmCd2EkambpzyGm6hLlwFmyc'
    }
  ];

  return (
    <main className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-16 py-6 sm:py-12 pb-24 sm:pb-16 bg-background">
      
      {/* Breadcrumbs (Stacked/Scrollable on mobile) */}
      <nav className="flex items-center gap-1.5 mb-6 text-on-surface-variant/80 font-semibold text-xs overflow-x-auto whitespace-nowrap scrollbar-none py-1">
        <a className="hover:text-primary transition-colors" href="/">Home</a>
        <svg className="w-3.5 h-3.5 text-on-surface-variant/50" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        <a className="hover:text-primary transition-colors" href="/marketplace?category=Electronics">Electronics</a>
        <svg className="w-3.5 h-3.5 text-on-surface-variant/50" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        <span className="text-on-surface font-bold truncate max-w-[200px] sm:max-w-xs">{product.title}</span>
      </nav>

      {/* Main product info layout split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
        
        {/* Left column: Image gallery & thumbnails */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Display Image */}
          <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-sm bg-white relative group border border-outline-variant/20 flex items-center justify-center p-4">
            <img 
              alt={product.title} 
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" 
              src={images[activeImageIndex]} 
            />
            {/* Status badge */}
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-on-surface uppercase tracking-wider">In Stock</span>
            </div>
            
            {/* Mobile Wishlist heart */}
            <button 
              onClick={() => setWishlist(!wishlist)}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-on-surface-variant hover:text-error active:scale-90 transition-transform sm:hidden border border-white/20"
            >
              <svg className="w-5 h-5" fill={wishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Thumbnails row (horizontal grid/flex) */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`aspect-square rounded-xl overflow-hidden p-1.5 bg-white border-2 transition-all cursor-pointer ${
                  activeImageIndex === index 
                    ? 'border-primary shadow-sm' 
                    : 'border-outline-variant/30 opacity-70 hover:opacity-100 hover:border-primary/50'
                }`}
              >
                <img 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-contain rounded-lg" 
                  src={img} 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right column: Details and Options */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-on-surface leading-tight">
                  {product.title}
                </h1>
                <button 
                  onClick={() => setWishlist(!wishlist)}
                  className={`hidden sm:flex p-2.5 rounded-full border border-outline-variant/20 hover:bg-slate-50 transition-colors cursor-pointer ${
                    wishlist ? 'text-error' : 'text-on-surface-variant'
                  }`}
                >
                  <svg className="w-5 h-5" fill={wishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Star Rating (Flipkart Style) */}
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <div className="bg-[#388e3c] text-white text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5">
                  <span>{product.rating}</span>
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.868 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">
                  {product.reviews} Reviews
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant/80"></span>
                <span className="text-xs font-bold text-on-surface-variant/80 uppercase">
                  SKU: {product.sku}
                </span>
              </div>
            </div>

            {/* Pricing Section (Flipkart style: Discount + Orig price + large price) */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-2xl sm:text-3xl font-black text-on-surface">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm font-semibold text-on-surface-variant line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.discount && (
                  <span className="text-emerald-600 font-extrabold text-sm flex items-center gap-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    {product.discount}% Off
                  </span>
                )}
              </div>
              <p className="text-[11px] font-bold text-primary mt-1.5">
                WOW! Get it for ${(product.price - 20).toFixed(2)} with checkout bank offers
              </p>
            </div>

            {/* Configurations & Quantity Selection Card */}
            <div className="bg-white rounded-2xl p-5 border border-outline-variant/30 space-y-5">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-extrabold text-on-surface mb-2.5">
                  Select Configuration
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {configs.map((config) => (
                    <button
                      key={config}
                      onClick={() => setSelectedConfig(config)}
                      className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                        selectedConfig === config
                          ? 'border-2 border-primary bg-primary/5 text-primary'
                          : 'border border-outline-variant/30 bg-white text-on-surface-variant hover:border-primary/50'
                      }`}
                    >
                      {config}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity counter */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs uppercase tracking-wider font-extrabold text-on-surface">Quantity</span>
                <div className="flex items-center border border-outline-variant/35 rounded-xl bg-surface-container overflow-hidden w-28 h-9 shadow-sm">
                  <button 
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(quantity - 1)}
                    className="flex-1 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer disabled:opacity-40"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-on-surface select-none">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 h-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Actions Block (hidden on mobile) */}
            <div className="hidden sm:flex flex-col gap-3 pt-2">
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-[0_4px_12px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Buy Now
              </button>
              <button className="w-full bg-white hover:bg-slate-50 border border-primary text-primary font-extrabold text-sm py-3.5 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>

          {/* Seller details card */}
          <div className="bg-white rounded-2xl p-5 border border-outline-variant/30 flex items-start gap-4 mt-6">
            <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden flex-shrink-0 border border-outline-variant/20 p-1 flex items-center justify-center">
              <img alt={product.seller.name} className="max-h-full max-w-full object-contain" src={product.seller.logo} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-on-surface">{product.seller.name}</h4>
              <p className="text-xs font-semibold text-on-surface-variant/80 mt-0.5">{product.seller.description}</p>
              <button className="mt-2 text-primary font-bold text-xs hover:underline cursor-pointer">
                View Store
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Tabs description specifications and reviews */}
      <div className="mb-16">
        <div className="border-b border-outline-variant/30 flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-none mb-6">
          {['Description', 'Specifications', 'Reviews (124)'].map((tab) => {
            const cleanTab = tab.split(' ')[0];
            const isActive = activeTab === cleanTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(cleanTab)}
                className={`font-bold text-base pb-3.5 border-b-2 transition-all cursor-pointer ${
                  isActive 
                    ? 'text-primary border-primary' 
                    : 'text-on-surface-variant/70 border-transparent hover:text-primary'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Tab contents block */}
        <div className="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm">
          {activeTab === 'Description' && (
            <div className="prose max-w-none text-sm sm:text-base text-on-surface-variant leading-relaxed font-semibold">
              <p className="mb-4">
                Experience unparalleled processing power with the Quantum Core Processor X9. Designed for elite workstations and high-end gaming rigs, this next-generation silicon architecture delivers massive multi-threading capabilities and blazing-fast clock speeds.
              </p>
              <p className="mb-8">
                Built on a revolutionary 3nm process, it ensures optimal power efficiency while pushing the boundaries of compute performance. Whether you are rendering complex 3D scenes, compiling large codebases, or running intensive simulations, the X9 handles it all with seamless grace.
              </p>
              
              {/* Feature Highlights Bento Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                <div className="bg-surface-container/30 rounded-xl p-5 border border-outline-variant/20 hover:-translate-y-0.5 transition-transform flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-on-surface mb-0.5">5.8 GHz Boost</h5>
                    <p className="text-xs font-semibold text-on-surface-variant/80">Industry-leading single-core speed.</p>
                  </div>
                </div>

                <div className="bg-surface-container/30 rounded-xl p-5 border border-outline-variant/20 hover:-translate-y-0.5 transition-transform flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-on-surface mb-0.5">32 Threads</h5>
                    <p className="text-xs font-semibold text-on-surface-variant/80">Massive multitasking capacity.</p>
                  </div>
                </div>

                <div className="bg-surface-container/30 rounded-xl p-5 border border-outline-variant/20 hover:-translate-y-0.5 transition-transform flex items-start gap-4">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m-9-9h1.5m15 0H21m-3-6.364l-1.06 1.06m-9.192 9.193l-1.06 1.06m0-11.314l1.06 1.06m9.193 9.193l1.06 1.06M12 7a5 5 0 100 10 5 5 0 000-10z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-on-surface mb-0.5">Thermal Velocity</h5>
                    <p className="text-xs font-semibold text-on-surface-variant/80">Advanced smart cooling thresholds.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Specifications' && (
            <div className="text-sm font-semibold text-on-surface-variant divide-y divide-outline-variant/20">
              <div className="grid grid-cols-3 py-3">
                <span className="font-extrabold text-on-surface">Process Size</span>
                <span className="col-span-2">3nm silicon process</span>
              </div>
              <div className="grid grid-cols-3 py-3">
                <span className="font-extrabold text-on-surface">Cores / Threads</span>
                <span className="col-span-2">{selectedConfig.split(' ')[0]} Cores / 32 Threads</span>
              </div>
              <div className="grid grid-cols-3 py-3">
                <span className="font-extrabold text-on-surface">Base Frequency</span>
                <span className="col-span-2">4.2 GHz</span>
              </div>
              <div className="grid grid-cols-3 py-3">
                <span className="font-extrabold text-on-surface">Max Boost</span>
                <span className="col-span-2">5.8 GHz boost</span>
              </div>
              <div className="grid grid-cols-3 py-3">
                <span className="font-extrabold text-on-surface">L3 Cache</span>
                <span className="col-span-2">128 MB</span>
              </div>
            </div>
          )}

          {activeTab === 'Reviews' && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-on-surface">4.8</div>
                <div>
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {[1, 2, 3, 4].map(n => (
                      <svg key={n} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.868 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 fill-current opacity-50" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.868 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-on-surface-variant/80 mt-0.5">Based on 124 reviews</p>
                </div>
              </div>
              
              <div className="divide-y divide-outline-variant/15">
                <div className="py-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-on-surface">Alex M.</span>
                    <span className="text-[10px] bg-[#388e3c] text-white px-1 py-0.2 rounded font-bold">5.0 ★</span>
                  </div>
                  <p className="text-sm font-semibold text-on-surface-variant leading-relaxed">
                    This processor is a monster. Compilation times on my heavy backend apps cut in half. Highly recommended if you compile a lot!
                  </p>
                </div>
                <div className="py-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-on-surface">Sarah K.</span>
                    <span className="text-[10px] bg-[#388e3c] text-white px-1 py-0.2 rounded font-bold">4.8 ★</span>
                  </div>
                  <p className="text-sm font-semibold text-on-surface-variant leading-relaxed">
                    Runs cool with my AIO cooler. Boost speeds hit 5.8 GHz consistently. Very premium build and packaging.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-on-surface">Related Products</h2>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full border border-outline-variant/35 flex items-center justify-center text-on-surface-variant hover:bg-slate-50 cursor-pointer active:scale-95 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full border border-outline-variant/35 flex items-center justify-center text-on-surface-variant hover:bg-slate-50 cursor-pointer active:scale-95 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <a 
              key={p.id}
              href="#"
              className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 group block transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-surface-container/30 overflow-hidden relative p-4 flex items-center justify-center">
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-red-100 text-red-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                    {p.tag}
                  </span>
                )}
                <img 
                  alt={p.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  src={p.image} 
                />
              </div>
              <div className="p-5 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-primary tracking-wider">{p.category}</span>
                <h3 className="font-extrabold text-sm text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-extrabold text-base text-on-surface">${p.price.toFixed(2)}</span>
                    {p.originalPrice && (
                      <span className="text-xs line-through text-on-surface-variant font-semibold">
                        ${p.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span className="p-1.5 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Sticky Footer Actions Drawer (Flipkart Style) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-outline-variant/20 flex p-3 gap-3 sm:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <button className="flex-1 bg-white hover:bg-slate-50 border border-primary text-primary font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer active:bg-slate-100 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          Add to Cart
        </button>
        <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all shadow-[0_4px_12px_rgba(16,185,129,0.25)]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
          Buy Now
        </button>
      </div>

    </main>
  );
}
