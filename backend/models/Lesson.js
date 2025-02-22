const mongoose = require('mongoose');
const Exercise = require("../models/Exercise"); // Adjust path if needed
const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    level: { type: Number, required: true }, // Represents lesson difficulty level
    parentLessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", default: null }, // Allows nested lessons like Duolingo
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
    xpReward: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);
