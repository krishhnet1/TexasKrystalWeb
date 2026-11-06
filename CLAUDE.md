# CLAUDE.md — Texas Krystal Website

## Project Overview

This is the production website for **Texas Krystal** (texaskrystal.com), a brand of Katy Krystal Group, Inc. It is an AI automation and IT services company based in Fulshear, Texas. The company provides privacy-first AI solutions for businesses of all sizes — from food trucks to multi-site enterprises — focusing on three core pillars: conversation intelligence (audio monitoring & analysis), document/invoice automation, and photo-based inventory counting. Where information is processed is agreed with each client before deployment. Local processing is described only where supported and configured.

## Business Details

- **Lead brand:** Texas Krystal
- **Legal entity:** Katy Krystal Group, Inc, dba Texas Krystal (footer and legal pages)
- **Domain:** texaskrystal.com
- **Phone:** 832-224-5918
- **Email:** admin@texaskrystal.com
- **Mailing Address:** 8055 FM359, PO Box 1093 Fulshear, TX 77441 
- **Owner:** Krish

## Tech Stack

- **Pure static site** — HTML, CSS, JavaScript only. No frameworks, no build step, no Node.js.
- **CSS:** Single stylesheet at `css/style.css`. Uses CSS custom properties (variables) for theming. Fonts loaded from Google Fonts (Zilla Slab, Source Sans 3).
- **JS:** Single script at `js/main.js`. Handles the mobile menu, active nav link, and contact form submission.
- **Contact form:** Uses [Web3Forms](https://web3forms.com) API. The real access key is in `contact.html`. It is meant to be visible in the page. Do not add a `redirect` field: Web3Forms says that is for forms without JavaScript.
- **No database, no backend, no server-side code.**

## File Structure

```
/
├── index.html          # Homepage — hero, solutions overview, industries, security, CTA
├── solutions.html      # Detailed breakdown of 3 service pillars
├── industries.html     # Industry-specific pages (fuel, restaurant, retail, bars, accounting, food trucks)
├── how-it-works.html   # 5-stage pipeline explanation with human-in-the-loop
├── security.html       # Security posture, local LLM architecture, compliance frameworks
├── contact.html        # Contact form + contact details
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── admin.html          # Admin contact — security disclosures, abuse reporting, data requests
├── government.html     # Government & public sector, links the capability statement PDF
├── 404.html            # Not-found page, root-relative links
├── robots.txt, sitemap.xml
├── _config.yml         # Keeps CLAUDE.md off the live site
├── assets/             # Capability statement PDF
├── css/
│   └── style.css       # All styles — single file, CSS variables for theming
├── js/
│   └── main.js         # All JavaScript — single file, vanilla JS
└── CLAUDE.md           # This file
```

## Design System

See `DESIGN.md` for colors, type and component rules. Inline page styles use the CSS variables in `css/style.css`.

## Deployment

### Recommended: Cloudflare Pages (free, unlimited bandwidth)

1. Create a free Cloudflare account
2. Go to Workers & Pages → Create → Upload assets
3. Drag and drop the entire project folder
4. Add custom domain `texaskrystal.com` in project settings
5. Update domain nameservers to Cloudflare's (or add CNAME at registrar)
6. SSL activates automatically

### Alternative: GitHub Pages (free)

1. Create a GitHub repository
2. Push all files (HTML at root, css/ and js/ folders)
3. Go to Settings → Pages → Source: main branch, root folder
4. Add custom domain `texaskrystal.com` in Pages settings
5. Update DNS: CNAME record pointing to `<username>.github.io`

### Alternative: Vercel or Netlify

Both work by connecting a GitHub repo. Push commits → auto-deploy.

**Important:** Vercel's free tier prohibits commercial use. Use Cloudflare Pages or GitHub Pages for production.

## Contact Form Setup

The contact form uses Web3Forms (free, unlimited submissions):

1. The live key is already in `contact.html`. To change the receiving email, get a new key at https://web3forms.com and replace the `access_key` value.
2. The form includes honeypot spam protection (`botcheck` field)
3. JavaScript in `main.js` handles async submission with success/error feedback

## Navigation

All pages share the same nav structure:

```
Home | Solutions | Industries | How It Works | Security | Government | Contact | [Free Audit →]
```

Mobile menu is a hamburger with slide-in panel at the 1120px breakpoint, because eight nav items need the width.

## Content Guidelines

- **Never claim certifications not yet achieved** — do not mention SOC 2 unless there is a real, documented program, and never imply a SOC 2 report exists
- **Never imply big brands are customers** unless there's written permission — say "built for operators in fuel/retail" not "trusted by Chevron"
- **Conversation analysis sections must explain recording notice, appropriate consent, access restrictions and retention, and say alerts flag potential issues for human review. Never promise emergency detection, automatic theft judgments or guaranteed SMS delivery
- **Do not say data never leaves the network.** Use: "We agree where information is processed, who can access it, and which external services receive it before deployment." Describe local processing only where supported and configured.
- **Do not promise compliance or elimination of risk.** Use: "We help configure access, retention and data-sharing controls to support your requirements."
- **Keep demonstrated features separate from illustrative examples.**
- **Keep unfinished-product and coming-soon content off the site.**
- **Business pages use Free Business Audit. The Government page uses Capability Statement and Discuss a Project.**
- **Do not say the company serves all 25 TxDOT districts unless the owner has verified it.**
- **NIGP codes must match the CMBL profile.**
- **No biometric claims** — the system analyzes conversations for events, not voice identity

## Common Tasks

### Add a new page
1. Copy any existing page as template
2. Update `<title>`, `<meta description>`, page header content
3. Update the `class="active"` on the correct nav link
4. Add link to the page in footer navigation on all other pages

### Change the color scheme
Edit CSS variables in `:root` at the top of `css/style.css`. The entire site will update.

### Add a blog/resources section
Create a `resources.html` page following the existing page template pattern. Add it to the nav in every HTML file. Use the existing card or list styles.

### Add images
Place in an `assets/` or `images/` folder. Keep images optimized (WebP preferred). Do not use emoji as icons.

## Important Reminders

- This is a **static site** — no build step needed. Edit HTML/CSS/JS directly.
- All inter-page links use **relative paths** (e.g., `href="solutions.html"` not absolute URLs).
- The site is **mobile-responsive** with breakpoints at 1120px (nav), 900px and 768px.
- This file is kept off the live site by `exclude` in `_config.yml`. GitHub Pages must stay on the Jekyll ("legacy") build for that to work. Do not add `.nojekyll`.
- The ZIP code for Fulshear, TX is **77441**.
