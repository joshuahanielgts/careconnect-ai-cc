import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
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
              <span className="healthcare-gradient-text">Powerful Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how CareConnect AI revolutionizes healthcare access with cutting-edge features designed for everyone.
            </p>
          </div>
          
          <FeaturesGrid />
          
          <div className="glass-card p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience These Features?</h2>
            <p className="text-muted-foreground mb-6">
              Start your health journey with CareConnect AI today and experience healthcare like never before.
            </p>
            <Link
              to="/chatbot"
              className="healthcare-button-primary inline-flex items-center gap-2"
            >
              Try CareConnect AI Now
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;