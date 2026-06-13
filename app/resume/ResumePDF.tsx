import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Create styles for PDF with professional design
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 25,
    textAlign: 'center',
    borderBottom: '3 solid #2563eb',
    paddingBottom: 18,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#2563eb',
    marginBottom: 12,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  contactItem: {
    fontSize: 10,
    color: '#4a4a4a',
    marginHorizontal: 5,
  },
  section: {
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
    borderBottom: '2 solid #d1d5db',
    paddingBottom: 6,
  },
  text: {
    fontSize: 10,
    color: '#4a4a4a',
    lineHeight: 1.6,
    marginBottom: 8,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  skillItem: {
    width: '48%',
    marginBottom: 2,
  },
  skillLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 4,
  },
  skillValue: {
    fontSize: 10,
    color: '#4a4a4a',
    lineHeight: 1.4,
  },
  projectItem: {
    marginBottom: 16,
    paddingLeft: 12,
    borderLeft: '4 solid #2563eb',
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  projectDesc: {
    fontSize: 9,
    color: '#4a4a4a',
    marginBottom: 6,
    lineHeight: 1.5,
  },
  projectTech: {
    fontSize: 10,
    color: '#2563eb',
    fontStyle: 'italic',
  },
  achievementItem: {
    marginBottom: 12,
    paddingLeft: 12,
    borderLeft: '3 solid #22d3ee',
  },
  achievementTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  achievementBadge: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 3,
  },
  achievementDetail: {
    fontSize: 10,
    color: '#4a4a4a',
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  educationItem: {
    marginBottom: 8,
  },
  educationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  educationSchool: {
    fontSize: 10,
    color: '#4a4a4a',
    marginBottom: 3,
  },
  educationYear: {
    fontSize: 10,
    color: '#2563eb',
  },
});

export const ResumePDF = () => (
  <Document>
    {/* Page 1 */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Muhammad Anas Qadri</Text>
        <Text style={styles.title}>AI & Full Stack Developer</Text>
        <View style={styles.contactContainer}>
          <Text style={styles.contactItem}>muhammadanasqadri2@gmail.com</Text>
          <Text style={styles.contactItem}>•</Text>
          <Link src="https://portfolio12-iota-orcin.vercel.app/" style={[styles.contactItem, styles.link]}>
            portfolio12-iota-orcin.vercel.app
          </Link>
          <Text style={styles.contactItem}>•</Text>
          <Link src="https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/" style={[styles.contactItem, styles.link]}>
            LinkedIn
          </Link>
          <Text style={styles.contactItem}>•</Text>
          <Link src="https://github.com/Anas-Rajput12" style={[styles.contactItem, styles.link]}>
            GitHub
          </Link>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>
          AI & Full Stack Developer specializing in intelligent systems, RAG chatbots, and scalable web applications.
          Building the future with code and AI. Experienced in developing production-ready AI applications with modern
          web technologies, focusing on creating intelligent, user-centric solutions that drive business value.
        </Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsGrid}>
          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>Languages</Text>
            <Text style={styles.skillValue}>JavaScript, TypeScript, Python, HTML, CSS, ES6+</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>Frameworks & Libraries</Text>
            <Text style={styles.skillValue}>React, Next.js, Node.js, Express.js, Tailwind CSS</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>AI & Machine Learning</Text>
            <Text style={styles.skillValue}>OpenAI, LLM, NLP, RAG Systems, AI Automation</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>Databases</Text>
            <Text style={styles.skillValue}>PostgreSQL, MySQL, Prisma ORM, Firebase</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>Cloud & DevOps</Text>
            <Text style={styles.skillValue}>Docker, Kubernetes, Vercel, Netlify, GitHub Actions</Text>
          </View>
          <View style={styles.skillItem}>
            <Text style={styles.skillLabel}>Tools & Platforms</Text>
            <Text style={styles.skillValue}>Git, GitHub, VS Code, Figma</Text>
          </View>
        </View>
      </View>

      {/* Featured Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Projects</Text>

        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>AI Customer Support Chatbot SaaS</Text>
          <Text style={styles.projectDesc}>
            Production-ready AI SaaS chatbot using GPT-4o and RAG for intelligent customer support with
            document-based knowledge retrieval. Implemented advanced natural language processing and
            context-aware responses with scalable architecture.
          </Text>
          <Text style={styles.projectTech}>
            Next.js 15 • TypeScript • OpenAI GPT-4o • Prisma • PostgreSQL • NextAuth
          </Text>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>AI-Powered Todo App with Chatbot Assistant</Text>
          <Text style={styles.projectDesc}>
            Smart task management application with AI chatbot that helps users create and organize tasks
            using natural language. Features intelligent task prioritization and context understanding.
          </Text>
          <Text style={styles.projectTech}>
            Next.js • FastAPI • Better Auth • Neon DB
          </Text>
        </View>

        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>Car Rental E-Commerce Platform</Text>
          <Text style={styles.projectDesc}>
            Full-stack car rental website with real-time listings, comprehensive booking system,
            CMS integration and modern responsive UI. Implemented secure payment processing and
            user management.
          </Text>
          <Text style={styles.projectTech}>
            React • Sanity CMS • Node.js • MongoDB
          </Text>
        </View>
      </View>
    </Page>

    {/* Page 2 */}
    <Page size="A4" style={styles.page}>
      {/* Hackathons & Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hackathons & Achievements</Text>

        <View style={styles.achievementItem}>
          <Text style={styles.achievementTitle}>AI Customer Support Chatbot SaaS</Text>
          <Text style={styles.achievementDetail}>2026 • Solo Project</Text>
          <Text style={styles.text}>
            Built a production-ready AI SaaS chatbot using GPT-4o and RAG for intelligent customer support.
            Demonstrated expertise in AI integration, scalable architecture, and user experience design.
          </Text>
        </View>

        <View style={styles.achievementItem}>
          <Text style={styles.achievementTitle}>AI-Powered Todo App with Chatbot Assistant</Text>
          <Text style={styles.achievementDetail}>2025 • Solo Project</Text>
          <Text style={styles.text}>
            Developed an intelligent task management application with natural language processing capabilities.
            Showcased skills in AI integration and modern web development frameworks.
          </Text>
        </View>

        <View style={styles.achievementItem}>
          <Text style={styles.achievementTitle}>Car Rental E-Commerce Platform</Text>
          <Text style={styles.achievementDetail}>2024 • Solo Project</Text>
          <Text style={styles.text}>
            Created a comprehensive full-stack e-commerce solution with real-time features.
            Demonstrated proficiency in React, backend development, and CMS integration.
          </Text>
        </View>

        <View style={styles.achievementItem}>
          <Text style={styles.achievementTitle}>Physical AI Book RAG Chatbot</Text>
          <Text style={styles.achievementDetail}>2025 • Solo Project</Text>
          <Text style={styles.text}>
            Developed a RAG-based AI system for document querying with context-aware GPT responses.
            Implemented vector database integration and semantic search capabilities.
          </Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.educationItem}>
          <Text style={styles.educationTitle}>Bachelor in Information Technology</Text>
          <Text style={styles.educationSchool}>
            Quaid-e-Awam University of Engineering, Science & Technology Nawabshah
          </Text>
          <Text style={styles.educationYear}>2021 - 2025</Text>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.text}>Email: muhammadanasqadri2@gmail.com</Text>
        <Text style={styles.text}>Portfolio: https://portfolio12-iota-orcin.vercel.app/</Text>
        <Text style={styles.text}>LinkedIn: https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7</Text>
        <Text style={styles.text}>GitHub: https://github.com/Anas-Rajput12</Text>
        <Text style={styles.text}>Twitter: https://x.com/MuhammadAnasQ17</Text>
        <Text style={styles.text}>Location: Pakistan</Text>
      </View>
    </Page>
  </Document>
);
