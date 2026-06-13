// Simple test script to verify OpenAI API connection
require('dotenv').config({ path: '.env.local' });
const { createOpenAI } = require('@ai-sdk/openai');
const { streamText } = require('ai');

async function testOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY;

  console.log('🔍 Testing OpenAI API connection...\n');
  console.log('API Key present:', apiKey ? '✅ Yes' : '❌ No');
  console.log('API Key starts with:', apiKey ? apiKey.substring(0, 7) + '...' : 'N/A');
  console.log('API Key type:', apiKey?.startsWith('sk-or-') ? 'OpenRouter' : 'OpenAI Direct');
  console.log('');

  if (!apiKey) {
    console.error('❌ No API key found in .env.local');
    process.exit(1);
  }

  const isOpenRouter = apiKey.startsWith('sk-or-');
  const client = isOpenRouter
    ? createOpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: apiKey,
      })
    : createOpenAI({ apiKey: apiKey });

  const modelName = isOpenRouter ? 'openai/gpt-3.5-turbo' : 'gpt-3.5-turbo';
  console.log('🤖 Using model:', modelName);
  console.log('');

  try {
    console.log('📤 Sending test message...');

    const result = await streamText({
      model: client(modelName),
      messages: [
        { role: 'user', content: 'Say "Hello, I am working!" in exactly those words.' }
      ],
      temperature: 0.7,
    });

    console.log('✅ Stream initialized, reading chunks...\n');
    let fullResponse = '';
    let chunkCount = 0;

    for await (const chunk of result.textStream) {
      chunkCount++;
      fullResponse += chunk;
      process.stdout.write(chunk);
    }

    console.log('\n\n✅ SUCCESS!');
    console.log('Total chunks received:', chunkCount);
    console.log('Full response:', fullResponse);

    if (chunkCount === 0) {
      console.error('\n❌ PROBLEM: Received 0 chunks from OpenAI');
      console.error('This means the API is not returning content.');
    }

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('Full error:', error);

    if (error.message?.includes('401')) {
      console.error('\n💡 This is an authentication error. Your API key is invalid or expired.');
    } else if (error.message?.includes('429')) {
      console.error('\n💡 Rate limit exceeded. Wait a moment and try again.');
    } else if (error.message?.includes('model')) {
      console.error('\n💡 Model not available. Check if the model name is correct.');
    }
  }
}

testOpenAI();
