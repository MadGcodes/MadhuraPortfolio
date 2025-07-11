
import React from 'react';

const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center floating">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border-4 border-purple-500/30">
                <img 
                  src="/lovable-uploads/pfp.jpeg" 
                  alt="Madhura Golatkar" 
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="text-white">Hi! I'm</span>
            <br />
            <span className="gradient-text">Madhura Golatkar</span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Final-year Computer Engineering student at VESIT, Mumbai, specializing in AI & ML. Passionate about Web/App Development, UI/UX, and emerging tech like NLP. I love building impactful digital experiences and thrive on learning and collaboration. Let’s connect!
          </p>

          <div className="pt-6">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
