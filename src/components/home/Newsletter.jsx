export default function Newsletter() {
  return (
    <section className="py-16 border-t border-white/10 bg-yellow-600/10">
      <div className="max-w-4xl mx-auto text-center px-4">

        <h2 className="text-2xl font-semibold mb-2">
          STAY AHEAD OF TIME
        </h2>

        <p className="text-gray-400 mb-6">
          Subscribe for updates & offers
        </p>

        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter email"
            className="px-4 py-2 rounded-md text-black w-full md:w-80"
          />
          <button className="px-6 py-2 bg-black text-white rounded-md">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}