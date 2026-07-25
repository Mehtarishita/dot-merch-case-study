"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const STEPS = [
  { title: "Idea", icon: "💡", desc: "A story from Dot sparks inspiration" },
  { title: "Sketch", icon: "✏️", desc: "Raw concepts hit the drawing board" },
  { title: "Illustration", icon: "🎨", desc: "Visuals shaped with meaning" },
  { title: "Prototype", icon: "📦", desc: "First physical sample is created" },
  { title: "Final Merch", icon: "✨", desc: "Ready for curious minds" },
];

export default function Timeline() {
  return (
    <section style={{ padding: "7rem 0", background: C.cardAlt }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.035em", marginBottom: 14 }}>
            Collection Timeline
          </h2>
          <p style={{ fontSize: 17, color: C.textMuted }}>From a single question to a physical object.</p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", gap: "1rem" }} className="timeline-row">
          {/* Connecting line */}
          <div style={{ position: "absolute", top: 32, left: "8%", right: "8%", height: 2, background: C.border, zIndex: 0 }} className="timeline-line" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", zIndex: 1, flex: 1, minWidth: 100 }}
            >
              <motion.div
                whileHover={{ scale: 1.12, background: C.bgDark }}
                style={{
                  width: 64, height: 64, borderRadius: "50%", background: C.card,
                  border: `2px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, marginBottom: 16, transition: "all 0.3s ease", cursor: "default",
                  boxShadow: "0 2px 12px rgba(26,33,56,0.06)",
                }}
              >
                {step.icon}
              </motion.div>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 6, letterSpacing: "0.02em" }}>{step.title}</h4>
              <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.5 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-row { flex-direction: row; }
        .timeline-line { display: block; }
        @media (max-width: 640px) {
          .timeline-row { flex-direction: column !important; align-items: flex-start !important; gap: 0 !important; }
          .timeline-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
