const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Signup Route
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      // Check if username or email already exists
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: "Username or email already exists." });
      }
  
      // Create new user
      const newUser = new User({ username, email, password });
      await newUser.save();
  
      res.status(201).json({ message: "User created successfully!" });
    } catch (err) {
      res.status(500).json({ message: "Error creating user.", error: err.message });
    }
  });

// Login Route
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error.", error: err.message });
      }
      if (!user) {
        return res.status(400).json({ message: info.message || "Invalid credentials." });
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Error logging in.", error: err.message });
        }
        return res.json({ message: "Login successful!", user: req.user });
      });
    })(req, res, next);
  });
  
  // Logout Route
  router.post("/logout", (req, res) => {
    req.logout((err) => {
      if (err) return res.status(500).json({ message: "Error logging out." });
      res.json({ message: "Logged out successfully!" });
    });
  });
  
module.exports = router;