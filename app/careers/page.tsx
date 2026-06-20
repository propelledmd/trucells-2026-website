import Image from "next/image";
import StayInformed from "@/components/StayInformed";

export const metadata = {
  title: "Careers | TruCells",
  description: "Join TruCells and help advance regenerative medicine from San Antonio, Texas.",
};

const positions = [
  { dept: "Personnel", title: "MSAT Scientist I (Manufacturing Science Technology) — 2 Openings", type: "Full Time", date: "5/1/2026" },
  { dept: "Personnel", title: "Manufacturing I (Operations Personnel)", type: "Full Time", date: "5/1/2026" },
  { dept: "Personnel", title: "Manufacturing II (Operations Personnel)", type: "Full Time", date: "5/1/2026" },
  { dept: "Personnel", title: "Manufacturing Lead or Supervisor (Operations Supervisor)", type: "Full Time", date: "5/1/2026" },
  { dept: "Personnel", title: "QC Scientist (QC Operations Personnel) — 2 Openings", type: "Full Time", date: "5/1/2026" },
  { dept: "Personnel", title: "QC Manager", type: "Full Time", date: "3/1/2026" },
  { dept: "Management", title: "Director of Quality Assurance", type: "Full Time", date: "Immediate" },
  { dept: "Management", title: "Supply Chain Manager", type: "Full Time", date: "5/1/2026" },
  { dept: "Execs", title: "Chief Executive Officer / President", type: "Fractional", date: "Immediate" },
  { dept: "Execs", title: "Executive Vice President / Chief Financial Officer", type: "Fractional", date: "4/1/2026" },
  { dept: "Regulatory", title: "FDA Regulatory Counsel", type: "Fractional", date: "5/1/2026" },
  { dept: "Legal", title: "Corporate Legal Counsel", type: "Fractional", date: "3/1/2026" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[360px] flex items-center overflow-hidden">
        <Image
          src="/assets/images/Backgrounds/TruCells Office.png"
          alt="Careers at TruCells"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl font-bold text-[#0CB4C4] mb-6">Careers</h1>
          <div className="max-w-xl">
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              TruCells is proud to be part of San Antonio&apos;s growing life sciences community. Inside our labs, collaboration fuels discovery, curiosity drives progress, and purpose guides everything we do.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Every role here contributes to advancing regenerative therapies that help people live healthier, longer lives. The future of medicine is being built here and it is built by people who care deeply about the work they do.
            </p>
          </div>
        </div>
      </section>

      {/* Positions Table */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Positions</h2>
          <div className="overflow-x-auto rounded-xl card-shadow">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0CB4C4] text-white">
                  <th className="px-5 py-3 text-left font-semibold">Department</th>
                  <th className="px-5 py-3 text-left font-semibold">Position Title</th>
                  <th className="px-5 py-3 text-left font-semibold">Employment Type</th>
                  <th className="px-5 py-3 text-left font-semibold">Start Date</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((pos, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F7FA]"}>
                    <td className="px-5 py-3 text-gray-500 text-xs font-medium">{pos.dept}</td>
                    <td className="px-5 py-3 text-gray-900 font-medium">{pos.title}</td>
                    <td className="px-5 py-3 text-gray-600">{pos.type}</td>
                    <td className="px-5 py-3 text-gray-600">{pos.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white bg-[#0D1B2A] rounded-2xl p-8 leading-tight">
                Apply<br />Today
              </h2>
              <div className="mt-6 px-2">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  We&apos;re looking for talent across scientific, clinical, and business functions — people eager to learn, collaborate, and make an impact.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  If you&apos;re ready to do work that matters, we&apos;d love to hear from you.
                </p>
              </div>
            </div>

            <form className="bg-white rounded-2xl p-8 card-shadow space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">First name *</label>
                  <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0CB4C4]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Last name *</label>
                  <input type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0CB4C4]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone *</label>
                  <input type="tel" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0CB4C4]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Available Start Date *</label>
                  <input type="date" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0CB4C4]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                <input type="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0CB4C4]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Position Applying For *</label>
                <select required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0CB4C4] text-gray-700">
                  <option value="">Select a position...</option>
                  {positions.map((p, i) => <option key={i}>{p.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Upload Resume</label>
                <input type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#E0F7FA] file:text-[#0CB4C4] hover:file:bg-[#0CB4C4] hover:file:text-white" />
              </div>
              <button type="submit" className="btn-primary w-full py-3 mt-2">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <StayInformed />
    </>
  );
}
