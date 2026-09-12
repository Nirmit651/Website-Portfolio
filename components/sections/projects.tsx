"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiCss3,
  SiExpress,
  SiFastapi,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiKeras,
  SiMapbox,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { AiOutlineFileZip } from "react-icons/ai";
import { Boxes, ChevronDown, Code2, Database, ExternalLink, Film, Github, Globe2, Microscope, Zap } from "lucide-react";
import { EARLIER_PROJECTS, FEATURED_PROJECTS, type Project, type ProjectLinkType } from "@/data/projects";
import { cn } from "@/lib/cn";

const technologyIcons: Record<string, React.ReactNode> = {
  TypeScript: <SiTypescript className="h-3.5 w-3.5" />,
  "Next.js": <SiNextdotjs className="h-3.5 w-3.5" />,
  React: <SiReact className="h-3.5 w-3.5" />,
  Mapbox: <SiMapbox className="h-3.5 w-3.5" />,
  Python: <SiPython className="h-3.5 w-3.5" />,
  FastAPI: <SiFastapi className="h-3.5 w-3.5" />,
  "Three.js": <SiThreedotjs className="h-3.5 w-3.5" />,
  "Node.js": <SiNodedotjs className="h-3.5 w-3.5" />,
  Express: <SiExpress className="h-3.5 w-3.5" />,
  PostgreSQL: <SiPostgresql className="h-3.5 w-3.5" />,
  Prisma: <SiPrisma className="h-3.5 w-3.5" />,
  "Socket.IO": <SiSocketdotio className="h-3.5 w-3.5" />,
  "Tailwind CSS": <SiTailwindcss className="h-3.5 w-3.5" />,
  "TensorFlow / Keras": <SiTensorflow className="h-3.5 w-3.5" />,
  TensorFlow: <SiTensorflow className="h-3.5 w-3.5" />,
  Keras: <SiKeras className="h-3.5 w-3.5" />,
  "scikit-learn": <SiScikitlearn className="h-3.5 w-3.5" />,
  pandas: <SiPandas className="h-3.5 w-3.5" />,
  JWT: <SiJsonwebtokens className="h-3.5 w-3.5" />,
  "Supabase Storage": <SiSupabase className="h-3.5 w-3.5" />,
  Supabase: <SiSupabase className="h-3.5 w-3.5" />,
  OpenCV: <SiOpencv className="h-3.5 w-3.5" />,
  Vercel: <SiVercel className="h-3.5 w-3.5" />,
  Vite: <SiVite className="h-3.5 w-3.5" />,
  JavaScript: <SiJavascript className="h-3.5 w-3.5" />,
  CSS: <SiCss3 className="h-3.5 w-3.5" />,
  HTML: <SiHtml5 className="h-3.5 w-3.5" />,
  Webpack: <SiWebpack className="h-3.5 w-3.5" />,
  Jest: <SiJest className="h-3.5 w-3.5" />,
  JSZip: <AiOutlineFileZip className="h-3.5 w-3.5" />,
};

const linkIcons: Record<ProjectLinkType, React.ReactNode> = {
  repository: <Github className="h-4 w-4" />,
  live: <Globe2 className="h-4 w-4" />,
  video: <Film className="h-4 w-4" />,
  "case-study": <ExternalLink className="h-4 w-4" />,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsSection() {
  const [showEarlier, setShowEarlier] = React.useState(false);

  return (
    <section id="projects" className="relative z-10 border-t border-slate-200 bg-slate-50 py-24 dark:border-white/5 dark:bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl dark:text-white">Featured Work</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Projects spanning full-stack engineering, machine learning, geospatial analytics, and backend systems, built to turn data and technical ideas into useful products.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.li key={project.slug} variants={cardMotion}>
              <ProjectCard project={project} eager={index < 2} featured={index < 2} />
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-white/10">
          <button
            type="button"
            onClick={() => setShowEarlier((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/35 dark:hover:bg-white/10"
            aria-expanded={showEarlier}
            aria-controls="earlier-projects"
          >
            View earlier projects
            <ChevronDown className={cn("h-4 w-4 transition-transform", showEarlier ? "rotate-180" : "rotate-0")} />
          </button>

          <AnimatePresence initial={false}>
            {showEarlier ? (
              <motion.ul
                id="earlier-projects"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 grid overflow-hidden gap-4 md:grid-cols-3"
              >
                {EARLIER_PROJECTS.map((project) => (
                  <li key={project.slug}>
                    <EarlierProjectCard project={project} />
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, eager = false, featured = false }: { project: Project; eager?: boolean; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl",
        "dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_20px_60px_-25px_rgba(15,23,42,0.85)]",
        featured ? "lg:min-h-[690px]" : "lg:min-h-[620px]"
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-800/70">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={eager}
          loading={eager ? undefined : "eager"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-slate-950/65" aria-hidden />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.status ? <StatusChip label={project.status} /> : project.teamProject ? <StatusChip label="Team Project" /> : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
          {project.eyebrow}
        </div>
        <h3 className="mt-3 font-display text-2xl leading-tight text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300/90">{project.description}</p>

        {project.contribution ? (
          <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-200/90">
            <span className="font-semibold text-slate-900 dark:text-white">My contribution: </span>
            {project.contribution}
          </p>
        ) : null}

        {project.context ? (
          <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{project.context}</p>
        ) : null}

        {project.metrics?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.metrics.slice(0, 3).map((metric) => (
              <span
                key={metric}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-100"
              >
                <Zap className="h-3 w-3 text-brand-500" />
                {metric}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-700 dark:text-slate-200/80">
          {project.technologies.map((tech) => (
            <TechnologyBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6 text-sm font-semibold">
          {project.links.map((link, index) => (
            <ProjectButton key={`${project.slug}-${link.type}`} link={link} primary={index === 0} />
          ))}
        </div>
      </div>
    </article>
  );
}

function EarlierProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.035]">
      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{project.eyebrow}</div>
      <h3 className="mt-2 font-display text-lg text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300/90">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 dark:border-white/15 dark:text-slate-100 dark:hover:border-white/35 dark:hover:bg-white/10"
          >
            {linkIcons[link.type]}
            {link.label}
          </Link>
        ))}
      </div>
    </article>
  );
}

function StatusChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/45 bg-slate-950/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur">
      {label}
    </span>
  );
}

function TechnologyBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-slate-700 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-100">
      {technologyIcons[label] ?? <GenericTechnologyIcon label={label} />}
      <span>{label}</span>
    </span>
  );
}

function GenericTechnologyIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();
  if (normalized.includes("data") || normalized.includes("sql") || normalized.includes("vtk")) {
    return <Database className="h-3.5 w-3.5" />;
  }
  if (normalized.includes("geometry") || normalized.includes("vision") || normalized.includes("nrel")) {
    return <Microscope className="h-3.5 w-3.5" />;
  }
  if (normalized.includes("rest") || normalized.includes("serverless")) {
    return <Boxes className="h-3.5 w-3.5" />;
  }
  return <Code2 className="h-3.5 w-3.5" />;
}

function ProjectButton({ link, primary }: { link: Project["links"][number]; primary: boolean }) {
  return (
    <Link
      href={link.href}
      prefetch={false}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70",
        primary
          ? "bg-slate-900 text-white hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
          : "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-white/40 dark:hover:bg-slate-700"
      )}
    >
      {linkIcons[link.type]}
      {link.label}
    </Link>
  );
}
