'use client';

import { resume } from '@/data/resume';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { prefersReducedMotion } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Experience() {
  const reduced = prefersReducedMotion;

  return (
    <div className="relative ml-3">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800" />
      <motion.div
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? false : 'show'}
        viewport={{ once: true }}
        variants={reduced ? undefined : staggerContainer}
        className="space-y-8"
      >
        {resume.experience.map((exp) => (
          <motion.div
            key={exp.company}
            variants={reduced ? undefined : staggerItem}
            className="relative pl-6"
          >
            <span className="absolute -left-1 top-1.5 h-2 w-2 rounded-full bg-indigo-500 glow" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold text-zinc-100">
                {exp.role}
              </h3>
              <span className="font-mono text-xs text-zinc-500">
                {exp.period}
              </span>
            </div>
            <p className="text-sm font-medium text-indigo-300">{exp.company}</p>
            <ul className="mt-2 space-y-1.5">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-zinc-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}