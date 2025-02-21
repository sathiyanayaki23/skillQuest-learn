const express = require("express");
const router = express.Router();
const Leaderboard = require("../models/Leaderboard");

// Get leaderboard data
router.get("/", async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find({}, "username xp -_id")
    .sort({ xp: -1 })
    .limit(10)
    .lean();
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: "Error fetching leaderboard.", error: err.message });
  }
});

module.exports = router;