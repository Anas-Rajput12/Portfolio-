'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Brain, Rocket, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description:
        'Building scalable web applications using React, Next.js, TypeScript, Node.js, PostgreSQL, and modern development practices.',
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description:
        'Developing AI-powered applications including AI Tutors, RAG chatbots, virtual assistants, NLP systems, and automation tools.',
    },
    {
      icon: Rocket,
      title: 'Cloud & Deployment',
      description:
        'Deploying modern applications using Docker, Kubernetes, Vercel, GitHub, and cloud-native technologies.',
    },
    {
      icon: Heart,
      title: 'Problem Solver',
      description:
        'Passionate about solving real-world problems through innovative software solutions and user-focused design.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      {/* Gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            AI & Full-Stack Developer focused on building intelligent,
            scalable, and impactful digital solutions.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-100 mb-3">
                Muhammad Anas Qadri
              </h3>

              <p className="text-xl text-blue-400 font-semibold mb-3">
                AI & Full-Stack Developer
              </p>

              <p className="text-gray-400 mb-6">
                📍 Nawabshah, Pakistan
              </p>

              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  I am a passionate AI & Full-Stack Developer with hands-on
                  experience in developing modern web applications,
                  AI-powered platforms, automation systems, and intelligent
                  virtual assistants.
                </p>

                <p>
                  My expertise includes React, Next.js, TypeScript,
                  JavaScript, Node.js, Python, PostgreSQL, MySQL, Docker,
                  Kubernetes, and cloud deployment technologies.
                </p>

                <p>
                  During my academic and professional journey, I have built
                  projects such as AI Tutor Systems, Voice-Enabled Virtual
                  Assistants, E-Commerce Platforms, and AI Automation
                  Solutions that improve productivity and user experience.
                </p>

                <p>
                  I enjoy transforming innovative ideas into real-world
                  applications and continuously learning emerging
                  technologies in Artificial Intelligence, Software
                  Engineering, and Cloud Computing.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="text-3xl font-bold text-blue-400">
                    10+
                  </h4>
                  <p className="text-gray-400">
                    Projects Built
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="text-3xl font-bold text-blue-400">
                    2+
                  </h4>
                  <p className="text-gray-400">
                    Professional Roles
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-1 shadow-2xl shadow-blue-500/20">
                  <div className="bg-slate-900/95 backdrop-blur-sm rounded-3xl p-12 flex flex-col items-center justify-center text-center">
                    <div className="text-7xl mb-6">
                      👨‍💻
                    </div>

                    <h4 className="text-2xl font-bold mb-4 text-gray-100">
                      Building AI-Powered Solutions
                    </h4>

                    <p className="text-gray-400">
                      Creating intelligent applications that combine
                      modern web technologies with Artificial Intelligence
                      to deliver meaningful user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-gray-100">
                    {feature.title}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}