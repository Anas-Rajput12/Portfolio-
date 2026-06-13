'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss,
  SiOpenai, SiPostgresql, SiMysql, SiPrisma, SiFirebase,
  SiDocker, SiKubernetes, SiVercel, SiNetlify, SiGithubactions,
  SiGit, SiGithub, SiFigma, SiGooglesheets
} from 'react-icons/si';
import {
  Database, Code2, Brain, Cloud, Briefcase, Wrench, FileSpreadsheet, FileText, Code, LayoutGrid
} from 'lucide-react';

const skillsData = [
  {
    category: 'All',
    icon: LayoutGrid,
    color: 'from-blue-400 to-purple-400',
    skills: [] // Will be populated below
  },
  {
    category: 'Languages',
    icon: Code2,
    color: 'from-blue-400 to-cyan-400',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
      { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: SiCss, color: 'text-blue-500' },
      { name: 'ES6+', icon: SiJavascript, color: 'text-yellow-400' },
    ]
  },
  {
    category: 'Frameworks',
    icon: Code2,
    color: 'from-green-400 to-emerald-400',
    skills: [
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-100' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    ]
  },
  {
    category: 'AI & Agents',
    icon: Brain,
    color: 'from-purple-400 to-pink-400',
    skills: [
      { name: 'OpenAI', icon: SiOpenai, color: 'text-green-400' },
      { name: 'LLM', icon: Brain, color: 'text-purple-400' },
      { name: 'NLP', icon: Brain, color: 'text-pink-400' },
      { name: 'RAG Systems', icon: Brain, color: 'text-indigo-400' },
      { name: 'AI Automation', icon: Brain, color: 'text-purple-500' },
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'from-orange-400 to-red-400',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
      { name: 'Prisma ORM', icon: SiPrisma, color: 'text-gray-100' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-400' },
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-cyan-400 to-blue-400',
    skills: [
      { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
      { name: 'Vercel', icon: SiVercel, color: 'text-gray-100' },
      { name: 'Netlify', icon: SiNetlify, color: 'text-cyan-400' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-400' },
    ]
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-indigo-400 to-blue-400',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-orange-500' },
      { name: 'GitHub', icon: SiGithub, color: 'text-gray-100' },
      { name: 'VS Code', icon: Code, color: 'text-blue-400' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-400' },
    ]
  },
  {
    category: 'Business Tools',
    icon: Briefcase,
    color: 'from-teal-400 to-cyan-400',
    skills: [
      { name: 'MS Word', icon: FileText, color: 'text-blue-500' },
      { name: 'MS Excel', icon: FileSpreadsheet, color: 'text-green-500' },
      { name: 'Google Sheets', icon: SiGooglesheets, color: 'text-green-400' },
    ]
  }
];

// Populate "All" category with all skills
skillsData[0].skills = skillsData.slice(1).flatMap(category => category.skills);

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const currentCategory = skillsData[selectedCategory];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Gradient orbs */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Technologies I use to ship production-ready applications — from agentic AI systems to cloud-native microservices.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 px-2"
        >
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === index;
            return (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(index)}
                className={`flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800/50 border border-slate-700/50 text-gray-300 hover:border-blue-500/50 hover:bg-slate-800/70'
                }`}
              >
                <Icon className="w-3 h-3 md:w-4 md:h-4" />
                <span className="whitespace-nowrap">{category.category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Selected Category Skills */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          {/* Category Title */}
          <div className="flex items-center gap-4 mb-8">
            <h3 className={`text-3xl font-bold bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`}>
              {currentCategory.category}
            </h3>
            <div className={`h-[2px] flex-1 bg-gradient-to-r ${currentCategory.color} opacity-30 rounded-full`} />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCategory.skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <SkillIcon className={`w-12 h-12 ${skill.color} transition-transform group-hover:scale-110`} />
                    </div>

                    {/* Skill Name */}
                    <p className="text-center text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </p>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${currentCategory.color} transition duration-300 rounded-2xl`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}