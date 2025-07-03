import { Button } from "@/components/ui/button";
import { Check, Star, Crown } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Instagram Influencer",
    content: "Viby's captions are next-level! They perfectly capture my vibe and my engagement has increased by 40%.",
    rating: 5,
    avatar: "👩🏻‍💼"
  },
  {
    name: "Marcus Williams",
    role: "Small Business Owner",
    content: "Saves me hours of brainstorming. The captions are always on-brand and professional.",
    rating: 5,
    avatar: "👨🏽‍💼"
  },
  {
    name: "Aisha Patel",
    role: "Content Creator",
    content: "So easy to use, and the captions are always on point! My TikTok views have tripled.",
    rating: 5,
    avatar: "👩🏽‍🎨"
  }
];

export const PricingSection = () => {
  return (
    <>
      {/* Pricing */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No subscriptions, no hidden fees. Pay only for what you use.
            </p>
          </div>
          
          <div className="bg-gradient-primary p-1 rounded-3xl max-w-md mx-auto animate-scale-in">
            <div className="bg-background rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Crown className="h-8 w-8 text-primary mr-2" />
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl md:text-6xl font-bold text-foreground mb-2">
                  $1
                </div>
                <div className="text-muted-foreground">
                  = 10 Premium Captions
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 text-left">
                {[
                  "AI-powered caption generation",
                  "Multiple platform optimization", 
                  "Custom tone & style options",
                  "Hashtag suggestions included",
                  "MPESA & crypto payments"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="glow" size="xl" className="w-full">
                Get Started Now
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Secure payments via PayHero (MPESA) & NowPayments (Crypto)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Loved by <span className="bg-gradient-primary bg-clip-text text-transparent">Creators</span> Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of content creators who are already growing their audience with Viby
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-card-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};