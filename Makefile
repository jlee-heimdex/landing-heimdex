.PHONY: help dev lint typecheck test build prod clean install stop

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies (local)
	npm install

dev: ## Start development server with Docker (http://localhost:3000)
	docker compose up web-dev

lint: ## Run ESLint via Docker
	docker compose run --rm web-dev npm run lint

typecheck: ## Run TypeScript type checking via Docker
	docker compose run --rm web-dev npm run typecheck

build: ## Build the Next.js app via Docker
	docker compose run --rm web-dev npm run build

prod: ## Build and run production server via Docker (http://localhost:3001)
	docker compose up --build web-prod

stop: ## Stop all running containers
	docker compose down

clean: ## Remove containers, volumes, and build artifacts
	docker compose down -v
	rm -rf .next node_modules

# Local development (without Docker)
dev-local: ## Start development server locally (requires local Node.js)
	npm run dev

build-local: ## Build locally (requires local Node.js)
	npm run build

start-local: ## Start production server locally (requires local Node.js + build)
	npm start
