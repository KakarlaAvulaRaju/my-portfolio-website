import React from "react";
import { Linkedin, Github, Mail, Twitter, Instagram } from "lucide-react";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Home = () => {
  const techStack = [
    { name: "C#", icon: "💜" },
    { name: "Python", icon: "🐍" },
    { name: "ASP.NET Core", icon: "🌐" },
    { name: "Web API", icon: "🔌" },
    { name: "ASP.NET MVC", icon: "🏗️" },
    { name: "Angular", icon: "🅰️" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "PrimeNG", icon: "🎯" },
    { name: "EF Core", icon: "🧩" },
    { name: "MySQL", icon: "🐬" },
    { name: "SQL Server", icon: "🗄️" },
    { name: "Azure DevOps", icon: "☁️" },
    { name: "Azure Portal", icon: "🌩️" },
    { name: "Azure Cognitive", icon: "🧠" },
    { name: "Visual Studio", icon: "💻" },
    { name: "VS Code", icon: "💻" },
    { name: "GitHub", icon: "🐙" },
    { name: "Azure Git", icon: "📦" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "JavaScript", icon: "💛" }
  ];

  return (
    <section name="Home" className="pt-32 pb-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span
                className="px-4 py-2 rounded-full text-blue-900 text-sm font-medium border border-blue-100"
                style={{
                  boxShadow: '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA',
                }}
              >
                Welcome to My Portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.3]">
              <span className="text-slate-900">Bonjour😉, I'm a</span>
              <br />
              <span className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-400 text-transparent bg-clip-text">
                <ReactTyped
                  strings={["Frontend Developer", "Backend Developer", "Fullstack Developer"]}
                  typeSpeed={150}
                  backSpeed={100}
                  backDelay={1000}
                  loop={true}
                />
              </span>
            </h1>

            {/* Profile Image for Mobile/Tablet - Shows below h1 on small screens */}
            <div className="flex justify-center md:hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-900/20 shadow-2xl shadow-blue-500/30">
                  <img
                    src="Raju.png"
                    alt="Kakarla Avula Raju - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              I'm a passionate <span className="text-blue-900 font-semibold">Full Stack Developer</span> with over 2 years of
              hands-on experience building scalable and modern web applications using
              <span className="text-blue-900"> ASP.NET Core, Angular, and React TypeScript</span>.
              I specialize in developing, deploying, and maintaining enterprise-grade solutions
              using <span className="text-blue-900">Azure Cloud Services</span> and <span className="text-blue-900">Azure DevOps</span>.
              With a strong focus on clean architecture, responsive UI, and performance optimization,
              I've contributed to multiple <span className="text-blue-900">insurance-tech platforms</span> and
              led teams delivering <span className="text-blue-900">white-labeled financial applications</span>.
              I'm driven by writing elegant, maintainable code and transforming complex business logic
              into seamless user experiences.
            </p>

            {/* Connect With Me */}
            <div className="space-y-4">
              <h3 className="text-blue-900 font-semibold text-lg">Connect With Me</h3>
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4">
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-900 to-blue-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 cursor-pointer text-center"
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
                View My Work
              </Link>

              <a
                href="../../public/resume/MyResume.pdf"
                download="My_Resume.pdf"
                className="px-8 py-3 rounded-lg border border-blue-100 text-blue-900 font-semibold transition-all duration-300 text-center"
                style={{
                  boxShadow: '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA',
                }}
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
                  e.currentTarget.style.color = '#1E3A8A';
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                  e.currentTarget.style.borderRadius = '';
                }}
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image for Desktop - Hidden on mobile/tablet */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-900/20 shadow-2xl shadow-blue-500/30">
                <img
                  src="Raju.png"
                  alt="Kakarla Avula Raju - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Tech Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {techStack.map((tech, index) => {
              const [hover, setHover] = React.useState(false);
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-blue-100 transition-all duration-300 hover:bg-blue-200 hover:scale-105 hover:border-blue-500/50 relative"
                  style={{
                    background: 'transparent',
                    boxShadow: hover
                      ? '0 0 0 1px #3B82F6, 0 0 8px 1px #3B82F6AA'
                      : '0 0 0 1px #3B82F6, 0 0 4px 1px #3B82F622',
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {/* Gradient top border on hover */}
                  {hover && (
                    <>
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '7px',
                          borderTopLeftRadius: '0.75rem', // match rounded-xl
                          borderTopRightRadius: '0.75rem',
                          background: 'linear-gradient(90deg, #1E3A8A 0%, #3B82F6 100%)',
                          boxShadow: '0 0 8px 2px #3B82F6AA',
                          zIndex: 2,
                          overflow: 'hidden',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '60px',
                            height: '100%',
                            borderTopRightRadius: '0.75rem',
                            borderTopLeftRadius: '0.75rem',
                            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, #fff 60%, rgba(255,255,255,0) 100%)',
                            opacity: 0.7,
                            filter: 'blur(2px)',
                            animation: 'glow-move 1.2s linear',
                            animationFillMode: 'forwards',
                          }}
                        />
                      </div>
                      <style>{`
                        @keyframes glow-move {
                          0% { right: 0; opacity: 0.7; }
                          80% { opacity: 0.7; }
                          100% { right: 100%; opacity: 0; }
                        }
                      `}</style>
                    </>
                  )}
                  <div className="text-3xl text-center mb-2">{tech.icon}</div>
                  <p className="text-center text-blue-900 text-sm font-medium">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;