import { Users, Building, BarChart3, Shield, Globe, Heart } from "lucide-react"

const Community = () => {
  const partnerships = [
    {
      icon: Users,
      title: "ASHA Worker Network",
      description: "Integrated with 25,000+ ASHA workers across rural India for on-ground healthcare support",
      features: ["Digital training modules", "Real-time patient referrals", "Health data collection tools"]
    },
    {
      icon: Building,
      title: "Government Programs",
      description: "Aligned with National Health Programs including Ayushman Bharat and National Health Mission",
      features: ["ABDM integration", "Policy compliance", "Data security standards"]
    },
    {
      icon: BarChart3,
      title: "Health Analytics Dashboard",
      description: "Comprehensive dashboards for health officials to monitor community health trends",
      features: ["Real-time health monitoring", "Disease outbreak alerts", "Resource optimization"]
    }
  ]

  const achievements = [
    {
      icon: Globe,
      number: "28",
      label: "States Covered",
      description: "Active deployment across major Indian states"
    },
    {
      icon: Users,
      number: "50K+",
      label: "Healthcare Workers",
      description: "Doctors, nurses, and ASHA workers using the platform"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Data Secure",
      description: "Compliant with Indian health data regulations"
    },
    {
      icon: Heart,
      number: "95%",
      label: "Accuracy Rate",
      description: "AI-powered health recommendations accuracy"
    }
  ]

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Community & Government Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Working together with healthcare workers, government programs, and local communities to strengthen India's healthcare system
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="healthcare-card p-6 text-center animate-scale-in hover:shadow-feature transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{achievement.label}</div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Partnerships */}
        <div className="space-y-8">
          {partnerships.map((partnership, index) => (
            <div 
              key={index}
              className="healthcare-card p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Icon and Title */}
                <div>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-4">
                    <partnership.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{partnership.title}</h3>
                  <p className="text-muted-foreground">{partnership.description}</p>
                </div>

                {/* Features */}
                <div className="lg:col-span-2">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partnership.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="bg-muted/50 p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-success rounded-full" />
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Government Compliance Section */}
        <div className="mt-20 bg-gradient-subtle p-8 rounded-2xl animate-scale-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Government Compliance & Trust</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CareConnect AI meets all regulatory requirements and security standards set by the Government of India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "ABDM Compliant", subtitle: "Ayushman Bharat Digital Mission certified" },
              { title: "Data Protection", subtitle: "Follows Indian health data privacy laws" },
              { title: "WHO Guidelines", subtitle: "Evidence-based medical recommendations" },
              { title: "ISO Certified", subtitle: "International security standards" }
            ].map((compliance, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-card text-center">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{compliance.title}</h4>
                <p className="text-sm text-muted-foreground">{compliance.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action for Healthcare Workers */}
        <div className="mt-16 bg-gradient-hero p-8 rounded-2xl text-white text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">Join the Healthcare Revolution</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Healthcare workers, government officials, and NGOs - partner with us to expand healthcare access across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Partner With Us
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Partnership Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community