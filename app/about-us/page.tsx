import Image from "next/image";
import Link from "next/link";
import StayInformed from "@/components/StayInformed";

export const metadata = {
  title: "About Us | TruCells",
  description: "Founded in 2021 in San Antonio, TX, TruCells bridges today's clinical needs with tomorrow's medical breakthroughs.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ height: "947px" }}>
        <Image
          src="/assets/images/backgrounds/About Hero.png"
          alt="Redefining Longevity"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Content grid — heading left, glass card right */}
        <div
          className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-10"
          style={{ paddingTop: "200px" }}
        >
          {/* Left: heading */}
          <div className="flex-1 pt-4">
            <div className="inline-flex items-center gap-1.5 bg-[#0CB4C4]/15 border border-[#0CB4C4]/40 rounded-full px-3 py-1 mb-5">
              <svg className="w-3 h-3 text-[#0CB4C4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#0CB4C4] text-xs font-bold uppercase tracking-[0.15em]">OUR HISTORY</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "73px", lineHeight: 1.05 }}>
              <span className="block text-gray-900">Redefining</span>
              <span className="block text-[#0CB4C4]">Longevity</span>
            </h1>
            <div className="mt-4 w-16 h-1 bg-[#0CB4C4] rounded-full" />
          </div>

          {/* Right: glass card — W:441 H:498 */}
          <div
            className="rounded-2xl flex-shrink-0"
            style={{
              width: "441px",
              height: "498px",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              background: "rgba(255,255,255,0.22)",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            <div className="p-8 h-full overflow-y-auto">
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.75, color: "#1F2937", marginBottom: "1.25rem" }}>
                Founded in 2021 in San Antonio, Texas, TruCells was created to connect today&apos;s planned procedures
                with tomorrow&apos;s regenerative medicine possibilities. We specialize in cryopreserving a unique
                source of bone marrow tissue collected during elective procedures, including Total Hip Replacement,
                Total Knee Replacement, and select spinal surgeries.
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "16px", lineHeight: 1.75, color: "#1F2937" }}>
                Because you already have these powerful cells within you, preserving them today may help support your
                future health trajectory. By safeguarding each patient&apos;s cells in our purpose-built,
                cGMP-compliant biomanufacturing facility, TruCells helps preserve regenerative potential for years to
                come as stem cell therapies continue to advance for areas such as neurological, cardiac, and metabolic
                conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Shape divider — flipped ellipse */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="w-full block" style={{ height: "110px" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C360,110 1080,110 1440,0 L1440,110 L0,110 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Our Leadership ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#0CB4C4]/10 border border-[#0CB4C4]/30 rounded-full px-4 py-1 mb-4">
              <span className="text-[#0CB4C4] text-xs font-bold uppercase tracking-[0.15em]">EXPERTISE &amp; VISION</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Amanda Marshall-Rodriguez, MD", title: "Founder & CMO",        img: "/assets/team/Amanda Marshall-Rodriguez MD.png" },
              { name: "Rick Rodriguez",                title: "Co-Founder & Chairman", img: "/assets/team/Rick Rodriguez.png" },
              { name: "Andrew Trickett",               title: "President",             img: "/assets/team/Andrew Trickett.png" },
              { name: "Brenda Ramirez, MS",            title: "Facility Director",     img: "/assets/team/Brenda Ramirez.png" },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className="relative w-full bg-gray-800" style={{ height: "273px" }}>
                  <Image src={member.img} alt={member.name} fill className="object-cover object-top grayscale" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm leading-snug">{member.name}</h3>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mt-1">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TruCells Advisory Board ── */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">TruCells Advisory Board</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Our Advisory Board is made up of respected leaders in stem cell science, regenerative medicine,
            biomanufacturing, clinical innovation, and corporate strategy. The combined expertise helps guide TruCells
            as we advance safe, responsible, and forward thinking systems for the future of personalized cellular health.
          </p>
        </div>
      </section>

      {/* ── Why TruCells Matters ── */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="absolute top-6 right-6 w-44 h-44 bg-[#0CB4C4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-36 h-36 bg-[#0CB4C4]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[#0CB4C4] mb-10 text-center"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
          >
            Why TruCells Matters
          </h2>

          <div className="max-w-2xl mx-auto border border-[#0CB4C4] rounded-2xl p-8 bg-white text-center card-shadow">
            <p className="text-gray-700 text-sm leading-relaxed mb-5">
              The world is entering a{" "}
              <span className="text-[#0CB4C4] font-semibold">&ldquo;Silver Tsunami.&rdquo;</span>{" "}
              By 2030, nearly 20% of Americans will be over the age of 65. Despite this shift, most treatments for
              chronic diseases of aging remain palliative—focused on managing symptoms rather than curing the
              underlying condition.
            </p>
            <p className="text-gray-900 font-bold text-sm mb-5">
              TruCells exists to change that future.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              By preserving each patient&apos;s own stem cells today, we prepare for a time when regenerative
              therapies can move beyond symptom relief and provide curative solutions.
            </p>
            <Link href="/capabilities" className="btn-primary uppercase text-xs tracking-wider">
              Explore Our Capabilities
            </Link>
          </div>
        </div>
      </section>

      <StayInformed />
    </>
  );
}
