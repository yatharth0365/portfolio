'use client';

import { resume } from '@/data/resume';
import { staggerContainer, staggerItem } from '@/lib/motion';
import { prefersReducedMotion } from '@/lib/motion';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Certifications() {
  const reduced = prefersReducedMotion;

  return (
    <motion.div
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? false : 'show'}
      viewport={{ once: true }}
      variants={reduced ? undefined : staggerContainer}
      className="grid gap-3 sm:grid-cols-2"
    >
      {resume.certifications.map((cert) => (
        <motion.div
          key={cert.name}
          variants={reduced ? undefined : staggerItem}
          className="glow-hover flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4"
        >
          <Award className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
          <div>
            <p className="text-sm font-medium text-zinc-100">{cert.name}</p>
            {cert.issuer && (
              <p className="text-xs text-zinc-500">{cert.issuer}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}