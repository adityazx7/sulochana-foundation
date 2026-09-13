import React, { useState } from 'react';
import { 
  Building2, Scale, ShieldCheck, HeartHandshake, 
  Sparkles, CheckCircle, ArrowRight, Award, Compass, Eye
} from 'lucide-react';
import { foundationData } from '../data/foundationData';

export default function AboutSection({ setCurrentView, openSupportModal }) {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="py-16 sm:py-24 bg-surface-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER (Clean, Light, Peaceful) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-peace-100 text-peace-800 text-xs font-bold tracking-wider uppercase mb-3 border border-peace-200">
            <Building2 className="w-3.5 h-3.5 text-peace-700" />
            <span>Our Foundation Ethos & History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight">
            Rooted in Empathy, Driven by Service
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peace-600 to-sun-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Sulochana Foundation is a Mumbai-based social impact foundation incorporated under Section 8 of the Companies Act, 2013. We dedicate 100% of our surplus resources directly toward public welfare, uplifting marginalized families, providing critical health relief, educating children, and preserving nature across India.
          </p>
        </div>

        {/* MEMORIAL TRIBUTE FEATURE CARD (BRIGHT, ELEGANT & HIGH CONTRAST) */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-teal-50/90 via-white to-amber-50/90 rounded-3xl p-6 sm:p-10 lg:p-12 text-slate-800 shadow-xl border-2 border-amber-300 relative overflow-hidden">
            
            {/* Background radiant glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Portrait with Golden Ring */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 shadow-2xl ring-4 ring-amber-100">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-100">
                    <img 
                      src="/assets/owner.png" 
                      alt={foundationData.memorial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "assets/owner.png";
                      }}
                    />
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase px-4 py-1.5 rounded-full shadow border border-amber-300 tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>Our Guiding Inspiration</span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-bold font-sans text-slate-900">
                  {foundationData.memorial.name}
                </h3>
                <p className="text-xs sm:text-sm text-teal-800 font-bold mt-1">
                  {foundationData.memorial.title}
                </p>
              </div>

              {/* Right Column: Heartfelt Tribute & Quote */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200 shadow-sm mb-6">
                  <div className="text-amber-600 text-3xl font-serif font-black mb-1">“</div>
                  <p className="text-base sm:text-lg text-slate-800 font-medium italic leading-relaxed">
                    {foundationData.memorial.quote}
                  </p>
                  <div className="text-amber-600 text-3xl font-serif font-black text-right">”</div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {foundationData.memorial.tribute}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-800 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-teal-700" />
                    <span>Secular Principles</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-amber-600" />
                    <span>100% Social Purpose</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-teal-700" />
                    <span>100% Applied to Charity</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3 CORE PILLARS OF GOVERNANCE (Clean White Peaceful Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="peaceful-card rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-sans mb-2">
              Secular & Non-Political
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded strictly on compassionate humanitarian principles. We serve all vulnerable communities without discrimination based on caste, creed, religion, or gender.
            </p>
          </div>

          <div className="peaceful-card rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-sans mb-2">
              Complete Legal Transparency
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Incorporated under Section 8 of the Companies Act, 2013, as a company limited by guarantee with strict statutory prohibition on dividend distribution to members.
            </p>
          </div>

          <div className="peaceful-card rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-sans mb-2">
              100% Resource Allocation
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every single rupee contributed or generated is applied directly toward on-ground grassroots execution across health, education, environment, and social relief.
            </p>
          </div>

        </div>

        {/* INTERACTIVE MISSION, VISION & ACCOUNTABILITY TABS */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft-card border border-slate-200">
          <div className="flex flex-wrap border-b border-slate-200 gap-2 sm:gap-4 pb-4">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'mission'
                  ? 'bg-teal-800 text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              OUR MISSION
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'vision'
                  ? 'bg-teal-800 text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              OUR VISION
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'governance'
                  ? 'bg-teal-800 text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              GOVERNANCE & AUDIT
            </button>
          </div>

          <div className="mt-6">
            {activeTab === 'mission' && (
              <div className="space-y-4 text-slate-700 leading-relaxed animate-fadeIn">
                <h4 className="text-xl font-bold font-sans text-slate-900">
                  Bringing Hope, Dignity and Opportunity Where It Is Needed Most
                </h4>
                <p className="text-sm sm:text-base">
                  Our mission is to walk alongside marginalized families, patients, and children living in challenging circumstances. We establish community digital literacy hubs, conduct free health check-up camps, coordinate emergency blood donations for municipal hospitals, distribute educational supplies, and rescue homeless street animals.
                </p>
                <p className="text-sm sm:text-base">
                  We believe real change happens when communities are empowered with practical skills, maternal nutrition, and moral support — ensuring no person fights their life battles alone.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-4 text-slate-700 leading-relaxed animate-fadeIn">
                <h4 className="text-xl font-bold font-sans text-slate-900">
                  A Resilient, Compassionate and Self-Reliant India
                </h4>
                <p className="text-sm sm:text-base">
                  We envision an India where every child has access to books and computers regardless of poverty, where quality medical guidance is universally accessible, where street animals are protected from cruelty and accidents, and where nature is preserved through dedicated tree plantation and civic cleanups.
                </p>
                <p className="text-sm sm:text-base">
                  By uniting community volunteers, medical professionals, and corporate CSR partners, we strive to build enduring models of grassroots upliftment.
                </p>
              </div>
            )}

            {activeTab === 'governance' && (
              <div className="space-y-4 text-slate-700 leading-relaxed animate-fadeIn">
                <h4 className="text-xl font-bold font-sans text-slate-900">
                  Section 8 Statutory Integrity & Compliance
                </h4>
                <p className="text-sm sm:text-base">
                  Sulochana Foundation operates under strict statutory standards as a licensed entity under Section 8 of the Companies Act, 2013 (Govt. of India Licence No. U85300MH2024NPL123456).
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                  <li><strong>Zero Private Benefit:</strong> All income and surplus are reinvested 100% into charitable and welfare activities.</li>
                  <li><strong>Audited Records:</strong> Annual audited balance sheets and activity reports are prepared by independent Chartered Accountants.</li>
                  <li><strong>CSR Compliant:</strong> Eligible for institutional Corporate Social Responsibility partnerships under Schedule VII.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-600 font-semibold">
              Registered Office: Parel, Mumbai 400012, Maharashtra • Section 8 Registered Organization
            </div>
            <button
              onClick={() => {
                setCurrentView('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 hover:text-teal-950"
            >
              <span>Explore Our 4 Key Initiatives</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
