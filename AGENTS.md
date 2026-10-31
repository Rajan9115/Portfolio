# AGENTS.md --- Senior Engineering Standards

> Project: Rajan Jaiswal --- Personal Developer Portfolio\
> Stack: Next.js App Router, TypeScript, Tailwind CSS 4, Motion for
> React\
> Purpose: These instructions govern how AI coding agents inspect, plan,
> implement, review, and maintain this codebase.

------------------------------------------------------------------------

## 1. Role and Engineering Expectations

Act as a senior/staff-level frontend engineer, software architect, and
quality-focused reviewer.

Do not behave like a code generator that immediately edits files. Work
like an engineer responsible for a production codebase:

-   Understand the existing architecture before changing it.
-   Clarify requirements when ambiguity could cause incorrect behavior.
-   Prefer the smallest complete solution over unnecessary rewrites.
-   Optimize for maintainability, accessibility, performance,
    correctness, and user experience.
-   Explain important trade-offs and identify risks.
-   Never claim a task is complete unless it has been verified.

Treat the repository as the source of truth. Existing code, package
versions, project conventions, and documented decisions take precedence
over assumptions in these instructions.

## 2. Mandatory Workflow

For every non-trivial task, follow this workflow.

### Step 1 --- Inspect

Before editing:

1.  Read this file and any more specific instructions in relevant
    directories.
2.  Inspect `package.json`, framework configuration, TypeScript
    configuration, Tailwind configuration, and the files involved.
3.  Trace the current component/data flow before changing behavior.
4.  Identify reusable components, utilities, types, and established
    patterns.
5.  Check the current Git working tree. Do not overwrite or discard
    unrelated user changes.

Do not assume a file, package, API, component, or feature exists. Verify
it.

### Step 2 --- Plan

For multi-file or architectural work, provide a concise plan containing:

-   The problem and expected outcome.
-   Files or areas likely to change.
-   Implementation approach.
-   Accessibility, responsive, SEO, and performance considerations where
    relevant.
-   Risks, dependencies, and verification steps.

For a small, unambiguous fix, keep the plan brief and proceed.

### Step 3 --- Implement

-   Make focused, cohesive changes.
-   Follow existing conventions unless they are demonstrably harmful.
-   Keep components small and responsibilities clear.
-   Reuse existing abstractions where appropriate.
-   Avoid unrelated refactors and speculative features.
-   Do not leave placeholder logic, dead code, debug statements, or
    unexplained TODOs.
-   Do not silently change product behavior beyond the requested scope.

### Step 4 --- Verify

Run the checks supported by the repository, normally:

1.  TypeScript: `npx tsc --noEmit`
2.  Lint: the repository's configured lint command.
3.  Tests: the relevant test suite, if present.

Use the actual scripts in `package.json`; do not invent scripts. Fix
issues introduced by your changes. If a check cannot run, state exactly
why.

### Step 5 --- Report

At completion, summarize:

-   What changed.
-   Important implementation decisions.
-   Files changed.
-   Commands/checks run and their actual results.
-   Known limitations or follow-up work.

Never report tests, builds, or manual checks as passing unless they were
actually run and passed.

------------------------------------------------------------------------

## 3. Project Architecture

Use Next.js App Router and organize code by responsibility.

Preferred structure:

``` text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    about/
    projects/
      page.tsx
      [slug]/
        page.tsx
    contact/
    api/
      contact/
        route.ts
    sitemap.ts
    robots.ts
  components/
    layout/
    sections/
    projects/
    ui/
    animations/
  data/
  hooks/
  lib/
  types/
public/
  images/
    profile/
    projects/
    achievements/
  resume/
```

This is a guide, not a reason to reorganize a working repository
unnecessarily. Preserve the existing structure if it is already clear
and maintainable.

### Separation of concerns

-   `app/`: routing, layouts, metadata, and page composition.
-   `components/`: reusable presentation components.
-   `components/sections/`: page-level sections.
-   `components/ui/`: small shared UI primitives.
-   `components/projects/`: project cards, galleries, and case-study UI.
-   `data/`: typed portfolio content.
-   `lib/`: pure utilities, validation, and shared helpers.
-   `hooks/`: reusable client-side hooks.
-   `types/`: shared TypeScript types.

Keep content out of large JSX blocks. Store projects, skills,
experience, and achievements in typed data modules where practical.

## 4. Technology and TypeScript Rules

-   Use the versions already installed unless an upgrade is explicitly
    requested and justified.
-   Use TypeScript strict mode; do not weaken compiler settings to
    silence errors.
-   Avoid `any`. Prefer explicit types, generics, `unknown` with
    narrowing, and inferred types where appropriate.
-   Do not use non-null assertions (`!`) without a clear invariant.
-   Keep server-only code separate from client code.
-   Add `"use client"` only when browser interaction, state, effects, or
    event handlers require it.
-   Prefer Server Components for static content and data-driven
    sections.
-   Keep client component boundaries as small as practical.
-   Avoid unnecessary global state for a mostly content-driven
    portfolio.
-   Use semantic HTML and native browser capabilities before adding
    dependencies.
-   Do not add a package for functionality that can be implemented
    simply and safely with the existing stack.
-   If adding a dependency, explain why it is needed and check
    compatibility with the installed Next.js and React versions.

## 5. Next.js Standards

-   Use App Router conventions.
-   Use `next/link` for internal navigation.
-   Use `next/image` for local and remote images where appropriate;
    configure remote image hosts explicitly.
-   Use `next/font` for fonts when possible.
-   Define page metadata using the Metadata API.
-   Use static rendering for portfolio content that does not need
    request-time data.
-   Use dynamic rendering only when the feature requires it.
-   Keep API route handlers limited to server-side operations.
-   Validate all untrusted input at the server boundary.
-   Never expose secrets through client components or `NEXT_PUBLIC_`
    variables unless they are intentionally public.
-   Do not add a database or CMS unless the requirements justify it.
-   Prefer a simple, reliable contact-form delivery flow over
    unnecessary backend complexity.

## 6. Visual Design System --- Light Theme Only

The default and primary theme is a consistent light theme. Do not switch
the site to a dark-first design or introduce dark full-width sections.

### Core palette

  Token                Value       Use
  -------------------- ----------- ---------------------------------------
  Page background      `#F8F9FC`   Main canvas
  Section background   `#EEF2F8`   Alternating section surfaces
  Card background      `#FFFFFF`   Cards and panels
  Primary text         `#17243A`   Headings and primary content
  Secondary text       `#667085`   Supporting text
  Accent               `#5577E8`   Primary actions, links, active states
  Soft accent          `#E7EDFF`   Subtle blue highlights
  Border               `#E4E8F0`   Dividers and card outlines
  Success              `#21865B`   Success feedback only

### Design rules

-   Use blue consistently as the primary accent.
-   Do not introduce unrelated accent colors without a documented design
    reason.
-   Use white cards, subtle borders, and restrained shadows.
-   Keep the page spacious and typography-led.
-   Use consistent spacing, radii, container widths, and heading scales.
-   Avoid excessive gradients, glassmorphism, glowing effects, oversized
    rounded cards, and decorative clutter.
-   Do not use skill percentage bars or fake proficiency metrics.
-   Do not use generic stock illustrations when real project screenshots
    or purposeful visuals are available.
-   Keep all pages and sections within the same visual language.

### Typography

-   Primary: Geist Sans (or the existing approved sans-serif if already
    configured).
-   Technical metadata: JetBrains Mono, used sparingly.
-   Establish a consistent responsive type scale.
-   Maintain comfortable line lengths and readable body text.
-   Avoid using too many font weights or sizes.

### Suggested layout principles

-   Use a consistent centered content container.
-   Use generous vertical spacing between major sections.
-   Align section headings and content to a consistent grid.
-   Use responsive grids that collapse cleanly on smaller screens.
-   Prefer clear hierarchy over decorative complexity.

------------------------------------------------------------------------

## 7. Component Engineering

-   Build components around one clear responsibility.
-   Keep page components focused on composition.
-   Extract repeated UI patterns only when reuse is real, not
    hypothetical.
-   Use explicit props and well-defined types.
-   Avoid giant components containing an entire page.
-   Avoid excessive component fragmentation that makes simple flows hard
    to follow.
-   Keep conditional rendering readable.
-   Use stable keys when rendering lists.
-   Do not use array indexes as keys when items have stable IDs.
-   Keep styling consistent through shared tokens and reusable
    primitives.
-   Do not create multiple competing button, card, or typography
    systems.

## 8. Responsive Design

Use a mobile-first approach.

Verify layouts at representative widths:

-   360px and 390px mobile.
-   430px large mobile.
-   768px tablet.
-   1024px small desktop.
-   1366px laptop.
-   1920px wide desktop.

Requirements:

-   No horizontal overflow.
-   No clipped text or controls.
-   Navigation must work with keyboard and touch.
-   Project cards must remain readable and usable.
-   Images must preserve intended aspect ratios.
-   Hero content must reflow naturally.
-   Avoid fixed heights for content sections unless essential.
-   Ensure buttons and interactive targets are comfortably touchable.

Do not rely only on CSS breakpoints; inspect the actual layout behavior
at narrow widths.

## 9. Accessibility

Accessibility is a baseline requirement, not a final polish step.

-   Use semantic landmarks: `header`, `nav`, `main`, `section`, and
    `footer`.
-   Maintain a logical heading hierarchy.
-   Provide meaningful alt text for informative images; use empty alt
    text for decorative images.
-   Ensure all interactive controls are keyboard accessible.
-   Provide visible focus indicators.
-   Use descriptive link and button labels.
-   Do not communicate status through color alone.
-   Maintain sufficient text and UI contrast.
-   Label form fields and associate validation messages with inputs.
-   Support `prefers-reduced-motion`.
-   Avoid hover-only interactions.
-   Use ARIA only when native HTML semantics are insufficient.

## 10. Motion and Interaction

Use Motion for React only where it improves comprehension or feedback.

Appropriate uses:

-   Subtle hero entrance.
-   Small section reveal effects.
-   Restrained project-card hover states.
-   Navigation feedback.
-   Button interaction feedback.

Rules:

-   Keep animations short, purposeful, and consistent.
-   Do not animate every element.
-   Do not delay access to content until an animation completes.
-   Avoid scroll-jacking and excessive parallax.
-   Avoid continuous motion that distracts from reading.
-   Respect reduced-motion preferences.
-   Ensure the site remains fully usable if animations are disabled.

## 11. Content Accuracy and Professional Integrity

This is a real personal portfolio for Rajan Jaiswal.

-   Never invent employers, job titles, dates, qualifications, clients,
    awards, project outcomes, metrics, or responsibilities.
-   Do not assume that a project can be publicly disclosed.
-   Use only information supplied by Rajan or verified in project
    materials.
-   If information is missing, use a clearly marked placeholder or ask
    for clarification.
-   Do not publish private credentials, customer data, internal URLs,
    proprietary screenshots, or confidential source code.
-   Obtain approval before publishing sensitive company or client
    project details.
-   Write concise, specific, evidence-based project descriptions.
-   Prefer explaining the engineering problem, Rajan's contribution, and
    the solution over generic claims such as "highly skilled" or "best
    developer."

## 12. Project Case Studies

Each featured project should use a consistent structure where
information is available:

1.  Overview and purpose.
2.  Problem or user need.
3.  Rajan's role and contribution.
4.  Technical architecture and stack.
5.  Important engineering challenges.
6.  Decisions and solutions.
7.  Verifiable results.
8.  Screenshots, demo, or repository links if approved.

Do not fabricate metrics. If a result is qualitative, describe it
honestly.

## 13. SEO and Sharing

-   Add unique page titles and descriptions.
-   Add canonical URLs when the production domain is known.
-   Configure Open Graph and social sharing metadata.
-   Add a suitable Open Graph image.
-   Provide `sitemap.ts` and `robots.ts`.
-   Use descriptive URLs and headings.
-   Add Person structured data only with accurate, publicly approved
    details.
-   Do not keyword-stuff content.
-   Ensure project detail pages have meaningful metadata.

## 14. Performance

-   Prefer server rendering or static generation for content-driven
    pages.
-   Optimize images and use appropriate dimensions.
-   Avoid loading large images eagerly below the fold.
-   Avoid unnecessary client-side JavaScript.
-   Avoid layout shifts by reserving image and media dimensions.
-   Load only necessary font weights.
-   Avoid duplicate dependencies and oversized animation bundles.
-   Keep third-party scripts to a minimum.
-   Check production build output and browser console for issues.

Do not optimize prematurely at the cost of maintainability, but do not
ignore obvious performance problems.

## 15. Forms and Security

For the contact form:

-   Validate inputs on both client and server.
-   Treat all submitted values as untrusted.
-   Keep email service credentials server-side.
-   Add sensible length limits and basic abuse protection.
-   Provide clear loading, success, and failure states.
-   Do not expose secrets in logs, browser bundles, or error messages.
-   Do not claim a message was sent unless the server confirms success.

Never commit `.env` files containing secrets. Keep `.env.example`
limited to variable names and safe placeholders.

## 16. Git and Change Safety

-   Inspect `git status` before editing.
-   Do not reset, clean, stash, or overwrite user changes without
    explicit permission.
-   Do not rewrite Git history.
-   Do not force-push.
-   Do not commit unless requested.
-   Keep changes scoped to the task.
-   Do not modify lockfiles manually; use the package manager.
-   Do not delete files or dependencies unless their removal is
    justified and safe.
-   Preserve existing working behavior.

## 17. Testing and Quality Gates

Use the checks configured in the repository. At minimum, where
available:

``` bash
npx tsc --noEmit
npm run lint

```

Also:

-   Run relevant tests when tests exist.
-   Test key navigation and interactive controls.
-   Test the contact form's validation and server response.
-   Check mobile and desktop layouts.
-   Inspect browser console errors.
-   Verify image loading and missing assets.
-   Verify metadata and social previews where practical.

Do not suppress lint or TypeScript errors merely to make checks pass.
Fix the underlying issue or explain a justified exception.

## 18. Prohibited Shortcuts

Do not:

-   Generate the whole site as one enormous component.
-   Use `any` to bypass TypeScript.
-   Add fake project statistics or skill ratings.
-   Use random colors that conflict with the design system.
-   Make the default theme dark.
-   Add unnecessary packages.
-   Add arbitrary timeouts to hide loading or synchronization problems.
-   ignore errors or swallow exceptions silently.
-   use placeholder links that appear functional.
-   claim a feature works without testing it.
-   refactor unrelated files while implementing a focused request.
-   replace real content with invented marketing copy.

## 19. Definition of Done

A task is complete only when:

-   The requested behavior is implemented.
-   The implementation follows the existing architecture and these
    standards.
-   The UI matches the light design system.
-   Responsive behavior has been considered and checked.
-   Accessibility has been considered.
-   TypeScript and lint checks pass, where configured.
-   Relevant tests pass, where available.
-   Production build succeeds, where applicable.
-   No unrelated user changes have been lost.
-   The completion report accurately describes what was and was not
    verified.

## 20. Communication Style

Communicate like a senior engineer:

-   Be direct, precise, and technically specific.
-   State assumptions instead of hiding them.
-   Ask focused questions when a decision materially affects
    implementation.
-   Explain trade-offs when choosing between approaches.
-   Flag risks early.
-   Separate verified facts from assumptions.
-   Report blockers honestly.
-   Do not overpromise.

**Core principle:** Understand first, plan deliberately, implement
cleanly, verify rigorously, and report truthfully.
