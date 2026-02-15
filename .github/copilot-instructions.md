# Copilot Instructions for Landing Portfolio Project

## Project Overview
This is a Next.js 16 portfolio landing page using the App Router, TypeScript, Tailwind CSS v4, and Framer Motion for animations. The site features a fixed bottom navbar, page transitions, and particle effects.

## Architecture
- **App Router Structure**: Pages in `app/` (e.g., `app/page.tsx`, `app/about-me/page.tsx`)
- **Components**: Reusable React components in `components/` (e.g., `navbar.tsx`, `transitionPage.tsx`)
- **Utilities**: Animation variants and helpers in `utils/` (e.g., `motion-transitions.tsx`)
- **Data**: Static data arrays in `data.tsx` (navbar items, social networks)
- **Styling**: Tailwind CSS with custom gradients and blur effects

## Key Patterns
- **Client Components**: Mark with `"use client"` for interactivity/animations (e.g., navbar, particles)
- **Motion Variants**: Define animation variants in `utils/motion-transitions.tsx` and import as needed
  - Example: `import { fadeIn } from '@/utils/motion-transitions'`
  - Usage: `<motion.div variants={fadeIn('right')} initial="hidden" animate="visible">`
- **Data-Driven Components**: Navbar items and social links sourced from `data.tsx` arrays
- **Transition Wrapper**: Use `MotionTransition` component for fade-in effects on elements
  - Props: `position: 'right' | 'bottom'`, optional `className`

## Common Issues & Fixes
- **Animation Variants**: Ensure variant keys match exactly (e.g., "initial" not "inicial")
- **Imports**: Use `@/` alias for absolute imports from project root
- **Font**: Urbanist font loaded in `app/layout.tsx` for consistent typography

## Development Workflow
- **Start Dev Server**: `npm run dev` (runs on localhost:3000)
- **Build**: `npm run build` (production build)
- **Lint**: `npm run lint` (ESLint checks)
- **Add New Page**: Create folder in `app/` with `page.tsx`, update `data.tsx` navbar items if needed

## Dependencies
- **Motion**: `motion` (Framer Motion) for animations
- **Particles**: `@tsparticles/react` + `@tsparticles/slim` for background effects
- **Icons**: `lucide-react` for navbar and social icons
- **Styling**: Tailwind CSS v4 with PostCSS

## File Examples
- **Adding Animated Component**: See `components/navbar.tsx` for MotionTransition usage
- **Page Transition**: `components/transitionPage.tsx` with AnimatePresence
- **Particle Background**: `components/cover-particles.tsx` for tsparticles setup</content>
<parameter name="filePath">c:\Users\Cris\Desktop\landing-porfolio\.github\copilot-instructions.md