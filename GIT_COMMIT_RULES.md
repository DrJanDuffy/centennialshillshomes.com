# Git Commit Message Rules

## Rule: Keep Commit Messages Short

### Format
Use the format: `type: brief description`

### Examples
- ✅ `fix: Correct JSX syntax error`
- ✅ `feat: Add RealScout widget`
- ✅ `update: CSP configuration`
- ❌ `fix: Correct JSX syntax error in RealScout test page with detailed explanation and bullet points`

### Why
- Long commit messages can cause deployment issues
- Vercel and other CI/CD systems may have character limits
- Short messages are easier to read in git logs
- Detailed information belongs in pull request descriptions

### Types
- `fix:` - Bug fixes
- `feat:` - New features
- `update:` - Updates to existing features
- `refactor:` - Code refactoring
- `docs:` - Documentation changes
- `style:` - Code style changes
- `test:` - Test additions or changes
- `chore:` - Build process or auxiliary tool changes

### Maximum Length
Keep commit messages under 50 characters for the subject line.
