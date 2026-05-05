import type { Request, Response, NextFunction } from 'express';

type PlanName = 'free' | 'starter' | 'pro' | 'premium';
const PLAN_ORDER: PlanName[] = ['free', 'starter', 'pro', 'premium'];

export function requirePlan(minimumPlan: PlanName) {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) { res.status(401).json({ ok: false, error: 'Not authenticated' }); return; }
    const userPlanIndex = PLAN_ORDER.indexOf(req.user.plan);
    const requiredPlanIndex = PLAN_ORDER.indexOf(minimumPlan);
    if (userPlanIndex < requiredPlanIndex) {
      res.status(403).json({
        ok: false,
        error: `This feature requires the ${minimumPlan} plan or higher.`,
        upgradeRequired: true,
        requiredPlan: minimumPlan,
        currentPlan: req.user.plan,
      });
      return;
    }
    next();
  };
}
