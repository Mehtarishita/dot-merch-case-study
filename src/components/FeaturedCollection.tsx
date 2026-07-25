"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";
import ProductModal from "./ProductModal";
import { C } from "@/lib/colors";

const CATEGORIES = ["All", "Apparel", "Accessories", "Stationery", "Lifestyle"];

const PRODUCT_BG: Record<string, string> = {
  hoodie: "#EEF0F5",
  "oversized-tee": "#F0EDE8",
  notebook: "#FFF8E7",
  tote: "#EDF2F7",
  bottle: "#EEF4EE",
  cap: "#F5F0F5",
  sleeve: "#F0EEF8",
  stickers: "#FDF5E0",
  bookmark: "#EFF5F0",
  journal: "#F8EFEF",
};

const PRODUCT_EMOJI: Record<string, string> = {
  hoodie: "🧥",
  "oversized-tee": "👕",
  notebook: "📒",
  tote: "👜",
  bottle: "🫙",
  cap: "🧢",
  sleeve: "💼",
  stickers: "🌟",
  bookmark: "📎",
  journal: "📖",
};

export default function FeaturedCollection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? productsData : productsData.filter(p => p.category === activeCategory);
  const selectedIndex = productsData.findIndex(p => p.id === selectedId);
  const selectedProduct = selectedId ? productsData[selectedIndex] : null;

  const handleNavigate = (dir: "next" | "prev") => {
    let i = dir === "next" ? selectedIndex + 1 : selectedIndex - 1;
    if (i >= productsData.length) i = 0;
    if (i < 0) i = productsData.length - 1;
    setSelectedId(productsData[i].id);
  };

  return (
    <section id="collection" style={{ padding: "6rem 0 7rem", background: C.bg }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 8, height: 8, background: C.yellow, borderRadius: "50%" }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.textMuted }}>
              The Collection
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.035em", lineHeight: 1.1 }}>
              Featured Collection
            </h2>

            {/* Category pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 999,
                    border: activeCategory === cat ? `2px solid ${C.bgDark}` : `1.5px solid ${C.border}`,
                    background: activeCategory === cat ? C.bgDark : "transparent",
                    color: activeCategory === cat ? C.textOnDark : C.textMuted,
                    fontWeight: 600, fontSize: 14, cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = C.text; e.currentTarget.style.color = C.text; } }}
                  onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textMuted; } }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1.75rem" }}>
          {filtered.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              onClick={() => setSelectedId(product.id)}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                cursor: "pointer",
                background: C.card,
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${hoveredCard === product.id ? "#c8c4be" : C.border}`,
                boxShadow: hoveredCard === product.id ? "0 16px 48px rgba(26,33,56,0.1)" : "0 1px 8px rgba(26,33,56,0.04)",
                transform: hoveredCard === product.id ? "translateY(-6px)" : "translateY(0)",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {/* Product image area */}
              <div style={{
                background: PRODUCT_BG[product.id] || "#f0ede8",
                height: 220, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 80,
                transform: hoveredCard === product.id ? "scale(1.03)" : "scale(1)",
                transition: "transform 0.4s ease",
              }}>
                {PRODUCT_EMOJI[product.id] || "📦"}
              </div>

              {/* Card body */}
              <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent }}>
                  {product.category}
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: "6px 0 8px", letterSpacing: "-0.01em" }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.55, marginBottom: 16 }}>
                  {product.shortDescription}
                </p>
                <div style={{
                  fontSize: 14, fontWeight: 700, color: hoveredCard === product.id ? C.yellow : C.text,
                  display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s",
                }}>
                  View Design
                  <span style={{ transition: "transform 0.2s", display: "inline-block", transform: hoveredCard === product.id ? "translateX(4px)" : "translateX(0)" }}>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedId(null)} onNavigate={handleNavigate} />
    </section>
  );
}
