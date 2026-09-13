import React, { useState } from 'react';
import { 
  HeartPulse, Trees, GraduationCap, HandHeart, 
  ArrowRight, Search, CheckCircle2, Heart, Sparkles 
} from 'lucide-react';
import { foundationData } from '../data/foundationData';

export default function ProjectsOverview({ setCurrentView, setSelectedProjectModal, openSupportModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { id: 'all', label: 'All Initiatives' },
    { id: 'healthcare', label: 'Healthcare & Patient Welfare' },
    { id: 'environment', label: 'Environment & Animals' },
    { id: 'education', label: 'Child Education' },
    { id: 'social-welfare', label: 'Women Empowerment' },
  ];

  const filteredPillars = foundationData.corePillars.filter(pillar => {
    const matchesFilter = activeFilter === 'all' || pillar.id === activeFilter;
    const matchesSearch = 
      pillar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pillar.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pillar.subcategories.some(sub => 
        sub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.focusAreas.some(fa => fa.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesFilter && matchesSearch;
  });

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-4 h-4 text-rose-600" />;
      case 'Trees': return <Trees className="w-4 h-4 text-emerald-600" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-sky-600" />;
      case 'HandHeart': return <HandHeart className="w-4 h-4 text-amber-600" />;
      default: return <Heart className="w-4 h-4 text-peace-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-800" id="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER (Clean, Light & Peaceful) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-peace-50 text-peace-800 text-xs font-bold tracking-wider uppercase mb-3 border border-peace-200">
            <Sparkles className="w-3.5 h-3.5 text-sun-600" />
            <span>Our 4 Domains of Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 mt-1 tracking-tight">
            Grassroots Programs Delivering Measurable Change
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peace-600 to-sun-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore our core focus areas across Mumbai and Maharashtra. Click on any initiative to view in-depth subcategories, volunteer operations, and field reports.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  activeFilter === tab.id
                    ? 'bg-teal-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search e.g. blood camps, computer lab, tree..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-800"
            />
          </div>

        </div>

        {/* CARDS GRID (CLEARLY VISIBLE ASSET IMAGES, CLEAN LIGHT CARDS) */}
        {filteredPillars.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 max-w-lg mx-auto">
            <p className="text-slate-500 font-medium">No initiatives found matching "{searchQuery}".</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="mt-3 text-xs font-bold text-teal-800 hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPillars.map(pillar => (
              <div 
                key={pillar.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-teal-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Cover: CLEARLY VISIBLE ASSET IMAGE WITH NATURAL BRIGHT LIGHTING */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = pillar.image;
                      }}
                    />
                    
                    {/* Domain Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 font-bold text-xs shadow-md border border-slate-200">
                        {getPillarIcon(pillar.icon)}
                        <span>{pillar.title}</span>
                      </span>
                    </div>

                    {/* Bottom subtle title bar */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-4 text-white">
                      <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                        {pillar.tagline}
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold font-sans text-white mt-0.5">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.shortDesc}
                    </p>

                    {/* Subcategories List */}
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                        <span>Core Action Areas ({pillar.subcategories.length})</span>
                        <span className="text-teal-700 font-bold text-[11px]">Field Active</span>
                      </h4>
                      <div className="space-y-2">
                        {pillar.subcategories.map(sub => (
                          <div 
                            key={sub.title}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="font-bold text-slate-900">{sub.title}</strong>
                              <p className="text-xs text-slate-500 mt-0.5">{sub.summary}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 sm:px-7 sm:py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setCurrentView(`project-${pillar.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-950 transition-colors"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-4 h-4 text-amber-600" />
                  </button>

                  <button
                    onClick={() => setSelectedProjectModal(pillar)}
                    className="px-3.5 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm transition-all"
                  >
                    Quick Summary
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* BOTTOM CSR COLLABORATION BANNER */}
        <div className="mt-16 bg-gradient-to-r from-teal-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-800">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Corporate Social Responsibility (CSR)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-white mt-1">
              Partner With Us for Compliant CSR Initiatives
            </h3>
            <p className="text-sm text-slate-200 mt-2 leading-relaxed font-normal">
              We collaborate with corporate partners and philanthropic institutions under Schedule VII of the Companies Act, 2013, providing geotagged field reports, baseline surveys, and end-to-end transparent project execution.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 shadow-lg border border-amber-300 transition-all"
            >
              Contact CSR Desk
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
