import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* About Hero Section */}
      <section className="py-20 md:py-24 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            About Viby
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're on a mission to empower creators with AI-powered tools that make content creation effortless and engaging.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Viby, we believe every creator deserves tools that amplify their voice. Our AI-powered caption generator helps you craft compelling content that resonates with your audience, saving you time while boosting engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  AI-Powered
                </h3>
                <p className="text-muted-foreground">
                  Cutting-edge AI technology that understands context and creates personalized captions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  Creator-Focused
                </h3>
                <p className="text-muted-foreground">
                  Built by creators, for creators. We understand your needs and challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  Lightning Fast
                </h3>
                <p className="text-muted-foreground">
                  Generate scroll-stopping captions in seconds, not hours.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  Community Driven
                </h3>
                <p className="text-muted-foreground">
                  Your feedback shapes our roadmap. We're building this together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
          </div>
          
          <Card className="p-8 md:p-12">
            <CardContent className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Viby was born from a simple frustration: spending hours crafting the perfect social media caption when we could have been creating more content. As creators ourselves, we knew there had to be a better way.
              </p>
              <p className="text-lg leading-relaxed">
                We combined our passion for technology with our understanding of social media to create an AI that doesn't just generate text—it understands context, tone, and what makes content engaging.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Viby serves creators worldwide, from individual influencers to global brands, helping them connect with their audiences through compelling, authentic captions that drive real engagement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;