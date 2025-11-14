import FeatureCard from '../FeatureCard';
import { FileText } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <FeatureCard 
      icon={FileText}
      title="Dynamic Forms"
      description="Create beautiful, responsive forms with real-time validation and custom fields."
    />
  );
}
