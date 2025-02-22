const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    hashedPassword: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    xp: { type: Number, default: 0 },
    badges: [{ type: String }], // Store badge names instead of IDs
    createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.hashedPassword = await bcrypt.hash(this.password, 10);
    next();
});

// Compare passwords
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.hashedPassword);
};

module.exports = mongoose.model("User", userSchema);
