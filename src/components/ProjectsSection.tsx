import React from 'react';
import { Github, PlayCircle } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Infinity Corridor",
      description: "Developed Infinity Corridor an app that provides a unified platform where users can immerse themselves in a multitude of opportunities, ranging from dynamic competitions and hackathons and prestigious IEEE Conferences.",
      image: "/lovable-uploads/infii.jpg",
      techStack: ["Flutter", "Firebase", "App Development"],
      githubLink: "https://github.com/VESIT-CMPN-Projects/2023-24-SE3",
      liveLink: "https://drive.google.com/file/d/1CWBlij1DH1pvV9BI_kTPpvnIz4EEYsWm/view?usp=sharing",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Aapda Mitra - AI-Powered Disaster Resilience Platform",
      description: "Developed Aapda Mitra, an advanced AI-powered disaster resilience platform featuring real-time predictive analytics and a DeepSeek fine tuned emotional support chatbot. Engineered social media sentiment analysis with BERT NLP models and implemented XGBoost and Random Forest algorithms for precise flood and drought forecasting.",
      image: "/lovable-uploads/a1.jpg",
      techStack: ["React", "Python", "Natural Language Processing (NLP)", "Machine Learning (ML)", "Web Development"],
      githubLink: "https://github.com/MadGcodes/ApadaMitra",
      liveLink: "https://drive.google.com/file/d/17IKxTyIz52BEvftnDm9CiPavdEnQcvHc/view?usp=sharing",
      gradient: "from-pink-600 to-cyan-600"
    },
    {
      title: "CloudEye - Cloudburst Prediction System",
      description: "Engineered CloudEye, an innovative cloudburst prediction system utilizing the CatBoost machine learning model to deliver real-time forecasting with automated alert mechanisms and intuitive dashboard for data visualization.",
      image: "/lovable-uploads/c1.jpg",
      techStack: ["HTML", "CSS", "JS", "PostgreSQL", "Python", "Machine Learning (ML)", "Web Development"],
      githubLink: "https://github.com/Asmi-Rajbhar/CloudEye",
      liveLink: "https://drive.google.com/file/d/13RIQaYCTWP7hKRD1uuu_BdkpGHttQ26H/view?usp=sharing",
      gradient: "from-cyan-600 to-purple-600"
    },
    {
      title: "Mindflex",
      description: "Mind Flex is an interactive aptitude assessment platform designed to make learning and knowledge evaluation more engaging and effective through gamified elements and immediate feedback.",
      image: "/lovable-uploads/m1.jpg",
      techStack: ["HTML", "CSS", "JS", "PHP", "MySQL", "Web Development"],
      githubLink: "https://github.com/MadGcodes/Mindflex",
      liveLink: "https://mindflex-two.vercel.app/",
      gradient: "from-cyan-600 to-purple-600"
    },
    {
      title: "Pomoflo - Productivity App",
      description: "Mind Flex is an interactive aptitude assessment platform designed to make learning and knowledge evaluation more engaging and effective through gamified elements and immediate feedback.",
      image: "/lovable-uploads/p1.jpg",
      techStack: ["React Native", "Firebase", "Firestore", "App Development"],
      githubLink: "https://github.com/MadGcodes/Pomoflo.git",
      liveLink: "https://drive.google.com/file/d/17GBWRui49nh6Vsp2PtA0tJLp8xyGoHvk/view?usp=sharing",
      gradient: "from-cyan-600 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="project-card rounded-xl overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-slate-700/50 hover:bg-slate-600/50 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repo Link</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all text-sm"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Demo Link</span>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
