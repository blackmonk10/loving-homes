import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-facilities.jpg";
import dogBedImg from "@/assets/dog-bed-pod.jpg";
import woodlandImg from "@/assets/woodland-walks.jpg";
import paddocksImg from "@/assets/grass-paddocks.jpg";
import playBarnImg from "@/assets/play-barn.jpg";
import { Shield, Wifi, Thermometer, Monitor } from "lucide-react";

const Facilities = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[70vh] overflow-hidden">
          <img src={heroImg} alt="Loving Homes sanctuary exterior" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
          <div className="relative z-10 h-full flex items-end pb-16 max-w-7xl mx-auto px-6 md:px-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-[0.95]">
              A World Crafted<br />for Comfort
            </h1>
          </div>
        </div>
      </section>

      {/* Residential Excellence */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img src={dogBedImg} alt="Premium dog suite" className="rounded-2xl w-full object-cover shadow-elevated" loading="lazy" />
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">Unrivaled Lodging</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-6">Residential Excellence</h2>
              <p className="text-on-surface-variant leading-[1.8] mb-8">
                Our suites are masterpieces of pet-centric architecture. Designed to soothe the senses, each room features climate-controlled underfloor heating and cooling, ensuring the perfect temperature year-round.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Thermometer size={20} className="text-primary mt-0.5" />
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Smart Climate</h4>
                    <p className="text-xs text-on-surface-variant">Adaptive heating & cooling for optimal comfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor size={20} className="text-primary mt-0.5" />
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Media Suites</h4>
                    <p className="text-xs text-on-surface-variant">Calming visual and audio entertainment selected for dogs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Great Outdoors */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">The Great Outdoors</h2>
          <p className="opacity-70 max-w-lg mb-12">
            Five acres of private, secure woodland and meadow. Our sanctuary grounds are designed to reconnect your pet with their natural instincts in a safe, curated environment.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img src={woodlandImg} alt="Woodland trails" className="rounded-2xl w-full h-64 object-cover mb-5" loading="lazy" />
              <h3 className="text-xl font-bold mb-2">Woodland Trails</h3>
              <p className="text-sm opacity-70">Guided exploratory walks through private, secure forest paths.</p>
            </div>
            <div>
              <img src={paddocksImg} alt="Grass paddocks" className="rounded-2xl w-full h-64 object-cover mb-5" loading="lazy" />
              <h3 className="text-xl font-bold mb-2">Grass Paddocks</h3>
              <p className="text-sm opacity-70">Private play areas for off-leash exploration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Play */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface text-center mb-4">Active Play</h2>
          <p className="text-on-surface-variant text-center mb-16">Dynamic environments designed to stimulate the mind and strengthen the body.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-ambient">
              <img src={playBarnImg} alt="The Play Barn" className="w-full h-64 object-cover" loading="lazy" />
              <div className="p-8">
                <h3 className="text-xl font-bold text-on-surface mb-3">The Play Barn</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  A massive indoor arena with rubberized flooring, climate control, and professional-grade toys. Perfect for high-energy sessions regardless of the weather.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-tertiary rounded-2xl p-8 text-tertiary-foreground">
                <h3 className="text-lg font-bold mb-2">Agility Track</h3>
                <p className="text-sm opacity-80">Curated courses designed for all skill levels, from beginners to seasoned athletes.</p>
              </div>
              <div className="bg-primary-container rounded-2xl p-8 text-primary-container-foreground">
                <h3 className="text-lg font-bold mb-2">Cognitive Play</h3>
                <p className="text-sm opacity-80">Scent work stations and interactive puzzle areas to keep brilliant minds sharp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Infrastructure */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-12">Care Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                  <Shield size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">24/7 Veterinary Access</h4>
                  <p className="text-sm text-on-surface-variant">Direct partnership with local top-tier animal hospitals for immediate on-call response.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                  <Wifi size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">PetWatch System</h4>
                  <p className="text-sm text-on-surface-variant">Encrypted high-definition stream available to owners through our dedicated concierge app.</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-container rounded-2xl p-8 text-primary-container-foreground">
              <h3 className="text-xl font-bold mb-6">Security & Monitoring</h3>
              <ul className="space-y-3 text-sm opacity-80">
                <li>◉ Fingerprint access controls for all gates</li>
                <li>◉ Thermal leak detection in all suites</li>
                <li>◉ Dedicated night-staff for 24hr supervision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">Experience the Sanctuary</h2>
          <p className="text-primary-foreground/70 mb-10">We invite you to visit Loving Homes and see our world-class facilities in person. Book a private tour today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/reviews" className="inline-flex items-center px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold text-sm hover:scale-[1.02] transition-transform">Take a Tour</Link>
            <Link to="/packages" className="inline-flex items-center px-8 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">Book a Stay</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
