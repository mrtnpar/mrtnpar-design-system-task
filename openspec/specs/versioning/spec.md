# versioning Specification

## Purpose
TBD - created by archiving change setup-initial-repo-and-tooling. Update Purpose after archive.
## Requirements
### Requirement: Changesets Initialization
Changesets MUST be initialized and configured for automated versioning and publishing.

#### Scenario: Initialize Changesets
Given Changesets is installed
When the user runs `npx changeset init`
Then a `.changeset` directory is created
And a `config.json` file is generated with default settings
And the package.json is configured to use Changesets

#### Scenario: Configure Changesets
Given Changesets is initialized
When the config is properly set up
Then the base branch is set to `main`
 And linked packages are configured
 And access is set to `public` for NPM publishing

### Requirement: Changeset Workflow
Developers MUST use changesets to document changes and trigger version bumps.

#### Scenario: Create changeset
Given a developer makes changes to components
When the user runs `yarn changeset`
Then an interactive prompt asks which packages changed
And the user selects the version bump type (patch, minor, major)
And a changeset file is created in `.changeset/` directory

#### Scenario: Version bump
Given changesets are accumulated
When the user runs `yarn version`
Then Changesets reads all changeset files
And package.json versions are bumped according to changesets
And a CHANGELOG.md is generated with all changes
And changeset files are archived

### Requirement: Automated Publishing
GitHub Actions MUST be configured to automatically publish to NPM when changes are merged to main.

#### Scenario: Merge to main
Given a PR with a changeset is merged to main
When the workflow runs
 Then the package version is bumped
 And the package is published to NPM
 And a GitHub release is created

#### Scenario: Publish error handling
Given a publish workflow encounters an error
 When the workflow fails
 Then the error is logged
 And the workflow does not bump version or publish
 And the developer is notified

### Requirement: Conventional Commits
Git commit messages MUST follow conventional commits format for clarity and automation.

#### Scenario: Format commit message
Given a developer makes a commit
 When the commit message is written
 Then it follows the pattern: `type(scope): description`
 And valid types include: feat, fix, docs, style, refactor, test, chore

#### Scenario: Commit linting
Given a pre-commit hook is configured
 When a commit is made
 Then commitlint validates the message format
 And invalid commits are rejected

### Requirement: Changelog Generation
A changelog MUST be automatically generated and maintained as part of the versioning process.

#### Scenario: Generate changelog
Given changesets are versioned
When `yarn version` is run
Then a CHANGELOG.md is created or updated
And entries are grouped by version number
And each entry includes links to commits
And entries follow conventional changelog format

#### Scenario: Changelog structure
Given a CHANGELOG.md exists
When it is viewed
Then it contains a version history section
And each version includes:
- Version number with link to release
- Date of release
- List of changes with types (Added, Changed, Removed, Fixed)

