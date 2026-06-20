"use client";
import { useState } from "react";

export default function FAQsPage() {
  const [activeTab, setActiveTab] = useState("TruCells FAQs Section");

  const tabs = ["TruCells FAQs Section", "General", "Investor", "Patients", "University Clinics Labs & RUO Sales"];

  const faqs: Record<string, { q: string; a: string }[]> = {
    "TruCells FAQs Section": [
      {
        q: "Who is a good candidate for stem cell preservation?",
        a: "Stem cell preservation is ideal for individuals who are already planning to undergo a surgical procedure where tissue can be safely collected. It's especially relevant for those who want to take a proactive approach to their long-term health and be prepared for potential future medical advancements. Eligibility may vary, and our team works directly with your physician to determine if it is a good fit for you.",
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
      {
        q: "When would my stem cells be used?",
        a: "Your cells are stored for potential future use as regenerative therapies advance. The goal is to have your own biological material available when and if you need it — whether for recovery support, future clinical trials, or emerging treatments.",
      },
      {
        q: "How much does stem cell preservation cost?",
        a: "The cost of stem cell preservation can vary depending on the procedure and the preservation pathway selected. Please contact our team directly for current pricing and program details.",
      },
    ],
    "General": [
      {
        q: "What is TruCells?",
        a: "TruCells is a cGMP-compliant biomanufacturing company based in San Antonio, Texas, specializing in the collection, processing, and long-term storage of autologous bone marrow aspirate (BMA) stem cells.",
      },
      {
        q: "Where is TruCells located?",
        a: "TruCells is located at 4400 Piedras Drive South, San Antonio, TX 78228.",
      },
      {
        q: "Is TruCells FDA regulated?",
        a: "TruCells operates in accordance with FDA regulations for minimal manipulation and autologous use under 21 CFR Part 1271, Section 361.",
      },
    ],
    "Investor": [
      {
        q: "How can I invest in TruCells?",
        a: "TruCells is accepting investor inquiries from accredited investors. Please visit our Investor page to complete the investor interest form and our team will reach out to begin the conversation.",
      },
      {
        q: "What stage is TruCells currently at?",
        a: "TruCells is an early-stage regenerative medicine company with an operational cGMP facility in San Antonio, Texas. We are actively building our clinical pipeline and exploring strategic partnerships.",
      },
    ],
    "Patients": [
      {
        q: "Can I enroll if I haven't scheduled surgery yet?",
        a: "Enrollment in the TruCells banking program is tied to an upcoming elective surgical procedure. If you have a surgery planned, please reach out to our team to discuss eligibility.",
      },
      {
        q: "What types of surgery qualify for stem cell collection?",
        a: "Currently, eligible procedures include Total Hip Replacement, Total Knee Replacement, and select Spinal Fusion surgeries. Your physician will confirm eligibility during the pre-operative planning process.",
      },
      {
        q: "How long are my cells stored?",
        a: "Your cells are stored in our cGMP-compliant cryogenic facility on an annual renewal basis. As long as your account remains active, your cells are preserved indefinitely.",
      },
    ],
    "University Clinics Labs & RUO Sales": [
      {
        q: "Does TruCells offer research-use-only (RUO) products?",
        a: "Yes. TruCells offers select cell products at Research Grade for academic institutions, university labs, and clinical research organizations. Please visit our catalog or contact us for availability and pricing.",
      },
      {
        q: "Can our institution partner with TruCells for research?",
        a: "TruCells welcomes collaborative research partnerships with universities and academic medical centers. Please reach out through our contact page to discuss potential research agreements.",
      },
    ],
  };

  return (
    <>
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Frequently asked questions</h1>
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-500 w-fit">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Looking for something?</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-[#0CB4C4] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {(faqs[activeTab] ?? []).map((faq) => (
              <details key={faq.q} className="bg-white border border-gray-200 rounded-xl group">
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
        </div>
      </section>
    </>
  );
}
