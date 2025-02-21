const mongoose = require("mongoose");

const UserProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  status: { type: String, enum: ["not_started", "in_progress", "completed"], default: "not_started" },
});

module.exports = mongoose.model("UserProgress", UserProgressSchema);

