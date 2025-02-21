const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    unitId: { type: mongoose.Schema.Types.ObjectId, ref: "Unit", required: true },
    content: { type: String, required: true },
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
    xpReward: { type: Number, default: 0 }
});


module.exports = mongoose.model('Lesson', LessonSchema);
