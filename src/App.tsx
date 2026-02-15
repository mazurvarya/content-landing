import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import FeatureShowcase from './components/FeatureShowcase';
import Events from './components/Events';
import CTASection from './components/CTASection';
import ApplicationForm from './components/ApplicationForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
            <span className="font-bold text-xl">DigitalDynasty</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-black transition-colors">
              Services
            </a>
            <a href="#events" className="text-gray-600 hover:text-black transition-colors">
              Events
            </a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </a>
            <button
              onClick={handleOpenForm}
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-16">
        <Hero onOpenForm={handleOpenForm} />
        <FeatureShowcase />
        <div id="services">
          <Services onSelectService={handleSelectService} />
        </div>
        <div id="events">
          <Events />
        </div>
        <div id="contact">
          <CTASection onOpenForm={handleOpenForm} />
        </div>
      </main>

      <footer className="bg-black text-white py-8 px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
            <span className="font-bold">DigitalDynasty</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 DigitalDynasty. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>

      <ApplicationForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        preselectedService={selectedService}
      />
    </div>
  );
}

export default App;
