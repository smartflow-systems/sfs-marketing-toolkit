import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all cursor-pointer" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold" data-testid="text-feature-title">{title}</h3>
          <p className="text-muted-foreground" data-testid="text-feature-description">{description}</p>
        </div>
      </div>
    </Card>
  );
}
