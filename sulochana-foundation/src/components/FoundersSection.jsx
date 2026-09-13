import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Briefcase, Award, BookOpen, 
  Sparkles, ChevronLeft, ChevronRight, CheckCircle2, UserCheck
} from 'lucide-react';
import { foundationData } from '../data/foundationData';

export default function FoundersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const founders = foundationData.founders;

  // Auto-moving card timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % founders.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, founders.length]);

  const nextFounder = () => {
    setActiveIndex((prev) => (prev + 1) % founders.length);
  };

  const prevFounder = () => {
    setActiveIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 relative overflow-hidden" id="founders-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold tracking-wider uppercase mb-3 border border-teal-300">
            <UserCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight">
            Meet Our Esteemed Founders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Guided by distinguished academicians, researchers, and community leaders dedicated to lifelong education, rural transformation, and social empowerment.
          </p>
        </div>

        {/* 1. INTERACTIVE MOVING CARDS CAROUSEL */}
        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              {founders.map((founder, idx) => (
                <button
                  key={founder.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeIndex === idx
                      ? 'bg-teal-800 text-white shadow-md ring-2 ring-teal-600'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {founder.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevFounder}
                className="w-10 h-10 rounded-xl bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-300 shadow-sm flex items-center justify-center transition-all"
                aria-label="Previous Founder"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextFounder}
                className="w-10 h-10 rounded-xl bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-300 shadow-sm flex items-center justify-center transition-all"
                aria-label="Next Founder"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Founder Display Card with Smooth Motion */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border-2 border-slate-200 transition-all duration-500">
            
            {/* Founder 1 Card */}
            {activeIndex === 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
                
                {/* Left Column: Photo in Circular Format & Properly Positioned Tag */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-teal-600 via-emerald-400 to-amber-400 shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-100">
                      <img 
                        src="/assets/founder1.png" 
                        alt="Dr. Kunal Jadhav" 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "assets/founder1.png";
                        }}
                      />
                    </div>
                  </div>

                  {/* Clean, perfectly aligned tag */}
                  <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-100 text-teal-900 border border-teal-300 text-xs font-extrabold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                    <span>Founder & Trustee</span>
                  </div>

                  <h3 className="mt-3 text-xl sm:text-2xl font-bold font-sans text-slate-900">
                    Dr. Kunal Jadhav
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-800 font-bold mt-1">
                    Professor, DLLE, University of Mumbai
                  </p>
                </div>

                {/* Right Column: Detailed Academic & Teaching Experience */}
                <div className="lg:col-span-8 space-y-4">
                  
                  <div className="p-5 bg-teal-50/80 rounded-2xl border border-teal-200">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-950 uppercase tracking-wider mb-2.5">
                      <GraduationCap className="w-4 h-4 text-teal-700" />
                      <span>Academic Qualifications & Degrees</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {founders[0].qualifications.map((qual) => (
                        <span 
                          key={qual}
                          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 bg-white text-slate-800 rounded-xl border border-slate-200 shadow-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span>{qual}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>Academic & Social Leadership</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      Professor at the Department of Lifelong Learning and Extension (DLLE), University of Mumbai. Dedicated to fostering grassroots learning, rural development strategies, student mentorship, and community empowerment initiatives.
                    </p>
                  </div>

                </div>

              </div>
            )}

            {/* Founder 2 Card */}
            {activeIndex === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
                
                {/* Left Column: Photo in Circular Format & Properly Positioned Tag */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-teal-500 shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-100">
                      <img 
                        src="/assets/founder2.png" 
                        alt="Dr. Ragini Jadhav" 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "assets/founder2.png";
                        }}
                      />
                    </div>
                  </div>

                  {/* Clean, perfectly aligned tag */}
                  <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-extrabold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                    <span>Co-Founder & Trustee</span>
                  </div>

                  <h3 className="mt-3 text-xl sm:text-2xl font-bold font-sans text-slate-900">
                    Dr. Ragini Jadhav
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-800 font-bold mt-1">
                    Academician & Research Scholar
                  </p>
                </div>

                {/* Right Column: Detailed Qualifications, Teaching & Experience */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* Education Grid */}
                  <div className="p-5 bg-amber-50/80 rounded-2xl border border-amber-200">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-950 uppercase tracking-wider mb-2.5">
                      <GraduationCap className="w-4 h-4 text-amber-700" />
                      <span>Educational Background</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {founders[1].education.map((edu) => (
                        <span 
                          key={edu}
                          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 bg-white text-slate-800 rounded-xl border border-slate-200 shadow-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{edu}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Teaching & Industry Exposure */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase mb-1">
                        <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                        <span>Teaching Experience</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        3 years teaching experience in UG College and University Departments.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase mb-1">
                        <Briefcase className="w-3.5 h-3.5 text-teal-700" />
                        <span>Industry Exposure</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        7 years administrative experience in Academic Research, Management and Development.
                      </p>
                    </div>
                  </div>

                  {/* Academic Affiliation */}
                  <div className="p-4 bg-teal-50/70 rounded-2xl border border-teal-200 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-bold text-teal-950 uppercase">
                        Academic Affiliation & Research
                      </strong>
                      <p className="text-xs text-slate-700 mt-0.5 font-medium">
                        Research Associate for various research projects at National and International level.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            )}

          </div>

          {/* Continuous Auto-slide Indicator dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {founders.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-teal-800' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to founder ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
