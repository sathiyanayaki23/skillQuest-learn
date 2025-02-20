const mongoose = require("mongoose");
const dailyQuestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    questId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quest', required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Expired'], default: 'Pending' },
    xpEarned: { type: Number, default: 0 },
    assignedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DailyQuest', dailyQuestSchema);
