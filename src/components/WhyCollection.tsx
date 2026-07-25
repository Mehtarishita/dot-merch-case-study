"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const CARDS = [
  { icon:"📚", label:"Learn" },
  { icon:"💡", label:"Think" },
  { icon:"🚀", label:"Discover" },
  { icon:"❤️", label:"Stay Curious" },
];

export default function WhyCollection() {
  return (
    <section style={{ padding:"7rem 2rem", background: C.bgDark }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ maxWidth:680, marginBottom:"4.5rem" }}>
          <h2 style={{ fontSize:"clamp(2.2rem,4.5vw,3.4rem)", fontWeight:800, color:C.textOnDark, letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:24 }}>
            More Than Merchandise
          </h2>
          <p style={{ fontSize:18, color:"rgba(248,247,244,0.55)", lineHeight:1.8 }}>
            Every product is designed to extend Dot's philosophy beyond the screen. These are everyday objects that encourage curiosity, spark conversations, and celebrate learning.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"1.25rem" }}>
          {CARDS.map((card, i) => (
            <motion.div key={card.label}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
              whileHover={{ y:-6 }}
              style={{ background:"rgba(255,255,255,0.05)", border:`1px solid ${C.borderDark}`, borderRadius:24, padding:"2.5rem 2rem", textAlign:"center", cursor:"default", transition:"all 0.3s ease" }}>
              <div style={{ fontSize:40, marginBottom:20 }}>{card.icon}</div>
              <h3 style={{ fontSize:20, fontWeight:700, color:C.textOnDark, letterSpacing:"-0.01em" }}>{card.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
