const express = require("express");
const Progress = require("../models/Userprogress");

const router = express.Router();

// Get user's progress (including streaks)
router.get("/:userId", async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId });

    // Calculate streak (simple logic)
    const streak = progress.length; // You can modify this based on daily activity

    res.json({ streak });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
