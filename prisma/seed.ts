import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@anasqadri.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@anasqadri.com',
      name: 'Muhammad Anas Qadri',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin user created:', admin.email);

  // Create profile
  const profile = await prisma.profile.upsert({
    where: { id: 'default-profile' },
    update: {},
    create: {
      id: 'default-profile',
      name: 'Muhammad Anas Qadri',
      title: 'AI & Full Stack Developer',
      bio: `Passionate AI & Full Stack Developer with expertise in building intelligent systems, voice assistants, RAG chatbots, and scalable web applications. Specializing in modern web technologies and artificial intelligence solutions.

I combine deep technical knowledge in frontend and backend development with cutting-edge AI technologies to create innovative solutions that solve real-world problems. My focus is on delivering high-quality, performant, and user-centric applications.`,
      email: 'contact@anasqadri.com',
      phone: '+92-XXX-XXXXXXX',
      location: 'Nawabshah, Sindh, Pakistan',
      githubUrl: 'https://github.com/muhammadanasqadri',
      linkedinUrl: 'https://linkedin.com/in/muhammadanasqadri',
      twitterUrl: 'https://twitter.com/anasqadri',
    },
  });

  console.log('✅ Profile created:', profile.name);

  // Create experiences
  const experiences = await prisma.experience.createMany({
    data: [
      {
        company: 'UK-Based Company',
        role: 'AI Developer',
        description: 'Developing advanced AI solutions including voice assistants, RAG chatbots, and NLP applications. Working with OpenAI APIs, LangChain, and modern AI frameworks to build intelligent systems.',
        location: 'Remote',
        employmentType: 'Full-time',
        startDate: new Date('2024-01-01'),
        current: true,
        order: 1,
      },
      {
        company: 'HIGH TECH Software House',
        role: 'Web Developer Intern',
        description: 'Gained hands-on experience in full-stack web development using React, Node.js, and modern web technologies. Contributed to client projects and learned industry best practices.',
        location: 'Nawabshah, Pakistan',
        employmentType: 'Internship',
        startDate: new Date('2023-06-01'),
        endDate: new Date('2023-12-31'),
        current: false,
        order: 2,
      },
      {
        company: 'QUEST Nawabshah',
        role: 'Final Year Project',
        description: 'Developed an innovative AI-powered solution as the final year project. Led the technical implementation and demonstrated expertise in AI/ML technologies.',
        location: 'Nawabshah, Pakistan',
        employmentType: 'Project',
        startDate: new Date('2023-09-01'),
        endDate: new Date('2024-05-01'),
        current: false,
        order: 3,
      },
      {
        company: 'E-Commerce Hackathon',
        role: 'Full Stack Developer',
        description: 'Built a complete e-commerce platform during a hackathon. Implemented features including product management, shopping cart, payment integration, and admin dashboard.',
        location: 'Online',
        employmentType: 'Project',
        startDate: new Date('2023-10-01'),
        endDate: new Date('2023-10-15'),
        current: false,
        order: 4,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Experiences created:', experiences.count);

  // Create skills
  const skills = await prisma.skill.createMany({
    data: [
      // Frontend
      { name: 'React', category: 'FRONTEND', level: 'EXPERT', order: 1 },
      { name: 'Next.js', category: 'FRONTEND', level: 'EXPERT', order: 2 },
      { name: 'JavaScript', category: 'FRONTEND', level: 'EXPERT', order: 3 },
      { name: 'TypeScript', category: 'FRONTEND', level: 'ADVANCED', order: 4 },
      { name: 'HTML', category: 'FRONTEND', level: 'EXPERT', order: 5 },
      { name: 'CSS', category: 'FRONTEND', level: 'EXPERT', order: 6 },
      { name: 'Tailwind CSS', category: 'FRONTEND', level: 'EXPERT', order: 7 },
      { name: 'Shadcn UI', category: 'FRONTEND', level: 'ADVANCED', order: 8 },

      // Backend
      { name: 'Node.js', category: 'BACKEND', level: 'EXPERT', order: 9 },
      { name: 'Express.js', category: 'BACKEND', level: 'EXPERT', order: 10 },
      { name: 'Prisma', category: 'BACKEND', level: 'ADVANCED', order: 11 },
      { name: 'REST APIs', category: 'BACKEND', level: 'EXPERT', order: 12 },

      // AI
      { name: 'Python', category: 'AI', level: 'ADVANCED', order: 13 },
      { name: 'NLP', category: 'AI', level: 'ADVANCED', order: 14 },
      { name: 'RAG', category: 'AI', level: 'ADVANCED', order: 15 },
      { name: 'Voice AI', category: 'AI', level: 'ADVANCED', order: 16 },
      { name: 'OpenAI APIs', category: 'AI', level: 'EXPERT', order: 17 },
      { name: 'LangChain', category: 'AI', level: 'ADVANCED', order: 18 },

      // Database
      { name: 'PostgreSQL', category: 'DATABASE', level: 'ADVANCED', order: 19 },
      { name: 'MySQL', category: 'DATABASE', level: 'ADVANCED', order: 20 },
      { name: 'Firebase', category: 'DATABASE', level: 'INTERMEDIATE', order: 21 },

      // Tools
      { name: 'Docker', category: 'TOOLS', level: 'INTERMEDIATE', order: 22 },
      { name: 'Kubernetes', category: 'TOOLS', level: 'BEGINNER', order: 23 },
      { name: 'Git', category: 'TOOLS', level: 'EXPERT', order: 24 },
      { name: 'GitHub', category: 'TOOLS', level: 'EXPERT', order: 25 },
      { name: 'Vercel', category: 'TOOLS', level: 'ADVANCED', order: 26 },
      { name: 'VS Code', category: 'TOOLS', level: 'EXPERT', order: 27 },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Skills created:', skills.count);

  // Create education
  const education = await prisma.education.create({
    data: {
      institution: 'QUEST Nawabshah',
      degree: 'Bachelor of Information Technology',
      field: 'Information Technology',
      location: 'Nawabshah, Sindh, Pakistan',
      startDate: new Date('2020-09-01'),
      endDate: new Date('2024-06-01'),
      description: 'Specialized in Software Engineering, Web Development, and Artificial Intelligence. Completed comprehensive coursework in algorithms, data structures, databases, and modern software development practices.',
      grade: 'Distinction',
      order: 1,
    },
  });

  console.log('✅ Education created:', education.institution);

  // Create sample projects
  const projects = await prisma.project.createMany({
    data: [
      {
        title: 'AI Voice Assistant',
        slug: 'ai-voice-assistant',
        description: 'Intelligent voice assistant powered by advanced NLP and speech recognition.',
        longDescription: 'A sophisticated AI voice assistant built with cutting-edge natural language processing and speech recognition technologies. Features include real-time voice interaction, context-aware responses, and multi-language support.',
        techStack: ['Python', 'OpenAI API', 'Speech Recognition', 'NLP', 'FastAPI'],
        category: 'AI',
        featured: true,
        order: 1,
        published: true,
      },
      {
        title: 'RAG Chatbot System',
        slug: 'rag-chatbot-system',
        description: 'Enterprise-grade chatbot using Retrieval-Augmented Generation architecture.',
        longDescription: 'A production-ready chatbot system implementing RAG architecture for accurate, context-aware responses. Integrates vector databases, semantic search, and advanced prompt engineering.',
        techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'React'],
        category: 'AI',
        featured: true,
        order: 2,
        published: true,
      },
      {
        title: 'E-Commerce Platform',
        slug: 'ecommerce-platform',
        description: 'Full-featured e-commerce platform with admin dashboard and payment integration.',
        longDescription: 'Complete e-commerce solution with product management, shopping cart, checkout process, payment gateway integration, order tracking, and comprehensive admin dashboard.',
        techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'Tailwind CSS'],
        category: 'Web Development',
        featured: true,
        order: 3,
        published: true,
      },
      {
        title: 'Portfolio with AI Assistant',
        slug: 'portfolio-ai-assistant',
        description: 'Personal portfolio website with integrated AI chatbot assistant.',
        longDescription: 'Modern portfolio website featuring an AI-powered assistant that can answer questions about skills, projects, and experience. Built with Next.js 15 and RAG architecture.',
        techStack: ['Next.js', 'TypeScript', 'OpenAI', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
        category: 'Web Development',
        featured: true,
        order: 4,
        published: true,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Projects created:', projects.count);

  // Create achievements
  const achievements = await prisma.achievement.createMany({
    data: [
      {
        title: 'AI Developer Role',
        description: 'Successfully secured a remote position as AI Developer at a UK-based company.',
        date: new Date('2024-01-01'),
        category: 'Career',
        published: true,
        order: 1,
      },
      {
        title: 'E-Commerce Hackathon Winner',
        description: 'Won the E-Commerce Hackathon by building a complete platform in 2 weeks.',
        date: new Date('2023-10-15'),
        category: 'Competition',
        published: true,
        order: 2,
      },
      {
        title: 'Final Year Project Excellence',
        description: 'Completed final year project with distinction, implementing advanced AI solutions.',
        date: new Date('2024-05-01'),
        category: 'Academic',
        published: true,
        order: 3,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Achievements created:', achievements.count);

  // Create site settings
  await prisma.siteSetting.upsert({
    where: { key: 'general' },
    update: {},
    create: {
      key: 'general',
      value: {
        siteName: 'Muhammad Anas Qadri',
        siteDescription: 'AI & Full Stack Developer specializing in intelligent systems and scalable web applications',
        metaKeywords: ['AI Developer', 'Full Stack Developer', 'RAG', 'Voice AI', 'Next.js', 'React'],
      },
      description: 'General site settings',
    },
  });

  console.log('✅ Site settings created');
  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
