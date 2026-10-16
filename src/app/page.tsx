import HeroSection from "../components/hero";
import SolutionSection from "../components/solution";
import ChallengeSection from "../components/challenge";
import DemoSection from "../components/demo";
import FAQSection from "../components/faq";
import ScreenshotsSection from "../components/screenshots";
import ContactSection from "../components/contact";
import WhatsAppButton from "../components/whatsapp-button";
import RealFarmsSection from "../components/real-farms";

export default function Home() {
  return (
    <>
      <main id="top" className="relative min-h-screen overflow-x-hidden">
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <DemoSection />
        <ScreenshotsSection />
        <RealFarmsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <WhatsAppButton />
    </>
  );
}
