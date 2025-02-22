const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  hint: { type: String }, // Optional hint
  explanation: { type: String }, // Explanation for correct answer
  difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "medium" }, // Difficulty level
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Quiz", quizSchema);
