"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { C } from "@/lib/colors";

export default function FinalCTA() {
  return (
    <section style={{ padding:"8rem 2rem", background: C.bg, textAlign:"center" }}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          style={{ display:"inline-flex", alignItems:"center", gap:8, background: C.yellowLight, border:`1.5px solid ${C.yellow}`, borderRadius:999, padding:"6px 18px", marginBottom:36 }}>
          <div style={{ width:7, height:7, background:C.yellow, borderRadius:"50%" }} />
          <span style={{ fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:C.text }}>Ready to Explore?</span>
        </motion.div>

        <motion.h2 initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
          style={{ fontSize:"clamp(2rem,5vw,4rem)", fontWeight:800, color:C.text, letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:20 }}>
          Explore Every Product
        </motion.h2>

        <motion.p initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.2 }}
          style={{ fontSize:18, color:C.textMuted, marginBottom:48, lineHeight:1.7 }}>
          Designed for Curious Minds.
        </motion.p>

        <motion.div initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:0.3 }}>
          <Link href="#collection"
            style={{ display:"inline-block", background:C.bgDark, color:C.textOnDark, padding:"18px 48px", borderRadius:999, fontWeight:700, fontSize:17, textDecoration:"none", transition:"all 0.25s" }}
            onMouseEnter={e=>{ e.currentTarget.style.background=C.yellow; e.currentTarget.style.color=C.text; e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow=`0 16px 48px rgba(255,199,44,0.3)`; }}
            onMouseLeave={e=>{ e.currentTarget.style.background=C.bgDark; e.currentTarget.style.color=C.textOnDark; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
            View The Collection ↑
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
