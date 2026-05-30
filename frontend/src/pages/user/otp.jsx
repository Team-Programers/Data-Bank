import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, RefreshCw } from 'lucide-react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function Otp() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(59);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // Countdown timer logic for OTP resend limit
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    if (!canResend) return;
    // Simulate API call to resend OTP code
    setTimer(59);
    setCanResend(false);
    alert("A new 4-digit verification code has been sent to your email!");
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (value.length < 4) return;

    setIsVerifying(true);
    // Simulate API validation latency
    setTimeout(() => {
      setIsVerifying(false);
      alert("Verification successful!");
      navigate('/');
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center font-sans py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Dynamic/ambient gradient background blobs for a premium look */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-secondary/15 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-primary/10 blur-[90px] sm:blur-[130px] pointer-events-none" />

      {/* Verification Card */}
      <div className="w-full max-w-[440px] bg-surface rounded-2xl border border-outline-variant/30 card-shadow p-6 sm:p-10 relative z-10">
        
        {/* Navigation back link */}
        <div className="mb-6 sm:mb-8">
          <Link to="/login" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:opacity-85 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>

        {/* Info Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-4 sm:mb-5 text-primary shadow-inner relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300" />
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 animate-pulse text-primary" />
          </div>
          
          <h1 className="text-xl sm:text-2xl font-bold text-on-surface mb-2 tracking-tight">Enter Verification Code</h1>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-[320px] leading-relaxed">
            We have sent a 4-digit confirmation OTP to your registered email address.
          </p>
        </div>

        {/* Form and Inputs */}
        <form onSubmit={handleVerify} className="space-y-6 sm:space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <label className="text-[10px] sm:text-[11px] font-bold text-on-surface-variant/80 uppercase tracking-widest">
              Secure OTP Code
            </label>
            
            <div className="flex justify-center w-full">
              <InputOTP 
                maxLength={4} 
                value={value} 
                onChange={(val) => setValue(val)}
              >
                <InputOTPGroup className="gap-2 sm:gap-4">
                  <InputOTPSlot index={0} className="w-11 h-13 sm:w-14 sm:h-16 text-xl sm:text-2xl font-bold border border-outline-variant/40 rounded-xl bg-slate-50 focus-within:ring-2 focus-within:ring-primary focus-within:bg-white text-on-surface transition-all duration-150" />
                  <InputOTPSlot index={1} className="w-11 h-13 sm:w-14 sm:h-16 text-xl sm:text-2xl font-bold border border-outline-variant/40 rounded-xl bg-slate-50 focus-within:ring-2 focus-within:ring-primary focus-within:bg-white text-on-surface transition-all duration-150" />
                  <InputOTPSlot index={2} className="w-11 h-13 sm:w-14 sm:h-16 text-xl sm:text-2xl font-bold border border-outline-variant/40 rounded-xl bg-slate-50 focus-within:ring-2 focus-within:ring-primary focus-within:bg-white text-on-surface transition-all duration-150" />
                  <InputOTPSlot index={3} className="w-11 h-13 sm:w-14 sm:h-16 text-xl sm:text-2xl font-bold border border-outline-variant/40 rounded-xl bg-slate-50 focus-within:ring-2 focus-within:ring-primary focus-within:bg-white text-on-surface transition-all duration-150" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          {/* Submit Action */}
          <button 
            type="submit"
            disabled={value.length < 4 || isVerifying}
            className={`w-full py-3 sm:py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer
              ${value.length < 4 || isVerifying
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none border border-outline-variant/20' 
                : 'bg-primary text-white hover:bg-on-primary-fixed-variant active:scale-[0.98]'
              }
            `}
          >
            {isVerifying ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Verifying...
              </>
            ) : (
              'Verify & Activate'
            )}
          </button>

          {/* Resend Section */}
          <div className="text-center pt-3 sm:pt-4 border-t border-outline-variant/20">
            {canResend ? (
              <button
                type="button"
                onClick={handleResend}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Resend security code
              </button>
            ) : (
              <span className="text-xs text-on-surface-variant inline-flex items-center gap-1">
                Resend code in <span className="font-semibold text-on-surface">0:{timer < 10 ? `0${timer}` : timer}</span>
              </span>
            )}
          </div>
        </form>

        {/* Help footer info */}
        <p className="mt-6 sm:mt-8 text-center text-xs text-on-surface-variant/80 leading-relaxed">
          Didn't receive the email? Double check your spam/junk folder or contact support.
        </p>

      </div>
    </div>
  );
}



