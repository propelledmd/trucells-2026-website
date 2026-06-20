export default function StayInformed() {
  return (
    <section className="bg-[#0D1B2A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Informed</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Be the first to hear about our latest breakthroughs, research updates, and connect news in regenerative medicine.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2.5 rounded-full text-sm bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#0CB4C4] w-full sm:w-72"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
