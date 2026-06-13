'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Target, TrendingUp, Users2 } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Award,
    title: 'AI & Machine Learning',
    level: 'Expert',
    description: 'Specialized in building intelligent systems using RAG, LLMs, and NLP.',
    highlights: [
      'RAG Architecture & Vector Databases',
      'OpenAI API & LangChain Integration',
      'Voice AI & Speech Recognition',
      'Natural Language Processing',
      'Prompt Engineering',
      'AI Model Fine-tuning',
    ],
    yearsOfExperience: '3+',
  },
  {
    icon: Target,
    title: 'Full Stack Development',
    level: 'Expert',
    description: 'End-to-end web application development with modern frameworks.',
    highlights: [
      'React & Next.js 15',
      'Node.js & Express.js',
      'TypeScript',
      'PostgreSQL & Prisma',
      'REST & GraphQL APIs',
      'Server Components & SSR',
    ],
    yearsOfExperience: '4+',
  },
  {
    icon: TrendingUp,
    title: 'System Architecture',
    level: 'Advanced',
    description: 'Designing scalable, maintainable, and performant systems.',
    highlights: [
      'Microservices Architecture',
      'Database Design & Optimization',
      'Caching Strategies',
      'API Design Patterns',
      'Performance Optimization',
      'Security Best Practices',
    ],
    yearsOfExperience: '3+',
  },
  {
    icon: Users2,
    title: 'Team Collaboration',
    level: 'Advanced',
    description: 'Working effectively in teams and leading development projects.',
    highlights: [
      'Agile/Scrum Methodologies',
      'Code Review & Mentoring',
      'Technical Documentation',
      'Git Workflow & CI/CD',
      'Project Management',
      'Client Communication',
    ],
    yearsOfExperience: '3+',
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert': return 'from-green-500 to-emerald-500';
    case 'Advanced': return 'from-blue-500 to-cyan-500';
    case 'Intermediate': return 'from-yellow-500 to-orange-500';
    default: return 'from-gray-500 to-gray-600';
  }
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep expertise in key areas of software development and AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getLevelColor(area.level)} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <area.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getLevelColor(area.level)} text-white`}>
                        {area.level}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {area.yearsOfExperience} years
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Highlights:
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {area.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {highlight}
                          </span>
                        </div>
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
