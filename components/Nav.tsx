'use client';

import { useActiveSection } from '@/lib/scroll-spy';

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Nav() {
  const active = useActiveSection(links.map((l) => l.id));

  return (
    <nav className="hidden items-center gap-1 sm:flex">
      {links.map((l) => {
        const isActive = active === l.id;
        return (
          <a
            key={l.href}
            href={l.href}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
            }`}
          >
            {l.label}
          </a>
        );
      })}
    </nav>
  );
}