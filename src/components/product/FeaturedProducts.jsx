export default function FeaturedProducts() {
  const products = [
    { name: "Chronova Elite", price: "$599", img: "/p1.jpg" },
    { name: "Chronova Heritage", price: "$499", img: "/p2.jpg" },
    { name: "Chronova Prestige", price: "$699", img: "/p3.jpg" },
    { name: "Chronova Titan", price: "$549", img: "/p4.jpg" },
  ];

  return (
    <section className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-10">
          FEATURED PRODUCTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:scale-[1.02] transition"
            >
              <img src={p.img} className="w-full h-52 object-cover rounded-lg mb-4" />

              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-yellow-400 mt-1">{p.price}</p>

              <button className="mt-3 text-sm text-white/70">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}