import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return <main className="ambient-bg min-h-screen selection:bg-emerald-400/30"><div className="grid-fade pointer-events-none fixed inset-0" /><Hero /><Experience /><Projects /><Skills /><footer className="mx-auto flex max-w-6xl items-center justify-between border-t border-white/5 px-6 py-8 text-sm text-zinc-500 md:px-10"><span>© {new Date().getFullYear()} Yatharth Shrirame</span><a className="transition hover:text-emerald-300" href="mailto:yatharth.shrirame@gmail.com">Let&apos;s build something meaningful</a></footer></main>;
}
