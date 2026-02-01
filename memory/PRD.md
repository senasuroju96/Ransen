# RANSEN Digital Marketing Agency Website - PRD

## Original Problem Statement
Build an interactive website for a digital marketing agency. The Brand name is RANSEN.

## User Personas
1. **Business Owners** - Looking for digital marketing services to grow their business
2. **Marketing Managers** - Seeking agency partnerships for campaigns
3. **Startups** - Need comprehensive digital presence solutions

## Core Requirements

### Design Guidelines
- Primary background: #ECEC75 (bright lime-yellow)
- Card backgrounds: #e6e67c (darker lime tint)
- Buttons: Black (#0f172a) with white text
- Typography: Crimson Text (serif) for headings, system sans-serif for body
- Clean, professional, modern aesthetic
- Generous spacing and whitespace
- No dark colorful gradients

### Key Features (Static)
- Single-page layout with smooth scrolling
- Responsive design (mobile, tablet, desktop)
- Fixed navigation header
- Hero section with CTA buttons
- Services showcase (6 services)
- Portfolio/case studies (4 items)
- About section
- Client testimonials (3 testimonials)
- Contact form
- Footer with links and company info

## What's Been Implemented

### Phase 1 - Frontend with Mock Data (January 2025)
**Completed:**
- ✅ Created mock.js with services, portfolio, testimonials, stats data
- ✅ Built Home.jsx component with all sections
- ✅ Implemented responsive navigation with mobile menu
- ✅ Hero section with stats (500+ projects, 98% satisfaction, 150+ clients, 50+ awards)
- ✅ Services grid (6 services in 3x2 layout)
- ✅ About section with key differentiators
- ✅ Portfolio grid (4 case studies)
- ✅ Testimonials section (3 client reviews)
- ✅ Contact form with validation (frontend only - mock submission)
- ✅ Contact information cards (email, phone, office)
- ✅ Footer with company info and links
- ✅ Custom CSS following lime-yellow design guidelines
- ✅ Smooth scroll navigation
- ✅ Hover effects and micro-animations
- ✅ Imported Crimson Text Google font
- ✅ Integrated Shadcn UI components (Button, Input, Textarea, Card)
- ✅ Toast notifications using Sonner

**Files Created:**
- `/app/frontend/src/mock.js`
- `/app/frontend/src/pages/Home.jsx`
- `/app/frontend/src/App.js` (updated)
- `/app/frontend/src/App.css` (updated with custom styles)
- `/app/frontend/src/index.css` (updated with font import)

## Prioritized Backlog

### P0 Features (Must Have)
- Backend API for contact form submission
- Email notification system for form submissions
- Form data storage in MongoDB

### P1 Features (Should Have)
- Service detail pages with expanded information
- Portfolio detail pages with full case studies
- Blog section for content marketing
- Newsletter subscription functionality
- Admin dashboard for managing content

### P2 Features (Nice to Have)
- Live chat widget for instant engagement
- Client testimonial submission form
- Service request calculator/pricing estimator
- Social media feed integration
- Multi-language support

## Next Tasks
1. Build backend API endpoints for contact form
2. Set up email service integration (SendGrid/AWS SES)
3. Create MongoDB models for contact submissions
4. Connect frontend form to backend API
5. Add form validation and error handling
6. Implement success/error notifications

## Technical Stack
- **Frontend**: React 19, Tailwind CSS, Shadcn UI
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Fonts**: Crimson Text (headings), System sans-serif (body)
- **Icons**: Lucide React

## Design Notes
- All buttons use black (#0f172a) background with white text
- Service cards use lime tint (#e6e67c)
- Testimonials use light gray (#f8fafc) background
- Portfolio cards use white background
- No emojis used - only Lucide React icons
- Generous spacing throughout (2-3x normal)
- Smooth transitions on all interactive elements (200ms ease)
