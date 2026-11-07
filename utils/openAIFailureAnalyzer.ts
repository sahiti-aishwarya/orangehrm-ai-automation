
   import { stripVTControlCharacters } from 'util';
import OpenAI from 'openai';

export async function analyzeFailureWithAI(
  testName: string,
  failedStep: string,
  errorMessage: string
): Promise<string> {
     errorMessage = stripVTControlCharacters(errorMessage);
   const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return [
      'AI failure analysis skipped: OPENAI_API_KEY is not set.',
      `Test: ${testName}`,
      `Error: ${errorMessage}`,
      'Next steps: check the locator, check the element is visible, review the trace and screenshot.',
    ].join('\n');
  }

  const prompt = `You are a QA automation expert. Analyze this Playwright test failure.

Test name: ${testName}
Failed step: ${failedStep}
Error message: ${errorMessage}

Return:
1. Likely root cause
2. Whether it is an automation issue or an application issue
3. Debugging steps
4. Recommended Playwright fix`;

  try {
    const client = new OpenAI({ apiKey });
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.choices[0].message.content || 'No analysis returned.';
  } catch (error) {
    return `AI failure analysis could not run: ${(error as Error).message}`;
  }
}