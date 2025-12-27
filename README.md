# Ved Verdens Ende Festival

Website for the Ved Verdens Ende festival in Sandved.

## Branches

| Branch | Description |
|--------|-------------|
| `main` | Current year (2026) |
| `2025` | 2025 festival website before the event |
| `2025-feedback` | 2025 festival website after the event (with feedback form enabled) |

## Development

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000

## Deployment

### Changing the URL base

The site is deployed to a year-specific subdirectory (e.g., `/2026/`). To change this:

1. Edit `package.json` and update the `release` scripts:

```json
"release": "vite build --base https://vedverdensende.dk/YEAR/ && scp -r build/* fmadsen@foadell:/home/fmadsen/www_root/domains/vedverdensende.dk/YEAR/",
"release-web": "vite build --base https://vedverdensende.dk/YEAR/ && scp -r build/* fmadsen@foadell-web:/home/fmadsen/www_root/domains/vedverdensende.dk/YEAR/"
```

Replace `YEAR` with the desired year (e.g., `2026`, `2027`).

### Running a release

```bash
npm run release
```

This builds the site with the correct base URL and uploads it to the server via scp.

## Project Structure

- `src/sf_app.ts` - Main app component with routing
- `src/sf_*.ts` - Individual page components
- `src/tjanser/*.ts` - Task/duty card components
- `public/` - Static assets
- `vite.config.mts` - Vite configuration
