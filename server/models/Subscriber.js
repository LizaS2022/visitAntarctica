const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const SubscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
});

const Subscriber = model("Subscriber", SubscriberSchema, "Subscriber");

module.exports = Subscriber;
