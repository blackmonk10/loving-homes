import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Star, X } from "lucide-react";

const packages = [
  {
    tier: "Fundamental Luxury",
    name: "Essential",
    price: "HK260",
    unit: "Per Night",
    desc: "Comprehensive care with climate-controlled suites and daily curated exercise.",
    features: ["Signature Suite (15 sq ft)", "Twice-daily park walks", "Premium organic nutrition", "Private webcam access"],
    cta: "Select Essential",
    featured: false,
  },
  {
    tier: "The Standard",
    name: "Classic",
    price: "HK580",
    unit: "Per Night",
    desc: "Our most popular choice, featuring enhanced privacy and real-time connectivity for your peace of mind.",
    features: ["Garden View Suite (25 sq ft)", "Unlimited park & splash access", "24/7 Private webcam portal", "Nightly turndown treat service", "Individual spa therapy"],
    cta: "Reserve Classic",
    featured: true,
  },
  {
    tier: "Unrivaled Excellence",
    name: "Elite",
    price: "HK980",
    unit: "Per Night",
    desc: "An all-inclusive experience defined by personalized care, private trainers, and holistic wellness.",
    features: ["Royal Penthouse (45 sq ft)", "1-on-1 Personalized training", "Grooming & hydrotherapy circuit", "Daily digital diary & photo ops", "Arrival & Departure chauffeur"],
    cta: "Apply for Elite",
    featured: false,
  },
];

const comparisonData = [
  { feature: "Suite Size & Climate Control", essential: "15 sq ft / Standard", classic: "25 sq ft / Premium", elite: "45 sq ft / Ultra" },
  { feature: "Daily Concierge Walks", essential: "2 Sessions", classic: "4 Sessions", elite: "On-Demand" },
  { feature: "24/7 Digital Portal Access", essential: false, classic: true, elite: true },
  { feature: "Organic Artisanal Dining", essential: true, classic: true, elite: true },
  { feature: "Spa & Hydrotherapy Session", essential: false, classic: "Add-on available", elite: "Included Daily" },
  { feature: "Chauffeur Service (Door-to-Door)", essential: false, classic: false, elite: true },
];

const Packages = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface leading-[0.95] mb-6">
                <em className="not-italic font-light">Invest in their</em><br />Serenity.
              </h1>
              <p className="text-on-surface-variant text-base leading-relaxed max-w-md">
                Tailored accommodation tiers designed for the discerning traveler and their most loyal companions. Every stay is a masterpiece of hospitality.
              </p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-2 mb-2">
                <Star size={16} className="text-primary fill-primary" />
                <span className="text-xs font-semibold tracking-[0.1em] uppercase text-on-surface-variant">4.9/5 Guest Rating</span>
              </div>
              <p className="text-lg italic text-on-surface">Exceptional care,<br />standardized nightly rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  pkg.featured
                    ? "bg-surface-container-lowest shadow-elevated ring-2 ring-primary/10"
                    : "bg-surface-container-lowest shadow-ambient"
                }`}
              >
                {pkg.featured && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    Recommended
                  </span>
                )}
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-on-surface-variant mb-1">{pkg.tier}</p>
                <h3 className="text-2xl font-extrabold text-on-surface mb-1">{pkg.name}</h3>
                <p className="text-3xl font-extrabold text-on-surface">
                  {pkg.price} <span className="text-sm font-normal text-on-surface-variant">/ {pkg.unit}</span>
                </p>
                <p className="text-sm text-on-surface-variant mt-4 leading-relaxed">{pkg.desc}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="#"
                  className={`block text-center py-3.5 rounded-full text-sm font-semibold mt-8 transition-all tracking-wide uppercase ${
                    pkg.featured
                      ? "bg-gradient-primary text-primary-foreground hover:scale-[1.02]"
                      : "ghost-border text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface text-center italic mb-2">The Comparison</h2>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant text-center mb-12">
            A Detailed Look at Our Concierge Philosophy
          </p>

          <div className="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-5 text-xs font-semibold tracking-[0.1em] uppercase text-on-surface-variant">Service Feature</th>
                    <th className="p-5 text-center font-medium text-on-surface italic">Essential</th>
                    <th className="p-5 text-center font-bold text-primary italic bg-primary-fixed/30">Classic</th>
                    <th className="p-5 text-center font-medium text-on-surface italic">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "" : "bg-surface-container-low/30"}>
                      <td className="p-5 font-medium text-on-surface">{row.feature}</td>
                      {["essential", "classic", "elite"].map((col) => {
                        const val = row[col as keyof typeof row];
                        return (
                          <td key={col} className={`p-5 text-center ${col === "classic" ? "bg-primary-fixed/10" : ""}`}>
                            {val === true ? <Check size={16} className="text-primary mx-auto" /> :
                             val === false ? <span className="text-on-surface-variant/40">—</span> :
                             <span className={`text-sm ${col === "elite" ? "font-semibold text-primary" : "text-on-surface-variant"}`}>{val as string}</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant text-center mt-6">
            All pricing normalized to a per-night basis. Save 15% on stays of 7+ nights with our Concierge Credit.
          </p>
        </div>
      </section>

      {/* Boarding */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4">Boarding</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                Extended stays in our boutique facility designed to mirror the comfort and safety of a private home, with the added luxury of professional oversight.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">🔒</div>
                  <div>
                    <h4 className="font-bold text-on-surface">Private Suites</h4>
                    <p className="text-sm text-on-surface-variant">Climate-controlled quiet zones for restful sleep.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">🛡</div>
                  <div>
                    <h4 className="font-bold text-on-surface">24/7 Security</h4>
                    <p className="text-sm text-on-surface-variant">Continuous monitoring and on-site staff presence.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { tier: "Boarding Day", price: "1,960", features: ["Weekly package", "Standard care"] },
                { tier: "Boarding Classic", price: "4,060", features: ["Weekly package", "Gourmet meals"] },
                { tier: "Boarding Premium", price: "6,860", features: ["Weekly package", "Concierge service"] },
              ].map((b) => (
                <div key={b.tier} className="bg-surface-container-lowest rounded-2xl p-5 shadow-ambient text-center">
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-on-surface-variant mb-2">{b.tier}</p>
                  <p className="text-sm text-on-surface-variant">HK$</p>
                  <p className="text-2xl font-extrabold text-on-surface">{b.price}</p>
                  <ul className="text-xs text-on-surface-variant mt-3 space-y-1">
                    {b.features.map((f) => <li key={f}>• {f}</li>)}
                  </ul>
                  <button className="mt-4 text-xs font-semibold text-primary underline underline-offset-2">Book Suite</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">Your sanctuary away from home.</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-foreground/60 mb-2">Unmatched Security</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Biological security protocols and on-site staff presence 24/7/365 to ensure absolute safety.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-foreground/60 mb-2">Holistic Wellness</h4>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Custom nutrition and activity plans developed by veterinary behaviorists for your pet's soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
