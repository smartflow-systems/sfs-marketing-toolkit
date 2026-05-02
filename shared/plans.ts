export type PlanName = 'free' | 'starter' | 'pro' | 'premium';

export const SFS_PLANS = {
  free:    { name: 'Free',    price: 0,   features: ['Basic access'] },
  starter: { name: 'Starter', price: 29,  features: ['Core features', 'Email support'] },
  pro:     { name: 'Pro',     price: 97,  features: ['All features', 'AI tools', 'API access'] },
  premium: { name: 'Premium', price: 197, features: ['Everything', 'Done-for-you setup', 'White-label'] },
} as const;

export const PLAN_ORDER: PlanName[] = ['free', 'starter', 'pro', 'premium'];
export function planAtLeast(userPlan: PlanName, required: PlanName): boolean {
  return PLAN_ORDER.indexOf(userPlan) >= PLAN_ORDER.indexOf(required);
}
