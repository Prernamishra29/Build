import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Calendar,
  BookOpen,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  MapPin
} from "lucide-react";

const CertificatesSection = () => {
  const [activeTab, setActiveTab] = useState("certificates");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const certificatesData = [
    {
      title: "Molecular Docking",
      issuer: "Biogrademy",
      id: "BL24MDC1231",
      date: "2024",
      description: "Advanced course on molecular docking techniques and applications in drug discovery.",
      skills: ["Bioinformatics", "Molecular Modeling", "Drug Design", "Protein-Ligand Interactions"],
      link: "#"
    },
    {
      title: "Python - Introduction to Data Science and Machine Learning A-Z",
      issuer: "Udemy",
      id: "UC2c30fcb7-dc64-4bb1-8334-c6a320abd6b5",
      date: "2023",
      description: "Comprehensive course covering data science fundamentals and machine learning algorithms with Python.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization"],
      link: "#"
    }
  ];

  const trainingData = [
    {
      title: "SILVER JUBILEE, 25th INDO-US Flow cytometry Workshop",
      organizer: "TETC, India and Department of Biotechnology and Department of Pharmaceutical Sciences, BBAU",
      location: "BBAU, Lucknow, India",
      date: "3rd & 4th February, 2024",
      description: "Workshop on 'Flow Cytometry and its Applications in Biology' covering advanced techniques and applications in biological research.",
      skills: ["Flow Cytometry", "Cell Analysis", "Laboratory Techniques", "Data Interpretation"],
      link: "#"
    }
  ];

  const Card = ({ item, type }) => (
    <motion.div 
      className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 h-full flex flex-col"
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(72, 187, 120, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
          <Award size={24} />
        </div>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
          {type === "certificate" ? "Certificate" : "Workshop"}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.title}</h3>
      <p className="text-emerald-700 mb-4">{item.issuer || item.organizer}</p>
      
      <div className="flex items-center gap-3 text-sm text-emerald-600 mb-4">
        <Calendar size={16} />
        <span>{item.date}</span>
        {item.location && (
          <>
            <MapPin size={16} />
            <span>{item.location}</span>
          </>
        )}
      </div>
      
      <p className="text-emerald-700 mb-4 flex-grow">{item.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-emerald-800 mb-2">Skills Covered</h4>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-emerald-100 flex justify-between items-center">
        <span className="text-xs font-mono text-emerald-600">ID: {item.id || "N/A"}</span>
        {/* <motion.a 
          href={item.link} 
          className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm"
          whileHover={{ x: 4 }}
        >
          View Details <ExternalLink size={16} className="ml-1" />
        </motion.a> */}
      </div>
    </motion.div>
  );

  return (
    <section ref={containerRef} className="relative py-20 bg-gradient-to-br from-white to-emerald-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full -translate-x-40 -translate-y-40 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full translate-x-40 translate-y-40 opacity-30"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-emerald-900/[0.02] bg-[length:50px_50px]" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          style={{ opacity, scale }}
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
            Certifications & Training
          </h2> */}
          <p className="text-emerald-700 max-w-2xl mx-auto text-lg">
            Continuous learning through specialized courses and workshops to enhance my expertise in biotechnology.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-emerald-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === "certificates"
                  ? "bg-white text-emerald-800 shadow-md"
                  : "text-emerald-600 hover:text-emerald-800"
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setActiveTab("training")}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === "training"
                  ? "bg-white text-emerald-800 shadow-md"
                  : "text-emerald-600 hover:text-emerald-800"
              }`}
            >
              Training & Workshops
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "certificates" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {certificatesData.map((cert, index) => (
              <Card key={index} item={cert} type="certificate" />
            ))}
          </motion.div>
        )}

        {activeTab === "training" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8"
          >
            {trainingData.map((training, index) => (
              <Card key={index} item={training} type="training" />
            ))}
          </motion.div>
        )}

        {/* Floating decorative elements */}
        <motion.div 
          className="absolute left-10 top-1/3 w-8 h-8 bg-emerald-200 rounded-full opacity-50"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute right-20 bottom-1/4 w-6 h-6 bg-emerald-300 rounded-full opacity-30"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default CertificatesSection;