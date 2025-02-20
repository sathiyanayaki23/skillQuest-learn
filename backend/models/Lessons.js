const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true }, 
    content: { type: String, required: true },
    exercises: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Exercise' 
    }], 
    exerciseTypes: { 
        type: [String], 
        enum: ['choose', 'fill-in-the-blanks', 'drag-and-drop'], 
        required: true 
    },
    xpReward: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Lesson', LessonSchema);
