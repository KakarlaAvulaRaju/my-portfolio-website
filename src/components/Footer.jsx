import React from "react";
import { Link } from "react-scroll";
import { Linkedin, Github, Mail, Heart, Code, ArrowUp, Twitter, Instagram } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
                RK
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Raju Kakarla</h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {/* Passionate about creating innovative web applications with creative mindset that make a difference.
              Let's build something amazing together. */}
              Passionate about creating innovative, impactful web applications with clean and creative thinking.
              Always excited to turn ideas into reality - let’s build something exceptional together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer text-left block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-emerald-400">Connect With Me</h4>
            {/* <h4 className="text-lg font-bold text-emerald-400">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a
                  href="mailto:rajukakarla1817@gmail.com"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  rajukakarla1817@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-300">Hyderabad, Telangana</span>
              </div>
            </div> */}

            {/* Social Links */}
            <div>
              {/* <h5 className="text-white font-semibold mb-3">Connect With Me</h5> */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/kakarla-avula-raju-9b1786214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-gray-500/50"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/KakarlaAvulaRaju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-gray-500/50"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Viraj1817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-gray-500/50"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/virat.raj18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-gray-500/50"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>&copy; {new Date().getFullYear()} Raju Kakarla. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div> */}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-emerald-500/25 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"></div>
    </footer>
  );
};

export default Footer;
