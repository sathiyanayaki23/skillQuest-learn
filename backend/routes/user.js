const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get user details
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user details.", error: err.message });
  }
});

module.exports = router;