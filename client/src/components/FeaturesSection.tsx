import FeatureCard from "./FeatureCard";
import { FileText, Star, QrCode, Users, Calculator } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Dynamic Forms",
    description: "Create beautiful, responsive forms with real-time validation and custom fields."
  },
  {
    icon: Star,
    title: "Review System",
    description: "Collect and display customer reviews with star ratings and rich feedback."
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description: "Generate custom QR codes for URLs, contact info, and more in seconds."
  },
  {
    icon: Users,
    title: "Waitlist Management",
    description: "Build anticipation with waitlists that track positions and send notifications."
  },
  {
    icon: Calculator,
    title: "Smart Calculators",
    description: "Embed calculators for tips, loans, conversions, and custom calculations."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Five powerful tools, one simple platform. No coding required.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
