
import { Link, useLocation } from "react-router-dom";
import { Home, Info, FileText, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-xl text-primary">
          <Link to="/" className="flex items-center gap-2">Flow</Link>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                to="/"
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/") && "bg-accent text-accent-foreground"
                )}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link
                to="/about"
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/about") && "bg-accent text-accent-foreground"
                )}
              >
                <Info className="w-4 h-4 mr-2" />
                About
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link
                to="/assessment"
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/assessment") && "bg-accent text-accent-foreground"
                )}
              >
                <FileText className="w-4 h-4 mr-2" />
                Assessment
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link
                to="/resources"
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive("/resources") && "bg-accent text-accent-foreground"
                )}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Resources
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="hidden md:flex gap-4">
          <Link
            to="/profile"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden md:inline-flex"
            )}
          >
            Profile
          </Link>
          <Link
            to="/tracker"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden md:inline-flex"
            )}
          >
            Tracker
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
