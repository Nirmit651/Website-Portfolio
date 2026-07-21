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
      "A Morgan Stanley Code to Give project for Lemontree that turns pantry feedback, supply signals, and demographic context into an interactive dashboard for identifying high-need food-access locations across New York City.",
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
    title: "Solar Sight",
    slug: "solar-sight",
    eyebrow: "Full-Stack / Energy Analytics / Geospatial",
    description:
      "A rooftop-solar analysis tool that converts an address into satellite context, monthly and annual production estimates, financial payback, 20-year savings, and environmental-impact projections.",
    metrics: ["20-year savings projection", "Monthly PV estimates", "Tested API parsing and calculations"],
    image: "/projects/solar-sight/cover.svg",
    imageAlt:
      "Illustration of a rooftop solar analysis workspace with a map pin, sun path, energy chart, and savings estimate.",
    tags: ["Full-Stack", "Energy", "Geospatial"],
    technologies: ["React", "Vite", "JavaScript", "Mapbox", "NREL PVWatts", "Serverless Functions", "REST APIs", "Automated Testing"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/solar-sight", type: "repository" }],
    featuredOrder: 2,
  },
  {
    title: "Relight Studio",
    slug: "relight-studio",
    eyebrow: "Creative Tools / WebGL / Full-Stack",
    description:
      "An interactive browser-based lighting editor with draggable pseudo-3D point lights, immediate WebGL previews, keyframe animation, playback and scrubbing, and a Python rendering/export backend.",
    metrics: ["Real-time WebGL preview", "Keyframe timeline", "Python rendering backend"],
    image: "/projects/relight-studio/cover.svg",
    imageAlt:
      "Illustration of the Relight Studio workspace with a canvas, draggable colored point lights, inspector controls, and a keyframe timeline.",
    tags: ["Creative Tools", "Graphics", "Backend"],
    technologies: ["React", "TypeScript", "Three.js", "WebGL", "Python", "FastAPI", "Pytest", "FFmpeg"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/relight", type: "repository" }],
    context:
      "Current renderer is a deterministic approximate light-field compositor with capability gates for optional research backends.",
    status: "Prototype",
    featuredOrder: 3,
  },
  {
    title: "Members Only",
    slug: "members-only",
    eyebrow: "Backend / Authentication / Role-Based Access",
    description:
      "A private forum-style application with account creation, secure login, persistent sessions, post creation, membership access, and administrative moderation.",
    metrics: ["Four access levels", "Secure password hashing", "PostgreSQL-backed sessions and content"],
    image: "/projects/members-only/cover.svg",
    imageAlt:
      "Illustration of a private forum with login controls, protected messages, database records, and visitor, user, member, and admin roles.",
    tags: ["Backend", "Auth", "Database"],
    technologies: ["Node.js", "Express", "PostgreSQL", "Passport.js", "bcrypt", "EJS", "express-session", "express-validator"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/members-only", type: "repository" }],
    context: "Built through The Odin Project to practice authentication, sessions, relational data, and authorization.",
    featuredOrder: 4,
  },
  {
    title: "STL Particle Preprocessor",
    slug: "stl-particle-preprocessor",
    eyebrow: "Scientific Computing / Geometry / Python",
    description:
      "A Python preprocessing pipeline that converts watertight STL geometry into volumetric particle clouds for meshfree simulation and computational-mechanics workflows.",
    metrics: ["Three particle-label categories", "CSV and VTP export", "Interactive PyVista visualization"],
    image: "/projects/stl-particle-preprocessor/cover.png",
    imageAlt:
      "PyVista visualization of a transparent beam geometry filled with a particle cloud and boundary-tagged regions.",
    tags: ["Scientific Computing", "Geometry", "Simulation"],
    technologies: ["Python", "NumPy", "Trimesh", "PyVista", "Computational Geometry", "VTK"],
    links: [{ label: "GitHub", href: "https://github.com/Nirmit651/stl-particle-preprocessor", type: "repository" }],
    status: "Prototype",
    featuredOrder: 5,
  },
  {
    title: "TransitGuard",
    slug: "transitguard",
    eyebrow: "Computer Vision / Transportation / Prototype",
    description:
      "A YOLOv8 and OpenCV prototype that detects vehicles in transportation footage and flags potentially risky proximity conditions by measuring distances between detections frame by frame.",
    metrics: ["Four vehicle categories", "Frame-by-frame analysis", "Annotated video output"],
    image: "/projects/transitguard/cover.png",
    imageAlt:
      "Annotated transportation video frame with vehicle detection boxes, center points, and proximity-risk markings.",
    tags: ["Computer Vision", "Transportation", "Prototype"],
    technologies: ["Python", "OpenCV", "YOLOv8", "Ultralytics", "Computer Vision"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Nirmit651/transitguard-hazard-detection",
        type: "repository",
      },
    ],
    status: "Prototype",
    featuredOrder: 6,
  },
];

export const EARLIER_PROJECTS: Project[] = [
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
