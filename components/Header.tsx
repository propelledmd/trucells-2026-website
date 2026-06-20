"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Platform", href: "/platform" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ's", href: "/faqs" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/assets/logos/TruCells_edited.png"
              alt="TruCells"
              width={284}
              height={80}
              className="h-[80px] w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#0CB4C4] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm ml-2">
              Contact Us
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#0CB4C4]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-[#0CB4C4] text-sm font-medium py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm inline-block mt-2" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
