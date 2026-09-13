import React, { useState } from 'react';
import { 
  Sparkles, Heart, Check, BookOpen, Stethoscope, 
  Sprout, Award, ChevronRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { foundationData } from '../data/foundationData';

export default function ImpactCalculator({ openSupportModal }) {
  const [selectedAmount, setSelectedAmount] = useState(1200);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#0d9488', '#f59e0b', '#10b981']
    });
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) {
      setSelectedAmount(parseInt(val, 10));
      setIsCustom(true);
    }
  };

  const getImpactDescription = (amount) => {
    if (amount < 800) {
      return `Funds comprehensive school kits & textbooks for ${Math.max(1, Math.floor(amount / 500))} underprivileged student(s) in Mumbai.`;
    } else if (amount < 2000) {
      return `Provides doctor consultations, blood sugar diagnostics, and 1-month essential medicines for ${Math.max(1, Math.floor(amount / 600))} elderly patient(s).`;
    } else if (amount < 4000) {
      return `Enables planting and 3-year care for ${Math.max(5, Math.floor(amount / 165))} native biodiversity saplings with protective tree guards.`;
    } else {
      return `Supplies a complete sewing machine kit or digital computer unit, granting sustainable livelihood to a marginalized mother.`;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-surface-50 text-slate-800" id="impact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER (Clean, Light & Peaceful) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sun-100 text-sun-900 text-xs font-bold tracking-wider uppercase mb-3 border border-sun-200">
            <Sparkles className="w-3.5 h-3.5 text-sun-600" />
            <span>Direct Tangible Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight">
            See Your Generosity at Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peace-600 to-sun-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every contribution touches lives directly on the ground. Calculate the tangible change your support brings to our community.
          </p>
        </div>

        {/* CALCULATOR INTERACTIVE CARD */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-soft-card border border-slate-200">
          
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 text-center sm:text-left">
              Select a Contribution Tier (INR ₹)
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {foundationData.impactCalculatorTiers.map(tier => {
                const isSelected = !isCustom && selectedAmount === tier.amount;
                return (
                  <button
                    key={tier.amount}
                    onClick={() => handleSelectAmount(tier.amount)}
                    className={`relative p-4 rounded-2xl border-2 text-center transition-all duration-150 ${
                      isSelected
                        ? 'border-peace-600 bg-peace-50 text-peace-950 shadow-md scale-105'
                        : 'border-slate-200 bg-surface-50 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    {tier.tag && (
                      <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm ${
                        isSelected ? 'bg-sun-500 text-slate-950' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {tier.tag}
                      </span>
                    )}
                    <div className={`text-xl sm:text-2xl font-extrabold font-sans ${isSelected ? 'text-peace-800' : 'text-slate-900'}`}>
                      ₹{tier.amount.toLocaleString()}
                    </div>
                    <div className={`text-xs mt-1 font-semibold ${isSelected ? 'text-peace-800' : 'text-slate-600'}`}>
                      {tier.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Input */}
            <div className="mt-5 flex items-center justify-center sm:justify-start gap-3">
              <span className="text-xs font-bold text-slate-600">Or enter a custom amount:</span>
              <div className="relative w-44">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">₹</span>
                <input 
                  type="text"
                  placeholder="e.g. 3000"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="w-full pl-7 pr-3 py-1.5 text-xs font-bold bg-surface-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peace-600"
                />
              </div>
            </div>
          </div>

          {/* DYNAMIC IMPACT DISPLAY BOX (Peaceful Emerald & Gold) */}
          <div className="bg-gradient-to-r from-peace-800 to-peace-900 rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-peace-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sun-400 text-slate-950 flex items-center justify-center shrink-0 shadow-sun-glow">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-sun-300 font-bold">
                  On-Ground Grassroots Outcome:
                </div>
                <div className="text-base sm:text-lg font-bold font-sans text-white mt-1 leading-snug">
                  {getImpactDescription(selectedAmount)}
                </div>
                <div className="text-xs text-slate-200 mt-2 flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-sun-400" />
                  <span>100% applied to charity • Section 8 Foundation Receipt</span>
                </div>
              </div>
            </div>

            <button
              onClick={openSupportModal}
              className="w-full md:w-auto px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-sun-400 via-amber-300 to-yellow-400 hover:from-sun-500 hover:to-amber-400 shadow-md hover:shadow-sun-glow transition-all shrink-0 flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-slate-950" />
              <span>Pledge ₹{selectedAmount.toLocaleString()} Support</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
