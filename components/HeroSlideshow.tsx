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
    <section className="relative min-h-[540px] flex items-center overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt="TruCells"
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Text — left-anchored with text-shadow for legibility over any photo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-lg">
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
          >
            Preserve Your Body&apos;s{" "}
            <span className="text-[#0CB4C4]">Natural Healing Power</span>
          </h1>
          <p
            className="text-white text-base leading-relaxed mb-8"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
          >
            TruCells makes it simple to bank your own stem cells during surgeries you&apos;re already planning — storing your regenerative potential for the future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about-us" className="btn-primary">Learn More</Link>
            <Link href="/capabilities" className="btn-outline" style={{ borderColor: "white", color: "white" }}>Our Capabilities</Link>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-[#0CB4C4]" : "bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
}
