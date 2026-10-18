'use client';

import { resume } from '@/data/resume';
import { hoverSlide } from '@/lib/motion';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <motion.a
        href={`mailto:${resume.email}`}
        {...hoverSlide}
        className="glow-hover flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 transition-colors hover:border-zinc-600"
      >
        <Mail className="h-5 w-5 text-indigo-400" />
        <div>
          <p className="text-xs text-zinc-500">Email</p>
          <p className="text-sm font-medium text-zinc-100">{resume.email}</p>
        </div>
      </motion.a>
      <motion.a
        href={`tel:${resume.phone}`}
        {...hoverSlide}
        className="glow-hover flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 transition-colors hover:border-zinc-600"
      >
        <Phone className="h-5 w-5 text-indigo-400" />
        <div>
          <p className="text-xs text-zinc-500">Phone</p>
          <p className="text-sm font-medium text-zinc-100">{resume.phone}</p>
        </div>
      </motion.a>
    </div>
  );
}