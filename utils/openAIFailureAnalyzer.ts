import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeFailureWithAI(
  testName: string,
  failedStep: string,
  errorMessage: string
) {
  if (!process.env.OPENAI_API_KEY) {
    const fallback = `
AI Failure Analysis Skipped
===========================

Reason:
OPENAI_API_KEY was not found.

Test Name:
${testName}

Failed Step:
${failedStep}

Error Message:
${errorMessage}

Fallback Analysis:
- Check whether the locator is correct.
- Check whether the element is visible before interacting.
- Review screenshot, trace, and HTML report.
`;

    fs.writeFileSync('ai-openai-failure-analysis.txt', fallback);
    console.log(fallback);
    return;
  }

  const prompt = `
You are a QA automation expert.

Analyze this Playwright test failure.

Test Name: ${testName}
Failed Step: ${failedStep}
Error Message: ${errorMessage}

Return:
1. Likely root cause
2. Whether it is an automation issue or application issue
3. Debugging steps
4. Recommended Playwright fix
`;

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });

  const analysis = response.choices[0].message.content || 'No analysis returned.';

  fs.writeFileSync('ai-openai-failure-analysis.txt', analysis);
  console.log(analysis);
}