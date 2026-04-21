import { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { SplashScreen } from './components/SplashScreen';
import { AlbumCountdown } from './components/AlbumCountdown';
import { HeroSection } from './components/HeroSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MiniPlayer } from './components/MiniPlayer';

const AboutSection     = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const MusicSection     = lazy(() => import('./components/MusicSection').then(m => ({ default: m.MusicSection })));
const VideoSection     = lazy(() => import('./components/VideoSection').then(m => ({ default: m.VideoSection })));
const AwardsSection    = lazy(() => import('./components/AwardsSection').then(m => ({ default: m.AwardsSection })));
const PressSection     = lazy(() => import('./components/PressSection').then(m => ({ default: m.PressSection })));
const MerchSection     = lazy(() => import('./components/MerchSection').then(m => ({ default: m.MerchSection })));
const InstagramSection = lazy(() => import('./components/InstagramSection').then(m => ({ default: m.InstagramSection })));
const TourSection      = lazy(() => import('./components/TourSection').then(m => ({ default: m.TourSection })));
const TourMapSection   = lazy(() => import('./components/TourMapSection').then(m => ({ default: m.TourMapSection })));
const GallerySection   = lazy(() => import('./components/GallerySection').then(m => ({ default: m.GallerySection })));
const NewsletterSection = lazy(() => import('./components/NewsletterSection').then(m => ({ default: m.NewsletterSection })));
const Footer           = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

const SectionFallback = () => <div className="h-32 bg-black" />;

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <SplashScreen />
      <Navigation />
      <AlbumCountdown />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}><AboutSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><MusicSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><VideoSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><AwardsSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><PressSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><MerchSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><InstagramSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><TourSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><TourMapSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><GallerySection /></Suspense>
      <Suspense fallback={<SectionFallback />}><NewsletterSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      <FloatingWhatsApp />
      <MiniPlayer />
    </div>
  );
}
