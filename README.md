# Alice's Family Restaurant Catering Landing Page

This project is a responsive, single-page marketing site for Alice's Family Restaurant focused on catering services. The site is built with native HTML, CSS, and JavaScript and is designed to feel warm, polished, and family-oriented while still remaining clean and easy to navigate.

## Current status

The project is currently in an active front-end build phase. It functions as a standalone landing page for catering inquiries and presents a simple customer journey:

- A hero section introducing the restaurant and catering value proposition
- A services section highlighting family-owned operations, menu categories, staffing, and event support
- An animated testimonial area that continuously cycles through customer feedback
- A dedicated contact section with phone, address, website, and email
- A footer with branding and a back-to-top link

## What is currently implemented

### Layout and structure

The page is organized into a clear, single-page flow:

- Header with brand name and navigation links
- Hero section with headline, family-focused messaging, and food image carousel
- Services section with benefits and event support details
- Testimonial section with an auto-scrolling card layout
- Contact section with call-to-action and business details
- Footer for quick navigation and legal branding

### Visual design

The design uses a warm cream-and-navy palette, serif accent typography for headings, soft border treatments, and a restrained but polished visual style. The overall tone is meant to feel welcoming and premium without becoming overly busy.

### Interactivity

The JavaScript adds a few lightweight interactive behaviors:

- Auto-rotating image carousel in the hero section
- Pause/play control for the slideshow
- Previous/next image navigation
- Reduced-motion support for accessibility
- Infinite looping testimonial grid for desktop and stacked/mobile layouts
- Hover pause behavior for testimonial motion

### Accessibility and responsiveness

The implementation includes several accessibility-minded features:

- Semantic HTML structure
- Descriptive alt text for images
- Keyboard-friendly controls
- Focus-visible outlines
- Responsive layout adjustments for smaller screens
- Respect for reduced-motion preferences

## Project structure

- index.html — overall page structure and content
- style.css — all visual styling, layout, colors, animation, and responsiveness
- script.js — carousel logic and testimonial animation logic
- images/ — image assets used in the hero carousel
- prompt-history.md — chronological record of design and development prompts

## How to run locally

Because this is a static site, you can open the page directly in a browser or serve it locally.

Option 1: Open directly

- Double-click index.html

Option 2: Local web server

- Change into the project folder:
  cd "c:\Users\amber\OneDrive\Desktop\Projects\week-1-builld"
- Start a local server:
  python -m http.server 8000
- Open this URL in your browser:
  http://localhost:8000

## Future features and planned implementations

The current project is a strong front-end prototype, but there are several natural next steps to take it from a marketing page into a more complete restaurant business website.

### 1. Full menu experience

- Add a dedicated menu section with category navigation
- Show appetizers, entrees, sides, desserts, and catering packages
- Include pricing and dietary tags if needed
- Add meal photography for stronger appeal

### 2. Better lead generation

- Add a real inquiry form with name, event date, guest count, and message
- Validate form inputs and show success states
- Connect form submissions to email or a backend service

### 3. Additional business sections

- Add an About page or expanded About section for the restaurant story
- Add an FAQ section for catering questions
- Include service area details or event policies

### 4. Enhanced gallery and media

- Create a richer photo gallery of dishes and events
- Add lightbox functionality for larger images
- Include social proof or restaurant review highlights

### 5. More advanced front-end polish

- Add subtle page transitions and scroll animations
- Improve micro-interactions for buttons and nav links
- Fine-tune spacing and typography across breakpoints
- Iterate on the testimonial motion to feel more editorial and less mechanical

### 6. Backend integration

- Connect forms to email or a CRM
- Add online booking or reservation request handling
- Store menu or content in a CMS or structured data source

### 7. SEO and marketing improvements

- Add structured metadata and Open Graph tags
- Improve local SEO for restaurant searches
- Add schema markup for restaurant information
- Create social sharing previews

### 8. Expansion into a multi-page website

- Separate Home, About, Menu, Catering, and Contact pages
- Keep the landing page as a polished entry point while expanding the brand experience

## Notes for future iteration

This project currently focuses on a static marketing experience rather than a full web application. As the site evolves, the next priority should be converting the current inquiry flow into a more actionable system that helps customers contact the restaurant and plan events more easily.

## Summary

This project is a responsive catering landing page for Alice's Family Restaurant with a strong visual identity, content hierarchy, and interactive elements already in place. The foundation is solid, and the most valuable next phases are improving conversion flow, adding richer content, and turning the page into a fuller restaurant website experience.
