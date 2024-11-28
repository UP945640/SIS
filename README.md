# SIS
This project is a full-stack application built with Java Spring Boot (backend) and React (frontend). Follow the steps below to set up and run the project.

## Backend:

Copy code
- cd path/to/spring-backend
- mvn clean package
- java -jar target/sb-product-app-jar-with-dependencies.jar

verify with endpoint http://localhost:8080/api/products
## Frontend:

Copy code
- cd path/to/react-frontend
- npm install
- npm start

verify with endpoint http://localhost:3000/

## Tools


### TypeScript
TypeScript was used to add static typing to JavaScript, reducing runtime errors and improving code maintainability while enhancing development with better tooling and auto-completion.

### Spring Validators
Spring Validators were implemented to enforce backend data integrity using annotations like @NotNull and @Size, ensuring only valid and well-formed data is processed.

### Bootstrap
Bootstrap was used to create a responsive, visually consistent UI, enabling the rapid development of user-friendly interfaces with minimal custom CSS.

### Apache Maven Assembly Plugin
The Apache Maven Assembly Plugin was used to package the application into a single executable JAR file, including all dependencies, making it easy run the application.
