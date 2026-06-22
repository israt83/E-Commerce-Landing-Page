export default function SwissCraftsmanship() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            SWISS CRAFTSMANSHIP
          </h2>

          <p className="text-gray-400">
            Every Chronova watch is handcrafted with precision and premium materials.
          </p>

          <div className="mt-6 flex gap-6 text-sm text-gray-300">
            <span>✔ Precision</span>
            <span>✔ Premium</span>
            <span>✔ Tested</span>
          </div>

          <button className="mt-6 px-6 py-2 bg-yellow-600 rounded-md">
            Discover More
          </button>
        </div>

        <img src="/watch-mechanism.jpg" className="rounded-xl" />
      </div>
    </section>
  );
}