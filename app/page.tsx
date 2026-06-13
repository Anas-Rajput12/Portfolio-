import { prisma } from '@/lib/prisma';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
// import Expertise from '@/components/sections/Expertise';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Hackathons from '@/components/sections/Hackathons';
// import Blog from '@/components/sections/Blog';
// import OpenSource from '@/components/sections/OpenSource';
// import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

async function getPortfolioData() {
  const [profile, experiences, projects] = await Promise.all([
    prisma.profile.findFirst(),
    prisma.experience.findMany({
      orderBy: { order: 'asc' },
    }),
    prisma.project.findMany({
      where: { published: true },
      orderBy: [{ featured: 'desc' }, { order: 'asc' }],
    }),
  ]);

  return { profile, experiences, projects };
}

export default async function Home() {
  const { profile, experiences, projects } = await getPortfolioData();

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio Not Found</h1>
          <p className="text-gray-600">Please run the seed command to populate the database.</p>
        </div>
      </div>
    );
  }

  const profileWithDefaults = {
    ...profile,
    location: profile.location ?? '',
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Experience experiences={experiences} />
        <Skills />
        <Projects projects={projects} />
        <Hackathons />
        <Contact profile={profileWithDefaults} />
      </main>
      <Footer />
    </>
  );
}
