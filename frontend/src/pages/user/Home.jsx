import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const widgetVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
      delay: 0.4
    }
  }
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('India');
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [locationSearchQuery, setLocationSearchQuery] = useState('');

  const locations = [
    'Kerala',
    'Tamil Nadu',
    'Punjab',
    'Maharashtra',
    'Delhi',
    'Karnataka',
    'Gujarat',
    'Uttar Pradesh'
  ];

  const handleUseCurrentLocation = () => {
    setSelectedLocation('Mumbai, MH');
    setLocationDropdownOpen(false);
  };

  // Sample electronics data from original design
  const electronics = [
    {
      id: 'e1',
      title: 'Acoustic Pro Headphones',
      price: '$299',
      location: 'New York, NY',
      tag: 'Top Rated',
      shipping: 'Free Shipping',
      image: '/electronics_headphones.png',
      description: 'Immersive sound experience with advanced active noise cancellation and memory foam earcups.'
    },
    {
      id: 'e2',
      title: 'Elite Smartwatch Series',
      price: '$449',
      location: 'Austin, TX',
      tag: 'New Release',
      image: '/electronics_smartwatch.png',
      description: 'Next-gen health monitoring, custom workout tracking, and sleek responsive tactile controls.'
    },
    {
      id: 'e3',
      title: 'Lumix Mirrorless G9',
      price: '$1,299',
      location: 'Tokyo, JP',
      tag: 'New Release',
      image: '/electronics_camera.png',
      description: 'Ultra-fast autofocus mirrorless camera featuring 4K video recording and robust image stabilization.'
    },
    {
      id: 'e4',
      title: 'Sonic Fabric Speaker',
      price: '$199',
      location: 'New York, NY',
      tag: 'Limited Edition',
      image: '/electronics_speaker.png',
      description: 'High-fidelity cylindrical Bluetooth speaker wrapped in tactile, sustainable textured fabric.'
    }
  ];

  // Sample cars data from original design
  const cars = [
    {
      id: 'c1',
      title: 'Tesla Model Y',
      price: 'AED 180,000',
      specs: '2023 • 15,000 km',
      location: 'Dubai, UAE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChCtv1kIo0RXWITkv9Of4SZk9dBhU2Pui0iX9EFCca_gE_r0TK_xc34jkDjut0Xyo0pKD-E-qtCPOwDJCTnVQ0haSKZn1ViPT1uOC_nqhL3L9UU0JVA8DRyMUTWdSbni8GAQ7TiWdiFSnGfAn5B0vkwZ26tr-o0Lg_vz6pGvVAAaCNg_CDgmB8LYe3KmsfssetbtDR4MTrxb47ALa4ekHAct35OmlZYHzajMlvZ8Ss-eVjGv4irx2EElWlrZQegbPQx7TfyQR3hbY',
      description: 'Dual motor all-wheel drive SUV with premium autopilot, glass roof, and incredible long-range battery.'
    },
    {
      id: 'c2',
      title: 'Land Rover Defender 130 HSE',
      price: 'AED 311,000',
      specs: '2023 • 36,781 km',
      location: 'Abu Dhabi, UAE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvSTPj9M1dt4qo4ZnKLHitgbPSobAIeucNwyZHplPTrLP-wB7CYUlwXPRJEoijTUjvrocJMErod3bXteRdKu7QtR1dxusl5ZmnfvK6LNvyN2jukidBL94e045H2aDWRKbjCpbx9dJNL61VQMun1AI6cqh8vaQFpps1XaCk89lAdCFu5Paf1CqF0c47z5eFc9jxGZNM34FZm--5vsLhiLQML_lrb3_07ehM0Gl0vnlY4yfXSxToRTyEnD1CKtRAwaK5Y0127QTTef8',
      description: 'Spacious 8-seat off-road vehicle featuring premium leather, air suspension, and advanced safety assistance.'
    },
    {
      id: 'c3',
      title: 'Nissan X-Trail S',
      price: 'AED 45,000',
      specs: '2020 • 99,910 km',
      location: 'Sharjah, UAE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpFFHul2VpvgKghOi6412SSyMNERTguUZVF-y0Qws4-sQAeU62Sf_AYJDWMbVWzIBZcXNnGlAdN4Xakzl3RkLFKavzeaDp9tbVDK4L1Fg0veuubyEqv4kXMhFV3sAhh2E82JYN-h_obqbu-mtyAX-3AywXevx-Ab83L26jbG9_miOQY_ha-PP0FyAILlb9drKxCTGV5P5EnHCwE0hfYa5mRvEt5-xfLZhvkwmShUammZ8QkRJWkGSk-z7v_75H92ilt1GHyE0TPog',
      description: 'Efficient mid-size family crossover equipped with intelligent emergency braking and daily comfort features.'
    },
    {
      id: 'c4',
      title: 'Hyundai Kona Smart',
      price: 'AED 69,000',
      specs: '2024 • 82,341 km',
      location: 'Dubai, UAE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFEqQpUwwu_GW465xOqg48EsMSvdyTLz3_vv42JNEZBCkcTMDcqHB3VYyq6fMN0Nr6CB6HRbFaQJtfjQofnupmJLe2rg_0IraR6v4lrm1KMqZdEe8iGaM4ZY0QVLyItiRKM7958E1PHqOM6qKpu-LWQWxfreyVpZEkgQRswuDPSACl8Q1Z2wciCoDizPfLS0z01Qgx-S4IJK09KQ99I127e9I30DfzyU89hQ0SpEHr3XTsAFhKexi6aTeP_Wol3rhPtUys6JZiuyU',
      description: 'Compact crossover with high-tech infotainment dashboard, lane assist controls, and vibrant orange finish.'
    }
  ];

  // Sample properties data from original design
  const properties = [
    {
      id: 'p1',
      title: 'Luxury 3BHK Villa',
      price: 'AED 2,500,000',
      specs: '3 Beds • 4 Baths',
      location: 'Dubai Hills Estate',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtuarWjpA0s9V9dyvczLsClyp2tz8BS1pgJ7GEOR4-vxU0P9jtQy4zQSLGa-Pze3CKSfZsKn1WbD3_heXVq5EZHWJy5xSNGfvp5EE6HzY4FTgIc6DGSanRdLrQUfR-gDU2JzuC9_n8ZHCKOSxPEcGJezPjXQujd_l_qr5XHna-S3bXPnqIMikLuSV2zT63JwdvDBgJuGpnWnvrgcces0JP6VladXBdvVWe3__izdOk2CiyQAtn4pXkXv2FpU0RwctsYM93CXPlbm4',
      description: 'Beautiful modern villa offering private pool access, panoramic landscape views, and high-end marble finish.'
    },
    {
      id: 'p2',
      title: 'Park Villas, JVC District 10',
      price: 'AED 1,180,000',
      specs: '4 Beds • 6 Baths',
      location: 'Jumeirah Village Circle (JVC)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5nvPifnGxyeLdGCDISqy0CcwZQjYPPtQzl_IcJm3udkJR2q2Vui4eBI0N6bRmk5wXjU56w5sQg61W_Bz-m0_Kx7eLZ9WW5gCCOBe9cJ1QRarTO5wEiwHQb0OJfktvI0SLFmlRFVjFDHAiQYWVy09dyEuhnpbqwkL06eyPEu7gQf6EHquFDfLr0KP_FFPzd2Wl8NSWUc7mqYAP-5u6ll4hOrOb1Kv8eqtc8hOwcWwczRzoIvaF3MCsPa2ur9B6dexKlWCJ9JSL4dk',
      description: 'Elegant townhouses located in JVC featuring open-concept kitchen layout and private rooftop gardens.'
    },
    {
      id: 'p3',
      title: 'The Springs 12',
      price: 'AED 210,000 / yr',
      specs: '3 Beds • 3 Baths',
      location: 'The Springs',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCemE-nCefC-a-IJnyBTqYzjGqxCIwrKI9XtOeA1tumRvDOW70j0rTQ0AZLFVUoFpWmHIrh3IfkKPOLAlu-V7XUIi8Eyv5RoJmOnKuThelQAZSjFl0o6U_QCyB8Sr9NUXtFkaJERtHH3fhbiDslcVqQinkk7Q3jH2ljA2Osa6WjGsTh_aMx74J4mWBBnxpQE41UnbMj4zkW1q1TcQteZtYDgHCiI-KMwp8WDwASCv3__k964AX-cFSkydBNZ9XayHEzmDxJtQ2hAuI',
      description: 'Charming family home situated close to a scenic community lake, lush parks, and top-rated local schools.'
    },
    {
      id: 'p4',
      title: 'Samia Azizi',
      price: 'AED 45,000 / yr',
      specs: 'Studio • 1 Bath',
      location: 'Al Furjan',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgaCZqQ5n9qFyxBDQP6XKqp3KPp_BRTQaPIQSbJEmcAfNOrJhdFatzicENMJbMbxkoTNfdv4ovvSzvGgJFaiT5oAtYgtW1iz82lHz-l_LzxXebIeEUy6UU_5L6AienrulmrjryqAMZ1M2_C8s9jzaCQQiO47-f1VUGfcPnzhYwmwSvOt9-IkHxQ8CXjas58-Bmg_0rtKcXIx00W90oCV9zHwlIHuz7oDsLr1cr_q3XjjSpnhSit2zASnzY7gZ0Z2iJkkZmKvnALjM',
      description: 'Contemporary studio apartment equipped with modern built-in wardrobes and access to shared pool facilities.'
    }
  ];

  // Category list
  const categories = [
    { name: 'Electronics', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN25uuOAtyKRDVrXiSyJe0r4NmA-B2Hnn_2NMHuEedLjkXIJ4oPUNKClbWj9IKIPsUvd1hNxm7VtSKk_WQXdxswvJt4UCUHzqWOsEJIaqJBy9ZwwjpMlUAUcRfr77BZwQWTHvs-ju0IznpgkDq_Pv8vdriTPw7gMa1OJbUiyblWpm4NrlJzdfrTlpB8apLrvXUMauaNXN6SVF5Moah5kFzxZRSg7BSLAHQFkvuiZ-4qsFEXN8WqsmG7SFKrc0WpmGlt06ece6y3SY' },
    { name: 'Fashion', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2oL4kk1klUP2_yGPvMhRuaZ8sJXkvwua3kTEAeq7U9DR9Azkdv6qUa8qq_J5o9gTVbl0FFfg1EvJH67bUNTT_dR3rI-ATCocniaQbvy_NMrV3AkSnPzfZzsoBiSGyp2EC_z6ocv4wi58r0f2EFWsaSeKst2ZXgGJ6Vza4K0pvUVW221L3uqWl9PoZ1YPEwBWtAfNJU5BDPxmtZiH0xC2xqjEkdapPZTkmnyhorfYZWhHUG1nySfw0koAj_xRuApuL-waykQTaW8Y' },
    { name: 'Home', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA792-1NTpINYmu8rq260nE5yQQpqnwOYPo2woFQJvTiUtBpAQudkVQWitJjlXLaj-nO5cOpOidAmWTDpTilQlI0M8sKR0uDrwWVjSgl2bRCjaUybrUvxI-UdfNa-LCUlLfPR9tRTjGYCFUkeWUgrESVE86zFhy1XTx0Kdk-9m91UaBj-j34cPF73qxzHkqwSQVFtIQAbqh-Ta_jrOtBRjpTwHty5O4nIZfUwmMqvy-z4Iz_292DxdPx4SdzOHjVMpuYLKO4y7zH4' },
    { name: 'Sports', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmpcGkQIBvrh-9BGuKt48nov9HA8iorg1Ps0rDzRSN0kNM3uhKU8qC3W0RyeXRo4zFIzcmmUK3llXDTaXmqKoLubVsLVARYlohfcTH2Y5ykH9HAbyjkMXldtocULR4N3O3S899SmnBZu_GwUetISB2NmycUTm6aQKnGAICvBmcQYglQGdm4ouf_8Ni3PKkGUsIe0aT6uQ4JgUMacb5CBJMzjocmiSqAT8ykTDE16LZGVI27svNYxkeSy8s9L1lV2r6Hud7uMV4Pxk' },
    { name: 'Mobiles', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEdtgEJsDQqNLzpND1-91M9IZtU99JnQNvbxA-H0P1p9ACLYisDbqburjlRzxgLPAcoFQN9Pb-HFDC9kuVE9UoTr5bD47KyaolHx4q_eKNRPr7fvMvKixEF0nFTvRzJhyGMG7mIuaY3Cf8d6WreS2WHO5_kT1MlVpB57cKoisTKmwxlqBwDHWYhMisUD_1Rc6w8xXcB7mxMTXllmK0QFfSxfv_rsunXMYTwouRUjEfdLwGY5Llr6SxDG4vTvw7cnhk_SYjDwIfSOs' },
    { name: 'Appliances', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS8kDQ_9-uJfKlya5aJI6gpw0BlTaw-d_HgvHLVnhXot6ZbCFF4oZgw7azI3Eil26WdxGEyDsPkaZGizV7siffqZmuMew_uY3Mcm-amGsBDh6k2cuImSqBJm38SbWFpvaaQ8R12sqSJsGwGndjgISv4bHzMIRwkhtXCgfmfxN2NJlSZiLRg9m0dXAtSKDwOqyigqkF_5WfGu7gr83HLT798TgQ-_qEtOwiI4wHygnR-dhDq5K4cYfZdCbbHpk60GRU0Erbx34FRgE' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="w-full">
      {/* Search & Location Bar (Sticky below Navbar) */}
      <div className="bg-slate-50 border-b border-slate-200/60 py-2 sm:py-3.5 px-3 sm:px-6 md:px-12 sticky top-[72px] z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between w-full">
          <div className="flex gap-1.5 sm:gap-3 w-full items-stretch">
            
            {/* Location Selector */}
            <div className="relative w-[38%] min-w-[100px] sm:w-72 flex-shrink-0">
              <button 
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="w-full flex items-center justify-between gap-0.5 sm:gap-2 px-1.5 sm:px-4 py-2 sm:py-3 bg-white border border-[#1D352E]/10 sm:border-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-on-surface text-left cursor-pointer transition-all focus:border-[#1D352E] hover:border-[#1D352E]/30"
              >
                <div className="flex items-center gap-1 sm:gap-2 truncate">
                  <span className="material-symbols-outlined text-sm sm:text-base text-[#1D352E] hidden sm:inline">location_on</span>
                  <span className="truncate">{selectedLocation}</span>
                </div>
                <span className="material-symbols-outlined text-xs sm:text-base transition-transform duration-200 flex-shrink-0">
                  {locationDropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                </span>
              </button>

              {/* Location Dropdown Popover */}
              {locationDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-45" onClick={() => setLocationDropdownOpen(false)}></div>
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl sm:rounded-2xl shadow-xl border border-outline-variant/30 p-2 sm:p-3.5 z-50 w-[240px] sm:w-80 max-h-[280px] overflow-y-auto">
                    {/* Location Local Filter Input */}
                    <div className="relative mb-3">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-on-surface-variant">search</span>
                      <input 
                        type="text"
                        placeholder="Search city..."
                        value={locationSearchQuery}
                        onChange={(e) => setLocationSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-transparent rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold focus:ring-1 focus:ring-[#1D352E] focus:bg-white outline-none"
                      />
                    </div>

                    {/* Use Current Location Action */}
                    <button 
                      onClick={handleUseCurrentLocation}
                      className="w-full flex items-center gap-2 px-2.5 py-2 hover:bg-slate-50 text-[#1D352E] rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold cursor-pointer transition-all border border-dashed border-[#1D352E]/30 mb-2.5 text-left animate-pulse"
                    >
                      <span className="material-symbols-outlined text-sm sm:text-base">my_location</span>
                      <span>Use current location</span>
                    </button>

                    {/* Popular locations list */}
                    <div>
                      <h4 className="text-[9px] sm:text-[10px] uppercase font-bold text-on-surface-variant tracking-wider px-2 mb-1">Popular Locations</h4>
                      <div className="space-y-0.5">
                        {locations
                          .filter(loc => loc.toLowerCase().includes(locationSearchQuery.toLowerCase()))
                          .map((loc) => (
                            <button
                              key={loc}
                              onClick={() => { setSelectedLocation(loc); setLocationDropdownOpen(false); }}
                              className="w-full flex items-center gap-2 px-2 py-2 hover:bg-slate-50 text-[10px] sm:text-xs font-semibold text-on-surface rounded-lg sm:rounded-xl cursor-pointer transition-all text-left"
                            >
                              <span className="material-symbols-outlined text-sm text-on-surface-variant opacity-60">location_on</span>
                              <span>{loc}</span>
                            </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="flex flex-1 items-stretch gap-1.5 sm:gap-2.5">
              <div className="relative flex-grow">
                <span className="material-symbols-outlined absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm sm:text-base">search</span>
                <input 
                  type="text" 
                  placeholder='Search products...' 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-full pl-8 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-3 bg-white border border-[#1D352E]/10 sm:border-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-semibold focus:border-[#1D352E] hover:border-[#1D352E]/30 transition-all outline-none"
                />
              </div>
              <button 
                type="submit"
                className="bg-[#1D352E] hover:bg-[#1D352E]/95 text-white px-3 sm:px-7 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm sm:text-base">search</span>
                <span className="hidden sm:inline">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="max-w-[1400px] mx-auto pb-6 lg:pb-12">
        <motion.div 
          className="bg-white relative p-6 md:p-12 lg:px-16 lg:py-10 flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden lg:h-[calc(90vh-73px)] lg:min-h-[550px] lg:max-h-[680px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content Column */}
          <div className="lg:w-1/2 z-10 flex flex-col justify-center text-left">
            <motion.div variants={itemVariants} className="inline-block bg-slate-100 text-slate-500 text-[9px] font-bold tracking-widest uppercase py-1 px-2.5 rounded-full mb-3 w-fit">
              #1 ECOMMERCE PLATFORM 2026
            </motion.div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-none mb-3">
              <motion.span variants={itemVariants} className="block">Explore, shop,</motion.span>
              <motion.span variants={itemVariants} className="block">repeat again.</motion.span>
            </h1>
            <motion.p variants={itemVariants} className="text-slate-500 text-xs sm:text-base lg:text-lg max-w-md mb-4 sm:mb-6 leading-relaxed">
              MarketElite is a driving force behind the dreams of emerging entrepreneurs, a trusted partner for industry leaders.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Link to="/marketplace" className="bg-[#1D352E] hover:bg-[#1D352E]/90 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 text-center text-xs sm:text-base">
                Explore Marketplace
              </Link>
              <Link to="/sell-product" className="border-2 border-[#1D352E] text-[#1D352E] hover:bg-[#1D352E]/5 px-4 sm:px-8 py-2 sm:py-3.5 rounded-full font-semibold transition-all active:scale-95 text-center text-xs sm:text-base">
                Start Selling
              </Link>
            </motion.div>

            {/* Floating Section Below Text (hidden on mobile to save space) */}
            <motion.div variants={itemVariants} className="hidden sm:flex mt-8 lg:mt-10 gap-4 max-w-md">
              {/* Mini Stats/Visuals Mockup */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-2xl overflow-hidden grayscale flex-shrink-0">
                <img alt="Sample" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgjTS2w-RO-V0bQehm3__zTD4atIJwkY3sf78_Jb2viGlc2v7Xnmdh8Rq2pkEi5tJZ_pVFG1Yz0JYWhGYP66UwvHDUGkg5F-rUJgsZw5VVqjt-14GwOgX5qCWOqwLstT3ck7DQtxDMzhEITVaFwZneB-z-XRmqkDehLykaOCCfdmQKUajdxwcg2_-twDnqkjSTokggpeToI7trtx0NYeIrUT1ytpIpYVpD7GbehPVO7q-Mhms0EHl0LUEgjzPIrch5RYRQ6S85AGM" />
              </div>
              <div className="flex-1 p-4 md:p-5 bg-[#F3F6F1] rounded-2xl relative overflow-hidden flex flex-col justify-center">
                <div className="relative z-10">
                  <span className="text-2xl md:text-3xl font-bold text-slate-800">$243.89</span>
                  <p className="text-[9px] md:text-[10px] text-slate-500 mt-0.5 uppercase tracking-wider font-bold">Total Sales Today</p>
                </div>
                {/* Small growth graph representation */}
                <div className="absolute bottom-0 right-0 w-20 h-10 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <path className="text-green-600" d="M0 40 Q 25 35, 50 15 T 100 0" fill="transparent" stroke="currentColor" strokeWidth="4"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column (Floating Elements) */}
          <div className="lg:w-1/2 relative w-full lg:h-full flex items-center justify-center min-h-[220px] sm:min-h-[400px] lg:min-h-0 overflow-visible mt-4 lg:mt-0">
            {/* Large Main Image Card (Premium Goods) */}
            <motion.div 
              variants={imageVariants}
              className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[85%] h-[180px] sm:h-[360px] lg:h-[95%] bg-[#F1F3EE] rounded-2xl lg:rounded-3xl overflow-hidden card-shadow"
            >
              <img alt="Premium Luxury Goods" className="w-full h-full object-cover" src="/premium_luxury_goods.png" />
              {/* Product Tag overlay */}
              <motion.div 
                variants={widgetVariants}
                className="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-white p-2.5 md:p-4 rounded-xl md:rounded-2xl card-shadow w-[150px] md:w-56" data-purpose="product-card"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-[9px] md:text-xs text-slate-800">Classic Essentials Set</h3>
                    <p className="text-[8px] md:text-[10px] text-slate-400 mt-0.5">$845.00</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-[7px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 bg-green-700 rounded-full"></span> PRO
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Stats Card (50x) */}
            <motion.div 
              variants={widgetVariants}
              className="absolute -bottom-3 left-3 lg:left-0 lg:-bottom-2 bg-[#A6C48A] p-2.5 lg:p-5 rounded-xl lg:rounded-3xl text-[#1D352E] card-shadow z-20 w-28 lg:w-44" data-purpose="stats-card"
            >
              <div className="text-xl lg:text-3xl font-bold mb-0.5">50x</div>
              <p className="text-[8px] lg:text-[10px] font-semibold leading-tight text-[#1D352E]/90">New customer every week</p>
              <div className="hidden sm:flex mt-3 -space-x-1.5">
                <div className="w-5 h-5 rounded-full border border-[#A6C48A] bg-slate-300"></div>
                <div className="w-5 h-5 rounded-full border border-[#A6C48A] bg-slate-400"></div>
                <div className="w-5 h-5 rounded-full border border-[#A6C48A] bg-slate-500"></div>
                <div className="w-5 h-5 rounded-full border border-[#A6C48A] bg-slate-600 flex items-center justify-center text-[7px] text-white font-bold">+</div>
              </div>
            </motion.div>

            {/* Floating Sidebar Interface (Simplified) */}
            <motion.div 
              variants={widgetVariants}
              className="hidden xl:block absolute top-10 -left-6 bg-white p-4 rounded-2xl card-shadow w-40 z-20" data-purpose="ui-sidebar"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-xs">⌚</div>
                  <div>
                    <div className="h-1.5 w-12 bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-8 bg-slate-100 rounded mt-1"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-xs">📷</div>
                  <div>
                    <div className="h-1.5 w-12 bg-slate-200 rounded"></div>
                    <div className="h-1.5 w-8 bg-slate-100 rounded mt-1"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="h-1.5 w-full bg-slate-100 rounded"></div>
                </div>
              </div>
            </motion.div>

            {/* Small Partner Pill Overlay */}
            <motion.div 
              variants={widgetVariants}
              className="hidden sm:flex absolute bottom-[15%] lg:bottom-[20%] right-2 lg:right-[-5%] bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-full items-center gap-2 card-shadow z-20 border border-white/50"
            >
              <div className="flex -space-x-1">
                <div className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center text-[7px] text-white font-bold">a</div>
                <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-[7px] text-white font-bold">b</div>
                <div className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[7px] text-white font-bold">a</div>
              </div>
              <span className="text-[8px] lg:text-[9px] font-semibold text-slate-600">Partnering with many e-commerce</span>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Categorized Products */}
      <div className="py-16 space-y-20 bg-background">
        
        {/* Electronics Section */}
        <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-on-surface">Popular in Electronics</h2>
              <p className="text-on-surface-variant font-medium mt-1">Trending tech and gadgets</p>
            </div>
            <Link className="text-primary font-semibold flex items-center hover:underline text-sm gap-1" to="/marketplace?category=electronics">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {electronics.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative border border-outline-variant/30 flex flex-col justify-between cursor-pointer">
                <div>
                  <div className={`absolute top-2 left-2 z-10 text-[8px] sm:text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded flex items-center gap-1 ${
                    item.tag === 'Top Rated' ? 'bg-emerald-800 text-white' : 'bg-primary text-white'
                  }`}>
                    {item.tag === 'Top Rated' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 sm:w-3 sm:h-3">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.tag}
                  </div>
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} className="absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error shadow-sm transition-colors backdrop-blur-sm cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                  <div className="h-[160px] sm:h-[240px] bg-surface-container-lowest w-full overflow-hidden relative">
                    <img alt={item.title} className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src={item.image} />
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
                  <div className="p-3 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1 sm:gap-2">
                      <h3 className="font-bold text-xs sm:text-base text-on-surface group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                      <span className="text-sm sm:text-lg font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-on-surface-variant text-[10px] sm:text-xs mb-1 sm:mb-1.5 font-medium flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      {item.location}
                    </p>
                    <p className="text-slate-500 text-[10px] sm:text-xs line-clamp-2 leading-relaxed mt-1 sm:mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
                {item.shipping && (
                  <div className="px-3 pb-3 sm:px-5 sm:pb-5 pt-0">
                    <span className="text-emerald-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-tight bg-emerald-50 px-2 py-0.5 rounded">
                      {item.shipping}
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Cars Section */}
        <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-on-surface">Popular in Cars</h2>
              <p className="text-on-surface-variant font-medium mt-1">Verified vehicles from trusted sellers</p>
            </div>
            <Link className="text-primary font-semibold flex items-center hover:underline text-sm gap-1" to="/marketplace?category=cars">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {cars.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative border border-outline-variant/30 flex flex-col justify-between cursor-pointer">
                <div>
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} className="absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error shadow-sm transition-colors backdrop-blur-sm cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                  <div className="h-[140px] sm:h-[200px] bg-surface-container-lowest w-full overflow-hidden relative">
                    <img alt={item.title} className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src={item.image} />
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
                  <div className="p-3 sm:p-5">
                    <span className="text-sm sm:text-lg font-bold text-primary block mb-1">{item.price}</span>
                    <h3 className="font-bold text-xs sm:text-base text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                    <p className="text-on-surface-variant text-[10px] sm:text-sm font-medium mb-1.5">{item.specs}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs line-clamp-2 leading-relaxed mt-1 sm:mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="px-3 pb-3 sm:px-5 sm:pb-5">
                  <div className="pt-2 sm:pt-3 border-t border-outline-variant/30 flex items-center text-[10px] sm:text-xs text-on-surface-variant gap-1 sm:gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {item.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Properties Section */}
        <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto pb-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-on-surface">Popular in Properties</h2>
              <p className="text-on-surface-variant font-medium mt-1">Discover your next dream home</p>
            </div>
            <Link className="text-primary font-semibold flex items-center hover:underline text-sm gap-1" to="/marketplace?category=properties">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {properties.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative border border-outline-variant/30 flex flex-col justify-between cursor-pointer">
                <div>
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); }} className="absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error shadow-sm transition-colors backdrop-blur-sm cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                  <div className="h-[140px] sm:h-[200px] bg-surface-container-lowest w-full overflow-hidden relative">
                    <img alt={item.title} className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500" src={item.image} />
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
                  <div className="p-3 sm:p-5">
                    <span className="text-sm sm:text-lg font-bold text-primary block mb-1">{item.price}</span>
                    <h3 className="font-bold text-xs sm:text-base text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                    <p className="text-on-surface-variant text-[10px] sm:text-sm font-medium mb-1.5">{item.specs}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs line-clamp-2 leading-relaxed mt-1 sm:mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="px-3 pb-3 sm:px-5 sm:pb-5">
                  <p className="text-on-surface-variant text-[10px] sm:text-xs font-medium flex items-center gap-1 sm:gap-1.5 pt-2 sm:pt-3 border-t border-outline-variant/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {item.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Explore Categories */}
      <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto bg-background border-t border-outline-variant/30">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-on-surface">Explore Categories</h2>
          <Link className="text-primary font-semibold flex items-center hover:underline text-sm gap-1" to="/categories">
            View All Categories 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              className="relative h-36 sm:h-60 rounded-2xl overflow-hidden group shadow-sm block" 
              to={`/marketplace?category=${cat.name.toLowerCase()}`}
            >
              <img alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={cat.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4 sm:p-8">
                <h3 className="text-white text-base sm:text-xl font-bold">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Vendor Banner */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Become a Vendor Today
            </h2>
            <p className="text-lg text-white/80 mb-10 font-medium">
              Join our curated community of elite creators. Reach professional buyers worldwide and keep up to 85% of your sales.
            </p>
            <Link 
              to="/sell-product" 
              className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-surface-bright transition-all transform active:scale-95 cursor-pointer"
            >
              Start Selling
            </Link>
          </div>
          {/* Abstract decorative backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto bg-background">
        <h2 className="text-3xl font-bold mb-12 text-center text-on-surface">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden" open>
            <summary className="flex justify-between items-center font-bold cursor-pointer p-6 text-on-surface hover:bg-surface-container-lowest transition-colors list-none">
              <span className="text-lg">How do I start selling on MarketElite?</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </summary>
            <div className="text-on-surface-variant px-6 pb-6 pt-2 text-base leading-relaxed font-medium">
              Simply click the 'Start Selling' button or the 'Sell' link in the navigation to create your vendor account and begin listing your items.
            </div>
          </details>

          <details className="group bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer p-6 text-on-surface hover:bg-surface-container-lowest transition-colors list-none">
              <span className="text-lg">Are transactions on the platform secure?</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </summary>
            <div className="text-on-surface-variant px-6 pb-6 pt-2 text-base leading-relaxed font-medium">
              Yes, all transactions are protected by our end-to-end encryption and secure payment gateway. We also offer buyer protection for all verified purchases.
            </div>
          </details>

          <details className="group bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer p-6 text-on-surface hover:bg-surface-container-lowest transition-colors list-none">
              <span className="text-lg">What are the shipping options available?</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </summary>
            <div className="text-on-surface-variant px-6 pb-6 pt-2 text-base leading-relaxed font-medium">
              Sellers can choose between standard, express, and international shipping options. Many of our 'Top Rated' items feature free shipping.
            </div>
          </details>

          <details className="group bg-white rounded-2xl border border-outline-variant/50 shadow-sm overflow-hidden">
            <summary className="flex justify-between items-center font-bold cursor-pointer p-6 text-on-surface hover:bg-surface-container-lowest transition-colors list-none">
              <span className="text-lg">How does the verification process work?</span>
              <span className="transition-transform duration-300 group-open:rotate-180 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </summary>
            <div className="text-on-surface-variant px-6 pb-6 pt-2 text-base leading-relaxed font-medium">
              Every seller undergoes a rigorous identity and authenticity check to ensure our community maintains the highest standards of trust and quality.
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
