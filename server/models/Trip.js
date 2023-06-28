const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const TripSchema = new Schema({
  image: {
    type: String,
  },

  title: {
    type: String,
    required: true,
    trim: true,
  },
  trip_duration: {
    type: Number,
  },

  trip_description: {
    type: String,
    required: true,
  },
  max_voyagers: {
    type: Number,
  },
});

const Trip = model("Trip", TripSchema, "Trip");

module.exports = Trip;
