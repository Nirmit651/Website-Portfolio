"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

const transition = { type: "spring", stiffness: 260, damping: 20 };

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = (theme ?? resolvedTheme ?? "dark") === "dark" ? "dark" : "light";

  return (
    <motion.button
      aria-label="Toggle theme"
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur",
        "text-white/80 transition-colors hover:border-white/40 hover:text-white",
        "dark:bg-slate-900/70 dark:border-white/10 dark:text-slate-100",
        "light:bg-slate-100/80 light:border-slate-300 light:text-slate-800 light:hover:text-slate-600",
        className
      )}
      onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
      whileTap={{ scale: 0.94 }}
      transition={transition}
    >
      <AnimatePresence initial={false} mode="wait">
        {mounted ? (
          <motion.span
            key={activeTheme}
            initial={{ scale: 0, rotate: activeTheme === "dark" ? -90 : 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: activeTheme === "dark" ? 90 : -90, opacity: 0 }}
            transition={transition}
            className="grid place-items-center"
          >
            {activeTheme === "dark" ? <MoonStar className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </motion.span>
        ) : (
          <MoonStar className="h-4 w-4" />
        )}
      </AnimatePresence>
    </motion.button>
  );
}
