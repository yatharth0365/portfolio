"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  ["Languages", ["Python", "C", "C++", "SQL", "HTML", "CSS"]],
  ["ML & AI", ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Neural Networks"]],
  ["Data", ["Pandas", "PostgreSQL", "Excel", "Data Cleaning"]],
  ["Core", ["DSA", "OOP", "File I/O"]],
] as const;

function SkillCard({ label, skills, index }: { label: string; skills: readonly string[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="spotlight-card rounded-2xl p-6 hover:border-emerald-300/25"
    >
      <h3 className="text-sm font-semibold text-zinc-200">{label}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-sm text-zinc-300 hover:border-emerald-300/35 hover:bg-emerald-300/[.07] hover:text-emerald-100"
            style={{ transitionDelay: `${skillIndex * 10}ms` }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="skills" ref={sectionRef} className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="section-label">Capabilities</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-zinc-50 sm:text-4xl">
          A focused technical toolkit.
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-zinc-400">
          Building thoughtfully across the data lifecycle — from clean inputs and dependable code to useful, intelligent systems.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {skillGroups.map(([label, skills], index) => (
          <SkillCard key={label} label={label} skills={skills} index={index} />
        ))}
      </div>
    </section>
  );
}
