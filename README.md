<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# TRAVEL LAB - Cambodia Travel Website

A modern, visually stunning travel website showcasing the beauty and wonders of Cambodia. Built with Next.js and enhanced with GSAP animations, this project serves as a travel agency showcase featuring destinations, tours, services, and booking information.

## Features

- **Hero Section**: Immersive introduction with parallax effects showcasing Cambodia's beauty
- **Tours Section**: Interactive carousel displaying travel options for solo travelers, groups, and families
- **Popular Destinations**: Scrollable gallery of Cambodia's top destinations (Angkor Wat, Koh Rong, Phnom Penh, etc.)
- **Services Section**: Overview of travel services and expertise
- **Pricing Section**: Transparent pricing tiers for different tour packages
- **Testimonials**: Customer reviews and experiences
- **FAQ Section**: Common questions and answers
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: GSAP-powered parallax and scroll effects for engaging user experience

## Tech Stack

- **Framework**: Next.js 15.4.9 with App Router
- **UI Library**: React 19.2.1 with TypeScript
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: GSAP 3.14.2 with React hooks
- **Icons**: Lucide React
- **AI Integration**: @google/genai 1.17.0
- **Form Handling**: react-hook-form with @hookform/resolvers
- **Motion Library**: motion for additional animations

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```bash
# Required for Gemini AI API calls
# AI Studio automatically injects this at runtime from user secrets
GEMINI_API_KEY="MY_GEMINI_API_KEY"

# The URL where this applet is hosted
# AI Studio automatically injects this at runtime with the Cloud Run service URL
APP_URL="MY_APP_URL"
```

See [.env.example](.env.example) for reference.

## Run Locally

**Prerequisites**: Node.js 18+ and npm

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
   - Optionally set `APP_URL` (defaults to http://localhost:3000)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clean Next.js cache

## Project Structure

```
travel-lab/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page components
├── components/            # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ServicesSection.tsx
│   ├── PricingSection.tsx
│   ├── TestimonialsSection.tsx
│   └── FAQSection.tsx
├── public/               # Static assets (images)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── package.json         # Dependencies and scripts
```

## AI Studio Integration

View your app in AI Studio: https://ai.studio/apps/c0fae08e-2b2b-48fa-a0c5-22cde916cf85

This project is optimized for deployment on AI Studio and Google Cloud Run.
