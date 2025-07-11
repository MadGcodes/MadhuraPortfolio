
import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import AchievementsCertificationsSection from '../components/AchievementsCertificationsSection';


const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsCertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
