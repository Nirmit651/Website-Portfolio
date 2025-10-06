"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const listMotion = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Python"];

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-slate-950 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 md:flex-row md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h2 className="font-display text-3xl text-white sm:text-4xl">About</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            I&apos;m a Rutgers CS &amp; Data Science student who splits time between building interactive interfaces, studying markets, and staying active. When I&apos;m not shipping code, youll usually find me in the gym, trading strategy notes, or chasing the next pickleball rematch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-200/80">
            <Link
              href="https://github.com/Nirmit651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="mailto:nirmit.bhoyar@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1"
        >
          <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Skillset</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                custom={index}
                variants={listMotion}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
