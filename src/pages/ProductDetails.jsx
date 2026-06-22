import { useParams } from "react-router-dom";
import {
  FaStar,
  FaRegHeart,
  FaArrowLeft,
} from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      name: "Chronova Elite",
      price: "$599",
      img: "/src/assets/citizen.png",
      desc: "Luxury Swiss automatic watch with premium finishing.",
    },
    {
      name: "Chronova Heritage",
      price: "$499",
      img: "/src/assets/geneve watch.jpg",
      desc: "Classic heritage design with modern precision.",
    },
    {
      name: "Chronova Prestige",
      price: "$699",
      img: "/src/assets/fitron watch.jpg",
      desc: "Premium craftsmanship with elite Swiss movement.",
    },
    {
      name: "Chronova Titan",
      price: "$549",
      img: "/src/assets/cartier watch.jpg",
      desc: "Bold titanium design for modern lifestyle.",
    },
  ];

  const product = products[id];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-[#C9A24E]"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="rounded-3xl overflow-hidden border border-[#C9A24E]/20">
          <img
            src={product.img}
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Info */}
        <div>

          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-[#C9A24E] mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-white/70 ml-2">(4.9)</span>
          </div>

          {/* Price */}
          <h2 className="text-3xl text-[#C9A24E] mb-6">
            {product.price}
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-8 mb-6">
            {product.desc}
          </p>

          {/* Wishlist */}
          <button className="flex items-center gap-3 border border-[#C9A24E] text-[#C9A24E] px-5 py-3 rounded-full mb-6">
            <FaRegHeart /> Add to Wishlist
          </button>

          {/* Add to cart */}
          <button className="bg-[#C9A24E] text-black px-8 py-4 rounded-full font-semibold">
            Add To Cart
          </button>

        </div>
      </div>
    </div>
  );
}