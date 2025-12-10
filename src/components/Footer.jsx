import React from "react";
import { Link } from "react-scroll";
import { Linkedin, Github, Mail, Heart, Code, ArrowUp, Twitter, Instagram } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 px-6 border-t border-blue-100 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                RK
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">Raju Kakarla</h3>
                <p className="text-blue-500 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Passionate about creating innovative, impactful web applications with clean and creative thinking.
              Always excited to turn ideas into reality - let’s build something exceptional together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-blue-900">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-slate-600 hover:text-blue-900 transition-colors duration-300 cursor-pointer text-left block relative inline-block group pb-1"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-blue-900">Connect With Me</h4>
            <div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/kakarla-avula-raju-9b1786214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-br from-blue-900 to-blue-500 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/30"
                  style={{}}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1E3A8A 0%, #3B82F6 51%, #1E3A8A 100%)';
                    e.currentTarget.style.backgroundSize = '200% auto';
                    e.currentTarget.style.backgroundPosition = 'right center';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 0 20px #eee';
                    e.currentTarget.style.borderRadius = '10px';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundImage = '';
                    e.currentTarget.style.backgroundSize = '';
                    e.currentTarget.style.backgroundPosition = '';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderRadius = '';
                  }}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/KakarlaAvulaRaju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-br from-blue-900 to-blue-500 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/30"
                  style={{}}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1E3A8A 0%, #3B82F6 51%, #1E3A8A 100%)';
                    e.currentTarget.style.backgroundSize = '200% auto';
                    e.currentTarget.style.backgroundPosition = 'right center';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 0 20px #eee';
                    e.currentTarget.style.borderRadius = '10px';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundImage = '';
                    e.currentTarget.style.backgroundSize = '';
                    e.currentTarget.style.backgroundPosition = '';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderRadius = '';
                  }}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Viraj1817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-br from-blue-900 to-blue-500 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/30"
                  style={{}}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1E3A8A 0%, #3B82F6 51%, #1E3A8A 100%)';
                    e.currentTarget.style.backgroundSize = '200% auto';
                    e.currentTarget.style.backgroundPosition = 'right center';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 0 20px #eee';
                    e.currentTarget.style.borderRadius = '10px';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundImage = '';
                    e.currentTarget.style.backgroundSize = '';
                    e.currentTarget.style.backgroundPosition = '';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderRadius = '';
                  }}
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/virat.raj18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-br from-blue-900 to-blue-500 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/30"
                  style={{}}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1E3A8A 0%, #3B82F6 51%, #1E3A8A 100%)';
                    e.currentTarget.style.backgroundSize = '200% auto';
                    e.currentTarget.style.backgroundPosition = 'right center';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 0 20px #eee';
                    e.currentTarget.style.borderRadius = '10px';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundImage = '';
                    e.currentTarget.style.backgroundSize = '';
                    e.currentTarget.style.backgroundPosition = '';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderRadius = '';
                  }}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-100 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-blue-500 mb-4 md:mb-0">
            <span>&copy; {new Date().getFullYear()} Raju Kakarla. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-lg bg-gradient-to-br from-blue-900 to-blue-500 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/30 cursor-pointer"
              style={{}}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1E3A8A 0%, #3B82F6 51%, #1E3A8A 100%)';
                e.currentTarget.style.backgroundSize = '200% auto';
                e.currentTarget.style.backgroundPosition = 'right center';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 0 20px #eee';
                e.currentTarget.style.borderRadius = '10px';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundImage = '';
                e.currentTarget.style.backgroundSize = '';
                e.currentTarget.style.backgroundPosition = '';
                e.currentTarget.style.color = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderRadius = '';
              }}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-400"></div>
    </footer>
  );
};

export default Footer;
