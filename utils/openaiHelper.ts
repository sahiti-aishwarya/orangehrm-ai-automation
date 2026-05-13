import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAIEmployee() {
  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: 'Generate a realistic employee name (first, middle, last) in JSON format',
      },
    ],
  });

  const text = response.choices[0].message.content;

  try {
    return JSON.parse(text || '{}');
  } catch {
    return {
      firstName: 'John' + Date.now(),
      middleName: 'AI',
      lastName: 'Tester',
    };
  }
}