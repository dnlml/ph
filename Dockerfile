# syntax=docker/dockerfile:1

# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build the app
RUN pnpm build

# Prune dev dependencies
RUN pnpm prune --prod

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 sveltekit

# Copy built app
COPY --from=builder --chown=sveltekit:nodejs /app/build ./build
COPY --from=builder --chown=sveltekit:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=sveltekit:nodejs /app/package.json ./

USER sveltekit

EXPOSE 3000

CMD ["node", "build"]
