"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { C } from "@/lib/colors";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const STATS = [
  { value: 15, suffix: "+", label: "Products" },
  { value: 5, suffix: "", label: "Categories" },
  { value: 100, suffix: "%", label: "Story-Driven" },
  { value: 1, suffix: "", label: "Vision" },
];

export default function CollectionOverview() {
  return (
    <section style={{ padding: "6rem 2rem", background: C.bgDark }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:"center", marginBottom:"4.5rem" }}>
          <h2 style={{ fontSize:"clamp(2rem,4vw,3.4rem)", fontWeight:800, color:C.textOnDark, letterSpacing:"-0.04em", lineHeight:1.1, marginBottom:16 }}>
            The Complete<br />Merchandise Collection
          </h2>
          <p style={{ fontSize:17, color:"rgba(248,247,244,0.55)", maxWidth:480, margin:"0 auto" }}>
            Thoughtfully designed. Built around curiosity.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))", gap:"2px", borderRadius:20, overflow:"hidden", border:`1px solid ${C.borderDark}` }}>
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}
              style={{ padding:"3rem 2rem", background: i%2===0 ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)", textAlign:"center", borderRight: i<3 ? `1px solid ${C.borderDark}` : "none" }}>
              <div style={{ fontSize:"clamp(2.8rem,5vw,4rem)", fontWeight:800, color:C.yellow, letterSpacing:"-0.04em", lineHeight:1, marginBottom:12 }}>
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontSize:14, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(248,247,244,0.45)" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
