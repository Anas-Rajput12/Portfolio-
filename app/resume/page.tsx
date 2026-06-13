'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Globe, FileText, FileDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import './print.css';

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    try {
      // Dynamically import react-pdf
      const { pdf } = await import('@react-pdf/renderer');
      const { ResumePDF } = await import('./ResumePDF');

      // Generate PDF
      const blob = await pdf(<ResumePDF />).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Muhammad_Anas_Qadri_Resume.pdf';
      link.click();

      // Cleanup
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF: ' + (error as Error).message);
    }
  };

  const handleDownloadMD = () => {
    // Generate markdown version
    const markdown = generateMarkdownResume();
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_Anas_Qadri_Resume.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateMarkdownResume = () => {
    return `# Muhammad Anas Qadri
## AI & Full Stack Developer

**Email:** muhammadanasqadri2@gmail.com
**Portfolio:** https://portfolio12-iota-orcin.vercel.app/
**LinkedIn:** https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/
**GitHub:** https://github.com/Anas-Rajput12
**Twitter:** https://x.com/MuhammadAnasQ17
**Location:** Pakistan

---

## Professional Summary

AI & Full Stack Developer specializing in intelligent systems, RAG chatbots, and scalable web applications. Building the future with code and AI. Experienced in developing production-ready AI applications with modern web technologies, focusing on creating intelligent, user-centric solutions that drive business value.

---

## Technical Skills

### Languages
- JavaScript, TypeScript, Python, HTML, CSS, ES6+

### Frameworks & Libraries
- React, Next.js, Node.js, Express.js, Tailwind CSS

### AI & Machine Learning
- OpenAI, LLM, NLP, RAG Systems, AI Automation

### Databases
- PostgreSQL, MySQL, Prisma ORM, Firebase

### Cloud & DevOps
- Docker, Kubernetes, Vercel, Netlify, GitHub Actions

### Tools & Platforms
- Git, GitHub, VS Code, Figma

### Business Tools
- MS Word, MS Excel, Google Sheets

---

## Projects

### AI Customer Support Chatbot SaaS
Production-ready AI SaaS chatbot using GPT-4o and RAG for intelligent customer support with document-based knowledge retrieval.
- **Tech Stack:** Next.js 15, TypeScript, OpenAI GPT-4o, Prisma, PostgreSQL, NextAuth

### AI-Powered Todo App with Chatbot Assistant
Smart task management app with AI chatbot that helps users create and organize tasks using natural language.
- **Tech Stack:** Next.js, FastAPI, Better Auth, Neon DB

### Car Rental E-Commerce Platform
Full-stack car rental website with real-time listings, booking system, CMS integration and modern UI.
- **Tech Stack:** React, Sanity CMS, Node.js, MongoDB

### Physical AI Book RAG Chatbot
RAG-based AI system allowing users to query uploaded documents with context-aware GPT responses.
- **Tech Stack:** Docusaurus, Qdrant, NeonDB, FastAPI

---

## Hackathons & Achievements

### AI Customer Support Chatbot SaaS - 2026
Built a production-ready AI SaaS chatbot using GPT-4o and RAG for intelligent customer support.
- **Winner - 1st Place**
- Solo Project
- Technologies: Next.js 15, TypeScript, OpenAI GPT-4o, Prisma, PostgreSQL, NextAuth

### AI-Powered Todo App with Chatbot Assistant - 2025
Smart task management app with AI chatbot for natural language task creation.
- **Runner-up - 2nd Place**
- Solo Project
- Technologies: Next.js, FastAPI, Better Auth, Neon DB

### Car Rental E-Commerce Platform - 2024
Full-stack car rental website with real-time listings and booking system.
- **3rd Place**
- Solo Project
- Technologies: React, Sanity CMS, Node.js, MongoDB

### Physical AI Book RAG Chatbot - 2025
RAG-based AI system for document querying with context-aware responses.
- Solo Project
- Technologies: Docusaurus, Qdrant, NeonDB, FastAPI

---

## Education

**Bachelor in Information Technology**
Quaid-e-Awam University of Engineering, Science & Technology Nawabshah
2021 - 2025

---

## Contact

- **Email:** muhammadanasqadri2@gmail.com
- **Portfolio:** https://portfolio12-iota-orcin.vercel.app/
- **LinkedIn:** https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/
- **GitHub:** https://github.com/Anas-Rajput12
- **Twitter:** https://x.com/MuhammadAnasQ17
`;
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'muhammadanasqadri2@gmail.com',
      href: 'mailto:muhammadanasqadri2@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      label: 'portfolio12-iota-orcin.vercel.app',
      href: 'https://portfolio12-iota-orcin.vercel.app/',
      color: 'text-cyan-400'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/',
      color: 'text-blue-500'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/Anas-Rajput12',
      color: 'text-gray-300'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: 'https://x.com/MuhammadAnasQ17',
      color: 'text-cyan-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Gradient orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 max-w-5xl">
        {/* Back Button at Top */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 no-print"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-gray-300 hover:bg-slate-800/70 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
          >
            ← Back to Portfolio
          </a>
        </motion.div>

        {/* Header with Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent no-print">
              Professional Resume
            </h1>

            {/* Download Buttons */}
            <div className="flex gap-3 no-print">
              <Button
                onClick={handleDownloadPDF}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/30 gap-2 transition-all duration-300"
              >
                <FileDown className="w-4 h-4" />
                Download PDF
              </Button>
              <Button
                onClick={handleDownloadMD}
                variant="outline"
                className="bg-slate-800/50 border-slate-700/50 text-gray-300 hover:bg-slate-800 hover:text-white hover:border-cyan-500/50 gap-2 transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                Download MD
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 space-y-8 shadow-2xl"
        >
          {/* Header Section */}
          <div className="text-center space-y-4 pb-8 border-b border-slate-700/50">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100">
              Muhammad Anas Qadri
            </h2>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold">
              AI & Full Stack Developer
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <Icon className={`w-4 h-4 ${link.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Professional Summary */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
              Professional Summary
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              AI & Full Stack Developer specializing in intelligent systems, RAG chatbots, and scalable web applications.
              Building the future with code and AI. Experienced in developing production-ready AI applications with modern
              web technologies, focusing on creating intelligent, user-centric solutions that drive business value and
              deliver exceptional user experiences.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <h4 className="text-sm md:text-base font-semibold text-cyan-400 mb-2">Languages</h4>
                <p className="text-gray-400 text-xs md:text-sm">JavaScript, TypeScript, Python, HTML, CSS, ES6+</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <h4 className="text-sm md:text-base font-semibold text-cyan-400 mb-2">Frameworks & Libraries</h4>
                <p className="text-gray-400 text-xs md:text-sm">React, Next.js, Node.js, Express.js, Tailwind CSS</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <h4 className="text-sm md:text-base font-semibold text-cyan-400 mb-2">AI & Machine Learning</h4>
                <p className="text-gray-400 text-xs md:text-sm">OpenAI, LLM, NLP, RAG Systems, AI Automation</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <h4 className="text-sm md:text-base font-semibold text-cyan-400 mb-2">Databases</h4>
                <p className="text-gray-400 text-xs md:text-sm">PostgreSQL, MySQL, Prisma ORM, Firebase</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <h4 className="text-sm md:text-base font-semibold text-cyan-400 mb-2">Cloud & DevOps</h4>
                <p className="text-gray-400 text-xs md:text-sm">Docker, Kubernetes, Vercel, Netlify, GitHub Actions</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                <h4 className="text-sm md:text-base font-semibold text-cyan-400 mb-2">Tools & Platforms</h4>
                <p className="text-gray-400 text-xs md:text-sm">Git, GitHub, VS Code, Figma</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
              Featured Projects
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-l-blue-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
                <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">AI Customer Support Chatbot SaaS</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
                  Production-ready AI SaaS chatbot using GPT-4o and RAG for intelligent customer support with document-based
                  knowledge retrieval. Implemented advanced natural language processing and context-aware responses with
                  scalable architecture.
                </p>
                <p className="text-cyan-400 text-xs md:text-sm font-medium">
                  Next.js 15 • TypeScript • OpenAI GPT-4o • Prisma • PostgreSQL • NextAuth
                </p>
              </div>

              <div className="border-l-4 border-l-cyan-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
                <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">AI-Powered Todo App with Chatbot Assistant</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
                  Smart task management app with AI chatbot that helps users create and organize tasks using natural language.
                  Features intelligent task prioritization and context understanding.
                </p>
                <p className="text-cyan-400 text-xs md:text-sm font-medium">
                  Next.js • FastAPI • Better Auth • Neon DB
                </p>
              </div>

              <div className="border-l-4 border-l-purple-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
                <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">Car Rental E-Commerce Platform</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
                  Full-stack car rental website with real-time listings, booking system, CMS integration and modern UI.
                  Implemented secure payment processing and user management.
                </p>
                <p className="text-cyan-400 text-xs md:text-sm font-medium">
                  React • Sanity CMS • Node.js • MongoDB
                </p>
              </div>

              <div className="border-l-4 border-l-green-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
                <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">Physical AI Book RAG Chatbot</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
                  RAG-based AI system allowing users to query uploaded documents with context-aware GPT responses.
                  Implemented vector database integration and semantic search capabilities.
                </p>
                <p className="text-cyan-400 text-xs md:text-sm font-medium">
                  Docusaurus • Qdrant • NeonDB • FastAPI
                </p>
              </div>
            </div>
          </section>

          {/* Hackathons & Achievements */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
              Hackathons & Achievements
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 md:p-6 rounded-lg border border-blue-500/30">
                <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">AI Customer Support Chatbot SaaS</h4>
                <p className="text-gray-400 text-sm md:text-base mb-2">2026 • Solo Project</p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Built a production-ready AI SaaS chatbot using GPT-4o and RAG. Demonstrated expertise in AI integration,
                  scalable architecture, and user experience design.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 md:p-6 rounded-lg border border-cyan-500/30">
                <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">AI-Powered Todo App</h4>
                <p className="text-gray-400 text-sm md:text-base mb-2">2025 • Solo Project</p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Developed intelligent task management with natural language processing. Showcased skills in AI integration
                  and modern frameworks.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 md:p-6 rounded-lg border border-purple-500/30">
                <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">Car Rental E-Commerce Platform</h4>
                <p className="text-gray-400 text-sm md:text-base mb-2">2024 • Solo Project</p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Created comprehensive full-stack e-commerce solution. Demonstrated proficiency in React, backend development,
                  and CMS integration.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
              Education
            </h3>
            <div className="bg-slate-700/30 p-4 md:p-6 rounded-lg border border-slate-600/30">
              <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">Bachelor in Information Technology</h4>
              <p className="text-gray-400 text-sm md:text-base">
                Quaid-e-Awam University of Engineering, Science & Technology Nawabshah
              </p>
              <p className="text-cyan-400 text-sm md:text-base font-medium mt-2">2021 - 2025</p>
            </div>
          </section>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 no-print"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:border-transparent hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            ← Back to Portfolio
          </a>
        </motion.div>
      </div>
    </div>
  );
}
