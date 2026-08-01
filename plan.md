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

    components/

        ui/

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
            WhyUs.astro
            Industries.astro
            Quality.astro
            Global.astro
            Process.astro
            Gallery.astro
            FAQ.astro
            CTABanner.astro
            Contact.astro
            FloatingButtons.astro
            Ledger.astro

    layouts/

        BaseLayout.astro

    pages/

        index.astro

    styles/

        style.css

    config/

        site.ts

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

# ✅ Phase 4

Homepage Componentization

Status:

Completed

Deliverables:

- NavBar extracted to components/layout/
- Footer extracted to components/layout/
- Hero, About, Products, WhyUs, Industries, Quality, Global, Process, Gallery, FAQ, CTABanner, Contact, FloatingButtons, Ledger extracted to features/home/
- Index page renders purely from composed components

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

# ✅ Phase 5

Reusable UI Components

Status:

Completed

Deliverables:

- Container (src/components/ui/Container.astro) — extracted repeated max-w-7xl mx-auto px-6 lg:px-10 pattern, used in 13 places
- SectionTitle (src/components/ui/SectionTitle.astro) — extracted repeated num-label + heading pattern, used in 9 sections
- Button, Card, Badge intentionally deferred — insufficient duplication to warrant abstraction

---

# ✅ Phase 6

Configuration Layer

Status:

Completed

Deliverables:

- Created src/config/site.ts centralizing:
  - Company name, full name, subtitle, tagline, slogan
  - Contact info (phone, email, WhatsApp, business hours)
  - Social media links (LinkedIn, Instagram, Facebook)
  - SEO defaults (title, description, site URL)
- Updated 6 components to reference config:
  - BaseLayout.astro, index.astro, Footer.astro, Contact.astro, FloatingButtons.astro, About.astro

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