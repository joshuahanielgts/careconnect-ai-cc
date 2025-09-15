import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Village Khajuraho, Madhya Pradesh",
      role: "Mother of 2",
      quote: "CareConnect AI helped me understand my child's fever symptoms at 2 AM. The AI guided me through the right steps and told me when to visit the doctor. It's like having a doctor in my phone!",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Dr. Rajesh Kumar",
      location: "PHC Darbhanga, Bihar",
      role: "ASHA Worker",
      quote: "This AI tool has made my work so much easier. I can now help more families with accurate health guidance, and the referral system connects patients to the right care quickly.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sunita Devi",
      location: "Jaipur, Rajasthan",
      role: "Diabetes Patient",
      quote: "The diabetes management features are amazing. Daily reminders, diet suggestions in Hindi, and blood sugar tracking - everything I need to stay healthy is in one place.",
      rating: 5,
      avatar: "SD"
    },
    {
      name: "Ravi Patel",
      location: "Ahmedabad, Gujarat",
      role: "Elderly Care",
      quote: "As a senior citizen, I was worried about using technology. But CareConnect AI is so simple - I can just speak in Gujarati and get health advice. My family feels more secure now.",
      rating: 5,
      avatar: "RP"
    },
    {
      name: "ASHA Coordinator",
      location: "Kozhikode, Kerala",
      role: "Health Department",
      quote: "The community health dashboard gives us real-time insights into health trends. We can now prevent disease outbreaks and allocate resources more effectively.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Meera Singh",
      location: "Village Sonpur, Uttar Pradesh",
      role: "Pregnant Mother",
      quote: "During my pregnancy, CareConnect AI reminded me of all check-ups and vaccinations. The voice feature helped me even when I couldn't read properly. Both my baby and I are healthy!",
      rating: 5,
      avatar: "MS"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-warning fill-current' : 'text-muted-foreground'
        }`}
      />
    ))
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the millions of Indians whose lives have been transformed by accessible healthcare
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="healthcare-card p-6 animate-scale-in hover:shadow-feature transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary opacity-60" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-hero p-8 rounded-2xl text-white text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6">Trusted Across India</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2.3M+</div>
              <div className="text-sm opacity-90">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">850K+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
          </div>
        </div>

        {/* User Generated Content Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-6">Share Your Story</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Has CareConnect AI made a difference in your life? We'd love to hear your story and share it with others who could benefit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="healthcare-button-primary">
              Share Your Experience
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              View More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials