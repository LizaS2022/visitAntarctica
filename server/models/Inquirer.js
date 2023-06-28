const { Schema, model } = require("mongoose");

const InquirySchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },

  message_title: {
    type: String,
    required: true,
    maxlength: 255,
  },

  message: {
    type: String,
    required: true,
  },
});

const Inquirer = model("Inquirer", InquirySchema, "Inquirer");

module.exports = Inquirer;
