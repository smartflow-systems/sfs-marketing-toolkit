# SFS Auth Core Integration

This repository is integrated with [sfs-auth-core](https://github.com/smartflow-systems/sfs-auth-core).

## Middleware Added

- `server/middleware/requireAuth.ts` — JWT verification (reads JWT_SECRET from env)
- `server/middleware/requirePlan.ts` — Subscription tier gating
- `shared/plans.ts` — SFS pricing plan definitions (Free / Starter £29 / Pro £97 / Premium £197)

## Usage in Express Routes

```typescript
import { requireAuth } from './middleware/requireAuth.js'
import { requirePlan } from './middleware/requirePlan.js'

// Any logged-in user
router.get('/dashboard', requireAuth, handler)

// Pro plan or higher only
router.get('/ai-features', requireAuth, requirePlan('pro'), handler)

// Admin only
router.get('/admin', requireAuth, requireAdmin, handler)
```

## Health Endpoint

Add this to your main Express app (server/index.ts or server.js):
```typescript
app.get('/health', (_req, res) => res.json({ ok: true, service: 'sfs-marketing-toolkit', version: '1.0.0' }));
```

## Required Environment Variables

Add these to your .env / Replit Secrets:
- `JWT_SECRET` — same secret as in sfs-auth-core
- `DATABASE_URL` — PostgreSQL connection string
- `STRIPE_SECRET_KEY` — Stripe secret (test: sk_test_...)
- `STRIPE_WEBHOOK_SECRET` — Stripe webhook signing secret

## SFS Pricing Plans

| Plan | Price | Key Features |
|---|---|---|
| Free | £0/mo | Basic access |
| Starter | £29/mo | Core features, email support |
| Pro | £97/mo | All features, AI tools, API access |
| Premium | £197/mo | Everything + done-for-you setup |

## Auth Core Repo

Full JWT auth + Stripe billing backend: https://github.com/smartflow-systems/sfs-auth-core
