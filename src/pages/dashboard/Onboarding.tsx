import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  User, 
  Users, 
  Target,
  Sparkles,
  Calendar,
  Trophy
} from "lucide-react";

const socialPlatforms = [
  { id: 'tiktok', name: 'TikTok', icon: '📱', followers: 'Followers' },
  { id: 'instagram', name: 'Instagram', icon: '📷', followers: 'Followers' },
  { id: 'twitter', name: 'X (Twitter)', icon: '🐦', followers: 'Followers' },
  { id: 'facebook', name: 'Facebook', icon: '👥', followers: 'Followers' },
  { id: 'linkedin', name: 'LinkedIn', icon: '💼', followers: 'Connections' },
  { id: 'youtube', name: 'YouTube', icon: '🎥', followers: 'Subscribers' },
  { id: 'pinterest', name: 'Pinterest', icon: '📌', followers: 'Followers' },
  { id: 'reddit', name: 'Reddit', icon: '🤖', followers: 'Karma' },
  { id: 'snapchat', name: 'Snapchat', icon: '👻', followers: 'Friends' },
  { id: 'quora', name: 'Quora', icon: '❓', followers: 'Followers' },
  { id: 'whatsapp', name: 'WhatsApp Business', icon: '💬', followers: 'Contacts' },
  { id: 'threads', name: 'Threads', icon: '🧵', followers: 'Followers' },
  { id: 'other', name: 'Other', icon: '➕', followers: 'Followers' }
];

const niches = [
  "🌍 Lifestyle", "👗 Fashion", "💎 Luxury", "✈️ Travel", "📅 Daily routines", 
  "🎨 Aesthetic vlogs", "🏠 Home decor", "💼 Business & Money", "🚀 Entrepreneurship", 
  "💪 Hustle culture", "💰 Side hustles", "📦 Dropshipping/Amazon FBA", "📈 Digital marketing", 
  "💻 Freelancing", "💡 Motivation & Mindset", "📝 Quotes", "🧠 Self-discipline", 
  "🏆 Success stories", "🌅 Morning routines", "✨ Law of attraction", "🎯 Goal setting", 
  "📈 Personal Branding", "🎬 Behind the scenes", "📱 A day in my life", "🔨 Building in public", 
  "👑 Influencer tips", "💬 Storytelling & Relatability", "🎭 POV content", "🎪 Real-life situations", 
  "💔 First-person emotional hooks", "🐦 Tweet-to-reel ideas", "❤️ Relationships & Emotions", 
  "💕 Dating tips", "🚩 Red flags / Green flags", "💔 Breakups", "👫 Friendship dynamics", 
  "⚠️ Toxic relationships", "💅 Beauty & Skincare", "💄 Makeup tutorials", "🧴 Skincare routines", 
  "✨ Transformation videos", "⭐ Product reviews", "🧠 Mental Health & Wellness", "😰 Anxiety/depression content", 
  "📔 Journaling", "🛋️ Therapy-inspired captions", "🧘 Mindfulness", "🔮 Spirituality & Affirmations", 
  "🌟 Daily affirmations", "♈ Zodiac/astrology", "🎯 Manifestation", "⚡ Energy shifts", 
  "🏋️ Fitness & Health", "💪 Gym routines", "⚖️ Weight loss journeys", "🥗 Meal prep", 
  "🔥 Fitness motivation", "👶 Parenting & Family", "👼 Baby hacks", "👩‍👧‍👦 Mom content", 
  "👨‍👩‍👧‍👦 Family vlogs", "😅 Honest parenting POVs", "💻 Tech & AI", "🛠️ Tools of the day", 
  "🤖 AI tips", "💻 Coding/laptop lifestyle", "📊 Productivity hacks", "✨ Education / Value-Driven", 
  "💡 Tips and hacks", "📚 Life lessons", "🎓 Tutorials", "⏰ Productivity", "🔥 Viral Trends & Entertainment", 
  "🏆 Challenges", "🎵 Duets/remixes", "🎶 Trending audio", "😂 Meme adaptations"
];

interface OnboardingData {
  names: string[];
  selectedPlatforms: string[];
  platformDetails: Record<string, { handle: string; followers: string }>;
  selectedNiches: string[];
  customNiche: string;
  customPlatform: string;
}

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    names: [''],
    selectedPlatforms: [],
    platformDetails: {},
    selectedNiches: [],
    customNiche: '',
    customPlatform: ''
  });
  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const addName = () => {
    setData(prev => ({ ...prev, names: [...prev.names, ''] }));
  };

  const updateName = (index: number, value: string) => {
    setData(prev => ({
      ...prev,
      names: prev.names.map((name, i) => i === index ? value : name)
    }));
  };

  const removeName = (index: number) => {
    if (data.names.length > 1) {
      setData(prev => ({
        ...prev,
        names: prev.names.filter((_, i) => i !== index)
      }));
    }
  };

  const togglePlatform = (platformId: string) => {
    setData(prev => ({
      ...prev,
      selectedPlatforms: prev.selectedPlatforms.includes(platformId)
        ? prev.selectedPlatforms.filter(id => id !== platformId)
        : [...prev.selectedPlatforms, platformId]
    }));
  };

  const updatePlatformDetail = (platformId: string, field: 'handle' | 'followers', value: string) => {
    setData(prev => ({
      ...prev,
      platformDetails: {
        ...prev.platformDetails,
        [platformId]: {
          ...prev.platformDetails[platformId],
          [field]: value
        }
      }
    }));
  };

  const toggleNiche = (niche: string) => {
    setData(prev => ({
      ...prev,
      selectedNiches: prev.selectedNiches.includes(niche)
        ? prev.selectedNiches.filter(n => n !== niche)
        : [...prev.selectedNiches, niche]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return data.names.filter(name => name.trim()).length >= 1;
      case 2:
        return data.selectedPlatforms.length > 0;
      case 3:
        return true; // Platform details are optional
      case 4:
        return data.selectedNiches.length > 0;
      default:
        return false;
    }
  };

  const handleFinish = () => {
    toast({
      title: "Welcome to Viby! 🎉",
      description: "Your account has been set up successfully. Let's start creating amazing content!",
    });
    
    // Redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl glass-card">
        <CardHeader className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Viby
            </span>
            <Badge variant="secondary" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              Setup
            </Badge>
          </div>
          
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </p>
          </div>

          {step === 1 && (
            <>
              <CardTitle className="text-2xl font-bold">What should we call you?</CardTitle>
              <CardDescription>
                Add at least one name. You can add multiple names if you manage different brands.
              </CardDescription>
            </>
          )}

          {step === 2 && (
            <>
              <CardTitle className="text-2xl font-bold">Select your platforms</CardTitle>
              <CardDescription>
                Choose the social media platforms where you create content. You can change these later.
              </CardDescription>
            </>
          )}

          {step === 3 && (
            <>
              <CardTitle className="text-2xl font-bold">Platform details</CardTitle>
              <CardDescription>
                Add your handles and follower counts to personalize your experience. All fields are optional.
              </CardDescription>
            </>
          )}

          {step === 4 && (
            <>
              <CardTitle className="text-2xl font-bold">Your content niches</CardTitle>
              <CardDescription>
                Select the topics you create content about. This helps us generate better suggestions.
              </CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent>
          {/* Step 1: Names */}
          {step === 1 && (
            <div className="space-y-4">
              {data.names.map((name, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="flex-1">
                    <Label htmlFor={`name-${index}`}>
                      {index === 0 ? 'Primary Name' : `Name ${index + 1}`}
                    </Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id={`name-${index}`}
                        value={name}
                        onChange={(e) => updateName(index, e.target.value)}
                        placeholder="Enter your name or brand"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeName(index)}
                      className="mt-6"
                    >
                      ✕
                    </Button>
                  )}
                </div>
              ))}
              
              {data.names.length < 5 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={addName}
                  className="w-full"
                >
                  Add Another Name
                </Button>
              )}
            </div>
          )}

          {/* Step 2: Platform Selection */}
          {step === 2 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {socialPlatforms.map((platform) => (
                <div
                  key={platform.id}
                  className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-md ${
                    data.selectedPlatforms.includes(platform.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-border'
                  }`}
                  onClick={() => togglePlatform(platform.id)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{platform.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{platform.name}</p>
                    </div>
                    <Checkbox 
                      checked={data.selectedPlatforms.includes(platform.id)}
                      onChange={() => {}}
                    />
                  </div>
                  
                  {platform.id === 'other' && data.selectedPlatforms.includes('other') && (
                    <Input
                      value={data.customPlatform}
                      onChange={(e) => setData(prev => ({ ...prev, customPlatform: e.target.value }))}
                      placeholder="Enter platform name"
                      className="mt-3"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Platform Details */}
          {step === 3 && (
            <div className="space-y-6">
              {data.selectedPlatforms.map((platformId) => {
                const platform = socialPlatforms.find(p => p.id === platformId);
                if (!platform) return null;
                
                return (
                  <Card key={platformId}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <span className="text-xl">{platform.icon}</span>
                        <span>{platform.id === 'other' ? data.customPlatform : platform.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label>Handle/Username (optional)</Label>
                        <Input
                          value={data.platformDetails[platformId]?.handle || ''}
                          onChange={(e) => updatePlatformDetail(platformId, 'handle', e.target.value)}
                          placeholder="@yourusername"
                        />
                      </div>
                      <div>
                        <Label>{platform.followers} Count (optional)</Label>
                        <Input
                          value={data.platformDetails[platformId]?.followers || ''}
                          onChange={(e) => updatePlatformDetail(platformId, 'followers', e.target.value)}
                          placeholder="e.g., 10K, 1M, 500"
                          type="text"
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Step 4: Niches */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-80 overflow-y-auto">
                {niches.map((niche) => (
                  <div
                    key={niche}
                    className={`cursor-pointer rounded-lg border-2 p-3 transition-all hover:shadow-sm ${
                      data.selectedNiches.includes(niche)
                        ? 'border-primary bg-primary/5'
                        : 'border-border'
                    }`}
                    onClick={() => toggleNiche(niche)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{niche}</span>
                      <Checkbox 
                        checked={data.selectedNiches.includes(niche)}
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <Label>Custom Niche (optional)</Label>
                <Input
                  value={data.customNiche}
                  onChange={(e) => setData(prev => ({ ...prev, customNiche: e.target.value }))}
                  placeholder="Enter your custom niche..."
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {step < totalSteps ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleFinish}
                disabled={!canProceed()}
                className="bg-gradient-primary hover:opacity-90"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Complete Setup
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}