'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Inc.',
    avatar: '👩‍💼',
    rating: 5,
    content: 'Muhammad delivered an exceptional AI chatbot that exceeded our expectations. His expertise in RAG architecture and attention to detail made the project a huge success.',
  },
  {
    name: 'James Miller',
    role: 'Product Manager',
    company: 'StartupXYZ',
    avatar: '👨‍💻',
    rating: 5,
    content: 'Working with Anas was a pleasure. He built our entire e-commerce platform from scratch with clean code and excellent documentation. Highly recommended!',
  },
  {
    name: 'Emma Davis',
    role: 'Founder',
    company: 'EduLearn',
    avatar: '👩‍🏫',
    rating: 5,
    content: 'Anas transformed our educational platform with AI features. His voice assistant implementation was particularly impressive and our users love it.',
  },
  {
    name: 'Michael Chen',
    role: 'Engineering Lead',
    company: 'DataFlow Systems',
    avatar: '👨‍🔬',
    rating: 5,
    content: 'Outstanding developer with deep knowledge of both AI and full-stack development. The database optimization work he did improved our performance by 300%.',
  },
  {
    name: 'Lisa Anderson',
    role: 'CEO',
    company: 'HealthTech Solutions',
    avatar: '👩‍⚕️',
    rating: 5,
    content: 'Muhammad is professional, communicative, and delivers high-quality work on time. His AI integration helped us provide better patient care.',
  },
  {
    name: 'David Wilson',
    role: 'Tech Director',
    company: 'FinanceHub',
    avatar: '👨‍💼',
    rating: 5,
    content: 'Exceptional work on our financial dashboard. Anas combines technical excellence with business understanding, making him invaluable to any project.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
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
