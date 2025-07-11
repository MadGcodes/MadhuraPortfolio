import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  const keyframes = `
    @keyframes move {
      0% { height: 12px; transform: translate(0,0); }
      10% { height: 2px; transform: translate(0,4px); }
      20% { height: 13px; transform: translate(0,0); }
      35% { height: 2px; transform: translate(0,4px); }
      40% { height: 12px; transform: translate(0,0); }
      60% { height: 11px; transform: translate(5px,0); }
      100% { height: 13px; transform: translate(0,0); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Helmet Logo */}
          <div className="flex items-center space-x-2">
            <div
              className="p-1 rounded-t-[20px] bg-[#bac3f5] shadow-md"
              style={{ borderRadius: '20px 20px 15px 15px' }}
            >
              <div
                className="bg-[#1d1d1d] border-white border-2 w-[40px] h-[34px] flex items-center justify-center"
                style={{ borderRadius: '20px 20px 15px 15px' }}
              >
                <div className="flex gap-[5px] items-center justify-between">
                  <div
                    className="bg-white w-[8px] h-[12px] rounded-full"
                    style={{ animation: 'move 6s infinite' }}
                  ></div>
                  <div
                    className="bg-white w-[8px] h-[12px] rounded-full"
                    style={{ animation: 'move 6s infinite' }}
                  ></div>
                </div>
              </div>
            </div>
            <span className="text-xl font-bold text-white">Portfolio</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'About', id: 'about' },
              { label: 'Skills & Experience', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              {label: 'Achievements', id: 'achievements' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-white transition-all duration-200 transform hover:scale-105 hover:underline underline-offset-4"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Nav */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-6 w-48 bg-slate-800 text-white rounded-lg shadow-lg flex flex-col space-y-4 py-4 px-6 md:hidden z-50 animate-fade-in">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills & Experience', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Achievements', id: 'achievements' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-slate-200 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
