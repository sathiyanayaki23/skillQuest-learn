const mongoose = require("mongoose");
const leaderboardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    xp: { type: Number, required: true, index: true }, // Index for sorting
    const topUsers = await Leaderboard.find().sort({ xp: -1 }).limit(10);

});


module.exports = mongoose.model('Leaderboard', leaderboardSchema);
