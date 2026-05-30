import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Laptop,
  Car,
  Home,
  Briefcase,
  Camera,
  Sofa,
  Bike,
  PawPrint,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Electronics",
    subtitle: "3,492 premium items",
    description: "High-end tech for professionals and enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    icon: <Laptop size={18} />,
    button: "Explore",
  },
  {
    id: 2,
    title: "Fashion",
    subtitle: "842 premium pieces",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    icon: <Camera size={16} />,
    button: "View",
  },
  {
    id: 3,
    title: "Mobiles & Laptops",
    subtitle: "1,240 listed items",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    icon: <Laptop size={16} />,
    button: "Browse",
  },
  {
    id: 4,
    title: "Properties",
    subtitle: "156 luxury listings",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    icon: <Home size={16} />,
    button: "Explore",
  },
  {
    id: 5,
    title: "Vehicles",
    subtitle: "412 elite motors",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    icon: <Car size={16} />,
    button: "Browse",
  },
  {
    id: 6,
    title: "Bikes",
    subtitle: "284 high-performance",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    icon: <Bike size={16} />,
    button: "Explore",
  },
  {
    id: 7,
    title: "Furniture",
    subtitle: "Designer interiors",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    icon: <Sofa size={16} />,
    button: "Curated",
  },
  {
    id: 8,
    title: "Services",
    subtitle: "Bespoke solutions",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    icon: <Briefcase size={16} />,
    button: "View",
  },
  {
    id: 9,
    title: "Jobs",
    subtitle: "Elite careers",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    icon: <Briefcase size={16} />,
    button: "Browse",
  },
  {
    id: 10,
    title: "Pets",
    subtitle: "Premium care",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
    icon: <PawPrint size={16} />,
    button: "Discover",
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-background">
      <section className="max-w-[1500px] mx-auto px-4 md:px-6 py-6 md:py-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-bold text-primary mb-3">
              Premium Marketplace
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-on-surface leading-tight">
              Explore Categories
            </h1>

            <p className="mt-3 text-sm md:text-base text-on-surface-variant max-w-2xl">
              Browse premium products, services, curated collections,
              luxury listings, and elite sellers.
            </p>
          </div>

          {/* SEARCH */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-surface border border-outline-variant/30 rounded-2xl shadow-sm p-2 flex items-center">
              <Search size={18} className="text-on-surface-variant/60 ml-2" />

              <input
                type="text"
                placeholder="Search categories..."
                className="flex-1 bg-transparent outline-none px-3 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/45"
              />

              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all active:scale-95 cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* TOP SECTION */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 mb-4">

          {/* BIG CARD */}
          <Link
            to="/marketplace?category=Electronics"
            className="col-span-2 lg:col-span-6"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative h-[240px] sm:h-[280px] md:h-[340px] lg:h-[420px] rounded-[24px] overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={categories[0].image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1d352e]/95 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-7 text-white">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    {categories[0].icon}
                  </div>

                  <span className="text-xs sm:text-sm font-medium text-white/90">
                    {categories[0].subtitle}
                  </span>
                </div>

                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 leading-tight">
                  {categories[0].title}
                </h2>

                <p className="hidden md:block text-white/80 max-w-lg text-sm leading-relaxed mb-4 lg:mb-5">
                  {categories[0].description}
                </p>

                <button className="bg-white text-primary hover:bg-secondary hover:text-primary transition-all duration-300 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold cursor-pointer">
                  Explore
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          </Link>

          {/* RIGHT SIDE */}
          <div className="col-span-2 lg:col-span-6 grid grid-cols-2 gap-4">
            {categories.slice(1, 5).map((category) => (
              <Link
                key={category.id}
                to={`/marketplace?category=${encodeURIComponent(
                  category.title
                )}`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-[155px] sm:h-[175px] md:h-[200px] rounded-[20px] overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d352e]/95 via-black/20 to-transparent" />

                  <div className="absolute inset-0 p-3 sm:p-4.5 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        {category.icon}
                      </div>

                      <span className="hidden sm:block text-[10px] sm:text-xs font-medium text-white/90">
                        {category.subtitle}
                      </span>
                    </div>

                    <h2 className="text-xs sm:text-base md:text-xl font-bold mb-1.5 sm:mb-2.5 leading-tight text-white">
                      {category.title}
                    </h2>

                    <button className="w-fit bg-white text-primary hover:bg-secondary hover:text-primary transition-all duration-300 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl flex items-center gap-1.5 text-[9px] sm:text-xs font-bold cursor-pointer">
                      {category.button}
                      <ArrowRight size={13} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.slice(5).map((category) => (
            <Link
              key={category.id}
              to={`/marketplace?category=${encodeURIComponent(
                category.title
              )}`}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="relative h-[155px] sm:h-[175px] md:h-[200px] rounded-[22px] overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1d352e]/95 via-black/20 to-transparent" />

                <div className="absolute inset-0 p-3 sm:p-4.5 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      {category.icon}
                    </div>

                    <span className="hidden sm:block text-[10px] sm:text-xs font-medium text-white/90">
                      {category.subtitle}
                    </span>
                  </div>

                  <h2 className="text-xs sm:text-base md:text-xl font-bold mb-1.5 sm:mb-2.5 leading-tight text-white">
                    {category.title}
                  </h2>

                  <button className="w-fit bg-white text-primary hover:bg-secondary hover:text-primary transition-all duration-300 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl flex items-center gap-1.5 text-[9px] sm:text-xs font-bold cursor-pointer">
                    {category.button}
                    <ArrowRight size={13} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-[1500px] mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="bg-primary rounded-[28px] px-5 sm:px-8 md:px-14 py-12 md:py-16 text-center text-white relative overflow-hidden card-shadow">
          {/* Subtle background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container/10 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-5 leading-tight">
              Never miss a new arrival.
            </h2>

            <p className="max-w-2xl mx-auto text-white/80 text-xs sm:text-sm md:text-lg leading-relaxed mb-6 sm:mb-8">
              Get weekly digests of the most exclusive listings and curated
              collections tailored specifically for your interests.
            </p>

            <div className="max-w-md sm:max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 outline-none placeholder:text-white/50 text-xs sm:text-sm focus:border-white/40 focus:bg-white/15 transition-all text-white"
              />

              <button className="bg-secondary hover:bg-secondary/90 text-primary transition-all px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}