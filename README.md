# LLLExam

## 1. Docker Setup

### 1a: Basic Dockerfile and Docker Compose Setup
- Set up a Node.js environment (latest LTS version).
- Expose port 3000 to the host machine.
- Set the application directory to `/app`.

### 1b: Intermediate Docker Setup with Three-Tier Architecture
- Create a Docker environment with Frontend (Next.js), Backend (Express), and Database (MySQL).
- Ensure each service runs in separate containers with appropriate network configuration.
- Enable hot-reloading in the development environment.

### 1c: Advanced Docker Setup with Microservices
- Build a microservices architecture with Frontend, Authentication Service, User Management Service, Content Service, and Database.
- Use Nginx as a reverse proxy to route requests to the appropriate services.
- Configure separate environments for development and production.

## 2. Form Handling

### 2a: Basic Form in Next.js or Laravel
- Create a simple form with "Name" and "Email Address" fields.
- Log the entered data to the browser console on submission.
- Use Tailwind CSS or Bootstrap for styling.

### 2b: Intermediate Form with Validation
- Create a form with fields for "Name", "Email Address", "Message", and "Category".
- Implement input validation: Name is required, Email must be valid.
- Display validation errors below each field.

### 2c: Advanced Multi-Step Form with State Management
- Build a multi-step form that saves data to local storage and persists values across page reloads.
- Use Redux or Context API for form state management.
- Redirect to a confirmation page displaying the entered data after submission.

## 3. Data Manipulation

### 3a: Basic Data Display
- Display a list of items in a table format with columns: "Name", "Category", and "Price".
- Ensure the price is displayed with the appropriate currency symbol.

### 3b: Intermediate Data Manipulation
- Add features to edit and delete items.
- Allow inline editing of item details on button click.
- Implement filters to view items by category.

### 3c: Advanced Data Manipulation
- Implement sorting functionality by "Name", "Category", or "Price".
- Add a search bar to filter items by name, category, or price range.
- Implement pagination with 3 items per page.
- Provide a form to add new items to the list.

## 4. API Development

### 4a: Basic API Development
- Create a simple API with an endpoint `/api/hello` that responds with `{"message": "Hello, World!"}`.
- Add functionality to accept query parameters and include them in the response.

### 4b: Intermediate API Development
- Build an API to handle product data with in-memory or JSON file storage.
- Implement `POST`, `GET`, and `GET by ID` routes for managing products.

### 4c: Advanced API Development
- Develop a RESTful API using MySQL or MongoDB for storage.
- Implement JWT-based authentication for secure routes.
- Create `POST`, `GET`, `PUT`, and `DELETE` routes with pagination and auto-generated Swagger API documentation.

