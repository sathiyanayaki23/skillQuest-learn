const express = require("express");
const router = express.Router();
const DailyQuest = require("../models/Dailyquests");
const User = require("../models/User");

// Fetch Today's Quest
router.get("/today", async (req, res) => {
  try {
    const todayQuest = await DailyQuest.findOne({ status: "Pending" }).populate("questId");
    if (!todayQuest) return res.status(404).json({ message: "No quest available today." });
    res.json(todayQuest);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Submit a Quest
router.post("/submit", async (req, res) => {
  const { questId, userId, code } = req.body;

  try {
    let quest = await DailyQuest.findOne({ questId, userId, status: "Pending" });
    if (!quest) return res.status(400).json({ error: "Quest not found or already completed" });

    // Update quest status & XP
    quest.status = "Completed";
    quest.xpEarned = 50;
    await quest.save();

    // Update user XP
    await User.findByIdAndUpdate(userId, { $inc: { xp: 50 } });

    res.json({ success: true, message: "Quest completed!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
