.PHONY: env run logs run-dev logs-dev down

--check-env:
	# Check if .env file exists. If not, refuse to run.
	@if [ ! -f ./.env ]; then \
		echo "Please run 'make env' first"; \
		exit 1; \
	fi

env:
	cp ./env.example ./.env
	@echo "Please edit .env file"

run: --check-env
	# @echo "Ensuring that the Dev version is down..."
	# docker-compose -f docker-compose.dev.yml down
	@echo "Starting the Prd version..."
	docker-compose -f docker-compose.yml up --build -d

logs:
	docker-compose -f docker-compose.yml logs -f

run-dev: --check-env
	# @echo "Ensuring that the Prd version is down..."
	# docker-compose -f docker-compose.yml down
	@echo "Starting the Dev version..."
	docker-compose -f docker-compose.dev.yml up --build -d

logs-dev:
	docker-compose -f docker-compose.dev.yml logs -f

##################
down: --check-env
	@echo "Stopping the Prd version..."
	docker-compose -f docker-compose.yml down
	@echo "Stopping the Dev version..."
	docker-compose -f docker-compose.dev.yml down
