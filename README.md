# Tea Subscription Admin Portal

This project consists of two parts: a Rails API backend and a React frontend. It allows a hypothetical admin user to manage the status of a number of tea box subscriptions, and view each subscription's associated customers and teas.

---

## Contributors

Rig Freyr - GitHub: https://github.com/ontruster74

---

## Project Structure

- **Backend (Rails API)**: Handles subscriptions, customers, and teas, and serves the data via API endpoints.
- **Frontend (React)**: Consumes the API and displays subscription data to users with options for filtering, viewing details, and toggling subscription status.

---

## Getting Started

### Backend (Rails API)

1. **Clone the backend repo at https://github.com/ontruster74/mod3-final-project-be**:

2. **Install dependencies**:

   ```bash
   bundle install
   ```

3. **Set up the database**:

   ```bash
   rails db:create
   rails db:migrate
   rails db:seed 
   ```

4. **Start the Rails server**:

   ```bash
   rails server
   ```

   The backend should now be running at `http://localhost:3000`.

---

### Frontend (React)

1. **Clone down the repository to your local machine**:


2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the React development server**:

   ```bash
   npm run dev
   ```

   The frontend should now be running at `http://localhost:5173`.

---

## Frontend Features

- **Subscription List**: Displays all subscriptions with basic details.
- **Subscription Details**: View detailed information of a specific subscription.
- **Toggle Subscription Status**: Change subscription status between "active" and "cancelled".
- **Filter Subscriptions**: Filter subscriptions by status (All, Active, Cancelled).

---

## Development Environment

- **Backend**: Rails API
- **Frontend**: React with Router for navigation
- **Database**: PostgreSQL 

---

## Future Improvements

- Add user authentication and authorization.
- Improve styling with a more refined design.
- Add more endpoints to complete CRUD functionality in case the scope of the application needs to expand.

---
