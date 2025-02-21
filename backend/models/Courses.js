const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    difficulty: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true },
    units: [{ type: mongoose.Schema.Types.ObjectId, ref: "Unit" }], // Direct relation
    createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Course', courseSchema);
