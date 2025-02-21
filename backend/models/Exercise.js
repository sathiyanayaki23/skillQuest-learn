const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
    title: { type: String, required: true },
    type: { type: String, enum: ["text-based coding", "quiz", "drag-and-drop"], required: true },
    starterCode: { type: String, default: null },
    expectedOutput: { type: mongoose.Schema.Types.Mixed, default: null },
    testCases: { type: Map, of: String, default: {} }, // Key-value instead of array
    xpReward: { type: Number, default: 0 }
});


module.exports = mongoose.model('Exercise', ExerciseSchema);
