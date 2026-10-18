'use client';

import { resume } from '@/data/resume';
import { hoverLift } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function About() {
  const edu = resume.education[0];

  return (
    <motion.div
      {...hoverLift}
      className="glow-hover relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        Education
      </p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-100">{edu.degree}</h3>
      <p className="mt-1 text-sm text-zinc-400">{edu.school}</p>
      <p className="mt-3 text-sm font-medium text-indigo-300">{edu.year}</p>
    </motion.div>
  );
}