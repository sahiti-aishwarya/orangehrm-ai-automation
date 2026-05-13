\# OrangeHRM AI-Assisted Automation Framework



This project is an AI-assisted UI automation framework built using Playwright and TypeScript for the OrangeHRM application.



\## Project Overview



The framework automates key HR workflows in OrangeHRM, including login, employee creation, and employee search. It also includes AI-style test data generation and a failure analysis utility to improve test coverage and debugging efficiency.



\## Tech Stack



\- Playwright

\- TypeScript

\- Node.js

\- Page Object Model

\- HTML Reports

\- AI-style test data generation

\- AI failure analysis utility



\## Automated Test Scenarios



\### Login Module

\- Valid login and logout

\- Invalid login validation



\### PIM Module

\- Add employee

\- Search employee

\- Verify created employee in search results



\## AI Features



\### AI-Assisted Test Data Generation

The framework generates dynamic employee test data with different input variations to avoid hardcoded test data and improve coverage.



\### AI Failure Analyzer

A utility is included to generate structured failure analysis reports with:

\- Test name

\- Failed step

\- Error message

\- Likely root cause

\- Suggested debugging steps



\## Framework Design



The project follows the Page Object Model design pattern.



```text

pages/

&#x20; LoginPage.ts

&#x20; DashboardPage.ts

&#x20; PIMPage.ts



tests/

&#x20; login.spec.ts

&#x20; pim.spec.ts



utils/

&#x20; helpers.ts

&#x20; aiTestDataGenerator.ts

&#x20; aiFailureAnalyzer.ts

