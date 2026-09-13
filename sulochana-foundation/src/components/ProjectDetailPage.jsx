import React from 'react';
import { 
  ArrowLeft, CheckCircle2, Heart, HeartPulse, Trees, 
  GraduationCap, HandHeart, Sparkles, ArrowRight 
} from 'lucide-react';
import { foundationData } from '../data/foundationData';

export default function ProjectDetailPage({ projectId, setCurrentView, openSupportModal }) {
  const pillar = foundationData.corePillars.find(p => p.id === projectId) || foundationData.corePillars[0];

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-8 h-8 text-rose-600" />;
      case 'Trees': return <Trees className="w-8 h-8 text-emerald-600" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-sky-600" />;
      case 'HandHeart': return <HandHeart className="w-8 h-8 text-amber-600" />;
      default: return <Heart className="w-8 h-8 text-peace-600" />;
    }
  };

  const otherPillars = foundationData.corePillars.filter(p => p.id !== pillar.id);

  return (
    <div className="bg-surface-50 min-h-screen text-slate-800 pb-20">
      
      {/* 1. DOMAIN PAGE HERO BANNER (LIGHT & CLEAR ASSET IMAGE) */}
      <div className="bg-white border-b border-slate-200 pt-8 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs & Back Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <button 
              onClick={() => {
                setCurrentView('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-peace-700 hover:text-peace-900 font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Initiatives</span>
            </button>
            <span>/</span>
            <span className="text-slate-400">Initiatives</span>
            <span>/</span>
            <span className="text-slate-800">{pillar.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text Information */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-peace-100 text-peace-800 text-xs font-bold uppercase tracking-wider mb-3 border border-peace-200">
                <Sparkles className="w-3.5 h-3.5 text-sun-600" />
                <span>Dedicated Initiative Pillar</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold font-sans text-slate-900 tracking-tight leading-tight">
                {pillar.title}
              </h1>
              <p className="text-base sm:text-lg text-sun-700 font-bold mt-1">
                {pillar.tagline}
              </p>

              <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
                {pillar.shortDesc}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={openSupportModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-gradient-to-r from-sun-400 to-amber-300 hover:from-sun-500 hover:to-amber-400 shadow-md hover:shadow-sun-glow transition-all"
                >
                  <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>Support This Initiative</span>
                </button>

                <button
                  onClick={() => {
                    setCurrentView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
                >
                  <span>Partner with CSR Desk</span>
                </button>
              </div>
            </div>

            {/* Right Column: CLEARLY VISIBLE ASSET IMAGE */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 h-64 sm:h-80">
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = pillar.image;
                  }}
                />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. SUBCATEGORIES IN-DEPTH BREAKDOWN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft-card border border-slate-200">
          
          <div className="border-b border-slate-200 pb-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold font-sans text-slate-900">
                Core Focus Programs & Operations
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                Detailed scope of ongoing activities carried out under this pillar.
              </p>
            </div>
            <span className="px-3.5 py-1.5 bg-peace-50 text-peace-800 text-xs font-bold rounded-xl border border-peace-200">
              {pillar.subcategories.length} Specialized Programs Active
            </span>
          </div>

          {/* Grid of Subcategories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {pillar.subcategories.map((sub, index) => (
              <div 
                key={sub.title}
                className="rounded-2xl p-6 sm:p-7 bg-surface-50 border border-slate-200 hover:border-peace-400 hover:shadow-soft-card transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-peace-700 text-white flex items-center justify-center font-black text-xs">
                    0{index + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-sans text-slate-900">
                    {sub.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                  {sub.summary}
                </p>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-peace-900 mb-2">
                    Field Scope & Key Actions:
                  </h4>
                  <ul className="space-y-1.5">
                    {sub.focusAreas.map(fa => (
                      <li key={fa} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{fa}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 3. EXPLORE OTHER PILLARS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold font-sans text-slate-900">
            Explore Other Core Initiatives
          </h3>
          <p className="text-xs text-slate-500 mt-1">Discover how Sulochana Foundation serves across diverse domains.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherPillars.map(other => (
            <div 
              key={other.id}
              onClick={() => {
                setCurrentView(`project-${other.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer bg-white p-5 rounded-2xl border border-slate-200 hover:border-peace-400 shadow-sm hover:shadow-soft-card transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-peace-800 uppercase tracking-wide">
                  {other.title}
                </span>
                <p className="text-xs text-slate-500 mt-0.5">{other.tagline}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-peace-800 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
