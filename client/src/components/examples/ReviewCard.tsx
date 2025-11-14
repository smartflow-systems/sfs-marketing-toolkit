import ReviewCard from '../ReviewCard';
import avatar1 from "@assets/generated_images/Professional_avatar_1_524ba830.png";

export default function ReviewCardExample() {
  return (
    <ReviewCard 
      name="Sarah Johnson"
      role="Marketing Director"
      rating={5}
      comment="ToolKit has transformed how we collect customer feedback. The embed feature is seamless!"
      avatar={avatar1}
    />
  );
}
