import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    alert('Logged in successfully!');
    navigate('/');
  };

  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center font-sans py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      {/* Split Screen Container */}
      <div className="w-full max-w-[1200px] min-h-[550px] bg-white flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-[0px_4px_40px_rgba(0,0,0,0.06)] border border-outline-variant/30">
        
        {/* Left Side: Value Prop (Hidden on Mobile) */}
        <div className="hidden md:flex md:w-1/2 bg-surface-container relative flex-col justify-between p-8 lg:p-12 overflow-hidden bg-slate-900 text-white">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center opacity-40" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')` 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-0" />
          
          <div className="z-10 relative">
            <Link className="text-3xl font-bold tracking-tight text-white" to="/">
              MarketElite
            </Link>
          </div>
          
          <div className="z-10 relative mt-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0px_4px_20px_rgba(0,0,0,0.15)] max-w-lg">
              <h2 className="text-2xl font-bold text-white mb-3">Empower your procurement.</h2>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Access a curated network of top-tier vendors and streamline your supply chain with our enterprise-grade marketplace.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img 
                    alt="User 1" 
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" 
                  />
                  <img 
                    alt="User 2" 
                    className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                  />
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-2 border-slate-900 shadow-sm z-10 relative">
                    +2k
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-300">Trusted by enterprise leaders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center py-8 px-6 sm:px-10 lg:px-16 bg-white">
          <div className="w-full max-w-[400px] mx-auto">
            
            {/* Back to Home Link */}
            <div className="mb-4">
              <Link to="/" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                Back to marketplace
              </Link>
            </div>

            {/* Login Form Content */}
            <div className="mb-5">
              <h1 className="text-2xl font-bold text-on-surface mb-1">Welcome back</h1>
              <p className="text-xs text-on-surface-variant">Enter your details to access your account.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Email Input */}
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1.5" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <input 
                    type="email"
                    id="email" 
                    required
                    placeholder="name@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-outline-variant/40 rounded-xl py-2 pl-10 pr-4 text-on-surface text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-semibold text-on-surface-variant" htmlFor="password">
                    Password
                  </label>
                  <a className="text-xs font-semibold text-primary hover:underline" href="#forgot">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0V10.5m-3.036 3.036 9.75 9.75M16.5 10.5a3 3 0 1 1-6 0M6.75 10.5h10.5a2.25 2.25 0 0 1 2.25 2.25v6.75a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-6.75a2.25 2.25 0 0 1 2.25-2.25Z" />
                    </svg>
                  </span>
                  <input 
                    type={showPassword ? "text" : "password"}
                    id="password" 
                    required
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-outline-variant/40 rounded-xl py-2 pl-10 pr-10 text-on-surface text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-primary transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.815 7.815 3 3m-3-3-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input 
                  type="checkbox"
                  id="remember" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-primary border-outline-variant/60 focus:ring-primary bg-slate-50 cursor-pointer"
                />
                <label className="ml-2 block text-xs font-medium text-on-surface-variant cursor-pointer" htmlFor="remember">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-on-primary-fixed-variant text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
              >
                Sign In
              </button>

              {/* Redirect to Register */}
              <div className="text-center mt-3">
                <span className="text-xs text-on-surface-variant">Don't have an account? </span>
                <Link to="/register" className="text-xs font-semibold text-primary hover:underline">
                  Register
                </Link>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-5 mb-4 flex items-center">
              <div className="flex-grow border-t border-outline-variant/30"></div>
              <span className="mx-4 text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-outline-variant/30"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-white border border-outline-variant/40 hover:bg-slate-50 text-on-surface font-semibold text-xs py-2 px-3 rounded-xl transition-all shadow-sm cursor-pointer active:scale-95">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-outline-variant/40 hover:bg-slate-50 text-on-surface font-semibold text-xs py-2 px-3 rounded-xl transition-all shadow-sm cursor-pointer active:scale-95">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z" fill="#1877F2"></path>
                </svg>
                Facebook
              </button>
            </div>

            {/* Footer Text */}
            <p className="mt-5 text-center text-xs text-on-surface-variant/80 leading-relaxed">
              By continuing, you agree to MarketElite's <br />
              <a className="text-primary hover:underline font-semibold" href="#terms">Terms of Service</a> and <a className="text-primary hover:underline font-semibold" href="#privacy">Privacy Policy</a>.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
