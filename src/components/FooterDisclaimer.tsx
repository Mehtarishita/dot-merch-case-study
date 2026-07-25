"use client";

import Link from "next/link";
import { C } from "@/lib/colors";

export default function FooterDisclaimer() {
  return (
    <div id="philosophy"
      style={{
        borderTop: `1px solid ${C.borderDark}`,
        padding: "4rem 2rem 5rem",
        background: C.bgDark,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          textAlign: "center",
        }}
      >
        {/* Dot mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
          <div style={{ width: 8, height: 8, background: C.yellow, borderRadius: "50%" }} />
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: C.yellow }}>
            Behind the Design
          </span>
          <div style={{ width: 8, height: 8, background: C.yellow, borderRadius: "50%" }} />
        </div>

        {/* Challenge text */}
        <h3 style={{ fontSize: 24, fontWeight: 800, color: C.text, marginBottom: 8, letterSpacing: "-0.02em" }}>
          Designed by <span style={{ color: C.yellow }}>Team Daily Scoop</span>
        </h3>
        
        <p
          style={{
            fontSize: 15,
            color: C.textMuted,
            lineHeight: 1.8,
            maxWidth: 600,
            fontWeight: 400,
          }}
        >
          This experience was designed and developed specifically for the <strong style={{ color: C.text }}>IIM Ranchi × dot.</strong> 
          <br/>
          <span style={{ fontSize: 16, color: C.text, fontWeight: 600 }}>Inkling 2026 National Case Competition</span>
        </p>

        {/* Bottom line */}
        <p style={{ fontSize: 12, color: C.textLight, marginTop: "2rem", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>
          © {new Date().getFullYear()} Team Daily Scoop · Round 2 Submission
        </p>
      </div>
    </div>
  );
}
