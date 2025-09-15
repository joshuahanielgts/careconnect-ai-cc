import { AlertTriangle, CheckCircle, MapPin, Clock, Users, Smartphone } from "lucide-react"
import challengesImage from "@/assets/healthcare-challenges.jpg"

const ProblemSolution = () => {
  const problems = [
    {
      icon: MapPin,
      title: "Limited Access",
      description: "1 doctor per 1,500 people in rural areas"
    },
    {
      icon: Clock,
      title: "Long Wait Times",
      description: "Average 3-hour travel to nearest healthcare facility"
    },
    {
      icon: Users,
      title: "Language Barriers",
      description: "Medical advice only available in English/Hindi"
    }
  ]

  const solutions = [
    {
      icon: Smartphone,
      title: "Instant Access",
      description: "24/7 AI-powered health guidance on any device"
    },
    {
      icon: CheckCircle,
      title: "Quick Responses",
      description: "Get health advice in under 30 seconds"
    },
    {
      icon: Users,
      title: "Local Languages",
      description: "Support for 12+ Indian languages with voice"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bridging the Healthcare Gap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming healthcare access across rural and urban India with AI-powered solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-warning" />
                <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
              </div>
              <img
                src={challengesImage}
                alt="Healthcare challenges in rural India"
                className="w-full h-64 object-cover rounded-lg shadow-card mb-6"
              />
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="healthcare-card p-6 border-l-4 border-l-warning">
                  <div className="flex items-start space-x-4">
                    <problem.icon className="w-6 h-6 text-warning mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="animate-slide-in-right">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-8 h-8 text-success" />
                <h3 className="text-2xl font-bold text-foreground">Our Solution</h3>
              </div>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="healthcare-card p-6 border-l-4 border-l-success hover:shadow-elevated transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Metrics */}
            <div className="mt-8 bg-gradient-primary p-6 rounded-lg text-white">
              <h4 className="font-semibold mb-4">Impact Metrics</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm opacity-90">Faster Access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-sm opacity-90">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution