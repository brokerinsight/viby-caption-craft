import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary-glow/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-glass-border rounded-full px-4 py-2 mb-6 text-sm text-white">
            <Sparkles className="h-4 w-4" />
            Join Early Access
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">Social Media</span>?
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Be among the first to experience AI-powered caption generation. Sign up for early access and get exclusive updates.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-background/10 backdrop-blur-sm border-glass-border text-white placeholder-white/60 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="group">
              Join Waitlist
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          
          <div className="flex items-center justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Early access perks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No spam, ever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};