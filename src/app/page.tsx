import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ThreeStepStrip from '@/components/ThreeStepStrip';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import TrustStrip from '@/components/TrustStrip';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/20 selection:text-accent">
      <NavBar />
      <Hero />
      <ThreeStepStrip />
      <FeatureGrid />
      <HowItWorks />
      <TrustStrip />
      <LeadCaptureForm />
      <FAQSection />
      <Footer />
    </main>
  );
}
