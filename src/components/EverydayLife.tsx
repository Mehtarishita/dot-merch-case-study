"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { C } from "@/lib/colors";

type GalleryItem = {
  src: string;
  label: string;
  bg: string;
  aspect: string;
};

const ITEMS: GalleryItem[] = [
  { src: "/images/gallery/journal-on-desk.svg",       label: "Connected Dots Journal",  bg: "#1a2138", aspect: "4/5" },
  { src: "/images/gallery/lamp-on-table.svg",          label: "Focus Lamp on desk",      bg: "#FFFBEB", aspect: "3/4" },
  { src: "/images/gallery/bottle-in-backpack.svg",     label: "Curiosity Bottle",        bg: "#EEF4EE", aspect: "1/1" },
  { src: "/images/gallery/tshirt-folded.svg",          label: "Curiosity Tee flatlay",   bg: "#F0EDE8", aspect: "4/3" },
  { src: "/images/gallery/clock-on-wall.svg",          label: "Story Clock on wall",     bg: "#F5F5F0", aspect: "3/4" },
  { src: "/images/gallery/tote-outdoors.svg",          label: "Story Tote outdoors",     bg: "#EDF2F7", aspect: "4/5" },
  { src: "/images/gallery/mug-beside-laptop.svg",      label: "Think Mug beside laptop", bg: "#F8F0E8", aspect: "1/1" },
  { src: "/images/gallery/plant-pot-books.svg",        label: "Curiosity Pot near books",bg: "#EEF5EE", aspect: "3/4" },
];

export default function EverydayLife() {
  return (
    <section id="gallery" style={{ padding: "7rem 2rem", background: C.bg }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ width: 8, height: 8, background: C.yellow, borderRadius: "50%" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textMuted }}>In Everyday Life</span>
          </div>
          <h2 style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 800, color: C.text, letterSpacing: "-0.04em" }}>
            Curiosity Lives<br />Everywhere
          </h2>
        </motion.div>

        {/* Masonry */}
        <div style={{ columns: "3 260px", gap: "1.25rem" }}>
          {ITEMS.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              style={{ breakInside: "avoid", marginBottom: "1.25rem" }}>
              <div
                style={{ background: item.bg, borderRadius: 20, aspectRatio: item.aspect, overflow: "hidden", position: "relative", transition: "transform 0.4s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.025)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient label */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem 1.25rem 1rem", background: "linear-gradient(to top, rgba(26,33,56,0.55) 0%, transparent 100%)" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(248,247,244,0.9)", letterSpacing: "0.03em" }}>
                    {item.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
