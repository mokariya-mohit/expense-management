# Expense Management API

This API provides CRUD operations for expenses with authentication and role-based authorization.

## Features
- JWT Authentication
- Role-Based Access Control (Admin & User)
- Expense CRUD Operations
- Bulk CSV Upload for Expenses
- Expense Filtering, Pagination, and Sorting
- Monthly and Category-based Expense Statistics
- Error Handling & Caching (Redis)

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set environment variables in `.env`.
4. Start the server: `npm start`

## Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login with credentials.

### Expenses
- `POST /api/expenses/add`: Add a new expense.
- `POST /api/expenses/bulk-upload`: Bulk upload expenses via CSV.
- `GET /api/expenses`: Get all expenses with filtering and pagination.
- `PATCH /api/expenses/:id`: Update an expense.
- `DELETE /api/expenses`: Delete expenses in bulk.

### Statistics
- `GET /api/stats/monthly`: Get monthly expenses.
- `GET /api/stats/category`: Get expenses breakdown by category.

## Technologies
- Express.js
- MongoDB
- JWT
- Swagger (API Documentation)
