import React, { useState, useRef } from 'react';

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
  const [wishlist, setWishlist] = useState(false);
  const scrollRef = useRef(null);

  const selectedConfig = '16 Cores';
  const configs = ['16 Cores', '24 Cores', '32 Cores'];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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

              {/* SKU Section */}
              <div className="flex items-center gap-2 mt-2">
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

            {/* Description Paragraphs */}
            <div className="bg-white rounded-2xl p-5 border border-outline-variant/30 space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-extrabold text-on-surface">
                Product Description
              </h3>
              <div className="text-xs sm:text-sm text-on-surface-variant font-semibold leading-relaxed space-y-3">
                <p>
                  Experience unparalleled processing power with the Quantum Core Processor X9. Designed for elite workstations and high-end gaming rigs, this next-generation silicon architecture delivers massive multi-threading capabilities and blazing-fast clock speeds.
                </p>
                <p>
                  Built on a revolutionary 3nm process, it ensures optimal power efficiency while pushing the boundaries of compute performance. Whether you are rendering complex 3D scenes, compiling large codebases, or running intensive simulations, the X9 handles it all with seamless grace.
                </p>
              </div>
            </div>

            {/* Desktop Actions Block (hidden on mobile) */}
            <div className="hidden sm:flex gap-3 pt-2">
              <a 
                href="tel:+1234567890"
                className="flex-1 bg-primary hover:bg-primary/95 text-white font-extrabold text-xs py-2.5 rounded-xl transition-all shadow-[0_4px_12px_rgba(29,53,46,0.15)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call Seller
              </a>
              <a 
                href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20the%20Quantum%20Core%20Processor%20X9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold text-xs py-2.5 rounded-xl transition-all shadow-[0_4px_12px_rgba(37,211,102,0.15)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.859-4.385 9.862-9.77.001-2.61-1.013-5.064-2.855-6.908C16.638 2.083 14.19 1.07 11.58 1.07 6.142 1.07 1.72 5.454 1.718 10.84c-.001 1.74.466 3.433 1.354 4.9l-.997 3.642 3.734-.98c1.468.8 3.061 1.22 4.675 1.223zm10.74-7.516c-.294-.148-1.743-.86-2.012-.958-.268-.099-.463-.148-.659.148-.196.295-.758.958-.93 1.156-.17.197-.343.22-.638.073-.294-.148-1.243-.46-2.37-1.465-.877-.783-1.47-1.75-1.642-2.046-.172-.295-.018-.455.129-.602.132-.133.294-.344.44-.516.148-.172.197-.295.295-.492.099-.197.05-.369-.025-.516-.073-.148-.659-1.591-.902-2.176-.237-.57-.478-.492-.659-.502-.17-.008-.367-.01-.565-.01-.197 0-.519.074-.79.37-.272.295-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.743-.711 1.989-1.4.245-.688.245-1.277.172-1.4-.074-.122-.268-.196-.562-.344z"/>
                </svg>
                WhatsApp Seller
              </a>
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

      {/* Specifications Section */}
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-black text-on-surface mb-6">Specifications</h2>
        <div className="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm">
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
        </div>
      </div>

      {/* Related Products Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-on-surface">Related Products</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => handleScroll('left')}
              className="w-9 h-9 rounded-full border border-outline-variant/35 flex items-center justify-center text-on-surface-variant hover:bg-slate-50 cursor-pointer active:scale-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="w-9 h-9 rounded-full border border-outline-variant/35 flex items-center justify-center text-on-surface-variant hover:bg-slate-50 cursor-pointer active:scale-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Row (Horizontal scrollable) */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
        >
          {relatedProducts.map((p) => (
            <a 
              key={p.id}
              href="#"
              className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 group block transition-all hover:-translate-y-1 shadow-sm hover:shadow-md flex-shrink-0 w-[180px] sm:w-[220px] snap-start"
            >
              <div className="aspect-[16/10] bg-surface-container/30 overflow-hidden relative p-2.5 flex items-center justify-center">
                {p.tag && (
                  <span className="absolute top-2 left-2 bg-red-100 text-red-800 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm">
                    {p.tag}
                  </span>
                )}
                <img 
                  alt={p.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  src={p.image} 
                />
              </div>
              <div className="p-3 space-y-1">
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Sticky Footer Actions Drawer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-outline-variant/20 flex p-3 gap-3 sm:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <a 
          href="tel:+1234567890"
          className="flex-1 bg-white hover:bg-slate-50 border border-primary text-primary font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer active:bg-slate-100 transition-colors text-center"
        >
          <span className="material-symbols-outlined text-base">call</span>
          Call Seller
        </a>
        <a 
          href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20the%20Quantum%20Core%20Processor%20X9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all shadow-[0_4px_12px_rgba(37,211,102,0.25)] text-center"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.859-4.385 9.862-9.77.001-2.61-1.013-5.064-2.855-6.908C16.638 2.083 14.19 1.07 11.58 1.07 6.142 1.07 1.72 5.454 1.718 10.84c-.001 1.74.466 3.433 1.354 4.9l-.997 3.642 3.734-.98c1.468.8 3.061 1.22 4.675 1.223zm10.74-7.516c-.294-.148-1.743-.86-2.012-.958-.268-.099-.463-.148-.659.148-.196.295-.758.958-.93 1.156-.17.197-.343.22-.638.073-.294-.148-1.243-.46-2.37-1.465-.877-.783-1.47-1.75-1.642-2.046-.172-.295-.018-.455.129-.602.132-.133.294-.344.44-.516.148-.172.197-.295.295-.492.099-.197.05-.369-.025-.516-.073-.148-.659-1.591-.902-2.176-.237-.57-.478-.492-.659-.502-.17-.008-.367-.01-.565-.01-.197 0-.519.074-.79.37-.272.295-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.743-.711 1.989-1.4.245-.688.245-1.277.172-1.4-.074-.122-.268-.196-.562-.344z"/>
          </svg>
          WhatsApp Seller
        </a>
      </div>

    </main>
  );
}
