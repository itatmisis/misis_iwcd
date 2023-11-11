FROM python:3.11


WORKDIR /app

# Install dependencies
COPY ./requirements.txt ./
RUN pip install -r requirements.txt

# Run your app
COPY . .
CMD [ "python3.11", "-m", "app" ]
