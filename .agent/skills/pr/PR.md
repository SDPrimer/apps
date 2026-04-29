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
Author: {Name}
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
Author: {Name}
```

## 3. Branch Naming Convention

All feature and fix branches MUST follow this naming pattern (consistent with `COMMIT.md`):

`{username}/{ticket-number}/{short-description}`

**Example:**
`amitraikwar/SDP-20/update-jira-skills`

## 4. GitHub MCP Server Integration

When creating a PR using the `github-mcp-server` tool, ensure:

1. The `owner` and `repo` are set to `SDPrimer` and `apps`.
2. The `title` strictly follows the format above.
3. The `body` (description) strictly follows the corresponding template.
4. The `head` branch strictly follows the naming convention: `{username}/{ticket-number}/{short-description}`.
5. The `base` branch is `main`.
6. Always set the PR **Assignee** to `ar1603` (Amit Raikwar).
7. Apply platform-specific **Labels** (`Web`, `Mobile`, or `Core`) to the PR.

## 5. Best Practices

- Always link the Jira ticket.
- Keep titles concise but descriptive.
- Descriptions should explain the "Why" and the functional impact of the changes.
- Ensure the PR is created as a `draft` if it's still a work in progress.
- **Jira Automation Rules**: 
    - **PR Created Workflow**:
        - **Trigger**: Pull request created.
        - **Action**: Add Comment.
        - **Comment**: `Pull Request raised: [{{pullRequest.title}}|{{pullRequest.url}}]`
        - **Action**: Transition issue to `In Progress`.
    - **PR Merged Workflow**:
        - **Trigger**: Pull request merged.
        - **Action**: Add Comment.
        - **Comment**: 
          ```text
          The changes in this PR have been merged.

          *Summary of changes:*
          {{pullRequest.description.match("(?s)## Implementation\s*(.*?)\r?\n\r?\nTicket:")}}

          Merged by: {{pullRequest.author.displayName}}
          ```
        - **Action**: Transition issue to `Done`.
    - **Smart Values for reference**:
        - **Summary Extraction**: `{{pullRequest.description.substringAfter("## Implementation").substringBefore("Ticket:").trim()}}`
        - **Ticket ID from Branch**: `{{pullRequest.sourceBranch.substringAfter("/").substringBefore("/")}}`

