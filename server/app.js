const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connectDB } = require('./config/db'); // Make sure this exports a connectDB function
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct
const documentRoutes = require('./routes/documentRoutes'); // Ensure this path is correct
const { errorHandler } = require('./middlewares/errorMiddleware'); // Ensure this path is correct

const app = express();

// Connect to the database
connectDB();
const corsOptions = {
    origin: 'http://localhost:5173', // Update this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify the allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
  };
// Middleware setup
// app.use(cors()); // Allow CORS for all origins, can be configured for specific origins
app.use(cors(corsOptions)); // Use the corsOptions object to configure CORS
app.use(morgan('dev')); // Log requests to the console
app.use(express.json()); // Parse JSON request bodies

// Route handlers
app.use('/api/auth', authRoutes);  // Ensure the authRoutes are defined and exported correctly
app.use('/api/documents', documentRoutes);  // Ensure the documentRoutes are defined and exported correctly

// Error handling middleware
app.use(errorHandler);  // This should handle errors thrown by previous middleware

module.exports = app;
