# Code Review Guidelines

## Philosophy

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Code review is a collaborative process, not a gatekeeping exercise. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## For Authors

### Before Requesting Review

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris:

1. Self-review your diff first
2. Ensure CI passes
3. Write a clear PR description explaining the "why"
4. Keep PRs under 400 lines when possible
5. Add relevant tests

### PR Description Template

```markdown
## What
Brief description of changes

## Why
Context and motivation

## Testing
How this was tested

## Rollback Plan
How to revert if needed
```

## For Reviewers

### Response Time SLAs

| PR Size | Expected Response |
|---------|-------------------|
| < 100 lines | Same day |
| 100-400 lines | Within 24 hours |
| > 400 lines | Within 48 hours |

### Review Checklist

Duis aute irure dolor in reprehenderit in voluptate velit esse:

- [ ] Does the code do what the PR description says?
- [ ] Are there adequate tests?
- [ ] Is the code readable and maintainable?
- [ ] Are there any security concerns?
- [ ] Does it follow our style guide?

### Giving Feedback

Excepteur sint occaecat cupidatat non proident. Use these prefixes:

- `nit:` - Minor style suggestion, non-blocking
- `suggestion:` - Consider this alternative approach
- `question:` - Seeking clarification
- `blocking:` - Must be addressed before merge

## Approval Requirements

- 1 approval required for most PRs
- 2 approvals required for:
  - Changes to shared libraries
  - Database migrations
  - Security-sensitive code
  - Infrastructure changes
