const express = require("express");
const Badge = require("../models/Badges");

const router = express.Router();

// Get all badges earned by a user
router.get("/:userId", async (req, res) => {
  try {
    const badges = await Badge.find({ userId: req.params.userId });
    res.json(badges);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
