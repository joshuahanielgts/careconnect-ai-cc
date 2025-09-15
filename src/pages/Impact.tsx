import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImpactSection from "@/components/sections/ImpactSection";
import { ArrowLeft, Users, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Impact = () => {
  const impactStats = [
    {
      number: "10M+",
      label: "Lives Touched",
      description: "People across rural and urban India"
    },
    {
      number: "95%",
      label: "Accuracy Rate",
      description: "In health guidance and triage"
    },
    {
      number: "24/7",
      label: "Availability",
      description: "Round-the-clock health support"
    },
    {
      number: "50+",
      label: "Languages",
      description: "Supporting linguistic diversity"
    }
  ];

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
              <span className="healthcare-gradient-text">Our Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how CareConnect AI is transforming healthcare across India, making quality care accessible to everyone, everywhere.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
          
          <ImpactSection />

          {/* Call to Action */}
          <div className="glass-card p-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                <Users className="w-12 h-12 text-primary" />
                <Heart className="w-12 h-12 text-secondary" />
                <Shield className="w-12 h-12 text-success" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Join the Healthcare Revolution</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Be part of a movement that's democratizing healthcare access across India. Every interaction helps us serve communities better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/chatbot"
                  className="healthcare-button-primary inline-flex items-center gap-2"
                >
                  Experience CareConnect AI
                </Link>
                <Link
                  to="/community"
                  className="healthcare-button-secondary inline-flex items-center gap-2"
                >
                  Join Our Community
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

export default Impact;