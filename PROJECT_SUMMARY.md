\# OrangeHRM AI-Assisted Automation Framework - Project Summary



\## Project Overview



Built an AI-assisted UI automation framework using Playwright and TypeScript for OrangeHRM. The framework automates key HR workflows including login, employee creation, employee search, and logout.



\## Tools Used



\- Playwright

\- TypeScript

\- Node.js

\- GitHub Actions

\- Page Object Model

\- HTML Reports

\- JUnit Reports

\- AI-style data generation

\- OpenAI-powered failure analysis utility



\## Key Features



\- Automated valid and invalid login scenarios

\- Automated employee creation in PIM module

\- Automated employee search validation

\- Implemented Page Object Model

\- Used dynamic test data generation

\- Added unique employee ID generation to avoid duplicate data issues

\- Integrated GitHub Actions CI/CD

\- Added HTML reports, screenshots, videos, traces, and JUnit reports

\- Added AI-powered failure analysis utility



\## Challenges Faced



\### 1. Flaky UI Locators

OrangeHRM uses dynamic UI components, so some locators were unreliable.



Solution:

Used stable locators such as CSS attributes, role-based locators, and data-driven validation.



\### 2. Duplicate Employee ID Issue

The public OrangeHRM demo site reused employee IDs, causing employee creation failures.



Solution:

Generated unique employee IDs during test execution.



\### 3. Slow Page Loading

The demo site sometimes loaded slowly, causing timeout failures.



Solution:

Increased Playwright timeout and added proper assertion-based waits.



\### 4. Public Demo Data Instability

Since many users access the same OrangeHRM demo site, test data could change.



Solution:

Used dynamic employee data and verified the exact employee created during the test.



\## Resume Bullet Points



\- Built an AI-assisted UI automation framework using Playwright and TypeScript for OrangeHRM, automating login, employee creation, and employee search workflows.

\- Implemented Page Object Model architecture to improve maintainability, scalability, and code reuse across automated tests.

\- Integrated dynamic test data generation and unique employee ID handling to reduce dependency on static data and prevent duplicate record failures.

\- Enhanced test debugging with HTML reports, screenshots, videos, traces, JUnit reports, and AI-powered failure analysis.

\- Integrated GitHub Actions CI/CD to run Playwright tests automatically on code pushes and pull requests.



\## Interview Explanation



I built a Playwright and TypeScript automation framework for OrangeHRM using Page Object Model. I automated login, employee creation, and employee search workflows. I added dynamic test data generation to avoid hardcoded values and handled duplicate employee ID issues by generating unique IDs during runtime. I also integrated GitHub Actions for CI/CD and added reporting features like screenshots, traces, videos, and JUnit reports. To make the project AI-assisted, I added an OpenAI-based failure analyzer that can generate debugging suggestions from failed test details.



\## Strong Interview Statement



This project helped me understand how to build a maintainable automation framework, handle flaky UI behavior, manage dynamic test data, integrate CI/CD, and use AI to support debugging in QA automation.



\## Short Version



Built an AI-assisted Playwright automation framework for OrangeHRM with Page Object Model, dynamic test data, employee workflow automation, GitHub Actions CI/CD, reporting, and OpenAI-powered failure analysis.

