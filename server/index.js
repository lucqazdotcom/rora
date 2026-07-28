require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const prisma = require("./prisma/client")
const PORT = process.env.DB_PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const loginDetails = require("./routes/loginDetails");
const userDetails = require("./routes/userDetails");
const transitRoutes = require("./routes/transitRoutes");

// Redirect incoming calls
app.use("/login", loginDetails);
app.use("/user", userDetails);
app.use("/home", transitRoutes);

// Handle undefined route
app.use((req, res, next) => {
    res.status(404).send("Route not found.");
});

// Start the server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
