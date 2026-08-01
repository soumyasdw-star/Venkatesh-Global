# Venkatesh Global Website Migration Plan

## Vision

Transform the existing static HTML website into a modern, maintainable Astro application without changing the visual appearance or user experience.

The migration prioritizes maintainability over new features. Every change should preserve the existing design while improving the project's architecture.

---

# Tech Stack

| Layer | Technology |
|--------|------------|
| Framework | Astro |
| Styling | Tailwind CSS v4 + existing custom CSS |
| CMS | Sveltia CMS |
| Content | Astro Content Collections |
| Hosting | Netlify |
| Repository | GitHub |
| Domain | GoDaddy |

---

# Core Principles

## 1. Pixel-perfect migration

The migrated website must look identical to the original website.

No redesign.

No animation changes.

No spacing changes.

No typography changes.

No responsive changes.

---

## 2. Incremental commits

Each commit should:

- build successfully
- be deployable
- represent one logical change

Avoid large commits that mix multiple concerns.

---

## 3. Refactor before rewriting

If something already works:

Refactor it.

Do not rewrite it.

---

## 4. Separation of concerns

Application logic belongs in Astro.

Business content belongs in Content Collections.

Static assets belong in public/.

---

## 5. Components over duplication

Duplicate HTML should become reusable UI components.

Page-specific sections should become feature modules.

---

# Current Architecture

```
src/
    layouts/
        BaseLayout.astro

    pages/
        index.astro

    styles/
        style.css

public/
    js/
        script.js
```

---

# Target Architecture

```
src/

    components/

        ui/

            Button.astro
            Container.astro
            SectionTitle.astro

        layout/

            Navbar.astro
            Footer.astro

    features/

        home/

            Hero.astro
            About.astro
            Products.astro
            Gallery.astro
            FAQ.astro
            Contact.astro

    content/

        company/

        products/

        testimonials/

        gallery/

    layouts/

        BaseLayout.astro

    pages/

        index.astro

    styles/

        style.css

    config/

        site.ts

public/

    images/

    js/

    icons/

    favicon.ico
```

---

# Migration Roadmap

## ✅ Phase 1

Bootstrap Astro

Status:

Completed

Deliverables:

- Astro project
- Tailwind v4
- Working build
- Working dev server

---

## ✅ Phase 2

Static Migration

Status:

Completed

Deliverables:

- index.html migrated to Astro
- Existing CSS migrated
- Existing JavaScript migrated
- Website renders correctly

---

## ✅ Phase 3

Base Layout

Status:

Completed

Deliverables:

- BaseLayout
- Shared document structure
- Shared metadata
- Shared fonts

---

# Phase 4

Homepage Componentization

Goal

Split the homepage into maintainable feature modules.

Tasks

- Navbar
- Hero
- About
- Products
- Gallery
- FAQ
- Contact
- Footer

Expected Result

```
<BaseLayout>

    <Navbar />

    <Hero />

    <About />

    <Products />

    <Gallery />

    <FAQ />

    <Contact />

    <Footer />

</BaseLayout>
```

---

# Phase 5

Reusable UI Components

Goal

Extract reusable UI elements.

Candidates

- Button
- SectionTitle
- Container
- Card
- Badge

Avoid premature abstraction.

Only extract components after duplication appears.

---

# Phase 6

Configuration Layer

Create

```
src/config/site.ts
```

Purpose

Centralize:

- company name
- URLs
- contact information
- social media
- SEO defaults

This avoids duplicated business information.

---

# Phase 7

Content Collections

Move business content out of components.

Collections

```
company/

products/

testimonials/

gallery/
```

Components should become presentation only.

---

# Phase 8

Sveltia CMS

Integrate Sveltia.

Requirements

- GitHub authentication
- Image uploads
- Markdown editing
- Collection editing

Editable Content

- Company information
- Products
- Gallery
- Testimonials
- Contact information

Non-editable

- Layout
- Colors
- Typography
- Component structure

---

# Phase 9

SEO

Improve:

- Open Graph
- Twitter Cards
- Canonical URLs
- Sitemap
- Robots
- Structured Data
- Meta Images

---

# Phase 10

Performance

Review

- Images
- Lazy loading
- Fonts
- Lighthouse
- Accessibility
- Bundle size

---

# Phase 11

Production Readiness

Review

- Broken links
- Responsive layout
- Forms
- CMS editing
- Netlify deployment
- GitHub Actions

---

# Git Strategy

Each commit should solve one problem.

Example

```
chore: bootstrap Astro

refactor: migrate homepage to Astro

refactor: introduce base layout

refactor: extract homepage sections

refactor: introduce reusable UI components

feat: migrate products to content collections

feat: integrate Sveltia CMS

feat: improve SEO

chore: production cleanup
```

---

# Folder Rules

src/

Contains Astro source code.

Never place CMS-managed assets here.

---

public/

Contains static assets.

Examples

- images
- icons
- JavaScript
- downloadable files

---

components/

Reusable building blocks.

Never place page-specific business logic here.

---

features/

Page-specific sections.

Features may use UI components.

UI components must never depend on features.

Dependency Direction

```
Pages

↓

Features

↓

UI Components
```

Never the reverse.

---

# Future Enhancements

These are intentionally postponed until after migration.

- Tailwind refactoring
- Multi-page support
- Blog
- Internationalization
- Search
- Dark mode
- Animations improvements
- Design refresh

These are new features, not migration work.

---

# Definition of Done

The project is complete when:

- Website is visually identical
- Content is CMS editable
- Codebase is modular
- Lighthouse score is excellent
- Build passes
- Netlify deployment is automatic
- Another developer can understand the project within minutes