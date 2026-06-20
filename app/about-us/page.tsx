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
      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <Image
          src="/assets/images/Backgrounds/Redefining Longevity.png"
          alt="Redefining Longevity"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <span className="section-badge">OUR HISTORY</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-lg">
            Redefining<br />Longevity
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              Founded in 2021 in San Antonio, Texas, TruCells was created to bridge today&apos;s clinical needs with tomorrow&apos;s medical breakthroughs. We specialize in cryopreserving bone marrow aspirate (BMA) collected during elective procedures such as Total Hip Replacement, Total Knee Replacement, and select Spinal Fusion surgeries.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              By safeguarding these cells in our purpose-built, cGMP-compliant biomanufacturing facility, we preserve each patient&apos;s regenerative potential for years to come. Our research team is advancing mesenchymal stem cell (MSC) expansion — a critical step toward next-generation therapies.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-badge">EXPERTISE & VISION</span>
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div key={member.name} className="text-center">
                <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{member.name}</h3>
                <p className="text-[#0CB4C4] text-xs font-semibold uppercase tracking-wide mt-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TruCells Matters */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0CB4C4] mb-8 text-center">Why TruCells Matters</h2>
            <div className="border border-[#0CB4C4] rounded-2xl p-8 bg-white card-shadow">
              <p className="text-gray-700 text-base leading-relaxed mb-5">
                The world is entering a &quot;Silver Tsunami.&quot; By 2030, nearly 20% of Americans will be over the age of 65. Despite this shift, most treatments for chronic diseases of aging remain palliative — focused on managing symptoms rather than treating underlying conditions.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                TruCells exists to change that future. By preserving each patient&apos;s own stem cells today, we prepare for a time when regenerative therapies can move beyond symptom relief and provide curative solutions.
              </p>
              <div className="text-center">
                <Link href="/capabilities" className="btn-primary uppercase text-xs tracking-wider">
                  Explore Our Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StayInformed />
    </>
  );
}
