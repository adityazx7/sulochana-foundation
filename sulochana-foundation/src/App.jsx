import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Phone, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FoundersSection from './components/FoundersSection';
import ProjectsOverview from './components/ProjectsOverview';
import ProjectDetailPage from './components/ProjectDetailPage';
import ImpactCalculator from './components/ImpactCalculator';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { SupportModal, VolunteerModal, ProjectQuickModal } from './components/Modals';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  // Hash router sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentView(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToView = (view) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top button visibility
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render view
  const renderContent = () => {
    // Dedicated project subpages
    if (currentView.startsWith('project-')) {
      const projectId = currentView.replace('project-', '');
      return (
        <ProjectDetailPage 
          projectId={projectId}
          setCurrentView={navigateToView}
          openSupportModal={() => setIsSupportModalOpen(true)}
        />
      );
    }

    switch (currentView) {
      case 'about':
        return (
          <>
            <AboutSection 
              setCurrentView={navigateToView} 
              openSupportModal={() => setIsSupportModalOpen(true)} 
            />
            <FoundersSection />
            <Testimonials />
          </>
        );

      case 'founders':
        return (
          <>
            <FoundersSection />
            <AboutSection 
              setCurrentView={navigateToView} 
              openSupportModal={() => setIsSupportModalOpen(true)} 
            />
          </>
        );

      case 'projects':
        return (
          <ProjectsOverview 
            setCurrentView={navigateToView} 
            setSelectedProjectModal={setSelectedProjectModal}
            openSupportModal={() => setIsSupportModalOpen(true)}
          />
        );

      case 'impact':
        return (
          <>
            <ImpactCalculator openSupportModal={() => setIsSupportModalOpen(true)} />
            <Testimonials />
          </>
        );

      case 'contact':
        return <ContactSection />;

      case 'home':
      default:
        return (
          <>
            <Hero 
              setCurrentView={navigateToView} 
              openSupportModal={() => setIsSupportModalOpen(true)} 
            />
            <AboutSection 
              setCurrentView={navigateToView} 
              openSupportModal={() => setIsSupportModalOpen(true)} 
            />
            <FoundersSection />
            <ProjectsOverview 
              setCurrentView={navigateToView} 
              setSelectedProjectModal={setSelectedProjectModal}
              openSupportModal={() => setIsSupportModalOpen(true)}
            />
            <ImpactCalculator openSupportModal={() => setIsSupportModalOpen(true)} />
            <Testimonials />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-50 text-slate-800 font-sans">
      
      {/* Navigation */}
      <Navbar 
        currentView={currentView}
        setCurrentView={navigateToView}
        openSupportModal={() => setIsSupportModalOpen(true)}
        openVolunteerModal={() => setIsVolunteerModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer 
        setCurrentView={navigateToView}
        openSupportModal={() => setIsSupportModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        
        {/* Floating Support Button */}
        <button
          onClick={() => setIsSupportModalOpen(true)}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sun-400 via-amber-300 to-yellow-400 text-slate-950 font-extrabold text-xs rounded-full shadow-lg hover:shadow-sun-glow transition-all transform hover:scale-105 border-2 border-white"
        >
          <Heart className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline tracking-wide uppercase">SUPPORT CAUSE</span>
        </button>

        {/* Floating Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-peace-700 text-white hover:bg-peace-800 shadow-md flex items-center justify-center transition-all transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Modals */}
      <SupportModal 
        isOpen={isSupportModalOpen} 
        onClose={() => setIsSupportModalOpen(false)} 
      />

      <VolunteerModal 
        isOpen={isVolunteerModalOpen} 
        onClose={() => setIsVolunteerModalOpen(false)} 
      />

      <ProjectQuickModal 
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
        onOpenFullPage={(projId) => navigateToView(`project-${projId}`)}
        onSupport={() => setIsSupportModalOpen(true)}
      />

    </div>
  );
}
