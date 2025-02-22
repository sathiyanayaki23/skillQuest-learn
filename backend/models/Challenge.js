const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
    title: { type: String, required: true },
    type: { type: String, enum: ["text-based coding", "quiz", "drag-and-drop"], required: true },
    starterCode: { type: String, default: null },
    expectedOutput: { type: mongoose.Schema.Types.Mixed, default: null },
    testCases: { type: Map, of: String, default: {} }, 
    xpReward: { type: Number, default: 0 },
    status: { type: String, enum: ['Pending', 'Completed', 'Expired'], default: 'Pending' }, // Combines DailyQuest
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true }
});

module.exports = mongoose.model('Challenge', challengeSchema);
