const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    levelNumber: { type: Number, required: true, unique: true }, // e.g., Level 1, Level 2
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Level', LevelSchema);
