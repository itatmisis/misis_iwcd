FROM python:3.11


WORKDIR /model

# Install dependencies
COPY ./requirements.txt ./
RUN pip install -r requirements.txt

# Compile Python 3 source code into bytecode
RUN python3 -m compileall .

# Create a folder for ml models
RUN mkdir ./app/models

# Run your app
COPY . .
CMD [ "python3.11", "-m", "app" ]
