const mongoose = require("mongoose");


const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  level: String, // Beginner, Intermediate, Advanced
});



module.exports = mongoose.model('Course', courseSchema);
