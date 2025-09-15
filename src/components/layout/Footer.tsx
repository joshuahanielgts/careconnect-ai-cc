import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Shield, Award, CheckCircle } from "lucide-react"

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Impact Stories", href: "#testimonials" },
        { name: "Community", href: "#community" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    },
    {
      title: "For Healthcare",
      links: [
        { name: "ASHA Workers", href: "#" },
        { name: "Healthcare Providers", href: "#" },
        { name: "Government Programs", href: "#" },
        { name: "NGO Partnerships", href: "#" },
        { name: "Research & Data", href: "#" },
        { name: "Training Resources", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "User Guide", href: "#" },
        { name: "Language Support", href: "#" },
        { name: "Accessibility", href: "#" },
        { name: "Contact Support", href: "#" },
        { name: "Report Issue", href: "#" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  const complianceBadges = [
    { icon: Shield, text: "ABDM Certified" },
    { icon: Award, text: "ISO 27001" },
    { icon: CheckCircle, text: "WHO Compliant" },
    { icon: Shield, text: "Data Protected" }
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-background">CareConnect AI</span>
              </div>
              
              <p className="text-background/80 mb-6 leading-relaxed">
                Bridging healthcare gaps across India with AI-powered guidance that's accessible, 
                accurate, and available in your language.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-background/80">support@careconnect.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-background/80">+91 1800-XXX-CARE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-background/80">New Delhi, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5 text-background" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-background mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-background/80 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="border-t border-background/20 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-background mb-4">Trusted & Compliant</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {complianceBadges.map((badge, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 bg-background/10 p-3 rounded-lg">
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-background/90">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 CareConnect AI. All rights reserved. Built with ❤️ for India's health.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Powered By */}
          <div className="text-center mt-6 pt-6 border-t border-background/20">
            <p className="text-background/60 text-sm">
              Powered by <span className="text-primary font-semibold">Code Commandos</span> 
              {" "}• Making healthcare accessible for all Indians
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer