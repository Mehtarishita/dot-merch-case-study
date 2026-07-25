"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { C } from "@/lib/colors";

const SYMBOLS = ["✦", "◎", "△", "○", "✧", "⬡", "◇", "⊕", "⋆", "▷", "☆", "◈", "❋", "⬘", "⟡"];

export default function DoodlesBackground() {
  const [items, setItems] = useState<{ id: number; char: string; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    setItems(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      char: SYMBOLS[i % SYMBOLS.length],
      x: Math.random() * 88 + 6,
      y: Math.random() * 88 + 6,
      size: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    })));
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {items.map(item => (
        <motion.span
          key={item.id}
          style={{ position: "absolute", left: `${item.x}%`, top: `${item.y}%`, fontSize: item.size, color: C.bgDark, opacity: 0.055, userSelect: "none", lineHeight: 1 }}
          animate={{ y: [0, -14, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8 + item.delay, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        >
          {item.char}
        </motion.span>
      ))}
    </div>
  );
}
