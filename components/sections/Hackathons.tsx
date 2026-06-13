'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Calendar, Award } from 'lucide-react';

const hackathons = [
  {
    name: 'AI Customer Support Chatbot SaaS',
    date: '2026',
    position: '🏆 Winner',
    description:
      'Built a production-ready AI SaaS chatbot using GPT-4o and RAG for intelligent customer support with document-based knowledge retrieval.',
    teamSize: 'Solo',
    technologies: [
      'Next.js 15',
      'TypeScript',
      'OpenAI GPT-4o',
      'Prisma',
      'PostgreSQL',
      'NextAuth',
    ],
  },
  {
    name: 'AI-Powered Todo App with Chatbot Assistant',
    date: '2025',
    position: '🥈 2nd Place',
    description:
      'Smart task management app with AI chatbot that helps users create and organize tasks using natural language.',
    teamSize: 'Solo',
    technologies: [
      'Next.js',
      'FastAPI',
      'Better Auth',
      'Neon DB',
    ],
  },
  {
    name: 'Car Rental E-Commerce Platform',
    date: '2024',
    position: '🥉 3rd Place',
    description:
      'Full-stack car rental website with real-time listings, booking system, CMS integration and modern UI.',
    teamSize: 'Solo',
    technologies: [
      'React',
      'Sanity CMS',
      'Node.js',
      'MongoDB',
    ],
  },
  {
    name: 'Physical AI Book RAG Chatbot',
    date: '2025',
    description:
      'RAG-based AI system allowing users to query uploaded documents with context-aware GPT responses.',
    teamSize: 'Solo',
    technologies: [
      'Docusaurus',
      'Qdrant',
      'NeonDB',
      'FastAPI',
    ],
  },
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hackathons
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Competitive programming and rapid prototyping achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-800/70 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group border-l-4 border-l-yellow-500">
                <CardHeader>

                  <CardTitle className="text-xl text-gray-100 group-hover:text-cyan-400 transition-colors">
                    {hackathon.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {hackathon.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {hackathon.teamSize}
                    </div>
                  </div>



                  <p className="text-gray-400">
                    {hackathon.description}
                  </p>

                  <div>
                    <p className="text-sm font-semibold text-gray-200 mb-2">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
