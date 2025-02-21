const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    hashedPassword: { type: String, required: true }, // Ensure hashedPassword is used
    role: { type: String, enum: ["user", "admin"], default: "user" },
    xp: { type: Number, default: 0 },
    badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }] ,
    levelsCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Level" }],
    createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.hashedPassword = await bcrypt.hash(this.password, 10);
    next();
});


// Compare Passwords
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.hashedPassword); // Fix: Compare with hashedPassword
};

module.exports = mongoose.model("User", userSchema);
