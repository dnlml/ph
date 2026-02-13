# Production-only Dockerfile
# Build is done locally to avoid long image processing times
# See DEPLOY.md for instructions

FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 sveltekit

# Copy pre-built app and dependencies
COPY --chown=sveltekit:nodejs build ./build
COPY --chown=sveltekit:nodejs node_modules ./node_modules
COPY --chown=sveltekit:nodejs package.json ./

USER sveltekit

EXPOSE 3000

CMD ["node", "build"]
