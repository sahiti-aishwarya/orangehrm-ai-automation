import fs from 'fs';

export function analyzeFailure(testName: string, errorMessage: string, failedStep: string) {
  const analysis = `
AI Failure Analysis Report
==========================

Test Name:
${testName}

Failed Step:
${failedStep}

Error Message:
${errorMessage}

Likely Root Cause:
- Locator may be incorrect or element may not be visible yet.
- Page may not have fully loaded before the action.
- Application response may be slow or unstable.
- Test data may not match the current application state.

Suggested Debugging Steps:
1. Check if the locator is still valid.
2. Add a proper wait using expect(locator).toBeVisible().
3. Avoid fixed waits like waitForTimeout.
4. Verify if the page navigation completed.
5. Review screenshot, trace, and HTML report.

Recommended Fix:
Use stable locators such as getByRole, getByPlaceholder, or CSS attributes, and verify actual UI content instead of relying only on URL.
`;

  fs.writeFileSync('ai-failure-analysis.txt', analysis);
  console.log(analysis);
}