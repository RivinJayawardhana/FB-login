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
    origin: "https://fb-login-rho.vercel.app" || "*", // Use process.env.FRONT or fallback to "*"
    credentials: true, // Allow cookies to be sent with requests
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
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
    res.send("API is running!");
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
