"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { C } from "@/lib/colors";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#collection", label: "Collection" },
  { href: "#featured", label: "Featured" },
  { href: "#philosophy", label: "About" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", v => setScrolled(v > 60));

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "sticky", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(13, 17, 32, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.borderDark}` : "1px solid transparent",
          transition: "all 0.35s ease",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="#home" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <div style={{ width: 10, height: 10, background: C.yellow, borderRadius: "50%" }} />
            <span style={{ fontWeight: 800, fontSize: 20, color: C.text, letterSpacing: "-0.03em" }}>dot.</span>
          </Link>

          <div className="nav-desktop" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                style={{ color: C.textMuted, textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.01em" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                onMouseLeave={e => (e.currentTarget.style.color = C.textMuted)}
              >{label}</Link>
            ))}
          </div>

          <Link href="#collection" className="nav-desktop"
            style={{ background: C.text, color: C.bgDark, padding: "9px 22px", borderRadius: 999, fontWeight: 800, fontSize: 13, textDecoration: "none", letterSpacing: "0.01em", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = C.yellow; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.text; }}
          >Explore</Link>

          <button onClick={() => setOpen(!open)} className="nav-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 6 }}>
            <span style={{ width: 22, height: 2, background: C.text, borderRadius: 2, display: "block", transition: "transform 0.3s", transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ width: 22, height: 2, background: C.text, borderRadius: 2, display: "block", opacity: open ? 0 : 1, transition: "opacity 0.3s" }} />
            <span style={{ width: 22, height: 2, background: C.text, borderRadius: 2, display: "block", transition: "transform 0.3s", transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>

        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "1rem 2rem 1.5rem" }}>
            {LINKS.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                style={{ display: "block", padding: "14px 0", color: C.text, textDecoration: "none", fontWeight: 600, fontSize: 16, borderBottom: `1px solid ${C.border}` }}>
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.nav>
      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile { display: none !important; }
        @media(max-width:768px){ .nav-desktop{display:none!important;} .nav-mobile{display:flex!important;} }
      `}</style>
    </>
  );
}
