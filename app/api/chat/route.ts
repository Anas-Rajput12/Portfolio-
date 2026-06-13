import { SYSTEM_PROMPT } from '@/lib/rag/constants';
import { NextRequest } from 'next/server';
import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY || '';
const isOpenRouterKey = apiKey.startsWith('sk-or-');

// ✅ FIX: Use raw OpenAI client to avoid AI SDK's OpenRouter Responses API
const openai = new OpenAI({
  apiKey: apiKey,
  baseURL: isOpenRouterKey ? 'https://openrouter.ai/api/v1' : undefined,
  defaultHeaders: isOpenRouterKey ? {
    'HTTP-Referer': 'https://portfolio12-iota-orcin.vercel.app/',
    'X-Title': 'Anas Portfolio Chat',
  } : undefined,
});

const context = `
Muhammad Anas Qadri - AI & Full Stack Developer

SKILLS:
- Languages: JavaScript, TypeScript, Python, HTML, CSS
- Frameworks: React, Next.js, Node.js, Express.js, Tailwind CSS
- AI/ML: OpenAI, LLM, NLP, RAG Systems, AI Automation
- Databases: PostgreSQL, MySQL, Prisma ORM, Firebase
- Cloud: Docker, Kubernetes, Vercel, Netlify, GitHub Actions

PROJECTS:
1. AI Customer Support Chatbot SaaS (2026) - Winner
   - Next.js 15, TypeScript, OpenAI GPT-4o, RAG, PostgreSQL

2. AI-Powered Todo App (2025) - 2nd Place
   - Next.js, FastAPI, Better Auth, Neon DB

3. Car Rental E-Commerce Platform (2024) - 3rd Place
   - React, Sanity CMS, Node.js, MongoDB

EDUCATION:
Bachelor in Information Technology
Quaid-e-Awam University (2021-2025)

CONTACT:
Email: muhammadanasqadri2@gmail.com
Portfolio: https://portfolio12-iota-orcin.vercel.app/
LinkedIn: linkedin.com/in/muhammad-anas-qadri-a7608a2b7
GitHub: github.com/Anas-Rajput12
`;

export async function POST(req: NextRequest) {
  const requestId = Date.now();
  console.log(`\n[${requestId}] ===== NEW REQUEST =====`);

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let messages: { role: 'user' | 'assistant'; content: string }[];

  try {
    const body = await req.json();
    messages = body.messages;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Sanitize — strip id and any extra fields, only keep role + content
  const sanitizedMessages = messages.map(({ role, content }) => ({
    role: role as 'user' | 'assistant',
    content: String(content),
  }));

  console.log(`[${requestId}] Messages: ${sanitizedMessages.length}`);
  console.log(`[${requestId}] Full conversation history:`);
  sanitizedMessages.forEach((msg, idx) => {
    console.log(`  [${idx}] ${msg.role}: ${msg.content.substring(0, 80)}...`);
  });
  console.log(`[${requestId}] Last:`, sanitizedMessages[sanitizedMessages.length - 1]);

  const modelName = isOpenRouterKey ? 'openai/gpt-3.5-turbo' : 'gpt-3.5-turbo';
  console.log(`[${requestId}] Model: ${modelName}`);

  // ✅ Build messages array with system prompt as first message
  const messagesWithSystem: OpenAI.Chat.ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: `${SYSTEM_PROMPT}\n\nContext about Anas:\n${context}`,
    },
    ...sanitizedMessages,
  ];

  // ✅ Stream the response using raw OpenAI SDK
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        console.log(`[${requestId}] 🚀 Starting OpenAI streaming call...`);

        const completion = await openai.chat.completions.create({
          model: modelName,
          messages: messagesWithSystem,
          temperature: 0.7,
          stream: true,
        });

        console.log(`[${requestId}] ✅ Stream initialized, reading chunks...`);
        let chunkCount = 0;

        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;

          if (content) {
            chunkCount++;
            if (chunkCount === 1) {
              console.log(`[${requestId}] 📝 First chunk received: "${content.substring(0, 50)}..."`);
            }
            const formatted = `0:${JSON.stringify(content)}\n`;
            controller.enqueue(encoder.encode(formatted));
          }
        }

        console.log(`[${requestId}] ✅ Stream complete. Total chunks: ${chunkCount}`);

        // ✅ If AI returned nothing, send a neutral message
        if (chunkCount === 0) {
          console.error(`[${requestId}] ❌ ZERO CHUNKS RECEIVED FROM OPENAI!`);
          console.error(`[${requestId}] This usually means:`);
          console.error(`[${requestId}]   - OpenAI API error (check their status)`);
          console.error(`[${requestId}]   - Invalid message format`);
          console.error(`[${requestId}]   - Content policy violation`);
          const msg = "I didn't receive a response. Please try rephrasing your question.";
          controller.enqueue(encoder.encode(`0:${JSON.stringify(msg)}\n`));
        }

        controller.close();
      } catch (error: any) {
        console.error(`[${requestId}] ❌ CRITICAL ERROR in stream:`, error);
        console.error(`[${requestId}] Error name: ${error?.name}`);
        console.error(`[${requestId}] Error message: ${error?.message}`);
        console.error(`[${requestId}] Error code: ${error?.code}`);

        const detail =
          error?.status === 401 || error?.code === 'invalid_api_key' ? 'Invalid API key.' :
          error?.status === 429 || error?.code === 'rate_limit_exceeded' ? 'Rate limit exceeded. Try again shortly.' :
          error?.code === 'model_not_found' ? `Model "${modelName}" not available.` :
          error?.code === 'content_policy_violation' ? 'Content policy violation detected.' :
          `Error: ${error?.message || 'Something went wrong. Please try again.'}`;

        controller.enqueue(encoder.encode(`0:${JSON.stringify(detail)}\n`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}