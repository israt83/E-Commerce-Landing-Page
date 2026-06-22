import {
  FaArrowRight,

  FaStar,
} from "react-icons/fa";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Chronova Elite",
      price: "$599",
      rating: "4.9",
      img: "/src/assets/citizen.png",
    },
    {
      name: "Chronova Heritage",
      price: "$499",
      rating: "4.8",
      img: "/src/assets/geneve watch.jpg",
    },
    {
      name: "Chronova Prestige",
      price: "$699",
      rating: "5.0",
      img: "/src/assets/fitron watch.jpg",
    },
    {
      name: "Chronova Titan",
      price: "$549",
      rating: "4.9",
      img: "/src/assets/cartier watch.jpg",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 border-t border-[#C9A24E]/30 pt-10">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold tracking-[4px] uppercase text-white">
            Best Sellers
          </h2>

          <button className="group flex items-center gap-3 text-[#C9A24E] font-medium hover:text-white transition">
          

            <span className="w-9 h-9 rounded-full border border-[#C9A24E] flex items-center justify-center group-hover:bg-[#C9A24E] group-hover:text-black transition duration-300">
              <FaArrowRight className="text-xs" />
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative  rounded-xl overflow-hidden group cursor-pointer border border-white/10"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

            
              {/* Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">

                {/* Rating */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1 text-[#C9A24E]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>

                  <span className="text-sm text-white/80">
                    ({product.rating})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-semibold text-white">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-[#C9A24E] text-lg font-semibold mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}