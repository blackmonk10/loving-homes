import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", path: "/services" },
  { label: "Packages", path: "/packages" },
  { label: "Facilities", path: "/facilities" },
  { label: "Reviews", path: "/reviews" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between h-20">
        <Link to="/" className="text-primary font-extrabold text-xl tracking-tight">
          Loving Homes
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary underline underline-offset-8 decoration-2"
                  : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/packages"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold hover:scale-[1.02] transition-transform shadow-ambient"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-surface-container-low px-6 pb-6 pt-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === link.path ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/packages"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold mt-2"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
