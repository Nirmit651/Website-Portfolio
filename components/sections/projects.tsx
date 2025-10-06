"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS, type Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import {
  SiReact,
  SiVite,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiWebpack,
  SiJest,
} from "react-icons/si";
import { AiOutlineFileZip } from "react-icons/ai";
import { Cloud } from "lucide-react";

const iconMap: Record<Project["tech"][number], React.ReactNode> = {
  react: <SiReact className="h-3.5 w-3.5" />,
  vite: <SiVite className="h-3.5 w-3.5" />,
  javascript: <SiJavascript className="h-3.5 w-3.5" />,
  css: <SiCss3 className="h-3.5 w-3.5" />,
  html: <SiHtml5 className="h-3.5 w-3.5" />,
  webpack: <SiWebpack className="h-3.5 w-3.5" />,
  jest: <SiJest className="h-3.5 w-3.5" />,
  jszip: <AiOutlineFileZip className="h-3.5 w-3.5" />,
  "visual-crossing": <Cloud className="h-3.5 w-3.5" />,
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
  return (
    <section id="projects" className="relative z-10 border-t border-slate-200 bg-slate-50 py-24 dark:border-white/5 dark:bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl dark:text-white">Featured Work</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A snapshot of the systems I enjoyed building recently—each focused on speed, clarity, and delightful details.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2"
        >
          {PROJECTS.map((project, index) => (
            <motion.li key={project.slug} variants={cardMotion}>
              <ProjectCard project={project} eager={index < 2} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function ProjectCard({ project, eager = false }: { project: Project; eager?: boolean }) {
  const repoLink = project.links.find((link) => link.type === "repo") ?? project.links[0];
  const demoLink = project.links.find((link) => link.type === "demo");

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl",
        "dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_20px_60px_-25px_rgba(15,23,42,0.85)]"
      )}
    >
      <Link
        href={repoLink.href}
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
      >
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-800/70">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            width={900}
            height={520}
            priority={eager}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950/80" />
        </div>

        <div className="mt-6 flex-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
            {project.tags.join(" • ")}
          </div>
          <h3 className="mt-3 font-display text-xl text-slate-900 dark:text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300/90">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200/80">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-slate-700 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-100"
            >
              {iconMap[tech]}
              <span className="capitalize">{tech.replace("-", " ")}</span>
            </span>
          ))}
        </div>
      </Link>

      <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
        <Link
          href={repoLink.href}
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-800 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-white/40"
        >
          View Repo
        </Link>
        {demoLink ? (
          <Link
            href={demoLink.href}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
          >
            Live Demo
          </Link>
        ) : null}
      </div>
    </article>
  );
}
