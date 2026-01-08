# Production Dockerfile (multi-stage)
FROM node:20-alpine AS deps

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production

# Builder stage
FROM node:20-alpine AS builder

WORKDIR /app

# Build args for NEXT_PUBLIC_* variables (must be available at build time)
ARG NEXT_PUBLIC_FEATUREBASE_APP_ID
ENV NEXT_PUBLIC_FEATUREBASE_APP_ID=$NEXT_PUBLIC_FEATUREBASE_APP_ID

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (including dev)
RUN npm ci

# Copy source code
COPY . .

# Build the application
ENV NODE_ENV=production
RUN npm run build

# Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Copy markdown content files from docs directory
COPY --from=builder /app/docs ./docs

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
