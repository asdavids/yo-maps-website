import { Navigation } from './components/Navigation';
import { AlbumCountdown } from './components/AlbumCountdown';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { TourSection } from './components/TourSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Yo Maps — Official Website
export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <AlbumCountdown />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <TourSection />
      <GallerySection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
