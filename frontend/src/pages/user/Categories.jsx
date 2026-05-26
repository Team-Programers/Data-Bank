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
    <div className="min-h-screen bg-[#f6f7fb]">
      <section className="max-w-[1500px] mx-auto px-4 md:px-6 py-6 md:py-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-bold text-indigo-600 mb-3">
              Premium Marketplace
            </p>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
              Explore Categories
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl">
              Browse premium products, services, curated collections,
              luxury listings, and elite sellers.
            </p>
          </div>

          {/* SEARCH */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-2 flex items-center">
              <Search size={18} className="text-gray-400 ml-2" />

              <input
                type="text"
                placeholder="Search categories..."
                className="flex-1 bg-transparent outline-none px-3 py-2 text-sm"
              />

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
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
              className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[420px] rounded-[24px] overflow-hidden group"
            >
              <img
                src={categories[0].image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 md:p-7 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    {categories[0].icon}
                  </div>

                  <span className="text-xs md:text-sm font-medium">
                    {categories[0].subtitle}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-3">
                  {categories[0].title}
                </h2>

                <p className="hidden md:block text-gray-200 max-w-lg text-sm leading-relaxed mb-5">
                  {categories[0].description}
                </p>

                <button className="bg-white text-black hover:bg-indigo-600 hover:text-white transition-all px-4 md:px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-semibold">
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
                  className="relative h-[130px] sm:h-[150px] md:h-[190px] rounded-[20px] overflow-hidden group"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        {category.icon}
                      </div>

                      <span className="hidden md:block text-xs font-medium">
                        {category.subtitle}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg md:text-2xl font-black mb-3 leading-tight">
                      {category.title}
                    </h2>

                    <button className="w-fit bg-white text-black hover:bg-indigo-600 hover:text-white transition-all px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold">
                      {category.button}
                      <ArrowRight size={13} />
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
                className="relative h-[140px] sm:h-[170px] md:h-[210px] rounded-[22px] overflow-hidden group"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      {category.icon}
                    </div>

                    <span className="hidden md:block text-xs font-medium">
                      {category.subtitle}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg md:text-2xl font-black mb-3 leading-tight">
                    {category.title}
                  </h2>

                  <button className="w-fit bg-white text-black hover:bg-indigo-600 hover:text-white transition-all px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold">
                    {category.button}
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-[1500px] mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="bg-indigo-600 rounded-[28px] px-5 md:px-14 py-12 md:py-20 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-5">
            Never miss a new arrival.
          </h2>

          <p className="max-w-2xl mx-auto text-indigo-100 text-sm md:text-lg leading-relaxed mb-8">
            Get weekly digests of the most exclusive listings and curated
            collections tailored specifically for your interests.
          </p>

          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 outline-none placeholder:text-indigo-200"
            />

            <button className="bg-white text-indigo-700 hover:bg-gray-100 transition-all px-8 py-4 rounded-2xl font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}