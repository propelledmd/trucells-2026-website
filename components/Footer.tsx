import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/assets/logos/TruCells.png"
              alt="TruCells"
              width={130}
              height={38}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              4400 Piedras Drive South<br />
              San Antonio, TX 78228
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Educational Disclaimer</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              The information provided on this site is for general educational purposes only and is not intended as medical advice. All medical advice, diagnoses, and treatment should be obtained from a qualified physician.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Compliance Disclaimer</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              TruCells provides cGMP bone marrow aspirate (BMA) banking services in accordance with FDA regulations for minimal manipulation and autologous use (21 CFR Part 1271, Section 361). BMA is stored only upon formal request.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 TRUCELLS, INC. ALL RIGHTS RESERVED</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#0CB4C4] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#0CB4C4] transition-colors">Terms of Service</Link>
          </div>
          <p>CREATED BY PROPELLEDMD</p>
        </div>
      </div>
    </footer>
  );
}
