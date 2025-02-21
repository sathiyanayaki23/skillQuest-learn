const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authenticate = require("../middleware/authMiddleware"); // Import auth middleware

// Get user details (Protected Route)
router.get("/:userId", authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("xp badges levelsCompleted").lean();
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
