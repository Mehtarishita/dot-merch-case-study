"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const CARDS = [
  { icon:"🔭", title:"Inspired by Curiosity", desc:"Every illustration begins with a question - pulled from Dot's most engaging educational stories." },
  { icon:"🎒", title:"Made for Everyday Use", desc:"Objects students actually use every day. Not collectibles. Not decorations. Real companions." },
  { icon:"📚", title:"Story Driven", desc:"Every design is directly connected to Dot's educational content - visible only to those who know." },
  { icon:"◎", title:"Minimal Aesthetic", desc:"Clean, modern and timeless. We believe the best design says more by showing less." },
];

export default function BehindDesign() {
  return (
    <section id="philosophy" style={{ padding:"7rem 2rem", background:C.bg }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:"4.5rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
            <div style={{ width:8, height:8, background:C.yellow, borderRadius:"50%" }} />
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.textMuted }}>The Philosophy</span>
          </div>
          <h2 style={{ fontSize:"clamp(2.2rem,4.5vw,3.4rem)", fontWeight:800, color:C.text, letterSpacing:"-0.04em", lineHeight:1.1 }}>
            Designed with Purpose
          </h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"1.5rem" }}>
          {CARDS.map((card, i) => (
            <motion.div key={card.title}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
              whileHover={{ y:-6, boxShadow:"0 20px 60px rgba(26,33,56,0.1)" }}
              style={{ background:C.card, borderRadius:24, padding:"2rem", border:`1px solid ${C.border}`, cursor:"default", transition:"all 0.3s ease" }}>
              <div style={{ width:54, height:54, background:C.yellowLight, borderRadius:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, marginBottom:20 }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize:18, fontWeight:700, color:C.text, marginBottom:10, letterSpacing:"-0.01em" }}>{card.title}</h3>
              <p style={{ fontSize:15, color:C.textMuted, lineHeight:1.7 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
