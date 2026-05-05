import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface SFSUser {
  userId: string;
  email: string;
  role: 'user' | 'admin';
  plan: 'free' | 'starter' | 'pro' | 'premium';
}

declare global {
  namespace Express {
    interface Request {
      user?: SFSUser;
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    res.status(401).json({ ok: false, error: 'Missing or invalid Authorization header' });
    return;
  }
  const token = authHeader.slice(7);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as SFSUser;
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ ok: false, error: 'Invalid or expired token' });
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (!req.user) { res.status(401).json({ ok: false, error: 'Not authenticated' }); return; }
  if (req.user.role !== 'admin') { res.status(403).json({ ok: false, error: 'Admin access required' }); return; }
  next();
}
