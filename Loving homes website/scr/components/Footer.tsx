import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-extrabold text-lg mb-3">LOVING HOMES</h3>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              Hong Kong's premier luxury sanctuary for extraordinary companions.
            </p>
            <div className="flex gap-4">
              <span className="text-sm opacity-60">𝕏</span>
              <span className="text-sm opacity-60">IG</span>
              <span className="text-sm opacity-60">FB</span>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-bold text-sm mb-4 opacity-90">Experience</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Suites & Rooms</Link></li>
              <li><Link to="/facilities" className="hover:opacity-100 transition-opacity">Sanctuary Grounds</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Care & Wellness</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Gourmet Dining</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm mb-4 opacity-90">Company</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><span className="hover:opacity-100 transition-opacity cursor-pointer">Careers</span></li>
              <li><span className="hover:opacity-100 transition-opacity cursor-pointer">Sustainability</span></li>
              <li><span className="hover:opacity-100 transition-opacity cursor-pointer">Pet Safety</span></li>
              <li><Link to="/reviews" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-sm mb-4 opacity-90">Location</h4>
            <div className="text-sm opacity-70 leading-relaxed space-y-1">
              <p>128 Peak Road,</p>
              <p>The Peak, Hong Kong</p>
              <p className="mt-3">+852 2345 6789</p>
              <p>concierge@lovinghomes.hk</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© 2024 Loving Homes Luxury Dog Hotel Hong Kong. A Sanctuary for Your Best Friend.</p>
          <div className="flex gap-6">
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</span>
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
