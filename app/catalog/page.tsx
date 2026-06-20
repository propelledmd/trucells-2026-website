import Image from "next/image";
import Link from "next/link";
import StayInformed from "@/components/StayInformed";

export const metadata = {
  title: "Catalog | TruCells",
  description: "Browse TruCells cGMP and research-grade cell products.",
};

const products = [
  {
    name: "Human Stromal Vascular Fraction (SVF) — Mesenchymal Stem Cells cGMP Grade",
    price: "$2,500.00",
    grade: "cGMP Grade",
    img: "/assets/images/SVF.png",
  },
  {
    name: "Human Bone Marrow — Mesenchymal Stem Cells cGMP Grade",
    price: "$2,500.00",
    grade: "cGMP Grade",
    img: "/assets/images/Human Bone Marrow.png",
  },
  {
    name: "Human Adipose Tissue — Mesenchymal Stem Cells cGMP Grade",
    price: "$800.00",
    grade: "cGMP Grade",
    img: "/assets/images/Human Knee Adipose Tissue.png",
  },
  {
    name: "Human Bone Marrow — Mesenchymal Stem Cells Research Grade",
    price: "$600.00",
    grade: "Research Grade",
    img: "/assets/images/BM MSC P1-P228JAN26BR.jpeg",
  },
  {
    name: "Human Stromal Vascular Fraction (SVF) — Research Grade",
    price: "$280.00",
    grade: "Research Grade",
    img: "/assets/images/SVF.png",
  },
  {
    name: "MNC — Bone Marrow Research Grade",
    price: "$600.00",
    grade: "Research Grade",
    img: "/assets/images/MNC P028JAN26.jpeg",
  },
];

export default function CatalogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-40 overflow-hidden">
        <Image src="/assets/images/Backgrounds/Catalog Products.jpg" alt="Products" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-6">
          <nav className="text-white text-xs flex gap-2 items-center">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <span>All Products</span>
          </nav>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-52 flex-shrink-0">
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Browse by</h3>
                <ul className="space-y-2 text-sm">
                  {["All Products", "Research Grade", "cGMP Grade"].map((cat) => (
                    <li key={cat}>
                      <button className="text-[#0CB4C4] hover:underline text-left">{cat}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-3">Filter by</h3>
                <p className="text-xs text-gray-500 mb-2">Price</p>
                <input type="range" min={0} max={3000} className="w-full accent-[#0CB4C4]" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$3,000</span>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
                <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#0CB4C4]">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                  <div key={p.name} className="border border-gray-200 rounded-xl overflow-hidden card-shadow">
                    <div className="relative h-44 bg-gray-50">
                      <Image src={p.img} alt={p.name} fill className="object-cover" />
                      <span className="absolute top-2 left-2 bg-[#0CB4C4] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                        {p.grade}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">{p.name}</h3>
                      <p className="text-[#0CB4C4] font-bold text-base mb-3">{p.price}</p>
                      <button className="btn-primary text-xs w-full text-center py-2">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <section className="relative py-16 overflow-hidden">
        <Image src="/assets/images/Backgrounds/TruCells (2).png" alt="Rigorous Regulatory Compliance" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Rigorous Regulatory Compliance</h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto mb-10">
            &ldquo;Our facility operates under strict cGMP protocols, ensuring every specimen meets the highest standards for cellular quality and safety.&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: "🛡️", label: "GMP CERTIFIED", sub: "FULL BATCH PANEL" },
              { icon: "🔬", label: "LAB VALIDATED", sub: "EVIDENCE BASED" },
              { icon: "🔒", label: "SECURE STORAGE", sub: "ISO REGULATED" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-6 border border-white/20 text-white">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-xs text-white/60 font-semibold tracking-widest mb-1">{item.sub}</p>
                <p className="font-bold text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StayInformed />
    </>
  );
}
