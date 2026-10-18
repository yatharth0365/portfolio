'use client';

import { resume } from '@/data/resume';
import { prefersReducedMotion, hoverSlide } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Hero() {
  const reduced = prefersReducedMotion;

  return (
    <section className="flex min-h-[70vh] flex-col justify-center py-20">
      <motion.p
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={reduced ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-3 font-mono text-sm text-zinc-400"
      >
        B.Tech Artificial Intelligence · Expected 2027
      </motion.p>
      <motion.h1
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={reduced ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="text-4xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-5xl"
      >
        <span className="gradient-text">{resume.name}</span>
      </motion.h1>
      <motion.p
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={reduced ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="mt-4 max-w-xl text-lg text-zinc-400"
      >
        AI &amp; Machine Learning candidate building governed predictive-maintenance
        and data systems.
      </motion.p>
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={reduced ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <a
          href="#projects"
          className="glow-hover inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
        >
          View Projects
        </a>
        <a
          href={`mailto:${resume.email}`}
          {...hoverSlide}
          className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}