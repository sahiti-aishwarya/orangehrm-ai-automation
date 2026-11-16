# OrangeHRM Playwright Automation

End-to-end and API test automation for the [OrangeHRM demo site](https://opensource-demo.orangehrmlive.com), built with Playwright and TypeScript using the Page Object Model.

## What's covered

- **Login:** valid login and logout; an invalid login shows an error
- **PIM (employees):** add an employee with unique test data, check the profile, and find them in search
- **API:** GET and POST checks against a public practice API (status codes, JSON body, fields)

## Project structure

```
pages/                page objects: LoginPage, DashboardPage, PIMPage
tests/                login.spec.ts, pim.spec.ts, api.spec.ts
utils/                helpers, test data generator, AI failure analyzer
playwright.config.ts  timeouts, reporters, screenshot/video/trace on failure
.github/workflows/    runs the tests on every push and pull request
```

## Run it

```bash
npm ci
npx playwright install chromium
npx playwright test
npx playwright show-report
```

Optional: copy `.env.example` to `.env` and add an OpenAI API key to turn on AI failure analysis.

## Test data

Every run creates an employee with a timestamp in the name and its own employee ID, so reruns and parallel runs don't clash on the shared demo site.

## AI failure analysis

When a test fails, an `afterEach` hook sends the test name and error to OpenAI and attaches the suggested cause and fix to the HTML report. Without an API key it attaches a short note instead, and an AI error can never fail a test. Treat its output as a starting point, not an answer.

## CI

GitHub Actions runs the suite on every push and pull request to `main`. The runner is pinned to Ubuntu 24.04, because Playwright 1.59 doesn't support Ubuntu 26 yet.

## Next steps

- Read credentials from environment variables and GitHub secrets
- Replace CSS-class and position-based locators with role- and label-based ones
- Reuse the login session with `storageState`
- Add negative API tests, such as a 404 for a missing user
