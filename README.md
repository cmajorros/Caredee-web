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
4. Set `Custom domain` to `caredeeco.com`.
5. Push to `main`, or run the `Deploy GitHub Pages` workflow manually.

The workflow automatically handles:

- `caredeeco.com` as the primary custom domain.
- Root-relative assets for the custom domain.
- Static export into `out/`.
- GitHub Pages artifact upload and deployment.

## DNS for caredeeco.com

At the domain DNS provider, point the apex domain to GitHub Pages:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

Optional but recommended for `www`:

```text
CNAME www   cmajorros.github.io
```

After DNS resolves, return to `Settings` -> `Pages` and enable `Enforce HTTPS`.

## Static GitHub Build

To test the GitHub Pages export locally:

```bash
$env:GITHUB_PAGES = "true"
$env:NEXT_PUBLIC_BASE_PATH = ""
$env:NEXT_PUBLIC_SITE_URL = "https://caredeeco.com"
npm run build:github
```

The exported site will be written to `out/`.
