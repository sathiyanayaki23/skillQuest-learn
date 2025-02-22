const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    completedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
    completedChallenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }],
    xpEarned: { type: Number, default: 0, index: true }, // Index for leaderboard ranking
    badges: [{ type: String }], // Stores badge names as strings
}, { timestamps: true });

module.exports = mongoose.model('UserProgress', userProgressSchema);
