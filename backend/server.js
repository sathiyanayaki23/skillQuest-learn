const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config(); // Load environment variables
require("./config/passport"); // Import Passport configuration

// Import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const badgeRoutes = require("./routes/badges");
const progressRoutes = require("./routes/progress");
const notificationsRoutes = require("./routes/notifications");
const dailyquestRoutes = require("./routes/dailyquests");

// Initialize Express App
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: process.env.JWT_SECRET || "default-secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI_LOCAL || process.env.MONGO_URI_CLOUD;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/badges", badgeRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/dailyquests", dailyquestRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
