import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginDogImg from "@/assets/login-dog.jpg";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      const userData = { email, password };
      login(userData);
      // Redirect to profile after successful login
      navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left - Image */}
      <div className="relative hidden md:block">
        <img src={loginDogImg} alt="Golden retriever on green sofa" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 z-10">
          <h2 className="text-4xl font-extrabold text-primary-foreground leading-tight mb-3">
            A sanctuary built on trust.
          </h2>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Welcome back to the world's most refined pet care experience.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex items-center justify-center px-6 py-20 bg-surface">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-extrabold text-primary mb-2">Welcome Back</h1>
          <p className="text-on-surface-variant text-sm mb-10">Access your pet's personalized stay profile.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-on-surface">Password</label>
                <button type="button" className="text-xs font-semibold text-primary">Forgot Password?</button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded accent-primary" />
              <label htmlFor="remember" className="text-sm text-on-surface-variant">Remember this device</label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm hover:scale-[1.01] transition-transform shadow-ambient disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-sm text-on-surface-variant text-center mt-8">
            New to Loving Homes?{" "}
            <Link to="/signup" className="text-primary font-bold hover:underline">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
