const express = require("express");
const router = express.Router();
const DailyQuest = require("../models/Dailyquests");

// Get today's quest for a user
router.get("/:userId", async (req, res) => {
  try {
    const quest = await DailyQuest.findOne({ userId: req.params.userId, status: "Pending" });
    res.json(quest);
  } catch (err) {
    res.status(500).json({ message: "Error fetching daily quest.", error: err.message });
  }
});

module.exports = router;