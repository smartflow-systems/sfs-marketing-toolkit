# Design Guidelines: Next.js Multi-Tool Platform

## Design Approach

**Selected Framework**: Design System Approach with Material Design principles and inspiration from modern SaaS tools (Typeform, Notion, Linear)

**Core Philosophy**: Clean, professional utility interface that prioritizes clarity and ease of use while maintaining visual appeal. The design should feel trustworthy, modern, and approachable—suitable for embedding across various websites.

## Typography System

**Font Stack**: 
- Primary: Inter (Google Fonts) - All UI elements, forms, body text
- Monospace: JetBrains Mono - QR codes, embed codes, calculator displays

**Hierarchy**:
- Hero/Page Titles: text-5xl (48px), font-bold
- Section Headers: text-3xl (30px), font-semibold
- Subsections: text-xl (20px), font-medium
- Body Text: text-base (16px), font-normal
- Labels/Captions: text-sm (14px), font-medium
- Small Print: text-xs (12px), font-normal

## Layout & Spacing

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, and 12 consistently
- Component padding: p-6 or p-8
- Section spacing: py-12 to py-20
- Card gaps: gap-6
- Form field spacing: space-y-4
- Button padding: px-6 py-3

**Container Structure**:
- Max width: max-w-6xl for main content
- Form containers: max-w-2xl for optimal readability
- Dashboard grids: max-w-7xl

## Component Library

### Navigation
- Clean header with logo, main nav links, and prominent "Get Started" CTA
- Sticky on scroll with subtle shadow
- Mobile: Hamburger menu with slide-out drawer

### Forms
- Generous input fields with clear labels above
- Input height: h-12 with rounded-lg borders
- Error states: Red accent with icon + message below field
- Multi-step forms: Progress indicator with numbered steps
- Form cards: Elevated with shadow-sm, rounded-xl, p-8

### Review System
- Star ratings: Large, interactive 5-star display
- Review cards: User avatar (circular), name, date, rating, review text
- Grid layout: 2 columns on desktop, stacked on mobile
- Featured reviews: Highlighted with border accent

### QR Code Generator
- Side-by-side layout: Input form left, live preview right
- QR code display: Large centered preview (300x300px) with download button
- Customization controls: Size, error correction, format options
- Preview card: White background, subtle shadow

### Waitlist
- Hero-style signup: Centered form with position counter
- Email input with inline "Join Waitlist" button
- Success state: Animated checkmark + position number (#234 in line)
- Admin dashboard: Table view with search, filter, export options

### Calculators
- Card-based layout for each calculator type
- Input/output sections clearly separated
- Results: Prominently displayed in larger text with unit labels
- Share functionality: Copy link button + embed code option

### Embed Components
- Code snippets: Monospace font in code blocks with copy button
- Preview mode: iframe demonstration with device frame
- Customization panel: Width, height, theme options

## Hero Section

**Layout**: Full-width hero with split design
- Left: Compelling headline, subheadline, dual CTAs ("Create Form" + "View Demo")
- Right: Hero image showing dashboard preview or tool in action

**Hero Image**: Modern 3D illustration or screenshot showcasing the multi-tool interface—dashboard view displaying forms, reviews, and calculators in a clean organized layout. Image should convey professionalism and ease of use.

**CTA Buttons on Image**: If placing buttons over imagery, use backdrop-blur-md with semi-transparent backgrounds (bg-white/20 or bg-black/30)

## Page Structure

### Homepage
1. Hero section (as described above)
2. Feature showcase: 5 cards in grid (Forms, Reviews, QR, Waitlists, Calculators) with icons and descriptions
3. How it works: 3-step process with numbered visual flow
4. Embed demonstration: Interactive preview showing embed in action
5. Social proof: Review count, user testimonials (2-column grid)
6. Final CTA: Centered with gradient background

### Tool Pages (Forms, Reviews, etc.)
- Tool-specific hero with relevant imagery
- Interactive demo/playground section
- Feature breakdown with screenshots
- Use cases section with examples
- Embed instructions

### Dashboard
- Left sidebar: Navigation for different tools
- Main content area: Tool-specific interface
- Header: Breadcrumbs, search, user profile
- Grid layouts for displaying created items

## Visual Elements

**Cards**: Consistent rounded-xl borders with subtle shadows (shadow-sm to shadow-md on hover)

**Icons**: Heroicons (outline for navigation, solid for actions)

**Buttons**: 
- Primary: Solid with rounded-lg, px-6 py-3
- Secondary: Outlined with same dimensions
- Icon buttons: Square (44x44px minimum) for touch targets

**Animations**: Minimal, tasteful
- Hover states: Subtle scale (scale-105) and shadow transitions
- Form submissions: Loading spinner
- Success states: Brief checkmark animation

## Images

**Hero Image**: Dashboard/interface screenshot or modern 3D illustration (1200x800px, positioned right side on desktop, full-width on mobile)

**Feature Icons**: Use Heroicons throughout for consistency

**Review Section**: User avatars (if real reviews) or illustrated avatars (if placeholder)

**No additional decorative images needed** - focus on clean, functional interface with strategic use of iconography

## Accessibility

- WCAG AA contrast ratios throughout
- Form labels always visible (no placeholder-only inputs)
- Focus states: Visible ring on all interactive elements
- Touch targets: Minimum 44x44px
- Semantic HTML with proper heading hierarchy