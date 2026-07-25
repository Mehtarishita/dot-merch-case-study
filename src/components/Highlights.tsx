"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const HIGHLIGHTS = [
  { icon: "✦", title: "Minimal Design", desc: "Clean aesthetics that let stories shine" },
  { icon: "◎", title: "Premium Material", desc: "Quality crafted to last through learning" },
  { icon: "🎓", title: "Student Friendly", desc: "Made to fit every campus lifestyle" },
  { icon: "📖", title: "Story-Inspired", desc: "Each piece carries a Dot narrative" },
];

export default function Highlights() {
  return (
    <section style={{ padding: "6rem 0", background: C.bg }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: C.card, borderRadius: 20, padding: "2rem",
                border: `1px solid ${C.border}`, transition: "all 0.3s ease",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 18 }}>{item.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 8, letterSpacing: "-0.01em" }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
