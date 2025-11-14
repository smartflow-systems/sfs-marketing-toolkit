import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of users who are already building amazing experiences with ToolKit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2" data-testid="button-cta-signup">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" data-testid="button-cta-demo">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
