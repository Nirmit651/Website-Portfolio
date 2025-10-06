"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-white/5 bg-slate-950/90 pb-24 pt-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-8 backdrop-blur"
        >
          <div className="absolute -top-20 -right-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />
          <h2 className="font-display text-3xl text-white">Let&apos;s build something fast.</h2>
          <p className="mt-3 max-w-xl text-base text-slate-200/80">
            Reach out if you&apos;d like to collaborate, chat about product ideas, or share a great pickleball spot.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="mailto:nirmit.bhoyar@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/15"
            >
              <Mail className="h-4 w-4" />
              nirmit.bhoyar@gmail.com
            </Link>
            <Link
              href="https://github.com/Nirmit651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/15"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
