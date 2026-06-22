export default function StatsBar() {
  return (
    <section className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div>
          <h3 className="text-2xl font-bold text-yellow-500">50+</h3>
          <p className="text-sm text-gray-400 mt-1">Luxury Models</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-yellow-500">120+</h3>
          <p className="text-sm text-gray-400 mt-1">Countries</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-yellow-500">10 Years</h3>
          <p className="text-sm text-gray-400 mt-1">Warranty</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-yellow-500">Swiss</h3>
          <p className="text-sm text-gray-400 mt-1">Movement</p>
        </div>

      </div>
    </section>
  );
}