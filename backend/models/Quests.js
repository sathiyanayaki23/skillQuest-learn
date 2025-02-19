const QuestSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    starterCode: { type: String, required: true },
    expectedOutput: { type: mongoose.Schema.Types.Mixed, required: true },
    testCases: { type: [String], required: true },
    difficulty: { 
        type: String, 
        enum: ['Easy', 'Medium', 'Hard'], 
        required: true 
    },
    hints: { type: [String], default: [] },
    xpReward: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Quest', QuestSchema);
