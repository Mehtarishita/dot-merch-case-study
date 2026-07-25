"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const LINES = [
  { text:"Think Everyday.", color: C.textOnDark },
  { text:"Question Everything.", color:"rgba(248,247,244,0.45)" },
  { text:"Stay Curious.", color: C.yellow },
];

export default function BrandPhilosophy() {
  return (
    <section style={{ padding:"9rem 2rem", background:C.bgDark, textAlign:"center", position:"relative", overflow:"hidden" }}>
      {/* Radial glow */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:700, height:700, background:`radial-gradient(circle, rgba(255,199,44,0.05) 0%, transparent 65%)`, pointerEvents:"none" }} />

      <div style={{ position:"relative", zIndex:10, maxWidth:900, margin:"0 auto" }}>
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:56 }}>
          <div style={{ width:8, height:8, background:C.yellow, borderRadius:"50%" }} />
          <span style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(248,247,244,0.35)" }}>Brand Philosophy</span>
        </motion.div>

        {LINES.map((line, i) => (
          <motion.h2 key={i}
            initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.18 }}
            style={{ fontSize:"clamp(2.8rem,7vw,5.5rem)", fontWeight:800, letterSpacing:"-0.04em", lineHeight:1.08, marginBottom:10, color:line.color }}>
            {line.text}
          </motion.h2>
        ))}
      </div>
    </section>
  );
}
