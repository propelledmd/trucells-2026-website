"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/assets/images/backgrounds/Background.png",
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

      {/* Gradient overlay — fades from white on left so text is always readable */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.92) 40%, rgba(255,255,255,0.5) 65%, rgba(255,255,255,0) 100%)" }} />

      {/* Text — always left-anchored */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Preserve Your Body&apos;s{" "}
            <span className="text-[#0CB4C4]">Natural Healing Power</span>
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-8">
            TruCells makes it simple to bank your own stem cells during surgeries you&apos;re already planning — storing your regenerative potential for the future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about-us" className="btn-primary">Learn More</Link>
            <Link href="/capabilities" className="btn-outline">Our Capabilities</Link>
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
