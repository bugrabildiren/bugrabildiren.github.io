# Step 1: Build the Spring Boot application
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

COPY . .

RUN mvn clean package -Dmaven.test.skip --batch-mode

# Step 2: Create a minimal image with openjdk and copy the app
FROM openjdk:17-jdk-alpine AS javaapp
WORKDIR /app

# Copy the built Spring Boot application jar file
COPY --from=build /app/target/*-SNAPSHOT.jar /app/app.jar

# Run the Spring Boot application
CMD ["java", "-jar", "/app/app.jar"]

