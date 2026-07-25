"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "@/lib/colors";

const BANNER_KEY = "dot-banner-dismissed";

export default function AnnouncementBanner({ onHeightChange }: { onHeightChange: (h: number) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(BANNER_KEY);
    if (!dismissed) {
      setVisible(true);
      onHeightChange(48);
    }
  }, [onHeightChange]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(BANNER_KEY, "1");
    onHeightChange(0);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 48, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0,
            zIndex: 200,
            background: C.yellow,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{
            maxWidth: 1280, margin: "0 auto", padding: "0 2rem",
            width: "100%", display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "1rem",
          }}>
            {/* Content */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 22, height: 22, background: C.bgDark, borderRadius: "50%",
                fontSize: 11, flexShrink: 0,
              }}>🎯</span>
              <p style={{
                fontSize: 12, color: C.bgDark, fontWeight: 500,
                letterSpacing: "0.01em", lineHeight: 1.4,
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>
                <span style={{ fontWeight: 800 }}>Independent Concept Project</span>
                <span style={{ opacity: 0.8, marginLeft: 6 }}>
                  · Created for the Dot Strategy & Merchandise Design Challenge · Non-commercial showcase for evaluation only.
                </span>
              </p>
            </div>

            {/* Dismiss */}
            <button
              onClick={dismiss}
              aria-label="Dismiss banner"
              style={{
                background: "none", border: "none", cursor: "pointer",
                width: 28, height: 28, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.bgDark, fontSize: 16, fontWeight: 400,
                transition: "all 0.2s", flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "none"; }}
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
