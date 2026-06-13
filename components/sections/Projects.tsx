'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  category: string;
  featured: boolean;
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string | null;
  views: number;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8 px-4">
            Explore my portfolio of AI-powered applications and web development projects
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-5 py-2 md:py-2.5 rounded-xl text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800/50 border border-slate-700/50 text-gray-300 hover:border-blue-500/50 hover:bg-slate-800/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-800/70 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group">
                <CardHeader>
                  {/* Project Image/Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-white text-6xl overflow-hidden">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span>💡</span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl text-gray-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded text-xs font-medium whitespace-nowrap">
                        Featured
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 text-gray-300 rounded text-xs">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Views */}
                  <div className="flex items-center gap-1 text-sm text-gray-400 mt-4">
                    <Eye className="w-4 h-4" />
                    {project.views} views
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1 bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-blue-500/50" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {!project.githubUrl && !project.liveUrl && (
                    <Button variant="outline" size="sm" className="flex-1 bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-blue-500/50" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* View All Repositories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block">
            <a
              href="https://github.com/Anas-Rajput12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-gray-300 hover:bg-slate-800/70 hover:border-blue-500/50 hover:text-cyan-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Check All My Repositories on GitHub</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
