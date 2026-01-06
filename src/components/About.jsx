import React from "react";

const About = () => {
  return (
    <section
      name="About"
      className="py-10 px-6"
      style={{
        background: '#FFFFFF',
        backgroundImage: `
          linear-gradient(rgba(30, 58, 138, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30, 58, 138, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        position: 'relative'
      }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div
          className="bg-white rounded-2xl p-8 transition-all duration-300"
          style={{
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
          }}
        >
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Bonjour😉, I'm <span className="text-blue-900 font-semibold">Kakarla Avula Raju</span>,
            a passionate <span className="text-blue-900">Full Stack Developer</span> with over 2.5+ years of
            hands-on experience in building scalable and high-performance web applications.
            I specialize in <span className="text-blue-900">ASP.NET Core, Angular, and React TypeScript</span>,
            creating seamless end-to-end solutions that blend performance with great user experience.
            <br /><br />
            With a strong foundation in both frontend and backend development, I enjoy turning complex
            business requirements into clean, efficient, and maintainable code. I take pride in writing
            solutions that not only solve problems but also help applications grow sustainably over time.
            <br /><br />
            I’ve had the opportunity to <span className="text-blue-900">lead small development teams </span>
            and take <span className="text-blue-900">full ownership of individual projects</span> ensuring
            quality, timely delivery, and seamless collaboration across all phases of development.
            <br /><br />
            I’m always eager to learn new technologies, explore modern development practices, and
            continuously improve my craft as a developer who values clarity, collaboration, and creativity.
          </p>


          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900">Education</h3>

            <div className="space-y-4">
              <div
                className="p-6 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-xl font-bold text-blue-900">Bachelor of Technology in Civil Engineering</h4>
                <p className="text-slate-600 mt-1">Rajiv Gandhi University of Knowledge and Technology, Nuzvid - (IIIT)</p>
                <p className="text-blue-500 mt-2">March 2019 - May 2023 | CGPA: 8.45/10</p>
                <p className="text-slate-700 mt-3 text-sm">
                  <span className="font-semibold">Technical Exposure : </span> 
                  C Programming, Database Management Systems (SQL concepts)
                </p>
              </div>

              <div
                className="p-6 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-xl font-bold text-blue-900">Pre-University Course (MPC)</h4>
                <p className="text-slate-600 mt-1">Rajiv Gandhi University of Knowledge and Technology, Nuzvid - (IIIT)</p>
                <p className="text-blue-500 mt-2">August 2017 - March 2019 | CGPA: 7.5/10</p>
                <p className="text-slate-700 mt-3 text-sm">
                  <span className="font-semibold">Technical Exposure : </span> 
                  Python (Basics), HTML, CSS, MS Office
                </p>
              </div>

              <div
                className="p-6 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-xl font-bold text-blue-900">SSC Class 10</h4>
                <p className="text-slate-600 mt-1">Z.P High School, Bhupathipalli</p>
                <p className="text-blue-500 mt-2">July 2016 - March 2017 | CGPA: 10/10</p>
                <p className="text-slate-700 mt-3 text-sm">
                  <span className="font-semibold">Technical Exposure : </span> 
                  Computer fundamentals
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-8">Skills & Expertise</h3>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div
                className="p-4 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-lg font-bold text-blue-900 mb-2">Programming Languages</h4>
                <p className="text-slate-600">C#, Python (Basic), JavaScript, TypeScript</p>
              </div>

              <div
                className="p-4 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-lg font-bold text-blue-900 mb-2">Frameworks & Libraries</h4>
                <p className="text-slate-600">ASP.NET Core (6, 7, 8), Web API, ASP.NET MVC, Angular 8, React TS, PrimeNG, Entity Framework Core</p>
              </div>

              <div
                className="p-4 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-lg font-bold text-blue-900 mb-2">Frontend Technologies</h4>
                <p className="text-slate-600">HTML, CSS, SCSS, Bootstrap, Tailwind CSS, Responsive Design</p>
              </div>

              <div
                className="p-4 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-lg font-bold text-blue-900 mb-2">Database & Cloud</h4>
                <p className="text-slate-600">MySQL, SQL Server, Azure DevOps, Azure Portal, Azure Cognitive Services, Azure Functions, Azure Service Bus</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mt-8">Professional Experience</h3>

            <div className="space-y-6 mt-6">
              <div
                className="p-6 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-xl font-bold text-blue-900">Full Stack Developer</h4>
                <p className="text-slate-600 mt-1">Deccansoft Software Services Private Limited, Hyderabad</p>
                <p className="text-blue-500 mt-2">September 2023 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mt-4">
                  <li>Developing scalable web applications using Angular, React TS, ASP.NET Core, and C#</li>
                  <li>Designing responsive web applications with strong UI/UX focus across multiple projects</li>
                  <li>Creating end-to-end solutions with both frontend and backend development</li>
                  <li>Implementing Azure AI Services and managing deployments using Azure DevOps</li>
                  <li>Leading development teams and managing white-labeled project implementations</li>
                </ul>
              </div>

              <div
                className="p-6 rounded-xl bg-white transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(59, 130, 246, 0.1)';
                }}
              >
                <h4 className="text-xl font-bold text-blue-900">Intern - Full Stack Developer</h4>
                <p className="text-slate-600 mt-1">Kota Corporation</p>
                <p className="text-blue-500 mt-2">January 2023 - August 2023</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mt-4">
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