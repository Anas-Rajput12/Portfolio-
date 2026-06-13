'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Building AI Chatbots with RAG Architecture',
    excerpt: 'A comprehensive guide to implementing Retrieval-Augmented Generation for intelligent chatbots.',
    date: '2024-05-15',
    readTime: '8 min read',
    tags: ['AI', 'RAG', 'LangChain'],
    image: '💬',
  },
  {
    id: 2,
    title: 'Next.js 15: What\'s New and How to Upgrade',
    excerpt: 'Exploring the latest features in Next.js 15 including improved App Router and Server Components.',
    date: '2024-04-20',
    readTime: '6 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    image: '⚡',
  },
  {
    id: 3,
    title: 'Optimizing PostgreSQL Queries with Prisma',
    excerpt: 'Best practices for database optimization and efficient query patterns using Prisma ORM.',
    date: '2024-03-10',
    readTime: '10 min read',
    tags: ['PostgreSQL', 'Prisma', 'Database'],
    image: '🗄️',
  },
  {
    id: 4,
    title: 'Voice AI: From Speech to Action',
    excerpt: 'Building voice-activated applications using modern speech recognition and NLP technologies.',
    date: '2024-02-05',
    readTime: '7 min read',
    tags: ['Voice AI', 'NLP', 'Python'],
    image: '🎤',
  },
  {
    id: 5,
    title: 'TypeScript Best Practices for Large Applications',
    excerpt: 'Structuring TypeScript projects for maintainability and type safety at scale.',
    date: '2024-01-15',
    readTime: '9 min read',
    tags: ['TypeScript', 'Best Practices', 'Architecture'],
    image: '📘',
  },
  {
    id: 6,
    title: 'Deploying Next.js Apps to Vercel',
    excerpt: 'A step-by-step guide to deploying and optimizing Next.js applications on Vercel platform.',
    date: '2023-12-20',
    readTime: '5 min read',
    tags: ['Deployment', 'Vercel', 'DevOps'],
    image: '🚀',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and insights about AI, web development, and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20" asChild>
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
