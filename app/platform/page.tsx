import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Platform | TruCells",
  description: "The TruCells Platform — an integrated clinical-to-cryogenic infrastructure supporting surgeons, patients, and regenerative innovation.",
};

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[460px] flex items-center overflow-hidden">
        <Image
          src="/assets/images/backgrounds/TruCells Platform.png"
          alt="The TruCells Platform"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
          <span className="section-badge text-white/80">INNOVATIVE CONTINUITY</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-[#0CB4C4]">TruCells</span> Platform
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            An integrated clinical-to-cryogenic infrastructure supporting surgeons, patients, and regenerative innovation.
          </p>
        </div>
      </section>

      {/* Three Audience Cards */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                audience: "PROVIDERS",
                title: "For Surgeons",
                desc: "Integrate stem cell banking seamlessly into elective procedures. Since these procedures already provide access to tissue, there is no added patient burden or surgical time.",
                btn: "SURGEON PORTAL",
                href: "/contact",
              },
              {
                audience: "PATIENTS",
                title: "For Patients",
                desc: "Preserve your own stem cells during an operation you are already planning. Processed and stored in our secure facility, ensuring future therapeutic availability for years.",
                btn: "PATIENT GUIDE",
                href: "/contact",
              },
              {
                audience: "OPPORTUNITIES",
                title: "For Investors",
                desc: "Positioned at the intersection of orthopaedics and regenerative medicine. We tap into a massive, underserved biological asset market with established clinical pathways.",
                btn: "INVESTMENT DECK",
                href: "/investors",
              },
            ].map((card) => (
              <div key={card.audience} className="bg-white rounded-2xl p-8 card-shadow flex flex-col">
                <div className="w-12 h-12 bg-[#E0F7FA] rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-[#0CB4C4] text-xs font-bold uppercase tracking-widest mb-2">{card.audience}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{card.desc}</p>
                <Link
                  href={card.href}
                  className="btn-primary text-xs uppercase tracking-wider text-center"
                >
                  {card.btn} &rsaquo;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers Footer Banner */}
      <section className="bg-white py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-gray-500 leading-relaxed">
            <div className="flex items-start gap-3">
              <Image src="/assets/logos/TruCells.png" alt="TruCells" width={100} height={30} className="h-8 w-auto flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-700 mb-1">4400 Piedras Drive South</p>
                <p>San Antonio, TX 78228</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Educational Disclaimer</p>
              <p>The information provided on this site is for general educational purposes only and is not intended as medical advice. All medical advice, diagnoses, and treatment should be obtained from a qualified physician.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Compliance Disclaimer</p>
              <p>TruCells provides cGMP bone marrow aspirate (BMA) banking services in accordance with FDA regulations for minimal manipulation and autologous use (21 CFR Part 1271, Section 361). BMA is stored only upon formal request.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
