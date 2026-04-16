import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import signupDogImg from "../assets/signup-dog.jpg";
import dogBedImg from "../assets/dog-bed-pod.jpg";
import dogPortrait from "../assets/dog-portrait-1.jpg";
import { Eye, EyeOff, Check, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    petName: "",
    petType: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call for registration
      const userData = {
        fullName: formData.fullName,
        email: formData.email,
        pet: {
          name: formData.petName,
          type: formData.petType,
        },
      };
      
      // Call login to store user data
      login(userData);
      
      // Redirect to profile after successful signup
      navigate("/profile");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between h-16">
          <Link to="/" className="text-primary font-extrabold text-lg">Loving Homes</Link>
          <p className="text-sm text-on-surface-variant">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>

      {/* Hero + Form */}
      <section className="pt-16 grid md:grid-cols-2 min-h-screen">
        {/* Left - Image */}
        <div className="relative hidden md:block">
          <img src={signupDogImg} alt="Golden retriever in luxury interior" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/20" />
          <div className="absolute bottom-16 left-12 right-12 z-10">
            <h2 className="text-4xl font-extrabold text-primary-foreground leading-tight mb-3">
              The journey to serenity begins here.
            </h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Join our exclusive community of pet parents who prioritize peace, premium care, and professional excellence.
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex items-center justify-center px-6 py-20 bg-surface">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-extrabold text-primary mb-2">Create Your Profile</h1>
            <p className="text-on-surface-variant text-sm mb-10">Personalize your pet's sanctuary experience.</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Elizabeth Bennett"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="elizabeth@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Pet's Name</label>
                  <input
                    type="text"
                    name="petName"
                    placeholder="Luna"
                    value={formData.petName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Pet Type</label>
                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2">Create Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={8}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-xs text-on-surface-variant mt-1.5 tracking-wide uppercase">
                  Minimum 8 characters with one special symbol
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm hover:scale-[1.01] transition-transform shadow-ambient disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
                </div>
                <p className="text-xs text-on-surface-variant mt-1.5 tracking-wide uppercase">
                  Minimum 8 characters with one special symbol
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm hover:scale-[1.01] transition-transform shadow-ambient"
              >
                Create Account
              </button>
            </form>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-surface-container-high" />
              <span className="text-xs text-on-surface-variant">Or Join With</span>
              <div className="flex-1 h-px bg-surface-container-high" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 py-3 rounded-lg ghost-border text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors">
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-3 rounded-lg ghost-border text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors">
                Apple
              </button>
            </div>

            <p className="text-xs text-on-surface-variant text-center mt-6 leading-relaxed">
              By creating an account, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>. We value your pet's privacy as much as your own.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-on-surface-variant mb-4">The Sanctuary Editorial</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4">What to Expect</h2>
          <p className="text-on-surface-variant max-w-lg mb-16">
            Every detail of your pet's stay is curated to provide a high-end, editorial-grade experience. Discover the refined pillars of our sanctuary care.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient">
              <h3 className="text-xl font-bold text-on-surface mb-4">Seamless Booking & Management</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2"><Check size={16} className="text-primary mt-0.5 shrink-0" /> Effortless digital reservations through our bespoke concierge interface.</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-primary mt-0.5 shrink-0" /> Real-time availability updates for our most exclusive sanctuary suites.</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-primary mt-0.5 shrink-0" /> Instant confirmation and integrated calendar syncing for modern owners.</li>
              </ul>
              <img src={dogBedImg} alt="Luxury dog bed" className="w-full h-40 object-cover rounded-xl mt-6" loading="lazy" />
            </div>

            <div className="bg-primary-container rounded-2xl p-8 text-primary-container-foreground">
              <h3 className="text-xl font-bold mb-4">The Digital Portal</h3>
              <p className="text-sm opacity-80 leading-relaxed mb-6">
                Maintain a constant connection to your pet's sanctuary experience through our high-definition portal.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold tracking-[0.15em] uppercase opacity-60 mb-1">HD Live Feed</h4>
                  <p className="text-sm opacity-80">Access private, secure video streams of your pet's suite at any hour.</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold tracking-[0.15em] uppercase opacity-60 mb-1">Daily Journal</h4>
                  <p className="text-sm opacity-80">Curated updates featuring professional-grade photography of your pet's activities.</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-semibold mt-6 opacity-80 hover:opacity-100 cursor-pointer">
                Explore the Portal <ArrowRight size={14} />
              </span>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-ambient">
              <h3 className="text-xl font-bold text-on-surface mb-4">Personalized Care Profile</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                A bespoke wellness plan tailored to the unique temperament and physical needs of every resident.
              </p>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li>• Nutritional mastery & dietary preferences</li>
                <li>• Custom exercise and social schedules</li>
                <li>• Medical oversight and specialized attention</li>
              </ul>
            </div>

            <div className="bg-secondary-container rounded-2xl p-8 relative overflow-hidden">
              <h3 className="text-xl font-bold text-secondary-container-foreground mb-4">Exclusive Member Benefits</h3>
              <p className="text-sm text-secondary-container-foreground/80 leading-relaxed mb-6">
                Elevate your pet's life with our tiered sanctuary membership programs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest/50 rounded-lg p-3">
                  <h4 className="text-xs font-bold text-on-surface uppercase mb-1">Priority</h4>
                  <p className="text-xs text-on-surface-variant">Guaranteed booking during peak holidays.</p>
                </div>
                <div className="bg-surface-container-lowest/50 rounded-lg p-3">
                  <h4 className="text-xs font-bold text-on-surface uppercase mb-1">Grooming</h4>
                  <p className="text-xs text-on-surface-variant">Complimentary organic spa treatments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-on-surface mb-6">
            Ready to provide your pet with the sanctuary experience they deserve?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/facilities" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm hover:scale-[1.02] transition-transform">
              Request a Private Tour
            </Link>
            <Link to="/packages" className="inline-flex items-center px-8 py-4 rounded-full ghost-border text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              View Memberships
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignUp;
