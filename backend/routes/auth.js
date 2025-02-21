const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Ensure dotenv is loaded

const JWT_SECRET = process.env.JWT_SECRET; // Retrieve secret key from .env

// Signup Route
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] }).select("_id");
        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists." });
        }

        // Create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error creating user.", error: err.message });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.hashedPassword);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login successful", token, user });
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
});
module.exports = router;
// Add this inside auth.js
router.get("/user", async (req, res) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Unauthorized: No token provided" });

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userId).select("username email xp");
        
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
});
