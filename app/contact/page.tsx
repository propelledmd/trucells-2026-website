import StayInformed from "@/components/StayInformed";

export const metadata = {
  title: "Contact Us | TruCells",
  description: "Get in touch with the TruCells team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-sm mb-10">
            Have a question or want to learn more about TruCells? Fill out the form below and our team will get back to you shortly.
          </p>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">First Name *</label>
                <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Last Name *</label>
                <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4]" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
              <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
              <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4]" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
              <textarea rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4] resize-none" />
            </div>
            <button type="submit" className="btn-primary py-3 px-10">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <StayInformed />
    </>
  );
}
