const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const TripSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  start_date_trip: {
    type: Date,
  },
  end_date_trip: {
    type: Date,
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
