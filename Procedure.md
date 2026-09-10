# Procedure

## 0. Creating Turborepo nomorepo
Create a New project: `npx create-turbo@latest myapp`
Create on an existing repo: `npx create-turbo@latest .`

## 1. Runing The Apps
- npm run build: Build all apps and packages
- npm run dev: Develop all apps and packages
- npm run lint: Lint all apps and packages

## 2. Banching
setup/THEWEEKENDS-001-monorepo
chore/THEWEEKENDS-001
infra/THEWEEKENDS-001
docum/THEWEEKENDS-001
featu/THEWEEKENDS-001
minim/THEWEEKENDS-001 (minimal code to test setup & infrastructure)

## 3. Commit Messages
build(docker): description
featu(auth): description
fix(package): description
docum(readme): description
...

## 4. Git

### a. Rebasing
git checkout parent_branch
    `Fix and commit`
git checkout current_branch
git rebase parent_branch

## 5. Docker
docker compose up --build
docker compose down
docker compose up -d --build api
docker compose build --no-cache api
Open Terminal: docker exec -it container_name_or_id sh
Hot Reload: docker compose up -d --build --no-deps --force-recreate service_name


## 6. Database: PorstgreSQL + postGis & Prisma ORM
- Create schema.prisma + package.json
- setup package.json
- npm install
- npx prisma db push


## 7. Architecture
night-life-app/
├── apps/
│   ├── api/                   # Express.js API Server
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   └── index.ts
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── web/                   # Next.js Application
│   │   ├── Dockerfile
│   │   └── package.json
│   └── worker/                # Background Worker & Scraper (BullMQ)
│       ├── src/
│       │   ├── jobs/
│       │   ├── scrapers/
│       │   └── index.ts
│       ├── Dockerfile
│       └── package.json
├── packages/
│   ├── config/                # Shared Environment & App Settings
│   │   ├── index.ts
│   │   └── package.json
│   ├── database/              # Shared Prisma Client & PostGIS Schema
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   ├── index.ts
│   │   └── package.json
│   └── types/                 # Shared TypeScript Interfaces (DTOs)
│       ├── src/
│       │   └── index.ts
│       └── package.json
├── docker-compose.yml         # Container Orchestration (Postgres + Redis)
├── package.json               # Root Workspace Config
├── turbo.json                 # Turborepo Task Pipeline Config
└── .env.example

## 8. Notes
Spaghetti Monolith
- Just like this one. Hahahah

Modular Monolith
- Independent modules
- Modules communicate via APIs
- Each module owns its own exclusive tables
- All while staying a single unit
Can transition by slicing most complex modules into services

Microservices
- Different codebases
- Services communicate via network (HTTP/gRPC)
- Separate databases
- Each service is deployed separately

Component-Based/Fererated Monolith can decouple a monolith
