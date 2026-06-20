import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import StayInformed from "@/components/StayInformed";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />

      {/* Stay Active / Independent / Prepared */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Stay Active",
                desc: "Preserve your mobility and vitality by safeguarding your body's own regenerative cells for future therapeutic use.",
                href: "/about-us",
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Stay Independent",
                desc: "Take control of your long-term health by banking stem cells now, when they are at their most viable.",
                href: "/platform",
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Stay Prepared",
                desc: "Position yourself for the future of regenerative medicine — your cells, stored safely, ready when science catches up.",
                href: "/capabilities",
              },
            ].map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-2xl p-7 text-center flex flex-col items-center card-shadow">
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{card.desc}</p>
                <Link href={card.href} className="btn-primary text-xs uppercase tracking-wider">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-badge">OUR PURPOSE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                TruCells was founded in 2021 in San Antonio, Texas to bridge today&apos;s clinical needs with tomorrow&apos;s medical breakthroughs. We specialize in cryopreserving bone marrow aspirate (BMA) collected during elective procedures such as Total Hip Replacement, Total Knee Replacement, and select Spinal Fusion surgeries.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                By safeguarding these cells in our purpose-built, cGMP-compliant biomanufacturing facility, we preserve each patient&apos;s regenerative potential for years to come. Our research team is advancing mesenchymal stem cell (MSC) expansion — a critical step toward next-generation therapies.
              </p>
              <Link href="/about-us" className="btn-primary">Learn More</Link>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden card-shadow">
              <Image
                src="/assets/images/backgrounds/Our Mission.png"
                alt="Our Mission — doctor consulting with patients"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Simple Path */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              A Simple Path to Preserving Your Stem Cells
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "📋",
                title: "Financial Agreement & Enrollment",
                desc: "Review terms, complete enrollment, and secure your spot in the TruCells banking program.",
              },
              {
                icon: "🏥",
                title: "Surgical Collection",
                desc: "Your physician collects bone marrow aspirate during your already-scheduled elective surgery — no added burden or surgical time.",
              },
              {
                icon: "🔬",
                title: "Laboratory Processing",
                desc: "Your cells are transported to our cGMP facility, processed, characterized, and cryopreserved to the highest standards.",
              },
              {
                icon: "❄️",
                title: "Cryogenic Storage Confirmation",
                desc: "Your cells are securely stored in our cryogenic facility with annual renewal — ready when regenerative therapies advance.",
              },
            ].map((step) => (
              <div key={step.title} className="bg-white rounded-xl p-6 card-shadow border border-gray-100">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Partnerships */}
      <section className="relative py-16 overflow-hidden">
        <Image
          src="/assets/images/backgrounds/Partnership.png"
          alt="Nationwide Partnerships"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-badge">OUR NETWORK</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nationwide Partnerships</h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto mb-10">
            We work with surgical teams and clinical partners across the country to bring seamless stem cell banking to patients everywhere.
          </p>
          <Link href="/platform" className="btn-primary">View Our Platform</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Still Have Questions?</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Who is a good candidate for stem cell preservation?",
                a: "Stem cell preservation is ideal for individuals who are already planning to undergo a surgical procedure where tissue can be safely collected. It's especially relevant for those who want to take a proactive approach to their long-term health and be prepared for potential future medical advancements. Eligibility may vary, and our team works directly with your physician to determine if it is a good fit for you.",
              },
              {
                q: "Why should I preserve my stem cells?",
                a: "Preserving your stem cells now — while they are younger and more viable — gives you access to your own biological material as regenerative therapies continue to advance.",
              },
              {
                q: "How are my stem cells collected?",
                a: "Your stem cells are collected by your physician during a procedure you are already scheduled to have — such as a Total Hip Replacement, Total Knee Replacement, or select Spinal Fusion. There is no added surgical time or patient burden.",
              },
              {
                q: "Is stem cell preservation safe?",
                a: "TruCells follows rigorous clinical and laboratory protocols to ensure your cells are handled, transported, and stored under controlled conditions. Our facility is cGMP-compliant and designed to meet FDA standards.",
              },
              {
                q: "How does TruCells work with my doctor?",
                a: "TruCells coordinates directly with your physician and surgical team to ensure proper collection, transport, and processing of your cells.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl card-shadow group">
                <summary className="flex justify-between items-center px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-[#0CB4C4] flex-shrink-0 ml-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faqs" className="btn-primary">View All FAQs</Link>
          </div>
        </div>
      </section>

      <StayInformed />
    </>
  );
}
