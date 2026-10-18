'use client';

import Link from 'next/link';
import { resume } from '@/data/resume';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-zinc-100">
          {'<YS/>'}
        </Link>
        <Nav />
        <a
          href={`mailto:${resume.email}`}
          className="hidden rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 sm:inline-flex"
        >
          Contact
        </a>
      </div>
    </header>
  );
}