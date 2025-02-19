const express = require("express");
const router = express.Router();
const Progress = require("../models/Userprogress");

// Get user progress
router.get("/:userId", async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ message: "Error fetching progress.", error: err.message });
  }
});

module.exports = router;