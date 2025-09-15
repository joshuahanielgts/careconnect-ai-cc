import { MessageCircle, Search, Heart, ArrowDown, ArrowRight } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Ask Your Question",
      description: "Type, speak, or send SMS in your preferred language. Describe your symptoms or health concerns naturally.",
      features: ["Voice recognition in 12+ languages", "Simple text or voice input", "SMS support for basic phones"]
    },
    {
      number: "02", 
      icon: Search,
      title: "Get AI Guidance",
      description: "Our AI analyzes your input and provides personalized health guidance based on medical best practices.",
      features: ["Instant symptom assessment", "Evidence-based recommendations", "Risk level evaluation"]
    },
    {
      number: "03",
      icon: Heart,
      title: "Connect to Care",
      description: "Get connected to appropriate care - from home remedies to nearby hospitals or ASHA workers.",
      features: ["Local healthcare provider directory", "ASHA worker connections", "Emergency care routing"]
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How CareConnect AI Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get healthcare guidance in three simple steps - designed to be accessible for everyone
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Content */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Left Side - Icon and Number */}
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-elevated">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="bg-card p-3 rounded-lg shadow-card border border-border flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                        <span className="text-sm text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mb-12">
                  <div className="hidden lg:block">
                    <ArrowDown className="w-8 h-8 text-primary animate-pulse-gentle" />
                  </div>
                  <div className="lg:hidden">
                    <ArrowRight className="w-8 h-8 text-primary animate-pulse-gentle" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-20 bg-gradient-hero p-8 rounded-2xl text-white text-center animate-scale-in">
          <h3 className="text-2xl font-bold mb-4">See It in Action</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience how easy it is to get healthcare guidance with our interactive demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Try Interactive Demo
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Watch Video Tutorial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks