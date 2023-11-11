.PHONY: env run down

env:
	cp ./env.example ./.env
	@echo "Please edit .env file"

run:
	# Check if .env file exists. If not, refuse to run.
	@if [ ! -f ./.env ]; then \
		echo "Please run 'make env' first"; \
		exit 1; \
	fi
	docker-compose up --build -d

down:
	docker-compose down
