"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BriefcaseBusiness } from "lucide-react";

const experience = [
  {
    role: "Data Analytics Intern",
    company: "InAmigos Foundation",
    period: "July 2026",
    detail: "Compiled, organized, and maintained structured datasets for NGO partners using Excel. Researched AI applications in the non-profit sector to develop data-driven reports and applied strict data validation practices.",
  },
  {
    role: "Python Programming Intern",
    company: "Oasis Infobyte",
    period: "April–May 2026",
    detail: "Executed Python programming, logical problem-solving, and algorithmic thinking for data handling and project-based tasks.",
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
      className={`spotlight-card relative rounded-2xl p-6 transition duration-300 hover:scale-[1.01] ${className}`}
      style={{
        "--mouse-x": `${mousePosition.x}%`,
        "--mouse-y": `${mousePosition.y}%`,
      } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="experience" ref={sectionRef} className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Career</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-zinc-50 sm:text-4xl">
          Experience built on practical impact.
        </h2>
      </motion.div>

      <div className="relative mt-12 border-l border-white/10 pl-6 sm:pl-10">
        {experience.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            <SpotlightCard className="mb-5 hover:border-emerald-300/25">
              <span className="absolute -left-[35px] top-7 flex h-4 w-4 items-center justify-center rounded-full border border-emerald-300/50 bg-zinc-950 sm:-left-[51px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-300">
                    <BriefcaseBusiness className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.company}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-zinc-100">{item.role}</h3>
                  <p className="mt-3 max-w-3xl leading-7 text-zinc-400">{item.detail}</p>
                </div>
                <span className="shrink-0 text-sm text-zinc-500">{item.period}</span>
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
