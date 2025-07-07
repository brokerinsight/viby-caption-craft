import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, ArrowRight, Play, SkipForward, Sparkles, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  href?: string;
  action?: string;
}

export default function Welcome() {
  const [userName] = useState("Creator"); // This would come from auth/onboarding
  const [showCelebration, setShowCelebration] = useState(false);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    {
      id: 'profile',
      title: 'Complete Your Profile',
      description: 'Add your names and brand information',
      completed: true,
      href: '/dashboard/settings',
      action: 'Edit Profile'
    },
    {
      id: 'platforms',
      title: 'Connect Social Platforms',
      description: 'Select and configure your social media accounts',
      completed: true,
      href: '/dashboard/settings',
      action: 'Manage Platforms'
    },
    {
      id: 'niches',
      title: 'Set Your Content Niches',
      description: 'Define your content categories and interests',
      completed: true,
      href: '/dashboard/settings',
      action: 'Update Niches'
    },
    {
      id: 'first-content',
      title: 'Create Your First Content',
      description: 'Generate your first hashtags or caption',
      completed: false,
      href: '/dashboard/hashtags',
      action: 'Start Creating'
    },
    {
      id: 'credits',
      title: 'Add Credits',
      description: 'Purchase credits to unlock unlimited creation',
      completed: false,
      href: '/dashboard/credits',
      action: 'Buy Credits'
    },
    {
      id: 'explore',
      title: 'Explore All Features',
      description: 'Try out our AI assistant and advanced tools',
      completed: false,
      href: '/dashboard/chat',
      action: 'Explore Now'
    }
  ]);

  const completedItems = checklist.filter(item => item.completed).length;
  const totalItems = checklist.length;
  const progress = (completedItems / totalItems) * 100;

  useEffect(() => {
    if (completedItems === totalItems && !showCelebration) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  }, [completedItems, totalItems, showCelebration]);

  const toggleItem = (id: string) => {
    setChecklist(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header with Animation */}
      <div className="text-center space-y-4 animate-fade-in">
        <div className="relative">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome to Viby, {userName}! 🎉
          </h1>
          {showCelebration && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-6xl animate-bounce">🎊</div>
            </div>
          )}
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          You're all set up and ready to create amazing content! Let's get you started with our powerful AI tools.
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="secondary" className="px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Account Created
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <Trophy className="w-4 h-4 mr-2" />
            Pro Features Unlocked
          </Badge>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Getting Started Checklist
              </CardTitle>
              <CardDescription>
                Complete these steps to get the most out of Viby
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                {completedItems}/{totalItems}
              </div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
            
            {progress === 100 && (
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-800 dark:text-green-200">
                    Congratulations! You've completed all setup steps.
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Checklist Items */}
      <div className="grid gap-4">
        {checklist.map((item, index) => (
          <Card 
            key={item.id} 
            className={`transition-all duration-300 hover:shadow-md ${
              item.completed ? 'bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`flex-shrink-0 transition-colors ${
                      item.completed ? 'text-green-600' : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    {item.completed ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <Circle className="h-6 w-6" />
                    )}
                  </button>
                  
                  <div>
                    <h3 className={`font-semibold ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {!item.completed && item.href && (
                  <Button size="sm" asChild>
                    <Link to={item.href}>
                      {item.action}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                )}
                
                {item.completed && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Complete
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Ready to Create?</CardTitle>
          <CardDescription>
            Jump into your most popular tools and start creating amazing content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button size="lg" className="h-20 flex-col space-y-2" asChild>
              <Link to="/dashboard/hashtags">
                <div className="text-2xl">🏷️</div>
                <div>
                  <div className="font-semibold">Generate Hashtags</div>
                  <div className="text-xs opacity-80">Get trending tags instantly</div>
                </div>
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="h-20 flex-col space-y-2" asChild>
              <Link to="/dashboard/captions">
                <div className="text-2xl">✍️</div>
                <div>
                  <div className="font-semibold">Create Caption</div>
                  <div className="text-xs opacity-80">Write engaging captions</div>
                </div>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tour Options */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-2">Take a Quick Tour</h3>
              <p className="text-sm text-muted-foreground">
                Learn how to use Viby's features with our interactive walkthrough
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard">
                  <SkipForward className="h-4 w-4 mr-2" />
                  Skip Tour
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/dashboard/tour">
                  <Play className="h-4 w-4 mr-2" />
                  Start Tour
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}