# Pull Request Management Skill

This ruleset defines the standard patterns for creating and managing Pull Requests in this repository. **All Pull Requests MUST be created in the SDPrimer/apps repository.**

## 1. Target Repository

- **Owner:** `SDPrimer`
- **Repository:** `apps`
- **Default Base Branch:** `main`

> [!IMPORTANT]
> Every Pull Request created MUST use `owner: "SDPrimer"` and `repo: "apps"`.

## 2. Pull Request Types

### Feat (Feature)

Use this for new features or enhancements.

**Title Format:**
`feat(ticket-number): {Short title}`

**Description Template:**

```markdown
# Description of changes

## Requirement

- {Requirement 1}
- {Requirement 2}

## Implementation

- {Focus on functional changes, not just code details}

Ticket: {Link to Jira ticket}
```

### Fix (Bug Fix)

Use this for bug fixes or resolving issues.

**Title Format:**
`fix(ticket-number): {Short title}`

**Description Template:**

```markdown
## Issue:

- {Description of the bug or issue}

## Rootcause:

- {What was causing the issue}

## Fix

- {How it was fixed}

### Implementation

- {Focus on functional changes, not just code details}

Ticket: {Link to Jira ticket}
```

## 3. GitHub MCP Server Integration

When creating a PR using the `github-mcp-server` tool, ensure:

1. The `owner` and `repo` are set to `SDPrimer` and `apps`.
2. The `title` strictly follows the format above.
3. The `body` (description) strictly follows the corresponding template.
4. The `head` branch is your feature/fix branch.
5. The `base` branch is `main`.

## 4. Best Practices

- Always link the Jira ticket.
- Keep titles concise but descriptive.
- Descriptions should explain the "Why" and the functional impact of the changes.
- Ensure the PR is created as a `draft` if it's still a work in progress.
