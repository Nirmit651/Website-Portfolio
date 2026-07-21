"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

const listMotion = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const skillGroups = [
  {
    label: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "Mapbox", "Data Visualization"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "Express", "PostgreSQL", "SQL", "AWS"],
  },
  {
    label: "AI/Scientific Computing",
    skills: ["Python", "Machine Learning", "Computer Vision", "Scientific Computing"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-slate-200 bg-white py-24 dark:border-white/5 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 md:flex-row md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl dark:text-white">About</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I&apos;m a Computer Science and Data Science student at Rutgers University-New Brunswick focused on software engineering, AI/ML, and data products. I enjoy building applications that combine thoughtful interfaces with strong technical foundations, including geospatial dashboards, backend systems, scientific-computing tools, and computer-vision prototypes.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Outside of development, I&apos;m usually at the gym, trying a new restaurant, playing pickleball, or exploring new product ideas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-200/80">
            <Link
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
            <Link
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-400/90">Skillset</h3>
          <div className="mt-6 grid gap-6">
            {skillGroups.map((group, groupIndex) => (
              <div key={group.label}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{group.label}</h4>
                <div className="mt-3 flex flex-wrap gap-3">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      custom={groupIndex * 5 + index}
                      variants={listMotion}
                      className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
