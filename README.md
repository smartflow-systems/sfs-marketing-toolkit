# SFS Marketing Toolkit

Part of the SmartFlow Systems ecosystem.

## Overview

Marketing Toolkit application providing specialized functionality for SmartFlow Systems clients.

## Features

- Built with SFS design system
- TypeScript with strict mode
- React + Vite frontend
- Express.js backend
- PostgreSQL database
- Dark mode support
- Responsive design

## Tech Stack

- **Frontend**: React, TypeScript, Vite, shadcn/ui, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: shadcn/ui
- **State Management**: React Query
- **Forms**: React Hook Form + Zod

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

## Development

```bash
npm run dev        # Start dev server (port varies by app)
npm run build      # Build for production
npm run preview    # Preview production build
npm test           # Run tests
npm run db:push    # Push database schema
```

## Environment Variables

See `.env.example` for required configuration.

## SmartFlow Design System

This application follows the SFS design system:
- Primary color: SFS Blue (HSL: 221 83% 53%)
- Clean, professional interface
- Dark mode support with next-themes
- Responsive Tailwind CSS layout
- Accessible components

## Project Structure

```
/client
  /src
    /components/ui    # shadcn components
    /components       # custom components
    /pages           # page components
    /hooks           # custom hooks
    /lib             # utilities
/server
  /routes            # API routes
  /db               # database schema
```

## Contributing

Part of the SmartFlow Systems ecosystem. Follow organization coding standards.

## License

Proprietary - SmartFlow Systems
