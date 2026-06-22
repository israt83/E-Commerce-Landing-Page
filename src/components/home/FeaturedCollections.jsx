import { FaArrowRight } from "react-icons/fa";

export default function FeaturedCollections() {
  const items = [
    { title: "Classic", img: "/src/assets/Klassc.png" },
    { title: "Sports", img: "/src/assets/Tissot.png" },
    { title: "Luxury", img: "/src/assets/product watch.png" },
    { title: "Limited Edition", img: "/src/assets/omega blue.png" },
    
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      {/* Title */}
      <p className="text-[#C9A24E] text-center font-normal text-xl">EXPLORE</p>
      <h2 className="text-center text-3xl font-semibold mb-10 tracking-widest text-white">
        FEATURED COLLECTIONS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl border border-white/10 h-[300px]"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-5 w-full">
              <h3 className="text-lg font-semibold text-white  uppercase">
                {item.title}
              </h3>

              <p className="text-sm text-[#C9A24E] tracking-widest mb-1">
                COLLECTION
              </p>

              <button className="flex items-center gap-3 text-xs text-[#C9A24E] py-2 transition uppercase">
                <span>Shop Now</span>

                {/* circle icon */}
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-[#C9A24E] text-[#C9A24E] group-hover:bg-black">
                  <FaArrowRight className="text-[10px]" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
