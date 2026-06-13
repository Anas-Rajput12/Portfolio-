# Muhammad Anas Qadri - AI & Full Stack Developer Portfolio

A premium, AI-powered portfolio website built with Next.js 15, featuring an intelligent chatbot assistant powered by RAG (Retrieval-Augmented Generation) architecture.

## 🚀 Features

### Core Features
- ✨ **Modern Design** - Glassmorphism effects, smooth animations, and premium UI
- 🤖 **AI Chatbot Assistant** - "Ask Anas AI" powered by OpenAI with RAG architecture
- 📱 **Fully Responsive** - Optimized for all devices
- 🌓 **Dark/Light Mode** - Automatic theme switching
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized for speed
- 🎨 **Framer Motion** - Beautiful scroll animations and transitions
- 📊 **Database-Driven** - All content managed through PostgreSQL + Prisma

### Sections
1. **Hero** - Animated introduction with statistics
2. **About** - Personal information and key highlights
3. **Experience** - Professional timeline
4. **Projects** - Filterable project showcase
5. **Skills** - Categorized skill display with proficiency levels
6. **Contact** - Contact form with database storage

### AI Chatbot
- Natural language Q&A about skills, projects, and experience
- Context-aware responses using RAG
- Suggested questions for easy interaction
- Streaming responses for better UX

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion

**Backend:**
- Node.js
- Prisma ORM
- PostgreSQL (Neon)
- NextAuth v5

**AI:**
- OpenRouter API
- RAG Architecture
- Vector embeddings
- Semantic search

## 📦 Installation

1. **Install dependencies**
```bash
npm install
```

2. **Environment Variables**
Your `.env` file is already configured with:
- Database connection (Neon PostgreSQL)
- NextAuth secret
- OpenRouter API key
- Admin credentials

3. **Database is ready**
✅ Schema pushed
✅ Data seeded with your information

4. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🤖 Generate AI Knowledge Base

Before using the chatbot, generate the knowledge base:

```bash
npx tsx scripts/generate-kb.ts
```

This creates embeddings from your profile, projects, and experience for the AI assistant.

## 🚀 Deployment to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push
```

2. **Deploy on Vercel**
- Import repository at [vercel.com](https://vercel.com)
- Add environment variables from `.env`
- Deploy!

3. **After deployment, generate knowledge base**
```bash
npx tsx scripts/generate-kb.ts
```

## 📝 Database Commands

```bash
npm run db:push      # Push schema changes
npm run db:seed      # Reseed database
npm run db:studio    # Open Prisma Studio GUI
```

## 🎨 Customization

### Update Your Content

Edit `prisma/seed.ts` with your information, then:
```bash
npm run db:seed
npx tsx scripts/generate-kb.ts
```

### Styling
- Colors: `app/globals.css`
- Components: `components/sections/`

## 📊 What's Included

**Pages:**
- ✅ Homepage with all sections
- ✅ AI Chatbot widget
- ✅ Contact form

**Database Models:**
- Profile, Projects, Experience, Skills
- Messages, ChatConversation, KnowledgeBase
- Education, Achievements, BlogPosts

**API Routes:**
- `/api/chat` - AI chatbot
- `/api/contact` - Contact form
- `/api/auth` - Authentication (NextAuth)

**Seeded Data:**
- Your profile information
- 4 work experiences
- 27 technical skills
- 4 sample projects
- 3 achievements
- Education details

## 🐛 Troubleshooting

**Port 3000 in use?**
```bash
# Stop existing server
taskkill /PID <pid> /F

# Or use port 3001
PORT=3001 npm run dev
```

**Prisma errors?**
```bash
npx prisma generate
```

## 👤 Your Information

**Profile:**
- Name: Muhammad Anas Qadri
- Title: AI & Full Stack Developer
- Location: Nawabshah, Sindh, Pakistan
- Email: contact@anasqadri.com

**Skills:**
- Frontend: React, Next.js, TypeScript, Tailwind
- Backend: Node.js, Express.js, PostgreSQL
- AI: Python, NLP, RAG, Voice AI, OpenAI APIs
- Tools: Docker, Git, Vercel

**Admin Access:**
- Email: admin@anasqadri.com
- Password: admin123
- (Change in production!)

## 📞 Support

Muhammad Anas Qadri
- Email: contact@anasqadri.com
- GitHub: [muhammadanasqadri](https://github.com/muhammadanasqadri)
- LinkedIn: [muhammadanasqadri](https://linkedin.com/in/muhammadanasqadri)

---

Built with ❤️ using Next.js 15, TypeScript, and AI
