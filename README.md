# Noize Jeans Ltd. — Website

Official website for Noize Jeans Ltd., a sustainable denim production company.

Built with **Next.js 16** (App Router, Cache Components), **React 19**, **TypeScript** and **Tailwind CSS v4**.
Every page is prerendered as static HTML. Images are served through `next/image` (AVIF/WebP, responsive sizes, lazy loading).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command         | What it does                         |
| --------------- | ------------------------------------ |
| `npm run build` | Production build (standalone output) |
| `npm start`     | Serve the production build           |
| `npm run lint`  | ESLint                               |

## Project structure

```
app/
├── layout.tsx            # <html>, fonts, metadata, header + footer
├── globals.css           # Tailwind theme (Bootstrap-matching breakpoints, colours, animations)
├── page.tsx              # Home
├── about/ care/ customer/ design/ production/ sustainable/
├── products/             # Category tabs (Latest / Men / Women)
├── men/ women/           # Full galleries with lightbox (read from public/images/men|women)
├── contact/
│   ├── page.tsx
│   ├── contact-form.tsx  # Client form (useActionState)
│   └── actions.ts        # Server Action: validation (zod), honeypot, SMTP via nodemailer
├── not-found.tsx
├── sitemap.ts / robots.ts
components/               # Header, footer, carousel, product tabs, gallery, shared content blocks
lib/
├── site.ts               # All site content: nav, offices, phones, brands, customers, product lists
└── images.ts             # Reads image sizes from /public at build time (no layout shift)
public/
├── images/               # All photos and logos
└── documents/            # Downloadable PDF profiles
```

### Editing content

- Navigation, office addresses, phone numbers, brand/customer logos, featured and product images: **`lib/site.ts`**.
- Men/Women galleries pick up every image in `public/images/men` and `public/images/women` automatically.
- Use `img("file.jpg", "alt text")` from `lib/images.ts` with the `<Picture>` component for new images.

## Contact form email

The form posts to a Server Action that sends mail over SMTP. Copy `.env.example` to `.env` and fill in:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=...
SMTP_PASS=...
CONTACT_TO=info@noizejeans.com
CONTACT_FROM=noreply@noizejeans.com
```

Without `SMTP_HOST`, the form shows an error and points visitors to the company email address.

## Deployment

**Vercel:** import the repo; set the SMTP variables in the project settings.

**Docker:**

```bash
docker compose up -d --build   # http://localhost:8080
```

The image uses Next.js standalone output on `node:24-alpine`; it reads SMTP settings from `.env` if present.

Old PHP-era URLs (`/about.php`, `/pages/care.php`, `/document/*.pdf`, `/assets/images/*`) permanently redirect to their new locations.
