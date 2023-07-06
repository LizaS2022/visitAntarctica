const db = require("../config/connection");
const { Trip } = require("../models");
const tripSeeds = require("./tripSeeds.json");

db.once("open", async () => {
  try {
    await Trip.deleteMany({});
    await Trip.create(tripSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
