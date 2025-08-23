import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Microscope,
  Dna,
  Activity,
  TestTube,
  Brain,
} from "lucide-react";
import {
  FaPython,
  FaRProject,
  FaGithub,
} from "react-icons/fa";
import {
  SiJupyter,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { GiChemicalDrop, GiMicroscopeLens } from "react-icons/gi";
import { BiChip } from "react-icons/bi";

const SkillCard = ({ icon: Icon, title, skills, index, isHovered, onHover }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-70' : ''}`}></div>
      
      <Card 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`group bg-white/95 border border-gray-200/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden relative ${
          isHovered ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
        }`}
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateY(${(mousePosition.x - 150) / 25}deg) rotateX(${-(mousePosition.y - 150) / 25}deg) scale3d(1.05, 1.05, 1.05)` 
            : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
        }}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4, 5].map(i => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <CardContent className="p-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-md">
              <Icon className="w-7 h-7 text-green-600 group-hover:text-blue-600 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-500">
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 border border-green-200/60 text-green-800 rounded-lg px-3 py-1.5 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2 text-sm">
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SkillsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Dna,
      title: "Molecular Biology Techniques",
      skills: [
        { name: "DNA/RNA Extraction", icon: <Dna className="w-4 h-4 text-green-500" /> },
        { name: "dPCR", icon: <Activity className="w-4 h-4 text-yellow-500" /> },
        { name: "Plasmid Isolation", icon: <TestTube className="w-4 h-4 text-blue-500" /> },
        { name: "RE Digestion", icon: <GiChemicalDrop className="w-4 h-4 text-pink-500" /> },
      ],
    },
    {
      icon: Microscope,
      title: "Protein & Immunoassays",
      skills: [
        { name: "Western Blotting", icon: <Microscope className="w-4 h-4 text-purple-500" /> },
        { name: "ELISA", icon: <GiChemicalDrop className="w-4 h-4 text-green-500" /> },
        { name: "SDS-PAGE", icon: <TestTube className="w-4 h-4 text-red-500" /> },
        { name: "HA-HI Assays", icon: <Activity className="w-4 h-4 text-indigo-500" /> },
      ],
    },
    {
      icon: Brain,
      title: "Virology & Microscopy",
      skills: [
        { name: "Virus Isolation", icon: <GiMicroscopeLens className="w-4 h-4 text-blue-400" /> },
        { name: "Confocal Microscopy", icon: <Microscope className="w-4 h-4 text-orange-400" /> },
        { name: "SEM Imaging", icon: <GiMicroscopeLens className="w-4 h-4 text-violet-500" /> },
        { name: "Transfection Techniques", icon: <Activity className="w-4 h-4 text-sky-500" /> },
      ],
    },
    {
      icon: Brain,
      title: "Bioinformatics & Data Science",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "R Programming", icon: <FaRProject className="w-4 h-4 text-[#276DC3]" /> },
        { name: "Jupyter Notebook", icon: <SiJupyter className="w-4 h-4 text-[#f97316]" /> },
        { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#22d3ee]" /> },
        { name: "NumPy", icon: <SiNumpy className="w-4 h-4 text-[#0ea5e9]" /> },
        { name: "Bioinformatics Tools", icon: <BiChip className="w-4 h-4 text-[#ec4899]" /> },
      ],
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-green-50 min-h-screen py-16 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div 
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-br from-green-100/40 to-blue-100/40 rounded-full blur-3xl animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <section 
        ref={containerRef}
        className="container mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
            {/* Skills & Expertise */}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A snapshot of my biotechnology and bioinformatics expertise, combining wet-lab techniques and data-driven research tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SkillCard
                index={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                isHovered={hoveredCard === index}
                onHover={setHoveredCard}
              />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;