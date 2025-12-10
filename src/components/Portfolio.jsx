import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const cardItem = [
    {
      id: 1,
      logo: "Get Riskdx Image.png",
      name: "RiskDX - Amore Insurance",
      tittle: "Online digital distribution and underwriting platform for insurance companies with automated decision-making capabilities.Supports both direct-to-consumer and agent-assisted channels with automated decision- making and seamless policy delivery.",
      videoLink: "https://getriskdx.com",
      techStack: ["Angular 8", "C#", "ASP.NET Core", "EF Core", "MySQL", "HTML", "CSS", "SCSS", "Bootstrap", "PrimeNG", "Abp Template",
        "Azure Functions", "Syncfusion", "Azure Cognitive Services"
      ]
    },
    {
      id: 2,
      logo: "Parisa Pajooh Financial.png",
      name: "Parisa Pajooh Financial",
      tittle: "A Fully hosted, customizable website for financial professionals with personalized branding, integrated a seamless path to purchase insurance 'Buy Now'. Led development and managed a team for implementation and white-labeled extensions with RiskDX.",
      videoLink: "https://parisafinancial.com/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
    {
      id: 3,
      logo: "Get Customplan Finanacial.png",
      name: "Customplan Financial",
      tittle: "Collaborative platform providing comprehensive life and health insurance solutions with personalized guidance.",
      videoLink: "https://getcustomplanfinancial.com/",
      techStack: ["ASP.NET MVC", "HTML", "CSS", "Bootstrap"]
    },
    {
      id: 4,
      logo: "Smartplan Financial.png",
      name: "Smart Plan Financial",
      tittle: "Digital platform for financial professionals with personalized branding and integrated insurance purchasing.",
      videoLink: "https://riskdxpremiumsmartplanfinancial.azurewebsites.net/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
    // Additional projects that will be shown when expanded
    {
      id: 5,
      logo: "Get Customplan Finanacial.png",
      name: "Amore Insurance",
      tittle: "Amore Insurance is a White-labeled application built on CustomPlan Financial Advisors offering life and health insurance solutions with RiskDX.",
      videoLink: "https://amoreinsurance.ca/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
    {
      id: 6,
      logo: "Financial Blueprint.png",
      name: "Financial Blueprint",
      tittle: "White-labeled project derived from Amoré Parisa Pajooh Financial.",
      videoLink: "https://riskdxpremiumfinancialblueprint.azurewebsites.net/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    }
  ];

  const additionalProjects = [
    {
      id: 7,
      name: "Amore Insurance Info",
      logo: "Amore Insurance Info.png",
      tittle: "Amore Insurance Info is Empowering Advisors with AI-Powered Life Insurance, RiskDX.",
      videoLink: "https://amoreinsurance.info/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
    {
      id: 8,
      name: "Advisor Resource Group",
      logo: "Advisor Resource Group.png",
      tittle: "Advisor Resource Group Inc. is the go-to partner for independent financial advisors in Canada, providing innovative technology solutions, comprehensive services, and expert guidance on business succession.",
      videoLink: "https://advisorresourcegroup.com/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
    {
      id: 9,
      name: "Huumans Single Page",
      logo: "Huumans Insurance.png",
      tittle: "Huumans Single Page is a White-labeled application offering life and health insurance solutions with RiskDX.",
      videoLink: "https://riskdxsinglepagehuumans.azurewebsites.net/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
    {
      id: 10,
      name: "Amore Single Page",
      logo: "Customplan Single Page Application.png",
      tittle: "Amore Single Page is a White-labeled application built on CustomPlan Financial Advisors offering life and health insurance solutions with RiskDX.",
      videoLink: "https://riskdxsinglepageamore.azurewebsites.net/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
    {
      id: 11,
      name: "MBE Insurance",
      logo: "MB Insurance.png",
      tittle: "MBE Insurance is a White-labeled application offering life and health insurance solutions with RiskDX.",
      videoLink: "https://riskdxsinglepagembeinsurence.azurewebsites.net/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
    {
      id: 12,
      logo: "CAA for Life.png",
      name: "CAA Life Advisory",
      tittle: "CAA Life Advisory is a White-labeled application built on CustomPlan Financial Advisors offering life and health insurance solutions with RiskDX.",
      videoLink: "https://caaforlife.riskdx.ca/",
      techStack: ["React TS", "Tailwind CSS", "ASP.NET Core"]
    },
  ];

  const displayedProjects = showAllProjects ? cardItem : cardItem.slice(0, 4);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section
      name="Portfolio"
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
      <style>{`
        .live-demo-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          border-radius: 10px;
          font-weight: 600;
          color: #fff;
          background-image: linear-gradient(to right, #1E3A8A 0%, #3B82F6 51%, #1E3A8A 100%);
          background-size: 200% auto;
          background-position: left center;
          box-shadow: 0 0 20px #eee, 0 4px 12px #3B82F6 10%;
          transition: background-position 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          border: none;
        }
        .live-demo-btn:hover {
          background-position: right center;
          transform: scale(1.05);
          box-shadow: 0 0 30px #3B82F6 30%;
        }
      `}</style>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600">Featured Projects & Real-World Applications</p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map(({ id, logo, name, videoLink, tittle, techStack }) => (
            <div
              key={id}
              className="group bg-white border border-blue-100 rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:scale-102 hover:border-blue-500/50"
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
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={logo}
                  alt={name}
                  className="w-full h-48 object-cover-fit transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-500 transition-colors duration-300">
                  {name}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {tittle}
                </p>

                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-900 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo-btn"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Section (shown when expanded) */}
        {showAllProjects && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">More Projects I've Contributed To</h3>
              <p className="text-slate-600">Role: Full Stack Developer & Team Lead</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalProjects.map(({ id, logo, tittle, name, videoLink, techStack }) => (
                <div
                  key={id}
                  className="group bg-white border border-blue-100 rounded-xl p-6 shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-500/50"
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
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={logo}
                      alt={name}
                      className="w-full h-48 object-cover-fit transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-blue-900 group-hover:text-blue-500 transition-colors duration-300">
                      {name}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {tittle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-900 border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-demo-btn"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            {showAllProjects ? "Showing all projects" : "Want to see more of my work?"}
          </p>
          <button
            onClick={toggleProjects}
            className="live-demo-btn"
          >
            {showAllProjects ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less Projects
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                View All Projects
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;