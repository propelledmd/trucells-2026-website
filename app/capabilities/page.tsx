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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "640px" }}>
        {/* Vertical DNA helix background */}
        <Image
          src="/assets/images/backgrounds/cMDO Partner.png"
          alt=""
          fill
          className="object-cover object-left"
          priority
        />
        {/* Very light white overlay so text is readable */}
        <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.35)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: heading + text + CTA */}
            <div>
              <h1
                className="mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                }}
              >
                <span className="block text-[#0CB4C4]">Your Biologics</span>
                <span className="block text-[#0CB4C4]">CDMO Partner</span>
                <span className="block text-gray-900">for Life</span>
              </h1>
              <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-md">
                TruCells is built to deliver end-to-end capabilities that support regenerative
                medicine, from secure autologous cell banking to advanced analytical testing and
                manufacturing solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">Partner With Us</Link>
                <Link href="/catalog" className="btn-outline">View Catalog</Link>
              </div>
            </div>

            {/* Right: clean biomanufacturing lab */}
            <div className="relative rounded-2xl overflow-hidden card-shadow" style={{ height: "420px" }}>
              <Image
                src="/assets/images/ChatGPT Image Feb 12, 2026, 10_43_36 PM.png"
                alt="TruCells biomanufacturing facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── cGMP Facility Space + Process Development Lab ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Row 1 — image LEFT, text RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden card-shadow" style={{ height: "360px" }}>
              <Image
                src="/assets/images/CDMO Partner.png"
                alt="cGMP Facility Space"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2
                className="text-gray-900 mb-5"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
              >
                cGMP Facility Space
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our San Antonio, Texas facility is designed to meet FDA cGMP standards for cell
                therapy manufacturing. Every workflow is optimized for safety, traceability, and
                scalability — supporting both short-term banking and long-term therapeutic development.
              </p>
              <ul className="space-y-3">
                {[
                  "FDA Compliant Workflows",
                  "Traceable Sample Processing",
                  "High-Scalability Infrastructure",
                  "Temperature-Controlled Cryogenic Storage",
                ].map((item) => (
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

          {/* Row 2 — text LEFT, image RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-gray-900 mb-5"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
              >
                Process Development Laboratory
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Our research team is advancing scalable methods for mesenchymal stem cell (MSC) and
                hematopoietic stem cell (HSC) expansion. The goal: unlock the therapeutic potential
                within patients&apos; cells for future FDA-approved treatments addressing degenerative,
                autoimmune, and vascular conditions.
              </p>
              <div className="flex flex-wrap gap-6">
                {["MSC EXPANSION FOCUS", "HSC ADVANCED RESEARCH"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[#0CB4C4] text-xs font-bold uppercase tracking-widest border-b-2 border-[#0CB4C4] pb-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden card-shadow" style={{ height: "360px" }}>
              <Image
                src="/assets/images/Process Development Laboratory.png"
                alt="Process Development Laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── Analytical & Quality Testing ── */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-gray-900"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Analytical &amp; Quality Testing
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">
              Precision and accuracy at every stage of the cellular lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {[
              {
                name: "PCR",
                desc: "Confirms the identity and integrity of every patient sample.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10m0 0h10M9 13v6m0-6H5m4 6H5m0 0v-6m0 6a2 2 0 01-2-2v-4m2 6h10a2 2 0 002-2v-4" />
                ),
              },
              {
                name: "Flow Cytometry",
                desc: "Profile cell populations within bone marrow aspirate.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                ),
              },
              {
                name: "Imaging",
                desc: "High-resolution monitoring of cell morphology and growth.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.873v6.254a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                ),
              },
              {
                name: "Differentiation",
                desc: "Validates MSC transformation capability across lineages.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                ),
              },
              {
                name: "Growth",
                desc: "Track viability patterns across the cellular lifecycle.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
              },
            ].map((test) => (
              <div key={test.name} className="bg-white rounded-2xl p-6 text-center card-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#0CB4C4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {test.icon}
                  </svg>
                </div>
                <h3
                  className="text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "15px" }}
                >
                  {test.name}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{test.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Development ── */}
      <section className="py-16" style={{ background: "#0A2F40" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0CB4C4] text-xs font-bold uppercase tracking-[0.18em]">INNOVATION</span>
            <h2
              className="text-white mt-2"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
            >
              Research Development
            </h2>
            <p className="text-gray-300 mt-3 text-base max-w-xl mx-auto">
              Pioneering the next generation of biological solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "BMA (Bone Marrow Aspirate)",
                title: "Bone Marrow Aspirate",
                desc: "TruCells collects bone marrow aspirate during already-planned elective surgeries such as Total Hip Replacement, Total Knee Replacement, and select Spinal Fusion procedures for cryopreservation.",
                img: "/assets/images/BMA.png",
              },
              {
                label: "MSC (Mesenchymal Stem Cells)",
                title: "Mesenchymal Stem Cells",
                desc: "Multipotent cells found in bone marrow aspirate with the unique ability to differentiate into bone, cartilage, and fat tissue — key targets for regenerative therapy development.",
                img: "/assets/images/MSC.png",
              },
              {
                label: "MNC (Mononuclear Cells)",
                title: "Mononuclear Cells",
                desc: "Mononuclear cells (MNCs) are a vital cell population within bone marrow aspirate, including immune and progenitor cells that support healing and regeneration.",
                img: "/assets/images/A_medical_digital_illustration_presents_mononuclea_notext.png",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl overflow-hidden border"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="relative" style={{ height: "220px" }}>
                  <Image src={card.img} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-[#0CB4C4] text-xs font-bold uppercase tracking-widest">{card.label}</span>
                  <h3
                    className="text-white mt-1 mb-3"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "17px" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner CTA ── */}
      <section className="bg-[#0D1B2A] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Partner with TruCells for Clinical and Research Solutions
          </h2>
          <p className="text-gray-300 text-base mb-8">
            Whether you&apos;re a surgeon, researcher, or healthcare system — TruCells is your biologics partner.
          </p>
          <Link href="/contact" className="btn-primary">Partner With Us</Link>
        </div>
      </section>

      <StayInformed />
    </>
  );
}
