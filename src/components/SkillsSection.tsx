
import React from 'react';

const SkillsSection = () => {
  const skills = [
    {
      title: "Full Stack Developer", 
      description: "Experienced in building responsive frontends and efficient backend systems with APIs.",
      image: "/lovable-uploads/Coding-amico.svg",
      gradient: "from-pink-500 to-cyan-500"
    },
    {
      title: "Designer",
      description: "Passionate about crafting clean, user-friendly interfaces with thoughtful user experiences.",
      image: "/lovable-uploads/Design Process-amico.svg",
      gradient: "from-cyan-500 to-purple-500"
    },
    {
      title: "AI/ML Enthusiast",
      description: "Experienced in AI & ML. Proficient in developing, training, and optimizing models using Python and relevant ML libraries.",
      image: "/lovable-uploads/pngtree-cute-robot-mascot-logo-png-image_6102423.png",
      gradient: "from-cyan-500 to-purple-500"
    }
  ];

  const techStack = [
    { name: "HTML", image: "/lovable-uploads/html.jpg" },
    { name: "CSS", image: "/lovable-uploads/css.png" },
    { name: "JavaScript", image: "/lovable-uploads/js.jpg" },
    { name: "TypeScript", image: "/lovable-uploads/typescript.png" },
    { name: "React", image: "/lovable-uploads/reactt.png" },
    { name: "Firebase", image: "/lovable-uploads/firebase.png" },
    { name: "Git", image: "/lovable-uploads/git.png" },
    { name: "Github", image: "/lovable-uploads/github.png" },
    { name: "PostgreSQL", image: "/lovable-uploads/pg.png" },
    { name: "C", image: "/lovable-uploads/c.png" },
    { name: "C++", image: "/lovable-uploads/cc.png" },
    { name: "Java", image: "/lovable-uploads/java-logo.png" },
    { name: "Python", image: "/lovable-uploads/python-logo.png" },
    { name: "Flutter", image: "/lovable-uploads/flutter-logo.png" },
    { name: "MySQL", image: "/lovable-uploads/mysql_PNG23.png" },
    { name: "MongoDB", image: "/lovable-uploads/mongodbb.png" },

  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-3xl mb-4">
                    {skill.image ? (
                      <img 
                        src={skill.image} 
                        alt={skill.title} 
                        className="w-20 h-20 object-contain"
                      />
                    ) : null}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">Languages and Frameworks</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-110">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl">
                    <img 
                        src={tech.image} 
                        className="w-20 h-20 object-contain"
                      />
                    </span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
