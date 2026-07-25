"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { C } from "@/lib/colors";
import productsData from "@/data/products.json";
import ProductModal from "./ProductModal";

type Product = typeof productsData[number];

// Map product id → image path in public/images/products/
const PRODUCT_IMG: Record<string, string> = {
  "puzzle":            "/images/products/puzzle.png",
  "calendar":          "/images/products/calendar.png",
  "curious-tee":       "/images/products/curious-tee.png",
  "growth-kit":        "/images/products/growth-kit.png",
  "focus-lamp":        "/images/products/focus-lamp.png",
  "connected-journal": "/images/products/connected-journal.png",
  "globe":             "/images/products/globe.png",
  "idea-folder":       "/images/products/idea-folder.png",
  "curiosity-bottle":  "/images/products/curiosity-bottle.png",
  "mug":               "/images/products/mug.png",
  "think-pad":         "/images/products/think-pad.png",
  "stickers":          "/images/products/stickers.png",
  "clock":             "/images/products/clock.png",
  "tote":              "/images/products/tote.png",
  "companion":         "/images/products/companion.png",
};

// Soft bg tints shown while image loads
const PRODUCT_BG: Record<string, string> = {
  "puzzle": "#F5F0F5", "calendar": "#FFF8E7", "curious-tee": "#F0EDE8",
  "growth-kit": "#EEF5EE", "focus-lamp": "#FFFBEB", "connected-journal": "#F5F8FF",
  "globe": "#EDF2F7", "idea-folder": "#F0EEF8", "curiosity-bottle": "#EEF4EE",
  "mug": "#F8F0E8", "think-pad": "#FDF5E0", "stickers": "#FDF5E0",
  "clock": "#F5F5F0", "tote": "#EDF2F7", "companion": "#F8EFEF",
};

export default function MerchandiseGallery() {
  const [selected, setSelected] = useState<Product | null>(null);

  const idx = selected ? productsData.findIndex(p => p.id === selected.id) : -1;
  const navigate = (dir: "next" | "prev") => {
    let i = dir === "next" ? idx + 1 : idx - 1;
    if (i >= productsData.length) i = 0;
    if (i < 0) i = productsData.length - 1;
    setSelected(productsData[i]);
  };

  return (
    <section id="collection" style={{ padding: "7rem 2rem", background: C.bg }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "4rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
            Explore Products
          </h2>
        </motion.div>

        {/* Grid - 2 cols on desktop, 1 on mobile */}
        <div className="merch-grid">
          {productsData.map((product, i) => {
            return (
              <motion.article key={product.id}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
                onClick={() => setSelected(product)}
                className="merch-card"
                style={{
                  cursor: "pointer", background: C.card, borderRadius: 20, overflow: "hidden",
                  border: `1px solid ${C.border}`,
                  transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
                  display: "flex", flexDirection: "column"
                }}>

                {/* Product image (Horizontal format) */}
                <div style={{ aspectRatio: "4/3", background: PRODUCT_BG[product.id] || "#f0ede8", position: "relative", overflow: "hidden" }} className="merch-img-container">
                  <Image
                    src={PRODUCT_IMG[product.id] || "/images/products/connected-journal.png"}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain", transition: "transform 0.45s ease" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="merch-img"
                  />
                </div>

                {/* Body */}
                <div style={{ padding: "1.75rem 2rem 2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, margin: "0 0 8px", letterSpacing: "-0.015em" }}>{product.name}</h3>
                  <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.6, marginBottom: 24, flexGrow: 1 }}>{product.tagline}</p>
                  
                  {/* Button */}
                  <div className="merch-btn" style={{ fontSize: 14, fontWeight: 700, color: C.text, display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s" }}>
                    View Design 
                    <span className="merch-arrow" style={{ transition: "transform 0.2s" }}>→</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} onNavigate={navigate} />

      <style>{`
        .merch-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .merch-card:hover {
          border-color: #ccc9c2 !important;
          box-shadow: 0 20px 60px rgba(26,33,56,0.1) !important;
          transform: translateY(-8px) !important;
        }

        .merch-card:hover .merch-img {
          transform: scale(1.05) !important;
        }

        .merch-card:hover .merch-btn {
          color: ${C.yellow} !important;
        }
        
        .merch-card:hover .merch-arrow {
          transform: translateX(4px) !important;
        }

        @media(max-width: 768px) {
          .merch-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
