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
      {/* Hero — split: heading left, white text card right */}
      <section className="relative flex items-center overflow-hidden" style={{ height: "947px" }}>
        <Image
          src="/assets/images/backgrounds/Redefining Longevity.png"
          alt="Redefining Longevity"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Inverted ellipse shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="w-full block" style={{ height: "110px" }} xmlns="http://www.w3.org/2000/svg">
            <path d="M0,110 C360,0 1080,0 1440,110 L1440,110 L0,110 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left: badge + heading + teal underline */}
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#0CB4C4]/15 border border-[#0CB4C4]/40 rounded-full px-3 py-1 mb-5">
                <svg className="w-3 h-3 text-[#0CB4C4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#0CB4C4] text-xs font-bold uppercase tracking-[0.15em]">OUR HISTORY</span>
              </div>

              <h1 style={{ fontFamily: "var(--font-inter)", fontWeight: 900, fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.05 }}>
                <span className="block text-gray-900">Redefining</span>
                <span className="block text-[#0CB4C4]">Longevity</span>
              </h1>
              <div className="mt-3 w-16 h-1 bg-[#0CB4C4] rounded-full" />
            </div>

            {/* Right: white card */}
            <div className="bg-white rounded-2xl shadow-lg p-7">
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Founded in 2021 in San Antonio, Texas, TruCells was created to bridge today&apos;s clinical needs with
                tomorrow&apos;s medical breakthroughs. We specialize in cryopreserving bone marrow aspirate (BMA)
                collected during elective procedures such as Total Hip Replacement, Total Knee Replacement, and select
                Spinal Fusion surgeries.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                By safeguarding these cells in our purpose-built, cGMP-compliant biomanufacturing facility, we preserve
                each patient&apos;s regenerative potential for years to come. Our research team is advancing mesenchymal
                stem cell (MSC) expansion—a critical step toward next-generation therapies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership */}
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
              {
                name: "Amanda Marshall-Rodriguez, MD",
                title: "Founder & CMO",
                img: "/assets/team/Amanda Marshall-Rodriguez MD.png",
              },
              {
                name: "Rick Rodriguez",
                title: "Co-Founder & Chairman",
                img: "/assets/team/Rick Rodriguez.png",
              },
              {
                name: "Andrew Trickett",
                title: "President",
                img: "/assets/team/Andrew Trickett.png",
              },
              {
                name: "Brenda Ramirez, MS",
                title: "Facility Director",
                img: "/assets/team/Brenda Ramirez.png",
              },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className="relative h-52 bg-gray-800">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale"
                  />
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

      {/* Why TruCells Matters */}
      <section className="bg-white py-16 relative overflow-hidden">
        {/* Decorative teal blobs */}
        <div className="absolute top-6 right-6 w-44 h-44 bg-[#0CB4C4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-36 h-36 bg-[#0CB4C4]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[#0CB4C4] mb-10 text-center"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 900, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}
          >
            Why TruCells Matters
          </h2>

          <div className="max-w-2xl mx-auto border border-[#0CB4C4] rounded-2xl p-8 bg-white text-center card-shadow">
            <p className="text-gray-700 text-sm leading-relaxed mb-5">
              The world is entering a{" "}
              <span className="text-[#0CB4C4] font-semibold">&ldquo;Silver Tsunami.&rdquo;</span>{" "}
              By 2030, nearly 20% of Americans will be over the age of 65. Despite this shift, most treatments for
              chronic diseases of aging remain palliative—focused on managing symptoms rather than curing the underlying
              condition.
            </p>
            <p className="text-gray-900 font-bold text-sm mb-5">
              TruCells exists to change that future.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              By preserving each patient&apos;s own stem cells today, we prepare for a time when regenerative therapies
              can move beyond symptom relief and provide curative solutions.
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
