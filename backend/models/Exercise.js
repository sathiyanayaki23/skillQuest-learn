const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true }, 
    title: { type: String, required: true },
    type: { 
        type: String, 
        enum: ['text-based coding', 'quiz', 'drag-and-drop'], 
        required: true 
    },
    starterCode: { type: String, default: null },
    expectedOutput: { type: mongoose.Schema.Types.Mixed, default: null },
    testCases: { type: [String], default: [] },
    hints: { type: [String], default: [] },
    xpReward: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Exercise', ExerciseSchema);
