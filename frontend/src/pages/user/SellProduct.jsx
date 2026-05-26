import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SellProduct() {
  const navigate = useNavigate();

  // Form State
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // File Handling
  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImages = filesArray.map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages].slice(0, 5));
    }
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  // Drag & Drop
  const [isDragging, setIsDragging] = useState(false);
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files);
      const newImages = filesArray.filter(file => file.type.startsWith('image/')).map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages].slice(0, 5));
    }
  };

  // Publish Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !category) {
      alert('Please fill out all required details (Title, Price, and Category) before publishing.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  const categoriesList = [
    {
      id: 'Electronics',
      name: 'Electronics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    },
    {
      id: 'Furniture',
      name: 'Furniture',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12a2.25 2.25 0 0 0 2.25-2.25V3m-16.5 0h16.5M12 16.5v3.75m0 0H9m3 0h3" />
        </svg>
      )
    },
    {
      id: 'Apparel',
      name: 'Apparel',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 7.125a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM9 21h1.5a1.5 1.5 0 0 0 1.5-1.5v-3.75h-3v3.75A1.5 1.5 0 0 0 9 21Zm6-4.5h-3v3.75a1.5 1.5 0 0 0 1.5 1.5h1.5A1.5 1.5 0 0 0 15 21v-3.75Z" />
        </svg>
      )
    },
    {
      id: 'Software',
      name: 'Software',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      )
    },
    {
      id: 'Services',
      name: 'Services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.97 5.97 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      )
    },
    {
      id: 'Other',
      name: 'Other',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-sans min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Minimal Header for Transactional Flow */}
      <header className="w-full bg-white/80 backdrop-blur-[12px] border-b border-outline-variant/30 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop h-20 flex items-center justify-between">
          <Link className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.5a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
            <span className="text-xl font-bold tracking-tight">MarketElite</span>
          </Link>
          <button 
            type="button"
            onClick={() => navigate('/')} 
            className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors font-semibold text-sm cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <span>Cancel</span>
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-grow max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Area */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Form Container */}
            <div className="bg-white rounded-2xl shadow-[0px_4px_30px_rgba(0,0,0,0.03)] border border-slate-100 p-6 md:p-8 flex flex-col gap-8">
              
              {/* Section 1: Upload Media */}
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-xl font-bold text-on-surface mb-1">Upload Product Media</h2>
                  <p className="text-xs text-secondary">High-quality images increase your chances of a successful sale. You can upload up to 5 images.</p>
                </div>

                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`w-full border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
                    isDragging 
                      ? 'border-primary bg-primary/5' 
                      : 'border-slate-200 hover:border-primary/50 bg-slate-50 hover:bg-slate-50/50'
                  }`}
                  onClick={() => document.getElementById('file-input').click()}
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-on-surface">Drag &amp; drop your images here</p>
                    <p className="text-xs text-secondary mt-1">or click to browse from your computer</p>
                  </div>
                  <p className="text-[10px] font-medium text-slate-400">Supports JPG, PNG, WEBP (Max 5MB)</p>
                  <input 
                    type="file" 
                    id="file-input" 
                    multiple 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleFileChange}
                  />
                </div>

                {/* Uploaded Image Previews */}
                {images.length > 0 && (
                  <div className="mt-1">
                    <p className="text-xs font-bold text-on-surface-variant mb-2">Uploaded Images ({images.length}/5)</p>
                    <div className="grid grid-cols-5 gap-3">
                      {images.map((url, idx) => (
                        <div key={idx} className="aspect-square rounded-xl overflow-hidden border border-slate-200 relative group shadow-sm bg-slate-50">
                          <img src={url} alt={`upload-${idx}`} className="w-full h-full object-cover" />
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(idx);
                            }}
                            className="absolute top-1.5 right-1.5 w-5 h-5 bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow hover:bg-black"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                      {images.length < 5 && (
                        <div 
                          className="aspect-square rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 flex items-center justify-center text-slate-400 cursor-pointer transition-colors"
                          onClick={() => document.getElementById('file-input').click()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Divider Line */}
              <div className="border-t border-slate-100"></div>

              {/* Section 2: Category Selection */}
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-xl font-bold text-on-surface mb-1">Select a Category <span className="text-error">*</span></h2>
                  <p className="text-xs text-secondary">Choose the category that best fits your product to help buyers find it.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {categoriesList.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer active:scale-95 ${
                        category === cat.id
                          ? 'border-primary bg-primary/5 text-primary shadow-sm'
                          : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-on-surface'
                      }`}
                    >
                      {cat.icon}
                      <span className="text-xs font-semibold">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-slate-100"></div>

              {/* Section 3: Product Details */}
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-xl font-bold text-on-surface mb-1">Product Details</h2>
                  <p className="text-xs text-secondary">Provide clear and concise details to attract buyers.</p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Title Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface" htmlFor="product-title">
                      Product Title <span className="text-error">*</span>
                    </label>
                    <input 
                      type="text"
                      id="product-title"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Vintage Leather Briefcase"
                      className="w-full rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none p-3.5 text-sm text-on-surface placeholder:text-slate-400 font-medium"
                    />
                  </div>

                  {/* Price Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface" htmlFor="product-price">
                      Price ($) <span className="text-error">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-slate-400 font-semibold text-sm pointer-events-none">$</span>
                      <input 
                        type="number"
                        id="product-price"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="0.00"
                        className="w-full rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none p-3.5 pl-8 text-sm text-on-surface placeholder:text-slate-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* Location Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface" htmlFor="product-location">
                      Location
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </span>
                      <select 
                        id="product-location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none p-3.5 pl-10 text-sm text-on-surface appearance-none cursor-pointer font-medium"
                      >
                        <option value="">Select location</option>
                        <option value="New York, NY">New York, NY</option>
                        <option value="San Francisco, CA">San Francisco, CA</option>
                        <option value="London, UK">London, UK</option>
                        <option value="Remote / Digital">Remote / Digital</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-on-surface" htmlFor="product-desc">
                      Description <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea 
                      id="product-desc"
                      rows="4"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe the condition, features, and any other relevant details..."
                      className="w-full rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none p-3.5 text-sm text-on-surface placeholder:text-slate-400 font-medium resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Form Navigation Actions */}
              <div className="mt-4 pt-6 border-t border-slate-100 flex items-center justify-end">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-xl bg-primary hover:bg-on-primary-fixed-variant text-white font-bold text-sm shadow-md transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Publishing...</span>
                    </div>
                  ) : (
                    <>
                      <span>Publish Listing</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4.5 h-4.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h10a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

            </div>
          </form>

          {/* Right Column: Live Preview Panel (HIDDEN ON MOBILE, ONLY ON LG+) */}
          <div className="lg:col-span-4 hidden lg:block sticky top-28">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Live Preview</h3>
              
              {/* Preview Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-1 group">
                
                {/* Image Area */}
                <div className="w-full aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-50">
                  {images.length > 0 ? (
                    <img src={images[0]} alt="Preview" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                  ) : (
                    <>
                      {/* Grid Pattern Background */}
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1d352e_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
                      <div className="flex flex-col items-center gap-1.5 text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375 0 1 1-.75 0 .375 0 0 1 .75 0Z" />
                        </svg>
                      </div>
                    </>
                  )}

                  {/* Category Badge Overlay */}
                  {category && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-100 shadow-sm z-20">
                      <span className="text-[10px] font-bold text-primary">{category}</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className={`text-base font-bold text-on-surface line-clamp-2 break-words leading-tight ${!title && 'text-slate-300'}`}>
                      {title || 'Your Product Title'}
                    </h4>
                    <span className="text-lg font-extrabold text-primary whitespace-nowrap">
                      ${price ? parseFloat(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '0.00'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mt-1 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span className="text-[11px] font-semibold">{location || 'No location set'}</span>
                  </div>
                </div>

                {/* Card Footer Action (Decorative) */}
                <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">Y</span>
                    </div>
                    <span className="text-xs font-semibold text-on-surface">You (Seller)</span>
                  </div>
                  <button type="button" className="text-xs font-semibold text-primary/50 cursor-not-allowed">View Details</button>
                </div>

              </div>

              <p className="text-xs text-slate-400 text-center font-medium">This is how buyers will see your listing.</p>
            </div>
          </div>

        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center border border-slate-100 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-1">Listing Published!</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Your listing has been submitted and is now live on the marketplace. Buyers can now find and view your product details.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/marketplace');
              }}
              className="w-full bg-primary hover:bg-on-primary-fixed-variant text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 cursor-pointer text-sm mt-2"
            >
              Go to Marketplace
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SellProduct;
