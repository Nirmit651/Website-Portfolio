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
    <section id="projects" className="relative z-10 border-t border-white/5 bg-slate-950/80 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Featured Work</h2>
          <p className="mt-4 text-lg text-slate-300">
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
  const primaryLink = project.links[0];

  return (
    <Link
      href={primaryLink.href}
      prefetch={false}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 via-white/4 to-transparent",
        "p-6 backdrop-blur transition duration-300 ease-out hover:border-white/30 hover:shadow-soft"
      )}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
        <Image
          src={project.image}
          alt={`${project.title} thumbnail`}
          width={900}
          height={520}
          priority={eager}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      <div className="mt-6 flex-1">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-300/60">
          {project.tags.join(" • ")}
        </div>
        <h3 className="mt-3 font-display text-xl text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200/80">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1"
          >
            {iconMap[tech]}
            <span className="capitalize">{tech.replace("-", " ")}</span>
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-200/90">
        <span>View {primaryLink.label}</span>
        <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
      </div>
    </Link>
  );
}
