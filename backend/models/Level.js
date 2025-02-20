const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    levelNumber: { type: Number, required: true }, // Remove `unique: true` to allow multiple levels in different courses
}, { timestamps: true });

module.exports = mongoose.model('Level', LevelSchema);
