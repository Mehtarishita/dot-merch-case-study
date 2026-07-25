"use client";

import Link from "next/link";
import { C } from "@/lib/colors";

const NAV_LINKS = ["#collection/Collection", "#featured/Featured", "#philosophy/About"];

export default function Footer() {
  return (
    <footer style={{ background: C.bg, borderTop:`1px solid ${C.border}`, padding:"5rem 2rem 3rem" }}>
      <div style={{ maxWidth:1280, margin:"0 auto" }}>
        <div style={{ display:"grid", gap:"3rem", marginBottom:"4rem" }} className="footer-grid">

          <div>
            <Link href="#home" style={{ display:"inline-flex", alignItems:"center", gap:8, textDecoration:"none", marginBottom:16 }}>
              <div style={{ width:10, height:10, background:C.yellow, borderRadius:"50%" }} />
              <span style={{ fontWeight:800, fontSize:22, color:C.text, letterSpacing:"-0.03em" }}>dot.</span>
            </Link>
            <p style={{ fontSize:15, color:C.textMuted, lineHeight:1.75, maxWidth:280 }}>
              An educational storytelling platform. Simple and Significant.
            </p>
          </div>

          <div>
            <h5 style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.textLight, marginBottom:20 }}>Explore</h5>
            {NAV_LINKS.map(item => {
              const [href, label] = item.split("/");
              return (
                <Link key={href} href={href}
                  style={{ display:"block", color:C.textMuted, textDecoration:"none", fontSize:15, fontWeight:500, marginBottom:12, transition:"color 0.2s" }}
                  onMouseEnter={e=>(e.currentTarget.style.color=C.text)}
                  onMouseLeave={e=>(e.currentTarget.style.color=C.textMuted)}>
                  {label}
                </Link>
              );
            })}
          </div>

          <div>
            <h5 style={{ fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:C.textLight, marginBottom:20 }}>Follow</h5>
            {["📸 Instagram", "💬 Twitter / X", "💼 LinkedIn", "🔗 Website"].map(item => (
              <Link key={item} href="#"
                style={{ display:"block", color:C.textMuted, textDecoration:"none", fontSize:15, fontWeight:500, marginBottom:12, transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color=C.text)}
                onMouseLeave={e=>(e.currentTarget.style.color=C.textMuted)}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:"2rem", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem", alignItems:"center" }}>
          <p style={{ fontSize:13, color:C.textLight }}>© {new Date().getFullYear()} Dot Education. A brand showcase - not a store.</p>
          <div style={{ display:"flex", gap:20 }}>
            {["Privacy Policy", "Contact"].map(l => (
              <Link key={l} href="#" style={{ fontSize:13, color:C.textLight, textDecoration:"none", transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color=C.text)}
                onMouseLeave={e=>(e.currentTarget.style.color=C.textLight)}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr; }
        @media(max-width:640px){ .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
