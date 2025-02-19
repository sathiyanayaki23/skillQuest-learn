const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true }, // Links to Unit
    content: { type: String, required: true },
    videoUrl: { type: String, default: null },
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }], // Reference Exercise.js
    xpReward: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Lesson', LessonSchema);
