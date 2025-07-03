import { Button } from "@/components/ui/button";
import { Zap, Smartphone, Globe, DollarSign, Upload, Palette, Sparkles } from "lucide-react";
import mockupImage from "@/assets/mockup-phones.jpg";

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Generate perfect captions in under 3 seconds with our advanced AI engine"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile-First Design",
    description: "Built for creators on the go. Seamless experience across all devices"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Multi-Platform Support",
    description: "Optimized captions for Instagram, TikTok, Twitter, LinkedIn, and more"
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Affordable Pricing",
    description: "Just $1 for 10 high-quality captions. Pay via MPESA or crypto"
  }
];

const steps = [
  {
    icon: <Upload className="h-12 w-12" />,
    title: "Upload & Describe",
    description: "Upload your image or describe your content mood"
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "Choose Your Vibe",
    description: "Select from funny, professional, trendy, or custom tones"
  },
  {
    icon: <Sparkles className="h-12 w-12" />,
    title: "Get Perfect Captions",
    description: "Receive tailored captions ready to boost engagement"
  }
];

export const FeatureSection = () => {
  return (
    <>
      {/* How It Works */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How <span className="bg-gradient-primary bg-clip-text text-transparent">Viby</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to transform your content into engaging social media posts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Mockup Image */}
          <div className="text-center animate-scale-in">
            <img 
              src={mockupImage} 
              alt="Viby Mobile Interface Mockup" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Viby</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to supercharge your social media presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-card rounded-2xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};