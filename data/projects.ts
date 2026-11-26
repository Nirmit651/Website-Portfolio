export type ProjectLinkType = "repository" | "live" | "video" | "case-study";

export type ProjectLink = {
  label: string;
  href: string;
  type: ProjectLinkType;
};

export type ProjectStatus = "Prototype" | "Team Project" | "Private Deployment";

export type Project = {
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  contribution?: string;
  metrics?: string[];
  image: string;
  imageAlt: string;
  tags: string[];
  technologies: string[];
  links: ProjectLink[];
  teamProject?: boolean;
  context?: string;
  status?: ProjectStatus;
  featuredOrder?: number;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "FaithfulMed",
    slug: "faithfulmed",
    eyebrow: "AI / Healthcare / Multi-Agent System",
    description:
      "A developing multi-agent system that turns medical text into faithful, patient-friendly explanations. Specialized agents extract source-grounded facts, simplify language, improve readability, and verify claims, with optional UMLS definitions and offline evaluation tools.",
    metrics: ["5 specialized agents", "UMLS-grounded medical definitions", "Offline evaluation and unit tests"],
    image: "/projects/faithfulmed/cover.svg",
    imageAlt:
      "FaithfulMed illustration showing a medical document flowing through specialized AI agents and producing a patient-friendly explanation.",
    tags: ["Generative AI", "Healthcare", "Multi-Agent Systems"],
    technologies: [
      "Python",
      "Google ADK",
      "Gemini",
      "FastAPI",
      "React",
      "UMLS",
      "MedAESQA",
      "Automated Testing",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Break-Through-Tech/Google-2B-faithfulmed-a-multi-agent-system-for-faithful-patient-friendly-medical-explanations",
        type: "repository",
      },
    ],
    featuredOrder: 1,
  },
  {
    title: "Blog Publishing Platform",
    slug: "blog-publishing-platform",
    eyebrow: "Full-Stack / REST API / Authentication",
    description:
      "A full-stack publishing platform organized as a monorepo with an Express REST API and separate React applications for public readers and authors, supporting authenticated publishing, comments, drafts, and moderation.",
    metrics: ["3-application monorepo", "JWT authentication", "Role-based authorization"],
    image: "/projects/blog-publishing-platform/cover.svg",
    imageAlt:
      "Original architecture illustration showing a REST API between reader and author clients with PostgreSQL storage below.",
    tags: ["Full-Stack", "Backend", "Authentication"],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "bcryptjs"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/blog-api", type: "repository" }],
    featuredOrder: 2,
  },
  {
    title: "NYC Airbnb Price Classification",
    slug: "nyc-airbnb-price-classification",
    eyebrow: "Machine Learning / Classification / Data Science",
    description:
      "An end-to-end machine-learning project that classifies NYC Airbnb listings into high- and low-price categories, comparing logistic regression and a neural network with a CatBoost model tuned for F1 on structured listing features.",
    metrics: ["28,022 listings", "85.48% test accuracy", "0.736 F1 (+23.1% vs. neural network)"],
    image: "/projects/nyc-airbnb-price-classification/cover.svg",
    imageAlt:
      "Abstract NYC listing classification visualization with location markers, property signals, and model performance charts.",
    tags: ["Machine Learning", "Classification", "Data Science"],
    technologies: [
      "Python",
      "CatBoost",
      "TensorFlow / Keras",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Nirmit651/NYC-Airbnb-Price-Classification",
        type: "repository",
      },
    ],
    featuredOrder: 3,
  },
  {
    title: "LemonLens",
    slug: "lemonlens",
    eyebrow: "Social Impact / Geospatial Analytics / Team Project",
    description:
      "A geospatial analytics platform built during Morgan Stanley Code to Give for Lemontree that transforms pantry operations, food-supply signals, and demographic context into interactive insights for identifying high-need food-access locations across New York City.",
    contribution:
      "Team project. I contributed to the frontend geospatial experience, including borough filtering, map card UI, dashboard layout refinements, bookmark placement, and supply-tag detail views.",
    metrics: ["1,400+ food resources", "NYC food-access data", "Morgan Stanley Code to Give"],
    image: "/projects/lemonlens/cover.svg",
    imageAlt:
      "Illustration of the LemonLens dashboard with a New York City map, resource clusters, pantry insights, and ranked food-access needs.",
    tags: ["Geospatial", "Analytics", "Social Impact"],
    technologies: ["TypeScript", "Next.js", "React", "Mapbox", "Vercel", "REST APIs", "Data Visualization"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ishratarshad/trackb_team7_code_to_give",
        type: "repository",
      },
      { label: "Project Video", href: "https://youtu.be/4kvC4jmpLTg", type: "video" },
    ],
    teamProject: true,
    context: "Built during Morgan Stanley Code to Give for Lemontree NYC.",
    status: "Team Project",
    featuredOrder: 4,
  },
  {
    title: "Relay",
    slug: "relay",
    eyebrow: "Full-Stack / Real-Time Messaging / Authentication",
    description:
      "A full-stack messaging app that combines Next.js Server Components for initial data loading with a standalone Socket.IO server for live delivery, while PostgreSQL remains the source of truth for conversations and message history.",
    metrics: ["Real-time Socket.IO messaging", "JWT + HttpOnly authentication", "Persistent conversation history"],
    image: "/projects/relay/cover.svg",
    imageAlt:
      "Relay messaging interface showing a conversation list, an active direct conversation, real-time message bubbles, and the message composer.",
    tags: ["Full-Stack", "Real-Time", "Authentication"],
    technologies: ["Next.js", "React", "TypeScript", "Socket.IO", "PostgreSQL", "Prisma", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/messaging-app", type: "repository" }],
    featuredOrder: 5,
  },
  {
    title: "Cloud File Manager",
    slug: "cloud-file-manager",
    eyebrow: "Backend / Cloud Storage / Authentication",
    description:
      "An authenticated cloud file-management application that supports uploads, downloads, folders, and per-user file ownership while separating PostgreSQL metadata from S3-compatible object storage.",
    metrics: ["S3-compatible object storage", "Per-user file ownership", "PostgreSQL metadata"],
    image: "/projects/cloud-file-manager/cover.svg",
    imageAlt:
      "Original cloud file manager illustration showing a folder hierarchy, PostgreSQL metadata, and an S3-compatible storage boundary.",
    tags: ["Backend", "Cloud Storage", "Authentication"],
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL", "Prisma", "Passport.js", "Multer", "Supabase Storage"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/file-uploader", type: "repository" }],
    featuredOrder: 6,
  },
];

export const EARLIER_PROJECTS: Project[] = [
  {
    title: "TransitGuard",
    slug: "transitguard",
    eyebrow: "Computer Vision / Transportation / Prototype",
    description:
      "A YOLOv8/OpenCV transportation computer-vision prototype that detects vehicles and flags potentially risky proximity conditions using frame-by-frame bounding-box distance analysis.",
    image: "/projects/transitguard/cover.png",
    imageAlt: "Annotated transportation video frame with vehicle detection boxes and proximity-risk markings.",
    tags: ["Computer Vision", "Transportation"],
    technologies: ["Python", "OpenCV", "YOLOv8", "Ultralytics"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Nirmit651/transitguard-hazard-detection",
        type: "repository",
      },
    ],
  },
  {
    title: "Members Only",
    slug: "members-only",
    eyebrow: "Backend / Authentication / Role-Based Access",
    description:
      "A private forum-style message board where visitors can browse public posts while signed-in users create messages, join the club, and unlock member or admin-only visibility.",
    image: "/projects/members-only/cover.svg",
    imageAlt: "Illustration of a private forum with login controls, protected messages, and role-based access.",
    tags: ["Backend", "Authentication", "Database"],
    technologies: ["Node.js", "Express", "PostgreSQL", "Passport.js", "bcrypt", "EJS"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/members-only", type: "repository" }],
  },
  {
    title: "Pokémon Memory Game",
    slug: "memory-game",
    eyebrow: "Frontend / Game",
    description:
      "A difficulty-tiered memory challenge that streams Pokémon art from the PokéAPI, tracks streaks, and keeps play responsive with loading states.",
    image: "/projects/memory-game.svg",
    imageAlt: "Stylized Pokémon memory game card grid illustration.",
    links: [
      { label: "GitHub", href: "https://github.com/Nirmit651/memory-game", type: "repository" },
      { label: "Live Demo", href: "https://nirmit651.github.io/memory-game/", type: "live" },
    ],
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    tags: ["Game", "API"],
  },
  {
    title: "InstaChecker",
    slug: "instachecker",
    eyebrow: "Data Tool / Automation",
    description:
      "A drag-and-drop Instagram export analyzer that decompresses ZIP archives with JSZip and surfaces follower differences locally.",
    image: "/projects/instachecker.svg",
    imageAlt: "Stylized data archive and social graph illustration for InstaChecker.",
    links: [
      { label: "GitHub", href: "https://github.com/Nirmit651/InstaChecker", type: "repository" },
      { label: "Live Demo", href: "https://nirmit651.github.io/InstaChecker/", type: "live" },
    ],
    technologies: ["Webpack", "JavaScript", "CSS", "JSZip"],
    tags: ["Data", "Tooling"],
  },
  {
    title: "Battleship AI",
    slug: "battleship",
    eyebrow: "Game / Testing",
    description:
      "A modular Battleship game engine with a Jest-tested AI opponent and Webpack-powered local development.",
    image: "/projects/battleship.svg",
    imageAlt: "Stylized Battleship game board illustration.",
    links: [
      { label: "GitHub", href: "https://github.com/Nirmit651/battleship", type: "repository" },
      { label: "Live Demo", href: "https://nirmit651.github.io/battleship/", type: "live" },
    ],
    technologies: ["Webpack", "JavaScript", "Jest", "CSS"],
    tags: ["Game", "Testing"],
  },
];
