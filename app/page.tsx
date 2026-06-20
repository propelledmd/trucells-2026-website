import Image from "next/image";
import Link from "next/link";
import StayInformed from "@/components/StayInformed";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <Image
          src="/assets/images/backgrounds/TruCells Hero.png"
          alt="TruCells - Preserve Your Body's Natural Healing Power"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Preserve Your Body&apos;s Natural Healing Power
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              TruCells makes it simple to bank your own stem cells during surgeries you&apos;re already planning — storing your regenerative potential for the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about-us" className="btn-primary">Learn More</Link>
              <Link href="/capabilities" className="btn-outline">Our Capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Active / Independent / Prepared Cards */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                title: "Stay Active",
                desc: "Preserve your mobility and vitality by safeguarding your body's own regenerative cells for future therapeutic use.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Stay Independent",
                desc: "Take control of your long-term health by banking stem cells now, when they are at their most viable.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#0CB4C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: "Stay Prepared",
                desc: "Position yourself for the future of regenerative medicine — your cells, stored safely, ready when science catches up.",
              },
            ].map((card) => (
              <div key={card.title} className="border border-[#0CB4C4] rounded-xl p-6 text-center card-shadow">
                <div className="flex justify-center mb-4">{card.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/assets/images/backgrounds/Our Mission.png"
          alt="Our Mission"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/82" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-badge">OUR PURPOSE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              TruCells was founded in 2021 in San Antonio, Texas to bridge today&apos;s clinical needs with tomorrow&apos;s medical breakthroughs. We specialize in cryopreserving bone marrow aspirate (BMA) collected during elective procedures such as Total Hip Replacement, Total Knee Replacement, and select Spinal Fusion surgeries.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              By safeguarding these cells in our purpose-built, cGMP-compliant biomanufacturing facility, we preserve each patient&apos;s regenerative potential for years to come. Our research team is advancing mesenchymal stem cell (MSC) expansion — a critical step toward next-generation therapies.
            </p>
          </div>
        </div>
      </section>

      {/* A Simple Path */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-badge">HOW IT WORKS</span>
            <h2 className="text-3xl font-bold text-gray-900">A Simple Path to Preserving Your Stem Cells</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Financial Agreement & Enrollment", desc: "Review terms, complete enrollment, and secure your spot in the TruCells banking program." },
              { step: "02", title: "Surgical Collection", desc: "Your physician collects bone marrow aspirate during your already-scheduled elective surgery — no added burden or surgical time." },
              { step: "03", title: "Laboratory Processing & Storage", desc: "Your cells are transported to our cGMP facility where they are processed, characterized, and cryopreserved." },
              { step: "04", title: "Storage & Annual Renewal", desc: "Your cells are stored securely in our facility with annual renewal — ready when regenerative therapies advance." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 card-shadow">
                <div className="text-[#0CB4C4] font-bold text-2xl mb-3">{item.step}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Partnerships */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge">OUR NETWORK</span>
            <h2 className="text-3xl font-bold text-gray-900">Nationwide Partnerships</h2>
            <p className="text-gray-600 mt-3 text-sm max-w-xl mx-auto">
              We work with surgical teams and clinical partners across the country to bring seamless stem cell banking to patients everywhere.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/images/backgrounds/Partnership.png"
              alt="Nationwide Partnerships"
              width={900}
              height={300}
              className="rounded-xl object-contain max-w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Still Have Questions?</h2>
            <p className="text-gray-600 mt-2 text-sm">Here are some of the most common questions we hear from patients.</p>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Who is a good candidate for stem cell preservation?",
                a: "Stem cell preservation is ideal for individuals who are already planning to undergo a surgical procedure where tissue can be safely collected. It is especially relevant for those who want to take a proactive approach to their long-term health and be prepared for potential future medical advancements. Eligibility may vary, and our team works directly with your physician to determine if it is a good fit for you.",
              },
              {
                q: "Why should I preserve my stem cells?",
                a: "Preserving your stem cells now — while they are younger and more viable — gives you access to your own biological material as regenerative therapies continue to advance. Your preserved cells may support recovery and long-term health in ways that are still emerging in medical science.",
              },
              {
                q: "How are my stem cells collected?",
                a: "Your stem cells are collected by your physician during a procedure you are already scheduled to have, such as a Total Hip Replacement, Total Knee Replacement, or select Spinal Fusion. There is no added surgical time or patient burden.",
              },
              {
                q: "Is stem cell preservation safe?",
                a: "TruCells follows rigorous clinical and laboratory protocols to ensure your cells are handled, transported, and stored under controlled conditions. Our facility is cGMP-compliant and designed to meet FDA standards.",
              },
              {
                q: "How does TruCells work with my doctor?",
                a: "TruCells coordinates directly with your physician and surgical team to ensure proper collection, transport, and processing of your cells. We provide training and support materials to make the process seamless for the clinical team.",
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
