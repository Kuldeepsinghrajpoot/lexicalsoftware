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
  { value: 3, suffix: "", label: "Years Combined Experience\u00b9" },
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
      className="border-y border-line bg-panel bg-grid"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-5 lg:px-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={visible} />
        ))}
        <div>
          <p className="font-display text-4xl font-700 text-gradient-lexical sm:text-5xl">
            24/7
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Support
          </p>
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div>
      <p className="font-display text-4xl font-700 text-gradient-lexical sm:text-5xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
        {stat.label}
      </p>
    </div>
  );
}
