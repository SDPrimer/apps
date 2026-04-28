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

## 3. Issue Types
- Use **Story** for user-facing features and functionality.
- Use **Task** for technical setup, maintenance, or infrastructure work.
- Use **Bug** for defects or errors.
- Use **Epic** for high-level project goals or features.

## 4. Labeling
- Apply platform-specific labels (`Web`, `Mobile`) to every issue for easy filtering.
- Link all stories and tasks to their corresponding **Epic**.

## 5. Workflow & Statuses
Standard project workflow statuses to target:
- **Story/Tasks:** Backlog, In Progress, In Review, Done, Won't do.
- **Bugs:** Backlog, In Progress, In Review, Done, Won't do, In Testing, Duplicate.

## 6. Field Requirements
- **Priority:** Must have a value. Do not attempt to set to null or clear via API as it is a required system field.
- **Description:** Provide a clear summary of work and acceptance criteria.
