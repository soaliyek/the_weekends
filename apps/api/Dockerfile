# Prune the workspace to only include the api/ app and its dependencies
FROM node:24-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g turbo@latest
COPY . .

RUN turbo prune --scope=theweekends_api --docker

# Install the dependencies for the api/ app
FROM node:24-alpine AS installer
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./
RUN npm ci

COPY --from=builder /app/out/full/ .


# Run the api/ app in production mode
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
COPY --from=installer /app/node_modules ./node_modules
COPY --from=installer /app/apps/api ./apps/api

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node_modules/.bin/tsx", "apps/api/src/server.ts"]