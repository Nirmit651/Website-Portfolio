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
    featuredOrder: 1,
  },
  {
    title: "NYC Airbnb Price Classification",
    slug: "nyc-airbnb-price-classification",
    eyebrow: "Machine Learning / Classification / Data Science",
    description:
      "An end-to-end machine-learning pipeline that predicts whether NYC Airbnb listings fall into a high-price category, comparing logistic regression with a feedforward neural network on location, room, capacity, booking, and review features.",
    metrics: ["28,022 listings", "81.8% test accuracy", "0.598 F1 score"],
    image: "/projects/nyc-airbnb-price-classification/cover.svg",
    imageAlt:
      "Abstract NYC listing classification visualization with location markers, property signals, and model performance charts.",
    tags: ["Machine Learning", "Classification", "Data Science"],
    technologies: ["Python", "TensorFlow / Keras", "scikit-learn", "pandas", "NumPy", "Jupyter"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Nirmit651/NYC-Airbnb-Price-Classification",
        type: "repository",
      },
    ],
    featuredOrder: 2,
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
    featuredOrder: 3,
  },
  {
    title: "Finders Club",
    slug: "finders-club",
    eyebrow: "Full-Stack / Interactive Game / Backend Validation",
    description:
      "A full-stack photo-tagging game where players locate randomly selected targets in a crowded image while an Express backend validates normalized hitbox coordinates, tracks game sessions, and serves leaderboard results.",
    metrics: ["8 seeded targets", "3 targets per round", "Responsive normalized hitboxes"],
    image: "/projects/finders-club/cover.svg",
    imageAlt:
      "Original visual-search game illustration with a crowded scene, target markers, a game timer, and leaderboard results.",
    tags: ["Full-Stack", "Game", "Backend"],
    technologies: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "Vitest"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/wheres-waldo", type: "repository" }],
    featuredOrder: 4,
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
    featuredOrder: 5,
  },
  {
    title: "Solar Sight",
    slug: "solar-sight",
    eyebrow: "Full-Stack / Energy Analytics / Geospatial",
    description:
      "An address-based rooftop solar analysis application using geocoding and PVWatts to estimate solar production, financial payback, long-term savings, and environmental impact.",
    metrics: ["20-year savings projection", "Monthly PV estimates", "Tested API parsing and calculations"],
    image: "/projects/solar-sight/cover.svg",
    imageAlt:
      "Illustration of a rooftop solar analysis workspace with a map pin, sun path, energy chart, and savings estimate.",
    tags: ["Full-Stack", "Energy", "Geospatial"],
    technologies: ["React", "Vite", "JavaScript", "Mapbox", "NREL PVWatts", "Serverless Functions", "REST APIs", "Automated Testing"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/solar-sight", type: "repository" }],
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
