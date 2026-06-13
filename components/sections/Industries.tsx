'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, ShoppingCart, GraduationCap, HeartPulse, Banknote, Smartphone, Factory, Users } from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    name: 'E-Commerce',
    description: 'Online stores, payment systems, inventory management, and customer analytics.',
    projects: 5,
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'E-learning platforms, LMS systems, AI tutors, and educational tools.',
    projects: 3,
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'Health monitoring apps, patient management, telemedicine solutions.',
    projects: 2,
  },
  {
    icon: Banknote,
    name: 'FinTech',
    description: 'Financial applications, payment gateways, banking solutions.',
    projects: 4,
  },
  {
    icon: Smartphone,
    name: 'SaaS',
    description: 'Cloud-based software solutions, subscription platforms, B2B tools.',
    projects: 6,
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Inventory systems, supply chain management, automation tools.',
    projects: 2,
  },
  {
    icon: Users,
    name: 'Social Media',
    description: 'Community platforms, social networking, content management.',
    projects: 3,
  },
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Property listing platforms, CRM systems, virtual tours.',
    projects: 2,
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Industries
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience working across diverse industries and domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {industry.description}
                  </p>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {industry.projects} Project{industry.projects !== 1 ? 's' : ''}
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
