# AGENTS.md

## Tech Stack
- React 18 + Vite 6 (SPA), `react-router-dom` v6, `react-icons`
- Vanilla CSS (no framework), `localStorage` for contact form persistence
- Static `.js` data files (`profileData.js`, `projectData.js`)

## Dev Commands
| Command | Action |
|---------|--------|
| `npm run dev` | Dev server (Vite) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint flat config (no `.eslintrc`) — `eslint .` |

## Routing (`App.jsx`)
| Path | Page |
|------|------|
| `/` | HomePage |
| `/about` | AboutPage |
| `/about#skills` | Skills section (linked from nav) |
| `/project` | ProjectPage |
| `/contact` | ContactPage |
| `*` | NotFoundPage |

**NavBar**: `FloatingNavbar` (brand `"KD."`) — uses `NavLink` with inline `isActive` className function. Links: Home, About, Skills (`/about#skills`), Projects, Contact.

## Project Structure
- `src/pages/` — `HomePage/`, `AboutPage/`, `ProjectPage/`, `ContactPage/`, `NotFoundPage/`
- `src/components/` — `AnimatedBackground`, `CircularProgress`, `FloatingNavbar`, `Footer`, `Hero`, `Navbar` *(unused)*, `ProjectCard`, `ScrollReveal`, `SocialIcons`, `StatsCard`
- `src/data/` — `profileData.js`, `projectData.js`
- Each `.jsx` file has a co-located `.css` file

## Data Shapes
**`profileData.js`** — `{ nama, tagline, deskripsi, foto, pendidikan[], skills: [{name, level}], sosial: {github, linkedin, instagram, facebook, tiktok, whatsapp}, typingTexts[], stats: {projects, clients, yearsExperience, hoursCoding} }`

**`projectData.js`** — array of `{ id, nama, deskripsi, teknologi[], semester, link }`

## Key Conventions
- No TypeScript — do not add `.ts`/`.tsx`
- `react/prop-types` is **off** in ESLint (no prop validation needed)
- Use `.map()` to render project lists
- `useState` + `localStorage` keys (`contact_nama`, `contact_email`, `contact_pesan`) for contact form auto-save
- Full spec: `PRD1.md`
