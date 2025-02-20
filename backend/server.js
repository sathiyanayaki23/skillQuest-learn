const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const badgeRoutes = require("./routes/badges");
const progressRoutes = require("./routes/progress");
const notificationsRoutes = require("./routes/notifications");
const dailyquestRoutes = require("./routes/dailyquests")

// Import Passport configuration
require("./config/passport");


// Middleware

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/skillquest")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/badges", badgeRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/notifications",notificationsRoutes);
app.use("/api/dailyquests", dailyquestRoutes);
// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));