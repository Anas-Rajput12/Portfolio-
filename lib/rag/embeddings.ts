import { prisma } from '../prisma';
import { generateEmbedding } from '../openai';

export async function generateKnowledgeBase() {
  console.log('🤖 Generating knowledge base...');

  // Get all content
  const profile = await prisma.profile.findFirst();
  const projects = await prisma.project.findMany({ where: { published: true } });
  const experiences = await prisma.experience.findMany();
  const skills = await prisma.skill.findMany();
  const education = await prisma.education.findMany();
  const achievements = await prisma.achievement.findMany({ where: { published: true } });

  const knowledgeEntries = [];

  // Profile knowledge
  if (profile) {
    knowledgeEntries.push({
      content: `${profile.name} is a ${profile.title}. ${profile.bio}. Contact: ${profile.email}. Location: ${profile.location}. GitHub: ${profile.githubUrl}. LinkedIn: ${profile.linkedinUrl}.`,
      source: 'profile',
      sourceId: profile.id,
      metadata: { type: 'profile' },
    });
  }

  // Projects knowledge
  for (const project of projects) {
    knowledgeEntries.push({
      content: `Project: ${project.title}. ${project.description}. ${project.longDescription || ''}. Technologies: ${project.techStack.join(', ')}. Category: ${project.category}. GitHub: ${project.githubUrl || 'N/A'}. Live URL: ${project.liveUrl || 'N/A'}.`,
      source: 'project',
      sourceId: project.id,
      metadata: {
        title: project.title,
        category: project.category,
        featured: project.featured,
      },
    });
  }

  // Experience knowledge
  for (const exp of experiences) {
    const dateRange = exp.current ? `${exp.startDate.toLocaleDateString()} - Present` : `${exp.startDate.toLocaleDateString()} - ${exp.endDate?.toLocaleDateString()}`;
    knowledgeEntries.push({
      content: `Work Experience: ${exp.role} at ${exp.company}. ${exp.description}. Employment type: ${exp.employmentType}. Location: ${exp.location}. Period: ${dateRange}.`,
      source: 'experience',
      sourceId: exp.id,
      metadata: {
        company: exp.company,
        role: exp.role,
        current: exp.current,
      },
    });
  }

  // Skills knowledge
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(`${skill.name} (${skill.level})`);
    return acc;
  }, {} as Record<string, string[]>);

  for (const [category, skillList] of Object.entries(skillsByCategory)) {
    knowledgeEntries.push({
      content: `${category} Skills: ${skillList.join(', ')}.`,
      source: 'skills',
      sourceId: category,
      metadata: { category },
    });
  }

  // Education knowledge
  for (const edu of education) {
    const dateRange = `${edu.startDate.toLocaleDateString()} - ${edu.endDate?.toLocaleDateString() || 'Present'}`;
    knowledgeEntries.push({
      content: `Education: ${edu.degree} in ${edu.field} from ${edu.institution}, ${edu.location}. Period: ${dateRange}. ${edu.description || ''}. Grade: ${edu.grade || 'N/A'}.`,
      source: 'education',
      sourceId: edu.id,
      metadata: {
        institution: edu.institution,
        degree: edu.degree,
      },
    });
  }

  // Achievements knowledge
  for (const achievement of achievements) {
    knowledgeEntries.push({
      content: `Achievement: ${achievement.title}. ${achievement.description}. Category: ${achievement.category}. Date: ${achievement.date.toLocaleDateString()}.`,
      source: 'achievement',
      sourceId: achievement.id,
      metadata: {
        title: achievement.title,
        category: achievement.category,
      },
    });
  }

  // Delete existing knowledge base
  await prisma.knowledgeBase.deleteMany();

  // Generate embeddings and save
  for (const entry of knowledgeEntries) {
    try {
      const embedding = await generateEmbedding(entry.content);

      await prisma.knowledgeBase.create({
        data: {
          content: entry.content,
          embedding: JSON.stringify(embedding),
          source: entry.source,
          sourceId: entry.sourceId,
          metadata: entry.metadata,
        },
      });
    } catch (error) {
      console.error(`Error generating embedding for ${entry.source}:`, error);
    }
  }

  console.log(`✅ Knowledge base generated: ${knowledgeEntries.length} entries`);
}
