// Type definitions for the Loopra landing page

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  featured?: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
}

export interface FeatureCard {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface WorkflowStep {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tags?: string[];
  example?: string;
  features?: string[];
}