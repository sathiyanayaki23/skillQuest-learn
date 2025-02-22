const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    title: String,
    description: String,
    difficulty: String
});

module.exports = mongoose.model('Exercise', exerciseSchema);
