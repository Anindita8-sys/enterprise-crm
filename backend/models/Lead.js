const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: String,
  company: String,
  stage: String,
  value: Number
});

module.exports = mongoose.model("Lead", LeadSchema);