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
    <section name="Home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/30">
                Welcome to My Portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.3]">
              <span className="text-white">Bonjour😉, I'm a</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
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
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-emerald-500/50">
                  <img
                    src="Raju.png"
                    alt="Kakarla Avula Raju - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate <span className="text-white font-semibold">Full Stack Developer</span> with over 2 years of
              hands-on experience building scalable and modern web applications using
              <span className="text-white"> ASP.NET Core, Angular, and React TypeScript</span>.
              I specialize in developing, deploying, and maintaining enterprise-grade solutions
              using <span className="text-white">Azure Cloud Services</span> and <span className="text-white">Azure DevOps</span>.
              With a strong focus on clean architecture, responsive UI, and performance optimization,
              I've contributed to multiple <span className="text-white">insurance-tech platforms</span> and
              led teams delivering <span className="text-white">white-labeled financial applications</span>.
              I'm driven by writing elegant, maintainable code and transforming complex business logic
              into seamless user experiences.
            </p>

            {/* Connect With Me */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Connect With Me</h3>
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4">
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:scale-105 cursor-pointer text-center"
              >
                View My Work
              </Link>

              <a
                href="../../public/resume/MyResume.pdf"
                download="My_Resume.pdf"
                className="px-8 py-3 rounded-lg border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white font-semibold transition-all duration-300 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image for Desktop - Hidden on mobile/tablet */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-emerald-500/50">
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
            <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-emerald-400/50"
              >
                <div className="text-3xl text-center mb-2">{tech.icon}</div>
                <p className="text-center text-gray-300 text-sm font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;