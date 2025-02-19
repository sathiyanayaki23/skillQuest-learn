const mongoose = require('mongoose');

const UnitSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    levelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Level', required: true }, // Connects to Level
    unitNumber: { type: Number, required: true }, // e.g., Unit 1.1, Unit 1.2
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Unit', UnitSchema);
