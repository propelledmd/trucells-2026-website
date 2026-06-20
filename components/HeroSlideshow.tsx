"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/assets/images/trucells/ChatGPT Image Apr 10, 2026, 08_38_12 PM.png",
  "/assets/images/backgrounds/TruCells Hero.png",
  "/assets/images/trucells/ChatGPT Image Apr 10, 2026, 08_41_48 PM.png",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: "82vh" }}>
      {/* Background images */}
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt="TruCells hero"
            fill
            className="object-cover object-top"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Very subtle left scrim so dark text reads on any photo */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 45%, transparent 70%)" }}
      />

      {/* Text content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28">
        <div className="max-w-xl">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <svg className="w-3.5 h-3.5 text-[#0CB4C4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-[#0CB4C4] text-xs font-bold uppercase tracking-[0.18em]">
              Advancing Regenerative Medicine
            </span>
          </div>

          {/* Headline */}
          <h1 className="leading-[1.08] mb-6" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", fontFamily: "var(--font-raleway)", fontWeight: 900 }}>
            <span className="block text-gray-900">Preserve Your</span>
            <span className="block text-gray-900">
              Body&apos;s <span className="text-[#0CB4C4]">Natural</span>
            </span>
            <span className="block text-[#0CB4C4]">Healing Power</span>
          </h1>

          {/* Sub-text — dark */}
          <p className="text-gray-800 text-base leading-relaxed mb-9 max-w-sm">
            TruCells helps you safely collect and store your own stem cells during procedures you are already planning so you are prepared for the future of medicine.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/about-us" className="btn-primary text-sm px-6 py-2.5">
              Learn About Stem cell Banking &rsaquo;
            </Link>
            <Link
              href="/platform"
              className="text-sm font-semibold px-6 py-2.5 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors border border-gray-200"
            >
              For Physicians
            </Link>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-[#0CB4C4] scale-110" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
