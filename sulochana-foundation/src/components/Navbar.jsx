import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Heart, ChevronDown, Sparkles, HandHeart
} from 'lucide-react';
import { foundationData } from '../data/foundationData';

export default function Navbar({ currentView, setCurrentView, openSupportModal, openVolunteerModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', view: 'home' },
    { label: 'ABOUT US', view: 'about' },
    { 
      label: 'INITIATIVES & PROJECTS', 
      view: 'projects',
      hasDropdown: true,
      subItems: [
        { label: 'All Projects Overview', view: 'projects' },
        { label: 'Healthcare Initiatives', view: 'project-healthcare' },
        { label: 'Environment & Farmer Support', view: 'project-environment' },
        { label: 'Child Education & Admissions', view: 'project-education' },
        { label: 'Social Welfare & Women', view: 'project-social-welfare' },
      ]
    },
    { label: 'FOUNDERS', view: 'founders' },
    { label: 'OUR IMPACT', view: 'impact' },
    { label: 'CONTACT US', view: 'contact' },
  ];

  const handleNavigate = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. MAIN BRAND HEADER (Clean White with Peaceful Emerald & Gold Branding) */}
      <header className="bg-white text-slate-900 py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-100 shadow-sm relative z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LEFT: Official Logo & Title */}
          <div 
            onClick={() => handleNavigate('home')} 
            className="flex items-center gap-3.5 sm:gap-4 cursor-pointer group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1 shadow-md border-2 border-peace-100 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
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
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight font-sans text-slate-900 group-hover:text-peace-700 transition-colors">
                SULOCHANA FOUNDATION
              </div>
              <p className="text-[11px] sm:text-xs text-peace-700 font-semibold tracking-wider uppercase mt-0.5">
                Parel Mumbai 12 • Serving Society Across India
              </p>
            </div>
          </div>

          {/* RIGHT: Memorial Photo with Clear Golden Ring (Using owner.png) */}
          <div 
            onClick={() => handleNavigate('about')}
            className="flex items-center gap-3.5 cursor-pointer group"
            title="Late Smt. Sulochana Dhaku Jadhav"
          >
            <div className="hidden md:flex flex-col text-right">
              <span className="text-xs font-bold text-sun-800 tracking-wide flex items-center justify-end gap-1">
                Eternal Inspiration
                <Sparkles className="w-3 h-3 text-sun-600" />
              </span>
              <span className="text-[11px] text-slate-600 font-medium">
                Late Smt. Sulochana Dhaku Jadhav
              </span>
            </div>

            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-sun-500 via-amber-300 to-yellow-400 memorial-gold-ring transition-transform duration-200 group-hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100">
                  <img 
                    src="/assets/owner.png" 
                    alt="Late Smt. Sulochana Dhaku Jadhav" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "assets/owner.png";
                    }}
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 bg-sun-500 text-slate-900 p-0.5 rounded-full text-[9px] font-bold shadow">
                ★
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* 2. STICKY NAVIGATION BAR (Light, Clean, High Contrast) */}
      <nav className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-peace-200' 
          : 'bg-white shadow-sm py-3 border-b border-slate-200/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mini Logo Brand (Appears when scrolled) */}
          <div 
            onClick={() => handleNavigate('home')} 
            className={`flex items-center gap-2.5 cursor-pointer transition-opacity duration-200 ${
              isScrolled ? 'opacity-100' : 'opacity-0 lg:opacity-100'
            }`}
          >
            <img 
              src="/assets/logo.png" 
              alt="Sulochana Mini Logo" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "assets/logo.png";
              }}
            />
            <span className="font-extrabold text-sm text-slate-900 hidden md:inline tracking-tight">
              SULOCHANA FOUNDATION
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentView === item.view || (item.hasDropdown && currentView.startsWith('project-'));
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setProjectsDropdownOpen(true)}
                    onMouseLeave={() => setProjectsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavigate(item.view)}
                      className={`flex items-center gap-1 px-4 py-2 text-xs font-bold tracking-wide rounded-xl transition-all duration-150 ${
                        isActive 
                          ? 'bg-teal-800 text-white shadow-sm' 
                          : 'text-slate-700 hover:text-teal-900 hover:bg-teal-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                    </button>

                    {/* Dropdown Menu */}
                    {projectsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 z-50 animate-fadeIn">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.view}
                            onClick={() => handleNavigate(sub.view)}
                            className={`w-full text-left px-5 py-2.5 text-xs font-bold tracking-wide transition-colors flex items-center justify-between ${
                              currentView === sub.view 
                                ? 'bg-teal-50 text-teal-900 border-l-4 border-teal-800' 
                                : 'text-slate-700 hover:bg-slate-50 hover:text-teal-900'
                            }`}
                          >
                            <span>{sub.label}</span>
                            <span className="text-teal-700 text-xs font-bold">→</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.view)}
                  className={`px-4 py-2 text-xs font-bold tracking-wide rounded-xl transition-all duration-150 ${
                    isActive 
                      ? 'bg-teal-800 text-white shadow-sm' 
                      : 'text-slate-700 hover:text-teal-900 hover:bg-teal-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action CTAs: Volunteer & Support */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={openVolunteerModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wide text-teal-950 bg-teal-50 hover:bg-teal-100 border border-teal-300 rounded-xl transition-all shadow-sm"
            >
              <HandHeart className="w-3.5 h-3.5 text-teal-700" />
              <span>Volunteer</span>
            </button>

            <button
              onClick={openSupportModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold tracking-wide text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 rounded-xl shadow-md border border-amber-300 transition-all transform hover:-translate-y-0.5"
            >
              <Heart className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>SUPPORT US</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-900" /> : <Menu className="w-6 h-6 text-teal-900" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 border-t border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleNavigate(item.view)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-between ${
                      currentView === item.view 
                        ? 'bg-peace-700 text-white' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>

                  {/* Sub-items in mobile */}
                  {item.hasDropdown && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl mt-1 border border-slate-100">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.view}
                          onClick={() => handleNavigate(sub.view)}
                          className={`w-full text-left px-3 py-2 text-xs rounded-lg font-bold transition-colors ${
                            currentView === sub.view 
                              ? 'text-peace-900 font-extrabold bg-peace-100' 
                              : 'text-slate-600 hover:text-peace-800'
                          }`}
                        >
                          • {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-200 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openVolunteerModal();
                  }}
                  className="w-full py-2.5 px-3 text-xs font-bold text-peace-900 bg-peace-50 border border-peace-200 rounded-xl text-center"
                >
                  Volunteer
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openSupportModal();
                  }}
                  className="w-full py-2.5 px-3 text-xs font-bold text-slate-900 bg-sun-400 hover:bg-sun-500 rounded-xl text-center shadow"
                >
                  Support Cause
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
