"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowDownRight, Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  { label: "Email", href: "mailto:yatharth.shrirame@gmail.com", icon: Mail },
  { label: "Call", href: "tel:+918793774341", icon: Phone },
  { label: "GitHub", href: "https://github.com/yatharth0365", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yatharth-shrirame", icon: Linkedin },
];

const ease = [0.16, 1, 0.3, 1] as const;

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left - rect.width / 2;
    const mouseYPos = e.clientY - rect.top - rect.height / 2;
    x.set(mouseXPos * 0.3);
    y.set(mouseYPos * 0.3);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

function MagneticIcon({ icon: Icon, href, label }: { icon: React.ElementType; href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left - rect.width / 2;
    const mouseYPos = e.clientY - rect.top - rect.height / 2;
    x.set(mouseXPos * 0.4);
    y.set(mouseYPos * 0.4);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-emerald-300/40 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </motion.a>
  );
}

export function Hero() {
  const bio = "Experienced in machine learning pipelines, predictive modeling, data analytics, and software architecture.";
  const words = bio.split(" ");

  return (
    <section className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pb-20 pt-32 md:px-10">
      <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
          className="section-label mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_4px_rgba(52,211,153,.32)]" />
          Available for opportunities
        </motion.p>

        <motion.h1
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
          className="max-w-4xl text-5xl font-semibold tracking-[-.055em] text-zinc-50 sm:text-7xl lg:text-8xl"
        >
          Yatharth Girish <span className="text-zinc-500">Shrirame.</span>
        </motion.h1>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
          className="mt-7 flex items-center gap-3 text-lg font-medium text-emerald-300 sm:text-xl"
        >
          <span className="h-px w-8 bg-emerald-400/80" />
          B.Tech Artificial Intelligence @ GHRCE (2027)
        </motion.div>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
          className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.03, ease }}
              className="inline-block mr-1.5"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <MagneticButton
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            Explore selected work <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </MagneticButton>

          {socialLinks.map((link) => (
            <MagneticIcon key={link.label} icon={link.icon} href={link.href} label={link.label} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
