"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const GALLERY_ITEMS = [
  { label: "Folded Hoodie", emoji: "🧥", bg: "#EEF0F5", aspect: "4/5" },
  { label: "Notebook on Desk", emoji: "📒", bg: "#FFF8E7", aspect: "3/4" },
  { label: "Bottle in Backpack", emoji: "🫙", bg: "#EEF4EE", aspect: "1/1" },
  { label: "Sticker on Laptop", emoji: "🌟", bg: "#FDF5E0", aspect: "4/3" },
  { label: "T-shirt Flatlay", emoji: "👕", bg: "#F0EDE8", aspect: "3/4" },
  { label: "Journal with Pen", emoji: "📖", bg: "#F8EFEF", aspect: "4/5" },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: "7rem 0", background: C.bgDark }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 8, height: 8, background: C.yellow, borderRadius: "50%" }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(248,247,244,0.5)" }}>
                Lifestyle Gallery
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: C.textOnDark, letterSpacing: "-0.035em" }}>
              Curiosity in<br />Everyday Life
            </h2>
          </div>
          <p style={{ fontSize: 16, color: "rgba(248,247,244,0.55)", maxWidth: 280, lineHeight: 1.6 }}>
            Dot merchandise in its natural habitat - wherever ideas live.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div style={{ columns: "3 280px", gap: "1.25rem" }}>
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ breakInside: "avoid", marginBottom: "1.25rem" }}
            >
              <div
                style={{ background: item.bg, borderRadius: 18, overflow: "hidden", position: "relative", cursor: "pointer", aspectRatio: item.aspect, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12, transition: "transform 0.35s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div style={{ fontSize: 64, lineHeight: 1 }}>{item.emoji}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(26,33,56,0.5)", letterSpacing: "0.04em" }}>{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
