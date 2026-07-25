"use client";

import { motion } from "framer-motion";
import DoodlesBackground from "./DoodlesBackground";
import { C } from "@/lib/colors";

export default function BrandShowcase() {
  return (
    <section style={{ position: "relative", padding: "9rem 2rem", background: C.bgDark, overflow: "hidden", textAlign: "center" }}>
      {/* Subtle yellow tint background circle */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: `radial-gradient(circle, rgba(255,199,44,0.06) 0%, transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 40 }}
        >
          <div style={{ width: 9, height: 9, background: C.yellow, borderRadius: "50%" }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,247,244,0.4)" }}>dot. merchandise</span>
        </motion.div>

        {["Made for Students.", "Designed for Dreamers.", "Inspired by Stories."].map((line, i) => (
          <motion.h2
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18 }}
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: 8,
              color: i === 2 ? C.yellow : i === 1 ? "rgba(248,247,244,0.55)" : C.textOnDark,
            }}
          >
            {line}
          </motion.h2>
        ))}
      </div>
    </section>
  );
}
