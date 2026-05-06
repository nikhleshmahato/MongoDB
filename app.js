const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});