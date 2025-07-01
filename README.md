# Terrific FullStack Developer Home Assignment

This is a full-stack TypeScript application built with:

- Backend: Node.js + Express + TypeScript
- Frontend: React + Vite + TypeScript + Bootstrap

## Folder Structure

/backend   → Node.js + Express API (TypeScript)
/frontend  → React + Vite Client (TypeScript)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

## Backend Setup

1. Navigate to the backend folder:
   cd backend

2. Install dependencies:
   npm install

3. Run the server:
   npm run dev

4. Your backend will be available at:
   http://localhost:3000

5. Test endpoint:
   http://localhost:3000/todos

## Frontend Setup

1. Navigate to the frontend folder:
   cd frontend

2. Install dependencies:
   npm install

3. Start the Vite dev server:
   npm run dev

4. Open the app:
   http://localhost:5173

## Notes

- The frontend connects to the backend at http://localhost:3000.
- If port 3000 is in use, either stop the process (using netstat or taskkill) or change the port in backend/src/server.ts.
- Make sure CORS is enabled on the backend.

## Author

Amir Cabili
GitHub: https://github.com/amircabili
