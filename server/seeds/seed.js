const db = require("../config/connection");
const { Trip } = require("../models");

const tripData = require("./tripData.json");

db.once("open", async () => {
  await Trip.deleteMany({});

  const trips = await Trip.insertMany(tripData);
  return trips;
  console.log("Trips seeded!");
  process.exit(0);
});
