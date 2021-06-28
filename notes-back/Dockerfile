#### Stage 1: Build the back project
FROM openjdk:8-jdk-alpine as build-back
# Set the current working directory inside the image
WORKDIR /app
# Copy maven executable to the image
COPY mvnw .
RUN chmod +x ./mvnw
COPY .mvn .mvn
# Copy the pom.xml file
COPY pom.xml .
# Build all the dependencies in preparation to go offline.
# This is a separate step so the dependencies will be cached unless
# the pom.xml file has changed.
RUN ./mvnw dependency:go-offline -B
# Copy the project source
COPY src src
# Package the application
RUN ./mvnw install -DskipTests


#### Stage 2: Build final container back application
FROM openjdk:8-jdk-alpine
COPY --from=build-back /app/target/*.jar /app/back.jar
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/bin/sh", "/app/entrypoint.sh"]