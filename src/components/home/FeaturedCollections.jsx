export default function FeaturedCollections() {
  const items = [
    { title: "Classic Collection", img: "/watch1.jpg" },
    { title: "Sports Collection", img: "/watch2.jpg" },
    { title: "Luxury Collection", img: "/watch3.jpg" },
    { title: "Limited Edition", img: "/watch4.jpg" },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-center text-3xl font-semibold mb-10 tracking-widest">
        FEATURED COLLECTIONS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl border border-white/10"
          >
            <img
              src={item.img}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <button className="mt-2 text-sm text-yellow-400">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}