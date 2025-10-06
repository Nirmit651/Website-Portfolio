"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/shared/hero-background";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { ArrowDownRight, Mail } from "lucide-react";
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
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-200/80 backdrop-blur"
        >
          Available for Summer 2025 internships
        </motion.span>

        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className={cn(
            "mt-8 text-balance font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl",
            "[text-wrap:balance]"
          )}
        >
          Nirmit Bhoyar
          <span className="block text-lg font-normal tracking-tight text-slate-200/80 sm:text-xl">
            Computer Science &amp; Data Science @ Rutgers University
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg text-slate-200/80 sm:text-xl"
        >
          I build high-velocity web experiences that feel effortless, blending strong product taste with data-driven insight. I love shipping interfaces that move fast, feel alive, and solve real problems.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="mailto:nirmit.bhoyar@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
