"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { C } from "@/lib/colors";

/* ── Floating background doodles ───────────────────────────────── */
const DOODLES = [
  { char: "✈", x: 6,  y: 12, s: 18, d: 0 },
  { char: "🚀", x: 88, y: 8,  s: 16, d: 0.6 },
  { char: "⚛",  x: 14, y: 72, s: 20, d: 1.2 },
  { char: "🔭", x: 82, y: 68, s: 17, d: 0.3 },
  { char: "🔍", x: 5,  y: 44, s: 15, d: 0.9 },
  { char: "⋆",  x: 75, y: 22, s: 14, d: 0.4 },
  { char: "✦",  x: 92, y: 45, s: 12, d: 1.5 },
  { char: "◎",  x: 48, y: 5,  s: 13, d: 0.7 },
  { char: "💡", x: 58, y: 90, s: 16, d: 1.1 },
  { char: "⋆",  x: 30, y: 88, s: 11, d: 0.2 },
];

function FloatingDoodles() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {DOODLES.map((d, i) => (
        <motion.span key={i}
          style={{ position: "absolute", left: `${d.x}%`, top: `${d.y}%`, fontSize: d.s, opacity: 0.06, userSelect: "none", display: "block" }}
          animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 8 + d.d * 2, repeat: Infinity, ease: "easeInOut", delay: d.d }}>
          {d.char}
        </motion.span>
      ))}
    </div>
  );
}

/* ── Animated Icons ───────────────────────────────────────────── */
const QRAnim = () => (
  <div style={{ width: 16, height: 16, border: `1.5px solid ${C.yellow}`, borderRadius: 4, position: "relative", overflow: "hidden", flexShrink: 0 }}>
    <motion.div animate={{ top: ["-20%", "120%", "-20%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
      style={{ position: "absolute", left: -2, right: -2, height: 2, background: C.yellow, boxShadow: `0 0 6px ${C.yellow}` }} />
  </div>
);

const DoodleAnim = () => (
  <div style={{ width: 16, height: 16, position: "relative", flexShrink: 0 }}>
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
      style={{ width: "100%", height: "100%", border: `1.5px dashed ${C.yellow}`, borderRadius: "50%", position: "absolute" }} />
    <motion.div animate={{ scale: [1, 1.3, 1], rotate: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
      style={{ position: "absolute", inset: 4, background: C.yellow, borderRadius: 2 }} />
  </div>
);

const StoryAnim = () => (
  <div style={{ width: 16, height: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2px 0", flexShrink: 0 }}>
    {[0, 1, 2].map(i => (
      <motion.div key={i} animate={{ x: [0, 3, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }} 
        style={{ height: 2, background: C.yellow, borderRadius: 2, width: i === 2 ? "60%" : "100%" }} />
    ))}
  </div>
);

const DesignAnim = () => (
  <motion.div animate={{ rotate: [0, 90, 180], scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
    style={{ width: 16, height: 16, display: "grid", placeItems: "center", flexShrink: 0 }}>
    <svg viewBox="0 0 24 24" fill={C.yellow} width="100%" height="100%">
      <path d="M12 0C12 0 14 9 24 12C24 12 14 15 12 24C12 24 10 15 0 12C0 12 10 9 12 0Z" />
    </svg>
  </motion.div>
);

const CHIPS = [
  { icon: <QRAnim />, label: "QR Connected" },
  { icon: <DoodleAnim />, label: "Original Dot Doodles" },
  { icon: <StoryAnim />, label: "Story Inspired" },
  { icon: <DesignAnim />, label: "Purposeful Design" },
];

/* ── Animation variants ─────────────────────────────────────── */
const fromLeft: any = { hidden: { opacity: 0, x: -32 }, visible: (d: number) => ({ opacity: 1, x: 0, transition: { duration: 0.7, delay: d, ease: "easeOut" } }) };
const fromRight: any = { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0, transition: { duration: 0.75, delay: 0.15, ease: "easeOut" } } };
const fromBottom: any = { hidden: { opacity: 0, y: 20 }, visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: "easeOut" } }) };

/* ── Component ──────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section id="home" className="hero-section" style={{
      position: "relative",
      minHeight: "85vh",
      background: "linear-gradient(180deg, #1a2138 0%, #0d1120 100%)",
      overflow: "hidden",
      display: "flex",
      alignItems: "flex-start",
    }}>
      <FloatingDoodles />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "2rem 2rem 4rem", width: "100%", position: "relative", zIndex: 1 }}
        className="hero-grid">

        {/* ── LEFT: Text ─────────────────────────────────────── */}
        <div className="hero-text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 0 }}>

          {/* Badge */}
          <motion.div custom={0} variants={fromLeft} initial="hidden" animate="visible"
            style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 8, background: "rgba(248,247,244,0.05)", border: `1px solid rgba(248,247,244,0.12)`, borderRadius: 999, padding: "6px 14px", marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, background: C.yellow, borderRadius: "50%" }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: C.textMuted, lineHeight: 1.4, letterSpacing: "0.02em" }}>
              The "Think Everyday" Collection · Premium Merchandise Showcase
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 custom={0.1} variants={fromLeft} initial="hidden" animate="visible"
            style={{ fontSize: "clamp(2.8rem,5.5vw,4.8rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>
            Curiosity,<br />
            <span style={{ 
              color: C.yellow, 
              fontFamily: "Georgia, serif", 
              fontStyle: "italic", 
              fontWeight: 400,
              letterSpacing: "-0.02em" 
            }}>designed</span> to be<br />
            carried.
          </motion.h1>

          {/* Subtitle */}
          <motion.p custom={0.22} variants={fromLeft} initial="hidden" animate="visible"
            style={{ fontSize: "clamp(1rem,1.8vw,1.15rem)", color: C.textMuted, lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
            Built around the theme <strong>"Think Everyday"</strong>, each Dot product transforms everyday essentials into reminders to explore. But they hold a secret - scan any item to instantly unlock a unique, hand-picked article from around the world.
            <br /><br />
            <span style={{ 
              display: "inline-block",
              textAlign: "center",
              lineHeight: 1.4,
              color: C.bgDark, 
              background: C.yellow, 
              padding: "8px 16px", 
              borderRadius: 24, 
              fontWeight: 800, 
              letterSpacing: "0.05em", 
              textTransform: "uppercase", 
              fontSize: "0.75em" 
            }}>A Collection of 15 Premium Merch Items</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div custom={0.34} variants={fromBottom} initial="hidden" animate="visible"
            style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <Link href="#collection"
              style={{ background: C.text, color: C.bgDark, padding: "14px 32px", borderRadius: 999, fontWeight: 800, fontSize: 15, textDecoration: "none", transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.yellow; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.text; e.currentTarget.style.transform = "translateY(0)"; }}>
              Explore Collection
            </Link>
            <Link href="#philosophy"
              style={{ background: "transparent", color: C.text, padding: "14px 28px", borderRadius: 999, fontWeight: 600, fontSize: 15, textDecoration: "none", border: `1.5px solid ${C.border}`, transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.text; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateY(0)"; }}>
              Behind the Design
            </Link>
          </motion.div>

          {/* Feature chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {CHIPS.map((chip, i) => (
              <motion.div key={chip.label}
                custom={0.45 + i * 0.1} variants={fromBottom} initial="hidden" animate="visible"
                style={{ display: "flex", alignItems: "center", gap: 7, background: C.card, border: `1px solid ${C.border}`, borderRadius: 999, padding: "7px 14px", fontSize: 13, fontWeight: 600, color: C.text }}>
                <span style={{ fontSize: 15 }}>{chip.icon}</span>
                {chip.label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Hero Image ───────────────────────────────── */}
        <motion.div className="hero-image"
          variants={fromRight} initial="hidden" animate="visible"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>

          {/* Soft glow behind image */}
          <div style={{ position: "absolute", top: "10%", left: "5%", right: "5%", bottom: "10%", background: `radial-gradient(ellipse, rgba(255,199,44,0.12) 0%, transparent 70%)`, pointerEvents: "none", borderRadius: "50%" }} />

          {/* Floating image animation */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "100%", position: "relative" }}>
            <Image
              src="/images/hero-banner.jpg"
              alt="Dot Merchandise Collection - packaging showcase"
              width={980}
              height={660}
              style={{ width: "100%", height: "auto", borderRadius: 16, display: "block" }}
              priority
              quality={95}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────────── */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 10 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textLight, fontWeight: 600 }}>
          Explore the Collection
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ fontSize: 18, color: C.textLight }}>↓</motion.div>
      </motion.div>

      {/* ── Responsive styles ─────────────────────────────────── */}
      <style>{`
        .hero-section {
          padding-top: 140px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-text { order: 1; }
        .hero-image { order: 2; }

        @media (max-width: 900px) {
          .hero-section {
            padding-top: 80px;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-text { order: 2 !important; }
          .hero-image { order: 1 !important; }
          .scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
