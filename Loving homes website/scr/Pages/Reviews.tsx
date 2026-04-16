import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import testimonialImg from "@/assets/testimonial-person.jpg";
import { Star, Play, CheckCircle, Shield, Leaf, Eye } from "lucide-react";

const reviews = [
  {
    quote: "The attention to detail here is unmatched. From the organic meal plans to the calm acoustic music in the suites, Leo was treated like royalty.",
    pet: "Leo, Golden Retriever",
    owner: "David Henderson",
    rating: 5,
  },
  {
    quote: "Finding a place that understands high-energy breeds was tough. The sanctuary's wide open trails were exactly what Cooper needed.",
    pet: "Cooper, Border Collie",
    owner: "Elena Rodriguez",
    rating: 5,
  },
  {
    quote: "Luna is usually quite shy, but the gentle approach of the staff here made her feel safe within hours. The daily photo updates are so reassuring.",
    pet: "Luna, Beagle",
    owner: "Michael Thompson",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                Testimonials
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface leading-[0.95] mb-6">
                The Guest Book
              </h1>
              <p className="text-on-surface-variant text-base leading-relaxed max-w-md mb-8">
                At Loving Homes, we believe in building a sanctuary founded on trust and transparency. Every story shared by our human clients reflects the genuine care and luxury experience their companions receive.
              </p>
              <p className="text-sm text-on-surface-variant">Trusted by over <strong className="text-on-surface">1,500 families</strong></p>
            </div>
            <div className="relative">
              <img src={testimonialImg} alt="Happy pet owner with dog" className="rounded-2xl w-full object-cover shadow-elevated" loading="lazy" width={800} height={600} />
              <div className="absolute bottom-6 right-6 bg-surface-container-lowest rounded-xl shadow-elevated p-5 max-w-[220px]">
                <p className="text-sm text-on-surface leading-relaxed italic">
                  "Their home away from home. I never worry when Bella is at Loving Homes."
                </p>
                <p className="text-xs font-semibold text-on-surface-variant mt-2">— Sarah Jenkins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">A Legacy of Trust</h2>
          <p className="opacity-70 mb-12">Watch Sarah and Max share their journey with our sanctuary.</p>
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-primary-container flex items-center justify-center cursor-pointer group">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Play size={32} className="text-primary-foreground ml-1" />
            </div>
            <div className="absolute bottom-6 left-6 text-left">
              <p className="text-xs opacity-60 uppercase tracking-wider">Now Playing</p>
              <p className="text-sm font-bold">The Max & Sarah Experience</p>
            </div>
            <p className="absolute bottom-6 right-6 text-xs opacity-60">03:42</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4">Our Guests Speak</h2>
              <p className="text-on-surface-variant max-w-md">Discover why we are the preferred sanctuary for discerning pet owners across the country.</p>
            </div>
            <div className="bg-primary text-primary-foreground rounded-xl px-5 py-3 flex items-center gap-3">
              <span className="text-2xl font-extrabold">4.9/5</span>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-primary-foreground" />)}
                </div>
                <span className="text-xs opacity-70">Average Rating</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.owner} className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient">
                <div className="flex gap-0.5 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-primary fill-primary" />)}
                </div>
                <p className="text-sm text-on-surface leading-relaxed mb-8 italic">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {review.owner[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{review.pet}</p>
                    <p className="text-xs text-on-surface-variant">{review.owner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <CheckCircle size={24} className="text-primary" />, label: "Verified Stay" },
              { icon: <Shield size={24} className="text-primary" />, label: "5-Star Certified" },
              { icon: <Leaf size={24} className="text-primary" />, label: "Vet Approved" },
              { icon: <Eye size={24} className="text-primary" />, label: "24/7 Monitoring" },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-3">
                {badge.icon}
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-on-surface-variant">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">Join the Sanctuary</h2>
          <p className="text-primary-foreground/70 mb-10">Ready to experience the gold standard of pet care? Secure your companion's place in our sanctuary today.</p>
          <Link to="/packages" className="inline-flex items-center px-8 py-4 rounded-full bg-primary-foreground text-primary font-semibold text-sm hover:scale-[1.02] transition-transform">Book a Stay</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
