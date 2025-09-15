import { Users, Stethoscope, Building2, TrendingUp, Clock, Heart } from "lucide-react"

const ImpactSection = () => {
  const impactGroups = [
    {
      icon: Users,
      title: "For Villagers & Families",
      subtitle: "Empowering rural communities with accessible healthcare",
      benefits: [
        "24/7 health guidance in local languages",
        "Reduce unnecessary hospital visits by 60%",
        "Early symptom detection and prevention",
        "Family health record management"
      ],
      stats: {
        number: "2.3M+",
        label: "Families Served"
      },
      color: "primary"
    },
    {
      icon: Stethoscope,
      title: "For Healthcare Workers",
      subtitle: "Supporting ASHA workers and medical professionals",
      benefits: [
        "AI-assisted patient triage and prioritization",
        "Real-time medical protocol updates",
        "Streamlined patient data collection",
        "Telemedicine consultation support"
      ],
      stats: {
        number: "15K+",
        label: "ASHA Workers Connected"
      },
      color: "secondary"
    },
    {
      icon: Building2,
      title: "For Government & NGOs",
      subtitle: "Data-driven insights for policy making",
      benefits: [
        "Real-time health trend monitoring",
        "Resource allocation optimization",
        "Disease outbreak early warning",
        "Healthcare access impact measurement"
      ],
      stats: {
        number: "450+",
        label: "Districts Covered"
      },
      color: "healthcare-blue"
    }
  ]

  const overallMetrics = [
    {
      icon: TrendingUp,
      number: "85%",
      label: "Faster Diagnosis",
      description: "Average time to initial health assessment"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Always Available",
      description: "Round-the-clock healthcare guidance"
    },
    {
      icon: Heart,
      number: "95%",
      label: "User Satisfaction",
      description: "Positive feedback from users across India"
    }
  ]

  const getGradientClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-gradient-primary"
      case "secondary":
        return "bg-gradient-secondary"
      case "healthcare-blue":
        return "bg-healthcare-blue"
      default:
        return "bg-gradient-primary"
    }
  }

  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforming Healthcare Access
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how CareConnect AI is making a real difference across rural and urban India
          </p>
        </div>

        {/* Overall Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {overallMetrics.map((metric, index) => (
            <div 
              key={index}
              className="healthcare-card p-8 text-center animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{metric.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Groups */}
        <div className="space-y-12">
          {impactGroups.map((group, index) => (
            <div 
              key={index}
              className="healthcare-card p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Header */}
                <div className="text-center lg:text-left">
                  <div className={`w-20 h-20 ${getGradientClass(group.color)} rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4`}>
                    <group.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{group.title}</h3>
                  <p className="text-muted-foreground mb-4">{group.subtitle}</p>
                  
                  {/* Stats */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{group.stats.number}</div>
                    <div className="text-sm text-muted-foreground">{group.stats.label}</div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="lg:col-span-2">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {group.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex}
                        className="flex items-start space-x-3 p-4 bg-background rounded-lg shadow-card hover:shadow-elevated transition-all duration-300"
                      >
                        <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story Highlight */}
        <div className="mt-20 bg-gradient-hero p-8 rounded-2xl text-white text-center animate-scale-in">
          <h3 className="text-2xl font-bold mb-4">Real Impact, Real Lives</h3>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            "CareConnect AI helped identify my diabetes symptoms early. The AI guided me to the right care, and now I'm managing my health better than ever." 
          </p>
          <div className="text-sm opacity-80">
            - Priya Sharma, Village Khajuraho, Madhya Pradesh
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">10M+</div>
              <div className="text-sm opacity-90">Lives Impacted</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">700+</div>
              <div className="text-sm opacity-90">Districts Reached</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection