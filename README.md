# Putu Herdy Kurniawan — Professional Engineering Portfolio

A multi-page Astro + Tailwind CSS portfolio website designed for an engineering professional.

## Pages included

- `/` — Home
- `/portfolio` — Project portfolio listing
- `/projects/pharmaceutical-hvac-bms` — Project case study
- `/projects/thermal-oil-heater-process-engineering` — Project case study
- `/projects/hpal-instrumentation-maintenance` — Project case study
- `/projects/energy-utility-improvement` — Project case study
- `/resume` — Web resume
- `/about` — About page
- `/contact` — Contact page

## Install

Make sure Node.js LTS is installed.

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages deploy settings

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
```

## Edit content

Most content is centralized in:

```text
src/data/portfolio.ts
```

Update these fields first:

- `profile.email`
- `profile.phone`
- `profile.linkedin`
- project case study text
- project metrics
- tools and certifications

## Add your CV PDF

Place your CV here:

```text
public/documents/cv-putu-herdy-kurniawan.pdf
```

The resume download button already points to that file.

## Design direction

The design is intentionally minimal, professional, and engineering-oriented:

- White / slate / navy / subtle blue
- No heavy sidebar
- No excessive colors
- Project case study pages for comprehensive explanations
- Clean navigation similar to professional personal portfolio references


## Revision notes

This version includes a cleaner home page, updated professional name, no home statistics block, no home experience section, single contact button in the top navigation, simplified footer, and role detail pages under `/experience/[slug]`.
