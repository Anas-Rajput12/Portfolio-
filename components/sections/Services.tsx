'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Brain,
  Code2,
  Smartphone,
  Database,
  Cloud,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & RAG Application Development',
    description:
      'Building intelligent applications with OpenAI GPT-4o, LLM integration, NLP, semantic search, and document-based knowledge retrieval.',
    features: [
      'RAG Chatbots',
      'AI Tutor Systems',
      'Voice Assistants (STT / TTS)',
      'OpenAI GPT-4o Integration',
    ],
  },

  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description:
      'Developing scalable web applications and backend APIs using modern frontend and backend technologies.',
    features: [
      'React & Next.js',
      'TypeScript',
      'Node.js & Express.js',
      'FastAPI & REST APIs',
    ],
  },

  {
    icon: Smartphone,
    title: 'Web & Mobile App Development',
    description:
      'Creating modern, responsive, and user-friendly interfaces for web and mobile that work smoothly on all devices.',
    features: [
      'React Native & Expo',
      'Responsive Design',
      'Tailwind CSS & shadcn/ui',
      'Framer Motion Animations',
    ],
  },

  {
    icon: Database,
    title: 'Database Solutions',
    description:
      'Designing efficient database structures and integrating relational, cloud, and vector databases for reliable data management.',
    features: [
      'PostgreSQL & MySQL',
      'Prisma ORM',
      'Neon DB & Firebase',
      'Qdrant Vector DB',
    ],
  },

  {
    icon: Cloud,
    title: 'Deployment & DevOps',
    description:
      'Deploying and managing applications using modern cloud platforms and containerized environments.',
    features: [
      'Vercel & Netlify Deployment',
      'Docker',
      'Kubernetes',
      'GitHub Actions CI/CD',
    ],
  },

  {
    icon: Zap,
    title: 'AI Automation & API Integration',
    description:
      'Connecting services, automating workflows with AI, and integrating third-party APIs to improve efficiency.',
    features: [
      'AI Automation',
      'API Integration',
      'Workflow Automation',
      'Smart AI Assistants',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Gradient orbs */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">
            Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            What I Do
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            I help businesses and startups build AI-powered solutions, RAG
            chatbots, voice-enabled systems, and scalable web and mobile
            applications using modern technologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <CardTitle className="text-xl text-gray-100">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-sm text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-100">
            Ready to Build Something Amazing?
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Whether you need an AI chatbot, a voice-enabled assistant, a
            full-stack web or mobile app, or an automation system, I&apos;m here
            to help turn your ideas into reality.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/30"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
