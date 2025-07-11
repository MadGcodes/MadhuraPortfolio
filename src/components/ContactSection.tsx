
import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('golatkarmadhura@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
    // Handle form submission here
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-slate-300 mt-6 text-lg">
            Let's connect and discuss opportunities, projects, or just have a chat!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
              <div className="space-y-4">
                <a 
                  href="https://github.com/MadGcodes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <Github className="w-6 h-6 text-slate-400 group-hover:text-white" />
                  <span className="text-slate-300 group-hover:text-white">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/madhura-golatkar-81ba7a24b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-white" />
                  <span className="text-slate-300 group-hover:text-white">LinkedIn</span>
                </a>
                
                <button 
                  onClick={copyEmail}
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group w-full text-left"
                >
                  <div className="w-6 h-6 text-slate-400 group-hover:text-white">📧</div>
                  <span className="text-slate-300 group-hover:text-white">
                    {copied ? 'Email copied!' : 'golatkarmadhura@gmail.com'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send a message</h3>
            <form  action="https://formsubmit.co/golatkarmadhura@gmail.com" method="POST" className="space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
