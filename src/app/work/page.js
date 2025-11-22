



// app/page.js
'use client';
import { useState } from 'react';
import EarthSection from '../../components/work/EarthSection';
import MusicVideoSection from '../../components/work/MusicVideoSection';
import VideoGallerySection from '../../components/work/VideoGallerySection';
import WorkGallerySection from '../../components/work/WorkGallerSection';
import Government from '../../components/work/Government';
import VideoMasonryGallery from '../../components/work/VideoMasonryGallerly';
import WorkNavbar from '../../components/work/WorkNavbar';
import GymReelsSection from '../../components/work/GymReelSection';
import FullScreenVideo from '../../components/work/FullScreenVideo';
import BTSGallery from '../../components/work/BTSGallery';
export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <EarthSection onComplete={() => setIntroComplete(true)} />

      <div style={{ height: introComplete ? '1vh' : '0vh' }} /> {/* Spacer for scroll */}

      {introComplete && (
        <div style={{ position: 'relative' }}>
          <WorkNavbar />
          <MusicVideoSection />
          <VideoGallerySection />
          <WorkGallerySection />
        <Government />
        <FullScreenVideo />
        <VideoMasonryGallery />
        <GymReelsSection />
        <BTSGallery />
        {/* <VideoCarousel /> */}
        </div>
      )}
    </div>
  );
}