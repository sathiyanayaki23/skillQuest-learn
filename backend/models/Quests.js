const mongoose = require("mongoose");
const questSchema = new mongoose.Schema({
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    starterCode: { type: String, required: true },
    expectedOutput: { type: mongoose.Schema.Types.Mixed, required: true },
    testCases: { type: Map, of: String, required: true }, // Key-value instead of array
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true, index: true },
    xpReward: { type: Number, default: 0 }
});

module.exports = mongoose.model('Quest', QuestSchema);
