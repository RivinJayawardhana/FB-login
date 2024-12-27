import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import staffRoute from "./routes/staff.route.js";

// Load environment variables
dotenv.config();

// Create the express app
const app = express();

// Middleware setup
app.use(cookieParser());
app.use(express.json());

// CORS setup: Allow requests from the frontend only
const corsOptions = {
    origin: process.env.FRONTEND_URL || "*", // Use process.env.FRONTEND_URL or fallback to "*"
    credentials: true, // Allow cookies to be sent with requests
};
app.use(cors(corsOptions));

// Connect to MongoDB with enhanced error logging and increased timeouts
mongoose.connect("mongodb+srv://rivin:1234@cluster0.48fyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,  // Increase connection timeout (30 seconds)
    socketTimeoutMS: 45000   // Increase socket timeout (45 seconds)
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

// Use the staff routes
app.use("/api/staff", staffRoute);

// Basic route to check server status
app.get("/", (req, res) => {
    res.send("Hi....API is running!");
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    // Log the error stack to help with debugging
    console.error("Error stack:", err.stack);

    // Send the error response
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
