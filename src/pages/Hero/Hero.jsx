import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import SparklesText from "@/components/ui/sparkles-text";
import pprofile from "@/assets/images/pprofile.jpg";
import PortfolioPage from "@/pages/About/About";

// Floating elements component
const FloatingElements = () => {
  return (
    <>
      {/* Floating circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-6 h-6 bg-emerald-300 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-emerald-200 rounded-full opacity-30"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-emerald-100 rounded-full opacity-40"
        animate={{
          y: [0, -15, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,white)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className="absolute inset-0"
          >
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    </>
  );
};

// Animated profile image component
const ProfileImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  return (
    <div ref={ref} className="relative">
      {/* Main image container */}
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Outer ring */}
        <motion.div 
          className="absolute inset-0 rounded-full border-4 border-emerald-200"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle ring */}
        <motion.div 
          className="absolute inset-4 rounded-full border-4 border-emerald-300 opacity-70"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div 
          className="absolute inset-8 rounded-full border-4 border-emerald-400 opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Profile image */}
        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src={pprofile}
            alt="Prateek Singh"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating elements around image */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-300 rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-5 h-5 bg-emerald-200 rounded-full"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-100 rounded-full opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-200 rounded-full opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default function Hero() {
  const words = [
    "Biotechnology Researcher",
    "Virology Enthusiast",
    "Exploring Host-Pathogen Interactions",
    "Project Associate @ ICAR-IVRI",
  ];

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "2+", label: "Research Projects" },
    { number: "2+", label: "Publications" },
  ];

  return (
    <>
      <main className="bg-gradient-to-br from-white to-emerald-50 min-h-screen">
        <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
          {/* Background elements */}
          <FloatingElements />
          
          {/* Subtle gradient circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"></div>

          {/* Main content */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-16">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Welcome badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 backdrop-blur-sm border border-emerald-200 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-emerald-700 text-sm font-medium">
                  Welcome to my research universe
                </span>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 leading-tight">
                  <SparklesText text="Hello" />
                  <span className="block">I'm <span className="text-emerald-600">Prateek Singh</span></span>
                </h1>
              </motion.div>

              {/* Roles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 mb-6 backdrop-blur-sm"
              >
                <i className="fas fa-dna text-emerald-500 text-lg"></i>
                <span className="text-emerald-700 font-medium">
                  <FlipWords words={words} className="text-emerald-700" />
                </span>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 max-w-xl mx-auto lg:mx-0"
              >
                <p className="text-lg text-emerald-700 leading-relaxed">
     Passionate about unraveling molecular host-pathogen interactions and contributing
                  to impactful research innovations.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center lg:justify-start gap-6 mb-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">{stat.number}</div>
                    <div className="text-sm text-emerald-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* Learn More */}
                <a
                  href="#about"
                  className="group relative inline-flex items-center justify-center gap-3 bg-emerald-600 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="block w-full px-6 py-3 rounded-[11px] bg-white transition-all duration-300 group-hover:bg-emerald-600">
                    <span className="relative flex items-center justify-center gap-2 text-emerald-600 font-medium group-hover:text-white">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </a>

                {/* Resume */}
                <a
                  href="/CV Prateek.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Prateek_Singh_Resume.pdf"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-white border border-emerald-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="block w-full px-6 py-3 rounded-[11px] bg-white transition-all duration-300 group-hover:bg-emerald-50">
                    <span className="relative flex items-center justify-center gap-2 text-emerald-700 font-medium">
                      <span>Get Resume</span>
                      <i className="fas fa-file-alt transform transition-all duration-300 group-hover:rotate-12"></i>
                    </span>
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Right column - Profile image */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <ProfileImage />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <span className="text-emerald-600 text-sm flex items-center gap-2">
              <i className="fas fa-mouse text-emerald-500"></i>
              About me
            </span>
            <motion.i 
              className="fas fa-chevron-down text-emerald-500 text-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </section>
      </main>
      
      {/* PortfolioPage component placed OUTSIDE the Hero section */}
      <PortfolioPage />
    </>
  );
}