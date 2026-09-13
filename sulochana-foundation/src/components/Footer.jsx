import React, { useState } from 'react';
import { 
  Heart, Mail, Phone, MapPin, ArrowRight, 
  ShieldCheck, Check, Sparkles 
} from 'lucide-react';
import { foundationData } from '../data/foundationData';

export default function Footer({ setCurrentView, openSupportModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-teal-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-lg border border-slate-700">
                <img 
                  src="/assets/logo.png" 
                  alt="Sulochana Foundation Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/logo.png";
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold font-sans text-white tracking-tight">
                  SULOCHANA FOUNDATION
                </h3>
                <p className="text-xs text-amber-400 tracking-wider uppercase font-semibold">
                  Parel Mumbai 12 • Bringing Hope Where It’s Needed Most
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pr-4">
              Incorporated under Section 8 of the Companies Act, 2013 (Govt. of India Licence No. U85300MH2024NPL123456). Dedicated to public welfare, inclusive education, community healthcare, stray animal rescue, and environmental sustainability across India with 100% financial transparency.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Section 8 Registered Organization • Zero Dividend Distribution</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={() => handleNavigate('home')} className="hover:text-amber-300 transition-colors">
                  • Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-amber-300 transition-colors">
                  • About Sulochana Foundation
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('projects')} className="hover:text-amber-300 transition-colors">
                  • Initiatives & Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('project-healthcare')} className="hover:text-amber-300 transition-colors pl-2 text-slate-400">
                  - Healthcare & Patient Care
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('project-environment')} className="hover:text-amber-300 transition-colors pl-2 text-slate-400">
                  - Environment & Animals
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('project-education')} className="hover:text-amber-300 transition-colors pl-2 text-slate-400">
                  - Child Education
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('project-social-welfare')} className="hover:text-amber-300 transition-colors pl-2 text-slate-400">
                  - Women Empowerment
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="hover:text-amber-300 transition-colors">
                  • Contact Us & CSR Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & Action (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Subscribe to receive updates on upcoming free medical camps, community blood drives, and tree plantation events across Mumbai.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-700 text-xs text-amber-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Thank you! You will receive our periodic activity reports.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input 
                  type="email"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl focus:outline-none focus:border-amber-400 text-white placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl shrink-0 transition-colors shadow"
                >
                  Join
                </button>
              </form>
            )}

            <div className="pt-3">
              <button
                onClick={openSupportModal}
                className="w-full py-3 px-4 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-slate-950" />
                <span>Support Sulochana Foundation</span>
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & MEMORIAL NOTE */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} Sulochana Foundation. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Incorporated under Section 8 of the Companies Act, 2013 | Registered Office: Parel, Mumbai 400012, India.
            </p>
          </div>

          <div className="text-[11px] text-amber-300 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>In Sacred Memory of Late Smt. Sulochana Dhaku Jadhav</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
