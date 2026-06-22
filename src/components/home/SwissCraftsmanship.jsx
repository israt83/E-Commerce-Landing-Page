import { FaArrowRight } from "react-icons/fa";
import bgImage from "../../assets/watch.jpg";

export default function SwissCraftsmanship() {
  return (
    <section
      className="relative  bg-cover bg-center"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex justify-end items-center">
        <div className="max-w-xl py-4">

          {/* Small Title */}
          <p className="uppercase tracking-[2px] text-[#C9A24E] text-sm mb-2">
            Swiss Heritage
          </p>

          {/* Heading */}
          <h2 className=" text-white leading-tight text-2xl lg:text-4xl font-medium  uppercase">
            Swiss <span className="text-[#C9A24E]">Craftsmanship</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300  my-2">
            Every Chronova timepiece is meticulously handcrafted using
            premium Swiss movements, exceptional materials, and timeless
            engineering to deliver unmatched precision and elegance for
            generations.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A24E]"></span>
              <span className="text-white">Swiss Movement</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A24E]"></span>
              <span className="text-white">Premium Materials</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A24E]"></span>
              <span className="text-white">Lifetime Precision</span>
            </div>
          </div>

          {/* Button */}
          <button className="group flex items-center gap-3 bg-[#C9A24E] text-black px-6 py-3  hover:bg-[#b8943f] transition duration-300">
            <span className="font-medium">Discover Our Story</span>

            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
              <FaArrowRight className="text-xs" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}