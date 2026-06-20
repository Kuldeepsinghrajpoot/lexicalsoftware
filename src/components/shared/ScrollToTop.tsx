"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className="will-fade-up fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-panel-border bg-panel text-ink-muted shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-lexical-orange hover:text-lexical-orange hover:shadow-xl hover:shadow-blue-500/20"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
