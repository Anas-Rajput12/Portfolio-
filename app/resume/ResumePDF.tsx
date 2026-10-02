import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const NAVY = '#1F3A5F';
const ACCENT = '#2563EB';
const TEXT = '#222222';
const MUTED = '#5A6472';

// NOTE: Helvetica has no weight/style variants in react-pdf, so bold & italic
// must use the dedicated font names (Helvetica-Bold / Helvetica-Oblique).
const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 44,
    paddingHorizontal: 42,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    fontSize: 9.2,
    color: TEXT,
    lineHeight: 1.4,
  },

  // Header
  header: { alignItems: 'center', marginBottom: 6 },
  name: { fontFamily: 'Helvetica-Bold', fontSize: 24, color: NAVY, letterSpacing: 0.5 },
  title: { fontSize: 11.5, color: ACCENT, marginTop: 3 },
  contactRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 5 },
  contactText: { fontSize: 8.8, color: MUTED },
  link: { color: ACCENT, textDecoration: 'none' },

  // Sections
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10.5,
    color: NAVY,
    textTransform: 'uppercase',
    marginTop: 12,
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: NAVY,
    borderBottomStyle: 'solid',
  },

  // Generic
  paragraph: { fontSize: 9.2, color: TEXT },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  itemTitle: { fontFamily: 'Helvetica-Bold', fontSize: 9.8, color: TEXT },
  itemDate: { fontSize: 8.8, color: MUTED },
  company: { fontFamily: 'Helvetica-Bold', color: ACCENT },
  tech: { fontFamily: 'Helvetica-Oblique', fontSize: 8.6, color: ACCENT, marginBottom: 2 },
  item: { marginBottom: 7 },

  // Bullets
  bulletRow: { flexDirection: 'row', marginBottom: 1.5, paddingLeft: 2 },
  bulletDot: { width: 9 },
  bulletText: { flex: 1 },

  // Skills
  skillRow: { flexDirection: 'row', marginBottom: 3 },
  skillLabel: { width: 128, fontFamily: 'Helvetica-Bold' },
  skillValue: { flex: 1 },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 18,
    left: 42,
    right: 42,
    textAlign: 'center',
    fontSize: 7.5,
    color: MUTED,
  },
});

/* ---------- Data ---------- */

const skills = [
  ['Programming Languages', 'Python, JavaScript, TypeScript, C++, C#'],
  ['Frameworks & Libraries', 'React, React Native, Expo, Next.js, Node.js, Express.js, FastAPI, Tailwind CSS, shadcn/ui, Framer Motion'],
  ['AI & Machine Learning', 'OpenAI GPT-4o, LLM Integration, NLP, RAG Systems, AI Automation, Speech-to-Text / Text-to-Speech'],
  ['Databases', 'PostgreSQL, MySQL, Prisma ORM, Firebase, Neon DB, Qdrant (Vector DB)'],
  ['Cloud & DevOps', 'Docker, Kubernetes, Vercel, Netlify, GitHub Actions'],
  ['Tools & Platforms', 'Git, GitHub, VS Code, Figma'],
  ['AI-Assisted Development', 'Claude Code, ChatGPT, Gemini, Qwen (coding assistance, debugging, workflow optimization)'],
];

const experience = [
  {
    role: 'AI Developer',
    company: 'UK-Based Company',
    date: 'Feb 2026 – Apr 2026 | Remote',
    points: [
      'Developed an AI-powered tutor system delivering real-time, interactive learning support.',
      'Integrated speech-to-text and text-to-speech APIs to enable seamless voice-based communication.',
      'Focused on building intelligent AI systems for education and automation use cases.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'High Tech Software House',
    date: 'Jul 2025 – Aug 2025 | Nawabshah, Pakistan',
    points: [
      'Developed responsive web applications using HTML, CSS, JavaScript, React, and Next.js.',
      'Collaborated with senior developers on client-based projects to deliver high-performance solutions.',
      'Improved UI/UX using modern responsive design principles; gained hands-on experience with Git and Agile workflows.',
    ],
  },
];

const projects = [
  {
    title: 'AquaTrace – AI-Powered Water Monitoring & Incident Detection',
    github: 'https://github.com/Anas-Rajput12/Hackathon-Project',
    live: 'https://hackathon-project-theta-brown.vercel.app/',
    stack: 'Next.js, TypeScript, FastAPI, Python, PostgreSQL, Tailwind CSS, Google Earth Engine, Sentinel-2',
    points: [
      'Built an AI-powered platform for structured incident reporting, evidence collection, and geographic context for water-related incidents.',
      'Combined AI-assisted risk analysis and geospatial analysis with accountable workflows that turn field observations into actionable case records.',
    ],
  },
  {
    title: 'ApplyAI – AI-Powered Career & Job Application Workspace',
    github: 'https://github.com/Anas-Rajput12/Apply-Job',
    live: 'https://apply-job-z2af.vercel.app/',
    stack: 'Next.js, React Native, Expo, FastAPI, Python, PostgreSQL, LLM, REST API',
    points: [
      'Built a web and mobile workspace to analyze job descriptions, tailor applications, and track the full application workflow.',
      'Implemented resume upload and editing with AI-powered job matching and career assistance.',
    ],
  },
  {
    title: 'AI Customer Support Chatbot (SaaS)',
    github: 'https://github.com/Anas-Rajput12/Ai-Project',
    live: 'https://ai-project-one-pi.vercel.app/',
    stack: 'Next.js 15, TypeScript, OpenAI GPT-4o, Prisma ORM, PostgreSQL, NextAuth, Tailwind CSS, shadcn/ui',
    points: [
      'Built a production-ready SaaS chatbot using GPT-4o and RAG for context-aware support from PDFs, URLs, and text.',
      'Designed a scalable architecture with authentication, role-based access, and an analytics dashboard.',
    ],
  },
  {
    title: 'Physical AI Book with RAG-Powered Chatbot',
    github: 'https://github.com/Anas-Rajput12/Physical-AI',
    live: 'https://physical-ai-eight.vercel.app/',
    stack: 'Docusaurus, Qdrant, Neon DB, FastAPI',
    points: [
      'Developed a RAG-based system enabling users to query book content with context-aware, semantic search responses.',
      'Implemented vector database integration for accurate, relevant information retrieval.',
    ],
  },
  {
    title: 'AI-Powered Todo App with Chatbot Assistant',
    github: 'https://github.com/Anas-Rajput12/Todo-App',
    live: 'https://todo-app-xmj8.vercel.app/',
    stack: 'Next.js, FastAPI, Better Auth, Neon DB',
    points: [
      'Built a task management app with an AI chatbot to create, organize, and manage tasks using natural language.',
    ],
  },
  {
    title: 'Voice-Based Virtual Assistant (Final Year Project)',
    github: 'https://github.com/Anas-Rajput12/Final-Year-Project',
    live: 'https://final-year-projects-five.vercel.app/',
    stack: 'Next.js, TypeScript, Speech Recognition API, Node.js, Firebase',
    points: [
      'Designed a voice-enabled assistant to support students’ academic needs with task automation and real-time responses.',
      'Integrated NLP and speech recognition for multilingual interaction.',
    ],
  },
  {
    title: 'Car Rental Platform',
    github: 'https://github.com/Anas-Rajput12/Hackathon-quarter2',
    live: 'https://project-rust-pi.vercel.app/',
    stack: 'React, Node.js, MongoDB, Sanity CMS',
    points: [
      'Built a full-stack car rental platform with real-time vehicle listings, a booking system, and a responsive UI.',
    ],
  },
  {
    title: 'Bandage E-Commerce Website',
    github: 'https://github.com/Anas-Rajput12/E-commerce-Website',
    live: 'https://e-commerce-website-pi-six-88.vercel.app/',
    stack: 'Next.js, Tailwind CSS, Sanity CMS, Node.js, MongoDB',
    points: [
      'Built a responsive e-commerce site with product listings, cart, authentication, and a secure checkout workflow.',
    ],
  },
];

/* ---------- Small helpers ---------- */

const Bullets = ({ items }: { items: string[] }) => (
  <>
    {items.map((point, i) => (
      <View key={i} style={styles.bulletRow}>
        <Text style={styles.bulletDot}>•</Text>
        <Text style={styles.bulletText}>{point}</Text>
      </View>
    ))}
  </>
);

const Section = ({ title }: { title: string }) => (
  // minPresenceAhead keeps a heading from being stranded at the bottom of a page
  <Text style={styles.sectionTitle} minPresenceAhead={60}>
    {title}
  </Text>
);

const Dot = () => <Text style={styles.contactText}>{'  |  '}</Text>;

/* ---------- Document ---------- */

export const ResumePDF = () => (
  <Document title="Muhammad Anas Qadri - CV" author="Muhammad Anas Qadri">
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>MUHAMMAD ANAS QADRI</Text>
        <Text style={styles.title}>AI & Full-Stack Developer</Text>

        <View style={styles.contactRow}>
          <Text style={styles.contactText}>Karachi, Sindh, Pakistan</Text>
          <Dot />
          <Text style={styles.contactText}>+92 313 3305615</Text>
          <Dot />
          <Link src="mailto:muhammadanasqadri2@gmail.com" style={[styles.contactText, styles.link]}>
            muhammadanasqadri2@gmail.com
          </Link>
        </View>

        <View style={styles.contactRow}>
          <Link src="https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/" style={[styles.contactText, styles.link]}>
            LinkedIn
          </Link>
          <Dot />
          <Link src="https://github.com/Anas-Rajput12" style={[styles.contactText, styles.link]}>
            GitHub
          </Link>
          <Dot />
          <Link src="https://portfolio12-iota-orcin.vercel.app/" style={[styles.contactText, styles.link]}>
            Portfolio
          </Link>
          <Dot />
          <Link src="https://x.com/MuhammadAnasQ17" style={[styles.contactText, styles.link]}>
            X (Twitter)
          </Link>
        </View>
      </View>

      {/* Summary */}
      <Section title="Professional Summary" />
      <Text style={styles.paragraph}>
        AI & Full-Stack Developer specializing in intelligent systems, RAG (Retrieval-Augmented Generation), AI
        chatbots, and scalable web and mobile applications. Experienced in LLM integration, document-based knowledge
        retrieval, semantic search, backend APIs, responsive interfaces, and voice-enabled systems. Skilled in React,
        React Native, Next.js, Node.js, FastAPI, Python, and PostgreSQL, with a strong focus on practical,
        user-centric solutions to real-world problems.
      </Text>

      {/* Skills */}
      <Section title="Core Skills" />
      {skills.map(([label, value]) => (
        <View key={label} style={styles.skillRow} wrap={false}>
          <Text style={styles.skillLabel}>{label}</Text>
          <Text style={styles.skillValue}>{value}</Text>
        </View>
      ))}

      {/* Experience */}
      <Section title="Professional Experience" />
      {experience.map((job) => (
        <View key={job.role} style={styles.item} wrap={false}>
          <View style={styles.rowBetween}>
            <Text style={styles.itemTitle}>
              {job.role}  |  <Text style={styles.company}>{job.company}</Text>
            </Text>
            <Text style={styles.itemDate}>{job.date}</Text>
          </View>
          <Bullets items={job.points} />
        </View>
      ))}

      {/* Projects */}
      <Section title="Key Projects" />
      {projects.map((p) => (
        <View key={p.title} style={styles.item} wrap={false}>
          <View style={styles.rowBetween}>
            <Text style={styles.itemTitle}>{p.title}</Text>
            <Text style={styles.itemDate}>
              <Link src={p.github} style={styles.link}>GitHub</Link>
              {'  |  '}
              <Link src={p.live} style={styles.link}>Live Demo</Link>
            </Text>
          </View>
          <Text style={styles.tech}>{p.stack}</Text>
          <Bullets items={p.points} />
        </View>
      ))}

      {/* Education */}
      <Section title="Education" />
      <View style={styles.item} wrap={false}>
        <View style={styles.rowBetween}>
          <Text style={styles.itemTitle}>Bachelor in Information Technology</Text>
          <Text style={styles.itemDate}>2021 – 2025</Text>
        </View>
        <Text style={styles.paragraph}>
          Quaid-e-Awam University of Engineering, Science & Technology, Nawabshah
        </Text>
      </View>

      {/* Footer with page numbers */}
      <Text
        style={styles.footer}
        fixed
        render={({ pageNumber, totalPages }) =>
          `Muhammad Anas Qadri  |  Page ${pageNumber} of ${totalPages}`
        }
      />
    </Page>
  </Document>
);

export default ResumePDF;
