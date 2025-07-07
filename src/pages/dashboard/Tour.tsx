import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  ArrowLeft, 
  X, 
  CheckCircle, 
  Hash, 
  PenTool, 
  MessageCircle, 
  Settings,
  CreditCard,
  BarChart3,
  Lightbulb,
  Zap,
  Target,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

interface TourStep {
  id: string;
  title: string;
  description: string;
  feature: string;
  icon: React.ComponentType<any>;
  href: string;
  tips: string[];
  action: string;
}

const tourSteps: TourStep[] = [
  {
    id: 'hashtags',
    title: 'Trending Hashtags Generator',
    description: 'Generate viral hashtags for any platform to boost your content reach',
    feature: 'Core Feature',
    icon: Hash,
    href: '/dashboard/hashtags',
    tips: [
      'Upload an image or describe your content',
      'Select your target platform',
      'Choose the mood and goal for your content',
      'Get instant hashtag suggestions'
    ],
    action: 'Try Hashtag Generator'
  },
  {
    id: 'captions',
    title: 'AI Caption Writer',
    description: 'Create engaging captions, titles, and descriptions that convert',
    feature: 'Core Feature', 
    icon: PenTool,
    href: '/dashboard/captions',
    tips: [
      'Choose between caption, title, or description',
      'Upload content or describe your idea',
      'Set the tone and goal for your content',
      'Get multiple variations to choose from'
    ],
    action: 'Create Your First Caption'
  },
  {
    id: 'chat',
    title: 'Chat with Viby AI',
    description: 'Get instant help, advice, and creative ideas from our AI assistant',
    feature: 'AI Assistant',
    icon: MessageCircle,
    href: '/dashboard/chat',
    tips: [
      'Ask any content creation questions',
      'Get platform-specific advice',
      'Brainstorm new content ideas',
      'Solve creative blocks instantly'
    ],
    action: 'Start Chatting'
  },
  {
    id: 'ideas',
    title: 'Content Ideas Generator',
    description: 'Never run out of content ideas with our AI-powered suggestion engine',
    feature: 'Core Feature',
    icon: Lightbulb,
    href: '/dashboard/ideas',
    tips: [
      'Select your platform and niche',
      'Get personalized content suggestions',
      'Transform ideas into scripts',
      'Stay ahead of trending topics'
    ],
    action: 'Get Content Ideas'
  },
  {
    id: 'stats',
    title: 'Usage Statistics',
    description: 'Track your content creation progress and optimize your strategy',
    feature: 'Analytics',
    icon: BarChart3,
    href: '/dashboard/stats',
    tips: [
      'Monitor your content creation patterns',
      'Track credit usage and efficiency',
      'Analyze your most successful content types',
      'Get insights to improve your strategy'
    ],
    action: 'View Your Stats'
  },
  {
    id: 'credits',
    title: 'Credits & Billing',
    description: 'Manage your credits and upgrade your plan for unlimited creation',
    feature: 'Account',
    icon: CreditCard,
    href: '/dashboard/credits',
    tips: [
      'Check your current credit balance',
      'Purchase additional credits easily',
      'Choose from flexible payment options',
      'Upgrade to Pro for premium features'
    ],
    action: 'Manage Credits'
  }
];

export default function Tour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();

  const step = tourSteps[currentStep];
  const progress = ((currentStep + 1) / tourSteps.length) * 100;

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTour();
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeTour = () => {
    setCompleted(true);
    toast({
      title: "Tour Complete! 🎉",
      description: "You're now ready to create amazing content with Viby!",
    });
  };

  const skipTour = () => {
    toast({
      title: "Tour Skipped",
      description: "You can always access help from the settings menu.",
    });
    window.location.href = '/dashboard';
  };

  if (completed) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <Card className="text-center glass-card">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-2">Tour Complete! 🎉</h2>
                <p className="text-muted-foreground">
                  You're now ready to create amazing content with Viby. Remember, you can always return to any feature from the sidebar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    <Target className="h-4 w-4 mr-2" />
                    Go to Dashboard
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/dashboard/hashtags">
                    <Zap className="h-4 w-4 mr-2" />
                    Start Creating
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Viby Feature Tour</h1>
          <p className="text-muted-foreground">
            Step {currentStep + 1} of {tourSteps.length}
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={skipTour}>
          <X className="h-4 w-4 mr-2" />
          Skip Tour
        </Button>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Current Step */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  {step.feature}
                </Badge>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Tips */}
          <div>
            <h3 className="font-semibold mb-3">How it works:</h3>
            <div className="grid gap-3">
              {step.tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-primary">{index + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link to={step.href}>
                <Play className="h-4 w-4 mr-2" />
                {step.action}
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={nextStep}>
              {currentStep === tourSteps.length - 1 ? 'Complete Tour' : 'Continue Tour'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={previousStep}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <div className="flex items-center space-x-1">
          {tourSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep 
                  ? 'bg-primary w-6' 
                  : index < currentStep 
                    ? 'bg-primary/60' 
                    : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextStep}
        >
          {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}