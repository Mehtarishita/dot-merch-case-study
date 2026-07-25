"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/colors";

const STEPS = [
  { icon:"🔬", title:"Research", desc:"Exploring Dot's story library for concepts worth wearing." },
  { icon:"✏️", title:"Sketch", desc:"Raw ideas hit paper. Nothing is too rough, nothing too simple." },
  { icon:"🎨", title:"Illustration", desc:"Concepts transformed into minimal, purposeful visuals." },
  { icon:"📦", title:"Prototype", desc:"First physical samples - tested for feel, quality, and meaning." },
  { icon:"✨", title:"Final Design", desc:"Approved, refined, and made ready for curious minds." },
];

export default function ProductTimeline() {
  return (
    <section style={{ padding:"7rem 2rem", background:C.bgDark, overflow:"hidden" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"5rem" }}>
          <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, color:C.textOnDark, letterSpacing:"-0.04em", marginBottom:14 }}>
            Product Timeline
          </h2>
          <p style={{ fontSize:17, color:"rgba(248,247,244,0.45)" }}>From a single question to a physical object.</p>
        </motion.div>

        <div style={{ position:"relative" }}>
          {/* Line */}
          <div className="tl-line" style={{ position:"absolute", top:40, left:"5%", right:"5%", height:2, background:`linear-gradient(to right, transparent, ${C.borderDark} 15%, ${C.borderDark} 85%, transparent)` }} />

          <div className="tl-row" style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", position:"relative", gap:"1rem" }}>
            {STEPS.map((step, i) => (
              <motion.div key={step.title}
                initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.12 }}
                style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", flex:1, zIndex:1 }}>
                <motion.div whileHover={{ scale:1.1, background:C.yellow }}
                  style={{ width:80, height:80, borderRadius:"50%", background:"rgba(255,255,255,0.07)", border:`2px solid ${C.borderDark}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, marginBottom:20, cursor:"default", transition:"all 0.3s ease" }}>
                  {step.icon}
                </motion.div>
                <h4 style={{ fontSize:14, fontWeight:700, color:C.textOnDark, marginBottom:8, letterSpacing:"0.02em" }}>{step.title}</h4>
                <p style={{ fontSize:12, color:"rgba(248,247,244,0.4)", lineHeight:1.6, maxWidth:120 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .tl-row { flex-direction: row; }
        .tl-line { display: block; }
        @media(max-width:640px) {
          .tl-row { flex-direction: column !important; align-items: flex-start !important; }
          .tl-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
