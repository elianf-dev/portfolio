export type ProjectStatus = "live" | "in-progress" | "prototype";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  status: ProjectStatus;
  role: string;
  stack: string[];
  problem: string;
  whatIBuilt: string;
  outcome: string;
  links?: {
    repo?: string;
    demo?: string;
  };
};

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  prototype: "Prototype",
};

export const projects: Project[] = [
  {
    slug: "fm-media",
    title: "Photography Studio Booking Platform",
    oneLiner:
      "Full-stack site for a real estate photography service: public booking, portfolio, and an admin panel for the business owner.",
    status: "live",
    role: "Full-stack developer",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel Blob"],
    problem:
      "A photography services client needed one site that could show off their portfolio, publish pricing packages, take booking inquiries, and let them manage all of it themselves without touching code.",
    whatIBuilt:
      "A Next.js App Router site with static-first, ISR-cached marketing pages (Home, Services, Pricing, Portfolio) for speed, a client-side contact/booking flow backed by a server action and JSON API, and a dynamic admin section with full CRUD for services and gallery images plus inquiry review. Gallery uploads go through Vercel Blob storage with URLs persisted in PostgreSQL via Prisma, and images render through next/image with AVIF/WebP support.",
    outcome:
      "Shipped and in production. The client can publish new services and gallery images and triage booking inquiries without any developer involvement.",
  },
  {
    slug: "la-dulceria",
    title: "E-Commerce Redesign for a Retail Client",
    oneLiner:
      "Rebuilding a candy, party-supply, and piñata retailer's storefront around a custom bundle configurator and bilingual EN/ES catalog.",
    status: "in-progress",
    role: "Full-stack developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem:
      "The client was running a generic WooCommerce storefront that couldn't represent their real product: build-your-own candy bags and party packs, plus shipping logic for fragile, variant-heavy inventory like piñatas.",
    whatIBuilt:
      "A Next.js redesign built directly from the incumbent site's real product and category data, centered on a build-your-own bundle/party-pack configurator with per-item pricing and quantity limits, full bilingual (EN/ES) presentation, and shipping rules tailored to breakable inventory instead of flat-rate shipping.",
    outcome:
      "In active development — catalog and configurator scaffold in place, with taxonomy and wholesale account flows being reconciled against the client's live store ahead of launch.",
  },
  {
    slug: "vitamind",
    title: "VitaMind",
    oneLiner:
      "A wellness companion app for building healthy daily habits, built end-to-end with Flutter and Firebase.",
    status: "in-progress",
    role: "Solo developer",
    stack: ["Flutter", "Dart", "Firebase"],
    problem:
      "Wanted a personal, source-supported wellness app that felt calm and trustworthy rather than gamified and pushy — most habit apps lean too hard on streak anxiety.",
    whatIBuilt:
      "A cross-platform Flutter app with Firebase for auth and data, then a full visual redesign: a Deep Teal and Coral palette, Fraunces and Inter typography, pill-shaped buttons, and a glassmorphic UI. Also hardened account-deletion flows and error handling.",
    outcome:
      "Core app and redesign are built; ongoing polish before a broader release.",
    links: {
      repo: "https://github.com/elianf-dev/VitaMind",
    },
  },
  {
    slug: "pee-tracker",
    title: "Pee Tracker",
    oneLiner:
      "A lighthearted group accountability app — track streaks with friends, no server bill required.",
    status: "in-progress",
    role: "Solo developer",
    stack: ["Kotlin", "Android", "Firebase (Spark plan)"],
    problem:
      "Wanted a fun, genuinely free habit-tracking app for a friend group, without taking on Cloud Functions billing or an iOS build pipeline I don't currently have the hardware for.",
    whatIBuilt:
      "A native Android client built entirely on Firebase's free Spark plan (no Cloud Functions), with group creation, streaks, and a leaderboard. iOS groundwork exists but is intentionally paused.",
    outcome:
      "Actively used and iterated on with the Android client; multi-group switching and notification polish are the current focus.",
  },
  {
    slug: "broadintern",
    title: "Robotics Monitoring Dashboard",
    oneLiner:
      "A Flask control panel for an Arduino-based rig — live sensor charts, joystick control, and hazard checks.",
    status: "prototype",
    role: "Solo developer",
    stack: ["Python", "Flask", "Arduino", "Serial/threading"],
    problem:
      "Wanted a web dashboard to monitor and drive a microcontroller rig in real time instead of watching a serial console.",
    whatIBuilt:
      "A Flask app that talks to an Arduino over serial in a background thread, streaming sensor data into live charts, translating joystick input (with deadzone filtering) into motor commands, and triggering hazard/emergency stops with LED and buzzer feedback. Includes basic session-based login for the dashboard.",
    outcome:
      "Functional prototype; an experimental voice-command layer was added but never fully verified. Shelved after the initial build sprint.",
  },
];
