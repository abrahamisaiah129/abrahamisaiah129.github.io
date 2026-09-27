# Portfolio

Isaiah Abraham's portfolio site — Next.js, statically exported and deployed to
GitHub Pages via GitHub Actions.

## Editing content

Almost everything on the page (bio, projects, skills, contact links) lives in
[`content.ts`](./content.ts). Edit that file for routine updates — you
shouldn't need to touch `app/page.tsx` for text changes.

**Before this goes live**, update the placeholder contact details in
`content.ts`: `email`, `linkedin` (and `github` if needed).

## Local development

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site as a static export and deploys it to GitHub Pages.

**One-time setup required in the repo settings:** go to
Settings → Pages → Build and deployment → Source, and set it to
**GitHub Actions** (not "Deploy from a branch"). Without this the workflow
will build successfully but the site won't publish.
