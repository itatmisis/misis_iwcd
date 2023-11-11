.PHONY: all build run

all: build run

build:
	docker build -t lct-iwcd/ml:latest -f ./Dockerfile ./model

run:
	docker run -it --rm -p 3333:3333 --name lct-iwcd-ml lct-iwcd/ml:latest
