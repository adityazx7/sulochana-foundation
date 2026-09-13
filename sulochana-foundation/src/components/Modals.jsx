import React, { useState } from 'react';
import { 
  X, Heart, ShieldCheck, CheckCircle2, Sparkles, 
  HandHeart, Building, ArrowRight, Award 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { foundationData } from '../data/foundationData';

export function SupportModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(1200);
  const [cause, setCause] = useState('Where Needed Most');
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', phone: '', pan: '' });

  if (!isOpen) return null;

  const handlePledge = (e) => {
    e.preventDefault();
    setStep(2);
    confetti({
      particleCount: 50,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#0d9488', '#f59e0b', '#10b981']
    });
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 text-peace-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Support Sulochana Foundation</span>
            </div>
            
            <h3 className="text-2xl font-extrabold font-sans text-slate-900">
              Pledge Your Generous Support
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-6">
              100% of your contribution directly serves needy patients, students, strays, and tree plantations.
            </p>

            <form onSubmit={handlePledge} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Select Contribution Tier
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[500, 1200, 2500, 5000].map(amt => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt)}
                      className={`py-2.5 text-xs font-bold rounded-xl border-2 transition-all ${
                        amount === amt 
                          ? 'bg-peace-50 text-peace-900 border-peace-600 shadow-sm scale-105' 
                          : 'bg-surface-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Designate Your Contribution To:
                </label>
                <select 
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600 font-medium"
                >
                  <option value="Where Needed Most">Where Needed Most (Highest Priority Urgent Relief)</option>
                  <option value="Healthcare: Blood Camps & Health Check-ups">Healthcare: Blood Donation Camps & Health Check-ups</option>
                  <option value="Education: Admission Support & Book Distribution">Education: 10th/12th Admission Support & Books</option>
                  <option value="Environment: Tree Plantation & Farmer Guidance">Environment: Tree Plantation & Farmer Guidance</option>
                  <option value="Social Welfare: Govt Scheme Welfare & Women">Social Welfare: Govt Scheme Welfare & Women Empowerment</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name"
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@example.com"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+91 98200 00000"
                  value={donorInfo.phone}
                  onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600"
                />
              </div>

              <div className="p-3 bg-peace-50 rounded-xl border border-peace-200 text-[11px] text-peace-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-peace-700 shrink-0 mt-0.5" />
                <span>
                  Section 8 registered foundation. Official contribution receipt and bank acknowledgement will be generated.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-sun-400 via-amber-300 to-yellow-400 hover:from-sun-500 hover:to-amber-400 rounded-xl shadow-md hover:shadow-sun-glow transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm Pledge of ₹{amount.toLocaleString()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-peace-100 text-peace-800 flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-2xl font-bold font-sans text-slate-900">
              Heartfelt Gratitude!
            </h4>
            
            <p className="text-xs sm:text-sm text-slate-700 mt-2 max-w-sm mx-auto leading-relaxed font-normal">
              Thank you, <strong className="text-slate-900">{donorInfo.name || 'Generous Friend'}</strong>, for pledging ₹{amount.toLocaleString()} toward <strong>{cause}</strong>.
            </p>

            <div className="mt-6 p-4 bg-surface-50 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 text-center uppercase tracking-wider text-[11px]">
                Official Section 8 Bank Details
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span>Account Name:</span>
                <strong className="text-slate-900 font-bold">SULOCHANA FOUNDATION</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span>Bank:</span>
                <span className="text-slate-800">State Bank of India / Parel Branch</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Account Type:</span>
                <span className="text-slate-800">Section 8 Current Charity A/C</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2.5 text-xs font-bold text-peace-800 bg-peace-100 hover:bg-peace-200 rounded-xl transition-colors"
            >
              Done / Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export function VolunteerModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', domain: 'Healthcare & Patient Welfare', hours: 'Weekends' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#0d9488', '#f59e0b', '#10b981']
    });
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 animate-fadeIn">
            <div className="w-14 h-14 mx-auto rounded-full bg-peace-100 text-peace-800 flex items-center justify-center mb-3 shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold font-sans text-slate-900">
              Welcome to Our Volunteer Family!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto">
              Thank you for dedicating your compassionate energy to Sulochana Foundation. Our volunteer coordinator will contact you within 48 hours.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-2 text-xs font-bold text-peace-900 bg-peace-50 border border-peace-200 rounded-xl"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-peace-800 text-xs font-bold uppercase tracking-wider mb-2">
              <HandHeart className="w-4 h-4 text-peace-700" />
              <span>Join as a Volunteer</span>
            </div>

            <h3 className="text-2xl font-extrabold font-sans text-slate-900">
              Volunteer With Sulochana Foundation
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-6">
              Give your time, skills, or professional medical/teaching expertise to uplift vulnerable communities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email *
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 98200 00000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Preferred Field of Action
                </label>
                <select
                  value={form.domain}
                  onChange={(e) => setForm({ ...form, domain: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600"
                >
                  <option value="Healthcare: Blood Donation Camps & Health Check-ups">Healthcare: Blood Donation Camps & Health Check-ups</option>
                  <option value="Education: 10th/12th Admission Support & Books">Education: 10th & 12th Admission Support, Books & Notebooks</option>
                  <option value="Environment: Tree Plantation & Farmer Guidance">Environment: Tree Plantation & Farmer Guidance</option>
                  <option value="Social Welfare: Govt Scheme Welfare & Women">Social Welfare: Govt Scheme Welfare & Women Empowerment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Availability
                </label>
                <select
                  value={form.hours}
                  onChange={(e) => setForm({ ...form, hours: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:border-peace-600"
                >
                  <option value="Weekends">Weekends Only (Saturday/Sunday)</option>
                  <option value="Weekdays">Weekdays Flexible</option>
                  <option value="Monthly Events">Periodic Monthly Health & Tree Camps</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 text-xs font-bold text-white bg-peace-700 hover:bg-peace-800 rounded-xl shadow transition-colors"
              >
                Submit Volunteer Application
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

export function ProjectQuickModal({ project, onClose, onOpenFullPage, onSupport }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-peace-800 text-xs font-bold uppercase tracking-wider mb-2">
          <span>Detailed Initiative Overview</span>
        </div>

        <h3 className="text-2xl font-bold font-sans text-slate-900">
          {project.title}
        </h3>
        <p className="text-xs text-sun-700 font-bold mb-4">
          {project.tagline}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {project.shortDesc}
        </p>

        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Included Field Programs:
          </h4>
          {project.subcategories.map(sub => (
            <div key={sub.title} className="p-3 bg-surface-50 rounded-xl border border-slate-200">
              <h5 className="text-sm font-bold text-slate-900 font-sans">{sub.title}</h5>
              <p className="text-xs text-slate-600 mt-0.5">{sub.summary}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenFullPage(project.id);
            }}
            className="text-xs font-bold text-peace-800 hover:text-peace-900 underline"
          >
            Open Full Dedicated Page →
          </button>

          <button
            onClick={() => {
              onClose();
              onSupport();
            }}
            className="px-5 py-2 text-xs font-bold text-slate-950 bg-sun-400 hover:bg-sun-500 rounded-xl shadow"
          >
            Support This Domain
          </button>
        </div>

      </div>
    </div>
  );
}
