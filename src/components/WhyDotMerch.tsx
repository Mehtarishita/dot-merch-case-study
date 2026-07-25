"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { C } from "@/lib/colors";

/* ─── Floating doodles background ─────────────────────────────────── */
const BG_SYMBOLS = ["✦", "◎", "△", "⋆", "☆", "✧", "⊕", "◇", "∞", "⟡", "◐", "⬡", "⌘", "◈"];
function FloatingBg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {BG_SYMBOLS.map((s, i) => (
        <motion.span key={i}
          style={{ position: "absolute", left: `${4 + (i * 37 % 92)}%`, top: `${3 + (i * 53 % 92)}%`, fontSize: 10 + (i % 4) * 4, color: C.bgDark, opacity: 0.04, userSelect: "none" }}
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}>
          {s}
        </motion.span>
      ))}
    </div>
  );
}

/* ─── SVG Illustrations ─────────────────────────────────────────────── */
function IlluNotebook() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="8" y="10" width="40" height="48" rx="4" fill={C.yellowLight} stroke={C.yellow} strokeWidth="2" />
      <rect x="12" y="18" width="28" height="3" rx="1.5" fill={C.yellow} opacity="0.6" />
      <rect x="12" y="25" width="22" height="2" rx="1" fill={C.bgDark} opacity="0.2" />
      <rect x="12" y="30" width="26" height="2" rx="1" fill={C.bgDark} opacity="0.2" />
      <rect x="12" y="35" width="18" height="2" rx="1" fill={C.bgDark} opacity="0.2" />
      <line x1="8" y1="10" x2="8" y2="58" stroke={C.yellow} strokeWidth="3" strokeLinecap="round" />
      <motion.text x="38" y="14" fontSize="12" animate={{ rotate: [0, 10, 0], y: [-1, 1, -1] }} transition={{ duration: 3, repeat: Infinity }}>✦</motion.text>
      <motion.text x="44" y="24" fontSize="10" animate={{ rotate: [0, -8, 0], y: [0, -2, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>⋆</motion.text>
    </svg>
  );
}

function IlluQR({ scanning }: { scanning: boolean }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      {/* Phone */}
      <rect x="36" y="8" width="22" height="38" rx="4" fill={C.bgDark} />
      <rect x="39" y="13" width="16" height="24" rx="2" fill={scanning ? "#3d5af1" : "#2d3554"} style={{ transition: "fill 0.3s" }} />
      <circle cx="47" cy="41" r="1.5" fill={C.yellow} />
      {/* QR code */}
      <rect x="6" y="14" width="26" height="26" rx="3" fill={C.yellowLight} stroke={C.yellow} strokeWidth="1.5" />
      <rect x="9" y="17" width="7" height="7" rx="1" fill={C.yellow} />
      <rect x="18" y="17" width="7" height="7" rx="1" fill={C.bgDark} opacity="0.4" />
      <rect x="9" y="26" width="7" height="7" rx="1" fill={C.bgDark} opacity="0.4" />
      <rect x="18" y="26" width="3" height="3" rx="0.5" fill={C.yellow} />
      <rect x="23" y="26" width="3" height="3" rx="0.5" fill={C.bgDark} opacity="0.4" />
      {/* Scan line */}
      {scanning && (
        <motion.line x1="6" y1="0" x2="32" y2="0" stroke="#3d5af1" strokeWidth="2" opacity="0.8"
          animate={{ y: [14, 40, 14] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      )}
    </svg>
  );
}

function IlluDoodles({ hovered }: { hovered: boolean }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="20" fill={C.yellowLight} stroke={C.yellow} strokeWidth="2" />
      <circle cx="32" cy="32" r="10" fill="none" stroke={C.yellow} strokeWidth="2" />
      <motion.text x="22" y="38" fontSize="14" animate={hovered ? { rotate: [0, 15, 0] } : {}} transition={{ duration: 0.8 }}>🔭</motion.text>
      <motion.text x="6" y="18" fontSize="10" animate={hovered ? { y: [0, -3, 0] } : {}} transition={{ duration: 0.6 }}>⚛</motion.text>
      <motion.text x="46" y="16" fontSize="10" animate={hovered ? { y: [0, -3, 0] } : {}} transition={{ duration: 0.6, delay: 0.1 }}>✦</motion.text>
      <motion.text x="4" y="48" fontSize="10" animate={hovered ? { y: [0, -3, 0] } : {}} transition={{ duration: 0.6, delay: 0.2 }}>📚</motion.text>
      <motion.text x="48" y="50" fontSize="10" animate={hovered ? { y: [0, -3, 0] } : {}} transition={{ duration: 0.6, delay: 0.15 }}>🚀</motion.text>
    </svg>
  );
}

function IlluDesk() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <rect x="2" y="44" width="60" height="4" rx="2" fill={C.bgDark} opacity="0.15" />
      {/* Lamp */}
      <line x1="14" y1="44" x2="14" y2="24" stroke={C.bgDark} strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="14" cy="20" rx="10" ry="5" fill={C.yellow} opacity="0.8" />
      <motion.circle cx="14" cy="20" r="6" fill={C.yellow} opacity="0.2" animate={{ r: [6, 9, 6], opacity: [0.2, 0.05, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }} />
      {/* Notebook */}
      <rect x="22" y="30" width="20" height="14" rx="2" fill={C.yellowLight} stroke={C.yellow} strokeWidth="1.5" />
      <line x1="25" y1="35" x2="38" y2="35" stroke={C.yellow} strokeWidth="1" />
      <line x1="25" y1="38" x2="35" y2="38" stroke={C.bgDark} strokeWidth="1" opacity="0.3" />
      {/* Mug */}
      <rect x="44" y="34" width="14" height="10" rx="2" fill={C.yellowLight} stroke={C.yellow} strokeWidth="1.5" />
      <path d="M58 37 Q63 37 63 42 Q63 44 58 44" stroke={C.yellow} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function IlluMinimal() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="22" cy="22" r="14" fill={C.yellowLight} stroke={C.yellow} strokeWidth="2" />
      <rect x="32" y="28" width="24" height="24" rx="4" fill="none" stroke={C.bgDark} strokeWidth="2" opacity="0.2" />
      <motion.rect x="34" y="30" width="20" height="20" rx="3" fill={C.yellow} opacity="0.15"
        animate={{ rotate: [0, 3, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      <line x1="16" y1="22" x2="28" y2="22" stroke={C.yellow} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="16" x2="22" y2="28" stroke={C.yellow} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IlluLightbulb({ hovered }: { hovered: boolean }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      {/* Glow */}
      <motion.circle cx="32" cy="24" r={hovered ? 20 : 14} fill={C.yellow}
        style={{ opacity: hovered ? 0.15 : 0 }} transition={{ duration: 0.4 }} />
      {/* Bulb */}
      <path d="M22 24 Q22 14 32 14 Q42 14 42 24 Q42 32 36 36 L28 36 Q22 32 22 24Z" fill={hovered ? C.yellow : C.yellowLight} stroke={C.yellow} strokeWidth="2" style={{ transition: "fill 0.3s" }} />
      <rect x="26" y="36" width="12" height="4" rx="1" fill={C.yellow} opacity="0.6" />
      <rect x="27" y="40" width="10" height="3" rx="1" fill={C.yellow} opacity="0.4" />
      <rect x="28" y="43" width="8" height="3" rx="1" fill={C.yellow} opacity="0.3" />
      {/* Dots connecting */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.circle key={i} cx={18 + i * 7} cy={54} r="2" fill={C.yellow}
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}
      <motion.path d="M20 54 Q26 50 32 54 Q38 58 44 54" stroke={C.yellow} strokeWidth="1.5" fill="none" opacity="0.4"
        animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
    </svg>
  );
}

/* ─── Card data ──────────────────────────────────────────────────── */
const CARDS = [
  {
    id: "story",
    title: "Every Product Has a Story",
    text: "Every product is inspired by real stories, discoveries and ideas explored through Dot. Whether it's a journal, mug or tote bag, every design begins with curiosity.",
    cta: "Learn More →",
    color: "#FFF8E7",
  },
  {
    id: "qr",
    title: "Scan. Explore. Connect.",
    text: "Every product includes a unique QR code that connects you back to Dot. Scan it to discover articles, stories, puzzles and ideas that inspired the design.",
    cta: null,
    color: "#EEF2FF",
  },
  {
    id: "doodles",
    title: "Original Dot Doodles",
    text: "Our hand-crafted doodles aren't decorative. Every icon, sketch and illustration represents a concept from Dot's universe - science, technology, space, history, ideas, discovery.",
    cta: null,
    color: "#F0EDE8",
  },
  {
    id: "everyday",
    title: "Designed for Everyday Curiosity",
    text: "We transformed everyday objects into daily reminders to think deeper, ask better questions and stay curious. Learning shouldn't stop after class.",
    cta: null,
    color: "#FFFBEB",
  },
  {
    id: "minimal",
    title: "Minimal Yet Meaningful",
    text: "Every product follows a clean, timeless aesthetic. Minimal branding. Thoughtful typography. Intentional colors. Nothing exists just for decoration.",
    cta: null,
    color: "#F5F5F0",
  },
  {
    id: "living",
    title: "A Living Learning Experience",
    text: "Dot merchandise grows with you. Every scan unlocks new stories. Every object becomes part of your learning journey. Every idea connects to something bigger.",
    cta: null,
    color: "#EEF4EE",
  },
];

function CardIllustration({ id, hovered }: { id: string; hovered: boolean }) {
  if (id === "story") return <IlluNotebook />;
  if (id === "qr") return <IlluQR scanning={hovered} />;
  if (id === "doodles") return <IlluDoodles hovered={hovered} />;
  if (id === "everyday") return <IlluDesk />;
  if (id === "minimal") return <IlluMinimal />;
  if (id === "living") return <IlluLightbulb hovered={hovered} />;
  return null;
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function WhyDotMerch() {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const cardVariants: any = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section style={{ position: "relative", padding: "8rem 2rem", background: C.bg, overflow: "hidden" }}>
      <FloatingBg />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.yellowLight, border: `1.5px solid ${C.yellow}`, borderRadius: 999, padding: "6px 18px", marginBottom: 28 }}>
            <div style={{ width: 7, height: 7, background: C.yellow, borderRadius: "50%" }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.text }}>Why Us?</span>
          </div>
          <h2 style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 20 }}>
            Why Dot Merchandise?
          </h2>
          <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: C.textMuted, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
            Every product is more than an object. It's an invitation to stay curious.
          </p>
        </motion.div>

        {/* ── 3×2 Grid ── */}
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.5rem", marginBottom: "5rem" }}>
          {CARDS.map(card => {
            const isHov = hovered === card.id;
            return (
              <motion.div key={card.id} variants={cardVariants}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? card.color : C.card,
                  border: `1px solid ${isHov ? C.border : C.border}`,
                  borderRadius: 24,
                  padding: "2.25rem",
                  cursor: "default",
                  boxShadow: isHov ? "0 20px 60px rgba(26,33,56,0.1)" : "0 2px 12px rgba(26,33,56,0.04)",
                  transform: isHov ? "translateY(-8px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}>
                {/* Illustration */}
                <div style={{ width: 64, height: 64 }}>
                  <CardIllustration id={card.id} hovered={isHov} />
                </div>

                {/* Text */}
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.25 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.75 }}>
                    {card.text}
                  </p>
                </div>

                {/* Optional CTA */}
                {card.cta && (
                  <div style={{ marginTop: "auto" }}>
                    <Link href="#collection" style={{ fontSize: 14, fontWeight: 700, color: C.yellow, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, transition: "gap 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.gap = "8px")}
                      onMouseLeave={e => (e.currentTarget.style.gap = "4px")}>
                      {card.cta}
                    </Link>
                  </div>
                )}

                {/* QR-specific: scanner placeholder hint */}
                {card.id === "qr" && (
                  <div style={{ background: isHov ? "rgba(61,90,241,0.06)" : "rgba(26,33,56,0.03)", borderRadius: 12, padding: "10px 14px", border: `1px dashed ${isHov ? "#3d5af1" : C.border}`, fontSize: 12, color: C.textMuted, transition: "all 0.3s" }}>
                    📱 scanner-placeholder.png - replace with your own image
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Quote ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 5rem", padding: "3.5rem 2.5rem", background: C.bgDark, borderRadius: 28 }}>
          <div style={{ fontSize: 32, color: C.yellow, marginBottom: 20, fontFamily: "Georgia, serif" }}>"</div>
          <p style={{ fontSize: "clamp(1.1rem,2.2vw,1.5rem)", fontWeight: 500, color: C.textOnDark, lineHeight: 1.7, fontStyle: "italic" }}>
            Curiosity doesn't belong only inside classrooms. It belongs on your desk, in your bag, and in your everyday life.
          </p>
          <div style={{ width: 40, height: 3, background: C.yellow, borderRadius: 4, margin: "24px auto 0" }} />
        </motion.div>

        {/* ── CTA ── */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center" }}>
          <Link href="#collection"
            style={{ display: "inline-block", background: C.bgDark, color: C.textOnDark, padding: "16px 44px", borderRadius: 999, fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.background = C.yellow; e.currentTarget.style.color = C.text; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(255,199,44,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.bgDark; e.currentTarget.style.color = C.textOnDark; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
            Explore the Collection
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
