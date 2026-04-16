import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/hero-home.jpg";
import dogPortrait from "../assets/dog-portrait-1.jpg";
import chauffeurImg from "../assets/chauffeur-service.jpg";
import groomingImg from "../assets/grooming-spa.jpg";
import nutritionImg from "../assets/gourmet-nutrition.jpg";
import woodlandImg from "../assets/woodland-walks.jpg";
import paddocksImg from "../assets/grass-paddocks.jpg";
import playBarnImg from "../assets/play-barn.jpg";
import { Star, ArrowRight, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
        <img
          src={heroImage}
          alt="Luxury dog hotel interior with golden retriever on green velvet sofa"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 w-full">
          <p className="text-primary-foreground/70 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Hong Kong's Premier Sanctuary
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold text-primary-foreground leading-[0.95] mb-6 max-w-2xl">
            A Sanctuary for Your Best Friend.
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            Experience Hong Kong's most exclusive dog hotel, where luxury meets unconditional love and editorial grade care.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/packages"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm hover:scale-[1.02] transition-transform shadow-elevated"
            >
              Book a Stay
            </Link>
            <Link
              to="/facilities"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary-foreground/10 text-primary-foreground font-semibold text-sm backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
            >
              Explore Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-0.5 bg-primary mb-8" />
              <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface leading-tight mb-8">
                The Sanctuary Philosophy
              </h2>
              <p className="text-on-surface-variant text-base leading-[1.8] mb-6">
                We believe architecture should serve the inhabitant. Our spaces are designed with pet-centric geometry, maximizing natural light and providing curated sensory experiences that soothe and inspire.
              </p>
              <p className="text-on-surface-variant text-base leading-[1.8]">
                At Loving Homes, we don't just board dogs; we curate retreats. Every interaction is informed by our commitment to holistic wellness and high-end editorial standards of care.
              </p>
            </div>
            <div className="relative">
              <img
                src={dogPortrait}
                alt="Golden retriever portrait"
                className="rounded-2xl w-full object-cover shadow-elevated"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest rounded-2xl shadow-elevated p-5">
                <p className="text-3xl font-extrabold text-primary">12+</p>
                <p className="text-xs text-on-surface-variant font-medium">Years of Luxury Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unrivaled Attention */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant text-center mb-4">
            World Class Service
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface text-center mb-16">
            Unrivaled Attention
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chauffeur */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient group">
              <div className="flex gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-on-surface mb-3">Chauffeur Collect & Return</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    Our bespoke Mercedes-Benz fleet ensures your companion travels in air-conditioned comfort, direct from your doorstep to our sanctuary.
                  </p>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
                <img
                  src={chauffeurImg}
                  alt="Luxury chauffeur service"
                  className="w-40 h-32 object-cover rounded-xl hidden md:block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Vet */}
            <div className="bg-primary-container rounded-2xl p-8 text-primary-container-foreground">
              <h3 className="text-lg font-bold mb-3">24-hour Veterinary Care</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Round-the-clock peace of mind with our resident medical team, specializing in senior care and athletic recovery.
              </p>
            </div>

            {/* Grooming */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient">
              <h3 className="text-lg font-bold text-on-surface mb-3">Grooming & Spa</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Using only organic essential oils and botanical shampoos for a restorative skin and coat treatment.
              </p>
            </div>

            {/* Nutrition */}
            <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-ambient">
              <img
                src={nutritionImg}
                alt="Gourmet pet nutrition"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-on-surface-variant mb-2">Nutrition</p>
                <h3 className="text-lg font-bold text-on-surface mb-2">Gourmet Nutrition</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Chef-prepared meals tailored to your pet's specific dietary requirements and palate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary Grounds */}
      <section className="py-24 md:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4">
                The Sanctuary Grounds
              </h2>
              <p className="text-on-surface-variant text-base max-w-lg leading-relaxed">
                Three distinct environments designed to cater to every temperament, from high-energy athletes to soulful seniors.
              </p>
            </div>
            <Link
              to="/facilities"
              className="inline-flex items-center px-6 py-3 rounded-full ghost-border text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              Full Virtual Tour
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: woodlandImg, title: "Woodland Walks", desc: "Secured natural trails spanning 5 acres of private Hong Kong hillside." },
              { img: paddocksImg, title: "Private Grass Paddocks", desc: "Individual play zones featuring fresh Bermuda grass for scent work and sprints." },
              { img: playBarnImg, title: "Indoor Play Barn", desc: "Climate-controlled arena for all-weather social sessions and sensory play." },
            ].map((item) => (
              <div key={item.title}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-2xl mb-5"
                  loading="lazy"
                />
                <h3 className="text-lg font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface">
              Choose Your Experience
            </h2>
            <Link
              to="/packages"
              className="inline-flex items-center px-6 py-3 rounded-full ghost-border text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              View All Packages
            </Link>
          </div>
          <p className="text-on-surface-variant mb-12 max-w-md">Tailored stays for extraordinary companions.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Day Stay", price: "$880", unit: "day", features: ["Social Play Sessions", "Fresh Water Oasis Access"], cta: "Inquire Now" },
              { name: "Classic Suite", price: "$1,500", unit: "night", features: ["Overnight Luxury Suite", "Standard Woodland Walk", "Live Video Check-ins"], popular: true, cta: "Select Classic" },
              { name: "Premium Retreat", price: "$2,800", unit: "night", features: ["Penthouse Multi-Room Suite", "Private Butler & Massage"], cta: "Select Premium" },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-surface-container-lowest shadow-elevated ring-2 ring-primary/10"
                    : "bg-surface-container-lowest shadow-ambient"
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-on-surface-variant mb-1">{pkg.name}</p>
                <p className="text-3xl font-extrabold text-on-surface mb-1">
                  {pkg.price}<span className="text-sm font-normal text-on-surface-variant"> / {pkg.unit}</span>
                </p>
                <ul className="mt-6 space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-on-surface-variant">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/packages"
                  className={`block text-center py-3 rounded-full text-sm font-semibold transition-all ${
                    pkg.popular
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

      {/* Testimonial */}
      <section className="py-24 md:py-36 bg-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-20 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-8">
            The Guest Book
          </p>
          <blockquote className="text-xl md:text-2xl font-medium text-on-surface leading-relaxed italic mb-10">
            "Finding Loving Homes was like finding a second family. The level of detail—from the organic meals to the personalized Woodland Walks—is simply unheard of in Hong Kong. My Labrador, Leo, never wants to leave."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary-foreground text-sm font-bold">
              A
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-on-surface">Alexandra Chen</p>
              <p className="text-xs text-on-surface-variant">Owner of Leo, 3-year resident</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
            Ready for a Retreat?
          </h2>
          <p className="text-primary-foreground/70 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Reservations are strictly limited to ensure an intimate sanctuary experience. Secure your companion's stay today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/packages"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold text-sm hover:scale-[1.02] transition-transform"
            >
              Book the Stay
            </Link>
            <Link
              to="/reviews"
              className="inline-flex items-center px-8 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
