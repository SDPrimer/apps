# Jira & Confluence Management Ruleset

This ruleset defines the standard patterns for interacting with Atlassian resources. **All operations MUST target the SDPrimer environment.**

## 1. Target Environment
- **Jira Project Key:** `SDP` (SDPrimer)
- **Confluence Space Key:** `SDPrimer` (SDPrimer)
- **Cloud Instance:** `ar1603.atlassian.net`

> [!IMPORTANT]
> Every Jira issue created or modified MUST use `projectKey: "SDP"`.
> Every Confluence page created or searched MUST use `spaceId: "SDPrimer"` or `spaceKey: "SDPrimer"`.

## 2. Naming Conventions
- **Platform Prefixing:** Every ticket summary MUST start with a platform identifier in brackets:
  - `[Web]` for web-related stories/tasks.
  - `[Mobile]` for mobile-related stories/tasks.
  - `[Core]` for shared or infrastructure-related tasks.
- **Example:** `[Web] Implement login form validation`

## 3. Issue Types & Templates

> [!IMPORTANT]
> Unless explicitly specified otherwise, always use **Story** as the default issue type for new ticket requests.

### Story
Use for user-facing features and functionality.
**Description Template:**
```markdown
Description:
## Background:

## Details

## Acceptance criteria:

## Implementation notes.
```

### Task
Use for technical setup, maintenance, or infrastructure work. (Follow Story template structure if complex).

### Bug
Use for defects or errors.
**Description Template:**
```markdown
Description:

## Background:

## Details

## Acceptance criteria:

## Repro steps

## QA notes
```

### Epic
Use for high-level project goals or features.

## 4. Labeling
> [!IMPORTANT]
> **Every ticket MUST have at least one platform-specific label (`Web`, `Mobile`, or `Core`).**

- Apply platform-specific labels (`Web`, `Mobile`, `Core`) to every issue for easy filtering.
- Link all stories and tasks to their corresponding **Epic**.

## 5. Workflow & Statuses
Standard project workflow statuses to target:
- **Story/Tasks:** Backlog, In Progress, In Review, Done, Won't do.
- **Bugs:** Backlog, In Progress, In Review, Done, Won't do, In Testing, Duplicate.

## 6. Field Requirements
- **Priority:** Must have a value. Do not attempt to set to null or clear via API as it is a required system field.
- **Description:** MUST use the templates defined in section 3. Provide a clear summary of work and explicit acceptance criteria.
