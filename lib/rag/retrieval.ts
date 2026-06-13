import { prisma } from '../prisma';
import { generateEmbedding, cosineSimilarity } from '../openai';
import { KnowledgeContext } from '@/types';
import { SYSTEM_PROMPT } from './constants';

export async function retrieveRelevantContext(
  query: string,
  topK: number = 5
): Promise<KnowledgeContext[]> {
  // Generate embedding for the query
  const queryEmbedding = await generateEmbedding(query);

  // Get all knowledge base entries
  const knowledgeEntries = await prisma.knowledgeBase.findMany();

  // Calculate similarity scores
  const scoredEntries = knowledgeEntries
    .map((entry) => {
      if (!entry.embedding) return null;

      const entryEmbedding = JSON.parse(entry.embedding);
      const similarity = cosineSimilarity(queryEmbedding, entryEmbedding);

      return {
        content: entry.content,
        source: entry.source,
        sourceId: entry.sourceId || undefined,
        relevanceScore: similarity,
        metadata: entry.metadata,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, topK);

  return scoredEntries;
}

export function formatContextForPrompt(contexts: KnowledgeContext[]): string {
  return contexts
    .map((ctx, idx) => {
      return `[Context ${idx + 1} - ${ctx.source}]:\n${ctx.content}\n`;
    })
    .join('\n');
}

export { SYSTEM_PROMPT };
