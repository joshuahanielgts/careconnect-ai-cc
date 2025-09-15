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
import { DataInitializer } from "@/components/DataInitializer"

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
        <section className="py-12 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <DataInitializer />
            </div>
          </div>
        </section>
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
