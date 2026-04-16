import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-services.jpg";
import chauffeurImg from "@/assets/chauffeur-service.jpg";
import groomingImg from "@/assets/grooming-spa.jpg";
import woodlandImg from "@/assets/woodland-walks.jpg";
import paddocksImg from "@/assets/grass-paddocks.jpg";
import playBarnImg from "@/assets/play-barn.jpg";
import dogBedImg from "@/assets/dog-bed-pod.jpg";
import { Shield, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                The Sanctuary Experience
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface leading-[0.95] mb-6">
                Elegance in Every Tail Wag.
              </h1>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8 max-w-md">
                Experience the pinnacle of pet hospitality. From private suites to woodland excursions, we provide an editorial-grade lifestyle for your most cherished companions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/facilities" className="inline-flex items-center px-7 py-3 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold hover:scale-[1.02] transition-transform">
                  Explore our Parlour
                </Link>
                <Link to="/facilities" className="inline-flex items-center px-7 py-3 rounded-full ghost-border text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Facilities
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src={heroImg} alt="Luxury dog suite" className="rounded-2xl w-full object-cover shadow-elevated" width={1920} height={1080} />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface-container-lowest rounded-xl shadow-elevated px-5 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Shield size={14} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">5-Star Accredited</p>
                  <p className="text-xs text-on-surface-variant">Rated HK's Leading Pet Hotel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Services */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface text-center mb-4">Our Curated Services</h2>
          <p className="text-on-surface-variant text-center mb-16 max-w-lg mx-auto">
            Meticulous attention to detail in every aspect of your pet's stay, from grooming rituals to emergency care.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient flex gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-3">Parlour & Spa</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Indulgent treatments including refreshing hydro baths, soothing paw massages, and our signature blueberry facials for ultimate relaxation.
                </p>
                <ul className="text-xs text-on-surface-variant space-y-1">
                  <li>◉ Hydro-massage therapy</li>
                  <li>◉ Organic blueberry facials</li>
                </ul>
              </div>
              <img src={groomingImg} alt="Grooming spa" className="w-36 h-36 object-cover rounded-xl hidden md:block" loading="lazy" />
            </div>

            <div className="bg-tertiary rounded-2xl p-8 text-tertiary-foreground">
              <h3 className="text-xl font-bold mb-3">Chauffeur Collect & Return</h3>
              <p className="text-sm opacity-80 leading-relaxed mb-4">
                Bespoke door-to-door transportation across the Hong Kong archipelago in our climate-controlled sanctuary fleet.
              </p>
              <p className="text-xs opacity-60 tracking-[0.1em] uppercase">Territory-Wide Coverage</p>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-ambient">
              <img src={dogBedImg} alt="Luxury residential suite" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-on-surface mb-3">Luxury Residential Suites</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Each private suite features intelligent underfloor heating/cooling and entertainment systems for a familiar home environment.
                </p>
                <div className="flex gap-3">
                  <span className="bg-secondary-container text-secondary-container-foreground text-xs font-medium px-3 py-1 rounded-full">🌡 Smart Climate</span>
                  <span className="bg-secondary-container text-secondary-container-foreground text-xs font-medium px-3 py-1 rounded-full">🎵 Entertainment</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-container rounded-2xl p-8 text-primary-container-foreground">
              <h3 className="text-xl font-bold mb-3">24-Hour Veterinary On-Call</h3>
              <p className="text-sm opacity-80 leading-relaxed mb-4">
                Absolute peace of mind. Our elite partner veterinary team is on standby around the clock for every guest.
              </p>
              <p className="text-xs opacity-60">Expert Medical Care Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4">Outdoor & Recreational Splendor</h2>
              <p className="text-on-surface-variant max-w-lg">
                Beyond the suites, our sanctuary opens up to acres of meticulously maintained environments for exploration and play.
              </p>
            </div>
            <Link to="/facilities" className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">
              View Interactive Map <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: woodlandImg, title: "Woodland Walks", desc: "Natural sensory journeys through our private forest trails, supervised by expert handlers." },
              { img: paddocksImg, title: "Private Grass Paddocks", desc: "Secure, lush green spaces for individual exercise and sun-soaked relaxation in complete safety." },
              { img: playBarnImg, title: "Indoor Play Barn", desc: "A massive weather-proof arena designed for social interaction and high-energy agility training." },
            ].map((item) => (
              <div key={item.title}>
                <img src={item.img} alt={item.title} className="w-full h-52 object-cover rounded-2xl mb-5" loading="lazy" />
                <h3 className="text-lg font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">Ready for a Retreat?</h2>
          <p className="text-primary-foreground/70 mb-10">Give your companion the luxury they deserve. Secure their suite for the upcoming season today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/packages" className="inline-flex items-center px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold text-sm hover:scale-[1.02] transition-transform">Book Your Stay</Link>
            <Link to="/facilities" className="inline-flex items-center px-8 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">Schedule a Tour</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
