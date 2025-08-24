import React, { useState } from "react";
import { Beaker, Calendar, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  bullets,
  icon: Icon,
  isExpanded,
  onToggle
}) => (
  <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl">
    {/* Main card */}
    <div className="relative bg-white rounded-2xl p-6 h-full border border-emerald-100 shadow-lg transition-all duration-500 hover:shadow-xl">
      <div className="relative mb-6 flex justify-between items-start">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center shadow-sm">
            <Icon className="w-7 h-7 text-emerald-600" />
          </div>
        </div>
        
        <button 
          onClick={onToggle}
          className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition-colors duration-300 group-hover:scale-110"
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Main content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex flex-wrap justify-between items-center gap-2">
          <span className="font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full text-sm">
            {company}
          </span>
          <span className="text-xs font-medium bg-gray-100 px-3 py-1.5 rounded-full flex items-center text-gray-700">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            {period}
          </span>
        </div>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Expandable content */}
      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-emerald-100 animate-fadeIn">
          <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
            Project Details
          </h4>
          
          <ul className="space-y-3">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start text-gray-600">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-4 border-t border-dashed border-emerald-100">
            <button className="flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors duration-300 group">
              View full project details
              <ExternalLink size={16} className="ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      )}

      {/* Hover effects */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-200/50 group-hover:animate-pulse-short transition-all duration-500 pointer-events-none" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-emerald-200 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-emerald-200 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-emerald-50/40 to-teal-50/40 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:scale-105" />
  </div>
);

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const experiences = [
    {
      icon: Beaker,
      title: "Project Associate-I",
      company: "ICAR-Indian Veterinary Research Institute",
      period: "Oct 2024 - Present",
      description: "Working on the development of recombinant vaccine candidates for avian diseases with a focus on innovative biotechnology solutions.",
      bullets: [
        "Project: Development of Recombinant Fowlpox Virus Vector Based Avian Infectious Laryngotracheitis (ILT) Vaccine Candidate",
        "PI: Dr. Vikramaditya Upmanyu, Senior Scientist, Division of Biological Standardization, ICAR-IVRI, Bareilly",
        "Research focus on vaccine development and immunological studies",
        "Utilizing cutting-edge molecular biology techniques in vaccine design"
      ]
    },
    {
      icon: Beaker,
      title: "Research Trainee",
      company: "Babasaheb Bhimrao Ambedkar University (BBAU), Lucknow",
      period: "Feb 2024 - Jul 2024",
      description: "Completed a dissertation project focused on cell culture techniques and confocal microscopy applications in biotechnology research.",
      bullets: [
        "Worked on cell culture handling and maintenance techniques",
        "Performed confocal microscopy for cellular imaging and analysis",
        "Studied experimental methodologies related to biotechnology",
        "Developed skills in data collection and result interpretation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden py-16 px-4">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_49%,rgba(110,231,183,0.1)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-float-slower"></div>

      <div className="relative container mx-auto max-w-4xl">
        <div className="flex flex-col items-center space-y-4 mb-16 text-center">
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Exploring the intersection of biotechnology and innovation through impactful research
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-4"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index} 
                {...exp} 
                isExpanded={expandedCard === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 font-medium">
            Interested in collaborating on research projects?{" "}
            <button className="text-emerald-600 hover:text-emerald-700 underline decoration-dashed transition-colors duration-300">
              Let's connect
            </button>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes pulse-short {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
        .animate-pulse-short {
          animation: pulse-short 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ExperienceSection;
