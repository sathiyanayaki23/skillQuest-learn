const badgeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    earnedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Badge', badgeSchema);
