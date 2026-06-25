"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("splashShown")) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("splashShown", "true");

    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0F172A",
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Logo */}
      <div
        style={{
          position: "relative",
          height: 80,
          width: 80,
          overflow: "hidden",
          borderRadius: 16,
          marginBottom: 24,
          boxShadow: "0 0 40px rgba(37,99,235,0.3)",
          border: "2px solid rgba(37,99,235,0.3)",
          animation: "splashLogo 0.5s ease-out forwards",
        }}
      >
        <Image
          src="/images/logo/lexical-mark.jpg"
          alt="Lexical Software"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Name */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animation: "splashText 0.5s ease-out 0.3s both",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: "0.25em",
            color: "#ffffff",
          }}
        >
          LEXICAL
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.4em",
            color: "#2563EB",
          }}
        >
          SOFTWARE
        </span>
      </div>

      {/* Tagline */}
      <p
        style={{
          marginTop: 16,
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.15em",
          color: "#475569",
          animation: "splashTagline 0.5s ease-out 0.5s both",
        }}
      >
        WEB &amp; APP DEVELOPMENT STUDIO
      </p>

      {/* Loading bar */}
      <div
        style={{
          marginTop: 40,
          height: 2,
          width: 128,
          overflow: "hidden",
          borderRadius: 9999,
          backgroundColor: "#1E293B",
          animation: "splashBar 0.3s ease-out 0.6s both",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 9999,
            backgroundColor: "#2563EB",
            animation: "loadingBar 1.2s ease-in-out 0.6s both",
          }}
        />
      </div>

      <style>{`
        @keyframes splashLogo {
          0% { opacity: 0; transform: scale(0.7) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes splashText {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashTagline {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes splashBar {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}