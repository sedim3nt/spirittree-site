# Deploy

## Target

`https://spirittree.dev/codex`

## Current Publish Path

This site deploys through GitHub Pages.

Workflow:

- [deploy.yml](/Users/spirittree/projects/spirittree-site/.github/workflows/deploy.yml)

Trigger:

- push to `main`

Build behavior in CI:

- installs dependencies
- runs `npx vite build`
- copies `dist/index.html` to `dist/404.html`
- uploads `dist/`
- deploys to GitHub Pages

## Local Preflight

Run:

```bash
npm run build
```

## Deployment Read

If local build passes, the deploy step is ready.

Operationally, publishing the updated `/codex` page means:

1. commit the source changes
2. push to `main`
3. let the GitHub Pages workflow publish the new build

## Notes

- The workflow builds from source in CI, so the source change is the important artifact.
- `dist/` can still be useful locally for verification, but the live deploy is driven by the workflow.
