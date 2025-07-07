import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Hash, 
  PenTool, 
  HelpCircle, 
  Lightbulb, 
  FileText, 
  TrendingUp, 
  MessageCircle, 
  Heart, 
  Settings, 
  BarChart3, 
  CreditCard,
  ChevronLeft,
  Menu,
  Zap,
  Crown
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    title: "Core Features",
    items: [
      {
        title: "Trending Hashtags",
        href: "/dashboard/hashtags",
        icon: Hash,
        description: "Generate viral hashtags"
      },
      {
        title: "Caption Generator",
        href: "/dashboard/captions",
        icon: PenTool,
        description: "Create engaging captions"
      },
      {
        title: "Problem Solver",
        href: "/dashboard/solver",
        icon: HelpCircle,
        description: "Get expert advice"
      },
      {
        title: "Content Ideas",
        href: "/dashboard/ideas",
        icon: Lightbulb,
        description: "Discover fresh concepts"
      },
      {
        title: "Script Writing",
        href: "/dashboard/scripts",
        icon: FileText,
        description: "Write compelling scripts"
      },
      {
        title: "Trending Topics",
        href: "/dashboard/trending",
        icon: TrendingUp,
        description: "Stay on top of trends"
      }
    ]
  },
  {
    title: "AI Assistant",
    items: [
      {
        title: "Chat with Viby",
        href: "/dashboard/chat",
        icon: MessageCircle,
        description: "General AI assistance"
      },
      {
        title: "Therapy Session",
        href: "/dashboard/therapy",
        icon: Heart,
        description: "Mental wellness support",
        premium: true
      }
    ]
  },
  {
    title: "Account",
    items: [
      {
        title: "Statistics",
        href: "/dashboard/stats",
        icon: BarChart3,
        description: "Usage analytics"
      },
      {
        title: "Credits & Billing",
        href: "/dashboard/credits",
        icon: CreditCard,
        description: "Manage your credits"
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
        description: "Account preferences"
      }
    ]
  }
];

export function DashboardSidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation();
  const [credits] = useState(47); // Mock credits

  return (
    <div className={cn(
      "flex flex-col h-full bg-card border-r border-border transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Viby
            </span>
            <Badge variant="secondary" className="text-xs">
              <Zap className="w-3 h-3 mr-1" />
              AI
            </Badge>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8"
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Credits Display */}
      {!collapsed && (
        <div className="p-4 border-b border-border">
          <div className="bg-gradient-primary rounded-lg p-3 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Credits</p>
                <p className="text-2xl font-bold">{credits}</p>
              </div>
              <CreditCard className="h-6 w-6 opacity-80" />
            </div>
            <Button
              size="sm"
              variant="secondary"
              className="w-full mt-2 bg-white/20 hover:bg-white/30 text-white border-0"
              asChild
            >
              <Link to="/dashboard/credits">
                Add Credits
              </Link>
            </Button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-2 space-y-1">
          {navigationItems.map((section) => (
            <div key={section.title}>
              {!collapsed && (
                <div className="px-3 py-2">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {section.title}
                  </h3>
                </div>
              )}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground group",
                        isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
                        collapsed && "justify-center px-2"
                      )}
                      title={collapsed ? item.title : undefined}
                    >
                      <Icon className={cn("h-4 w-4 shrink-0", isActive && "text-primary-foreground")} />
                      {!collapsed && (
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="truncate">{item.title}</span>
                            {item.premium && (
                              <Crown className="h-3 w-3 text-yellow-500 ml-1" />
                            )}
                          </div>
                          <p className={cn(
                            "text-xs text-muted-foreground truncate",
                            isActive && "text-primary-foreground/80"
                          )}>
                            {item.description}
                          </p>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
              {!collapsed && <div className="h-4" />}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-medium">
              U
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">User Name</p>
              <p className="text-xs text-muted-foreground">Pro Plan</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}