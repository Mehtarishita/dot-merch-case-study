"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const FEATURES = [
  {
    icon: "📱",
    title: "Interactive QR Experience",
    desc: "Every product unlocks exclusive Dot stories with a quick scan. Learning lives in every object.",
  },
  {
    icon: "🎨",
    title: "Signature Doodle Language",
    desc: "Illustrations inspired by science, technology, space, books and creativity - each tells its own story.",
  },
  {
    icon: "💙",
    title: "Everyday Utility",
    desc: "Products you'll actually use - designed to make curiosity part of your daily routine.",
  },
  {
    icon: "✨",
    title: "Purpose-Driven Design",
    desc: "Every color, icon and detail has meaning. Nothing is purely decorative.",
  },
  {
    icon: "🌍",
    title: "Learning Beyond the Screen",
    desc: "Dot extends its educational mission into physical products that inspire conversation and exploration.",
  },
];

export default function DotDifference() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ padding: "6rem 2rem", background: C.bgAlt }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ width: 8, height: 8, background: C.yellow, borderRadius: "50%" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textMuted }}>The Difference</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              The Dot Difference
            </h2>
            <p style={{ fontSize: 16, color: C.textMuted, maxWidth: 340, lineHeight: 1.65 }}>
              Not just branded merchandise - a continuation of Dot's learning experience.
            </p>
          </div>
        </motion.div>

        {/* Horizontal feature cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {FEATURES.map((f, i) => {
            const isHov = hovered === i;
            return (
              <motion.div key={f.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr auto",
                  alignItems: "center",
                  gap: "1.5rem",
                  background: isHov ? C.card : "transparent",
                  border: `1px solid ${isHov ? C.border : "transparent"}`,
                  borderRadius: 20,
                  padding: "1.5rem 2rem",
                  cursor: "default",
                  boxShadow: isHov ? "0 8px 32px rgba(26,33,56,0.07)" : "none",
                  transition: "all 0.3s ease",
                }}>
                {/* Icon */}
                <motion.div
                  animate={isHov ? { scale: 1.15, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: 64, height: 64, background: isHov ? C.yellowLight : C.bg, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, transition: "background 0.3s", flexShrink: 0 }}>
                  {f.icon}
                </motion.div>

                {/* Text */}
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, letterSpacing: "-0.015em", marginBottom: 6, lineHeight: 1.2 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.65, maxWidth: 560 }}>
                    {f.desc}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  animate={{ x: isHov ? 0 : -8, opacity: isHov ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ fontSize: 20, color: C.yellow, fontWeight: 700, flexShrink: 0 }}>
                  →
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider bottom */}
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ height: 2, background: `linear-gradient(to right, ${C.yellow}, transparent)`, borderRadius: 4, marginTop: "3.5rem", transformOrigin: "left" }} />
      </div>
    </section>
  );
}
