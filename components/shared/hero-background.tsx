"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type HeroBackgroundProps = {
  speed?: number;
  density?: number;
  hue?: number;
  className?: string;
};

type Star = {
  x: number;
  y: number;
  z: number;
};

function createStar(width: number, height: number): Star {
  const range = Math.max(width, height);
  return {
    x: Math.random() * range - range / 2,
    y: Math.random() * range - range / 2,
    z: Math.random() * range,
  };
}

export function HeroBackground({
  speed = 0.6,
  density = 0.75,
  hue = 208,
  className,
}: HeroBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;

    let frameId = 0;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    const baseCount = Math.round(600 * density);

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      width = clientWidth;
      height = clientHeight;
      const dpr = window.devicePixelRatio > 1 ? window.devicePixelRatio : 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: baseCount }, () => createStar(width, height));
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(120, 144, 180, 0.25)";
      ctx.fillRect(0, 0, width, height);

      for (const star of stars) {
        star.z -= speed;
        if (star.z <= 1) {
          Object.assign(star, createStar(width, height));
          star.z = Math.max(width, height);
        }

        const k = 128 / star.z;
        const x = star.x * k + width / 2;
        const y = star.y * k + height / 2;
        const size = (1 - star.z / Math.max(width, height)) * 2.5 + 0.2;
        const alpha = Math.max(0.15, 1 - star.z / Math.max(width, height) - 0.05);

        ctx.fillStyle = `hsla(${hue}, 92%, 72%, ${alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [density, hue, shouldReduceMotion, speed]);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        "[mask-image:radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_75%)]",
        className
      )}
    >
      {shouldReduceMotion ? (
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-300/30 via-violet-200/20 to-transparent dark:from-sky-500/20 dark:via-indigo-500/10"
          style={{ backgroundBlendMode: "screen" }}
        />
      ) : (
        <canvas ref={canvasRef} className="h-full w-full" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white dark:from-slate-950 dark:via-slate-950/60 dark:to-slate-950" />
    </div>
  );
}
