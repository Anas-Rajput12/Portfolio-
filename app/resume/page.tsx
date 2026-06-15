"use client";

import { motion } from 'framer-motion';
import { Download, Mail, Globe, FileText, FileDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import './print.css';

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const handleDownloadPDF = () => {
    window.print();
  };

  // ✅ DOWNLOAD MARKDOWN FILE
  const handleDownloadMD = () => {
    const mdContent = generateMarkdownResume();
    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Muhammad_Anas_Qadri_Resume.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

AI & Full Stack Developer specializing in intelligent systems, RAG chatbots, and scalable web applications. Passionate about building production-ready AI solutions using modern web technologies. Focused on creating intelligent, user-centric systems that solve real-world problems and deliver business value.

---

## Technical Skills

### Languages
- JavaScript, TypeScript, Python, HTML, CSS, ES6+

### Frameworks & Libraries
- React, Next.js, Node.js, Express.js, Tailwind CSS

### AI & Machine Learning
- OpenAI, LLM, NLP, RAG Systems, AI Automation, Speech Processing

### Databases
- PostgreSQL, MySQL, MongoDB, Prisma ORM, Firebase

### Cloud & DevOps
- Docker, Kubernetes, Vercel, Netlify, GitHub Actions

### Tools & Platforms
- Git, GitHub, VS Code, Figma, Postman

---

## Experience

### Web Developer Intern – High Tech Software House
**07/2025 – 08/2025 • Nawabshah**
- Developed responsive web applications using React, Next.js, JavaScript, HTML, CSS
- Collaborated with senior developers on client-based projects
- Improved UI/UX using modern design principles
- Worked with Git, version control, and Agile workflows

---

### AI Developer – UK-Based Company (Remote)
**02/2026 – 04/2026**
- Built AI-powered tutor system with real-time interaction
- Integrated speech-to-text and text-to-speech APIs
- Developed intelligent AI automation systems for education
- Focused on conversational AI and user experience

---

### Hackathon Project – E-Commerce Platform
**12/2024 – 01/2025 • GIAIC Karachi**
- Built responsive e-commerce platform under hackathon deadline
- Designed UI/UX and optimized performance
- Collaborated in team environment under pressure

---

## Projects

### AI Customer Support Chatbot SaaS
- Built GPT-4o + RAG based AI chatbot for customer support
- Document-based knowledge retrieval system
- Scalable SaaS architecture
- **Tech:** Next.js, TypeScript, OpenAI, Prisma, PostgreSQL, NextAuth

---

### AI-Powered Todo App with Chatbot Assistant
- Smart task manager with AI assistant
- Natural language task creation and automation
- Context-aware AI responses
- **Tech:** Next.js, FastAPI, Better Auth, Neon DB

---

### Car Rental E-Commerce Platform
- Full-stack booking system with real-time features
- Modern UI with CMS integration
- Secure and scalable architecture
- **Tech:** React, Node.js, Sanity CMS, MongoDB

---

### Physical AI Book RAG Chatbot
- RAG-based AI system for document Q&A
- Vector database integration for semantic search
- Context-aware AI responses
- **Tech:** Docusaurus, Qdrant, FastAPI, NeonDB

---

## Hackathons & Achievements

### 🏆 AI Customer Support Chatbot SaaS (2026)
- Winner – 1st Place (Solo Project)
- Built production-ready AI SaaS chatbot using GPT-4o + RAG
- Advanced NLP + document retrieval system

---

### 🥈 AI-Powered Todo App (2025)
- Runner-up – 2nd Place
- AI-powered task management system with chatbot assistant
- Natural language processing integration

---

### 🥉 Car Rental E-Commerce Platform (2024)
- 3rd Place Winner
- Full-stack booking system with modern UI/UX
- Real-world e-commerce solution

---

### 🤖 Physical AI Book RAG Chatbot (2025)
- Solo AI Project
- RAG-based document intelligence system
- Vector database + semantic search integration

---

## Education

Bachelor in Information Technology  
Quaid-e-Awam University of Engineering, Science & Technology Nawabshah  
2021 – 2025  

---

## Contact

- Email: muhammadanasqadri2@gmail.com  
- Portfolio: https://portfolio12-iota-orcin.vercel.app/  
- LinkedIn: https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/  
- GitHub: https://github.com/Anas-Rajput12  
- Twitter: https://x.com/MuhammadAnasQ17  
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10 max-w-5xl">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 no-print"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-gray-300 hover:bg-slate-800/70 hover:border-cyan-500/50 hover:text-cyan-400"
          >
            ← Back to Portfolio
          </a>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent no-print">
              Professional Resume
            </h1>

            <div className="flex gap-3 no-print">
              <Button onClick={handleDownloadPDF}>
               <FileDown className="w-4 h-4" /> Download PDF
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

/* Resume Content */

<motion.div
  ref={resumeRef}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 space-y-8 shadow-2xl"
>


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



<section>
  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
    <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
    Professional Summary
  </h3>

  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
    AI & Full Stack Developer specializing in intelligent systems, RAG chatbots, and scalable web applications. Building the future with code and AI. Experienced in developing production-ready AI applications with modern web technologies, focusing on creating intelligent, user-centric solutions that drive business value and deliver exceptional user experiences.
  </p>
</section>



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

  {/* Experience */}
<section>
  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
    <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
    Experience
  </h3>

  <div className="space-y-6">

    {/* Web Developer Intern */}
    <div className="border-l-4 border-l-cyan-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-1">
        Web Developer Intern – High Tech Software House
      </h4>
      <p className="text-cyan-400 text-xs md:text-sm mb-2">
        07/2025 – 08/2025 • Nawabshah
      </p>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        Developed responsive web applications using HTML, CSS, JavaScript, React, and Next.js. 
        Collaborated with senior developers on client-based projects to deliver high-performance solutions. 
        Improved UI/UX using modern responsive design principles and gained hands-on experience in Git and Agile workflows.
      </p>
    </div>

    {/* AI Developer */}
    <div className="border-l-4 border-l-blue-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-1">
        AI Developer – UK-Based Company (Remote)
      </h4>
      <p className="text-cyan-400 text-xs md:text-sm mb-2">
        02/2026 – 04/2026 • Remote
      </p>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        Developed an AI-powered tutor system with real-time interaction. 
        Integrated speech-to-text and text-to-speech APIs for voice-based communication. 
        Focused on building intelligent, responsive AI systems for education and user engagement.
      </p>
    </div>

    {/* Hackathon Project */}
    <div className="border-l-4 border-l-purple-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-1">
        Hackathon Project – E-Commerce Platform
      </h4>
      <p className="text-cyan-400 text-xs md:text-sm mb-2">
        12/2024 – 01/2025 • GIAIC, Karachi
      </p>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        Built a responsive e-commerce platform with modern UI/UX design and optimized performance. 
        Focused on teamwork, problem-solving, and delivering a functional product under hackathon deadlines.
      </p>
    </div>

    {/* Final Year Project */}
    <div className="border-l-4 border-l-green-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-1">
        Final Year Project – Voice-Based Virtual Assistant
      </h4>
      <p className="text-cyan-400 text-xs md:text-sm mb-2">
        11/2024 – 08/2025 • QUEST Nawabshah
      </p>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        Designed and developed a voice-enabled virtual assistant to support students’ academic needs. 
        Integrated NLP and speech recognition for multilingual interaction and built automated response systems 
        to enhance student accessibility and productivity.
      </p>
    </div>

  </div>
</section>



<section>
  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
    <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
    Featured Projects
  </h3>

  <div className="space-y-6">

    <div className="border-l-4 border-l-blue-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">AI Customer Support Chatbot SaaS</h4>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
        Production-ready AI SaaS chatbot using GPT-4o and RAG for intelligent customer support with document-based knowledge retrieval.
      </p>
      <p className="text-cyan-400 text-xs md:text-sm font-medium">
        Next.js 15 • TypeScript • OpenAI GPT-4o • Prisma • PostgreSQL • NextAuth
      </p>
    </div>

    <div className="border-l-4 border-l-cyan-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">AI-Powered Todo App with Chatbot Assistant</h4>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
        Smart task management app with AI chatbot that helps users create and organize tasks using natural language.
      </p>
      <p className="text-cyan-400 text-xs md:text-sm font-medium">
        Next.js • FastAPI • Better Auth • Neon DB
      </p>
    </div>

    <div className="border-l-4 border-l-purple-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">Car Rental E-Commerce Platform</h4>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
        Full-stack car rental website with real-time listings, booking system, CMS integration and modern UI.
      </p>
      <p className="text-cyan-400 text-xs md:text-sm font-medium">
        React • Sanity CMS • Node.js • MongoDB
      </p>
    </div>

    <div className="border-l-4 border-l-green-500 pl-4 md:pl-6 bg-slate-700/20 p-4 rounded-r-lg">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">Physical AI Book RAG Chatbot</h4>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
        RAG-based AI system allowing users to query uploaded documents with context-aware GPT responses.
      </p>
      <p className="text-cyan-400 text-xs md:text-sm font-medium">
        Docusaurus • Qdrant • NeonDB • FastAPI
      </p>
    </div>

  </div>
</section>


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
        Built a production-ready AI SaaS chatbot using GPT-4o and RAG.
      </p>
    </div>

    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 md:p-6 rounded-lg border border-cyan-500/30">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">AI-Powered Todo App</h4>
      <p className="text-gray-400 text-sm md:text-base mb-2">2025 • Solo Project</p>
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
        Developed intelligent task management with NLP.
      </p>
    </div>

    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 md:p-6 rounded-lg border border-purple-500/30">
      <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">Car Rental E-Commerce Platform</h4>
      <p className="text-gray-400 text-sm md:text-base mb-2">2024 • Solo Project</p>
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
        Full-stack e-commerce solution with React & Node.js.
      </p>
    </div>

  </div>
</section>



<section>
  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
    <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
    Education
  </h3>

  <div className="bg-slate-700/30 p-4 md:p-6 rounded-lg border border-slate-600/30">
    <h4 className="text-lg md:text-xl font-semibold text-gray-100 mb-2">
      Bachelor in Information Technology
    </h4>
    <p className="text-gray-400 text-sm md:text-base">
      Quaid-e-Awam University of Engineering, Science & Technology Nawabshah
    </p>
    <p className="text-cyan-400 text-sm md:text-base font-medium mt-2">
      2021 - 2025
    </p>
  </div>
</section>

</motion.div>

/* Back to Home Button */

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
