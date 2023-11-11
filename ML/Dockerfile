FROM python:3.11


WORKDIR /model

# Install dependencies
COPY ./requirements.txt ./
RUN pip install -r requirements.txt

# Compile Python 3 source code into bytecode
RUN python3 -m compileall .

COPY . .

# Create a folder for ml models
RUN mkdir -p ./app/models

CMD [ "python3.11", "-m", "app" ]
