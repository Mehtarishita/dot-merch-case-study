"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { C } from "@/lib/colors";
import Link from "next/link";

export default function Featured() {
  return (
    <section id="featured" style={{ padding: "8rem 2rem", background: C.bgDark, color: C.textLight }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        
        <div style={{ marginBottom: "4rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <div>
            <h2 style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.04em", lineHeight: 1 }}>
              Featured<br />
              <span style={{ color: C.yellow, fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>Editions</span>
            </h2>
          </div>
          <p style={{ maxWidth: 400, fontSize: "clamp(1rem,1.5vw,1.1rem)", color: C.textMuted, margin: 0, paddingBottom: 8 }}>
            A curated selection of our most loved objects. Designed to spark curiosity every single day.
          </p>
        </div>

        {/* Featured Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24 }} className="featured-grid">
          
          {/* Main Feature - 8 cols */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
            style={{ gridColumn: "span 8", position: "relative", borderRadius: 24, overflow: "hidden", background: "#F5F8FF", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)" }}
            className="feat-main">
            
            <video 
              className="feat-video"
              src="/images/products/connected-journal-3d.mp4" 
              autoPlay loop muted playsInline 
              style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", top: 0, left: 0, transform: "scale(0.85)" }} 
            />
            
            {/* Gradient overlay to ensure text readability if video gets bright */}
            <div className="feat-gradient" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)", zIndex: 5 }} />
            
            <div className="feat-text-wrapper" style={{ position: "absolute", bottom: 40, left: 40, right: 40, display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 10, boxSizing: "border-box" }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.bgDark, background: C.yellow, padding: "6px 14px", borderRadius: 999, display: "inline-block", marginBottom: 16 }}>Stationery</div>
                <h3 className="feat-title" style={{ fontSize: "clamp(2rem,3vw,3rem)", fontWeight: 800, color: "#fff", margin: 0, letterSpacing: "-0.02em", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>The Connected Journal</h3>
              </div>
              <Link href="#collection" style={{ background: C.yellow, color: C.bgDark, padding: "12px 24px", borderRadius: 999, textDecoration: "none", fontWeight: 800, fontSize: 14, transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                Explore →
              </Link>
            </div>
          </motion.div>

          {/* Secondary Stack - 4 cols */}
          <div style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", gap: 24 }} className="feat-side">
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              whileHover={{ scale: 1.02, y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              style={{ flex: 1, position: "relative", borderRadius: 24, overflow: "hidden", background: "#EDF2F7", display: "flex", flexDirection: "column", minHeight: 288, transition: "all 0.3s ease" }}>
              <div style={{ flex: 1, position: "relative", width: "100%", padding: "1.5rem", paddingBottom: "1rem" }}>
                <motion.div whileHover={{ scale: 1.04 }} style={{ width: "100%", height: "100%", position: "relative", transition: "transform 0.5s ease", borderRadius: 16, overflow: "hidden" }}>
                  <Image src="/images/products/globe.png" alt="The Explorer Globe" fill style={{ objectFit: "cover" }} unoptimized />
                </motion.div>
              </div>
              <div style={{ padding: "0 1.5rem 1.5rem 1.5rem", zIndex: 10 }}>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.bgDark, background: "rgba(13,17,32,0.06)", padding: "4px 10px", borderRadius: 999, display: "inline-block", marginBottom: 8 }}>Accessories</div>
                <h3 style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 800, color: C.bgDark, margin: 0, letterSpacing: "-0.02em" }}>The Explorer Globe</h3>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              style={{ flex: 1, position: "relative", borderRadius: 24, overflow: "hidden", background: "#F5F0F5", display: "flex", flexDirection: "column", minHeight: 288, transition: "all 0.3s ease" }}>
              <div style={{ flex: 1, position: "relative", width: "100%", padding: "1.5rem", paddingBottom: "1rem" }}>
                <motion.div whileHover={{ scale: 1.04 }} style={{ width: "100%", height: "100%", position: "relative", transition: "transform 0.5s ease", borderRadius: 16, overflow: "hidden" }}>
                  <Image src="/images/products/puzzle.png" alt="The Big Picture Puzzle" fill style={{ objectFit: "cover" }} unoptimized />
                </motion.div>
              </div>
              <div style={{ padding: "0 1.5rem 1.5rem 1.5rem", zIndex: 10 }}>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.bgDark, background: "rgba(13,17,32,0.06)", padding: "4px 10px", borderRadius: 999, display: "inline-block", marginBottom: 8 }}>Interactive</div>
                <h3 style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 800, color: C.bgDark, margin: 0, letterSpacing: "-0.02em" }}>The Big Picture Puzzle</h3>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
      
      <style>{`
        @media (max-width: 1000px) {
          .featured-grid { display: flex !important; flex-direction: column !important; }
          .feat-main { min-height: auto !important; flex-direction: column !important; justify-content: flex-start !important; }
          .feat-video { position: relative !important; width: 100% !important; height: 350px !important; transform: scale(0.95) !important; object-fit: contain !important; }
          .feat-gradient { display: none !important; }
          .feat-text-wrapper { position: relative !important; bottom: auto !important; left: auto !important; right: auto !important; padding: 24px !important; width: 100% !important; flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; background: #0D1120 !important; }
          .feat-title { text-shadow: none !important; }
        }
      `}</style>
    </section>
  );
}
