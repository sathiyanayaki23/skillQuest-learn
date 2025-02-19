const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    levelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Level' }, // Tracks progress at level
    unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }, // Tracks progress at unit
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }, // Tracks progress at lesson
    exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }, // Tracks exercise completion
    completed: { type: Boolean, default: false },
    xpEarned: { type: Number, default: 0 },
    completedAt: { type: Date }
});

module.exports = mongoose.model('Progress', progressSchema);
