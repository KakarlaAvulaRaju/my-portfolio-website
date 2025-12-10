import React from "react";
import { Code2, Server, Database, Cloud, Globe, Palette, Wrench, ChevronRight } from "lucide-react";

const Experience = () => {
  const skills = [
    {
      id: 1,
      category: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      technologies: ["ASP.NET Core 6/7/8", "Web API", "Entity Framework Core", "RESTful APIs", "C#"]
    },
    {
      id: 2,
      category: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      technologies: ["Angular 8", "React TS", "TypeScript", "JavaScript", "HTML5/CSS3"]
    },
    {
      id: 3,
      category: "Database & Storage",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      technologies: ["MySQL", "SQL Server", "Database Design", "Query Optimization"]
    },
    {
      id: 4,
      category: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      technologies: ["Azure DevOps", "Azure Portal", "Azure Functions", "CI/CD Pipelines"]
    },
    {
      id: 5,
      category: "UI/UX & Styling",
      icon: <Palette className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      technologies: ["Tailwind CSS", "Bootstrap", "SCSS", "PrimeNG", "Responsive Design"]
    },
    {
      id: 6,
      category: "Tools & Environment",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      technologies: ["Visual Studio", "VS Code", "Git/GitHub", "Azure Cognitive Services"]
    }
  ];

  const experience = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Deccansoft Software Services Pvt Ltd",
      duration: "September 2023 - Present",
      location: "Hyderabad, India",
      achievements: [
        "Developing and maintaining scalable, high-performance web applications using ASP.NET Core, Angular, React TypeScript, and C#.",
        "Building and integrating clean, efficient, and reusable RESTful APIs while ensuring secure backend communication and authentication.",
        "Designing responsive, user-friendly, and visually consistent interfaces using Tailwind CSS, Bootstrap, and PrimeNG for optimal UX across devices.",
        "Optimizing application performance by refactoring legacy components, reducing redundant API calls, and improving first-page load times.",
        "Implementing Entity Framework Core for efficient data access, migrations, and database schema management.",
        "Creating and managing complete CI/CD pipelines using Azure DevOps — from build validation to live deployment and post-deployment verification.",
        "Performing manual and functional testing to validate successful builds and ensure application stability before production release.",
        "Monitoring and validating live deployments in Azure DevOps pipelines and resolving any deployment misruns or errors.",
        "Conducting daily audit log checks across multiple environments (Dev, UAT, Production) to identify and fix system-level or data-level issues.",
        "Executing database updates and migration handling across multiple databases, ensuring consistency and minimal downtime.",
        "Creating and maintaining detailed Wiki documentation for each deployment — including versioning, domain URLs, database changes, and migration steps.",
        "Documenting deployment histories, feature releases, and rollback plans for audit and internal tracking purposes.",
        "Uploading and updating daily task progress in Deccansoft’s internal portal and Azure Boards to maintain transparent workflow tracking.",
        "Collaborating with team leads (Sandeep MVN, Vikas Kumar) to clarify requirements, validate deliverables, and ensure task accuracy.",
        "Working independently on end-to-end modules and occasionally leading small teams in developing white-labeled insurance and financial applications.",
        "Leading development sprints, assigning tasks, and performing peer code reviews to ensure adherence to coding standards and best practices.",
        "Contributing to the automation of workflows through Azure AI and Cognitive Services for smarter data processing and client experience.",
        "Ensuring quality delivery through structured deployment followed by manual testing",
        "Participating in design discussions, providing architectural suggestions, and ensuring integration consistency across multiple microservices.",
        "Supporting and mentoring junior developers by guiding them on debugging, deployment practices, and version control management.",
        "Actively improving release processes and reducing deployment turnaround time by refining DevOps workflows.",
        "Recognized for strong problem-solving, documentation clarity, and effective post-deployment issue resolution."
      ]
    },
    {
      id: 2,
      role: "Intern - Full Stack Developer",
      company: "Kota Corporation",
      duration: "January 2023 - August 2023",
      location: "Hyderabad, India",
      achievements: [
        "Completed 8-month intensive internship program",
        "Gained hands-on experience with C#, HTML, CSS, and Bootstrap",
        "Developed foundational understanding of web application architecture",
        "Participated in collaborative development projects"
      ]
    }
  ];

  return (
    <section
      name="Experience"
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
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Experience & Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            2 years of professional experience building enterprise-level applications with modern web technologies,
            specializing in full-stack development and cloud deployment.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(({ id, category, icon, technologies }) => (
              <div
                key={id}
                className="group bg-white border border-blue-100 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50"
                style={{
                  boxShadow: '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px #eee';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-900 to-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {category}
                </h4>

                <ul className="space-y-2">
                  {technologies.map((tech, index) => (
                    <li key={index} className="flex items-center text-slate-600 text-sm">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Professional Experience</h3>

          {experience.map(({ id, role, company, duration, location, achievements }) => (
            <div
              key={id}
              className="relative bg-white border border-blue-100 rounded-2xl p-8 shadow-2xl transition-all duration-300"
              style={{
                boxShadow: '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px #eee';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA';
              }}
            >
              <div>
                <h4 className="text-2xl font-bold text-blue-900 mb-2">{role}</h4>
                <p className="text-blue-500 font-semibold text-lg mb-1">{company}</p>
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6 text-slate-600">
                  <span>{duration}</span>
                  <span className="hidden md:block">•</span>
                  <span>{location}</span>
                </div>

                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-slate-600">
                      <ChevronRight className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to bring expertise to your next project?</p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:scale-105">
            Get In Touch
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;