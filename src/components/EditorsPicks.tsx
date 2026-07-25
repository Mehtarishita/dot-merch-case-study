"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { C } from "@/lib/colors";
import productsData from "@/data/products.json";
import ProductModal from "./ProductModal";

type Product = typeof productsData[number];

const PICKS = ["journal", "lamp", "curiosity-tee", "bottle"];

const PRODUCT_BG: Record<string, string> = {
  "journal": "#FFF8E7", "lamp": "#FFFBEB", "curiosity-tee": "#F0EDE8", "bottle": "#EEF4EE",
};

export default function EditorsPicks() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const picks = PICKS.map(id => productsData.find(p => p.id === id)!).filter(Boolean);
  const idx = selected ? productsData.findIndex(p => p.id === selected.id) : -1;
  const navigate = (dir: "next"|"prev") => {
    let i = dir==="next" ? idx+1 : idx-1;
    if(i>=productsData.length) i=0; if(i<0) i=productsData.length-1;
    setSelected(productsData[i]);
  };

  return (
    <section id="featured" style={{ padding:"7rem 2rem", background:C.bgAlt }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:"5rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
            <div style={{ width:8, height:8, background:C.yellow, borderRadius:"50%" }} />
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.textMuted }}>Editor's Picks</span>
          </div>
          <h2 style={{ fontSize:"clamp(2.2rem,4.5vw,3.4rem)", fontWeight:800, color:C.text, letterSpacing:"-0.04em" }}>
            Standout Pieces
          </h2>
        </motion.div>

        <div style={{ display:"flex", flexDirection:"column", gap:"6rem" }}>
          {picks.map((product, i) => {
            const isEven = i % 2 === 0;
            const hov = hoveredId === product.id;
            return (
              <motion.div key={product.id}
                initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
                style={{ display:"grid", gap:"4rem", alignItems:"center" }}
                className="picks-row">
                {/* Image */}
                <div className={isEven ? "picks-img-first" : "picks-img-last"}
                  style={{ background: PRODUCT_BG[product.id] || "#f0ede8", borderRadius: 28, minHeight: 400, transition: "transform 0.5s ease", transform: hov ? "scale(1.02)" : "scale(1)", overflow: "hidden", position: "relative" }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}>
                  <Image
                    src={`/images/products/${product.id}.svg`}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Text */}
                <div className={isEven ? "picks-text-last" : "picks-text-first"}>
                  <span style={{ fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.accent }}>{product.category}</span>
                  <h3 style={{ fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:800, color:C.text, letterSpacing:"-0.04em", margin:"12px 0 16px", lineHeight:1.1 }}>{product.name}</h3>
                  <p style={{ fontSize:18, color:C.textMuted, fontStyle:"italic", marginBottom:16, lineHeight:1.6 }}>{product.tagline}</p>
                  <p style={{ fontSize:15, color:C.textMuted, lineHeight:1.75, marginBottom:36, maxWidth:420 }}>{product.story.slice(0, 140)}…</p>
                  <button onClick={() => setSelected(product)}
                    style={{ background: C.bgDark, color: C.textOnDark, border:"none", padding:"14px 32px", borderRadius:999, fontWeight:700, fontSize:15, cursor:"pointer", transition:"all 0.25s" }}
                    onMouseEnter={e=>{ e.currentTarget.style.background=C.yellow; e.currentTarget.style.color=C.text; e.currentTarget.style.transform="translateY(-2px)"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.background=C.bgDark; e.currentTarget.style.color=C.textOnDark; e.currentTarget.style.transform="translateY(0)"; }}>
                    View Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} onNavigate={navigate} />

      <style>{`
        .picks-row { grid-template-columns: 1fr 1fr; }
        .picks-img-first { order: 1; } .picks-text-last { order: 2; }
        .picks-img-last { order: 2; } .picks-text-first { order: 1; }
        @media(max-width:768px){
          .picks-row { grid-template-columns: 1fr !important; }
          .picks-img-first,.picks-img-last,.picks-text-first,.picks-text-last { order: unset !important; }
        }
      `}</style>
    </section>
  );
}
