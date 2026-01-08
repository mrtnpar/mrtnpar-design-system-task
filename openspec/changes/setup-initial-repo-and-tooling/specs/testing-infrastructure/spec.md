# Spec: Testing Infrastructure

## ADDED Requirements

### Requirement: Unit Testing with Vitest
The project MUST use Vitest for unit testing component logic and utilities with coverage reporting.

#### Scenario: Run unit tests
Given test files exist in `tests/unit/` or co-located with components
When the user runs `yarn test`
Then Vitest executes all unit tests
And results are displayed in the terminal

#### Scenario: Check coverage
Given the user runs `yarn test:coverage`
Then Vitest generates a coverage report
And the overall code coverage is at least 80%
And the report is saved to `coverage/` directory

### Requirement: React Testing Library Setup
React Testing Library and React Native Testing Library MUST be installed and configured for rendering and querying React components in Vitest tests.

#### Scenario: Test web component with React Testing Library
Given React Testing Library is installed
When a test renders a React web component
Then the component is rendered in happy-dom environment
And the test can query elements using screen.getBy* methods
And user interactions can be simulated with fireEvent or userEvent

#### Scenario: Test native component with React Native Testing Library
Given React Native Testing Library is installed
When a test renders a React Native component
Then the component is rendered in a mocked React Native environment
And the test can query elements using getBy* methods
And native-specific interactions can be simulated

#### Scenario: Configure Testing Library with Vitest
Given both Testing Libraries are installed
When Vitest runs tests
Then React Testing Library cleans up after each test automatically
And custom render functions are available for component providers
And test helpers are globally available

### Requirement: Visual Regression Testing with Playwright
Playwright MUST be configured for visual regression and accessibility testing of web components.

#### Scenario: Run visual regression tests
Given Playwright test files exist for components
When the user runs `yarn test:visual`
Then Playwright launches browsers and captures screenshots
And screenshots are compared against baseline images
And any visual differences are reported

#### Scenario: Run accessibility tests
Given components have been tested with axe-core
When the user runs `yarn test:a11y`
Then Playwright runs accessibility audits
And WCAG 2.1 AA violations are reported
And tests fail if critical accessibility issues are found

### Requirement: Test Configuration
All test tools MUST be properly configured with appropriate settings and paths.

#### Scenario: Vitest configuration
Given the project has a `vitest.config.ts` file
When Vitest runs
Then it scans for test files matching the pattern `**/*.test.ts` and `**/*.test.tsx`
And TypeScript types are properly resolved
And test environment is set to `happy-dom`

#### Scenario: Playwright configuration
Given the project has a `playwright.config.ts` file
When Playwright runs tests
Then it tests against Chrome, Firefox, and Safari
And screenshots are captured in the `.screenshots/` directory
And baseline images are stored in `tests/visual/__screenshots__/`

### Requirement: Test Organization
Tests MUST be organized and named consistently to ensure discoverability.

#### Scenario: Locate component tests
Given a component at `src/components/Button/Button.tsx`
Then its unit tests are at `src/components/Button/Button.test.tsx`
And visual tests are at `tests/visual/Button.test.tsx`
