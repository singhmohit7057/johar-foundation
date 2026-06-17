# Johar Foundation 

Meaning of "Johar"
The term "Johar" (or Zauhar) carries deep significance in different contexts in India:

Tribal Greeting: In many Adivasi (tribal) communities, particularly in Jharkhand, Chhattisgarh, and Odisha, "Johar" is a traditional greeting that signifies respect for nature, ancestors, and the community. It translates roughly to "Salutation to all."

Historical Context: In a different historical context, it refers to the practice of self-immolation by women in Rajput kingdoms to avoid capture and dishonor during wartime.

Etymology: The word is often linked to "Jyoti" (light) and "Har" (Shiva/God), or sometimes interpreted as "Victory to the soul."

#

A modern, highly responsive React web application built for the **Johar Foundation**, a Section 8 NGO dedicated to building resilience and empowering marginalized communities across Eastern India (Jharkhand, Odisha, West Bengal, Bihar, and Chhattisgarh).

## 🚀 Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite
* **Language:** TypeScript
* **Routing:** React Router v6
* **Styling:** Inline CSS & Scoped Styles (CSS-in-JS pattern)
* **Icons:** React Icons (`fa6`)
* **API/Forms:** Web3Forms (Serverless Form Handling)
* **Deployment:** Vercel (Configured via `vercel.json`)

---

## ✨ Key Features

* **Component-Driven Architecture:** Highly modular design separating logic, UI elements, and data arrays for supreme maintainability.
* **Serverless Form Handling:** Secure integration with Web3Forms for Donations, Volunteer Applications, General Contact, and Newsletter subscriptions, complete with `idle`, `loading`, `success`, and `error` state management.
* **Interactive Regional Map:** A lightweight, custom-built SVG map highlighting operational clusters across 5 states without relying on heavy external mapping libraries.
* **Dynamic SEO Engine:** A custom `<SEO />` component that dynamically injects page titles and meta descriptions per route.
* **Accessibility & UX Polish:** Features include a smooth scroll-to-top routing utility, interactive floating action buttons (WhatsApp, Donate), and responsive grids designed for both mobile and ultrawide displays.

---

## 📁 Project Structure

```text
johar-foundation/
├── public/                 # Static assets (logo.webp, compliance PDFs, etc.)
├── src/
│   ├── components/         # Reusable form blocks (Donate, Contact, Volunteer)
│   ├── floating/           # Floating Action Buttons (WhatsApp, BackToTop, Donate)
│   ├── forms/              # Centralized API logic (formservice.tsx)
│   ├── legal/              # Compliance pages (Privacy, Terms, Cookies)
│   ├── pages/              # Core route views (Home, Impact, Initiatives, Resources, About, WhoWeAre, Contact, Donate)
│   ├── popup/              # Engagement modals and overlays
│   ├── router/             # Routing utilities (ScrollToTop)
│   ├── shared/             # Global layout elements (Navbar, Footer, SEO, TopHeader)
│   ├── subscribe/          # Newsletter and Unsubscribe workflows
│   ├── system/             # Application utilities (404, Coming Soon)
│   └── theme/              # Centralized design tokens (styles.ts)
├── index.html              # Vite entry point
├── App.tsx                 # Root application component and routing configuration
├── main.tsx                # Application entry point and DOM rendering
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel deployment and routing configuration
└── vite.config.ts          # Vite bundler configuration