import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HeroSection } from "@/components/sections/hero";

const ProjectsSection = dynamic(() => import("@/components/sections/projects"), {
  ssr: false,
  loading: () => <SectionSkeleton label="Loading projects" />,
});

const AboutSection = dynamic(
  () => import("@/components/sections/about").then((mod) => mod.AboutSection),
  {
    ssr: false,
    loading: () => <SectionSkeleton label="Loading about" />,
  }
);

const ContactSection = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.ContactSection),
  {
    ssr: false,
    loading: () => <SectionSkeleton label="Loading contact" />,
  }
);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Suspense fallback={<SectionSkeleton label="Loading projects" />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton label="Loading about" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton label="Loading contact" />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}

function SectionSkeleton({ label }: { label: string }) {
  return (
    <section className="border-t border-white/5 bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-6 w-56 animate-pulse rounded-full bg-white/5" />
        <p className="mt-6 h-4 w-64 animate-pulse rounded-full bg-white/5 text-sm text-slate-400">
          {label}
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-3xl border border-white/5 bg-white/5/50" />
          ))}
        </div>
      </div>
    </section>
  );
}
