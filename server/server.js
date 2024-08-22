const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const http = require('http');
const socketService = require('./sockets/documentSocket');
const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true // Allow credentials
}));
app.use(express.json()); // Parse JSON request bodies

// Set up routes here
// Example: app.use('/api/documents', documentRoutes);

// Create HTTP server
const server = http.createServer(app);
socketService.setupWebSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Call MongoDB connection function
connectDB();
