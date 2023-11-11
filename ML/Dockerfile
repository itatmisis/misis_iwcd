FROM python:3.11


WORKDIR /app

# Install dependencies
COPY ./requirements.txt ./
RUN pip install -r requirements.txt

# Compile Python 3 source code into bytecode
RUN python3 -m compileall .

# Run your app
COPY . .
CMD [ "python3.11", "-m", "app" ]
