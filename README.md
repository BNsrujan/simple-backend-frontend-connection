# A simple Frontend-Backend Connection built with React frontend and Express.js backend.

## Project Structure

```
├── backend/          # Express.js API server
│   ├── index.js      # Main server file
│   └── package.json  # Backend dependencies
├── frontend/         # React application
│   ├── src/          # Source files
│   │   ├── App.jsx   # Main React component
│   │   └── ...       # Other React files
│   ├── index.html    # HTML template
│   └── package.json  # Frontend dependencies
└── README.md         # This file
```

## Features

- **Backend**: Express.js REST API serving jokes data
- **Frontend**: React application with Vite build tool
- **CORS**: Configured for cross-origin requests
- **Proxy**: Vite dev server proxies API requests to backend

## Tech Stack

### Backend
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Node.js** - Runtime environment

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **ESLint** - Code linting


1. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## API Endpoints

### GET /
- **Description**: Health check endpoint
- **Response**: "server is ready"

### GET /api/jokes
- **Description**: Returns a list of jokes
- **Response**: Array of joke objects with `id`, `title`, and `content`

## Development

### Backend Development
- Main server file: `backend/index.js`
- Start development server: `npm start`
- Server runs on port 3000

### Frontend Development
- Main component: `frontend/src/App.jsx`
- Start development server: `npm run dev`
- Build for production: `npm run build`
- Lint code: `npm run lint`

## Configuration

### CORS
The backend is configured to accept requests from `http://localhost:5173` (Vite dev server).

### Proxy
The frontend Vite config proxies `/api` requests to `http://localhost:3000`.

## Scripts

### Backend
- `npm start` - Start the server
- `npm test` - Run tests (not implemented)

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

