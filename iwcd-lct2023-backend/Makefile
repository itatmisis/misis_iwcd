.PHONY: all build run stop clean clean-all

all: build run

build:
	docker build -t iwcdlct2023/backend .

run:
	docker run -it --rm -p 8080:8080 --name iwcdlct2023-backend iwcdlct2023/backend

stop:
	docker stop iwcdlct2023-backend
	docker rm iwcdlct2023-backend

clean:
	docker rmi iwcdlct2023/backend

clean-all: stop clean