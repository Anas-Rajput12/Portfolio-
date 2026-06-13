import 'dotenv/config';
import { generateKnowledgeBase } from '../lib/rag/embeddings';

async function main() {
  console.log('🤖 Starting knowledge base generation...');
  await generateKnowledgeBase();
  console.log('✅ Knowledge base generation complete!');
  process.exit(0);
}

main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
