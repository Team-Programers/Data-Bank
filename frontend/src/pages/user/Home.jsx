import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop",
    count: "3.2k items",
    large: true,
  },
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    count: "1.1k items",
  },
  {
    name: "Vehicles",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    count: "842 listings",
  },
  {
    name: "Properties",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    count: "420 homes",
  },
  {
    name: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    count: "950 products",
  },
  {
    name: "Furniture",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    count: "670 items",
  },
  {
    name: "Jobs",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    count: "320 openings",
  },
  {
    name: "Services",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    count: "140 services",
  },
];

export default function Categories() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block bg-slate-100 text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase py-1 px-3 rounded-full mb-4">
              Marketplace Categories
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Explore by category
            </h1>

            <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
              Discover curated products, verified sellers, premium listings,
              and trusted services from every category.
            </p>
          </div>

          <Link
            to="/marketplace"
            className="w-fit bg-[#1D352E] hover:bg-[#1D352E]/90 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
          >
            Explore Marketplace
          </Link>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4">

          {/* LARGE CARD */}
          <Link
            to="/marketplace?category=Electronics"
            className="col-span-2 lg:col-span-6"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="relative h-[240px] sm:h-[320px] md:h-[380px] rounded-[28px] overflow-hidden group"
            >
              <img
                src={categories[0].image}
                alt={categories[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5 md:p-8 text-white">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/80 mb-3">
                  {categories[0].count}
                </p>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  {categories[0].name}
                </h2>
              </div>
            </motion.div>
          </Link>

          {/* SMALL TOP RIGHT */}
          <div className="col-span-2 lg:col-span-6 grid grid-cols-2 gap-4">
            {categories.slice(1, 5).map((category) => (
              <Link
                key={category.name}
                to={`/marketplace?category=${category.name}`}
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="relative h-[140px] sm:h-[180px] md:h-[180px] rounded-[22px] overflow-hidden group"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-white/70 mb-1">
                      {category.count}
                    </p>

                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {categories.slice(5).map((category) => (
            <Link
              key={category.name}
              to={`/marketplace?category=${category.name}`}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="relative h-[160px] sm:h-[190px] md:h-[210px] rounded-[24px] overflow-hidden group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-4 md:p-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.15em] font-semibold text-white/70 mb-1">
                    {category.count}
                  </p>

                  <h3 className="text-lg md:text-2xl font-bold tracking-tight">
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-sm">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-3">
              Become a Vendor
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Start selling with MarketElite
            </h2>

            <p className="text-slate-500 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              Join thousands of trusted sellers and reach premium buyers across
              the marketplace.
            </p>
          </div>

          <Link
            to="/sell-product"
            className="bg-[#1D352E] hover:bg-[#1D352E]/90 text-white px-7 py-3 rounded-full font-semibold transition-all whitespace-nowrap"
          >
            Start Selling
          </Link>
        </div>
      </section>
    </div>
  );
}