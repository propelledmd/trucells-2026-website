import Image from "next/image";
import Link from "next/link";
import StayInformed from "@/components/StayInformed";

export const metadata = {
  title: "Capabilities | TruCells",
  description: "TruCells delivers end-to-end biologics CDMO capabilities — from secure autologous cell banking to advanced analytical testing.",
};

export default function CapabilitiesPage() {
  return (
    <>
      {/* Split Hero */}
      <section className="min-h-[480px] flex">
        {/* Left: text panel */}
        <div className="w-full md:w-1/2 flex items-center px-8 md:px-16 py-20 relative overflow-hidden bg-white">
          <Image
            src="/assets/images/backgrounds/cMDO Partner.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="relative z-10 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-[#0CB4C4]">Your Biologics</span><br />
              <span className="text-[#0CB4C4]">CDMO Partner</span><br />
              <span className="text-gray-900">for Life</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              TruCells is built to deliver end-to-end capabilities that support regenerative medicine, from secure autologous cell banking to advanced analytical testing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Partner With Us</Link>
              <Link href="/catalog" className="btn-outline">View Catalog</Link>
            </div>
          </div>
        </div>
        {/* Right: image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/assets/images/ChatGPT Image Feb 12, 2026, 10_43_36 PM.png"
            alt="cGMP Biomanufacturing Facility"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* cGMP Facility & Process Development */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Row 1: image left, text right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative h-72 rounded-2xl overflow-hidden card-shadow">
              <Image
                src="/assets/images/TruCells cGMP Facility Space.jpg"
                alt="cGMP Facility Space"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">cGMP Facility Space</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our San Antonio, Texas facility is designed to meet FDA cGMP standards for cell therapy manufacturing. Every workflow is optimized for safety, traceability, and scalability.
              </p>
              <ul className="space-y-3">
                {["FDA Compliant Workflows", "Traceable Sample Processing", "High-Scalability Infrastructure"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#0CB4C4] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: text left, image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Process Development Laboratory</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Our research team is advancing scalable methods for mesenchymal stem cell (MSC) and hematopoietic stem cell (HSC) expansion. The goal: unlock the therapeutic potential within patients&apos; cells for future FDA-approved treatments addressing degenerative, autoimmune, and vascular conditions.
              </p>
              <div className="flex gap-6">
                {["MSC EXPANSION FOCUS", "HSC ADVANCED RESEARCH"].map((tag) => (
                  <span key={tag} className="text-[#0CB4C4] text-xs font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden card-shadow">
              <Image
                src="/assets/images/TruCells Process Development Laboratory.jpg"
                alt="Process Development Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytical & Quality Testing — dark */}
      <section className="bg-[#0D1B2A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Analytical &amp; Quality Testing</h2>
            <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
              Precision and accuracy at every stage of the cellular lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {[
              { name: "PCR", desc: "Confirms the identity and integrity of every patient sample." },
              { name: "Flow Cytometry", desc: "Profile cell populations within bone marrow aspirate." },
              { name: "Imaging", desc: "High-resolution monitoring of cell morphology." },
              { name: "Differentiation", desc: "Validates MSC transformation capability." },
              { name: "Growth", desc: "Track viability patterns across the cellular lifecycle." },
            ].map((test) => (
              <div key={test.name} className="bg-white/8 rounded-xl p-5 text-center border border-white/10">
                <div className="w-10 h-10 bg-[#0CB4C4]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{test.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{test.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Development — dark */}
      <section className="bg-[#111F30] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-badge text-[#0CB4C4]">INNOVATION</span>
            <h2 className="text-3xl font-bold text-white">Research Development</h2>
            <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
              Pioneering the next generation of cellular biological solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "BMA (Bone Marrow Aspirate)",
                title: "Bone Marrow Aspirate",
                desc: "TruCells collects bone marrow aspirate during already-planned elective surgeries such as Total Hip Replacement, Total Knee Replacement, and select Spinal Fusion procedures for cryopreservation.",
                img: "/assets/images/BM MSC P1-P228JAN26BR.jpeg",
              },
              {
                label: "MSC (Mesenchymal Stem Cells)",
                title: "Mesenchymal Stem Cells",
                desc: "Multipotent cells found in bone marrow aspirate with the unique ability to differentiate into bone, cartilage, and fat tissue — key targets for regenerative therapy development.",
                img: "/assets/images/MNC P028JAN26.jpeg",
              },
              {
                label: "MNC (Mononuclear Cells)",
                title: "Mononuclear Cells",
                desc: "Mononuclear cells (MNCs) are a vital cell population within bone marrow aspirate, including immune and progenitor cells that support healing and regeneration.",
                img: "/assets/images/A_medical_digital_illustration_presents_mononuclea_notext.png",
              },
            ].map((card) => (
              <div key={card.label} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                <div className="relative h-48">
                  <Image src={card.img} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[#0CB4C4] text-xs font-bold uppercase tracking-widest">{card.label}</span>
                  <h3 className="text-white font-bold text-base mt-1 mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StayInformed />
    </>
  );
}
