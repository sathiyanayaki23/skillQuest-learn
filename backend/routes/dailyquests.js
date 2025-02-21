const express = require("express");
const router = express.Router();
const DailyQuest = require("../models/Dailyquests");
const User = require("../models/User");

// Fetch Today's Quest
router.get("/today", async (req, res) => {
  try {
    const quest = await DailyQuest.findOneAndUpdate(
      { questId, userId, status: "Pending" },
      { $set: { status: "Completed", xpEarned: 50 } },
      { new: true }
  );
  if (!quest) return res.status(400).json({ error: "Quest not found or already completed" });
  
  await User.updateOne({ _id: userId }, { $inc: { xp: 50 } });  

    res.json({ success: true, message: "Quest completed!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
