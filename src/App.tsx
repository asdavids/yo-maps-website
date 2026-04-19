import { Navigation } from './components/Navigation';
import { SplashScreen } from './components/SplashScreen';
import { AlbumCountdown } from './components/AlbumCountdown';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { VideoSection } from './components/VideoSection';
import { AwardsSection } from './components/AwardsSection';
import { PressSection } from './components/PressSection';
import { InstagramSection } from './components/InstagramSection';
import { TourSection } from './components/TourSection';
import { TourMapSection } from './components/TourMapSection';
import { GallerySection } from './components/GallerySection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MiniPlayer } from './components/MiniPlayer';

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <SplashScreen />
      <Navigation />
      <AlbumCountdown />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <VideoSection />
      <AwardsSection />
      <PressSection />
      <InstagramSection />
      <TourSection />
      <TourMapSection />
      <GallerySection />
      <NewsletterSection />
      <Footer />
      <FloatingWhatsApp />
      <MiniPlayer />
    </div>
  );
}
