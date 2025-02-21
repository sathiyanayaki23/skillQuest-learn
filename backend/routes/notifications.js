const express = require("express");
const router = express.Router();
const Notification = require("../models/Notifications");

// Get unread notifications for a user
router.get("/:userId", async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId, status: "Unread" })
    .select("message createdAt")
    .sort({ createdAt: -1 })  // Latest notifications first
    .lean();
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notifications.", error: err.message });
  }
});

module.exports = router;