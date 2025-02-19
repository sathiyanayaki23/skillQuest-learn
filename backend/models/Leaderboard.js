const leaderboardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    xp: { type: Number, required: true },
    rank: { type: Number }
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
