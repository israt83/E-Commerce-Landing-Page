export default function BestSellers() {
  const items = ["/b1.jpg", "/b2.jpg", "/b3.jpg", "/b4.jpg"];

  return (
    <section className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-10">
          BEST SELLERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((img, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
              <img src={img} className="h-52 w-full object-cover rounded-lg" />
              <h3 className="mt-3">Chronova Watch</h3>
              <p className="text-yellow-400">$599</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}