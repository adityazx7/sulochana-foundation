import React from 'react';
import { 
  ArrowRight, Heart, Sparkles, 
  GraduationCap, HeartPulse, Trees, HandHeart, 
  Users, CheckCircle2 
} from 'lucide-react';
import { foundationData } from '../data/foundationData';

export default function Hero({ setCurrentView, openSupportModal }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TRUST BADGE (Clean & Peaceful) */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-teal-900 text-xs sm:text-sm font-bold shadow-md border border-teal-200">
            <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
            <span>Dedicated to Public Welfare & Community Upliftment</span>
          </div>
        </div>

        {/* HERO MAIN INTRO */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-slate-900 leading-tight sm:leading-tight">
            Together, We Bring Hope <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 bg-clip-text text-transparent">
              Where It’s Needed Most
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Sulochana Foundation is committed to creating positive social change in healthcare, education, environmental sustainability, and women empowerment across India.
          </p>

          {/* ACTION BUTTONS (Bright, High Contrast) */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => {
                setCurrentView('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 rounded-xl shadow-md border border-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Initiatives</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              onClick={openSupportModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-teal-800 hover:bg-teal-900 rounded-xl shadow-md border border-teal-900 transition-all transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>Support Our Cause</span>
            </button>

            <button
              onClick={() => {
                setCurrentView('founders');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-800 hover:text-teal-900 bg-white hover:bg-teal-50 border-2 border-slate-300 hover:border-teal-700 rounded-xl shadow-sm transition-all"
            >
              <span>Meet Our Founders</span>
            </button>
          </div>
        </div>

        {/* 1. HERO FEATURED MAIN ASSET IMAGE (CRYSTAL CLEAR) */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
            <img 
              src="/assets/main_page_bg.png" 
              alt="Sulochana Foundation Initiatives Banner" 
              className="w-full h-72 sm:h-96 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "assets/main_page_bg.png";
              }}
            />
            {/* Bottom info overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sun-500 text-slate-950 text-xs font-black uppercase tracking-wider mb-2">
                  Grassroots Community Service
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
                  Serving People, Educating Youth & Protecting Nature
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
                  Dedicated blood donation drives, admission support, farmer guidance, and women empowerment.
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentView('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="shrink-0 px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow transition-colors"
              >
                View All Projects →
              </button>
            </div>
          </div>
        </div>

        {/* 3. 4 CORE INITIATIVE CARDS (PROMINENT, VISIBLE ASSET IMAGES) */}
        <div className="mt-14">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-xs uppercase tracking-widest text-teal-900 font-extrabold">
              Our 4 Core Focus Areas
            </span>
            <div className="h-px w-12 bg-slate-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Pillar 1: Healthcare */}
            <div 
              onClick={() => {
                setCurrentView('project-healthcare');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-teal-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img 
                  src="/assets/health_bg.jpg" 
                  alt="Healthcare Initiatives" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/health_bg.jpg";
                  }}
                />
                <span className="absolute top-3 left-3 bg-white/95 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
                  <span>Healthcare</span>
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-sans">
                  Blood Camps & Health Check-ups
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Voluntary blood donation camps and free multi-specialty health check-ups for communities.
                </p>
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-teal-950">
                  <span>Explore Healthcare</span>
                  <span className="text-amber-600">→</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: Education */}
            <div 
              onClick={() => {
                setCurrentView('project-education');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-teal-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img 
                  src="/assets/edu_bg.jpg" 
                  alt="Education Initiatives" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/edu_bg.jpg";
                  }}
                />
                <span className="absolute top-3 left-3 bg-white/95 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                  <span>Education</span>
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-sans">
                  Admissions, Books & Exam Support
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  10th/12th admission guidance, book & notebook distribution, and competitive exam coaching.
                </p>
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-teal-950">
                  <span>Explore Education</span>
                  <span className="text-amber-600">→</span>
                </div>
              </div>
            </div>

            {/* Pillar 3: Environment */}
            <div 
              onClick={() => {
                setCurrentView('project-environment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-teal-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img 
                  src="/assets/env_bg.jpg" 
                  alt="Environment Initiatives" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/env_bg.jpg";
                  }}
                />
                <span className="absolute top-3 left-3 bg-white/95 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200 flex items-center gap-1.5">
                  <Trees className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Environment</span>
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-sans">
                  Tree Plantation & Farmer Guidance
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Native tree plantations, guidance to farmers, and technology support for sustainable growth.
                </p>
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-teal-950">
                  <span>Explore Environment</span>
                  <span className="text-amber-600">→</span>
                </div>
              </div>
            </div>

            {/* Pillar 4: Social Welfare */}
            <div 
              onClick={() => {
                setCurrentView('project-social-welfare');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-teal-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img 
                  src="/assets/social_bg.jpg" 
                  alt="Social Welfare Initiatives" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/social_bg.jpg";
                  }}
                />
                <span className="absolute top-3 left-3 bg-white/95 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200 flex items-center gap-1.5">
                  <HandHeart className="w-3.5 h-3.5 text-amber-600" />
                  <span>Social Welfare</span>
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-sans">
                  Govt Schemes & Women Empowerment
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Facilitation of government welfare schemes and dedicated women vocational empowerment.
                </p>
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-teal-950">
                  <span>Explore Social Welfare</span>
                  <span className="text-amber-600">→</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
