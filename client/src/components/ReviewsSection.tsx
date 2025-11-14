import ReviewCard from "./ReviewCard";
import avatar1 from "@assets/generated_images/Professional_avatar_1_524ba830.png";
import avatar2 from "@assets/generated_images/Professional_avatar_2_8b81faba.png";
import avatar3 from "@assets/generated_images/Professional_avatar_3_15376f5c.png";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    rating: 5,
    comment: "ToolKit has transformed how we collect customer feedback. The embed feature is seamless!",
    avatar: avatar1
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    rating: 5,
    comment: "The QR code generator alone is worth it. We use it for all our product packaging now.",
    avatar: avatar2
  },
  {
    name: "Emma Rodriguez",
    role: "Startup Founder",
    rating: 5,
    comment: "Managing our waitlist has never been easier. Clean interface and great customer support.",
    avatar: avatar3
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Thousands</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about ToolKit
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
