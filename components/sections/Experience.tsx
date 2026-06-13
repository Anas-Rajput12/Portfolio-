'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { formatDateRange } from '@/lib/utils';

interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  location: string | null;
  employmentType: string;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
}

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Gradient orbs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700/50" />

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot - hidden on mobile, visible on md+ */}
                  <div className="hidden md:block absolute left-6 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg shadow-blue-500/30" />

                  <Card className="hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border-l-4 border-l-blue-500 border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm md:text-base">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-sm font-medium self-start">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDateRange(exp.startDate, exp.endDate)}
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        )}
                        <div className="px-2 py-0.5 bg-slate-700/50 border border-slate-600/50 rounded text-xs text-gray-300">
                          {exp.employmentType}
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
