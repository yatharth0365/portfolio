'use client';

import { resume } from '@/data/resume';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { prefersReducedMotion } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Skills() {
  const reduced = prefersReducedMotion;

  return (
    <div className="space-y-6">
      {resume.skills.map((group) => (
        <div key={group.category}>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
            {group.category}
          </h3>
          <motion.div
            initial={reduced ? undefined : 'hidden'}
            whileInView={reduced ? undefined : 'show'}
            viewport={{ once: true }}
            variants={reduced ? undefined : staggerContainer}
            className="flex flex-wrap gap-2"
          >
            {group.skills.map((skill) => (
              <motion.span
                key={skill}
                variants={reduced ? undefined : staggerItem}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm text-zinc-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}