import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, User, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section name="Contact" className="py-20 px-6 bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid">
          {/* Contact Information */}
          {/* <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm passionate about creating innovative solutions and would love to hear about your project.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href="mailto:rajukakarla1817@gmail.com"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                    >
                      rajukakarla1817@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a
                      href="tel:+919502568981"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                    >
                      +91 95025 68981
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-300">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-semibold text-white mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/kakarla-avula-raju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/50"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/KakarlaAvulaRaju"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-gray-500/50"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>

            <form
              action="https://getform.io/f/bgdjmnja"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 h-32 resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-lg py-3 px-6 transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:scale-105 hover:shadow-emerald-500/75 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;