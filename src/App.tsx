import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { TourSection } from './components/TourSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';

// Yo Maps — Official Website
export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <TourSection />
      <GallerySection />
      <Footer />
    </div>
  );
}
