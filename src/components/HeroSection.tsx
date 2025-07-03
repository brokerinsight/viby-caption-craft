import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-viby.jpg";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-glow/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-glass-border rounded-full px-4 py-2 mb-6 text-sm text-white">
              <Sparkles className="h-4 w-4" />
              AI-Powered Caption Generation
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Create <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">Scroll-Stopping</span> Captions in Seconds
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your social media game with AI-powered captions that engage, inspire, and convert. Perfect for Instagram, TikTok, Twitter, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Try Viby Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Captions Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Happy Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm">User Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Viby AI Caption Generator Interface" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-glass rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};