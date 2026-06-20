import Image from "next/image";
import StayInformed from "@/components/StayInformed";

export const metadata = {
  title: "Investors | TruCells",
  description: "Partner with TruCells for the future of cellular innovation. Complete the investor interest form to begin the conversation.",
};

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[440px] flex items-center overflow-hidden">
        <Image
          src="/assets/images/Backgrounds/Investor.png"
          alt="Investor Relations"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <span className="section-badge text-[#0CB4C4]">INVESTOR RELATIONS</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
            Partnering for the Future of{" "}
            <span className="text-[#0CB4C4]">Cellular Innovation</span>
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-sm leading-relaxed mb-10">
            To ensure appropriate conversations with potential investors aligned with our long-term vision in regenerative medicine — please complete this form to begin discussion with our capital and partnership team.
          </p>

          <form className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4]" />
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
                <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Primary Entity</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Investor Type</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4] text-gray-700">
                  <option value="">Select...</option>
                  <option>Individual / Angel</option>
                  <option>Family Office</option>
                  <option>Venture Capital</option>
                  <option>Private Equity</option>
                  <option>Strategic / Corporate</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Year</label>
                <input type="number" placeholder="e.g. 2026" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4]" />
              </div>
            </div>

            {/* Accredited Investor */}
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-3">Accredited Investor Status</h3>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 accent-[#0CB4C4]" />
                <span className="text-sm text-gray-600">I confirm that I am an accredited investor as defined under SEC Regulation D.</span>
              </label>
            </div>

            {/* Investment Range & Stage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Typical Investment Range</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4] text-gray-700">
                  <option value="">Select...</option>
                  <option>Under $100K</option>
                  <option>$100K – $500K</option>
                  <option>$500K – $1M</option>
                  <option>$1M – $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Stage Preference</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4] text-gray-700">
                  <option value="">Select...</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B</option>
                  <option>Growth</option>
                  <option>Late Stage</option>
                </select>
              </div>
            </div>

            {/* Investment Interest */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-4">Investment Interest</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">What interests you about TruCells?</label>
                  <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4] resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Are you currently evaluating opportunities in cell therapy, CDMO, or regenerative medicine?</label>
                  <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4] resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">How were you introduced to TruCells?</label>
                  <textarea rows={2} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0CB4C4] resize-none" />
                </div>
              </div>
            </div>

            {/* Strategic Alignment */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-3">Strategic Alignment *</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Cell Expansion / Biomanufacturing",
                  "cGMP/CDMO Infrastructure",
                  "Cell Banking",
                  "MSC / iPSC Programs",
                  "Long-Term Cell Preservation",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="accent-[#0CB4C4]" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* NDA */}
            <div className="bg-[#F5F7FA] rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">NDA &amp; Confidentiality Language</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Submission of this inquiry does not constitute an offer to sell securities. Investment opportunities, if any, will only be offered to qualified investors through appropriate legal documentation. All information shared is considered proprietary and confidential.
              </p>
            </div>

            <button type="submit" className="btn-primary w-full text-center py-3">
              Submit Investor Inquiry
            </button>
          </form>
        </div>
      </section>

      <StayInformed />
    </>
  );
}
