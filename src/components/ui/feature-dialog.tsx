import * as React from "react";
import { X, CheckCircle, ArrowRight, Globe, Mic, Bell, Stethoscope, Users, Wifi, Brain, Database } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeatureDialogProps {
  children: React.ReactNode;
  feature: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    color: string;
  };
}

const featureDetails: Record<string, {
  longDescription: string;
  benefits: string[];
  useCases: string[];
  techHighlights: string[];
}> = {
  "Multilingual Support": {
    longDescription: "CareConnect AI breaks down language barriers in healthcare by supporting 12+ Indian languages including Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, and Urdu. Our advanced NLP technology ensures accurate medical translation and culturally appropriate health guidance.",
    benefits: [
      "Native language healthcare guidance",
      "Cultural context awareness",
      "Voice recognition in regional languages",
      "Real-time translation accuracy"
    ],
    useCases: [
      "Rural patients consulting in their mother tongue",
      "Elderly users comfortable with regional languages",
      "Emergency situations requiring quick communication",
      "Preventive care education in local dialects"
    ],
    techHighlights: [
      "Advanced NLP for medical terminology",
      "Dialect recognition technology",
      "Cultural health practices integration",
      "Voice-to-text in multiple languages"
    ]
  },
  "Voice & SMS Access": {
    longDescription: "Accessibility is at the heart of CareConnect AI. Our platform works on any device - from smartphones to basic feature phones. Users can access healthcare guidance through voice calls, SMS, and even USSD codes, ensuring no one is left behind in India's digital health revolution.",
    benefits: [
      "Works on any phone type",
      "No internet required for basic features",
      "Voice-based interaction",
      "SMS-based health tips and reminders"
    ],
    useCases: [
      "Remote villages with poor internet",
      "Elderly users with basic phones",
      "Emergency health queries via SMS",
      "Agricultural workers in the field"
    ],
    techHighlights: [
      "USSD gateway integration",
      "Voice AI with medical knowledge",
      "SMS-based symptom checker",
      "Offline-first architecture"
    ]
  },
  "Smart Health Reminders": {
    longDescription: "Never miss important health milestones with our intelligent reminder system. CareConnect AI tracks vaccination schedules, medication timings, health checkups, and seasonal health advisories, adapting to your family's unique health needs and local health patterns.",
    benefits: [
      "Personalized medication schedules",
      "Family vaccination tracking",
      "Seasonal health alerts",
      "Chronic condition management"
    ],
    useCases: [
      "Diabetes medication reminders",
      "Child vaccination schedules",
      "Hypertension monitoring alerts",
      "Seasonal disease prevention"
    ],
    techHighlights: [
      "AI-powered scheduling",
      "Family health profile integration",
      "Local disease pattern analysis",
      "Smart notification delivery"
    ]
  },
  "AI Health Triage": {
    longDescription: "Our sophisticated AI triage system analyzes symptoms, medical history, and risk factors to provide intelligent health guidance. It determines urgency levels, suggests appropriate care pathways, and helps users make informed decisions about when to seek professional medical attention.",
    benefits: [
      "Accurate symptom assessment",
      "Risk stratification",
      "Care pathway guidance",
      "Emergency detection"
    ],
    useCases: [
      "Fever assessment in children",
      "Chest pain evaluation",
      "Pregnancy-related concerns",
      "Mental health screening"
    ],
    techHighlights: [
      "Machine learning symptom analysis",
      "Medical knowledge graph",
      "Risk prediction algorithms",
      "Integration with medical databases"
    ]
  },
  "Family Health Profiles": {
    longDescription: "Manage comprehensive health records for your entire family with age-appropriate guidance and personalized health insights. Our system understands the unique health needs of different age groups and provides tailored recommendations for children, adults, and elderly family members.",
    benefits: [
      "Multi-generational health tracking",
      "Age-specific health guidance",
      "Family medical history analysis",
      "Shared care coordination"
    ],
    useCases: [
      "Tracking growth milestones in children",
      "Managing elderly health conditions",
      "Family genetic risk assessment",
      "Coordinated preventive care"
    ],
    techHighlights: [
      "Secure health data encryption",
      "Family relationship mapping",
      "Age-based health algorithms",
      "Privacy-preserving analytics"
    ]
  },
  "Offline Support": {
    longDescription: "Healthcare guidance shouldn't depend on internet connectivity. CareConnect AI stores essential health information locally and provides critical health guidance even in areas with poor or no internet connectivity, ensuring continuous access to healthcare support.",
    benefits: [
      "Essential health info available offline",
      "Local data synchronization",
      "Emergency protocols accessible",
      "Reduced data usage"
    ],
    useCases: [
      "Remote area health consultations",
      "Natural disaster scenarios",
      "Data-limited environments",
      "Emergency first aid guidance"
    ],
    techHighlights: [
      "Progressive web app technology",
      "Local database caching",
      "Sync-when-connected architecture",
      "Offline AI inference"
    ]
  },
  "AI Health Coach": {
    longDescription: "Your personal AI health coach provides continuous wellness guidance, lifestyle recommendations, and chronic disease management support. It learns from your health patterns, preferences, and goals to deliver personalized health improvement plans that fit your lifestyle.",
    benefits: [
      "Personalized wellness plans",
      "Lifestyle modification guidance",
      "Chronic disease support",
      "Preventive health strategies"
    ],
    useCases: [
      "Weight management programs",
      "Diabetes lifestyle coaching",
      "Stress management techniques",
      "Exercise and nutrition planning"
    ],
    techHighlights: [
      "Behavioral change algorithms",
      "Lifestyle pattern analysis",
      "Goal tracking and motivation",
      "Integration with wearable devices"
    ]
  },
  "ABDM Integration": {
    longDescription: "Seamlessly integrated with India's Ayushman Bharat Digital Mission (ABDM), CareConnect AI ensures your health records are part of the national digital health ecosystem. This enables continuity of care, reduces duplicate tests, and provides healthcare providers with comprehensive health history.",
    benefits: [
      "Unified health record system",
      "Healthcare provider integration",
      "Reduced duplicate procedures",
      "National health data standards"
    ],
    useCases: [
      "Hospital visit record linking",
      "Prescription history access",
      "Insurance claim processing",
      "Specialist referral coordination"
    ],
    techHighlights: [
      "ABDM API integration",
      "Health ID management",
      "Interoperability standards",
      "Secure data exchange protocols"
    ]
  }
};

export function FeatureDialog({ children, feature }: FeatureDialogProps) {
  const details = featureDetails[feature.title];
  
  const getIconBg = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-gradient-primary";
      case "secondary":
        return "bg-gradient-secondary";
      case "healthcare-blue":
        return "bg-healthcare-blue";
      case "healthcare-green":
        return "bg-healthcare-green";
      default:
        return "bg-gradient-primary";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="glassmorphism-strong max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 ${getIconBg(feature.color)} rounded-xl flex items-center justify-center`}>
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                {feature.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-lg">
                {feature.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Detailed Description */}
          <div className="glassmorphism-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-foreground mb-3">About This Feature</h3>
            <p className="text-muted-foreground leading-relaxed">
              {details?.longDescription}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-healthcare-green" />
                Key Benefits
              </h3>
              <ul className="space-y-2">
                {details?.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glassmorphism-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-healthcare-blue" />
                Use Cases
              </h3>
              <ul className="space-y-2">
                {details?.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Highlights */}
          <div className="glassmorphism-card p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Technology Highlights
            </h3>
            <div className="flex flex-wrap gap-2">
              {details?.techHighlights.map((tech, index) => (
                <Badge key={index} variant="secondary" className="glassmorphism-button">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glassmorphism-card p-6 rounded-xl text-center bg-gradient-subtle">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Ready to Experience {feature.title}?
            </h3>
            <p className="text-muted-foreground mb-4">
              Join millions of Indians who trust CareConnect AI for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="healthcare-button-primary">
                Try This Feature
              </Button>
              <Button variant="outline" className="glassmorphism-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}