# KKOSM - NestJS API

## Overview

KKOSM now runs on [NestJS](https://nestjs.com/), providing a structured and maintainable API foundation. This initial setup exposes a simple root endpoint so you can extend the service with modules, controllers, and providers for your needs.

## Stack
- **Framework:** NestJS (Express platform)
- **Language:** TypeScript
- **Build:** TypeScript compiler
- **Linting:** ESLint (Flat config) with TypeScript-ESLint

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- PNPM (preferred) or NPM

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm start:dev
```
Runs the server with hot reload using `ts-node-dev` (default port **3000**, configurable via `PORT`).

### Production Build
```bash
pnpm build
pnpm start
```
Builds TypeScript to `dist/` and starts the compiled server.

## Project Structure
```
src/
├── app.controller.ts   # Root controller with a sample GET endpoint
├── app.module.ts       # Root module wiring controllers and providers
├── app.service.ts      # Service with example business logic
└── main.ts             # Application bootstrap
```

## Notes
- Update `app.module.ts` as you add new feature modules.
- Configure environment variables (e.g., `PORT`) via a `.env` file or your hosting provider.
