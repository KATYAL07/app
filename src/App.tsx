import { HeroSection } from '@/sections/HeroSection';
import { AboutGrid } from '@/sections/AboutGrid';
import { ScrollExpansionMedia } from '@/sections/ScrollExpansionMedia';
import { OrbitalTimeline } from '@/sections/OrbitalTimeline';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section with scroll-driven animations */}
      <HeroSection />
      
      {/* About Grid - Glassmorphic cards */}
      <AboutGrid />
      
      {/* Scroll Expansion Media */}
      <ScrollExpansionMedia />
      
      {/* Radial Orbital Timeline */}
      <OrbitalTimeline />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
