'use client';

import { resume } from '@/data/resume';
import { staggerContainer, staggerItem, hoverLift } from '@/lib/motion';
import { prefersReducedMotion } from '@/lib/motion';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const reduced = prefersReducedMotion;

  return (
    <motion.div
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? false : 'show'}
      viewport={{ once: true }}
      variants={reduced ? undefined : staggerContainer}
      className="grid gap-4 sm:grid-cols-2"
    >
      {resume.projects.map((project) => (
        <motion.div
          key={project.name}
          variants={reduced ? undefined : staggerItem}
          className={`relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 ${
            project.featured ? 'glow-hover sm:col-span-2' : 'glow-hover'
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-zinc-100">
              {project.name}
            </h3>
            {project.award && (
              <span className="shrink-0 rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/30">
                {project.award}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-zinc-800/60 px-2 py-0.5 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
            >
              View live
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}