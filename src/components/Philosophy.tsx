"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const CARDS = [
  { title: "Curiosity", desc: "Designs inspired by the joy of exploring the unknown.", icon: "🔭" },
  { title: "Learning", desc: "Merchandise that celebrates the beauty of education.", icon: "📚" },
  { title: "Creativity", desc: "Minimal visuals that carry meaningful stories.", icon: "✏️" },
];

export default function Philosophy() {
  return (
    <section id="philosophy" style={{ padding: "7rem 0", background: C.bg }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="phil-grid">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, background: C.yellow, borderRadius: "50%" }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textMuted }}>Design Philosophy</span>
            </div>
            <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 24 }}>
              Every Design<br />Tells a Story
            </h2>
            <div style={{ width: 48, height: 4, background: C.yellow, borderRadius: 4, marginBottom: 28 }} />
            <p style={{ fontSize: 17, color: C.textMuted, lineHeight: 1.75, maxWidth: 420 }}>
              We believe merchandise shouldn't just be branded clothing. Each piece is an artifact - designed to spark curiosity, start conversations, and remind wearers that learning is a lifelong adventure.
            </p>
          </motion.div>

          {/* Right - Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{ background: C.card, borderRadius: 20, padding: "1.75rem 2rem", border: `1px solid ${C.border}`, display: "flex", gap: 20, alignItems: "flex-start", transition: "all 0.3s ease", cursor: "default" }}
                whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(26,33,56,0.08)" }}
              >
                <div style={{ width: 52, height: 52, background: C.yellowLight, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 8, letterSpacing: "-0.01em" }}>{card.title}</h3>
                  <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .phil-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) { .phil-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
