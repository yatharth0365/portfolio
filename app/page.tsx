"use client";

import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="ambient-bg min-h-screen selection:bg-emerald-400/30">
      <div className="grid-fade pointer-events-none fixed inset-0" />
      <div
        className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
        style={{
          transform: `translate(-50%, ${scrollY * 0.15}px)`,
        }}
      />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <footer className="mx-auto flex max-w-6xl items-center justify-between border-t border-white/5 px-6 py-8 text-sm text-zinc-500 md:px-10">
        <span>© {new Date().getFullYear()} Yatharth Shrirame</span>
        <a className="transition hover:text-emerald-300" href="mailto:yatharth.shrirame@gmail.com">Let&apos;s build something meaningful</a>
      </footer>
    </main>
  );
}
