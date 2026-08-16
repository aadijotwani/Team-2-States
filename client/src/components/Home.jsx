import Hero from './Hero';
import MapSection from './MapSection';
import WhySection from './WhySection';
import ArchitectureSection from './ArchitectureSection';
import ImpactSection from './ImpactSection';
import StrategySection from './StrategySection';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <MapSection />
      <WhySection />
      <ArchitectureSection />
      <ImpactSection />
      <StrategySection />
    </div>
  );
}
