import { ArrowRight, Play, Shield, Globe, Users } from "lucide-react"
import { HeroButton } from "@/components/ui/hero-button"
import heroImage from "@/assets/hero-healthcare-ai.jpg"

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            {/* Trust indicators */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>Government Approved</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Globe className="w-4 h-4" />
                <span>12+ Languages</span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Healthcare for{" "}
              <span className="healthcare-gradient-text">Everyone</span>,{" "}
              <span className="healthcare-gradient-text">Anywhere</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              AI-powered health guidance that bridges rural-urban healthcare gaps. 
              Get instant medical advice, health reminders, and care connections in your language.
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10M+</div>
                <div className="text-sm text-muted-foreground">People Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-healthcare-blue">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <HeroButton variant="primary" size="lg" className="group">
                Start Your Health Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </HeroButton>
              <HeroButton variant="outline" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </HeroButton>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Trusted by ASHA workers across India</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-xl opacity-20 blur-2xl" />
              <img
                src={heroImage}
                alt="AI-powered healthcare for rural and urban India"
                className="relative w-full h-auto rounded-xl shadow-elevated"
              />
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-card animate-pulse-gentle">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection