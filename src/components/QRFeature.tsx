"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { C } from "@/lib/colors";

export default function QRFeature() {
  return (
    <section style={{ 
      padding: "8rem 2rem", 
      background: C.bgDark, 
      position: "relative", 
      overflow: "hidden",
      borderTop: `1px solid ${C.borderDark}`,
      borderBottom: `1px solid ${C.borderDark}`
    }}>
      
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", right: "10%", transform: "translateY(-50%)",
        width: 600, height: 600, background: "radial-gradient(circle, rgba(255,199,44,0.1) 0%, transparent 70%)",
        pointerEvents: "none", borderRadius: "50%"
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="qr-grid">
        
        {/* Left: Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ 
              display: "inline-block", padding: "6px 14px", background: "rgba(255,199,44,0.1)", 
              color: C.yellow, borderRadius: 999, fontSize: 12, fontWeight: 700, 
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" 
            }}>
              The Digital Bridge
            </span>
            <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", fontWeight: 800, color: C.text, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Every product <br/>is a portal.
            </h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ fontSize: "1.1rem", color: C.textMuted, lineHeight: 1.7, maxWidth: 480 }}>
            Physical merchandise shouldn't just be an object. It should be an invitation to keep learning. <br/><br/>
            <span style={{ color: C.text, fontWeight: 500 }}>Scan the unique QR code on any product</span> to instantly return to the main dot. website and explore the stories, puzzles, and research that inspired the design.
          </motion.p>
        </div>

        {/* Right: QR Animation */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2 }}>
          
          <div style={{ 
            position: "relative", width: 340, height: 340, background: C.yellow, 
            borderRadius: 32, padding: 16, boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
            border: `2px solid rgba(255,255,255,0.1)`
          }}>
            
            {/* The QR Image Slot (User will upload qr-code.jpg) */}
            <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 20, overflow: "hidden", background: "#E5B327" }}>
              <Image 
                src="/images/qr-code.jpg" 
                alt="Scan to visit dot."
                fill
                style={{ objectFit: "cover" }}
              />
              
              {/* Scanner Line Animation */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  left: 0, right: 0,
                  height: 4,
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 0 20px 4px rgba(255,255,255,0.6)",
                  zIndex: 10
                }}
              />
              {/* Scanner glow overlay */}
              <motion.div
                animate={{ top: ["-50%", "50%", "-50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  left: 0, right: 0, height: "50%",
                  background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2))",
                  zIndex: 9
                }}
              />
            </div>

            {/* Corner scan markers */}
            <div className="scan-marker top-left" />
            <div className="scan-marker top-right" />
            <div className="scan-marker bottom-left" />
            <div className="scan-marker bottom-right" />
          </div>

        </motion.div>
      </div>

      <style>{`
        .qr-grid {
          @media(max-width: 900px) {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 4rem;
          }
        }
        
        .scan-marker {
          position: absolute;
          width: 30px; height: 30px;
          border: 3px solid rgba(255,255,255,0.4);
          pointer-events: none;
        }
        .top-left { top: -15px; left: -15px; border-right: none; border-bottom: none; border-radius: 12px 0 0 0; }
        .top-right { top: -15px; right: -15px; border-left: none; border-bottom: none; border-radius: 0 12px 0 0; }
        .bottom-left { bottom: -15px; left: -15px; border-right: none; border-top: none; border-radius: 0 0 0 12px; }
        .bottom-right { bottom: -15px; right: -15px; border-left: none; border-top: none; border-radius: 0 0 12px 0; }
      `}</style>
    </section>
  );
}
