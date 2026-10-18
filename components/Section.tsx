'use client';

import { prefersReducedMotion, fadeUp } from '@/lib/motion';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const reduced = prefersReducedMotion;

  return (
    <motion.section
      id={id}
      initial={reduced ? undefined : 'hidden'}
      whileInView={reduced ? undefined : 'show'}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      variants={reduced ? undefined : fadeUp}
      className="scroll-mt-24 py-16"
    >
      <h2 className="mb-8 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}