import React, { useState } from "react";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Master of Science in Biotechnology",
      school: "University of Lucknow",
      location: "Lucknow, UP",
      mascot: "🧪",
      year: "2024",
      achievements: [
        "Thesis: Exploring the Anti-apoptotic effects of hcmv-miR-UL70-3p in A549 cells",
        "Research Assistant to Dr. Sunil Babu Gosipatala",
      ],
      skills: ["Molecular Biology", "Cell Culture", "Research Methodology", "Data Analysis"],
      description:
        "Advanced studies in biotechnology with a focus on cellular research and molecular techniques.",
    },
    {
      degree: "Bachelor of Science in Biotechnology (Honours)",
      school: "Invertis University",
      location: "Bareilly, UP",
      mascot: "🔬",
      year: "2022",
      achievements: [
        "Poster: Is it somehow possible to improve human personality through genetics?",
        "Presented at 6th International Conference at GenoPro-2019",
      ],
      skills: ["Genetics", "Biochemistry", "Microbiology", "Bioinformatics"],
      description:
        "Comprehensive undergraduate program covering the fundamentals of biotechnology and its applications.",
    },
    {
      degree: "Senior Secondary Education (Intermediate)",
      school: "St. Joseph's Senior Secondary School",
      location: "Puranpur, UP",
      mascot: "📚",
      year: "2019",
      achievements: ["Physics, Chemistry and Biology"],
      skills: ["Physics", "Chemistry", "Biology", "Mathematics"],
      description:
        "Focused on core science subjects with emphasis on practical laboratory work and scientific principles.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(72, 187, 120, 0.15)",
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-gradient-to-br from-white to-emerald-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full -translate-x-40 -translate-y-40 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full -translate-x-40 translate-y-40 opacity-50"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-emerald-900/[0.02] bg-[length:50px_50px]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Educational Journey
          </h2> */}
          <p className="text-emerald-700 max-w-2xl mx-auto text-lg">
            From foundational science studies to specialized biotechnology research, 
            my academic path reflects a growing passion for scientific discovery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`relative rounded-2xl p-6 transition-all duration-300 bg-white shadow-lg border border-emerald-100 ${
                hoveredIndex === index ? "ring-2 ring-emerald-500/30" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Degree icon with decorative background */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                {edu.mascot}
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2 pr-16">
                  <h3 className="text-xl font-bold text-emerald-900">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-emerald-700 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    {edu.school}
                  </p>
                  <p className="text-emerald-600 flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </p>
                  <p className="text-emerald-500 flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-emerald-700 text-sm border-l-2 border-emerald-400 pl-3 py-1">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-emerald-800 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-col gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-xl bg-emerald-50 text-emerald-700 flex items-start gap-2 text-sm"
                      >
                        <Award className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-600" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-emerald-800 mb-2">Skills Gained</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-300 rounded-bl-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;