import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Community from "@/components/sections/Community";
import { ArrowLeft, Users, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityPage = () => {
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
              <span className="healthcare-gradient-text">Our Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of healthcare workers, government officials, and community members working together to transform healthcare in India.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">5,000+</div>
              <div className="text-lg font-semibold mb-1">Active Members</div>
              <div className="text-sm text-muted-foreground">Healthcare workers and volunteers</div>
            </div>
            <div className="glass-card p-6 text-center">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">100+</div>
              <div className="text-lg font-semibold mb-1">Partner Organizations</div>
              <div className="text-sm text-muted-foreground">NGOs, hospitals, and clinics</div>
            </div>
            <div className="glass-card p-6 text-center">
              <MessageCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-lg font-semibold mb-1">Community Support</div>
              <div className="text-sm text-muted-foreground">Always here to help</div>
            </div>
          </div>
          
          <Community />

          {/* Community Benefits */}
          <div className="glass-card p-8 mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Why Join Our Community?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">For Healthcare Workers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Access to cutting-edge AI tools</li>
                  <li>✓ Training and certification programs</li>
                  <li>✓ Network with peers nationwide</li>
                  <li>✓ Contribute to healthcare innovation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">For Community Members</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Free health guidance and support</li>
                  <li>✓ Educational health resources</li>
                  <li>✓ Connect with local health workers</li>
                  <li>✓ Participate in health initiatives</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                to="/chatbot"
                className="healthcare-button-primary inline-flex items-center gap-2"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityPage;