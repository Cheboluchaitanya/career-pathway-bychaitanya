import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Search, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  showSearch?: boolean;
}

/**
 * Main layout component that provides consistent header, navigation and structure
 * across all pages of the Career Pathway Explorer
 */
export function Layout({ children, title, showBackButton = false, showSearch = false }: LayoutProps) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header with navigation */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and back button */}
            <div className="flex items-center gap-4">
              {showBackButton && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.history.back()}
                  className="hover:bg-primary-lighter"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-foreground">
                    Career Pathway Explorer
                  </h1>
                  {title && (
                    <p className="text-sm text-muted-foreground">
                      {title}
                    </p>
                  )}
                </div>
              </Link>
            </div>

            {/* Right side - Navigation and search */}
            <div className="flex items-center gap-3">
              {showSearch && (
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-muted"
                  onClick={() => {
                    // Navigate to search page or open search modal
                    window.location.href = "/search";
                  }}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Roles
                </Button>
              )}
              
              {location.pathname !== "/" && (
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:bg-primary-lighter"
                >
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Career Pathway Explorer - Helping engineering students in Andhra Pradesh & Telangana discover their ideal career paths
            </p>
            <p className="mt-2">
              Built with ❤️ for aspiring engineers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}