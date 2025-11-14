import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1" data-testid="link-home">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
              T
            </div>
            <span className="text-xl font-bold">ToolKit</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features">
            <a className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-features">
              Features
            </a>
          </Link>
          <Link href="#tools">
            <a className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-tools">
              Tools
            </a>
          </Link>
          <Link href="#pricing">
            <a className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-pricing">
              Pricing
            </a>
          </Link>
          <Link href="/dashboard">
            <a data-testid="link-dashboard">
              <Button variant="default">Get Started</Button>
            </a>
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-3">
          <Link href="#features">
            <a className="block py-2 text-sm font-medium" data-testid="link-features-mobile">
              Features
            </a>
          </Link>
          <Link href="#tools">
            <a className="block py-2 text-sm font-medium" data-testid="link-tools-mobile">
              Tools
            </a>
          </Link>
          <Link href="#pricing">
            <a className="block py-2 text-sm font-medium" data-testid="link-pricing-mobile">
              Pricing
            </a>
          </Link>
          <Link href="/dashboard">
            <a data-testid="link-dashboard-mobile">
              <Button variant="default" className="w-full">Get Started</Button>
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
