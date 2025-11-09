import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Calendar, ExternalLink, BookOpen, MapPin } from "lucide-react";

const CertificatesSection = () => {
  const [activeTab, setActiveTab] = useState("certificates");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Data
  const certificatesData = [
    {
      title: "Molecular Docking",
      issuer: "Biogrademy",
      id: "BL24MDC1231",
      date: "2024",
      description:
        "Advanced course on molecular docking techniques and applications in drug discovery.",
      skills: ["Bioinformatics", "Molecular Modeling", "Drug Design", "Protein-Ligand Interactions"],
      link: "https://www.linkedin.com/in/prateek-singh-8956521ba/details/certifications/1712681711488/single-media-viewer/?profileId=ACoAADL_T3EB5PecjplaRDVVi3iEiJPzj05Qxh8"
    },
    {
      title: "Data Science & ML A-Z",
      issuer: "Udemy",
      id: "UC2c30fcb7-dc64-4bb1-8334-c6a320abd6b5",
      date: "2023",
      description:
        "Comprehensive course covering data science fundamentals and machine learning algorithms with Python.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization"],
      link: "https://www.udemy.com/certificate/UC-2c30fcb7-dc64-4bb1-8334-c6a320abd6b5"
    }
  ];

  const trainingData = [
    {
      title: "Clinical Trial Analysis & Reporting",
      organizer: "Internshala Trainings",
      id: "4alsei6xsyy",
      date: "2024",
      duration: "1 Month",
      description:
        "Comprehensive 1-month training on clinical trial data analysis and reporting using SAS, covering regulatory standards, data handling, and result interpretation.",
      skills: ["SAS (Programming Language)", "Clinical Trial Analysis", "Data Reporting"],
      link: "https://www.linkedin.com/in/prateek-singh-8956521ba/details/certifications/1722934054321/single-media-viewer/?profileId=ACoAADL_T3EB5PecjplaRDVVi3iEiJPzj05Qxh8",
      type: "training"
    },
    {
   
  title: "Is it somehow possible to improve human personality through genetics?",
  organizer: "Department of Biotechnology, Invertis University, Bareilly",
  id: "Poster2019",
  date: "Oct 2019",
  description:
    "Presented a poster at the 6th International Conference, GenoPro-2019, on 'Translational Approaches in Clinical, Environmental, and Biotechnological Research'.",
  skills: ["Genetics", "Biotechnology Research", "Scientific Presentation", "Clinical & Environmental Studies"],
  link: "https://www.linkedin.com/in/prateek-singh-8956521ba/overlay/1712861999561/single-media-viewer/?profileId=ACoAADL_T3EB5PecjplaRDVVi3iEiJPzj05Qxh8",
  type: "poster"
},

    {
      title: "SILVER JUBILEE, 25th INDO-US Flow Cytometry Workshop",
      organizer: "TETC, India & Dept. of Biotechnology, BBAU",
      location: "BBAU, Lucknow, India",
      id: "Workshop2024",
      date: "3rd & 4th February, 2024",
      description:
        "Workshop on 'Flow Cytometry and its Applications in Biology' covering advanced techniques and applications in biological research.",
      skills: ["Flow Cytometry", "Cell Analysis", "Laboratory Techniques", "Data Interpretation"],
      link: "#",
      type: "workshop"
    }
  ];

  const publicationsData = [
    {
      title: "Development and Characterization of Chicken Rabies Immunoglobulin",
      publisher: "International Journal of Advanced Biochemistry Research",
      date: "July 21, 2025",
      description:
        "Published a research paper focusing on the development and characterization of chicken-derived rabies immunoglobulin for improved therapeutic applications.",
      skills: ["Biochemistry", "Immunology", "Antibody Development", "Therapeutics"],
      link: "https://www.biochemjournal.com/archives/2025/vol9issue7S/PartJ/S-9-7-89-527.pdf"
    },
    {
      title:
        "GenoVisor: A Feature-Rich DNA to Protein Converter Enhanced with ExPASy ProtParam Integration",
      publisher:
        "International Journal of All Research Education and Scientific Methods",
      date: "March 11, 2024",
      description:
        "Published a paper introducing GenoVisor, a tool for DNA-to-protein conversion with integrated ExPASy ProtParam features for advanced bioinformatics analysis.",
      skills: ["Bioinformatics", "DNA Analysis", "Protein Modeling", "Tool Development"],
      link: "https://www.ijaresm.com/uploaded_files/document_file/Himanshu_Guptao5Ti.pdf"
    },
    {
  title: "Targeting Inflammation in Atherosclerosis: Insights from Natural and Conventional Therapies",
  publisher: "Journal of Population Therapeutics & Clinical Pharmacology",
  date: "May 25, 2024",
  description:
    "Published a research paper exploring the mechanisms of inflammation in atherosclerosis and evaluating both natural and conventional therapeutic approaches for disease management.",
  skills: ["Pharmacology", "Therapeutics", "Inflammation Biology", "Cardiovascular Research"],
  link: "https://www.jptcp.com/index.php/jptcp/article/view/11616/10846" 
},
  ];

  const Card = ({ item, type }) => (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 h-full flex flex-col"
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(72, 187, 120, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700">
          {type === "publication" ? <BookOpen size={24} /> : <Award size={24} />}
        </div>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
          {type === "certificate"
            ? "Certificate"
            : type === "training"
            ? "Training"
            :type === "workshop"
           ? "Workshop"
            : type === "poster"
            ? "Poster"
            : "Publication"}
        </span>
      </div>

      <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.title}</h3>
      <p className="text-emerald-700 mb-2">
        {item.issuer || item.organizer || item.publisher}
      </p>
      {item.supervisor && (
        <p className="text-emerald-600 text-sm mb-2">Supervised by: {item.supervisor}</p>
      )}

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
            <span
              key={index}
              className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-emerald-100 flex justify-between items-center">
          <span className="text-xs font-mono text-emerald-600">ID: {item.id || "N/A"}</span>
          <motion.a
            href={item.link}
            className="flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-sm"
            whileHover={{ x: 4 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details <ExternalLink size={16} className="ml-1" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-gradient-to-br from-white to-emerald-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full -translate-x-40 -translate-y-40 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full translate-x-40 translate-y-40 opacity-30"></div>
      <div className="absolute inset-0 bg-grid-emerald-900/[0.02] bg-[length:50px_50px]" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" style={{ opacity, scale }}>
          <p className="text-emerald-700 max-w-2xl mx-auto text-lg">
            Continuous learning through specialized courses, workshops, posters, and publications to enhance my expertise.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-emerald-100 p-1 rounded-xl">
            {["certificates", "training", "publications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-white text-emerald-800 shadow-md"
                    : "text-emerald-600 hover:text-emerald-800"
                }`}
              >
                {tab === "certificates"
                  ? "Certificates"
                  : tab === "training"
                  ? "Training & Workshops"
                  : "Publications"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {activeTab === "certificates" && (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificatesData.map((cert, index) => (
              <Card key={index} item={cert} type="certificate" />
            ))}
          </motion.div>
        )}

        {activeTab === "training" && (
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingData.map((training, index) => (
              <Card key={index} item={training} type={training.type} />
            ))}
          </motion.div>
        )}

        {activeTab === "publications" && (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publicationsData.map((pub, index) => (
              <Card key={index} item={pub} type="publication" />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;
