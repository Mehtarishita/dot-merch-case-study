"use client";

import { useState } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import MerchandiseGallery from "@/components/MerchandiseGallery";
import QRFeature from "@/components/QRFeature";
import FooterDisclaimer from "@/components/FooterDisclaimer";

export default function Home() {
  const [bannerHeight, setBannerHeight] = useState(48);

  return (
    <>
      {/* Announcement banner - sticky, dismissible */}
      <AnnouncementBanner onHeightChange={setBannerHeight} />

      {/* Navbar offset by banner height */}
      <div style={{ paddingTop: bannerHeight }}>
        <Navbar />
      </div>

      <main>
        <HeroSection />
        <QRFeature />
        <MerchandiseGallery />
        <Featured />
      </main>

      {/* Footer disclaimer */}
      <FooterDisclaimer />
    </>
  );
}
