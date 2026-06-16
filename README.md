# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Employee Management System

A full-stack Employee Management System built using Spring Boot and React. The application provides secure employee management with JWT-based authentication and authorization, allowing users to perform employee-related operations through a modern web interface.

🚀 Features
User Registration and Login
JWT Authentication & Authorization
Role-Based Access Control using Spring Security
Secure REST APIs
Add New Employee
View Employee Details
Update Employee Information
Delete Employee Records
Responsive User Interface
Frontend and Backend Integration
Exception Handling and Validation
🛠️ Tech Stack
Backend
Java
Spring Boot
Spring Security
JWT (JSON Web Token)
Spring Data JPA
Hibernate
Maven
Frontend
React.js
Vite
JavaScript
HTML5
CSS3
Axios
Database
MySQL
Tools & Platforms
IntelliJ IDEA
VS Code
Postman
Git
GitHub
📂 Project Structure
employee-management-system
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── ...
│
└── README.md
🔐 Authentication & Security

This project uses Spring Security and JWT Authentication to secure API endpoints.

Authentication Flow
User logs in with valid credentials.
Server validates credentials.
JWT token is generated.
Token is sent to the client.
Client includes the token in API requests.
Protected endpoints are accessed only with a valid token.
📋 Employee Management Operations
Employee Features
Create Employee
View All Employees
View Employee by ID
Update Employee Details
Delete Employee
🗄️ Database

The application uses MySQL for storing:

User Information
Employee Records
Authentication Data
⚙️ Installation & Setup
Clone Repository
git clone https://github.com/JyotiBairagi/employee-management-system.git
Backend Setup
cd backend

Configure MySQL database in:

application.properties

Run the application:

mvn spring-boot:run
Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173

Backend runs on:

http://localhost:8080
📸 Screenshots
<img width="1898" height="905" alt="Screenshot 2026-06-16 203306" src="https://github.com/user-attachments/assets/86408944-4a13-44ad-9ad4-fc20af955316" />
<img width="1901" height="912" alt="Screenshot 2026-06-16 203559" src="https://github.com/user-attachments/assets/9b9af54e-b924-4735-af00-162ea6888b94" />
<img width="1882" height="913" alt="Screenshot 2026-06-16 203508" src="https://github.com/user-attachments/assets/107aec5d-80ae-4b9d-a0f4-a0a9fc3cdca1" />
<img width="1893" height="913" alt="Screenshot 2026-06-16 203412" src="https://github.com/user-attachments/assets/f95b6e7e-efeb-4a69-a017-b4436086e7e6" />
<img width="1901" height="917" alt="Screenshot 2026-06-16 203640" src="https://github.com/user-attachments/assets/f8a3a212-27a5-432c-92e2-5b26f422a1d2" />

🔗 API Testing

API endpoints were tested using Postman.

Examples:

POST /api/auth/login
POST /api/auth/register
GET /api/employees
POST /api/employees
PUT /api/employees/{id}
DELETE /api/employees/{id}
🎯 Learning Outcomes

Through this project, I gained hands-on experience with:

Spring Boot Development
REST API Development
Spring Security
JWT Authentication
React Frontend Development
Database Integration
Git & GitHub Version Control
Full Stack Application Development
👩‍💻 Author

Jyoti Bairagi

GitHub: JyotiBairagi GitHub Profile
