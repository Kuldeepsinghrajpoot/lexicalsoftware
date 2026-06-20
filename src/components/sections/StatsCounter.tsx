"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 9, suffix: "", label: "Core Technologies" },
  { value: 3, suffix: "", label: "Years Combined Experience¹" },
];

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const progress = Math.min(
        (timestamp - startRef.current) / duration,
        1
      );
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-blue-800/30 bg-lexical-gradient bg-grid-invert"
    >
      {/* Ambient glow blobs for extra depth */}
      <div className="glow-blob animate-drift -left-20 -top-20 h-72 w-72 bg-white/10" />
      <div
        className="glow-blob animate-drift -bottom-20 -right-20 h-72 w-72 bg-white/10"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-5 lg:px-8">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} active={visible} delay={i * 100} />
        ))}
        <div
          className="will-fade-up group cursor-default"
          style={{ animationDelay: `${stats.length * 100}ms` }}
        >
          <p className="font-display text-4xl font-700 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
            24/7
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-blue-100/80">
            Support
          </p>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  active,
  delay,
}: {
  stat: Stat;
  active: boolean;
  delay: number;
}) {
  const value = useCountUp(stat.value, active);
  return (
    <div
      className="will-fade-up group cursor-default"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="font-display text-4xl font-700 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-blue-100/80">
        {stat.label}
      </p>
    </div>
  );
}