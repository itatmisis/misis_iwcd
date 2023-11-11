FROM arm64v8/openjdk:15-slim AS build

WORKDIR /app

# Copy source code
COPY --chown=app:app . .

# Build
RUN ./gradlew build -x test

######################
FROM arm64v8/openjdk:15-slim
LABEL maintainer="iwcd.itatmisis.ru"

ARG VERSION="0.0.1"
ARG BUILD_DATE="2023-11-11T19:41:00Z"
ARG VCS_REF="rolling"

ARG UID=1000
ARG GID=1000

LABEL ru.itatmisis.iwcd.name="iwcdlct2023/backend"
LABEL ru.itatmisis.iwcd.version=${VERSION}
LABEL ru.itatmisis.iwcd.build-date=${BUILD_DATE}
LABEL ru.itatmisis.iwcd.description="Backend of IWCD team, LCT Krasnodar 2023"
LABEL ru.itatmisis.iwcd.vcs-ref=${VCS_REF}

# # Change user to app
# RUN addgroup --gid $GID app
# RUN useradd --no-create-home -s /bin/sh -u $UID -G app app
# USER app

WORKDIR /app

# Copy builded jar
COPY --from=build --chown=app:app /app/build/libs/iwcd-lct2023-backend-0.0.1-SNAPSHOT.jar .

CMD ["java", "-jar", "./iwcd-lct2023-backend-0.0.1-SNAPSHOT.jar"]
