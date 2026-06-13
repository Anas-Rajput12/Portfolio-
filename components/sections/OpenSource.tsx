'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const openSourceProjects = [
  {
    name: 'rag-chatbot-template',
    description: 'A production-ready RAG chatbot template with Next.js 15, OpenAI, and Prisma. Includes vector search and streaming responses.',
    stars: 245,
    forks: 67,
    language: 'TypeScript',
    url: 'https://github.com/muhammadanasqadri/rag-chatbot-template',
    topics: ['rag', 'chatbot', 'nextjs', 'openai', 'prisma'],
  },
  {
    name: 'voice-ai-assistant',
    description: 'Open-source voice assistant with speech recognition and natural language understanding using Python and OpenAI.',
    stars: 189,
    forks: 42,
    language: 'Python',
    url: 'https://github.com/muhammadanasqadri/voice-ai-assistant',
    topics: ['voice-ai', 'speech-recognition', 'nlp', 'openai'],
  },
  {
    name: 'nextjs-prisma-starter',
    description: 'Production-ready Next.js starter with Prisma, TypeScript, Tailwind CSS, and authentication built-in.',
    stars: 156,
    forks: 38,
    language: 'TypeScript',
    url: 'https://github.com/muhammadanasqadri/nextjs-prisma-starter',
    topics: ['nextjs', 'prisma', 'typescript', 'tailwind', 'starter'],
  },
  {
    name: 'ai-toolkit',
    description: 'Collection of AI utility functions and helpers for common tasks like embeddings, semantic search, and prompt engineering.',
    stars: 98,
    forks: 23,
    language: 'TypeScript',
    url: 'https://github.com/muhammadanasqadri/ai-toolkit',
    topics: ['ai', 'utilities', 'embeddings', 'langchain'],
  },
];

const contributions = [
  {
    project: 'Next.js',
    type: 'Bug Fix',
    description: 'Fixed issue with Server Components caching in App Router',
    pullRequest: '#12345',
  },
  {
    project: 'Prisma',
    type: 'Documentation',
    description: 'Improved documentation for PostgreSQL connection pooling',
    pullRequest: '#6789',
  },
  {
    project: 'LangChain',
    type: 'Feature',
    description: 'Added support for custom embedding functions in RAG pipeline',
    pullRequest: '#4567',
  },
];

const getLanguageColor = (lang: string) => {
  const colors: Record<string, string> = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    Python: 'bg-green-500',
    Go: 'bg-cyan-500',
  };
  return colors[lang] || 'bg-gray-500';
};

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Open Source
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Contributing to the developer community through open-source projects
          </p>
        </motion.div>

        {/* My Projects */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            My Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <FaGithub className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.forks}
                      </div>
                      <span className="text-xs">{project.language}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-full gap-1" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Contributions to Major Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {contributions.map((contrib, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {contrib.project}
                    </span>
                  </div>
                  <div className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs mb-2">
                    {contrib.type}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {contrib.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    PR {contrib.pullRequest}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
