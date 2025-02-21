const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  unitId: { type: mongoose.Schema.Types.ObjectId, ref: "Unit" },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  completed: { type: Boolean, default: false },
  xpEarned: { type: Number, default: 0 },
  completedAt: { type: Date }
});

module.exports = mongoose.model("Progress", progressSchema);