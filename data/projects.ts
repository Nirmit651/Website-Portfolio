export type ProjectLink = {
  label: string;
  href: string;
  type: "repo" | "demo";
};

export type ProjectTech =
  | "react"
  | "vite"
  | "javascript"
  | "css"
  | "html"
  | "webpack"
  | "jest"
  | "jszip"
  | "visual-crossing";

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  links: ProjectLink[];
  tech: ProjectTech[];
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Pokémon Memory Game",
    slug: "memory-game",
    description:
      "A difficulty-tiered memory challenge that streams Pokémon art from the PokéAPI, tracks streaks, and uses loading states to keep play snappy.",
    image: "/projects/memory-game.svg",
    links: [
      { label: "Repository", href: "https://github.com/Nirmit651/memory-game", type: "repo" },
      { label: "Live Demo", href: "https://nirmit651.github.io/memory-game/", type: "demo" }
    ],
    tech: ["react", "vite", "javascript", "css"],
    tags: ["Game", "API", "Performance"],
  },
  {
    title: "InstaChecker",
    slug: "instachecker",
    description:
      "Drag-and-drop analysis of Instagram data exports that decompresses ZIP archives with JSZip and surfaces fans and unfollowers instantly.",
    image: "/projects/instachecker.svg",
    links: [
      { label: "Repository", href: "https://github.com/Nirmit651/InstaChecker", type: "repo" },
      { label: "Live Demo", href: "https://nirmit651.github.io/InstaChecker/", type: "demo" }
    ],
    tech: ["webpack", "javascript", "css", "jszip"],
    tags: ["Data", "Automation", "Tooling"],
  },
  {
    title: "Battleship AI",
    slug: "battleship",
    description:
      "Modular game engine with a Jest-tested AI opponent, bundled via Webpack and Babel for rapid local development.",
    image: "/projects/battleship.svg",
    links: [
      { label: "Repository", href: "https://github.com/Nirmit651/battleship", type: "repo" },
      { label: "Live Demo", href: "https://nirmit651.github.io/battleship/", type: "demo" }
    ],
    tech: ["webpack", "javascript", "jest", "css"],
    tags: ["Game", "Testing", "Architecture"],
  },
  {
    title: "CV Application",
    slug: "cv-application",
    description:
      "A live preview resume builder in React with editable sections, bullet parsing, and timeline formatting.",
    image: "/projects/cv-application.svg",
    links: [
      { label: "Repository", href: "https://github.com/Nirmit651/cv-application", type: "repo" },
      { label: "Live Demo", href: "https://cv-application-nine-henna.vercel.app/", type: "demo" }
    ],
    tech: ["react", "vite", "javascript", "css"],
    tags: ["Productivity", "Forms", "UX"],
  },
  {
    title: "Weather Dashboard",
    slug: "weather-app",
    description:
      "A vanilla JavaScript dashboard powered by the Visual Crossing API with multi-day forecasts, unit conversions, and graceful error handling.",
    image: "/projects/weather-app.svg",
    links: [
      { label: "Repository", href: "https://github.com/Nirmit651/weather-app", type: "repo" },
      { label: "Live Demo", href: "https://nirmit651.github.io/weather-app/", type: "demo" }
    ],
    tech: ["javascript", "css", "html", "visual-crossing"],
    tags: ["API", "Data Viz", "Frontend"],
  },
  {
    title: "Restaurant Experience",
    slug: "restaurant-page",
    description:
      "A single-page restaurant experience with webpack-powered routing, image preloading, and reusable UI modules.",
    image: "/projects/restaurant-page.svg",
    links: [
      { label: "Repository", href: "https://github.com/Nirmit651/Restaurant-Page", type: "repo" },
      { label: "Live Demo", href: "https://nirmit651.github.io/Restaurant-Page/", type: "demo" }
    ],
    tech: ["webpack", "javascript", "css", "html"],
    tags: ["Brand", "UI", "SPA"],
  },
];
