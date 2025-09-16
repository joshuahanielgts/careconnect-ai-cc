import { 
  Globe, 
  Mic, 
  Bell, 
  Stethoscope, 
  Users, 
  Wifi, 
  Brain, 
  Database 
} from "lucide-react"
import { FeatureDialog } from "@/components/ui/feature-dialog"

const FeaturesGrid = () => {
  const features = [
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate in Hindi, Bengali, Tamil, Telugu, and 8+ other Indian languages with voice and text support.",
      color: "primary"
    },
    {
      icon: Mic,
      title: "Voice & SMS Access",
      description: "No internet? No problem. Access healthcare guidance via voice calls and SMS on any basic phone.",
      color: "secondary"
    },
    {
      icon: Bell,
      title: "Smart Health Reminders",
      description: "Personalized medication reminders, vaccination schedules, and preventive care alerts.",
      color: "healthcare-blue"
    },
    {
      icon: Stethoscope,
      title: "AI Health Triage",
      description: "Intelligent symptom assessment that guides you to the right level of care - home remedy or hospital.",
      color: "healthcare-green"
    },
    {
      icon: Users,
      title: "Family Health Profiles",
      description: "Manage health records for your entire family with age-appropriate guidance for children and elderly.",
      color: "primary"
    },
    {
      icon: Wifi,
      title: "Offline Support",
      description: "Access essential health information and guidance even without internet connectivity.",
      color: "secondary"
    },
    {
      icon: Brain,
      title: "AI Health Coach",
      description: "Personalized wellness plans, lifestyle recommendations, and chronic disease management support.",
      color: "healthcare-blue"
    },
    {
      icon: Database,
      title: "ABDM Integration",
      description: "Seamlessly connects with Ayushman Bharat Digital Mission for unified healthcare records.",
      color: "healthcare-green"
    }
  ]

  const getIconBg = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-gradient-primary"
      case "secondary":
        return "bg-gradient-secondary"
      case "healthcare-blue":
        return "bg-healthcare-blue"
      case "healthcare-green":
        return "bg-healthcare-green"
      default:
        return "bg-gradient-primary"
    }
  }

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for accessible, intelligent healthcare guidance designed for India's diverse needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureDialog key={index} feature={feature}>
              <div
                className="glassmorphism-feature p-6 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${getIconBg(feature.color)} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </div>
            </FeatureDialog>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-subtle p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Future of Healthcare?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join millions of Indians who are already using CareConnect AI for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="healthcare-button-primary">
                Try All Features Free
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View Feature Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid