"use client";

import { useState } from "react";
import { Laptop, Server, Database, Zap, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

interface NodeDef {
  id: string;
  label: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  accent: string;
  chipBg: string;
}

const nodes: NodeDef[] = [
  { id: "client", label: "Client", icon: <Laptop className="h-5 w-5" />, x: 40, y: 200, accent: "#2563EB", chipBg: "#DBEAFE" },
  { id: "gateway", label: "API Gateway", icon: <Server className="h-5 w-5" />, x: 260, y: 200, accent: "#7C3AED", chipBg: "#EDE9FE" },
  { id: "postgres", label: "Postgres", icon: <Database className="h-5 w-5" />, x: 480, y: 80, accent: "#2563EB", chipBg: "#DBEAFE" },
  { id: "redis", label: "Redis", icon: <Zap className="h-5 w-5" />, x: 480, y: 200, accent: "#EC4899", chipBg: "#FCE7F3" },
  { id: "cloud", label: "Cloud Storage", icon: <Cloud className="h-5 w-5" />, x: 480, y: 320, accent: "#0EA5E9", chipBg: "#E0F2FE" },
];

const edges: [string, string][] = [
  ["client", "gateway"],
  ["gateway", "postgres"],
  ["gateway", "redis"],
  ["gateway", "cloud"],
];

const nodeWidth = 132;
const nodeHeight = 64;

export default function SystemDiagram() {
  const [active, setActive] = useState<string | null>(null);

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-panel-border bg-panel shadow-xl shadow-lexical-indigo/5">
      {/* Window header */}
      <div className="flex items-center justify-between border-b border-line bg-lexical-vivid px-5 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-status-red" />
            <span className="h-3 w-3 rounded-full bg-status-yellow" />
            <span className="h-3 w-3 rounded-full bg-status-green" />
          </div>
          <span className="font-mono text-xs text-white/85">
            LEXICAL_VISUALIZER_v2.0
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1">
          <span className="animate-dot-pulse h-1.5 w-1.5 rounded-full bg-status-green" />
          <span className="font-mono text-xs font-500 text-white">
            SYS ACTIVE
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="relative px-5 py-6">
        {/* Scan line sweep */}
        <div
          aria-hidden="true"
          className="animate-scan-line pointer-events-none absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lexical-indigo/30 to-transparent"
        />
        <p className="font-mono text-xs leading-relaxed text-ink-muted">
          Interactive playground: tap any node below to initiate telemetry handshake.
        </p>

        <div className="mt-6">
          <svg
            viewBox="0 0 640 400"
            className="h-auto w-full"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="System architecture diagram showing a client connecting through an API gateway to Postgres, Redis, and cloud storage"
          >
            <title>Lexical system architecture diagram</title>

            {/* Edges */}
            {edges.map(([from, to]) => {
              const a = getNode(from);
              const b = getNode(to);
              const isActive = active === from || active === to;
              return (
                <line
                  key={`${from}-${to}`}
                  x1={a.x + nodeWidth}
                  y1={a.y + nodeHeight / 2}
                  x2={b.x}
                  y2={b.y + nodeHeight / 2}
                  stroke={isActive ? getNode(to).accent : "rgb(var(--color-panel-border))"}
                  strokeWidth={isActive ? 2 : 1.5}
                  strokeDasharray={isActive ? "6 4" : "0"}
                  className={isActive ? "animate-dash" : ""}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node, index) => {
              const isActive = active === node.id;
              return (
                <g
                  key={node.id}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`${node.label} node`}
                  className="cursor-pointer outline-none"
                  style={{
                    opacity: 0,
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    animation: `node-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.15 + index * 0.12}s both`,
                  }}
                  onMouseEnter={() => setActive(node.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(node.id)}
                  onBlur={() => setActive(null)}
                  onClick={() =>
                    setActive((curr) => (curr === node.id ? null : node.id))
                  }
                >
                  <rect
                    x={node.x}
                    y={node.y}
                    width={nodeWidth}
                    height={nodeHeight}
                    rx={12}
                    fill="rgb(var(--color-panel))"
                    stroke={isActive ? node.accent : "rgb(var(--color-panel-border))"}
                    strokeWidth={isActive ? 2 : 1.5}
                    className="transition-colors"
                    style={{
                      filter: isActive
                        ? `drop-shadow(0 4px 14px ${node.accent}33)`
                        : "none",
                    }}
                  />
                  <foreignObject
                    x={node.x}
                    y={node.y}
                    width={nodeWidth}
                    height={nodeHeight}
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-1.5">
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-md"
                        style={{
                          backgroundColor: node.chipBg,
                          color: node.accent,
                        }}
                      >
                        {node.icon}
                      </span>
                      <span
                        className={cn("font-display text-sm font-600")}
                        style={{ color: isActive ? node.accent : "rgb(var(--color-ink))" }}
                      >
                        {node.label}
                      </span>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Status readout */}
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5 font-mono text-xs">
          <div>
            <p className="text-ink-dim">LATENCY</p>
            <p className="mt-1 text-status-green">
              {active ? "12ms" : "\u2014"}
            </p>
          </div>
          <div>
            <p className="text-ink-dim">NODE</p>
            <p className="mt-1 text-ink">
              {active ? getNode(active).label : "idle"}
            </p>
          </div>
          <div>
            <p className="text-ink-dim">STATUS</p>
            <p className="mt-1 text-lexical-orange">
              {active ? "handshake_ok" : "standby"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
