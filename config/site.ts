export const siteConfig = {
  name: 'Muhammad Anas Qadri',
  title: 'Muhammad Anas Qadri - AI & Full Stack Developer',
  description: 'AI & Full Stack Developer specializing in intelligent systems, voice assistants, RAG chatbots, and scalable web applications.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio12-iota-orcin.vercel.app/',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/Anas-Rajput12',
    linkedin: 'https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/',
    twitter: 'https://x.com/MuhammadAnasQ17',
    email: 'mailto:muhammadanasqadri2@gmail.com',
  },
  creator: {
    name: 'Muhammad Anas Qadri',
    email: 'muhammadanasqadri2@gmail.com',
  },
} as const;

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const;

export const projectCategories = [
  'All',
  'AI',
  'Web Development',
  'Mobile',
  'Blockchain',
  'Other',
] as const;

export const skillCategories = [
  { key: 'FRONTEND', label: 'Frontend' },
  { key: 'BACKEND', label: 'Backend' },
  { key: 'AI', label: 'Artificial Intelligence' },
  { key: 'DATABASE', label: 'Database' },
  { key: 'TOOLS', label: 'Tools & DevOps' },
  { key: 'OTHER', label: 'Other' },
] as const;
