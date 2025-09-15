import { ArrowRight, Smartphone, MessageCircle, Users, Shield } from "lucide-react"
import { HeroButton } from "@/components/ui/hero-button"

const CTASection = () => {
  const accessMethods = [
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Download our free app for Android and iOS"
    },
    {
      icon: MessageCircle,
      title: "SMS & Voice",
      description: "Call or text even with basic phones"
    },
    {
      icon: Users,
      title: "ASHA Worker",
      description: "Get help through your local health worker"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white text-center mb-16 animate-scale-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your Health Journey Today
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of Indians who trust CareConnect AI for their healthcare needs. 
            Get instant health guidance in your language, anytime, anywhere.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/10 p-4 rounded-lg">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">100% Free</div>
              <div className="text-sm opacity-90">No hidden charges</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">12+ Languages</div>
              <div className="text-sm opacity-90">In your mother tongue</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <MessageCircle className="w-8 h-8 mx-auto mb-2" />
              <div className="font-semibold">24/7 Available</div>
              <div className="text-sm opacity-90">Anytime support</div>
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HeroButton 
              variant="secondary" 
              size="xl" 
              className="bg-white text-primary hover:bg-gray-100 group"
            >
              Start Chatting Now
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </HeroButton>
            <HeroButton 
              variant="outline" 
              size="xl" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Download App
            </HeroButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Government Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>2.3M+ Users Trust Us</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>WHO Guidelines Compliant</span>
            </div>
          </div>
        </div>

        {/* How to Get Started */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Multiple Ways to Access CareConnect AI
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you - we're accessible on every device and platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {accessMethods.map((method, index) => (
              <div 
                key={index}
                className="healthcare-card p-6 text-center hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{method.title}</h4>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <button className="text-primary font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Information */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-6 text-center animate-fade-in-up">
          <h4 className="text-lg font-semibold text-red-800 mb-2">
            🚨 Medical Emergency?
          </h4>
          <p className="text-red-700 mb-4">
            For life-threatening emergencies, call <strong>108</strong> (National Emergency Number) immediately. 
            CareConnect AI is for health guidance and non-emergency situations.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Emergency Contacts
          </button>
        </div>

        {/* Final Encouragement */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Healthcare is a Right, Not a Privilege
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            CareConnect AI believes everyone deserves access to quality healthcare guidance, 
            regardless of location, language, or economic status. Join us in making healthcare truly universal.
          </p>
          <HeroButton variant="primary" size="lg" className="group">
            Begin Your Health Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </HeroButton>
        </div>
      </div>
    </section>
  )
}

export default CTASection