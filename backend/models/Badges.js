const mongoose = require('mongoose'); // Import mongoose

const badgeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    earnedAt: { type: Date, default: Date.now }
});
