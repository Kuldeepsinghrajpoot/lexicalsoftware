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
}

const nodes: NodeDef[] = [
  { id: "client", label: "Client", icon: <Laptop className="h-5 w-5" />, x: 40, y: 200 },
  { id: "gateway", label: "API Gateway", icon: <Server className="h-5 w-5" />, x: 260, y: 200 },
  { id: "postgres", label: "Postgres", icon: <Database className="h-5 w-5" />, x: 480, y: 80 },
  { id: "redis", label: "Redis", icon: <Zap className="h-5 w-5" />, x: 480, y: 200 },
  { id: "cloud", label: "Cloud Storage", icon: <Cloud className="h-5 w-5" />, x: 480, y: 320 },
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
    <div className="rounded-xl border border-panel-border bg-panel">
      {/* Window header */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-status-red" />
            <span className="h-3 w-3 rounded-full bg-status-yellow" />
            <span className="h-3 w-3 rounded-full bg-status-green" />
          </div>
          <span className="font-mono text-xs text-ink-muted">
            LEXICAL_VISUALIZER_v2.0
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-status-green/30 bg-status-green/10 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-status-green animate-pulse-slow" />
          <span className="font-mono text-xs font-500 text-status-green">
            SYS ACTIVE
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-6">
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
                  stroke={isActive ? "#FF6B1A" : "rgb(var(--color-panel-border))"}
                  strokeWidth={isActive ? 2 : 1.5}
                  strokeDasharray={isActive ? "6 4" : "0"}
                  className={isActive ? "animate-dash" : ""}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const isActive = active === node.id;
              return (
                <g
                  key={node.id}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`${node.label} node`}
                  className="cursor-pointer outline-none"
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
                    rx={10}
                    fill="rgb(var(--color-base))"
                    stroke={isActive ? "#FF6B1A" : "rgb(var(--color-panel-border))"}
                    strokeWidth={isActive ? 2 : 1.5}
                    className="transition-colors"
                  />
                  <foreignObject
                    x={node.x}
                    y={node.y}
                    width={nodeWidth}
                    height={nodeHeight}
                  >
                    <div
                      className={cn(
                        "flex h-full w-full flex-col items-center justify-center gap-1.5",
                        isActive ? "text-lexical-orange" : "text-ink"
                      )}
                    >
                      {node.icon}
                      <span className="font-display text-sm font-600">
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
