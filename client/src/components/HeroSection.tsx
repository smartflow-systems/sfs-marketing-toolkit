import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/Dashboard_hero_image_af7281a0.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
                All Your Tools in
                <span className="text-primary"> One Platform</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Create forms, manage reviews, generate QR codes, build waitlists, and calculate anything. 
                Embed anywhere with just a few clicks.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" data-testid="button-get-started">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-view-demo">
                <Play className="h-5 w-5" />
                View Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1M+</div>
                <div className="text-sm text-muted-foreground">Tools Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border bg-card shadow-2xl">
              <img 
                src={heroImage} 
                alt="ToolKit Dashboard Interface"
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
