# saurabh-rane-portfolio

Personal portfolio website for **Saurabh Rane**, Specialist Product Engineer — built with Next.js 14 (App Router), Tailwind CSS, and zero external dependencies beyond React.

## Tech Stack

- **Framework**: Next.js 14 (App Router, `output: 'export'`)
- **Styling**: Tailwind CSS v3 + custom CSS (globals.css)
- **Fonts**: DM Serif Display · JetBrains Mono · DM Sans (Google Fonts)
- **Animations**: Pure CSS (no animation libraries)
- **Deployment target**: Any static host (GitHub Pages, Netlify, etc.)

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Typewriter role cycle, key stats, CTAs |
| 2 | About | Bio, quick info card, external links |
| 3 | Featured Work | 4 projects with impact bullets & tech tags |
| 4 | Experience | Timeline of 4 companies / 10 years |
| 5 | Skills | 6 grouped skill categories + certifications |
| 6 | Contact | 4 direct contact methods |

## Local Setup

```bash
# 1. Clone / unzip the project
cd saurabh-rane-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → http://localhost:3000

# 4. Build for production (static export)
npm run build
# Output in /out directory
```

> **Node requirement**: Node.js 18+ recommended.

## Project Structure

```
saurabh-rane-portfolio/
├── app/
│   ├── layout.js          # Root layout + metadata
│   ├── page.js            # Main page (assembles all sections)
│   ├── components/
│   │   ├── Navbar.js      # Sticky nav with scroll effect + mobile menu
│   │   └── Footer.js      # Minimal footer
│   └── sections/
│       ├── Hero.js        # Full-screen hero with typewriter
│       ├── About.js       # Bio + info card
│       ├── Projects.js    # Featured work cards
│       ├── Experience.js  # Timeline
│       ├── Skills.js      # Grouped skills + certs
│       └── Contact.js     # Contact links
├── styles/
│   └── globals.css        # CSS variables, animations, utilities
├── public/                # Static assets (add headshot as /public/avatar.jpg)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customisation

- **Content**: All text/data lives in each section's JS file — easy to update.
- **Avatar**: Drop a `avatar.jpg` into `/public/` and update `About.js` to render an `<img>` instead of the initials badge.
- **Colors**: CSS variables in `globals.css` (navy palette + cyan accent).
- **Animations**: Scroll-reveal uses `IntersectionObserver` in `app/page.js`.
