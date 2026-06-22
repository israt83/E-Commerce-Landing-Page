import {
  FaArrowRight,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import citizen from "../../assets/cartier watch.jpg";
import geneve from "../../assets/geneve watch.jpg";
import fitron from "../../assets/fitron watch.jpg";
import cartier from "../../assets/cartier watch.jpg";


export default function FeaturedProducts() {
   const navigate = useNavigate(); 
 const products = [
    {
      name: "Chronova Elite",
      price: "$599",
      rating: "4.9",
      img: citizen,
    },
    {
      name: "Chronova Heritage",
      price: "$499",
      rating: "4.8",
      img: geneve,
    },
    {
      name: "Chronova Prestige",
      price: "$699",
      rating: "5.0",
      img: fitron,
    },
    {
      name: "Chronova Titan",
      price: "$549",
      rating: "4.9",
      img: cartier,
    },
  ];
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 border-t border-[#C9A24E]/30 pt-10">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold tracking-[4px] uppercase text-white">
            Featured Products
          </h2>

          <button className="group flex items-center gap-3 text-[#C9A24E] font-medium hover:text-white transition">
            View All Products

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
                onClick={() => navigate(`/product/${index}`)}
              className="relative  rounded-xl overflow-hidden group cursor-pointer border border-white/10"
            >
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Wishlist */}
              <button className="absolute top-5 right-5 w-11 h-11 rounded-full border border-[#C9A24E] bg-black/30 backdrop-blur-md flex items-center justify-center text-[#C9A24E] hover:bg-[#C9A24E] hover:text-black transition duration-300">
                <FaRegHeart className="text-lg" />
              </button>

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