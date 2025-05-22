const mongoose = require("mongoose");

const webinarSchema = new mongoose.Schema({
  title: String,
  speakers: [String],
  date: String,
  time: String,
  duration: String,
  description: String,
  topic: String,
  type: { type: String, enum: ['upcoming', 'past'] },
  registrationLink: String,
  recordingLink: String,
  thumbnail: String,
  attendees: Number,
  rating: Number,
  featured: Boolean,
});

module.exports = mongoose.model("Webinar", webinarSchema);
