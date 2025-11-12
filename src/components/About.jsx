import React from "react";

const About = () => {
  return (
    <section name="About" className="py-20 px-6 bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Bonjour😉, I'm <span className="text-white font-semibold">Kakarla Avula Raju</span>,
            a passionate <span className="text-white">Full Stack Developer</span> with over 2 years of
            hands-on experience in building scalable and high-performance web applications.
            I specialize in <span className="text-white">ASP.NET Core, Angular, and React TypeScript</span>,
            creating seamless end-to-end solutions that blend performance with great user experience.
            <br /><br />
            With a strong foundation in both frontend and backend development, I enjoy turning complex
            business requirements into clean, efficient, and maintainable code. I take pride in writing
            solutions that not only solve problems but also help applications grow sustainably over time.
            <br /><br />
            I’ve had the opportunity to <span className="text-white">lead small development teams </span>
            and take <span className="text-white">full ownership of individual projects</span> ensuring
            quality, timely delivery, and seamless collaboration across all phases of development.
            <br /><br />
            I’m always eager to learn new technologies, explore modern development practices, and
            continuously improve my craft as a developer who values clarity, collaboration, and creativity.
          </p>


          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400">Education</h3>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
                <h4 className="text-xl font-bold text-white">Bachelor of Technology in Civil Engineering</h4>
                <p className="text-gray-400 mt-1">Rajiv Gandhi University of Knowledge and Technology, Nuzvid</p>
                <p className="text-emerald-400 mt-2">March 2019 - May 2023 | CGPA: 8.45/10</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <h4 className="text-xl font-bold text-white">Pre-University Course (MPC)</h4>
                <p className="text-gray-400 mt-1">Rajiv Gandhi University of Knowledge and Technology, Nuzvid</p>
                <p className="text-cyan-400 mt-2">August 2017 - March 2019 | CGPA: 7.5/10</p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <h4 className="text-xl font-bold text-white">SSC Class 10</h4>
                <p className="text-gray-400 mt-1">Z.P High School, Bhupathipalli</p>
                <p className="text-purple-400 mt-2">July 2016 - March 2017 | CGPA: 10/10</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-400 mt-8">Skills & Expertise</h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                <h4 className="text-lg font-bold text-white mb-2">Programming Languages</h4>
                <p className="text-gray-300">C#, Python (Basic), JavaScript, TypeScript</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <h4 className="text-lg font-bold text-white mb-2">Frameworks & Libraries</h4>
                <p className="text-gray-300">ASP.NET Core (6, 7, 8), Web API, ASP.NET MVC, Angular 8, React TS, PrimeNG, Entity Framework Core</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <h4 className="text-lg font-bold text-white mb-2">Frontend Technologies</h4>
                <p className="text-gray-300">HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, Responsive Design</p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                <h4 className="text-lg font-bold text-white mb-2">Database & Cloud</h4>
                <p className="text-gray-300">MySQL, SQL Server, Azure DevOps, Azure Portal, Azure Cognitive Services, Azure Functions</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-400 mt-8">Professional Experience</h3>

            <div className="space-y-6 mt-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
                <p className="text-gray-400 mt-1">Deccansoft Software Services Private Limited, Hyderabad</p>
                <p className="text-emerald-400 mt-2">September 2023 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                  <li>Developing scalable web applications using Angular, React TS, ASP.NET Core, and C#</li>
                  <li>Designing responsive web applications with strong UI/UX focus across multiple projects</li>
                  <li>Creating end-to-end solutions with both frontend and backend development</li>
                  <li>Implementing Azure AI Services and managing deployments using Azure DevOps</li>
                  <li>Leading development teams and managing white-labeled project implementations</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <h4 className="text-xl font-bold text-white">Intern - Full Stack Developer</h4>
                <p className="text-gray-400 mt-1">Kota Corporation</p>
                <p className="text-cyan-400 mt-2">January 2023 - August 2023</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                  <li>Completed 8-month internship focusing on C#, HTML, CSS, and Bootstrap</li>
                  <li>Gained practical understanding of web application development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;