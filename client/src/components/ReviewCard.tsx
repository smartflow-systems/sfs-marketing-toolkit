import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export default function ReviewCard({ name, role, rating, comment, avatar }: ReviewCardProps) {
  return (
    <Card className="p-6" data-testid={`card-review-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            {avatar && <AvatarImage src={avatar} alt={name} />}
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold" data-testid="text-reviewer-name">{name}</div>
            <div className="text-sm text-muted-foreground" data-testid="text-reviewer-role">{role}</div>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`}
                data-testid={`icon-star-${i + 1}`}
              />
            ))}
          </div>
        </div>
        <p className="text-muted-foreground" data-testid="text-review-comment">{comment}</p>
      </div>
    </Card>
  );
}
