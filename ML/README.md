# ML

## How to build

From this directory (`ML`), run the following command (or issue `make build`):

```bash
docker build -t lct-iwcd/ml:latest -f ./Dockerfile ./model
```

## How to run

From this directory (`ML`), run the following command (or issue `make run`):

```bash
docker run -it --rm -p 3333:3333 --name lct-iwcd-ml lct-iwcd/ml:latest
```
