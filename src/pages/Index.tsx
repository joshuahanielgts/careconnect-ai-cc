import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ProblemSolution from "@/components/sections/ProblemSolution"
import FeaturesGrid from "@/components/sections/FeaturesGrid"
import ImpactSection from "@/components/sections/ImpactSection"
import HowItWorks from "@/components/sections/HowItWorks"
import ChatDemo from "@/components/sections/ChatDemo"
import Community from "@/components/sections/Community"
import Testimonials from "@/components/sections/Testimonials"
import CTASection from "@/components/sections/CTASection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <FeaturesGrid />
        <ImpactSection />
        <HowItWorks />
        <ChatDemo />
        <Community />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
