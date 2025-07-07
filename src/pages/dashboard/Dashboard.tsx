import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Zap, 
  Clock, 
  Users,
  Hash,
  PenTool,
  Lightbulb,
  MessageCircle,
  ArrowRight,
  BarChart3,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const quickActions = [
  {
    title: "Generate Hashtags",
    description: "Create trending hashtags for your content",
    icon: Hash,
    href: "/dashboard/hashtags",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Write Captions",
    description: "Craft engaging captions that convert",
    icon: PenTool,
    href: "/dashboard/captions",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Content Ideas",
    description: "Discover fresh content concepts",
    icon: Lightbulb,
    href: "/dashboard/ideas",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Chat with Viby",
    description: "Get instant AI assistance",
    icon: MessageCircle,
    href: "/dashboard/chat",
    color: "from-green-500 to-teal-500"
  }
];

const recentActivity = [
  { action: "Generated hashtags", platform: "Instagram", time: "2 hours ago", success: true },
  { action: "Created caption", platform: "TikTok", time: "5 hours ago", success: true },
  { action: "Content ideas", platform: "Twitter", time: "1 day ago", success: true },
  { action: "Script writing", platform: "YouTube", time: "2 days ago", success: false }
];

const stats = [
  { label: "Total Content Created", value: "1,247", change: "+12%", icon: PenTool },
  { label: "Credits Used", value: "453", change: "+5%", icon: Zap },
  { label: "Platforms Connected", value: "6", change: "0%", icon: Users },
  { label: "Success Rate", value: "94%", change: "+2%", icon: TrendingUp }
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Creator!</h1>
            <p className="text-muted-foreground">
              Ready to create some amazing content today? Let's make it happen!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="px-3 py-1">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-xs ${
                      stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {stat.change} from last week
                    </p>
                  </div>
                  <Icon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>
            Jump into your most-used tools and start creating
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} to={action.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {action.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Get Started
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your latest content creation activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.success ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.platform} • {activity.time}
                      </p>
                    </div>
                  </div>
                  <Badge variant={activity.success ? "secondary" : "destructive"}>
                    {activity.success ? "Success" : "Failed"}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4" asChild>
              <Link to="/dashboard/stats">
                View All Activity
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Usage Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              This Month's Usage
            </CardTitle>
            <CardDescription>
              Track your content creation progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Credits Used</span>
                <span>453 / 500</span>
              </div>
              <Progress value={90.6} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Content Created</span>
                <span>87 pieces</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Platforms Used</span>
                <span>6 / 8</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Pro Plan</span>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/dashboard/credits">
                    Upgrade
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}