"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, BrainCircuit, CircleHelp, Map } from "lucide-react";

const projects = [
  {
    title: "Predictive OS",
    type: "Machine Learning · Industrial AI",
    description: "An industrial predictive maintenance engine that forecasts machine breakdowns using sensor data and ensemble machine learning, with confidence-gated decision routing.",
    href: "https://predictive-os.yatharthshrirame.xyz",
    icon: BrainCircuit,
    feature: true,
  },
  {
    title: "U.S. States Data Map Game",
    type: "Python · Pandas · Data",
    description: "Cleaned and manipulated geographic and CSV datasets, with file I/O to track learning progress.",
    icon: Map,
  },
  {
    title: "Automated Quiz Application",
    type: "Python · API · OOP",
    description: "A data-driven quiz application integrating a live API for dynamic parsing and modular application logic.",
    icon: CircleHelp,
  },
];

function SpotlightCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`spotlight-card relative overflow-hidden rounded-2xl p-7 transition-colors hover:border-emerald-300/30 ${className}`}
      style={{
        "--mouse-x": `${mousePosition.x}%`,
        "--mouse-y": `${mousePosition.y}%`,
      } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="projects" ref={sectionRef} className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
      >
        <div>
          <p className="section-label">Selected work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-zinc-50 sm:text-4xl">
            Systems that turn data into action.
          </h2>
        </div>
        <span className="text-sm text-zinc-500">03 projects</span>
      </motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <SpotlightCard className={project.feature ? "md:col-span-2 md:p-9" : ""}>
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-400/[.08] blur-3xl transition group-hover:bg-emerald-400/[.16]" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} live`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-emerald-300/40 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[.14em] text-emerald-300/80">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-zinc-100">{project.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
                </div>
              </SpotlightCard>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
