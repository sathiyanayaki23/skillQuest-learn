const express = require("express");
const router = express.Router();
const Badge = require("../models/Badges");

// Get user badges
router.get("/:userId", async (req, res) => {
  try {
    const badges = await Badge.find({ userId: req.params.userId });
    res.json(badges);
  } catch (err) {
    res.status(500).json({ message: "Error fetching badges.", error: err.message });
  }
});

module.exports = router;