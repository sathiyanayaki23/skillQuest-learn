const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get user details
app.get("/api/user/:id", async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
  } catch (error) {
      res.status(500).json({ message: "Server error" });
  }
});


module.exports = router; 
