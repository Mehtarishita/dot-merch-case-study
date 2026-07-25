"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { C } from "@/lib/colors";
import { useState } from "react";
import { Globe, Smartphone, FileText, Bot, Rocket, TrendingUp, Leaf, HeartPulse, BookOpen } from "lucide-react";

type Product = {
  id: string; name: string; tagline: string; category: string;
  story: string; highlights: string[];
};

export default function ProductModal({ product, onClose, onNavigate }: {
  product: Product | null;
  onClose: () => void;
  onNavigate: (dir: "next" | "prev") => void;
}) {
  const [viewIdx, setViewIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Reset view when product changes
  if (!product) return null;

  // Define exact views for every product to prevent broken images
  const viewMap: Record<string, {label: string, key: string}[]> = {
    "puzzle": [
      { label: "Overview", key: "overview" },
      { label: "Article", key: "article" },
      { label: "Cross-word", key: "cross-word" },
      { label: "Front View", key: "front" },
      { label: "QR", key: "qr" }
    ],
    "curious-tee": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Back View", key: "back" },
      { label: "Side View", key: "side" },
      { label: "Print Close-up", key: "print" }
    ],
    "calendar": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Back View", key: "back" }
    ],
    "growth-kit": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Pen View", key: "pen" }
    ],
    "connected-journal": [
      { label: "Overview", key: "overview" },
      { label: "3D View", key: "3d" }
    ],
    "companion": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Back View", key: "back" }
    ],
    "focus-lamp": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Back View", key: "back" },
      { label: "Side View", key: "side" }
    ],
    "mug": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Back View", key: "back" },
      { label: "Top View", key: "top" }
    ],
    "curiosity-bottle": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" }
    ],
    "clock": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Back View", key: "back" }
    ],
    "think-pad": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Back View", key: "back" },
      { label: "Side View", key: "side" }
    ],
    "tote": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" },
      { label: "Back View", key: "back" }
    ],
    "stickers": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" }
    ],
    "globe": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" }
    ],
    "idea-folder": [
      { label: "Overview", key: "overview" },
      { label: "Front View", key: "front" }
    ]
  };

  const views = viewMap[product.id] || [{ label: "Overview", key: "overview" }];

  // Look for the specific view image
  // If viewIdx is out of bounds (e.g. navigating from a product with 4 views to one with 3), fallback to index 0 safely
  const safeIdx = viewIdx < views.length ? viewIdx : 0;
  const currentKey = views[safeIdx].key;
  const currentImg = `/images/products/${product.id}-${currentKey}.png`;
  const currentVid = `/images/products/${product.id}-${currentKey}.mp4`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <AnimatePresence>
      <motion.div key="overlay"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(13,17,32,0.85)", backdropFilter: "blur(12px)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>

        <motion.div key={product.id}
          initial={{ opacity: 0, scale: 0.93, y: 32 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={e => e.stopPropagation()}
          className="modal-inner"
          style={{ background: C.bg, borderRadius: 28, width: "100%", maxWidth: 1140, minHeight: "85vh", maxHeight: "98vh", overflowY: "auto", display: "grid", boxShadow: "0 40px 100px rgba(0,0,0,0.5)", border: `1px solid ${C.borderDark}` }}>

          {/* LEFT - Image Presentation */}
          <div className="modal-left" 
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
            
            {/* Soft background glow */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(255,199,44,0.08) 0%, transparent 70%)" }} />

            {/* Interactive Image Container */}
            <div 
              onClick={() => setIsZoomed(!isZoomed)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setIsZoomed(false)}
              style={{ 
                width: "100%", height: "100%", minHeight: 400, position: "relative", flexGrow: 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: isZoomed ? "zoom-out" : "zoom-in",
                overflow: "hidden",
                borderRadius: "28px 0 0 28px"
              }}
            >
              {/* Zoomable Image / Video */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  scale: isZoomed ? 3.5 : 1,
                }}
                style={{ 
                  width: "100%", height: "100%", position: "absolute", inset: 0,
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`
                }}
                transition={{ opacity: { duration: 0.5 }, scale: { type: "tween", ease: "easeOut", duration: 0.25 } }}
              >
                {currentKey === "3d" ? (
                  <video
                    key={currentVid}
                    src={currentVid}
                    autoPlay loop muted playsInline
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "1.5rem 1.5rem 5rem 1.5rem" }}
                  />
                ) : (
                  <Image
                    key={currentImg}
                    src={currentImg}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain", filter: isZoomed ? "none" : "drop-shadow(0 20px 30px rgba(0,0,0,0.3))", padding: "1.5rem 1.5rem 5rem 1.5rem" }}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized
                  />
                )}
              </motion.div>
            </div>

            {/* View Selection Buttons */}
            {views.length > 1 && (
              <div style={{ position: "absolute", bottom: 48, left: 0, right: 0, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", zIndex: 10 }}>
                {views.map((v, i) => (
                  <button key={v.key} onClick={() => setViewIdx(i)}
                    style={{ 
                      padding: "8px 16px", borderRadius: 999, 
                      border: `1px solid ${safeIdx === i ? C.yellow : C.borderDark}`, 
                      background: safeIdx === i ? "rgba(255,199,44,0.1)" : "rgba(255,255,255,0.02)", 
                      cursor: "pointer", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em",
                      color: safeIdx === i ? C.yellow : C.textMuted, transition: "all 0.2s" 
                    }}
                    onMouseEnter={e => { if (safeIdx !== i) e.currentTarget.style.color = C.text; }}
                    onMouseLeave={e => { if (safeIdx !== i) e.currentTarget.style.color = C.textMuted; }}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT - Content */}
          <div className="modal-right" style={{ padding: "2rem 2.5rem", display: "flex", flexDirection: "column", borderLeft: `1px solid ${C.borderDark}` }}>
            {/* Top bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: C.bgDark, background: C.yellow, padding: "6px 14px", borderRadius: 999 }}>
                {product.category}
              </span>
              <button onClick={onClose}
                style={{ width: 32, height: 32, borderRadius: "50%", border: `1px solid ${C.borderDark}`, background: "rgba(255,255,255,0.05)", cursor: "pointer", fontSize: 18, color: C.textMuted, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 300, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = C.text; e.currentTarget.style.color = C.bgDark; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = C.textMuted; }}>
                ×
              </button>
            </div>

            <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.02em", marginBottom: 4, lineHeight: 1.15 }}>
              {product.name}
            </h2>
            <p style={{ fontSize: 14, color: C.yellow, fontStyle: "italic", marginBottom: 16 }}>{product.tagline}</p>

            {product.id === "puzzle" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 0, marginBottom: "auto" }}>
                
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", border: `1px solid ${C.borderDark}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.textLight, fontSize: 9, background: "rgba(255,255,255,0.02)", marginTop: 2 }}>01</div>
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 2 }}>Real Dot Article</h4>
                    <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.35 }}>Every puzzle begins with a genuine, thought-provoking article curated from dot's finest stories.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", border: `1px solid ${C.borderDark}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.textLight, fontSize: 9, background: "rgba(255,255,255,0.02)", marginTop: 2 }}>02</div>
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 2 }}>Article-inspired Doodles</h4>
                    <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.35 }}>Hand-drawn illustrations bring the story to life, hiding clever visual easter eggs within the artwork.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", border: `1px solid ${C.borderDark}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.textLight, fontSize: 9, background: "rgba(255,255,255,0.02)", marginTop: 2 }}>03</div>
                  <div>
                    <h4 style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 2 }}>Story-based Crossword</h4>
                    <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.35 }}>Test your comprehension with a custom crossword puzzle derived entirely from the article text.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10, background: "rgba(255,199,44,0.08)", padding: 10, borderRadius: 10, border: `1px solid rgba(255,199,44,0.3)` }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: C.yellow, color: C.bgDark, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontWeight: 800, fontSize: 10, marginTop: 2 }}>04</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                      <h4 style={{ fontSize: 12, fontWeight: 800, color: C.text }}>Scan QR</h4>
                      <span style={{ fontSize: 8, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", background: C.yellow, color: C.bgDark, padding: "2px 6px", borderRadius: 999 }}>Continue Reading on Dot</span>
                    </div>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.35 }}>Scan the embedded QR code to seamlessly transition from print to digital. Read the full article and uncover the crossword answers at the end.</p>
                  </div>
                </div>

              </div>
            ) : (
              <>
                {/* Story */}
                <div style={{ paddingTop: 16, borderTop: `1px solid ${C.borderDark}`, marginBottom: 20 }}>
                  <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textMuted, marginBottom: 12 }}>Behind the Design</h4>
                  <p style={{ fontSize: 14, color: C.text, lineHeight: 1.6, opacity: 0.9 }}>{product.story}</p>
                </div>

                {/* Highlights */}
                <div style={{ paddingTop: 16, borderTop: `1px solid ${C.borderDark}`, marginBottom: product.id === "globe" ? 20 : "auto" }}>
                  <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textMuted, marginBottom: 14 }}>Highlights</h4>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
                    {product.highlights.map((h, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: C.text, fontWeight: 500, opacity: 0.9 }}>
                        <div style={{ width: 6, height: 6, background: C.yellow, borderRadius: "50%", flexShrink: 0 }} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Globe Custom Section */}
                {product.id === "globe" && (
                  <div style={{ background: "#E8DED1", borderRadius: 16, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 20, color: "#2B2A29", marginTop: "auto" }}>
                    
                    {/* How It Works */}
                    <div>
                      <h4 style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>How It Works</h4>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1 }}>
                          <Globe size={24} strokeWidth={1.5} style={{ marginBottom: 8 }} />
                          <div style={{ fontSize: 11, fontWeight: 800, marginBottom: 4 }}>1. Spin</div>
                          <div style={{ fontSize: 9, lineHeight: 1.3, opacity: 0.8 }}>Spin the globe to any country or region.</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", color: "rgba(0,0,0,0.2)", fontSize: 12 }}>→</div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1 }}>
                          <Smartphone size={24} strokeWidth={1.5} style={{ marginBottom: 8 }} />
                          <div style={{ fontSize: 11, fontWeight: 800, marginBottom: 4 }}>2. Scan</div>
                          <div style={{ fontSize: 9, lineHeight: 1.3, opacity: 0.8 }}>Scan the Dot QR on the base.</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", color: "rgba(0,0,0,0.2)", fontSize: 12 }}>→</div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1 }}>
                          <FileText size={24} strokeWidth={1.5} style={{ marginBottom: 8 }} />
                          <div style={{ fontSize: 11, fontWeight: 800, marginBottom: 4 }}>3. Discover</div>
                          <div style={{ fontSize: 9, lineHeight: 1.3, opacity: 0.8 }}>Get a new article from around the world.</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ height: 1, background: "rgba(0,0,0,0.1)" }} />

                    {/* What You'll Discover */}
                    <div>
                      <h4 style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>What You'll Discover</h4>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><Bot size={18} strokeWidth={1.5} /><span style={{ fontSize: 8, fontWeight: 700 }}>AI & TECH</span></div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><Rocket size={18} strokeWidth={1.5} /><span style={{ fontSize: 8, fontWeight: 700 }}>SPACE</span></div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><TrendingUp size={18} strokeWidth={1.5} /><span style={{ fontSize: 8, fontWeight: 700 }}>ECONOMY</span></div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><Leaf size={18} strokeWidth={1.5} /><span style={{ fontSize: 8, fontWeight: 700 }}>ENVIRON.</span></div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><HeartPulse size={18} strokeWidth={1.5} /><span style={{ fontSize: 8, fontWeight: 700 }}>HEALTH</span></div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}><BookOpen size={18} strokeWidth={1.5} /><span style={{ fontSize: 8, fontWeight: 700 }}>CULTURE</span></div>
                      </div>
                      <div style={{ textAlign: "center", fontSize: 10, fontWeight: 500, opacity: 0.8 }}>One scan. One new perspective. Every day.</div>
                    </div>

                  </div>
                )}
              </>
            )}

            {/* Navigation */}
            <div style={{ borderTop: `1px solid ${C.borderDark}`, paddingTop: 16, marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button onClick={() => { setViewIdx(0); onNavigate("prev"); }}
                style={{ background: "none", border: `1px solid ${C.borderDark}`, borderRadius: 999, padding: "10px 24px", cursor: "pointer", fontSize: 13, fontWeight: 600, color: C.textMuted, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.text; e.currentTarget.style.color = C.text; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderDark; e.currentTarget.style.color = C.textMuted; }}>
                ← Prev
              </button>
              <button onClick={() => { setViewIdx(0); onNavigate("next"); }}
                style={{ background: C.text, border: "none", borderRadius: 999, padding: "10px 24px", cursor: "pointer", fontSize: 13, fontWeight: 800, color: C.bgDark, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = C.yellow; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.text; }}>
                Next →
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .modal-inner { grid-template-columns: 1.3fr 1fr; }
        @media(max-width:1000px){
          .modal-inner { grid-template-columns: 1fr !important; }
          .modal-right { border-left: none !important; border-top: 1px solid ${C.borderDark}; }
        }
      `}</style>
    </AnimatePresence>
  );
}
