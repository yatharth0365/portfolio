'use client';

import { resume } from '@/data/resume';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} {resume.name}
        </p>
      </div>
    </footer>
  );
}