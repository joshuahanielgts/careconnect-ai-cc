import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorks from "@/components/sections/HowItWorks";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <Toaster />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="healthcare-gradient-text">How It Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience healthcare transformation in just three simple steps. CareConnect AI makes quality healthcare accessible to everyone.
            </p>
          </div>
          
          <HowItWorks />
          
          <div className="glass-card p-8 mt-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Simple. Smart. Effective.</h2>
                <p className="text-muted-foreground mb-6">
                  Our AI-powered system is designed to be intuitive for users of all backgrounds. Whether you're tech-savvy or new to digital health, CareConnect AI guides you every step of the way.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ No technical knowledge required</li>
                  <li>✓ Available in multiple languages</li>
                  <li>✓ Works on any device</li>
                  <li>✓ 24/7 availability</li>
                </ul>
              </div>
              <div className="text-center">
                <Link
                  to="/chatbot"
                  className="healthcare-button-primary inline-flex items-center gap-2"
                >
                  Start Your Health Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;