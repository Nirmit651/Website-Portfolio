"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-slate-200 bg-slate-50 pb-24 pt-20 dark:border-white/5 dark:bg-slate-950/90">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-900"
        >
          <div className="absolute -top-20 -right-10 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/20" aria-hidden />
          <h2 className="font-display text-3xl text-slate-900 dark:text-white">Let&apos;s build something useful.</h2>
          <p className="mt-3 max-w-xl text-base text-slate-600 dark:text-slate-200/80">
            Reach out for software engineering, AI/ML, data, or full-stack internship conversations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:bg-slate-800 dark:text-white dark:hover:border-white/40 dark:hover:bg-slate-700"
            >
              <Mail className="h-4 w-4" />
              {PROFILE.email}
            </Link>
            <Link
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 dark:border-white/20 dark:bg-slate-800 dark:text-white dark:hover:border-white/40 dark:hover:bg-slate-700"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 dark:border-white/20 dark:bg-slate-800 dark:text-white dark:hover:border-white/40 dark:hover:bg-slate-700"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
