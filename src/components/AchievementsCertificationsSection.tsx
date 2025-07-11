import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

const education = [
  {
    title: 'B.E. in Computer Engineering (CGPA: 9.54 up to Sem 6)',
    subtitle: 'Vivekanand Education Society’s Institute of Technology, Mumbai (2022 - 2026)',
    description: '',
    icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: '12th HSC - Science (Percentage: 97%)',
    subtitle: 'Pace Junior Science College, Andheri (2019 - 2021)',
    description:
      'JEE Mains 96 percentile, JEE Advanced Qualified (Top 12.5%), BITSAT Qualified, INSPIRE Scholarship Recipient  - Govt. of India (Top 1% of HSC 2021)',
    icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: '10th ICSE (Percentage: 97.5%)',
    subtitle: 'Pawar Public School, Bhandup (2007 - 2019)',
    description:
      'Silver Medalist - Homi Bhabha Jr. & Sr. Scientist Exam, Gold Medals in NSO IMO, A Grade: Elementary & Intermediate Drawing Exams',
    icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
  },
];

const achievements = [
  {
    title: '3rd Prize - Eco Hackathon – Technex’25, IIT BHU',
    description: 'Developed Aapda Mitra, an advanced AI-powered disaster resilience platform',
    link: 'https://example.com/sih2023',
    icon: <Award className="w-6 h-6 text-purple-400" />,
  },
  {
    title: 'Top 18 Finalists - Syrus Hackathon’25, VESIT',
    description: 'Developed intelligent financial agents using the Uptiq AI platform',
    link: 'https://example.com/ieeeexpo',
    icon: <Award className="w-6 h-6 text-purple-400" />,
  },
];

const certifications = [
  {
    title: 'Applications of AI for Anomaly Detection',
    provider: 'NVIDIA',
    link: 'https://learn.nvidia.com/certificates?id=v0JHQ6BYQ3iYbDf3J8SaYg#',
    image: '/lovable-uploads/nv1.png',
  },
  {
    title: 'Applications of AI for Predictive Maintenance',
    provider: 'NVIDIA',
    link: 'https://learn.nvidia.com/certificates?id=En_rOpYHR7S8Te4JQBpHmQ',
    image: '/lovable-uploads/nv2.png',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    provider: 'Postman',
    link: 'https://badgr.com/public/assertions/4LDaLye3RKSwYGyUu9jDWw',
    image: '/lovable-uploads/Postman - Postman API Fundamentals Student Expert - 2024-08-06 (1).png',
  },
  {
    title: 'Develop GenAI apps with Gemini and Streamlit',
    provider: 'Google',
    link: 'https://www.cloudskillsboost.google/public_profiles/d59dd962-7fa5-4878-b7cb-4339ef58ae21/badges/9155550?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    image: '/lovable-uploads/g1.png',
  },
  {
    title: 'Introduction to Generative AI',
    provider: 'Google',
    link: 'https://www.cloudskillsboost.google/public_profiles/d59dd962-7fa5-4878-b7cb-4339ef58ae21/badges/9179763?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    image: '/lovable-uploads/g2.png',
  },
  {
    title: 'Prompt Design in Vertex AI',
    provider: 'Google',
    link: 'https://www.cloudskillsboost.google/public_profiles/d59dd962-7fa5-4878-b7cb-4339ef58ae21/badges/9151691?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    image: '/lovable-uploads/g3.png',
  },
];



const Card = ({
  title,
  subtitle,
  description,
  link = '#',
  icon,
  image,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  icon?: React.ReactNode;
  image?: string;
}) => (

  <a
    href={link || '#'}
    target="_blank"
    rel="noopener noreferrer"
    className="group block transition-transform hover:scale-105 bg-slate-800 hover:bg-slate-700 border border-slate-700 p-5 rounded-2xl shadow-md hover:shadow-lg"
  >
    <div className="flex items-center gap-3 mb-2">
      {image ? (
        <img src={image} alt="certificate" className="w-8 h-8 rounded object-contain" />
      ) : (
        icon
      )}
      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
    </div>
    {subtitle && <p className="text-sm text-slate-400 mb-1">{subtitle}</p>}
    {description && <p className="text-slate-300 text-sm">{description}</p>}
  </a>
);

const AchievementsCertificationsSection = () => {
  return (
    <section id="achievements" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

{/* Education */}
<div className="mb-16">
  <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Education</h3>
  <div className="grid grid-cols-1 gap-6">
    {education.map((edu, idx) => (
      <div
        key={idx}
        className="transition-transform hover:scale-105 bg-slate-800 hover:bg-slate-700 border border-slate-700 p-5 rounded-2xl shadow-md hover:shadow-lg"
      >
        <div className="flex items-start gap-3 mb-2">
          {edu.icon}
          <div>
            <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
            <p className="text-sm text-slate-400">{edu.subtitle}</p>
          </div>
        </div>
      {edu.description && (
        <ul className="list-disc list-inside text-slate-300 text-sm ml-9">
          {edu.description.split(',').map((point, i) => (
            <li key={i}>{point.trim()}</li>
          ))}
        </ul>
        )}
      </div>
    ))}
  </div>
</div>



        
        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <Card
                key={idx}
                title={item.title}
                description={item.description}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <Card
                key={idx}
                title={cert.title}
                subtitle={cert.provider}
                link={cert.link}
                image={cert.image}
              />
            ))}
          </div>
        </div>
{/* Extra-Curricular Achievements */}
<div className="mb-16">
  <h3 className="text-2xl font-semibold text-pink-400 mb-6">Extra-Curricular Achievements</h3>
  <div className="grid grid-cols-1 gap-6">
    <div className="transition-transform hover:scale-105 bg-slate-800 hover:bg-slate-700 border border-slate-700 p-5 rounded-2xl shadow-md hover:shadow-lg">
      <div className="flex items-start gap-3 mb-2">
        <Award className="w-6 h-6 text-pink-400" />
        <h4 className="text-lg font-semibold text-white">Highlights in Music & Arts</h4>
      </div>
      <ul className="list-disc list-inside text-slate-300 text-sm ml-9">
        <li>1st Prize: <span className="italic">Voice of VESIT</span> in <span className="italic">Octaves</span> singing competition by VMC (2024)</li>
        <li>2nd Prize: <span className="italic">Symphonic Spectacle</span> Music Band event by Cult.Vesit (2024)</li>
        <li>2nd Prize: <span className="italic">Illusions Alt Attack</span> & <span className="italic">Harmonic Melange</span> Band events by Cult.Vesit (2022–23)</li>
        <li>2nd Prize: <span className="italic">Utsav</span> Music Band event (2022–23)</li>
        <li>2nd Prize: Theme Painting in <span className="italic">Prarambh</span> (2022)</li>
        <li>Member of VESIT Music Band (2023–25)</li>
      </ul>
    </div>
  </div>
</div>

        
      </div>
    </section>
  );
};

export default AchievementsCertificationsSection;
