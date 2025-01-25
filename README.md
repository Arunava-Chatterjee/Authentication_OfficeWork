Project Overview
This is a full-stack authentication application built using the MERN (MongoDB, Express, React, Node.js) stack, providing user registration, login, and authentication functionality.


Prerequisites: 
Node.js (v14 or later)
MongoDB
npm or yarn

Installation Steps: 
1. Clone the Repository
bashCopygit clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Set Up Backend
bashCopy# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the backend directory with the following variables:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
3. Set Up Frontend
bashCopy# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install
4. Configure Environment Variables
Create a .env file in the frontend directory:
CopyVITE_API_BASE_URL=http://localhost:3001/api
5. Run the Application
Start Backend Server
bashCopy# In the backend directory
npm start
# Server will run on http://localhost:3001
Start Frontend Development Server
bashCopy# In the frontend directory
npm run dev
# Client will run on http://localhost:5173


Features: 
User Registration
User Login
Protected Routes
Error Handling

Technologies Used: 
MongoDB
Express.js
React
Node.js
Vite


Project Structure
Copyauthentication-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx
    └── vite.config.js
