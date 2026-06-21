"use client";

import { useState } from "react";

interface TechIconProps {
  name: string;
  slug: string;
  color: string;
  size?: number;
  className?: string;
}

export default function TechIcon({
  name,
  slug,
  color,
  size = 16,
  className,
}: TechIconProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`flex shrink-0 items-center justify-center rounded-full font-mono font-700 text-white ${className ?? ""}`}
        style={{
          width: size,
          height: size,
          fontSize: Math.max(size * 0.45, 8),
          backgroundColor: `#${color}`,
        }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}?viewbox=auto`}
      alt={name}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  );
}