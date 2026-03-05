import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Services from '../components/Services';
import TargetAudience from '../components/TargetAudience';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustSection />
      <Services />
      <TargetAudience />
      <Process />
      <FinalCTA />
    </div>
  );
}
