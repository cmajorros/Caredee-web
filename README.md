# Caredee Product Website

Bilingual English/Thai product website for Caredee, an AI-powered home care and
nursing operations platform.

## Local Preview

```bash
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Open `http://127.0.0.1:3001/`.

## Validation

```bash
npm run lint
npm run build
```

## GitHub Pages Deployment

This project includes a GitHub Actions workflow at
`.github/workflows/deploy-github-pages.yml`.

After the code is pushed to the `main` branch of a GitHub repository:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Set `Build and deployment` to `GitHub Actions`.
4. Push to `main`, or run the `Deploy GitHub Pages` workflow manually.

The workflow automatically handles:

- `owner.github.io` repositories with no base path.
- Project repositories deployed at `/repo-name/`.
- Static export into `out/`.
- GitHub Pages artifact upload and deployment.

## Static GitHub Build

To test the GitHub Pages export locally:

```bash
$env:GITHUB_PAGES = "true"
$env:NEXT_PUBLIC_BASE_PATH = ""
npm run build:github
```

The exported site will be written to `out/`.
