"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/shared/hero-background";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { PROFILE } from "@/data/profile";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/cn";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden py-28 sm:py-32">
      <HeroBackground speed={0.8} density={0.85} />

      <div className="absolute inset-x-0 top-0 flex justify-end p-6 sm:p-8">
        <ThemeToggle />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.span
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-slate-600 shadow-sm backdrop-blur sm:text-xs sm:tracking-[0.3em] dark:border-white/10 dark:bg-white/5 dark:text-slate-200/80"
        >
          Seeking 2027 Software Engineering &amp; AI/ML Internships
        </motion.span>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className={cn(
            "mt-8 text-balance font-display text-4xl leading-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white",
            "[text-wrap:balance]"
          )}
        >
          {PROFILE.name}
          <span className="block text-lg font-normal tracking-tight text-slate-600 sm:text-xl dark:text-slate-200/80">
            {PROFILE.role}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-200/80"
        >
          I build full-stack, AI, and data products that turn complex systems into clear, useful experiences, from geospatial dashboards and scientific tools to computer-vision prototypes.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
          >
            View Projects
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>

          <Link
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>

          <Link
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
