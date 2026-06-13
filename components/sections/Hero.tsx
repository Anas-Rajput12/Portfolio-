'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail, MapPin, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Image from "next/image";


export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [githubRepos, setGithubRepos] = useState<number | null>(null);

  const fullText = 'Building production-grade web applications and scalable systems — from e-commerce platforms to enterprise solutions. Modern stack. Clean code. Zero compromises.';

  const professionalRoles = [
  'AI & Full-Stack Developer',
  'Agentic AI Developer',
  'AI Automation Engineer',
  'Full Stack Developer',
  'Frontend Engineer',
  'Backend Developer',
  'Next.js Developer',
  'API Developer',
  'Cloud Solutions Engineer',
  'Database Specialist',
  'RAG Chatbot Developer',
  'Voice AI Developer',
  'NLP Engineer',
  'Web Application Developer',
];

  // Typing effect for description
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % professionalRoles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Fetch GitHub repos count
  useEffect(() => {
    fetch('https://api.github.com/users/Anas-Rajput12')
      .then(res => res.json())
      .then(data => setGithubRepos(data.public_repos))
      .catch(() => setGithubRepos(50)); // Fallback value
  }, []);

  const roles = [
    'Full Stack Engineer',
    'Frontend Architect',
    'Backend Developer',
    'UI/UX Designer',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-1">
              {/* Header Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Open to AI Collaborations & Freelance
                </div>
              </motion.div>

              {/* Location */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 mb-6 text-gray-400"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Pakistan · Remote</span>
              </motion.div> */}

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  <span className="text-gray-400">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    M. Anas Qadri
                  </span>
                </h1>
              </motion.div>

              {/* Rotating Professional Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-6 h-12 flex items-center"
              >
                <div className="text-xl md:text-2xl font-semibold overflow-hidden">
                  <motion.span
                    key={currentRole}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    {professionalRoles[currentRole]}
                  </motion.span>
                </div>
              </motion.div>

              {/* Subtitle with typing effect */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base md:text-lg text-gray-400 mb-8 min-h-[80px]"
              >
                {displayedText}
                <span className="animate-pulse">|</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 w-full sm:w-auto" asChild>
                  <a href="#projects">
                    View My Work
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-gray-700 text-gray-300 hover:bg-gray-800 w-full sm:w-auto" asChild>
                  <a href="https://github.com/Anas-Rajput12" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-4 h-4" />
                    GitHub Profile
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-gray-700 text-gray-300 hover:bg-gray-800 w-full sm:w-auto" asChild>
                  <a href="/resume">
                    <Download className="w-4 h-4" />
                    View Resume
                  </a>
                </Button>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                    70+
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">GitHub Repos</div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                    6+
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Projects Deployed</div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                    85%
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Code Reuse Rate</div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm hover:bg-slate-800/70 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                    149+
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">Tests Passing</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Image & Terminal */}
            <div className="order-2 space-y-8">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative mt-8"
              >
                <div className="relative w-64 h-64 mx-auto">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" />

                  {/* Main image container */}
                  <div className="relative aspect-square w-64 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

  <Image
    src="/profile.jpg"
    alt="M. Anas Qadri"
    fill
    className="object-cover object-top"
    priority
  />
</div>

                  {/* Decorative rings */}
                  <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-pulse animation-delay-1000" />
                  <div className="absolute -inset-8 rounded-full border border-purple-500/10 animate-pulse animation-delay-2000" />
                </div>
              </motion.div>

              {/* Terminal Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-slate-900/50 border border-slate-700/50 rounded-lg overflow-hidden backdrop-blur-sm"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">m.anas-qadri ~ portfolio</span>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2">
                    <span className="text-green-400">$</span> claude code --init
                  </div>
                  <div className="text-blue-400 mb-2">
                    &gt; Initializing development environment...
                  </div>
                  <div className="text-cyan-400 mb-2">
                    &gt; Loading expertise modules
                  </div>
                  <div className="text-gray-300 mb-4">
                    <span className="text-green-400">✓</span> Full Stack Architecture loaded
                    <span className="animate-pulse ml-1">█</span>
                  </div>

                  {/* Available Roles */}
                  <div className="mt-4 text-gray-500 mb-2">// available_expertise</div>
                  <div className="grid grid-cols-1 gap-2">
                    {roles.map((role, index) => (
                      <div
                        key={index}
                        className="text-gray-400 hover:text-blue-400 transition-colors cursor-default"
                      >
                        → {role}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
