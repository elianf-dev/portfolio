export type ProjectStatus = "live" | "in-progress" | "prototype";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  status: ProjectStatus;
  /** Jewel-tone glass accent for this project's pane. */
  accent: string;
  /** Renders in the larger flagship pane. */
  featured?: boolean;
  role: string;
  stack: string[];
  problem: string;
  builtBullets: string[];
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
      "A real estate photographer's whole business online: portfolio, pricing, bookings, and self-serve admin.",
    status: "live",
    accent: "#C68A2E",
    featured: true,
    role: "Full-stack developer",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel Blob"],
    problem:
      "A photography services client needed one site to show off their work, publish pricing, take bookings, and manage all of it themselves — no developer on call.",
    builtBullets: [
      "Fast, cached marketing pages: Home, Services, Pricing, Portfolio",
      "A booking form that saves inquiries and also accepts JSON requests for integrations",
      "An admin panel with full control over services, gallery images, and inquiries",
      "Photo uploads via Vercel Blob storage, served as optimized AVIF/WebP",
    ],
    outcome:
      "Shipped and in production. The client publishes new work and manages bookings without touching code.",
  },
  {
    slug: "la-dulceria",
    title: "E-Commerce Redesign for a Retail Client",
    oneLiner:
      "A build-your-own bundle configurator for a candy & piñata retailer's storefront.",
    status: "in-progress",
    accent: "#8C2F3B",
    role: "Full-stack developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem:
      "The client's storefront was a generic template that couldn't represent their real product — build-your-own candy bags, party packs, and fragile, variant-heavy inventory like piñatas.",
    builtBullets: [
      "A build-your-own bundle configurator with per-item pricing and quantity limits",
      "Full bilingual EN/ES presentation, built from the client's real catalog data",
      "Shipping rules written for breakable inventory instead of flat-rate shipping",
    ],
    outcome:
      "In active development — catalog and configurator are live in staging; taxonomy and wholesale flows are being reconciled ahead of launch.",
  },
  {
    slug: "vitamind",
    title: "VitaMind",
    oneLiner: "A calm, source-supported wellness app for building better habits.",
    status: "in-progress",
    accent: "#1F6F54",
    role: "Solo developer",
    stack: ["Flutter", "Dart", "Firebase"],
    problem:
      "Wanted a personal wellness app that felt trustworthy and calm, not gamified and pushy.",
    builtBullets: [
      "Cross-platform Flutter app with Firebase for auth and data",
      "A full visual redesign: Deep Teal and Coral, Fraunces and Inter type, a glassmorphic UI",
      "Hardened account-deletion flow and error handling",
    ],
    outcome: "Core app and redesign are built; polishing before a broader release.",
    links: {
      repo: "https://github.com/elianf-dev/VitaMind",
    },
  },
  {
    slug: "pee-tracker",
    title: "Pee Tracker",
    oneLiner:
      "A lighthearted group accountability app — streaks with friends, no server bill required.",
    status: "in-progress",
    accent: "#2C4E8C",
    role: "Solo developer",
    stack: ["Kotlin", "Android", "Firebase (Spark plan)"],
    problem:
      "Wanted a genuinely free habit tracker for a friend group — no Cloud Functions billing, no iOS build pipeline I don't have the hardware for yet.",
    builtBullets: [
      "Native Android client built entirely on Firebase's free Spark plan",
      "Group creation, streaks, and a leaderboard",
      "iOS groundwork exists but is intentionally paused",
    ],
    outcome:
      "Actively used by a real friend group; multi-group switching and notification polish are next.",
  },
  {
    slug: "broadintern",
    title: "Robotics Monitoring Dashboard",
    oneLiner:
      "A Flask control panel for an Arduino rig — live charts, joystick control, hazard checks.",
    status: "prototype",
    accent: "#5B3A73",
    role: "Solo developer",
    stack: ["Python", "Flask", "Arduino", "Serial/threading"],
    problem: "Wanted a web dashboard to monitor and drive a microcontroller rig in real time, instead of watching a serial console.",
    builtBullets: [
      "Flask app streaming live sensor data into charts over a background serial thread",
      "Joystick input with deadzone filtering, translated into motor commands",
      "Hazard/emergency-stop triggers with LED and buzzer feedback",
    ],
    outcome:
      "A functional prototype. An experimental voice-command layer was never fully verified. Shelved after the initial build sprint.",
  },
];
